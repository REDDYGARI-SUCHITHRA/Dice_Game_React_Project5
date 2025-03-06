import styled from 'styled-components';
import { Button } from './Buttons/Button';
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src='/images/dices.png' alt='Dice_introduction_image'/>
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Start Game</Button>
            
        </div>
    </Container>
  )
}

export default StartGame;

const Container=styled.div`
max-width: 1280px;
height: 100vh;
display: flex;
margin: 0 auto;
justify-content: center;
align-items: center;
.content{
    justify-items: end;
 h1{
    font-size: 96px;
    white-space: nowrap;
 }
}
`;

