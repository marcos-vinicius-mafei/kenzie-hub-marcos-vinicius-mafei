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
        width: 93%;
        max-width: 780px;
        min-width:300px;
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
    @media screen and (min-width:750px){
        .infos{
            flex-direction: row;
            justify-content: space-between;
            padding-top:19px;
            padding-bottom:19px;
        }
    }
`

export const Nav = styled.nav`
    width: 93%;
    max-width: 780px;
    min-width:300px;
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
        transition: 0.6s;
        &:hover{
            background-color: var(--grey2);
            cursor: pointer;
            transition: 0.6s;
        }
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
    align-items: center;
    width: 93%;
    max-width: 780px;
    min-width:300px;
    .menu{
        display: flex;
        justify-content: space-between;
        width: 100%;
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
            transition:0.6s;
            &:hover{
                background-color: var(--grey2);
                cursor: pointer;
                transition:0.6s;
            }
        }
    }
`

export const List = styled.div`
    width: 100%;
    max-width: 780px;
    min-width:300px;
    background-color: var(--grey3);
    border-radius:4px;
    padding-top: 22px;
    padding-bottom: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul{
        width: 95%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        list-style: none;
    }
    .empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        h3{
            color: var(--grey0);
            font-size: 14px;
        }
        p{
            color: var(--grey1);
            font-size: 12px;
        }
    }
`

export const Courtain = styled.div`
    position: absolute;
    background-color: var(--courtain) ;
    width: 100%;
    height: ${(props)=> `${props.height}px`}
`