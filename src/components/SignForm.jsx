import { useEffect, useRef } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useSignValueStore } from "../store/store";

export default function SignForm({ isSignUp }) {
  const { values, setValues } = useSignValueStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ [name]: value });
  };
  const formRef = useRef();

  useEffect(() => {
    const form = formRef.current;
    if (form) form["username"].focus();
  }, []);

  return (
    <>
      <h1>{isSignUp ? "SIGN UP" : "SIGN IN"}</h1>
      <div>
        <Link to="/signin">SIGN IN</Link>
        <Link to="/signup">SIGN UP</Link>
      </div>
      <form ref={formRef}>
        <article>
          <Input
            type="text"
            name="username"
            placeholder="Email"
            value={values.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {isSignUp && (
            <Input
              type="password"
              name="repeatPassword"
              placeholder="Repeat password"
              value={values.repeatPassword}
              onChange={handleChange}
            />
          )}
        </article>
        <Button>{isSignUp ? "Sign up" : "Sign in"}</Button>
      </form>
      <div>
        <p>OR</p>
      </div>
      <article>
        <Button>
          <FaGoogle />
          {"Sign in with Google"}
        </Button>
        <Button>
          <FaGithub />
          {"Sign in with GitHub"}
        </Button>
      </article>
    </>
  );
}
