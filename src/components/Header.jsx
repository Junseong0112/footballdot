import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { HeaderStyle, LogoutNav, MenuLink, LoginNav } from "../styles/Header";

const INITIALIZE_MENU = [
  ["feed", "나의피드"],
  ["board", "커뮤니티"],
  ["chat", "수다방"],
  ["news", "해외뉴스"],
  ["mypage", "마이페이지"],
];

function Header() {
  const LoginDisplay = () => {
    return (
      <LoginNav>
        <Link to="login">Sign In</Link>
        <Link to="signup">Sign Up</Link>
      </LoginNav>
    );
  };

  const LogoutDisplay = () => {
    return (
      <LogoutNav>
        <button>로그아웃</button>
        <ul>
          {INITIALIZE_MENU.map((menu, idx) => (
            <li key={idx}>
              <MenuLink to={`/${menu[0]}`}>{menu[1]}</MenuLink>
            </li>
          ))}
        </ul>
      </LogoutNav>
    );
  };

  return (
    <HeaderStyle>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <LogoutDisplay />
      </div>
    </HeaderStyle>
  );
}

export default Header;
