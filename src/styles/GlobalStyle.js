import { createGlobalStyle } from "styled-components";

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
    font-weight: 700;
  }
  html{
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
