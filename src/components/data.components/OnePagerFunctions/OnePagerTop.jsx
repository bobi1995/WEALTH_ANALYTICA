import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dashboardFunctions from "../dashboardFunctions/functions";
import OnePagerContact from "../OnePagerFunctions/OnePagerContact";
import apiAddress from "../../../global/endpointAddress";
import commonFunctions from "../commonFunctions/common";
import commonExtract from "../commonFunctions/commonExtracts";
const OnePagerTop = (props) => {
  let flagBasic = 0;
  commonExtract.extractStates().forEach((el) => {
    if (props.state == el.State) {
      flagBasic = 1;
    }
  });

  window.onclick = function(event) {
    if (document.getElementById("alert-popupid")) {
      document.getElementById("alert-popupid").style.display = "none";
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const sendUrl = `${apiAddress}/api/SmallCompanies/SendEmail`;
    document.getElementById("alert-popupid").style.display = "block";

    document.getElementById("message-alert-box").innerHTML =
      "Sending...Please wait";
    const mailData = {
      from: `${document.getElementById("fromEmail").value}`,
      to: `${document.getElementById("toEmail").value}`,
      subject: `${document.getElementById("subject").value}`,
      message: `${document.getElementById("emailText").value}`,
      CompanyId: `${props.data}`,
    };
    console.log(mailData);
    axios
      .post(sendUrl, mailData, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        document.getElementById("emailform").style.display = "none";
        document.getElementById("mainbuttons").style.display = "block";

        document.getElementById("alert-popupid").style.display = "block";
        document.getElementById("message-alert-box").innerHTML =
          "Successfully sent";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("alert-popupid").style.display = "block";

        document.getElementById("message-alert-box").innerHTML =
          "Some error occured. Message not sent.";
      });
  };
  const showSendEmail = () => {
    document.getElementById("emailform").style.display = "block";
    document.getElementById("mainbuttons").style.display = "none";
  };
  const cancelEmailSend = (e) => {
    e.preventDefault();
    document.getElementById("emailform").style.display = "none";
    document.getElementById("mainbuttons").style.display = "block";
  };
  return (
    <div className="onepager-top-div-main">
      {/******ALERT */}
      <div id="alert-popupid" className="portfolio-popup">
        <div className="portfolio-popup-content">
          <h2 id="message-alert-box"></h2>
        </div>
      </div>

      <div id="mainbuttons">
        <button
          onClick={showSendEmail}
          className="btn btn-success btn-lg onepagertopbuttons"
        >
          Send Email
        </button>
        {flagBasic == 0 ? (
          <button className="btn btn-warning btn-lg onepagertopbuttons">
            <Link
              className="onePager-Link"
              to={{
                pathname: `/planprofile/${props.data}`,
              }}
              target="_blank"
            >
              Client Plan Analytic
            </Link>
          </button>
        ) : (
          <button
            className="btn btn-warning btn-lg onepagertopbuttons onepager-pesion-description"
            disabled
          >
            <span className="onepager-tooltip">
              Plan available in Premium Version
            </span>
            Client Plan Analytics
          </button>
        )}
      </div>
      <div
        id="emailform"
        className="onepager-top-emailform"
        data-html2canvas-ignore
      >
        <form onSubmit={sendEmail}>
          <div className="onepager-top-mainemail">
            <div className="onepager-emailform-email">
              {Object.values(props.contact).some((x) => x !== null) ? (
                <div
                  className="plan-profile-chartsDiv"
                  style={{ marginLeft: "3%" }}
                >
                  <OnePagerContact
                    contact={props.contact}
                    headWidth="50"
                    heading="Executive Contact"
                  />
                </div>
              ) : (
                <img
                  className="plan-profile-chartsDiv"
                  style={{ margin: "3%", padding: "1%" }}
                  src={`data:image/png;base64,${sessionStorage.getItem(
                    "LogoData"
                  )}`}
                  alt="Upload your logo to see it"
                />
              )}
              <textarea
                className="form-control onepager-textarea"
                id="emailText"
                required
              ></textarea>
            </div>
            <div className="onepager-top-fromto" style={{ marginRight: "3%" }}>
              <div className="onepager-top-fromto-inner">
                <label className="onepager-fromto-label">To:</label>
                <input
                  className="form-control"
                  type="text"
                  id="toEmail"
                  placeholder="Client emails"
                  autoComplete="on"
                  required
                />
              </div>
              <div className="onepager-top-fromto-inner">
                <label className="onepager-fromto-label">From:</label>
                <input
                  className="form-control"
                  type="email"
                  id="fromEmail"
                  placeholder="Your email"
                  autoComplete="off"
                  defaultValue={sessionStorage.getItem("Email")}
                  required
                />
              </div>
              <div className="onepager-top-fromto-inner">
                <label className="onepager-fromto-label">Subject:</label>
                <input
                  className="form-control"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  autoComplete="off"
                  required
                />
              </div>

              {props.phone ? (
                <div
                  className="plan-profile-chartsDiv"
                  style={{ margin: "3%", width: "90%" }}
                >
                  <OnePagerContact
                    contact={{
                      Name: "Administrator",
                      Title:
                        props.administrator +
                        " , " +
                        commonFunctions.phoneFormat(props.phone.toString()),
                      admin: true,
                    }}
                    headWidth="50"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="onepager-emailform-buttons">
            <input
              className="btn btn-success btn-lg onepageremailbuttons"
              type="submit"
              value="Send"
            ></input>
            <button
              className="btn btn-danger btn-lg onepageremailbuttons"
              onClick={cancelEmailSend}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnePagerTop;
