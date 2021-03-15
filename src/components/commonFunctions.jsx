import AllStates from "../global/variables";
import React from "react";
import "moment-timezone";

//****************COMMON FUNCTIONS********* */
const commonFunction = () => {
  const allStates = JSON.parse(localStorage.getItem("States"));

  const statesString = allStates.filter((el) => el.Type === 2);
  if (statesString.length > 0) {
    const states = statesString.map((el) => el.State);
    const purchasedStates = [];
    AllStates.filter((el) =>
      states.forEach((abr) => {
        if (el.abbriviation === abr) {
          purchasedStates.push(el);
        }
      })
    );
    return purchasedStates;
  } else return [];
};

const commonFunctionBasics = () => {
  const allStates = JSON.parse(localStorage.getItem("States"));
  const statesString = allStates.filter((el) => el.Type === 1);
  if (statesString.length > 0) {
    const states = statesString.map((el) => el.State);
    const purchasedStates = [];
    AllStates.filter((el) =>
      states.forEach((abr) => {
        if (el.abbriviation === abr) {
          purchasedStates.push(el);
        }
      })
    );

    return purchasedStates;
  } else return [];
};

const commonFunctionShortAbbrBasic = () => {
  const allStates = JSON.parse(localStorage.getItem("States"));
  const statesString = allStates.filter((el) => el.Type === 1);
  if (statesString.length > 0) {
    const states = statesString.map((el) => el.State);
    const purchasedStates = [];
    AllStates.filter((el) =>
      states.forEach((abr) => {
        if (el.abbriviation === abr) {
          purchasedStates.push(abr);
        }
      })
    );

    return purchasedStates;
  } else return [];
};

const fullNameByAbbr = (abbr) => {
  AllStates.forEach((el) => {
    if (abbr && el.abbriviation === abbr.State) {
      return el.name;
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
  dataListCities,
  dataListBasicStates,
  commonFunctionBasics,
  commonFunctionShortAbbrBasic,
  fullNameByAbbr,
};
