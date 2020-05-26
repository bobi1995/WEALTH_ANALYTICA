import React from "react";
import numeral from "numeral";
import { Line, Bar } from "react-chartjs-2";
import DataExtract from "../PlanProfileDataExtract";
import dashboardCharts from "../../dashboardFunctions/charts";
import common from "../../commonFunctions/common";

export default (props) => {
  const database = props.info;

  const contributionData = {
    labels: DataExtract.realYearsPension(database.data[0]),
    datasets: [
      {
        label: "Contribution Employer",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: dashboardCharts.arrayReducer(
          DataExtract.contributionEmployer(database.data[0])
        ),
      },
    ],
  };
  const data = {
    labels: DataExtract.realYearsPension(database.data[0]),
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
        ),
      },
    ],
  };

  return (
    <div className="plan-businessInfo plan-graphs">
      <div className="chart-plan-section">
        <div className="plan-profile-chartsDiv">
          <Line
            data={data}
            width={50}
            height={20}
            options={dashboardCharts.optionReturn(
              DataExtract.participantsPension(database.data[0])
            )}
          />
        </div>
        <div className="plan-profile-chartsDiv">
          <Bar
            data={contributionData}
            options={dashboardCharts.optionReturn(
              DataExtract.contributionEmployer(database.data[0])
            )}
          />
        </div>
      </div>
      <div
        className="plan-table-section responsive-table-div"
        style={{ marginTop: "3%" }}
      >
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
              <th className="thead-dark onepager-pesion-description">
                Participants
                <span className="onepager-tooltip">
                  Total End of Year Active Participants
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.Participants).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Contribution Employer
                <span className="onepager-tooltip">
                  Contributions Made to Plan by the Employer
                </span>
              </th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    ${common.reducer(element.ContributionEmployer)}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark onepager-pesion-description">
                Contribution Participant
                <span className="onepager-tooltip">
                  Contributions Made to Plan by the Participants
                </span>
              </th>
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
    </div>
  );
};
