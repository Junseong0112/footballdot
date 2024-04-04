import styled, { keyframes } from "styled-components";
import { ColorTheme } from "./GlobalStyle";

const Fade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

export const UnLogin = styled.div`
  padding: 6.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.1875rem;
  height: calc(100vh - 387px);

  h2 {
    font-size: 3rem;
  }
  p {
    letter-spacing: 2px;
    font-size: 22px;
  }
  strong {
    margin-top: 6.25rem;
    font-size: 19px;
    letter-spacing: 1.5px;
    color: ${ColorTheme["green1"]};
  }
  a {
    width: 100%;
    display: block;
    font-size: 20px;
    text-align: center;
    background-color: ${ColorTheme["green2"]};
    padding: 10px 12px;
    border-radius: 15px;
    color: ${ColorTheme["white"]};
    animation: ${Fade} 2s 1s infinite linear;
    transform: scale(0.8);
    transition: 0.3s linear;

    &:hover {
      transform: scale(1);
    }
  }
`;
