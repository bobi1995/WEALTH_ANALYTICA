import React from "react";
import numeral from "numeral";

export default props => {
  console.log(props.result);
  return props.result !== undefined ? (
    <div className="plan-businessInfo">
      <div className="plan-table-section">
        <h1 className="plan-h1">Filter Summary</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Small Companies</th>
              <th>Large Companies</th>
              <th>Defined Benefit Plans</th>
              <th>Defined Contribution Plans</th>
              <th>Welfare Plans</th>
              <th>Different Industry</th>
              <th>Sponsors</th>
              <th>Plans</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{numeral(props.result.LargeCompanies).format("0,0")}</td>
              <td>{numeral(props.result.SmallCompanies).format("0,0")}</td>
              <td>{numeral(props.result.DefinedBenefitPlans).format("0,0")}</td>
              <td>
                {numeral(props.result.DefinedContributionPlans).format("0,0")}
              </td>
              <td>{numeral(props.result.WelfarePlans).format("0,0")}</td>
              <td>{numeral(props.result.DifferentIndustry).format("0,0")}</td>
              <td>{numeral(props.result.Sponsors).format("0,0")}</td>
              <td>{numeral(props.result.Plans).format("0,0")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    ""
  );
};
