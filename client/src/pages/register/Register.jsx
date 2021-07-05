import { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios"
import "./register.css";
import { Button, Link } from "@material-ui/core";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        await axios.post("/auth/register", user);
        history.push("/login");
      }catch(err){
        console.log(err)
      }
      
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <Link href="/" style={{ textDecoration: "none" }}>
            <h3 className="loginLogo">Stay.In</h3>
          </Link>
        </div>
        <div className="loginRight" >
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Email"
              required
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              type="password"
              ref={password}
            />
            <input
              placeholder="Password Again"
              required
              className="loginInput"
              type="password"
              ref={passwordAgain}
            />
            <Button
              variant="contained"
              color="primary"
              className="loginButton"
              type="submit"
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              className="loginRegisterButton"
              href="/login"
            >
              Log into Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
