import styled, { css } from "styled-components";
import { ColorTheme } from "./GlobalStyle";

const maxWdth = css`
  max-width: 680px;
  width: 100%;
`;

export const SignFormStyle = styled.div`
  margin: 120px auto;
  ${maxWdth}
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
        font-weight: bolder;
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
    ${maxWdth}
    margin: 40px auto 10px;
    article {
      input {
        ${maxWdth}
        display: block;
        height: 50px;
        margin: 20px auto;
        border-radius: 8px;
        border: none;
        background: rgba(15, 19, 42, 0.1);
        color: rgba(15, 19, 42, 0.3);
        padding: 0 0 0 15px;
        font-size: 14px;
        &:focus,
        &:active {
          border: none;
          color: #0f132a;
        }
      }
    }
    button {
      ${maxWdth}
      background: ${ColorTheme["red"]};
      color: ${ColorTheme["white"]};
      display: block;
      height: 50px;
      border-radius: 8px;
      margin: 0 auto;
      border: none;
      cursor: pointer;
      font-size: 14px;
      box-shadow: 0 15px 30px rgba(233, 30, 99, 0.36);
      transition: 0.2s linear;
      &:hover {
        box-shadow: 0 0 0 rgba(233, 30, 99, 0);
      }
    }
  }

  .separator {
    ${maxWdth}
    display: block;
    margin: 30px auto 10px;
    text-align: center;
    height: 40px;
    position: relative;
    background: transparent;
    color: rgba(15, 19, 42, 0.4);
    font-size: 13px;

    &::before {
      content: "";
      position: absolute;
      top: 8px;
      left: 0;
      background: rgba(15, 19, 42, 0.2);
      height: 1px;
      width: 45%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 8px;
      right: 0;
      background: rgba(15, 19, 42, 0.2);
      height: 1px;
      width: 45%;
    }
  }

  .icon_btn {
    button {
      ${maxWdth}
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px auto;
      height: 50px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 8px;
      border: none;
      line-height: 40px;
      color: ${ColorTheme["white"]};
      gap: 5px;
      > svg {
        font-size: 20px;
      }
    }
    .google_btn {
      background: #5b90f0;
      box-shadow: 0 15px 30px rgba(91, 144, 240, 0.36);
      transition: 0.2s linear;
      &:hover {
        box-shadow: 0 0 0 rgba(91, 144, 240, 0);
      }
    }
    .github_btn {
      background: #25282d;
      box-shadow: 0 15px 30px rgba(37, 40, 45, 0.36);
      transition: 0.2s linear;
      &:hover {
        box-shadow: 0 0 0 rgba(37, 40, 45, 0);
      }
    }
  }
`;
