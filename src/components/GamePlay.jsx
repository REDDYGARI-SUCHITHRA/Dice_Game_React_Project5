import { useState } from 'react';
import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import RollDice from './RollDice';
import { Button ,Outline} from './Buttons/Button';
import Rules from './Rules';
const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);

  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  }
  const RollDiceFunction=()=>{
    if(!selectedNumber)
      {
        setError("Please Select the Number");
        return;
      }
      setError("");
    const randomValue=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomValue);
    if(selectedNumber===randomValue)
    {
      setScore((prev)=>prev+randomValue);
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
  }

  const resetScore=()=>{
    setScore(0);
  }
  const ShowRulesToggle=()=>{
    setShowRules((prev)=>!prev);
  }
  
  return (
    <MainContainer>
    <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector 
        error={error} 
        setError={setError}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber} />
    </div>
    <RollDice currentDice={currentDice} RollDiceFunction={RollDiceFunction} />
    <div className='btns'>
      <Outline onClick={resetScore}>Reset Score</Outline>
      <Button onClick={ShowRulesToggle}>{showRules?"Hide":"Show"} Rules</Button>
      {showRules && <Rules />}
    </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer=styled.main`
padding-top:70px;
.top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 10px 15px;    
}
.btns{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 40px;
    }
`;