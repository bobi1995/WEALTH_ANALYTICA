import React from "react";

const PlanProfilePensionBenefitCodes = props => {
  return (
    <div className="plan-businessInfo">
      <div className="plan-table-section">
        <h1 className="plan-h1">Pension Plan Characteristics</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Benefit Code</th>
              <th>Description</th>
              <th>Tooltip</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {props.data.map(element => {
              return (
                <tr key={element.Symbol}>
                  <td>{element.Symbol}</td>
                  <td>{element.Description}</td>
                  <td>{element.Tooltip}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanProfilePensionBenefitCodes;
