import React from "react";
import numeral from "numeral";
import { Bar } from "react-chartjs-2";
import DataExtract from "./PlanProfileDataExtract";
import dashboardCharts from "../dashboardFunctions/charts";

export default props => {
  const database = props.info;
  const aumhcChartData = {
    labels: DataExtract.uniqueYearsPension(database.data[0]),
    datasets: [
      {
        label: "Net Assets",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: dashboardCharts.arrayReducer(
          DataExtract.netAssetsPension(database.data[0])
        )
      }
    ]
  };
  return (
    <div className="plan-businessInfo plan-graphs">
      <div className="plan-table-section">
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.data[0].map((element, index) => {
                if (element.IsCity === true) {
                  return (
                    <th key={index}>
                      {database.data[1]} in {element.Year}
                    </th>
                  );
                } else if (element.IsBusinessCode === true) {
                  return (
                    <th key={index}>
                      {database.data[2]} for {element.Year}
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
              {database.data[0].map((element, index) => {
                return element.TotalAssets >= 0 ? (
                  <td key={index}>
                    ${numeral(element.TotalAssets).format("0,0")}
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${numeral(element.TotalAssets).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Net Assets</th>
              {database.data[0].map((element, index) => {
                return element.NetAssets >= 0 ? (
                  <td key={index}>
                    ${numeral(element.NetAssets).format("0,0")}
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${numeral(element.NetAssets).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Net Income</th>
              {database.data[0].map((element, index) => {
                if (element.ContributionFailureIndColor) {
                  return (
                    <td key={index} className="plan-profile-red">
                      <i className="fa fa-flag" aria-hidden="true"></i>$
                      {numeral(element.NetIncome).format("0,0")}
                    </td>
                  );
                } else {
                  return element.NetIncome >= 0 ? (
                    <td key={index}>
                      ${numeral(element.NetIncome).format("0,0")}
                    </td>
                  ) : (
                    <td key={index} className="negative-numbers">
                      ${numeral(element.NetIncome).format("0,0")}
                    </td>
                  );
                }
              })}
            </tr>
            <tr>
              <th className="thead-dark">Total Expenses</th>
              {database.data[0].map((element, index) => {
                return element.TotalExpenses >= 0 ? (
                  <td key={index}>
                    ${numeral(element.TotalExpenses).format("0,0")}
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${numeral(element.TotalExpenses).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Total Distributions</th>
              {database.data[0].map((element, index) => {
                if (element.ContributionFailureIndColor) {
                  return (
                    <td key={index} className="plan-profile-red">
                      <i className="fa fa-flag" aria-hidden="true"></i>$
                      {numeral(element.TotalDistributions).format("0,0")}
                    </td>
                  );
                } else {
                  return element.TotalDistributions >= 0 ? (
                    <td key={index}>
                      ${numeral(element.TotalDistributions).format("0,0")}
                    </td>
                  ) : (
                    <td key={index} className="negative-numbers">
                      ${numeral(element.TotalDistributions).format("0,0")}
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="plan-table-section">
        <Bar
          data={aumhcChartData}
          width={500}
          height={250}
          options={dashboardCharts.optionReturn(
            DataExtract.netAssetsPension(database.data[0])
          )}
        />
      </div>
    </div>
  );
};
