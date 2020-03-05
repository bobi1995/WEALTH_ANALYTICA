import React from "react";
import numeral from "numeral";
import PlanProfileStatistics from "./PlanProfileStatistics";
import PlanProfileFinancial from "./PlanProfileFinancial";
import PlanProfileParticipants from "./PlanProfileParticipants";

const PlanProfileTables = props => {
  return (
    <div>
      {/**PLAN - Financial */}
      <div className="plan-businessInfo">
        <h1 className="plan-h1">Plan - Financial</h1>
        <PlanProfileFinancial info={props} />
      </div>

      {/**PLAN - PARTICIPANTS */}
      <div className="plan-businessInfo">
        <h1 className="plan-h1">Plan - Participants</h1>
        <PlanProfileParticipants info={props} />
      </div>

      {/**PLAN - Statistics */}
      <div className="plan-businessInfo">
        <h1 className="plan-h1">Plan - Statistics</h1>
        <PlanProfileStatistics info={props} />
      </div>

      {/**ALERTS */}
      <div className="plan-businessInfo">
        <div className="plan-table-section">
          <h1 className="plan-h1">Alerts</h1>
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th></th>
                {props.data[0].map((element, index) => {
                  if (element.IsCity === true) {
                    return (
                      <th key={index}>
                        {props.data[1]} in {element.Year}
                      </th>
                    );
                  } else if (element.IsBusinessCode === true) {
                    return (
                      <th key={index}>
                        Code {props.data[2]} for {element.Year}
                      </th>
                    );
                  } else {
                    return <th key={index}>{element.Year}</th>;
                  }
                })}
              </tr>
            </thead>
            <tbody className="table-hover">
              <tr>
                <th className="thead-dark">Contribution Failure Ind</th>
                {props.data[0].map((element, index) => {
                  if (element.ContributionFailureIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        {element.ContributionFailureInd ? (
                          <i
                            className="fa fa-exclamation-triangle"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        {element.ContributionFailureInd ? (
                          <i
                            className="fa fa-exclamation-triangle"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr>
                <th className="thead-dark">Contribution Failure Amt</th>
                {props.data[0].map((element, index) => {
                  if (element.ContributionFailureIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        <i className="fa fa-flag" aria-hidden="true"></i>$
                        {numeral(element.ContributionFailureAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        ${numeral(element.ContributionFailureAtm).format("0,0")}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr>
                <th className="thead-dark">Leases In Default Ind</th>
                {props.data[0].map((element, index) => {
                  if (element.LeasesInDefaultIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        {element.LeasesInDefaultInd ? (
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        {element.LeasesInDefaultInd ? (
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr>
                <th className="thead-dark">Leases In Default Amt</th>
                {props.data[0].map((element, index) => {
                  if (element.LeasesInDefaultIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        <i className="fa fa-flag" aria-hidden="true"></i>$
                        {numeral(element.LeasesInDefaultAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        ${numeral(element.LeasesInDefaultAtm).format("0,0")}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr>
                <th className="thead-dark">Loans In Default Ind</th>
                {props.data[0].map((element, index) => {
                  if (element.LoansInDefaultIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        {element.LoansInDefaultInd ? (
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        {element.LoansInDefaultInd ? (
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr>
                <th className="thead-dark">Loans In Default Amt</th>
                {props.data[0].map((element, index) => {
                  if (element.LoansInDefaultIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        <i className="fa fa-flag" aria-hidden="true"></i>$ $
                        {numeral(element.LoansInDefaultAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        ${numeral(element.LoansInDefaultAtm).format("0,0")}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr>
                <th className="thead-dark">Distribution Correction</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.DistributionCorrection).format("0,0")}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">DFVC Ind</th>
                {props.data[0].map((element, index) => {
                  if (element.DFVCIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        {element.DFVCInd ? (
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        {element.DFVCInd ? (
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </td>
                    );
                  }
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanProfileTables;
