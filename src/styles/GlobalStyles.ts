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

    background: #41e1ba;
    transition: background-color 300ms ease-in-out;

    line-height: 1.5;
  }

  .working {
    background:#ef5d50;

    button {
      background:#ef5d50 !important;
      color:#fff !important;
    }
  }

  .hidden {
    display: none;
  }
`;

export default GlobalStyles;
