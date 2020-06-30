import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import dataReducer from "../charts";
const NetIncome = (props) => {
  const netIncome = props.statistics.map((el) => ({
    Year: el.Year,
    NetIncome: el.NetIncome,
  }));

  const netIncomeOnly = netIncome.map((el) => el.NetIncome);

  const data = {
    labels: netIncome.map((el) => el.Year),
    datasets: [
      {
        label: "Net Income",
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54,162,235,0.4)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: dataReducer.arrayReducer(netIncomeOnly),
      },
    ],
  };

  return (
    <div style={{ width: "30%" }}>
      <Bar data={data} options={dataReducer.optionReturn(netIncomeOnly)} />
    </div>
  );
};

export default NetIncome;
