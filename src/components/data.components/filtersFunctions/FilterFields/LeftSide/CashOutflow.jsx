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
const CashOutflow = (props) => {
  const CashOutflowReduced = dataReducer.arrayReducer([
    props.Distribution,
    props.CorrectivrDistribution,
    props.ServiceProviderExpenses,

    props.OtherExpenses,
  ]);

  const categoryCashOutflow = dataReducer.arrayCategory([
    props.CorrectivrDistribution,
    props.Distribution,
    props.OtherExpenses,
    props.ServiceProviderExpenses,
  ]);

  const [targetItem, setTargetItem] = useState();
  const data = [
    { year: "Distribution", assets: CashOutflowReduced[0] },
    { year: "Correctiver", assets: CashOutflowReduced[1] },
    { year: "Service Expenses", assets: CashOutflowReduced[2] },
    { year: "Other", assets: CashOutflowReduced[3] },
  ];

  const changeTargetItem = (targetItem) => setTargetItem(targetItem);
  return (
    <div style={{ width: "100%" }}>
      <Paper>
        <Chart data={data}>
          <ValueAxis />
          <ArgumentAxis />

          <BarSeries valueField="assets" argumentField="year" />
          <Title text={`Cash Outflow (${categoryCashOutflow})`} />
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

export default CashOutflow;
