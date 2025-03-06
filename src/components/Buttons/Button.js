import styled from 'styled-components'
export const Button=styled.button`
padding: 10px 18px;
height: 44px;
min-width: 220px;
background:#000000;
border-radius: 5px;
color: white;
border: none;
font-size: large;
cursor: pointer;
border: 1px solid transparent;
transition: 0.3s background ease-in;
&:hover{
  background-color:white ;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}
`;
export const Outline=styled(Button)`
border: 1px solid black;
background-color: white;
color: black;
&:hover{
  background-color:black ;
  color: white;
  border: 1px solid transparent;
}
`;