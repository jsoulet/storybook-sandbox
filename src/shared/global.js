import { createGlobalStyle, css } from "styled-components";

export const variables = css`
  :root {
    --color-primary: "green";
    --color-secondary: "lime";
    --color-text: "white";
  }

  [data-prefix]::before {
    content: attr(data-prefix) " ";
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    ${variables}
  }`;
