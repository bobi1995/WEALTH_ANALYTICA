import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import "../styles/pages/login.scss";
import history from "../history/history";
import mySvg from "../styles/images/redo.svg";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");

  const clicked = () => {
    document.querySelector(".cont").classList.toggle("s--signup");
  };

  //*******SETTING LOGIN DETAILS************* */
  const onLoginEmailChange = e => {
    const email = e.target.value;
    setLoginEmail(email);
  };

  const onLoginPasswordChange = e => {
    const password = e.target.value;
    setLoginPassword(password);
  };
  //*******SETTING REGISTER DETAILS********* */
  const onFirstNameChange = e => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onLastNameChange = e => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onEmailChange = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const onPasswordChange = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const onPasswordConfirmChange = e => {
    const passConfirm = e.target.value;
    setConfirmPassword(passConfirm);
  };

  const onCompanyChange = e => {
    const companyName = e.target.value;
    setCompanyName(companyName);
  };

  const onAddressChange = e => {
    const address = e.target.value;
    setAddress(address);
  };

  /************Functionalities **************/

  const popupfunction = () => {
    document.getElementById("popmeup").click();
  };

  const loginBtn = () => {
    document.getElementById("popup1").style.visibility = "hidden";
    clicked();
  };
  /****************SUBMITTING**************** */

  const onSubmitLogin = e => {
    e.preventDefault();
    setLoading(true);

    axios
      .get(
        `http://pensionswebapi.azurewebsites.net/api/Users?email=${loginEmail}&password=${loginPassword}`
      )
      .then(res => {
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
          localStorage.setItem("States", res.data.States);

          history.push({
            pathname: "/dashboard",
            state: res.data
          });
        }
      })
      .catch(e => {
        console.log("here");
        alert("Wrong username or password");
        setLoading(false);
      });
  };

  const onSubmitReg = e => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      companyname: companyName,
      address: address
    };

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      setLoading(false);
    } else {
      axios
        .post(`http://pensionswebapi.azurewebsites.net/api/Users`, data)
        .then(res => {
          if (res.status === 200) {
            setLoading(false);
            popupfunction();
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div className="cont2">
      <div expand="lg" className="login-container-fluid container-fluid">
        <h1>logo</h1>
        <h1>Welcome to Wealth Analytica</h1>
        <h1>
          <a className="login-a" href="/">
            Back to site
          </a>
        </h1>
      </div>
      <div className="cont">
        <form onSubmit={onSubmitLogin}>
          <div className="form sign-in">
            <h2 className="login-h2">Hello again,</h2>
            <div className="div-label">
              <label className="login-label">
                <span className="login-span">Email</span>
                <input
                  className="login-input"
                  type="email"
                  onChange={onLoginEmailChange}
                />
              </label>
            </div>
            <div className="div-label">
              <label className="login-label">
                <span className="login-span">Password</span>
                <input
                  className="login-input"
                  type="password"
                  onChange={onLoginPasswordChange}
                />
              </label>
            </div>
            <p className="forgot-pass">Forgot password?</p>
            {loading && (
              <img
                alt="svg"
                className="loading-img"
                align="middle"
                width={35}
                height={35}
                src={mySvg}
              />
            )}
            {!loading && (
              <input className="submit" type="submit" value="Sign In" />
            )}
          </div>
        </form>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2 className="login-h2">New here?</h2>
              <p className="login-paragr">
                Sign up and discover great amount of new opportunities!
              </p>
            </div>
            <div className="img__text m--in">
              <h2 className="login-h2">One of us?</h2>
              <p className="login-paragr">
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div onClick={clicked} className="img__btn">
              <span className="m--up login-span">Sign Up</span>
              <span className="m--in login-span">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2 className="login-h2">Time to feel like home,</h2>
            <form onSubmit={onSubmitReg}>
              <div className="div-label">
                <label className="login-label">
                  <span className="login-span">First Name</span>
                  <input
                    className="login-input"
                    type="text"
                    onChange={onFirstNameChange}
                    required
                  />
                </label>
                <label className="login-label">
                  <span className="login-span">Last Name</span>
                  <input
                    className="login-input"
                    type="text"
                    onChange={onLastNameChange}
                    required
                  />
                </label>
              </div>
              <div className="div-label">
                <label className="login-label">
                  <span className="login-span">Email</span>
                  <input
                    className="login-input"
                    type="email"
                    onChange={onEmailChange}
                    required
                  />
                </label>
              </div>
              <div className="div-label">
                <label className="login-label">
                  <span className="login-span">Password</span>
                  <input
                    className="login-input"
                    type="password"
                    onChange={onPasswordChange}
                    required
                  />
                </label>
                <label className="login-label">
                  <span className="login-span">Confirm Password</span>
                  <input
                    type="password"
                    onChange={onPasswordConfirmChange}
                    required
                    className="login-input"
                  />
                </label>
              </div>
              <div className="div-label">
                <label className="login-label">
                  <span className="login-span">Company Name</span>
                  <input
                    className="login-input"
                    type="text"
                    onChange={onCompanyChange}
                    required
                  />
                </label>
                <label className="login-label">
                  <span className="login-span">Address</span>
                  <input
                    className="login-input"
                    type="text"
                    onChange={onAddressChange}
                    required
                  />
                </label>
              </div>
              {loading && (
                <img
                  alt="svg"
                  className="loading-img"
                  align="middle"
                  width={35}
                  height={35}
                  src={mySvg}
                />
              )}
              {!loading && (
                <input className="submit" type="submit" value="Sign Up" />
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
