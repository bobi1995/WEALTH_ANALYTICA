import React, { useRef, useState } from "react";
import { Box } from "@material-ui/core";
import "./data.screens/SinginForm/signin.scss";
import "@material-ui/icons/Facebook";
import axios from "axios";
import apiAddress from "../global/endpointAddress";
import history from "../history/history";
import AlertBox from "../components/alertBox";

const SigninForm = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isBusiness, setIsBusiness] = useState(false);

  const chatRef = useRef(null);

  const addClass = () => {
    const node = chatRef.current;
    node.classList.toggle("right-panel-active");
  };

  const removeClass = () => {
    const node = chatRef.current;
    node.classList.toggle("right-panel-active");
  };

  const signInHandle = (e) => {
    console.log(signInPassword, signInEmail);
    e.preventDefault();
    setLoading(true);

    axios
      .get(
        `${apiAddress}/api/Users?email=${signInEmail}&password=${signInPassword}`
      )
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          sessionStorage.setItem("logged", true);
          sessionStorage.setItem("Guid", res.data.Guid);
          sessionStorage.setItem("FirstName", res.data.FirstName);
          sessionStorage.setItem("Token", res.data.Token);
          sessionStorage.setItem("LastName", res.data.LastName);
          sessionStorage.setItem("Email", res.data.Email);
          sessionStorage.setItem("CompanyName", res.data.CompanyName);
          sessionStorage.setItem("CompanyPhone", res.data.CompanyPhone);
          sessionStorage.setItem("Address", res.data.Address);
          sessionStorage.setItem("States", JSON.stringify(res.data.States));
          sessionStorage.setItem("LogoData", res.data.LogoData);
          sessionStorage.setItem("isBusiness", res.data.IsBusinessAccount);
          sessionStorage.setItem("CanUpdateLogo", res.data.CanUpdateLogo);
          history.push({
            pathname:
              res.data.States.length > 0
                ? res.data.States.filter((el) => {
                    return el.Type === 2;
                  }).length > 0
                  ? "/dashboard"
                  : "/filters"
                : "/account",
            state: res.data,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        setAlertMessage("Wrong username or password");
        setLoading(false);
      });
  };

  const signUpHandle = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      IsBusinessAccount: isBusiness,
      CompanyPhone: phone,
      companyname: "",
      address: "",
      LogoFileName: "",
      LogoData: "",
    };
    console.log(data);

    if (password !== confirmPassword) {
      setAlertMessage("Passwords don't match");
      setLoading(false);
    } else if (password.length < 6) {
      setAlertMessage("Password must be at least 7 symbols");
      setLoading(false);
    } else {
      axios
        .post(`${apiAddress}/api/Users`, data)
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setAlertMessage(
              "You have sucessfully registered! You can login with your credentials."
            );
            window.location.reload();
          }
        })
        .catch((e) => {
          setAlertMessage(e.response.data.Message);
        });
    }
  };

  //BUSINESS ACCOUNT
  const businessChange = (e) => {
    setIsBusiness(e.target.checked);
  };

  return (
    <Box className="mainContainer">
      <h2 className="h2SignIn">
        Wealth Analytica Converts Qualified Plans into Better Results for you!
      </h2>
      <div ref={chatRef} className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="formSignIn" action="#">
            <h1 className="h1SingIn" style={{ color: "#378fc3" }}>
              Create Account
            </h1>
            <div className="social-container">
              <a href="#" className="aSignIn social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="aSignIn social">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="aSignIn social">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <span className="spanSignIn">
              or use your email for registration
            </span>
            <div
              style={{
                display: "flex",
                marginBottom: "3%",
                justifyContent: "space-between",
              }}
            >
              <input
                className="inputSignIn"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(text) => setFirstName(text.target.value)}
                style={{ width: "49%" }}
              />
              <input
                className="inputSignIn"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(text) => setLastName(text.target.value)}
                style={{ width: "49%" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                marginBottom: "3%",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "49%" }}>
                <input
                  className="inputSignIn"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(text) => setEmail(text.target.value)}
                />
              </div>
              <div style={{ width: "49%" }}>
                <label className="login-label">
                  <span className="login-span">Business account</span>

                  <div className="isBusinessLogin">
                    <input
                      type="checkbox"
                      checked={isBusiness}
                      id="isBusiness"
                      onChange={businessChange}
                      name="check"
                    />
                    <label htmlFor="isBusiness"></label>
                  </div>
                </label>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "3%",
                justifyContent: "space-between",
              }}
            >
              <input
                className="inputSignIn"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
                style={{ width: "49%" }}
              />
              <input
                className="inputSignIn"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(text) => setConfirmPassword(text.target.value)}
                style={{ width: "49%" }}
              />
            </div>

            <button className="buttonSignIn" onClick={signUpHandle}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="formSignIn" action="#">
            <h1
              className="h1SingIn"
              className="h1SingIn"
              style={{ color: "#378fc3" }}
            >
              Sign in
            </h1>
            <div className="social-container">
              <a href="#" className="aSignIn social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="aSignIn social">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="aSignIn social">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <span className="spanSignIn">or use your account</span>
            <input
              className="inputSignIn"
              type="email"
              placeholder="Email"
              style={{ marginBottom: "3%" }}
              onChange={(text) => setSignInEmail(text.target.value)}
            />
            <input
              className="inputSignIn"
              type="password"
              placeholder="Password"
              onChange={(text) => setSignInPassword(text.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button className="buttonSignIn" onClick={signInHandle}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1SingIn">Welcome Back!</h1>
              <p className="pSignIn">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="buttonSignIn ghost"
                id="signIn"
                onClick={removeClass}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1SingIn">Hello, Friend!</h1>
              <p className="pSignIn">
                Enter your personal details and start journey with us
              </p>
              <button
                className="buttonSignIn ghost"
                id="signUp"
                onClick={addClass}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p className="pSignIn">
          If you want to go to our website click &nbsp;
          <a
            className="aSignIn"
            target="_blank"
            href="https://wealthanalytica.com/"
          >
            here
          </a>
          .
        </p>
      </footer>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default SigninForm;
