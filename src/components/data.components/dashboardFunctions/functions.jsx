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
const dataListStates = arr => {
  const array = commonFunction();
  return array.map((state, index) => {
    if (!arr.includes(state)) {
      return <option key={state}>{state}</option>;
    }
  });
};

//*************INPUT FIELD FOR CITIES***************** */
const dataListCities = arr => {
  return arr.map((city, index) => {
    return <option key={index}>{city}</option>;
  });
};

export default { commonFunction, statesNames, dataListStates, dataListCities };
