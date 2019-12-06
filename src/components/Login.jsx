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
        console.log(res);
        if (res.status === 200) {
          setLoading(false);
          sessionStorage.setItem("logged", true);
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
            <h2>Hello again,</h2>
            <div className="div-label">
              <label>
                <span>Email</span>
                <input type="email" onChange={onLoginEmailChange} />
              </label>
            </div>
            <div className="div-label">
              <label>
                <span>Password</span>
                <input type="password" onChange={onLoginPasswordChange} />
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
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div onClick={clicked} className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <form onSubmit={onSubmitReg}>
              <div className="div-label">
                <label>
                  <span>First Name</span>
                  <input type="text" onChange={onFirstNameChange} required />
                </label>
                <label>
                  <span>Last Name</span>
                  <input type="text" onChange={onLastNameChange} required />
                </label>
              </div>
              <div className="div-label">
                <label>
                  <span>Email</span>
                  <input type="email" onChange={onEmailChange} required />
                </label>
              </div>
              <div className="div-label">
                <label>
                  <span>Password</span>
                  <input type="password" onChange={onPasswordChange} required />
                </label>
                <label>
                  <span>Confirm Password</span>
                  <input
                    type="password"
                    onChange={onPasswordConfirmChange}
                    required
                  />
                </label>
              </div>
              <div className="div-label">
                <label>
                  <span>Company Name</span>
                  <input type="text" onChange={onCompanyChange} required />
                </label>
                <label>
                  <span>Address</span>
                  <input type="text" onChange={onAddressChange} required />
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

      <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Congratulations</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="popup-content">
            You are now part of the StotinkiBG family!
          </div>
          <div className="popup-btn-div">
            <button className="popup-btn" onClick={loginBtn}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
