import React from "react";
import numeral from "numeral";
import commonFunctions from "../commonFunctions/common";
import DataExtract from "./PlanProfileDataExtract";
const PlanProfilePension = props => {
  console.log(props);
  return (
    <div className="plan-businessInfo">
      {/**********************PENSION TYPES***************************************** */}
      {props.types.length > 0
        ? props.types.map((element, index) => {
            console.log(element);
            return (
              <div key={index} className="plan-table-section">
                <h1 className="onepager-bottomtables-h1">
                  {element.PlanName &&
                    commonFunctions.formatString(element.PlanName)}
                </h1>
                <table className="table table-striped table-bordered table-sm table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Type</th>
                      <th>Participants</th>
                      <th>Total Assets</th>
                      <th>Net Assets</th>
                      <th>Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="table-hover">
                    <tr>
                      <td>
                        {element.Type &&
                          commonFunctions.splitCapitalLetterString(
                            element.Type
                          )}
                      </td>
                      <td>
                        <table className="onepager-small-table">
                          <thead>
                            <tr>
                              {DataExtract.yearsPesion(
                                element.Participants
                              ).map((el, ind) => (
                                <th key={ind}>{el}</th>
                              ))}
                            </tr>
                          </thead>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default PlanProfilePension;
