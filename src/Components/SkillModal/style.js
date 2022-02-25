import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: fixed;
    background-color: var(--grey3);
    width: 300px;
    top: 150px;
    padding-bottom: 26px;
    border-radius:4px;
    .header{
        border-top-right-radius:4px;
        border-top-left-radius:4px;
        display: flex;
        justify-content: center;
        width:300px;
        padding-top:10px;
        padding-bottom: 10px;
        background-color: var(--grey2);
        
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 264px;
            height:30px;
            h3{
                font-size:11px;
                color: var(--grey0);
            }
            button{
                border: 0;
                background-color: transparent;
                color: var(--grey1);
            }
        }
    }
    .label{
            color: var(--grey0);
            font-size: 12px;
        }

    .select{
            color: var(--grey1) !important;
            height: 40px;
            width: 260px;
            font-family: 'Inter',sans-serif !important;
            font-size: 13px !important;
            background-color: var(--grey2);
    }
    form{
        button{
            background-color: var(--primary);
        }
    }
    @media screen and (min-width: 600px){
        width: 370px;
        top: 180px;
        .header{
            width: 370px;
                div{
                    width: 330px;
                    height: 40px;
                        h3{
                            font-size:14px;
                        }
                        button{
                            font-size:16px;
                        }
                }
        }
        .select{
            width:325px;
            height:48px;
            font-size: 16px !important;
        }
    }
`