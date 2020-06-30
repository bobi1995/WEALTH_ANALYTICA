import React, { useEffect, useState } from "react";
import { Polar } from "react-chartjs-2";
import dataReducer from "../charts";

const ParticipantBalance = (props) => {
  const balance = props.statistics.map((el) => ({
    Year: el.Year,
    Balance: el.ParticipantsAccountBal,
  }));

  const balanceONLY = balance.map((el) => el.Balance);

  const data = {
    datasets: [
      {
        data: dataReducer.arrayReducer(balanceONLY),
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED"],
        label: "My dataset",
      },
    ],
    labels: balance.map((el) => el.Year),
  };
  const categoryContribution = dataReducer.arrayCategory(balanceONLY);

  return (
    <div style={{ width: "30%" }}>
      <Polar data={data} options={dataReducer.optionReturn(balanceONLY)} />
    </div>
  );
};

export default ParticipantBalance;
