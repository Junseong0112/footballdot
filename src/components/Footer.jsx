import {
  FooterStyle,
  FooterTextSection,
  FooterImgSection,
} from "../styles/Footer";
import ReactLogo from "../assets/react.svg";
import JavaScriptLogo from "../assets/javascript.svg";

function Footer() {
  return (
    <FooterStyle>
      <section>
        <FooterTextSection>
          <h2>포트폴리오 용도로 제작되었습니다.</h2>
          <p>
            <strong>크롬 브라우저에 최적화되어있습니다.</strong>
            사이트가 이상하게 보이면 브라우저 설정에서 캐시를 삭제해주세요.
          </p>
          <p>© 2024 DrawCodes. All rights reserved.</p>
        </FooterTextSection>
        <FooterImgSection>
          <ul>
            <li>
              <img src={JavaScriptLogo} alt="javascript-logo" />
            </li>
            <li>
              <img src={ReactLogo} alt="react-logo" />
            </li>
          </ul>
        </FooterImgSection>
      </section>
    </FooterStyle>
  );
}

export default Footer;
