import React from "react";
import DataExtract from "./OnePagerDataExtract";
import reducers from "../dashboardFunctions/charts";
import StatisticsAndProviders from "./OnePagerBottomTables/StatisticsAndProviders";
import HealthAndFidelity from "./OnePagerBottomTables/HealthAndFidelity";

const OnePagerBottomTables = (props) => {
  let auhmc = {};
  let eligibleProviders = {};

  if (props.data) {
    const years = DataExtract.yearsExtract(props.data);
    // ---------------------AUHMC--------------------------------------------
    auhmc = {
      labels: years,
      datasets: [
        {
          label: "AUM/HC",
          backgroundColor: "rgba(0, 177, 106, 1)",

          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 239, 178, 1)",
          hoverBorderColor: "rgba(0, 177, 106, 1)",
          data: reducers.arrayReducer(DataExtract.AUMHCExtract(props.data)),
          stack: 1,
        },
      ],
    };
    // ---------------------eligibleProviders--------------------------------------------
    eligibleProviders = {
      labels: years,
      datasets: [
        {
          label: "Eligible Providers",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: reducers.arrayReducer(
            DataExtract.providerOtherDirectCompATMExtract(props.data)
          ),
          stack: 1,
        },
      ],
    };
  }

  return (
    <div className="onepager-bottomtables-maindiv">
      <StatisticsAndProviders data={props.data} />
      <HealthAndFidelity data={props.data} />
    </div>
  );
};

export default OnePagerBottomTables;
