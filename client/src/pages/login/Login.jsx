import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import "./login.css";
import { Button, Link, CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <Link href="/" style={{ textDecoration: "none" }}>
            <h3 className="loginLogo">Stay.In</h3>
          </Link>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <img
              src="../../public/assets/logo.jpeg"
              alt="test"
              className="test"
            />
            <div className="loginBox">
              <input
                placeholder="Email"
                className="loginInput"
                type="email"
                required
                ref={email}
              />
              <input
                placeholder="Password"
                className="loginInput"
                type="password"
                required
                minLength="6"
                ref={password}
              />
              <Button
                variant="contained"
                color="primary"
                className="loginButton"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Log In"
                )}
              </Button>
              <span className="loginForgot">Forgot Password?</span>
              <Button
                variant="contained"
                className="loginRegisterButton"
                href="/register"
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Create a New Account"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
