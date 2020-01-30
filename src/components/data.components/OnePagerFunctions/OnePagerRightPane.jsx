import React from "react";
import OnePagerMap from "./OnePagerMap";
const OnePagerRightPane = props => {
  return (
    <div className="onePager-rightpane-maindiv">
      <div className="onepager-right-pane-cityAndCode">
        <h1 className="onepager-right-pane-h1">City: {props.data[0]}</h1>
        <h1 className="onepager-right-pane-h1">Code: {props.data[1]}</h1>
      </div>
      <OnePagerMap />
      {/* <img
        className="OnePager-logo"
        alt="no_img"
        src={require("../../../styles/images/Wealth_Analytica.png")}
      /> */}
    </div>
  );
};

export default OnePagerRightPane;
