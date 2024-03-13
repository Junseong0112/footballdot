import styled from "styled-components";
import { ColorTheme, FontWeight, MaxWidth } from "./GlobalStyle";

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 2.1875rem 0;
  > section {
    ${MaxWidth}
    display: flex;
    padding: 0 0.625rem;
    justify-content: space-between;
  }
`;

export const FooterTextSection = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  > h2 {
    color: ${ColorTheme["green1"]};
    font-size: 1.25rem;
  }
  > p {
    color: ${ColorTheme["gray"]};
    font-weight: ${FontWeight["light"]};
    font-size: 0.875rem;
    > strong {
      font-size: 1.125rem;
      display: block;
      font-weight: ${FontWeight["regular"]};
      margin-bottom: 0.625rem;
    }
    &:last-child {
      font-size: 0.75rem;
      font-weight: ${FontWeight["light"]};
      margin-top: auto;
    }
  }
`;

export const FooterImgSection = styled.article`
  display: flex;
  align-items: flex-end;
  > ul {
    display: flex;
    gap: 0.9375rem;

    li > img {
      width: 3.125rem;
      object-fit: cover;
    }
  }
`;
