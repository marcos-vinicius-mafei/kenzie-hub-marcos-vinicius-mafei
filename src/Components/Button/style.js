import styled from "styled-components";

export const FancyButton = styled.button`

cursor: pointer;
width: 260px;
height:38.5px;
color: var(--grey0);
border-radius:4px;
border: 0;
font-size: 12px;

@media screen and (min-width:600px){
    width: 325px;
    height:48px;
    font-size: 16px;
}
`