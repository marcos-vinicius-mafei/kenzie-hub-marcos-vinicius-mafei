import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --primary:#FF577F;
        --primary50:#FF427F;
        --primaryDisabled:#59323F;
        --grey4:#121214;
        --grey3:#212529;
        --grey2:#343B41;
        --grey1:#868E96;
        --grey0:#F8F9FA;
        --success:#3FE864;
        --negative:#E83F5B;
    }

    body{
        font-family: 'Inter',sans-serif;
        background-color: var(--grey4);
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Inter',sans-serif;
    }

    button,input{
        font-family: inherit;
    }
`