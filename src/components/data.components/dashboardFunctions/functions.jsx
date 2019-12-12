import AllStates from "../../../global/variables";
import React from "react";

//****************COMMON FUNCTION********* */
const commonFunction = () => {
  const statesString = sessionStorage.getItem("States");
  const states = statesString.split(",");
  const purchasedStates = [];

  const officialArray = [];

  AllStates.filter(el => {
    states.forEach(abr => {
      if (el.includes(abr)) {
        purchasedStates.push(el);
      }
    });
  });

  purchasedStates.forEach(el => {
    const n = el.split(" - ");
    officialArray.push(n[1]);
    officialArray.push(n[0]);
  });
  return purchasedStates;
};

//**********PAID STATES FOR INFO TABLE*************/

const statesNames = () => {
  const array = commonFunction();
  return array.map((state, index) => {
    return (
      <tr key={index}>
        <td>{state}</td>
      </tr>
    );
  });
};

//*************INPUT FIELD FOR STATES***************** */
const dataListStates = () => {
  const array = commonFunction();
  return array.map((state, index) => {
    return <option key={state}>{state}</option>;
  });
};

export default { statesNames, dataListStates };
