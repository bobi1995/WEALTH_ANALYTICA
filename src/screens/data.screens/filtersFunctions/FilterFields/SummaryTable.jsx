import React from "react";
import numeral from "numeral";
export default (props) => {
  return props.data !== undefined ? (
    <div
      className="plan-businessInfo"
      style={{ marginTop: 0, marginBottom: 0, width: "70%", margin: "0 auto" }}
    >
      <div className="plan-table-section">
        <h1 className="plan-h1">Filter Summary</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr style={{ textAlign: "center" }}>
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
            <tr style={{ textAlign: "center" }}>
              <td>{numeral(props.data.SmallCompanies).format("0,0")}</td>
              <td>{numeral(props.data.LargeCompanies).format("0,0")}</td>
              <td>{numeral(props.data.DefinedBenefitPlans).format("0,0")}</td>
              <td>
                {numeral(props.data.DefinedContributionPlans).format("0,0")}
              </td>
              <td>{numeral(props.data.WelfarePlans).format("0,0")}</td>
              <td>{numeral(props.data.DifferentIndustry).format("0,0")}</td>
              <td>{numeral(props.data.Sponsors).format("0,0")}</td>
              <td>{numeral(props.data.Plans).format("0,0")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    ""
  );
};
