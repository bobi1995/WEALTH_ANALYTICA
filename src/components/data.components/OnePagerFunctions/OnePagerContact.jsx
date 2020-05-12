import React from "react";
import avatar from "../../../styles/images/avatar.png";
export default (props) => {
  console.log(props.contact.admin);
  return (
    <div className="plan-businessInfo">
      <div className="plan-table-section-Contact">
        {props.heading ? <h3 className="onepager-h1">{props.heading}</h3> : ""}

        {props.contact.admin === true ? (
          ""
        ) : (
          <img
            src={avatar}
            className="onePager-contact-logo"
            style={{ width: `${props.headWidth}%` }}
            data-html2canvas-ignore
          />
        )}
        <h3 className="onepager-h1">{props.contact.Name}</h3>
        <small className="form-text text-muted">{props.contact.Title}</small>
        <small className="form-text text-muted">
          <a href={"mailto:" + props.contact.Email}>{props.contact.Email}</a>
        </small>
        <small className="form-text text-muted">
          <a href={"http://" + props.contact.Website} target="_blank">
            {props.contact.Website}
          </a>
        </small>
      </div>
    </div>
  );
};
