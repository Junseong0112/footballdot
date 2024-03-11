import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body{
    font-family: 'Pretendard-Regular', -apple-system, sans-serif;
    font-size: 1rem;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  ul,li{
    list-style: none;
  }
`;
