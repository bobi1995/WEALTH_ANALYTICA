import allStates from "../../../global/variables";
import React from "react";

//******************EXTRACTS DIRECTLY ALL STATES FROM SESSION STORAGE */
const extractStates = () => {
  const purchsedStates = JSON.parse(sessionStorage.getItem("States"));
  if (purchsedStates) {
    return purchsedStates;
  } else return [];
};

//******************EXTRACTS FULL NAME STATES AND CREATES OBJECTS */
const extractPaidFullName = () => {
  const purchasedStates = extractStates();
  let array = [];
  allStates.filter((el) => {
    purchasedStates.forEach((purchased) => {
      if (el.abbriviation === purchased.State) {
        array.push({
          name: el.name,
          type: purchased.Type,
          abbriviation: purchased.State,
          expires: purchased.EndDate,
        });
      }
    });
  });
  return array;
};

// Name By Abbriviation
const fullNameByAbbr = (abbr) => {
  let name;
  allStates.filter((el) => {
    if (el.abbriviation == abbr) {
      name = el.name;
    }
  });
  return name;
};

//******************ONLY FOR DASHBOARD */
const paidFullNameDASHBOARD = () => {
  const purchasedStates = extractPaidFullName();
  return purchasedStates.filter((state) => {
    if (state.type === 2) {
      return (
        <option key={state.abbriviation}>
          {state.name} - {state.abbriviation}
        </option>
      );
    }
  });
};

export default {
  extractStates,
  extractPaidFullName,
  paidFullNameDASHBOARD,
  fullNameByAbbr,
};
