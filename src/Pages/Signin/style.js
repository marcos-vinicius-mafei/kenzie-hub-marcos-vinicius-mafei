import styled from "styled-components";


export const Container = styled.div`
    padding-top: 50px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`

export const FancyForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 17px;
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: center;
    background-color: var(--grey3);
    width: 300px;
    padding-top: 34px;
    padding-bottom: 34px;
    border-radius:3px;

    .title{
        display: flex;
        flex-direction: column;
        gap: 17px;
        text-align: center;
        h3{
            font-size:14px;
            color: var(--grey0)
        }
        span{
            font-size:10px;
            color:var(--grey1) ;
        }
    }
    button{
        background-color: var(--primaryDisabled);
    }

    @media screen and (min-width: 600px){
        width: 370px;
        padding-top: 42px;
        padding-bottom: 42px;
        .title{
            gap: 22px;
            h3{
                font-size: 18px;
            }
            span{
                font-size: 12px;
            }
        }
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;

    button{
        width: 80px;
        height:25.5px;
        background-color: var(--grey3);
        color: var(--grey0);
        border-radius:4px;
        border: 0;
    }
    @media screen and (min-width:600px){
        width: 370px;
        img{
            width: 122px;
        }
        button{
            width: 67px;
            height: 32px;
        }
    }
`