import React from "react";
import numeral from "numeral";
import { allYears } from "../../../../../global/Years";
export default (props) => {
  return props.result !== undefined ? (
    <div className="plan-businessInfo" style={{ padding: "1%" }}>
      <div
        className="switch-field"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {allYears.map((el) => (
          <div key={el}>
            <input
              type="radio"
              id={`radio-${el}`}
              name="switch-two"
              value={el}
              label={el}
              onChange={() => {
                props.onYearChange(el);
              }}
            />
            <label htmlFor={`radio-${el}`}>{el}</label>
          </div>
        ))}
      </div>
      <div className="plan-table-section">
        <h1 className="plan-h1">Dashboard Summary - {props.result.Year}</h1>
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
              <td>{numeral(props.result.SmallCompanies).format("0,0")}</td>
              <td>{numeral(props.result.LargeCompanies).format("0,0")}</td>
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
