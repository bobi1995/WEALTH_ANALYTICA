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
        <div className="plan-table-section ">
          <h1 className="plan-h1">Heatmap Alerts</h1>
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
                <th className="thead-dark onepager-pesion-description">
                  Contribution Failure Ind
                  <span className="onepager-tooltip">
                    The plan failed to transmit participant contributions within
                    the time period described
                  </span>
                </th>
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
                <th className="thead-dark onepager-pesion-description">
                  Contribution Failure Amt
                  <span className="onepager-tooltip">
                    The amount plan failed to transmit participant contributions
                    within the time period described
                  </span>
                </th>
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
                <th className="thead-dark onepager-pesion-description">
                  Leases In Default Ind
                  <span className="onepager-tooltip">
                    A lease is an agreement conveying the right to use property,
                    plant, or equipment for astated period. A lease is in
                    default when the required payment(s) has not been made. An
                    uncollectible lease is one where the required payments have
                    not been made and forwhich there is little probability that
                    payment will be made.
                  </span>
                </th>
                {props.data[0].map((element, index) => {
                  if (element.LeasesInDefaultIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        {element.LeasesInDefaultInd ? (
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
                        {element.LeasesInDefaultInd ? (
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
                <th className="thead-dark onepager-pesion-description">
                  Leases In Default Amt
                  <span className="onepager-tooltip">
                    Leases In Default Amount
                  </span>
                </th>
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
                <th className="thead-dark onepager-pesion-description">
                  Loans In Default Ind
                  <span className="onepager-tooltip">
                    A loan by the plan is in default when the borrower isunable
                    to pay the obligation upon maturity. Obligations that
                    require periodic repayment can default at any time.
                    Generally, loans and fixed income obligations are considered
                    uncollectible when payment has not been made and there is
                    little probability that payment will be made. A fixed income
                    obligation has a fixed maturity date at a specified interest
                    rate.
                  </span>
                </th>
                {props.data[0].map((element, index) => {
                  if (element.LoansInDefaultIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        {element.LoansInDefaultInd ? (
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
                        {element.LoansInDefaultInd ? (
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
                <th className="thead-dark onepager-pesion-description">
                  Loans In Default Amt{" "}
                  <span className="onepager-tooltip">
                    Loans In Default Amount
                  </span>
                </th>
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
                <th className="thead-dark onepager-pesion-description">
                  Distribution Correction
                  <span className="onepager-tooltip">
                    Corrective distributions of excess deferrals, excess
                    contributions, or excess aggregate contributions, or the
                    income
                  </span>
                </th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.DistributionCorrection).format("0,0")}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark onepager-pesion-description">
                  DFVC Ind
                  <span className="onepager-tooltip">
                    Delinquent Filer Voluntary Compliance Program
                  </span>
                </th>
                {props.data[0].map((element, index) => {
                  if (element.DFVCIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        {element.DFVCInd ? (
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
                        {element.DFVCInd ? (
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanProfileTables;
