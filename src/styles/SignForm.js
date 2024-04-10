import styled, { css } from "styled-components";
import { ColorTheme, FontWeight } from "./GlobalStyle";
import Button from "../components/Button";

const maxWidth = css`
  max-width: 680px;
  width: 100%;
`;

const formElement = css`
  ${maxWidth}
  margin: 20px auto;
`;

const buttonSize = css`
  display: block;
  height: 50px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
`;

export const SignFormStyle = styled.div`
  margin: 120px auto;
  ${maxWidth}

  > h1 {
    color: ${ColorTheme["red"]};
    font-size: 48px;
    letter-spacing: -2px;
    text-align: center;
    margin: 120px 0 80px 0;
    transition: 0.2s linear;
  }

  .links {
    display: flex;
    gap: 1.25rem;

    li {
      a {
        color: #0f132a;
        font-weight: ${FontWeight["bold"]};
        text-align: center;
        cursor: pointer;
        transition: 0.2s linear;
        opacity: 0.6;

        &:hover {
          opacity: 1;
        }

        &.active {
          opacity: 1;
        }
      }
    }
  }

  form {
    ${formElement}

    input {
      ${formElement}
      ${buttonSize}
      background: rgba(15, 19, 42, 0.1);
      color: rgba(15, 19, 42, 0.3);
      padding: 0 0 0 15px;

      &:focus,
      &:active {
        border: none;
        color: #0f132a;
      }
    }
  }

  .input_btn {
    ${formElement}
    ${buttonSize}
    background: ${ColorTheme["red"]};
    color: ${ColorTheme["white"]};
    cursor: pointer;

    box-shadow: 0 10px 20px rgba(233, 30, 99, 0.36);
    transition: 0.2s linear;

    &:hover {
      box-shadow: 0 0 0 rgba(233, 30, 99, 0);
    }
  }

  .separator {
    ${maxWidth}
    display: block;
    margin: 30px auto 10px;
    text-align: center;
    height: 40px;
    position: relative;
    background: transparent;
    color: rgba(15, 19, 42, 0.4);
    font-size: 13px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 8px;
      background: rgba(15, 19, 42, 0.2);
      height: 1px;
      width: 45%;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }
`;

export const AuthIcons = styled(Button)`
  ${formElement}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  height: 50px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  line-height: 40px;
  gap: 5px;
  transition: 0.2s linear;
  border: ${({ className }) =>
    className === "github_btn" ? "none" : `1px solid ${ColorTheme["gray"]}`};
  background: ${({ className }) =>
    className === "github_btn" ? "#25282d" : "transparent"};
  color: ${({ className }) =>
    className === "github_btn" ? ColorTheme["white"] : ColorTheme["gray"]};
  box-shadow: ${({ className }) =>
    className === "github_btn"
      ? "0 5px 10px rgba(37, 40, 45, 0.36)"
      : "0 5px 10px rgba(111, 111, 111, 0.36)"};

  &:hover {
    box-shadow: ${({ className }) =>
      className === "github_btn"
        ? "0 2px 4px rgba(37, 40, 45, 0.11)"
        : "0 2px 4px rgba(111, 111, 111, 0.11)"};
  }

  > svg {
    font-size: 20px;
  }
`;
