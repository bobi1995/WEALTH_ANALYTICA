import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../global/endpointAddress";
import Loader from "./data.components/dashboardFunctions/loader";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const submitRequest = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      firstname: firstName,
      lastname: lastName,
      companyname: company,
      email,
      phone,
      comment,
    };
    axios
      .post(`${apiAddress}/api/Demos`, data)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          alert(
            "Your meeting request is sent. We will reach you to schedule it."
          );
          window.location.href = "https://wealthanalytica.com/";
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong. Please try again.");
        window.location.reload();
      });
  };

  return (
    <div>
      <section className="clientDash-img">
        <h1 className="onePager-header1" style={{ fontSize: 45, padding: 0 }}>
          Schedule your Demo
        </h1>
      </section>
      <div className="onepager-charts-all">
        <div className="freestates-div-content responsive-table-div">
          <h1 className="purchase-totalAmount">Request a Demo</h1>
          <form onSubmit={submitRequest}>
            <div className="div-label">
              <label className="addUser-label">
                <span className="addUser-span">First Name</span>
                <input
                  onChange={onChangeFirstName}
                  className="login-input"
                  type="text"
                  autoComplete="off"
                  required
                />
              </label>
              <label className="addUser-label">
                <span className="addUser-span">Last Name</span>
                <input
                  onChange={onChangeLastName}
                  className="login-input"
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
                  onChange={onChangeEmail}
                  className="login-input"
                  type="email"
                  autoComplete="off"
                  required
                />
              </label>
              <label className="addUser-label">
                <span className="addUser-span">Company</span>
                <input
                  onChange={onChangeCompany}
                  className="login-input"
                  type="text"
                  autoComplete="off"
                  required
                />
              </label>
            </div>
            <div className="div-label">
              <label className="addUser-label">
                <span className="addUser-span">Phone</span>
                <input
                  className="login-input"
                  type="text"
                  autoComplete="off"
                  onChange={onChangePhone}
                />
              </label>
              <label className="addUser-label">
                <span className="addUser-span">Comment</span>
                <input
                  type="text"
                  className="login-input"
                  autoComplete="off"
                  onChange={onChangeComment}
                />
              </label>
            </div>
            {loading ? (
              <Loader />
            ) : (
              <input className="submit" type="submit" value="Request" />
            )}
          </form>
        </div>
        <div className="freestates-div-content responsive-table-div">
          <h1 className="purchase-totalAmount">Demo Meeting Content</h1>
          <p style={{ textAlign: "left", lineHeight: 2 }}>
            Requesting a meeting will allow you to see how Wealth Analytica
            works. We will present you examples including:
            <br /> ◆ Advisor Dashboard functionalities
            <br /> ◆ Filter engine work
            <br /> ◆ Bookmarks with potential and already existing clients
            <br /> ◆ One Pager and its features – Location finder and email
            functionality
            <br /> ◆ Plan Profile
            <br /> ◆ Business account management engine
            <br /> ◆ Purchasing functionality Feel free to book a meeting in
            your best suitable time and we will approve it as soon as possible.
          </p>
        </div>
      </div>
      {loading ? (
        ""
      ) : (
        <div className="forgot-pass">
          <a
            className="submit"
            style={{
              backgroundColor: "#81AAC6",
              paddingTop: 3,
              marginBottom: 20,
              marginTop: "3%",
              color: "white",
            }}
            href="https://wealthanalytica.com/"
          >
            Back to Site
          </a>
        </div>
      )}
    </div>
  );
};

export default Demo;
