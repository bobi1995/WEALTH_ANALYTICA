import React from "react";
import numeral from "numeral";
import common from "../../commonFunctions/common";

export default (props) => {
  const database = props.info;

  return (
    <div className="plan-businessInfo">
      <div className="plan-table-section ">
        <table className="table table-striped table-bordered table-sm table-hover">
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
              <th className="thead-dark">Eligible Names Count</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.ProviderEligibleNamesCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Other Names Count</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.ProviderOtherNamesCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Other Providers Direct Fees</th>
              {database.data[0].map((element, index) => {
                return element.ProviderOtherDirectCompATM >= 0 ? (
                  <td key={index}>
                    ${common.reducer(element.ProviderOtherDirectCompATM)}
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${common.reducer(element.ProviderOtherDirectCompATM)}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Other Providers Indirect Fees</th>
              {database.data[0].map((element, index) => {
                return element.ProviderOtherTotIndCompATM >= 0 ? (
                  <td key={index}>
                    ${common.reducer(element.ProviderOtherTotIndCompATM)}
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${common.reducer(element.ProviderOtherTotIndCompATM)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
