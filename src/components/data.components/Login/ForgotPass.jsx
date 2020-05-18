import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../global/endpointAddress";

export default () => {
  const [email, setEmail] = useState("");
  const sendNewPassword = (e) => {
    e.preventDefault();

    axios
      .post(`${apiAddress}/api/Users/ForgotPassword?email=${email}`)
      .then((res) => {
        document.getElementById("passwordForgot-close").click();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div id="popupPasswordForgot" className="popupFilter">
      <div className="popup-filter-content">
        <h2>We will send you new password</h2>
        <a
          className="close"
          href="#"
          id="passwordForgot-close"
          style={{ paddingLeft: 10 }}
        >
          &times;
        </a>
        <form onSubmit={sendNewPassword}>
          <div className="onepager-top-fromto-inner">
            <label className="filter-name-label">Email: </label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              required
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="filter-main-search-btn">
            <button
              className="filter-name-btn"
              id="submit-save-btn"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
