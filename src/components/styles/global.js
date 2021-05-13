import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
    *,
    body,
    html {
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 1.2rem;
        font-family: 'Raleway', sans-seriff;
    }
`;

export default GlobalStyle;