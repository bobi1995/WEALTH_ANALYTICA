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
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileBase64, setFileBase64] = useState("");
  const [isBusiness, setIsBusiness] = useState(false);
  const clicked = () => {
    document.querySelector(".cont").classList.toggle("s--signup");
  };

  //*******SETTING LOGIN DETAILS************* */
  const onLoginEmailChange = (e) => {
    const email = e.target.value;
    setLoginEmail(email);
  };

  const onLoginPasswordChange = (e) => {
    const password = e.target.value;
    setLoginPassword(password);
  };
  //*******SETTING REGISTER DETAILS********* */
  const onFirstNameChange = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onLastNameChange = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onPhoneChange = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onPasswordConfirmChange = (e) => {
    const passConfirm = e.target.value;
    setConfirmPassword(passConfirm);
  };

  const onCompanyChange = (e) => {
    const companyName = e.target.value;
    setCompanyName(companyName);
  };

  const onAddressChange = (e) => {
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

  const onSubmitLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .get(
        `http://pensionswebapi.azurewebsites.net/api/Users?email=${loginEmail}&password=${loginPassword}`
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
          sessionStorage.setItem("States", res.data.States);
          sessionStorage.setItem("LogoData", res.data.LogoData);
          sessionStorage.setItem("BasicStates", res.data.BasicStates);
          sessionStorage.setItem("isBusiness", res.data.IsBusinessAccount);

          history.push({
            pathname:
              res.data.States.length > 0
                ? "/dashboard"
                : res.data.BasicStates.length > 0
                ? "/filters"
                : "/profile",
            state: res.data,
          });
        }
      })
      .catch((e) => {
        alert("Wrong username or password");
        setLoading(false);
      });
  };

  const onSubmitReg = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      CompanyPhone: phone,
      password: password,
      companyname: companyName,
      address: address,
      IsBusinessAccount: isBusiness,
      LogoFileName: fileName,
      LogoData: fileBase64,
    };

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      setLoading(false);
    } else if (password.length < 6) {
      alert("Password must be at least 7 symbols");
      setLoading(false);
    } else {
      axios
        .post(`http://pensionswebapi.azurewebsites.net/api/Users`, data)
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            popupfunction();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  //BUSINESS ACCOUNT
  const businessChange = (e) => {
    setIsBusiness(e.target.checked);
  };
  //FILE UPLOAD AND PICK
  const uploadFile = () => {
    const file = document.getElementById("fileID");
    file.click();
  };

  const pickFile = async () => {
    document.getElementById(
      "upload-control"
    ).placeholder = document.getElementById("fileID").files[0].name;
    const file = await toBase64(document.getElementById("fileID").files[0]);
    const parts = file.split(",");
    setFileName(document.getElementById("fileID").files[0].name);
    setFileBase64(parts[1]);
  };

  //FILE TO BASE64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  return (
    <div className="cont2">
      <div
        expand="lg"
        className="login-container-fluid container-fluid dashboard-diagrams"
      >
        <img
          id="logoimg"
          className="login-logo"
          src={require("../styles/images/transparent-black.png")}
          alt="no_image"
        />
        <h1>Welcome to Wealth Analytica</h1>
        <h1>
          <a className="login-a" href="http://wealthanalytica.com/">
            Back to site
          </a>
        </h1>
      </div>
      <div className="cont">
        <form onSubmit={onSubmitLogin}>
          <div className="form sign-in">
            <h2 className="login-h2 login-colored">Hello again,</h2>
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
            <p className="forgot-pass">
              <a href="/">Forgot password?</a>
            </p>
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
            <h2 className="login-h2 login-colored">Time to feel like home,</h2>
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
                <label className="login-label">
                  <span className="login-span">Phone</span>
                  <input
                    className="login-input"
                    type="text"
                    onChange={onPhoneChange}
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
              <div className="div-label">
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

                <label className="login-label">
                  <span className="login-span">Upload Logo</span>
                  <div className="form-group">
                    <input
                      type="file"
                      name="img[]"
                      className="file"
                      id="fileID"
                      onChange={pickFile}
                    />
                    <div className="input-group col-xs-12">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-picture"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control input-lg"
                        id="upload-control"
                        disabled
                        placeholder="Upload Image"
                      />
                      <span className="input-group-btn">
                        <button
                          className="browse btn btn-primary input-lg"
                          type="button"
                          onClick={uploadFile}
                        >
                          <i className="glyphicon glyphicon-search"></i> Browse
                        </button>
                      </span>
                    </div>
                  </div>
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
