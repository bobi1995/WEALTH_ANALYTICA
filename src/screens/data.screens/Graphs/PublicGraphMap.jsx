import React, { useState, useEffect } from "react";
import "./map.css";
import USAMap from "react-usa-map";

const PublicGraphMap = ({ setState }) => {
  const [selected, setSelected] = useState();
  const mapHandler = (event) => {
    setState(event.target.dataset.name);
    setSelected(event.target.dataset.name);
  };

  const statesFilling = (state) => {
    return {
      [state]: {
        fill: "navy",
      },
    };
  };

  return <USAMap customize={statesFilling(selected)} onClick={mapHandler} />;
};

export default PublicGraphMap;
