import "./register.css";
import { Button, Link } from "@material-ui/core";
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <Link href="/" style={{ textDecoration: "none" }}>
            <h3 className="loginLogo">Stay.In</h3>
          </Link>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" type="password" />
            <input placeholder="Password Again" className="loginInput" type="password" />
            <Button variant="contained" color="primary" className="loginButton" href="/login">
              Sign Up
            </Button>
            <Button
              variant="contained"
              className="loginRegisterButton"
              href="/login"
            >
              Log into Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
