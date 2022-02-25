import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    padding-left: 12px;
    padding-right: 12px;
    justify-content: space-between;
    min-width: 280px;
    width: 100%;
    max-width: 742px;
    height:49px;
    border-radius:4px;
    align-items: center;
    background-color:var(--grey4);
    h3{
        font-size: 14px;
        font-weight: bold;
        color: var(--grey0);
    }
    h4{
        font-size: 12px;
        color: var(--grey1);
        font-weight: normal;
    }
    transition: 0.6s;
    &:hover{
        transition: 0.6s;
        cursor: pointer;
        background-color: var(--grey2);
        h4{
            color: var(--grey0);
        }
    }
`