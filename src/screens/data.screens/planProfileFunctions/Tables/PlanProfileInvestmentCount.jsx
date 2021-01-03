import React from "react";
import common from "../../commonFunctions/common";

export default (props) => {
  const database = props.info;

  return (
    <div className="plan-businessInfo plan-graphs">
      <div
        className="plan-table-section responsive-table-div"
        style={{ marginTop: "3%" }}
      >
        <table className="table table-striped table-bordered table-sm table-hover ">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.data[0].map((element, index) => {
                if (element.IsCity === true) {
                  return <th key={index}>City in {element.Year}</th>;
                } else if (element.IsBusinessCode === true) {
                  return <th key={index}>Industry for {element.Year}</th>;
                } else {
                  return <th key={index}>{element.Year}</th>;
                }
              })}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Total Assets
                <span className="onepager-tooltip">
                  Total assets not including liabilities
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return element.TotalAssets >= 0 ? (
                  <td key={index}>${common.reducer(element.TotalAssets)}</td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${common.reducer(element.TotalAssets)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}></div>
    </div>
  );
};
