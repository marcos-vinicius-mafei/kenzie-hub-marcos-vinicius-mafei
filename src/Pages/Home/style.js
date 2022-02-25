import styled from "styled-components";

export const Container = styled.div`
    padding-top: 26px;
    padding-bottom: 26px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    align-items: center;
    .infos{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-top:9px;
        padding-bottom: 9px;
        width: 300px;
        h1{
            color: var(--grey0);
            font-size: 18px;
        }
        p{
            color: var(--grey1);
            font-size: 12px;
        }
    }
    .grey--line{
        border: 0;
        border-top: 1px solid var(--grey3);
        width: 100%;
    }
`

export const Nav = styled.nav`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 105px;
    }
    button{
        color: var(--grey0);
        background-color: var(--grey3);
        border: 0;
        width: 55.5px;
        height: 32px;
        border-radius:4px;
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
    align-items: center;
    .menu{
        display: flex;
        justify-content: space-between;
        width: 300px;
        align-items: center;
        h3{
            color: var(--grey0);
            font-size: 16px;
        }
        button{
            width: 32.5px;
            height: 32px;
            border: 0;
            background-color: var(--grey3);
            border-radius:4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

export const List = styled.div`
    width: 300px;
    background-color: var(--grey3);
    border-radius:4px;
    padding-top: 22px;
    padding-bottom: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul{
        display: flex;
        flex-direction: column;
        gap: 16px;
        list-style: none;
    }
`