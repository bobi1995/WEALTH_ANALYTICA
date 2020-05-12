import AllStates from "../../../global/variables";
import React from "react";
import Moment from "react-moment";
import "moment-timezone";

//****************COMMON FUNCTIONS********* */
const commonFunction = () => {
  const allStates = JSON.parse(sessionStorage.getItem("States"));

  const statesString = allStates.filter((el) => el.Type === 2);
  if (statesString.length > 0) {
    const states = statesString.map((el) => el.State);
    const purchasedStates = [];
    AllStates.filter((el) => {
      const parts = el.split(" - ");
      states.forEach((abr) => {
        if (parts[1] == abr) {
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
      const parts = el.split(" - ");
      states.forEach((abr) => {
        if (parts[1] == abr) {
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
      const parts = el.split(" - ");
      states.forEach((abr) => {
        if (parts[1] == abr) {
          purchasedStates.push(abr);
        }
      });
    });

    return purchasedStates;
  } else return [];
};

const fullNameByAbbr = (abbr) => {
  return AllStates.filter((el) => {
    const parts = el.split(" - ");
    if (parts[1] == abbr) {
      return el;
    }
  });
};
//**********PAID STATES FOR INFO TABLE*************/

const paidStatesAdvanced = () => {
  const allStates = JSON.parse(sessionStorage.getItem("States"));
  return allStates.map((el, index) => {
    if (el.Type === 2) {
      return (
        <tr key={index}>
          <td>{fullNameByAbbr(el.State)}</td>
          <td>
            <Moment format="MMM/DD/YYYY">{el.EndDate}</Moment>
          </td>
        </tr>
      );
    }
  });
};
//**********PAID BASIC STATES FOR INFO TABLE*************/

const paidStatesBasic = () => {
  const allStates = JSON.parse(sessionStorage.getItem("States"));
  return allStates.map((el, index) => {
    if (el.Type === 1) {
      return (
        <tr key={index}>
          <td>{fullNameByAbbr(el.State)}</td>
          <td>
            <Moment format="MMM/DD/YYYY">{el.EndDate}</Moment>
          </td>
        </tr>
      );
    }
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
  dataListStates,
  dataListCities,
  dataListBasicStates,
  commonFunctionBasics,
  paidStatesBasic,
  commonFunctionShortAbbrBasic,
  paidStatesAdvanced,
  fullNameByAbbr,
};
