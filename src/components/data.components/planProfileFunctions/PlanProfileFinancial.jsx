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
                  return (
                    <td key={index}>
                      ${numeral(element.NetIncome).format("0,0")}
                    </td>
                  );
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
                  return (
                    <td key={index}>
                      ${numeral(element.TotalDistributions).format("0,0")}
                    </td>
                  );
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
                  return <td key={index}>{element.Yield}</td>;
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
    </div>
  );
};

export default ProfilePlanFinancial;
