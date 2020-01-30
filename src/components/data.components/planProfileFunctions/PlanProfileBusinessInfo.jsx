import React from "react";
import commonFunctions from "../commonFunctions/common";

const PlaneProfileBusinessInfo = props => {
  return (
    <div className="plan-businessInfo">
      <div className="plan-table-section">
        <h1 className="plan-h1">Business Information</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th className="thead-dark">Sponsor Name</th>
              <td>
                {props.data.SponsorName &&
                  commonFunctions.formatString(props.data.SponsorName)}
              </td>
            </tr>
            <tr>
              <th className="thead-dark">Plan Name</th>
              <td>
                {props.data.PlanName &&
                  commonFunctions.formatString(props.data.PlanName)}
              </td>
            </tr>
            <tr>
              <th className="thead-dark">Address 1</th>
              <td>
                {props.data.Address1 &&
                  commonFunctions.formatString(props.data.Address1)}
              </td>
            </tr>

            <tr>
              <th className="thead-dark">Address 2</th>
              <td>
                {props.data.Address2 &&
                  commonFunctions.formatString(props.data.Address2)}
              </td>
            </tr>
            <tr>
              <th className="thead-dark">City</th>
              <td>
                {props.data.City &&
                  commonFunctions.formatString(props.data.City)}
              </td>
            </tr>
            <tr>
              <th className="thead-dark">State</th>
              <td>{props.data.State}</td>
            </tr>
            <tr>
              <th className="thead-dark">Zip Code</th>
              <td>{props.data.Zip}</td>
            </tr>
            <tr>
              <th className="thead-dark">Administrator's Name</th>
              <td>
                {props.data.AdministratorName &&
                  commonFunctions.formatString(props.data.AdministratorName)}
              </td>
            </tr>
            <tr>
              <th className="thead-dark">Phone Number</th>
              <td>
                {props.data.PhoneNumber &&
                  commonFunctions.phoneFormat(props.data.PhoneNumber)}
              </td>
            </tr>
            <tr>
              <th className="thead-dark">Business Code</th>
              <td>{props.data.BusinessCode}</td>
            </tr>
            <tr>
              <th className="thead-dark">Industry</th>
              <td>{props.data.Industry}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaneProfileBusinessInfo;
