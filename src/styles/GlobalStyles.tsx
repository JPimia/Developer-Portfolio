import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #111;
    color: #fff;
    overflow-y: scroll;
  }
`;

export default GlobalStyles;
