import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import dataReducer from "../charts";

const NetAssets = (props) => {
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
    <div style={{ width: "30%" }}>
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
