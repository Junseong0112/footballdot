import styled from "styled-components";
import { ColorTheme } from "./GlobalStyle";

export const MyPageForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 6.25rem 0;
  border: 1px solid ${ColorTheme["gray"]};
  border-radius: 25px;
  height: calc(100vh - 387px);
  h2 {
    text-align: center;
    margin: 0 0 1.5625rem;
    font-size: 2rem;
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > label,
    input {
      width: 50%;
      margin: 0 auto;
    }
    > label {
      margin: 0.9375rem 0;
    }
    > input {
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      border: 1px solid ${ColorTheme["gray"]};
    }
    button {
      margin: 1.875rem 0 0;
      padding: 12px;
      display: inline-block;
      width: 7.5rem;
      border-radius: 0.75rem;
      border: 0;
      outline: none;
      background-color: ${ColorTheme["green2"]};
      color: ${ColorTheme["white"]};
      cursor: pointer;
    }
  }
`;

export const AvatarDiv = styled.div`
  gap: 25px;
  > p {
    text-align: center;
    font-size: 24px;
    padding: 0.75rem 0;
  }
  label {
    cursor: pointer;
    padding: 10px 12px;
    border: 1px solid ${ColorTheme["black"]};
    border-radius: 8px;
    font-size: 14px;
    letter-spacing: 1.2px;
  }
  input[type="file"] {
    display: none;
  }
`;
