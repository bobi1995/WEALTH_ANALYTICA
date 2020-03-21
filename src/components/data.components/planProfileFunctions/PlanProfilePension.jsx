import React from "react";
import numeral from "numeral";
import commonFunctions from "../commonFunctions/common";
import DataExtract from "./PlanProfileDataExtract";
import PlanProfilePensionCharac from "./PlanProfilePensionCharac";
import common from "../commonFunctions/common";

const PlanProfilePension = props => {
  const uniqueYears = DataExtract.uniqueYearsPension();

  const checkClicked = e => {
    if (e.target.hasAttribute("checked")) {
      e.target.setAttribute("checked", "false");
    } else {
      e.target.setAttribute("checked", "true");
    }
    props.types.map((element, index) => {
      if (document.getElementById(element.Type).checked) {
        document.getElementById(element.Type + index).style.display = "block";
      } else {
        document.getElementById(element.Type + index).style.display = "none";
      }
    });
  };
  return (
    <div className="plan-businessInfo">
      {/**********************PENSION TYPES***************************************** */}
      {props.types.length > 0
        ? props.types.map((element, index) => {
            return (
              <div key={index}>
                <div className="plan-table-section ">
                  <h1 className="onepager-bottomtables-h1">
                    {element.PlanName &&
                      commonFunctions.formatString(element.PlanName)}
                  </h1>
                  <table className="table table-striped table-bordered table-sm table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th>Type</th>
                        <th>More</th>
                        <th>Statistics</th>
                      </tr>
                    </thead>
                    <tbody className="table-hover">
                      <tr>
                        <td className="align-middle">
                          {element.Type &&
                            commonFunctions.splitCapitalLetterString(
                              element.Type
                            )}
                        </td>
                        {/*****CHARACTERISTICS */}
                        <td className="align-middle">
                          <div className="slideThree">
                            <input
                              type="checkbox"
                              value="None"
                              id={element.Type}
                              name="check"
                              onClick={checkClicked}
                            />
                            <label htmlFor={element.Type}></label>
                          </div>
                        </td>
                        {/*****STATISTICS */}
                        <td className="align-middle">
                          <table className="onepager-small-table">
                            <thead>
                              <tr>
                                <th></th>
                                {uniqueYears.map((element, index) => {
                                  return <th key={index}>{element}</th>;
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>Participants</th>
                                {/** LOOP THROUGH ALL YEARS POSSIBLE (uniqueYears) AND THEN ASSIGN EXTRACTED YEARS FOR ALL PARTICIPANTS (YEAR BY YEAR) TO ARRAY VARIABLE.
                                 * CHECKING IF ARRAY INCLUDES ALL ELEMENTS OF THE uniqueYears ITEM BY ITEM.
                                 */}
                                {uniqueYears.map((e, i) => {
                                  const array = DataExtract.typesSummaryYears(
                                    element.Participants
                                  );
                                  if (array.includes(e)) {
                                    return element.Participants.reverse().map(
                                      (el, id) => {
                                        if (el.Year === e) {
                                          return <td key={id}>{el.Value}</td>;
                                        }
                                      }
                                    );
                                  } else return <td key={i}>-</td>;
                                })}
                              </tr>

                              <tr>
                                <th>Total Asset</th>
                                {uniqueYears.map((e, i) => {
                                  const array = DataExtract.typesSummaryYears(
                                    element.TotalAssets
                                  );
                                  if (array.includes(e)) {
                                    return element.TotalAssets.reverse().map(
                                      (el, id) => {
                                        if (el.Year === e) {
                                          return el.Value >= 0 ? (
                                            <td key={id}>
                                              ${common.reducer(el.Value)}
                                            </td>
                                          ) : (
                                            <td
                                              key={id}
                                              className="negative-numbers"
                                            >
                                              ${common.reducer(el.Value)}
                                            </td>
                                          );
                                        }
                                      }
                                    );
                                  } else return <td key={i}>-</td>;
                                })}
                              </tr>
                              <tr>
                                <th>Net Asset</th>
                                {uniqueYears.map((e, i) => {
                                  const array = DataExtract.typesSummaryYears(
                                    element.NetAssets
                                  );
                                  if (array.includes(e)) {
                                    return element.NetAssets.reverse().map(
                                      (el, id) => {
                                        if (el.Year === e) {
                                          return el.Value >= 0 ? (
                                            <td key={id}>
                                              ${common.reducer(el.Value)}
                                            </td>
                                          ) : (
                                            <td
                                              key={id}
                                              className="negative-numbers"
                                            >
                                              ${common.reducer(el.Value)}
                                            </td>
                                          );
                                        }
                                      }
                                    );
                                  } else return <td key={i}>-</td>;
                                })}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/**********************PENSION TYPES***************************************** */}
                  <PlanProfilePensionCharac
                    data={element}
                    key={index}
                    id={element.Type + index}
                  />
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default PlanProfilePension;
