import styled from 'styled-components';
const RollDice = ({currentDice,RollDiceFunction}) => {
 
  return (
    <DiceContainer>
        <div className='dice'>
            <img 
            onClick={RollDiceFunction}
            src={`/images/dice/dice_${currentDice}.png`}  
            alt={`Dice ${currentDice}`} />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`;