import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import dataReducer from "../charts";

const ContributionByEmployee = (props) => {
  const contribution = props.statistics.map((el) => ({
    Year: el.Year,
    Contribution: el.EmployeesContributionIncome,
  }));

  const contributionONLY = contribution.map((el) => el.Contribution);

  const data = {
    labels: contribution.map((el) => el.Year),
    datasets: [
      {
        label: "Income Contributed By Employee",
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
        data: dataReducer.arrayReducer(contributionONLY),
      },
    ],
  };
  const categoryContribution = dataReducer.arrayCategory(contributionONLY);

  return (
    <div style={{ width: "30%" }}>
      <Line data={data} options={dataReducer.optionReturn(contributionONLY)} />
    </div>
  );
};

export default ContributionByEmployee;
