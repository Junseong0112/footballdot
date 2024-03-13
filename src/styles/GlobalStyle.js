import { createGlobalStyle, css } from "styled-components";

export const ColorTheme = {
  black: "#0F0F0F",
  navy: "#3a517c",
  green1: "#005B41",
  green2: "#008170",
  white: "#ffffff",
  red: "#BE3144",
  gray: "#757b80",
};

export const FontWeight = {
  bold: "700",
  regular: "400",
  light: "200",
};

export const MaxWidth = css`
  max-width: 64rem;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-weight: ${FontWeight["bold"]};
  }
  html,body,button,
  input{
    font-family: 'Pretendard', -apple-system, sans-serif;
    font-size: 1rem;
    color: ${ColorTheme["black"]};
  }
  a{
    text-decoration: none;
    color: ${ColorTheme["black"]};
  }
  ul,li{
    list-style: none;
  }
`;
