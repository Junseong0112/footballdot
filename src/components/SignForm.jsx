import { useEffect, useRef } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useSignValueStore } from "../store/store";
import { SignFormStyle } from "../styles/SignForm";

export default function SignForm({ isSignUp }) {
  const { values, setValues } = useSignValueStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ [name]: value });
    console.log(name, value);
  };
  const formRef = useRef();

  useEffect(() => {
    const form = formRef.current;
    if (form) form["username"].focus();
  }, []);

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
        <article>
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
        </article>
        <Button>{isSignUp ? "Sign up" : "Sign in"}</Button>
      </form>
      <p className="separator">OR</p>
      <article className="icon_btn">
        <Button className="google_btn">
          <FaGoogle />
          {"Sign in with Google"}
        </Button>
        <Button className="github_btn">
          <FaGithub />
          {"Sign in with GitHub"}
        </Button>
      </article>
    </SignFormStyle>
  );
}
