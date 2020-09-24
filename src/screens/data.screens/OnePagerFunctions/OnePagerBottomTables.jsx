import React from "react";
import StatisticsAndProviders from "./OnePagerBottomTables/StatisticsAndProviders";
import HealthAndFidelity from "./OnePagerBottomTables/HealthAndFidelity";

const OnePagerBottomTables = (props) => {
  return (
    <div className="onepager-bottomtables-maindiv">
      <StatisticsAndProviders data={props.data} />
      <HealthAndFidelity data={props.data} />
    </div>
  );
};

export default OnePagerBottomTables;
