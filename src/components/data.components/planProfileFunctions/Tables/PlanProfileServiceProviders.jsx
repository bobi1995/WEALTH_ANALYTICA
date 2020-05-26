import React from "react";
import numeral from "numeral";
import common from "../../commonFunctions/common";
import { Bar } from "react-chartjs-2";
import DataExtract from "../PlanProfileDataExtract";
import dashboardCharts from "../../dashboardFunctions/charts";

export default (props) => {
  const database = props.info;
  const reducedDirectFees = dashboardCharts.arrayReducer(
    DataExtract.ProvidersDirectFees(database.data[0])
  );
  const reducedIndirectFees = dashboardCharts.arrayReducer(
    DataExtract.ProvidersIndirectFees(database.data[0])
  );
  const directFees = {
    labels: DataExtract.realYearsPension(database.data[0]),
    datasets: [
      {
        label: "Providers Direct Fees",
        backgroundColor: "rgba(0, 150, 0,0.2)",
        borderColor: "rgba(0, 150, 0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0, 150, 0,0.4)",
        hoverBorderColor: "rgba(0, 150, 0,1)",
        data: reducedDirectFees,
      },
    ],
  };
  const indirectFees = {
    labels: DataExtract.realYearsPension(database.data[0]),
    datasets: [
      {
        label: "Providers Indirect Fees",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: reducedIndirectFees,
      },
    ],
  };
  return (
    <div className="plan-businessInfo plan-graphs">
      <div className="chart-plan-section">
        <div className="plan-profile-chartsDiv">
          <Bar
            data={directFees}
            options={dashboardCharts.optionReturn(
              DataExtract.ProvidersDirectFees(database.data[0])
            )}
          />
        </div>
        <div className="plan-profile-chartsDiv">
          <Bar
            data={indirectFees}
            options={dashboardCharts.optionReturn(
              DataExtract.ProvidersIndirectFees(database.data[0])
            )}
          />
        </div>
      </div>
      <div className="plan-table-section" style={{ marginTop: "3%" }}>
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
