import React from "react";
import { Bar } from "react-chartjs-2";
import DataExtract from "./PlanProfileDataExtract";
import dashboardCharts from "../dashboardFunctions/charts";
import common from "../commonFunctions/common";

export default props => {
  const database = props.info;
  const reducedData = dashboardCharts.arrayReducer(
    DataExtract.netAssetsPension(database.data[0])
  );
  console.log(database.data[0]);
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
        data: reducedData
      }
    ]
  };
  return (
    <div className="plan-businessInfo plan-graphs">
      <div className="plan-table-section responsive-table-div">
        <table className="table table-striped table-bordered table-sm table-hover ">
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
              <th className="thead-dark ">Total Assets</th>
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
            <tr>
              <th className="thead-dark">Net Assets</th>
              {database.data[0].map((element, index) => {
                return element.NetAssets >= 0 ? (
                  <td key={index}>${common.reducer(element.NetAssets)}</td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${common.reducer(element.NetAssets)}
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
                      {common.reducer(element.NetIncome)}
                    </td>
                  );
                } else {
                  return element.NetIncome >= 0 ? (
                    <td key={index}>${common.reducer(element.NetIncome)}</td>
                  ) : (
                    <td key={index} className="negative-numbers">
                      ${common.reducer(element.NetIncome)}
                    </td>
                  );
                }
              })}
            </tr>
            <tr>
              <th className="thead-dark">Total Expenses</th>
              {database.data[0].map((element, index) => {
                return element.TotalExpenses >= 0 ? (
                  <td key={index}>${common.reducer(element.TotalExpenses)}</td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${common.reducer(element.TotalExpenses)}
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
                      {common.reducer(element.TotalDistributions)}
                    </td>
                  );
                } else {
                  return element.TotalDistributions >= 0 ? (
                    <td key={index}>
                      ${common.reducer(element.TotalDistributions)}
                    </td>
                  ) : (
                    <td key={index} className="negative-numbers">
                      ${common.reducer(element.TotalDistributions)}
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
