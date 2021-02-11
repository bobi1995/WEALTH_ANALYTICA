import React, { useRef } from "react";
import { Box } from "@material-ui/core";
import "./data.screens/SinginForm/signin.css";
import "@material-ui/icons/Facebook";

const SigninForm = () => {
  const chatRef = useRef(null);

  const addClass = () => {
    const node = chatRef.current;
    node.classList.toggle("right-panel-active");
  };

  const removeClass = () => {
    const node = chatRef.current;
    node.classList.toggle("right-panel-active");
  };

  return (
    <Box>
      <h2>
        Wealth Analytica Converts Qualified Plans into Better Results for you!
      </h2>
      <div ref={chatRef} className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <div
              style={{
                display: "flex",
                marginBottom: "3%",
                justifyContent: "space-between",
              }}
            >
              <input
                type="text"
                placeholder="First Name"
                style={{ width: "49%" }}
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{ width: "49%" }}
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              style={{ marginBottom: "3%" }}
            />
            <div
              style={{
                display: "flex",
                marginBottom: "3%",
                justifyContent: "space-between",
              }}
            >
              <input
                type="password"
                placeholder="Password"
                style={{ width: "49%" }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                style={{ width: "49%" }}
              />
            </div>

            <button className="ghost" id="signUp">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              style={{ marginBottom: "3%" }}
            />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={removeClass}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={addClass}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          If you want to go to our website click &nbsp;
          <a target="_blank" href="https://wealthanalytica.com/">
            here
          </a>
          .
        </p>
      </footer>
    </Box>
  );
};

export default SigninForm;
