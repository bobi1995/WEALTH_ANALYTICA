import React, { useState } from "react";
import "./map.css";
import USAMap from "react-usa-map";
import { mapData } from "../../../global/mapData";
import {
  softOrange,
  lightgreen,
  limegreen,
  forestgreen,
  softRed,
  backgroundGrey,
} from "../../../global/Colors";

const PublicGraphMap = ({ setState }) => {
  const [selected, setSelected] = useState();
  const mapHandler = (event) => {
    setState(event.target.dataset.name);
    setSelected(event.target.dataset.name);
  };

  const statesFilling = (state) => {
    if (state) {
      return {
        [state]: {
          fill: "navy",
        },
      };
    }
    const output = mapData.reduce((acc, val) => {
      let color;
      (function() {
        switch (val.Test2) {
          case 1:
            return (color = forestgreen);
          case 2:
            return (color = limegreen);
          case 3:
            return (color = lightgreen);
          case 4:
            return (color = softOrange);
          case 5:
            return (color = softRed);
          default:
            return (color = backgroundGrey);
        }
      })();
      acc[val.State] = {
        fill: color,
      };
      return acc;
    }, {});

    return output;
  };

  return (
    <USAMap
      width="100%"
      customize={statesFilling(selected)}
      onClick={mapHandler}
    />
  );
};

export default PublicGraphMap;
