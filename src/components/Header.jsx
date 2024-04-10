import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { HeaderStyle, LogoutNav, MenuLink, LoginNav } from "../styles/Header";
import { useAuthStore } from "../store/store";

const INITIALIZE_MENU = [
  ["", "Home"],
  ["news", "News"],
  ["mypage", "MyPage"],
];

function Header() {
  const { handleSignOut, session } = useAuthStore();

  const LoginDisplay = () => {
    return (
      <LoginNav>
        <Link to="signin">Get Started</Link>
      </LoginNav>
    );
  };

  const LogoutDisplay = () => {
    return (
      <LogoutNav>
        <button onClick={handleSignOut}>LogOut</button>
        <ul>
          {INITIALIZE_MENU.map(([link, title], idx) => (
            <li key={idx}>
              <MenuLink to={`/${link}`}>{title}</MenuLink>
            </li>
          ))}
        </ul>
      </LogoutNav>
    );
  };

  return (
    <HeaderStyle>
      <div>
        {!session ? (
          <>
            <Link to="/signin">
              <img src={Logo} alt="logo" />
            </Link>
            <LoginDisplay />
          </>
        ) : (
          <>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <LogoutDisplay />
          </>
        )}
      </div>
    </HeaderStyle>
  );
}

export default Header;
