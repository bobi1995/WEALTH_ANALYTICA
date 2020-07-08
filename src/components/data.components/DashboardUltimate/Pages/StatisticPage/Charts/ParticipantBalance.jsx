import React, { useEffect, useState } from "react";
import { Polar } from "react-chartjs-2";
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
const ParticipantBalance = (props) => {
  const classes = styles();

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
    <div className={classes.chartStyle}>
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Participant Balance
      </small>
      <Polar data={data} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        {categoryContribution}
      </small>
    </div>
  );
};

export default ParticipantBalance;
