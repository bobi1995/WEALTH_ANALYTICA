import React from "react";
import numeral from "numeral";
import { Bar } from "react-chartjs-2";

export default props => {
  const database = props.info;
  const chartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
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
              <th className="thead-dark">AUM/HC</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>${numeral(element.AUMHC).format("0,0")}</td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Yield</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>{numeral(element.Yield).format("0.00")}%</td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Contribution Yield</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.ContributionYield).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Expense Ratio</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.ExpenseRatio).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">ROR</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>{numeral(element.ROR).format("0.00")}%</td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="plan-table-section ">
        <h2 className="onepager-h2">Plan Asset</h2>

        <Bar
          data={chartdata}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
      <div className="plan-table-section ">Test</div>
    </div>
  );
};
