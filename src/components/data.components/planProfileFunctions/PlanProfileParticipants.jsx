import React from "react";
import numeral from "numeral";
import { Line } from "react-chartjs-2";
import DataExtract from "./PlanProfileDataExtract";
import dashboardCharts from "../dashboardFunctions/charts";
import common from "../commonFunctions/common";

export default props => {
  const database = props.info;
  const data = {
    labels: DataExtract.uniqueYearsPension(database.data[0]),
    datasets: [
      {
        label: "Participants",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dashboardCharts.arrayReducer(
          DataExtract.participantsPension(database.data[0])
        )
      }
    ]
  };

  return (
    <div className="plan-businessInfo plan-graphs">
      <div className="plan-table-section responsive-table-div">
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
              <th className="thead-dark">Participant Loans</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    ${common.reducer(element.ParticipantLoans)}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Participants</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.Participants).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Contribution Employer</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    ${common.reducer(element.ContributionEmployer)}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Contribution Participant</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    ${common.reducer(element.ContributionParticipant)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="plan-table-section">
        <Line
          data={data}
          options={dashboardCharts.optionReturn(
            DataExtract.participantsPension(database.data[0])
          )}
        />
      </div>
    </div>
  );
};
