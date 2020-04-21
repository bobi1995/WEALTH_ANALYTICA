import React, { useState } from "react";
import axios from "axios";
const AddUser = () => {
  const [loading, setLoading] = useState(false);

  const submitNewUser = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname: document.getElementById("addUser-firstName").value,
      lastname: document.getElementById("addUser-lastName").value,
      email: document.getElementById("addUser-email").value,
      CompanyPhone: document.getElementById("addUser-phone").value,
      password: document.getElementById("addUser-password").value,
      Guid: sessionStorage.getItem("Guid"),
    };
    console.log(data);
    if (
      data.password !== document.getElementById("addUser-confirmPassword").value
    ) {
      setLoading(false);

      alert("Passwords don't match");
    } else if (data.password.length < 6) {
      setLoading(false);

      alert("Password must be at least 7 symbols");
    } else {
      axios
        .post(
          `http://pensionswebapi.azurewebsites.net/api/Users/CreateCompanyUser`,
          data
        )
        .then((res) => {
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className="onepager-chart-content responsive-table-div">
      <h1 className="purchase-totalAmount">Add New User</h1>
      <form onSubmit={submitNewUser}>
        <div className="div-label">
          <label className="addUser-label">
            <span className="addUser-span">First Name</span>
            <input
              className="login-input"
              type="text"
              autoComplete="off"
              id="addUser-firstName"
              required
            />
          </label>
          <label className="addUser-label">
            <span className="addUser-span">Last Name</span>
            <input
              className="login-input"
              id="addUser-lastName"
              type="text"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className="div-label">
          <label className="addUser-label">
            <span className="addUser-span">Email</span>
            <input
              className="login-input"
              id="addUser-email"
              type="email"
              autoComplete="off"
              required
            />
          </label>
          <label className="addUser-label">
            <span className="addUser-span">Phone</span>
            <input
              className="login-input"
              id="addUser-phone"
              type="text"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className="div-label">
          <label className="addUser-label">
            <span className="addUser-span">Password</span>
            <input
              className="login-input"
              id="addUser-password"
              type="password"
              autoComplete="off"
              required
            />
          </label>
          <label className="addUser-label">
            <span className="addUser-span">Confirm Password</span>
            <input
              type="password"
              id="addUser-confirmPassword"
              required
              className="login-input"
              autoComplete="off"
            />
          </label>
        </div>
        <input className="submit" type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
