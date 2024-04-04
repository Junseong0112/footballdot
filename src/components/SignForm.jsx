import { useEffect, useRef } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useAuthStore, useSignValueStore } from "../store/store";
import { SignFormStyle } from "../styles/SignForm";

export default function SignForm({ isSignUp }) {
  const { values, setValues } = useSignValueStore();
  const { handleSignUp, handleSignIn, errorMessage, handleOAuthLogin } =
    useAuthStore();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ [name]: value });
  };

  const formRef = useRef();

  useEffect(() => {
    const form = formRef.current;
    if (form) form["username"].focus();
  }, []);

  const handleSignClick = async (type) => {
    const { username, password, repeatPassword } = values;

    if (type === "LOGIN") {
      handleSignIn(username, password);
    } else {
      handleSignUp(username, password, repeatPassword);
    }
    navigate("/");
  };

  return (
    <SignFormStyle>
      <h1>{isSignUp ? "SIGN UP" : "SIGN IN"}</h1>
      <ul className="links">
        <li>
          <NavLink to="/signin">SIGN IN</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SIGN UP</NavLink>
        </li>
      </ul>
      <form ref={formRef}>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Email"
          value={values.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {isSignUp && (
          <Input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat password"
            value={values.repeatPassword}
            onChange={handleChange}
          />
        )}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      {isSignUp ? (
        <Button
          className="input_btn"
          onClick={() => handleSignClick("REGISTER")}
        >
          Sign up
        </Button>
      ) : (
        <Button className="input_btn" onClick={() => handleSignClick("LOGIN")}>
          Sign in
        </Button>
      )}
      {!isSignUp && (
        <>
          <p className="separator">OR</p>
          <article className="icon_btn">
            <Button
              className="google_btn"
              onClick={() => handleOAuthLogin("google")}
            >
              <FaGoogle />
              {"Sign in with Google"}
            </Button>
            <Button
              className="github_btn"
              onClick={() => handleOAuthLogin("github")}
            >
              <FaGithub />
              {"Sign in with GitHub"}
            </Button>
          </article>
        </>
      )}
    </SignFormStyle>
  );
}
