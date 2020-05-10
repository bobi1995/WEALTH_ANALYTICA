import React from "react";
import avatar from "../../../styles/images/avatar.png";
export default (props) => {
  return (
    <div className="plan-businessInfo">
      <div className="plan-table-section-Contact">
        {/* <h1 className="plan-h1">Contact Information</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Information</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {props.contact.Name ? (
              <tr>
                <th>Name</th>
                <td>{props.contact.Name}</td>
              </tr>
            ) : (
              ""
            )}
            {props.contact.Title ? (
              <tr>
                <th>Title</th>
                <td>{props.contact.Title}</td>
              </tr>
            ) : (
              ""
            )}
            {props.contact.Email ? (
              <tr>
                <th>Email</th>
                <td>
                  <a href={"mailto:" + props.contact.Email}>
                    {props.contact.Email}
                  </a>
                </td>
              </tr>
            ) : (
              ""
            )}
            {props.contact.Website ? (
              <tr>
                <th>Website</th>
                <td>
                  <a href={"http://" + props.contact.Website} target="_blank">
                    {props.contact.Website}
                  </a>
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table> */}
        <img
          src={avatar}
          className="onePager-contact-logo"
          style={{ width: `${props.headWidth}%` }}
          data-html2canvas-ignore
        />
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
