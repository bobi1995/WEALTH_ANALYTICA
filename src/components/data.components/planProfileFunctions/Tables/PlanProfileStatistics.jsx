import React from "react";
import numeral from "numeral";
import { Bar } from "react-chartjs-2";
import DataExtract from "../PlanProfileDataExtract";
import dashboardCharts from "../../dashboardFunctions/charts";
import common from "../../commonFunctions/common";

export default props => {
  const database = props.info;
  const yeildData = {
    labels: ["Yield", "Contr.Yield", "Expense Ratio", "ROR"],
    datasets: [
      {
        label: "Plan Asset",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: dashboardCharts.arrayReducer([
          DataExtract.lastYearYield(database.data[0])[0],
          DataExtract.lastYearContributionYield(database.data[0])[0],
          DataExtract.lastYearExpenseRatio(database.data[0])[0],
          DataExtract.lastYearROR(database.data[0])[0]
        ]),
        stack: 1
      },
      {
        label: "Industry",
        backgroundColor: "rgba(248, 148, 6, 0.2)",
        borderColor: "rgba(248, 148, 6, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(248, 148, 6, 0.4)",
        hoverBorderColor: "rgba(248, 148, 6, 1)",
        data: dashboardCharts.arrayReducer([
          DataExtract.industryYield(database.data[0])[0],
          DataExtract.industryContributionYield(database.data[0])[0],
          DataExtract.industryExpenseRatio(database.data[0])[0],
          DataExtract.industryROR(database.data[0])[0]
        ]),
        stack: 2
      },
      {
        label: "City",
        backgroundColor: "rgba(108, 122, 137, 0.2)",
        borderColor: "rgba(108, 122, 137, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(108, 122, 137 ,0.4)",
        hoverBorderColor: "rgba(108, 122, 137, 1)",
        data: dashboardCharts.arrayReducer([
          DataExtract.cityYield(database.data[0])[0],
          DataExtract.cityContributionYield(database.data[0])[0],
          DataExtract.cityExpenseRatio(database.data[0])[0],
          DataExtract.cityROR(database.data[0])[0]
        ]),
        stack: 3
      }
    ]
  };

  const aumhcChartData = {
    labels: ["Plan Asset", "Industry", "City"],
    datasets: [
      {
        label: "AUM/HC",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: dashboardCharts.arrayReducer([
          DataExtract.lastYearAum(database.data[0])[0],
          DataExtract.industryAum(database.data[0])[0],
          DataExtract.cityAum(database.data[0])[0]
        ])
      }
    ]
  };
  return (
    <div className="plan-businessInfo onepager-charts-all">
      <div className="onepager-chart-content responsive-table-div">
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
                      {database.data[2]} in {element.Year}
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
              <th className="thead-dark onepager-pesion-description">
                AUM/HC
                <span className="onepager-tooltip">
                  Total assets not including liabilities divided by Plan
                  Participants
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return element.AUMHC >= 0 ? (
                  <td key={index}>${common.reducer(element.AUMHC)}</td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${numeral(element.AUMHC).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Distribution Yield
                <span className="onepager-tooltip">
                  Yield equals Total Distributon divided by Total Assets
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return element.Yield >= 0 ? (
                  <td key={index}>{numeral(element.Yield).format("0.00")}%</td>
                ) : (
                  <td key={index} className="negative-numbers">
                    {numeral(element.Yield).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Contribution Yield
                <span className="onepager-tooltip">
                  Contribution Yield equals Participant and Employer
                  Contribution divided by Total Assets
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return element.ContributionYield >= 0 ? (
                  <td key={index}>
                    {numeral(element.ContributionYield).format("0.00")}%
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    {numeral(element.ContributionYield).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Return on Investment
                <span className="onepager-tooltip">
                  Net Income plus Distributions divided by Total Assets
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return element.ExpenseRatio >= 0 ? (
                  <td key={index}>
                    {numeral(element.ExpenseRatio).format("0.00")}%
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    {numeral(element.ExpenseRatio).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Return on Assets
                <span className="onepager-tooltip">
                  End of Year Assets less Beginning of Year Assets divided by
                  Beginning of Year Assets
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return element.ROR >= 0 ? (
                  <td key={index}>{numeral(element.ROR).format("0.00")}%</td>
                ) : (
                  <td key={index} className="negative-numbers">
                    {numeral(element.ROR).format("0.00")}%
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="onepager-chart-content">
        <Bar
          data={aumhcChartData}
          width={150}
          height={100}
          options={dashboardCharts.optionReturn([
            DataExtract.lastYearAum(database.data[0])[0],
            DataExtract.industryAum(database.data[0])[0],
            DataExtract.cityAum(database.data[0])[0]
          ])}
        />
      </div>
      <div className="onepager-chart-content">
        <Bar
          data={yeildData}
          width={150}
          height={100}
          options={{
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Results in %",
                    fontSize: 15
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};
