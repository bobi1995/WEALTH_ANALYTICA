import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../global/endpointAddress";
import Loader from "../components/Loader/Loader";
import AlertBox from "../components/alertBox";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

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
          setAlertMessage(
            "Your meeting request is sent. We will reach you to schedule it."
          );
          setFirstName("");
          setLastName("");
          setEmail("");
          setCompany("");
          setPhone("");
          setComment("");
        }
      })
      .catch((e) => {
        setAlertMessage(
          "Something went wrong with requesting Demo. Please try again."
        );
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
        <div
          className="freestates-div-content responsive-table-div"
          style={{
            width: "40%",
            textAlign: "center",
            margin: "0 auto",
            paddingBottom: "1%",
          }}
        >
          <h1 className="purchase-totalAmount">Request a Demo</h1>
          <form onSubmit={submitRequest}>
            <div
              style={{
                display: "flex",
                marginBottom: "3%",
                justifyContent: "space-between",
              }}
            >
              <input
                onChange={onChangeFirstName}
                className="inputSignIn"
                placeholder="First Name"
                type="text"
                autoComplete="off"
                required
                style={{ width: "49%" }}
              />
              <input
                onChange={onChangeLastName}
                className="inputSignIn"
                type="text"
                placeholder="Last Name"
                autoComplete="off"
                required
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
              <input
                onChange={onChangeEmail}
                type="email"
                autoComplete="off"
                required
                className="inputSignIn"
                style={{ width: "49%" }}
                placeholder="Email"
              />
              <input
                onChange={onChangeCompany}
                type="text"
                autoComplete="off"
                required
                className="inputSignIn"
                style={{ width: "49%" }}
                placeholder="Company"
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
              <input
                type="text"
                autoComplete="off"
                onChange={onChangePhone}
                className="inputSignIn"
                style={{ width: "49%" }}
                placeholder="Phone"
              />
              <input
                type="text"
                autoComplete="off"
                onChange={onChangeComment}
                className="inputSignIn"
                style={{ width: "49%" }}
                placeholder="Comment"
              />
            </div>
            {loading ? (
              <Loader />
            ) : (
              <input className="buttonSignIn" type="submit" value="Request" />
            )}
          </form>
        </div>
        <div
          className="freestates-div-content responsive-table-div"
          style={{ marginLeft: "5%" }}
        >
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
      {/* <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FSofia&amp;src=Y3MyNGFtamwybmJmNmw1cHUydGpyYWJtOWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4"
        style={{
          border: "solid 1px #777",
          margin: "0 auto",
        }}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe> */}

      {loading ? (
        ""
      ) : (
        <div
          className="forgot-pass"
          style={{
            textAlign: "center",
            marginTop: "5%",
            marginBottom: "1%",
          }}
        >
          <a className="buttonSignIn" href="https://wealthanalytica.com/">
            Back to Site
          </a>
        </div>
      )}
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Demo;
