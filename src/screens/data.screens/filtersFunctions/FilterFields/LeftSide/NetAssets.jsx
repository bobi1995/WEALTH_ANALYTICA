import React from "react";
import { Doughnut } from "react-chartjs-2";

import dataReducer from "../../../../../components/dataReducer";

const NetAssets = (props) => {
  const NetAssetsReduced = dataReducer.arrayReducer([
    props.NetAssetBegin,
    props.NetAssetEnd,
  ]);
  const categoryNetAssets = dataReducer.arrayCategory([
    props.NetAssetBegin,
    props.NetAssetEnd,
  ]);

  const data = {
    labels: ["Begin of the Year", "End of the Year"],
    datasets: [
      {
        data: NetAssetsReduced,
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Net Assets
      </small>
      <Doughnut data={data} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        {categoryNetAssets}
      </small>
    </div>
  );
};

export default NetAssets;
