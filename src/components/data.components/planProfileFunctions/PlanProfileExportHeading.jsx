import React from "react";

export default (props) => {
  return (
    <div className="one-pager-attachment-logo" id="clientLogo-PlanProfile">
      <h1 className="plan-h1">{props.data.SponsorName}</h1>
      {sessionStorage.getItem("LogoData") !== "null" ? (
        <img
          src={`data:image/png;base64,${sessionStorage.getItem("LogoData")}`}
        />
      ) : (
        ""
      )}
    </div>
  );
};
