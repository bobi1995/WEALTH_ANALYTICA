import React from "react";

const dataReturn = array => {
  return {
    labels: ["2016", "2017", "2018"],
    datasets: [
      {
        data: array,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["red", "blue", "yellow"]
      }
    ]
  };
};
export default dataReturn;
