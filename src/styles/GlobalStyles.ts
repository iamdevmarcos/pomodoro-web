import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    transition: background-color 300ms ease-in-out;
  }
`;

export default GlobalStyles;
