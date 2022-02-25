import styled from "styled-components";


export const Buttons = styled.div`
    display:flex;
    width: 260px;
    justify-content: space-between;
    button{
        border: 0;
    }
    .btn--save{
        width: 163px;
        height:38px;
        color: var(--grey0);
        background-color: var(--primaryDisabled);
        border-radius:4px;
        &:hover{
            cursor: pointer;
            background-color:var(--primary);
        }
    }
    .btn--remove{
        width: 78px;
        height:38px;
        color: var(--grey0);
        background-color: var(--grey1);
        border-radius:3px;
        &:hover{
            cursor: pointer;
            background-color: var(--grey2);
        }
    }
    @media screen and (min-width: 600px) {
        width: 325px;
        button{
            font-size: 16px;
        }
        .btn--save{
            width: 204px;
            height: 48px;
        }
        .btn--remove{
            width:98px;
            height: 48px;
        }
    }
`