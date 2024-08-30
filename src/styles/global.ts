import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors['background']};
    color: ${(props) => props.theme.colors['base-text']};
  }
  body, input, textarea, button {
    font-family: serif;
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;