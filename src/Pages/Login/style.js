import styled from "styled-components";

export const Container = styled.div`
    padding-top: 80px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    img{
        width: 100px;
    }
    @media screen and (min-width: 600px){
        img{
            width: 144px;
        }
    }
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
    h3{
        color: var(--grey0);
        font-size: 14px;
    }

    form{
        button{
            background-color: var(--primary);
        }
    }

    .signin{
        display: flex;
        flex-direction: column;
        gap: 17px;
        height:80px;
        align-items: center;
        margin-top:10px;
        p{
            color: var(--grey1);
            font-size: 10px;
        }
        button{
            background-color: var(--grey1)
        }
    }

    @media screen and (min-width: 600px){
        width: 370px;
        padding-top: 42px;
        padding-bottom: 42px;
        h3{
            font-size:18px;
        }
        .signin{
            p{
                font-size:12px;
            }
        }
    }
`