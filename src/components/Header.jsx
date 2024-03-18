import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { HeaderStyle, LogoutNav, MenuLink, LoginNav } from "../styles/Header";
import { signOut, supabase } from "../api/oauth";
import { useState, useEffect } from "react";

const INITIALIZE_MENU = [
  ["feed", "MyFeed"],
  ["board", "Board"],
  ["chat", "Chat"],
  ["news", "News"],
  ["mypage", "MyPage"],
];

function Header() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

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
        <button onClick={signOut}>LogOut</button>
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
        {!session ? <LoginDisplay /> : <LogoutDisplay />}
      </div>
    </HeaderStyle>
  );
}

export default Header;
