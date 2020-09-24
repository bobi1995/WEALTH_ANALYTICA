import React from "react";
import numeral from "numeral";

export default (props) => {
  return props.result !== undefined ? (
    <div className="plan-businessInfo" style={{ padding: "1%" }}>
      <div className="switch-field">
        <input
          type="radio"
          id="radio-six"
          name="switch-two"
          value="2015"
          label="2015"
          onChange={() => {
            props.onYearChange(2015);
          }}
        />
        <label htmlFor="radio-six">2015</label>

        <input
          type="radio"
          id="radio-five"
          name="switch-two"
          value="no"
          onChange={() => {
            props.onYearChange(2016);
          }}
        />
        <label htmlFor="radio-five">2016</label>
        <input
          type="radio"
          id="radio-four"
          name="switch-two"
          value="maybe"
          onChange={() => {
            props.onYearChange(2017);
          }}
        />
        <label htmlFor="radio-four">2017</label>
        <input
          type="radio"
          id="radio-three"
          name="switch-two"
          value="yes"
          onChange={() => {
            props.onYearChange(2018);
          }}
          defaultChecked
        />
        <label htmlFor="radio-three">2018 </label>
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
