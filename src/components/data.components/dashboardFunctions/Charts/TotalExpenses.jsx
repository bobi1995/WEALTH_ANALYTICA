import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import dataReducer from "../charts";
const TotalExpenses = (props) => {
  const totalExpenses = props.statistics.map((el) => ({
    Year: el.Year,
    TotalExpenses: el.TotalExpenses,
  }));

  const totalExpensesONLY = totalExpenses.map((el) => el.TotalExpenses);

  const data = {
    labels: totalExpenses.map((el) => el.Year),
    datasets: [
      {
        data: dataReducer.arrayReducer(totalExpensesONLY),
        backgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };
  const totalCategory = dataReducer.arrayCategory(totalExpensesONLY);

  return (
    <div style={{ width: "30%" }}>
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Total Expenses
      </small>
      <Doughnut data={data} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        {totalCategory}
      </small>
    </div>
  );
};

export default TotalExpenses;
