import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

export default function SignForm({ signValue }) {
  let SignValues = (
    <>
      <Input id="username" name="username" type="text" placeholder="Email" />
      <Input id="password" name="password" type="text" placeholder="Password" />
      <Input
        id="repeat__password"
        name="repeat__password"
        type="text"
        placeholder="Repeat password"
      />
    </>
  );
  if (signValue === "SIGN IN") {
    SignValues = (
      <>
        <Input id="username" name="username" type="text" placeholder="Email" />
        <Input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
        />
      </>
    );
  }

  return (
    <>
      <h1>{signValue}</h1>
      <div>
        <Link to="/signin">SIGN IN</Link>
        <Link to="/signup">SIGN UP</Link>
      </div>
      <form>
        <article>{SignValues}</article>
        <Button>{"Sign in"}</Button>
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
