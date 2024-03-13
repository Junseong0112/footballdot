import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ColorTheme } from "./GlobalStyle";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 4.375rem;

  > div {
    max-width: 64rem;
    height: 100%;
    padding: 0.625rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
      height: 100%;
      > img {
        width: 3.125rem;
      }
    }
  }
`;

export const LogoutNav = styled.nav`
  display: flex;
  gap: 0.625rem;
  align-items: center;

  button {
    border: 0;
    outline: none;
    padding: 0.625rem 0.9375rem;
    border-radius: 20px;
    cursor: pointer;
    background-color: ${ColorTheme["green2"]};
    color: ${ColorTheme["white"]};
    transition: 0.3s all;
    font-size: 14px;
    &:hover {
      background-color: ${ColorTheme["green1"]};
    }
  }

  > ul {
    display: flex;
    gap: 0.625rem;
    align-items: center;
    > li {
      padding: 0 0.9375rem;
      border-radius: 20px;
      font-size: 14px;
      > a {
        display: block;
        position: relative;
        padding: 0.625rem 0;
        &:hover {
          color: ${ColorTheme["red"]};
          &:hover::after {
            top: 0;
          }
        }

        &::after {
          content: "";
          position: absolute;
          top: -100%;
          right: 0;
          width: 0.375rem;
          height: 0.375rem;
          background-color: ${ColorTheme["red"]};
          border-radius: 50%;
          transition: 0.3s all;
        }
      }
    }
  }
`;

export const MenuLink = styled(NavLink)`
  &.active {
    color: ${ColorTheme["red"]};
    &::after {
      top: 0;
    }
  }
`;

export const LoginNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5625rem;

  > a {
    display: block;
    padding: 0.625rem 1.5625rem;
    border-radius: 20px;
    border: 1px solid ${ColorTheme["green2"]};
    transition: 0.3s all;
    font-size: 0.875rem;

    &:hover {
      background-color: ${ColorTheme["green2"]};
      color: ${ColorTheme["white"]};
    }
  }
`;
