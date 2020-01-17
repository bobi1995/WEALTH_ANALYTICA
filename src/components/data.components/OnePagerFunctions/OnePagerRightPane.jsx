import React from "react";

const OnePagerRightPane = props => {
  return (
    <div className="onePager-rightpane-maindiv">
      <div className="onepager-right-pane-cityAndCode">
        <h1 className="onepager-right-pane-h1">City: {props.data[0]}</h1>
        <h1 className="onepager-right-pane-h1">Code: {props.data[1]}</h1>
      </div>
      <img
        className="OnePager-logo"
        src={require("../../../styles/images/Wealth_Analytica.png")}
      />
    </div>
  );
};

export default OnePagerRightPane;
