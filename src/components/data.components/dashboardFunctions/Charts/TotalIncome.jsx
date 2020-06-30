import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import dataReducer from "../charts";

const TotalIncome = (props) => {
  const totalIncome = props.statistics.map((el) => ({
    Year: el.Year,
    TotalIncome: el.TotalIncome,
  }));

  const totalONLY = totalIncome.map((el) => el.TotalIncome);

  const data = {
    labels: totalIncome.map((el) => el.Year),
    datasets: [
      {
        label: "Income Contributed By Employee",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(54,162,235,0.4)",
        borderColor: "rgba(54,162,235,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(54,162,235,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(54,162,235,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataReducer.arrayReducer(totalONLY),
      },
    ],
  };

  return (
    <div style={{ width: "30%" }}>
      <Line data={data} options={dataReducer.optionReturn(totalONLY)} />
    </div>
  );
};

export default TotalIncome;
