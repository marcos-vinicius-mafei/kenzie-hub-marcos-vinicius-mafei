import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1px;
    span{
        color: var(--grey0);
        font-size: 12px;
        margin-bottom: 17px;
    }
    input{
        width: 260px;
        background-color:var(--grey2);
        height:38px;
        border: 0;
        border-radius:4px;
        padding-left: 13px;
        color: var(--grey1);
        border: 2px solid transparent;
        &:focus{
            color: var(--grey0);
            border: 2px solid var(--grey0);
        }
        &::placeholder{
            color: var(--grey1);
        }
        &:hover{
            outline: 1px solid #000;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active{
            transition: background-color 5000s ease-in-out 0s;
        }

        &:-webkit-autofill{
            -webkit-text-fill-color: var(--grey1);
        }

        &:-webkit-autofill:focus{
            -webkit-text-fill-color: var(--grey0);
        }
    }

    .btn-show-hide{
        position: absolute;
        right: 10px;
        top: 43px;
        cursor: pointer;
        color: var(--grey1);
        transition: 0.6s;
        &:hover{
            transition: 0.6s;
            color: var(--grey0);
        }
    }
    div{
        color: var(--primaryDisabled);
        font-size: 12px;
    }

    @media screen and (min-width: 600px){
        input{
            width:325px;
            height:48px;
            font-size: 16px;
        }
        .btn-show-hide{
            right: 15px;
            top: 47px;
        }
    }
`