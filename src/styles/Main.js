import styled from "styled-components";
import { MaxWidth } from "./GlobalStyle";

export const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainSection = styled.main`
  width: 100%;
  padding: 3.125rem 0;
  position: relative;
  flex-grow: 1;

  > section {
    ${MaxWidth}
  }
`;
