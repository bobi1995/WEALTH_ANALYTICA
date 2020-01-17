import React from "react";
import { Link } from "react-router-dom";

const OnePagerTop = props => {
  console.log(props);
  const showSendEmail = () => {
    document.getElementById("emailform").style.display = "block";
    document.getElementById("mainbuttons").style.display = "none";
  };
  const cancelEmailSend = () => {
    document.getElementById("emailform").style.display = "none";
    document.getElementById("mainbuttons").style.display = "block";
  };
  return (
    <div className="onepager-top-div-main">
      <div id="mainbuttons">
        <button
          onClick={showSendEmail}
          className="btn btn-success btn-lg onepagertopbuttons"
        >
          Send Email
        </button>
        <button className="btn btn-warning btn-lg onepagertopbuttons">
          <Link
            className="onePager-Link"
            to={{
              pathname: `/planprofile/${props.data[0]}/${props.data[1]}`
            }}
            target="_blank"
          >
            Generate Plan Profile
          </Link>
        </button>
      </div>
      <div id="emailform" className="onepager-top-emailform">
        <div className="onepager-top-mainemail">
          <div className="onepager-emailform-email">
            <img
              className="onePager-top-logo"
              src={require("../../../styles/images/Wealth_Analytica.png")}
            />
            <textarea className="form-control onepager-textarea"></textarea>
          </div>
          <div className="onepager-top-fromto">
            <div className="onepager-top-fromto-inner">
              <label className="onepager-fromto-label">To:</label>
              <input
                className="form-control"
                type="email"
                id="toEmail"
                placeholder="Customer email"
                autoComplete="off"
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
              />
            </div>
          </div>
        </div>
        <div className="onepager-emailform-buttons">
          <button className="btn btn-success btn-lg onepageremailbuttons">
            Send
          </button>
          <button
            className="btn btn-danger btn-lg onepageremailbuttons"
            onClick={cancelEmailSend}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnePagerTop;
