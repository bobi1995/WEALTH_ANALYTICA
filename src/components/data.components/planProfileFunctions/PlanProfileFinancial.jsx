import React from "react";
import numeral from "numeral";

const ProfilePlanFinancial = props => {
  return (
    <div>
      {/**FINANCIAL PLAN  */}
      <div className="plan-businessInfo">
        <div className="plan-table-section">
          <h1 className="plan-h1">Plan - Financial</h1>
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
                <th className="thead-dark">Total Assets</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.TotalAssets).format("0,0")}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Net Assets</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.NetAssets).format("0,0")}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Net Income</th>
                {props.data[0].map((element, index) => {
                  if (element.ContributionFailureIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        <i className="fa fa-flag" aria-hidden="true"></i>$
                        {numeral(element.NetIncome).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        ${numeral(element.NetIncome).format("0,0")}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr>
                <th className="thead-dark">Total Expenses</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.TotalExpenses).format("0,0")}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Total Distributions</th>
                {props.data[0].map((element, index) => {
                  if (element.ContributionFailureIndColor) {
                    return (
                      <td key={index} className="plan-profile-red">
                        <i className="fa fa-flag" aria-hidden="true"></i>$
                        {numeral(element.TotalDistributions).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        ${numeral(element.TotalDistributions).format("0,0")}
                      </td>
                    );
                  }
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/**PLAN - PARTICIPANTS */}
      <div className="plan-businessInfo">
        <div className="plan-table-section">
          <h1 className="plan-h1">Plan - Participants</h1>
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
                <th className="thead-dark">Participant Loans</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.ParticipantLoans).format("0,0")}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Participants</th>
                {props.data[0].map((element, index) => {
                  return <td key={index}>{element.Participants}</td>;
                })}
              </tr>
              <tr>
                <th className="thead-dark">Contribution Employer</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.ContributionEmployer).format("0,0")}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Contribution Participant</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      ${numeral(element.ContributionParticipant).format("0,0")}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/**PLAN - Statistics */}
      <div className="plan-businessInfo">
        <div className="plan-table-section">
          <h1 className="plan-h1">Plan - Statistics</h1>
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
                <th className="thead-dark">AUM/HC</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>${numeral(element.AUMHC).format("0,0")}</td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Yield</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      {numeral(element.Yield).format("0.00")}%
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Contribution Yield</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      {numeral(element.ContributionYield).format("0.00")}%
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Expense Ratio</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>
                      {numeral(element.ExpenseRatio).format("0.00")}%
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">ROR</th>
                {props.data[0].map((element, index) => {
                  return (
                    <td key={index}>{numeral(element.ROR).format("0.00")}%</td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
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
                        {element.ContributionFailureInd ? "Y" : "N"}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        {element.ContributionFailureInd ? "Y" : "N"}
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
                        {element.LeasesInDefaultInd ? "Y" : "N"}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        {element.LeasesInDefaultInd ? "Y" : "N"}
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
                        {element.LoansInDefaultInd ? "Y" : "N"}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index}>
                        {element.LoansInDefaultInd ? "Y" : "N"}
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
                        {element.DFVCInd ? "Y" : "N"}
                      </td>
                    );
                  } else {
                    return <td key={index}>{element.DFVCInd ? "Y" : "N"}</td>;
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

export default ProfilePlanFinancial;
