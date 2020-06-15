import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";

import { EventTracker } from "@devexpress/dx-react-chart";
import dataReducer from "../../../dashboardFunctions/charts";
const NetAssets = (props) => {
  const NetAssetsReduced = dataReducer.arrayReducer([
    props.NetAssetBegin,
    props.NetAssetEnd,
  ]);
  const categoryNetAssets = dataReducer.arrayCategory([
    props.NetAssetBegin,
    props.NetAssetEnd,
  ]);

  const [targetItem, setTargetItem] = useState();
  const data = [
    { year: "Begin of the Year", assets: NetAssetsReduced[0] },
    { year: "End of the Year", assets: NetAssetsReduced[1] },
  ];

  const changeTargetItem = (targetItem) => setTargetItem(targetItem);

  return (
    <div style={{ width: "100%" }}>
      <Paper>
        <Chart data={data}>
          <ValueAxis />
          <ArgumentAxis />

          <BarSeries valueField="assets" argumentField="year" />
          <Title text={`Net Assets (${categoryNetAssets})`} />
          <EventTracker />
          <Tooltip
            targetItem={targetItem}
            onTargetItemChange={changeTargetItem}
          />
        </Chart>
      </Paper>
    </div>
  );
};

export default NetAssets;
