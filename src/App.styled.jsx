import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before , *::after{
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box !important;
  }
  body{
    font-family: sans-serif;
  }
`;
