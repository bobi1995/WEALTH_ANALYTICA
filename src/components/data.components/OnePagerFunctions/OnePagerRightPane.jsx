import React from "react";
import DataExtract from "./OnePagerDataExtract";
import numeral from "numeral";

const OnePagerRightPane = () => {
  console.log("here");
  return (
    <div className="onePager-rightpane-maindiv">
      <img
        className="OnePager-logo"
        src={require("../../../styles/images/Wealth_Analytica.png")}
      />
    </div>
  );
};

export default OnePagerRightPane;
