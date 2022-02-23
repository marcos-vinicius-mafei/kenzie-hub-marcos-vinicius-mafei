import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1px;

        .label{
            color: var(--grey0);
            font-size: 12px;
            margin-bottom: 17px;
        }

        .select{
            color: var(--grey1) !important;
            height: 40px;
            width: 260px;
            font-family: 'Inter',sans-serif !important;
            font-size: 13px !important;
            background-color: var(--grey2);
        }
    @media screen and (min-width: 600px){
        .select{
            width:325px;
            height:48px;
            font-size: 16px !important;
        }
    }
`

