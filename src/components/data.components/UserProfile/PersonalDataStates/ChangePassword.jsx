import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../../global/endpointAddress";

export default () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = (e) => {
    e.preventDefault();
    const data = {
      oldpassword: oldPassword,
      newPassword: newPassword,
    };
    axios
      .post(`${apiAddress}/api/Users/ChangePassword`, data, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
        },
      })
      .then((res) => {
        document.getElementById("changePassword-close").click();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };
  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div id="popupChangePasswod" className="popupFilter">
      <div className="popup-filter-content" style={{ width: 600 }}>
        <h2>Change password</h2>
        <a
          className="close"
          href="#"
          id="changePassword-close"
          style={{ paddingLeft: 10 }}
        >
          &times;
        </a>
        <form onSubmit={changePassword}>
          <div className="onepager-top-fromto-inner">
            <label className="filter-name-label" style={{ width: "50%" }}>
              Old Password:
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your old password"
              autoComplete="off"
              required
              value={oldPassword}
              onChange={onChangeOldPassword}
            />
          </div>
          <div className="onepager-top-fromto-inner">
            <label className="filter-name-label" style={{ width: "50%" }}>
              New Password:
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your new password"
              autoComplete="off"
              required
              value={newPassword}
              onChange={onChangeNewPassword}
            />
          </div>
          <div className="filter-main-search-btn">
            <button
              className="filter-name-btn"
              id="submit-save-btn"
              type="submit"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
