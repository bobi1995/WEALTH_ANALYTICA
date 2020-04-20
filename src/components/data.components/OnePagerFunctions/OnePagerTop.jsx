import React from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import axios from "axios";
import dashboardFunctions from "../dashboardFunctions/functions";

const OnePagerTop = (props) => {
  let flagBasic = 0;
  dashboardFunctions.commonFunctionBasics().forEach((el) => {
    const n = el.split(" - ");
    if (props.state == n[1]) {
      flagBasic = 1;
    }
  });

  window.onclick = function(event) {
    document.getElementById("alert-popupid").style.display = "none";
  };
  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("clientLogo").style.display = "block";
    const sendUrl = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/SendEmail`;
    html2canvas(document.body).then(function(canvas) {
      const ImageUrl = canvas.toDataURL();
      const partsImage = ImageUrl.split(",");
      const mailData = {
        from: `${document.getElementById("fromEmail").value}`,
        to: `${document.getElementById("toEmail").value}`,
        subject: `${document.getElementById("subject").value}`,
        message: `${document.getElementById("emailText").value}`,
        imageData: `${partsImage[1]}`,
      };
      axios
        .post(sendUrl, mailData, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          document.getElementById("clientLogo").style.display = "none";

          document.getElementById("emailform").style.display = "none";
          document.getElementById("mainbuttons").style.display = "block";
          document.getElementById("alert-popupid").style.display = "block";
          document.getElementById("message-alert-box").innerHTML =
            "Successfully sent";
        })
        .catch((err) => {
          console.log(err);

          document.getElementById("alert-popupid").style.display = "block";
          document.getElementById("message-alert-box").innerHTML = "Not sent";
        });
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
              Plan available in Advanced Version
            </span>
            Client Plan Analytic
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
              <img
                className="onePager-top-logo"
                src={require("../../../styles/images/Wealth_Analytica.png")}
              />
              <textarea
                className="form-control onepager-textarea"
                id="emailText"
                required
              ></textarea>
            </div>
            <div className="onepager-top-fromto">
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
            </div>
          </div>
          <div className="onepager-emailform-buttons">
            <input
              className="btn btn-success btn-lg onepageremailbuttons"
              //onClick={sendEmail}
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
