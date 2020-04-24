import AllStates from "../../../global/variables";
import React from "react";

//****************COMMON FUNCTIONS********* */
const commonFunction = () => {
  const allStates = JSON.parse(sessionStorage.getItem("States"));
  const statesString = allStates.filter((el) => el.Type === 2);
  if (statesString.length > 0) {
    const states = statesString.map((el) => el.State);
    const purchasedStates = [];
    AllStates.filter((el) => {
      states.forEach((abr) => {
        if (el.includes(abr)) {
          purchasedStates.push(el);
        }
      });
    });

    return purchasedStates;
  } else return [];
};

const commonFunctionBasics = () => {
  const allStates = JSON.parse(sessionStorage.getItem("States"));
  const statesString = allStates.filter((el) => el.Type === 1);
  if (statesString.length > 0) {
    const states = statesString.map((el) => el.State);
    const purchasedStates = [];
    AllStates.filter((el) => {
      states.forEach((abr) => {
        if (el.includes(abr)) {
          purchasedStates.push(el);
        }
      });
    });

    return purchasedStates;
  } else return [];
};

const commonFunctionShortAbbrBasic = () => {
  const allStates = JSON.parse(sessionStorage.getItem("States"));
  const statesString = allStates.filter((el) => el.Type === 1);
  if (statesString.length > 0) {
    const states = statesString.map((el) => el.State);
    const purchasedStates = [];
    AllStates.filter((el) => {
      states.forEach((abr) => {
        if (el.includes(abr)) {
          purchasedStates.push(abr);
        }
      });
    });

    return purchasedStates;
  } else return [];
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

//**********PAID BASIC STATES FOR INFO TABLE*************/

const basicStatesNames = () => {
  const array = commonFunctionBasics();
  return array.map((state, index) => {
    return (
      <tr key={index}>
        <td>{state}</td>
      </tr>
    );
  });
};

//*************INPUT FIELD FOR STATES***************** */
const dataListStates = (arr) => {
  const array = commonFunction();
  return array.map((state, index) => {
    if (!arr.includes(state)) {
      return <option key={state}>{state}</option>;
    }
  });
};

//*************INPUT FIELD FOR CITIES***************** */
const dataListCities = (arr) => {
  return arr.map((city, index) => {
    return <option key={index}>{city}</option>;
  });
};

//*************INPUT FIELD FOR STATES***************** */
const dataListBasicStates = (arr) => {
  const array = commonFunctionBasics();
  return array.map((state, index) => {
    return <option key={state}>{state}</option>;
  });
};
export default {
  commonFunction,
  statesNames,
  dataListStates,
  dataListCities,
  dataListBasicStates,
  commonFunctionBasics,
  basicStatesNames,
  commonFunctionShortAbbrBasic,
};
