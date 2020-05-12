import React from "react";
import { Bar } from "react-chartjs-2";
import DataExtract from "../PlanProfileDataExtract";
import dashboardCharts from "../../dashboardFunctions/charts";
import common from "../../commonFunctions/common";

export default (props) => {
  const database = props.info;
  const reducedData = dashboardCharts.arrayReducer(
    DataExtract.netAssetsPension(database.data[0])
  );
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
        data: reducedData,
      },
    ],
  };
  return (
    <div className="plan-businessInfo plan-graphs" id="plan-financial">
      <div className="plan-table-section responsive-table-div">
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
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Net Assets
                <span className="onepager-tooltip">
                  Total Assets less Liabilities
                </span>
              </th>
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
              <th className="thead-dark onepager-pesion-description">
                Total Distributions
                <span className="onepager-tooltip">
                  Distribution includes only payments of benefits during the
                  plan year, in cash, in kind, by purchase for the distributee
                  of an annuity contract from an insurance company, or by
                  distribution of life insurance contracts. Corrective
                  distributions of excess deferrals, excess contributions, or
                  excess aggregate contributions, or the income allocable to any
                  of these amounts; 2. Distributions of automatic contributions
                  pursuant to Code section 414(w); 3. The distribution of
                  elective deferrals or the return of employee contributions to
                  correct excess annual additions under Code section 415, or the
                  gains attributable to these amounts; and 4. A loan deemed as a
                  distribution under Code section
                </span>
              </th>
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
