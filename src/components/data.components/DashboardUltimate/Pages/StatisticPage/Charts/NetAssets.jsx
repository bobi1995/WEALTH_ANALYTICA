import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
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
const NetAssets = (props) => {
  const classes = styles();

  const netAssets = props.statistics.map((el) => ({
    Year: el.Year,
    NetAssets: el.NetAssetsEndOfYear,
  }));

  const netAssetsONLY = netAssets.map((el) => el.NetAssets);

  const data = {
    labels: netAssets.map((el) => el.Year),
    datasets: [
      {
        data: dataReducer.arrayReducer(netAssetsONLY),
        backgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  const categoryAsstes = dataReducer.arrayCategory(netAssetsONLY);

  return (
    <div className={classes.chartStyle}>
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Net Assets
      </small>
      <Pie data={data} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        {categoryAsstes}
      </small>
    </div>
  );
};

export default NetAssets;
