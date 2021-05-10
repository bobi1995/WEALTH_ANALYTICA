import React, { useRef, useState } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import "./data.screens/SinginForm/signin.scss";
import "@material-ui/icons/Facebook";
import axios from "axios";
import apiAddress from "../global/endpointAddress";
import history from "../history/history";
import AlertBox from "../components/alertBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import ForgotPassword from "./data.screens/Login/ForgotPassword";
const useStyles = makeStyles({
  iconBtnStyle: {
    color: "#378fc3",
    fontSize: 14,
    textDecoration: "none",
    border: 0,
    borderRadius: "50%",
    boxShadow: "0 3px 5px 2px rgba(22, 56, 76, .3)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 5px",
    height: "40px",
  },
});
const SigninForm = () => {
  const classes = useStyles();
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isBusiness, setIsBusiness] = useState(false);
  const [success, setSuccess] = useState(false);

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
    e.preventDefault();
    setLoading(true);

    axios
      .get(
        `${apiAddress}/api/Users?email=${signInEmail}&password=${signInPassword}`
      )
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          localStorage.setItem("logged", true);
          localStorage.setItem("Guid", res.data.Guid);
          localStorage.setItem("FirstName", res.data.FirstName);
          localStorage.setItem("Token", res.data.Token);
          localStorage.setItem("LastName", res.data.LastName);
          localStorage.setItem("Email", res.data.Email);
          localStorage.setItem("CompanyName", res.data.CompanyName);
          localStorage.setItem("CompanyPhone", res.data.CompanyPhone);
          localStorage.setItem("Address", res.data.Address);
          localStorage.setItem("States", JSON.stringify(res.data.States));
          localStorage.setItem("LogoData", res.data.LogoData);
          localStorage.setItem("isBusiness", res.data.IsBusinessAccount);
          localStorage.setItem("CanUpdateLogo", res.data.CanUpdateLogo);
          localStorage.setItem(
            "IsChildToBusinessAccount",
            res.data.IsChildToBusinessAccount
          );

          history.push({
            pathname:
              res.data.States.length > 0
                ? res.data.States.filter((el) => {
                    return el.Type === 2;
                  }).length > 0
                  ? "/dashboard"
                  : "/filters"
                : "/purchase",
            state: res.data,
          });
        }
      })
      .catch((e) => {
        setLoading(false);
        setSuccess(false);
        setAlertMessage("Wrong username or password");
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
      CompanyPhone: "",
      companyname: "",
      address: "",
      LogoFileName: "",
      LogoData: "",
    };

    if (!firstName) {
      setSuccess(false);

      setAlertMessage("Please fill your First Name");
      setLoading(false);
      return 0;
    }
    if (!lastName) {
      setSuccess(false);

      setAlertMessage("Please fill your Last Name");
      setLoading(false);
      return 0;
    }

    if (!email) {
      setAlertMessage("Please fill your Email");
      setLoading(false);
      return 0;
    }

    if (password !== confirmPassword) {
      setSuccess(false);

      setAlertMessage("Passwords don't match");
      setLoading(false);
    } else if (password.length < 6) {
      setSuccess(false);

      setAlertMessage("Password must be at least 7 symbols");
      setLoading(false);
    } else {
      axios
        .post(`${apiAddress}/api/Users`, data)
        .then((res) => {
          if (res.status === 200) {
            setLoading(true);

            setAlertMessage(
              "You have sucessfully registered! You can login with your credentials."
            );
          }
        })
        .catch((e) => {
          setLoading(false);
          setSuccess(false);

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
              <Button
                onClick={() =>
                  setAlertMessage(
                    "Soon you will be able to make registration with your Facebook, Google or LinkedIn account. Now you can register with our registartion form down here."
                  )
                }
                className={classes.iconBtnStyle}
              >
                <i className="fa fa-facebook"></i>
              </Button>
              <Button
                className={classes.iconBtnStyle}
                onClick={() =>
                  setAlertMessage(
                    "Soon you will be able to make registration with your Facebook, Google or LinkedIn account. Now you can register with our registartion form down here."
                  )
                }
              >
                <i className="fa fa-google-plus"></i>
              </Button>
              <Button
                className={classes.iconBtnStyle}
                onClick={() =>
                  setAlertMessage(
                    "Soon you will be able to make registration with your Facebook, Google or LinkedIn account. Now you can register with our registartion form down here."
                  )
                }
              >
                <i className="fa fa-linkedin"></i>
              </Button>
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
            {loading ? (
              <CircularProgress
                size={50}
                style={{ textAlign: "center", marginTop: "5%" }}
              />
            ) : (
              <button className="buttonSignIn" onClick={signUpHandle}>
                Sign Up
              </button>
            )}
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="formSignIn" action="#">
            <h1 className="h1SingIn" style={{ color: "#378fc3" }}>
              Sign in
            </h1>
            <div className="social-container">
              <Button
                className={classes.iconBtnStyle}
                onClick={() =>
                  setAlertMessage(
                    "Soon you will be able to make login with your Facebook, Google or LinkedIn account. Now you can login with your current registered credentials"
                  )
                }
              >
                <i className="fa fa-facebook"></i>
              </Button>
              <Button
                className={classes.iconBtnStyle}
                onClick={() =>
                  setAlertMessage(
                    "Soon you will be able to make login with your Facebook, Google or LinkedIn account. Now you can login with your current registered credentials"
                  )
                }
              >
                <i className="fa fa-google-plus"></i>
              </Button>
              <Button
                className={classes.iconBtnStyle}
                onClick={() =>
                  setAlertMessage(
                    "Soon you will be able to make login with your Facebook, Google or LinkedIn account. Now you can login with your current registered credentials"
                  )
                }
              >
                <i className="fa fa-linkedin"></i>
              </Button>
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
            <ForgotPassword />
            {loading ? (
              <CircularProgress
                size={50}
                style={{ textAlign: "center", marginTop: "5%" }}
              />
            ) : (
              <button className="buttonSignIn" onClick={signInHandle}>
                Sign In
              </button>
            )}
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
            rel="noopener noreferrer"
            href="https://wealthanalytica.com/"
          >
            here
          </a>
          .
        </p>
      </footer>
      {alertMessage ? (
        <AlertBox
          text={alertMessage}
          display={setAlertMessage}
          success={success}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default SigninForm;
