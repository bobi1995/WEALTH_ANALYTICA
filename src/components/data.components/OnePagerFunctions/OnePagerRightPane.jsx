import React from "react";
import commonFunctions from "../commonFunctions/common";

const OnePagerRightPane = props => {
  return (
    <div className="onePager-rightpane-maindiv">
      <div className="onepager-right-pane-cityAndCode">
        <h1 className="onepager-bottomtables-h1">
          Industry ({props.data[1]}) and Location (
          {props.data[0] && commonFunctions.formatString(props.data[0])})
          Comparison are available at our 1st session
        </h1>
      </div>
    </div>
  );
};

export default OnePagerRightPane;
