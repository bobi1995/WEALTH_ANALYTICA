import React from "react";
import { Doughnut } from "react-chartjs-2";
import dataReducer from "../charts";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles(() => ({
  chartStyle: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
    padding: "0%",
  },
}));
const TotalExpenses = (props) => {
  const classes = styles();

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
    <div className={classes.chartStyle}>
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
