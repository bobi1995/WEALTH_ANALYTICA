import React from "react";
import commonFunctions from "../commonFunctions/common";
import numeral from "numeral";
import DataExtract from "./OnePagerDataExtract";
import common from "../commonFunctions/common";
import { allYears } from "../../../global/Years";
import { backgroundGrey } from "../../../global/Colors";
const OnePagerPensionPlan = (props) => {
  const uniqueYears = allYears;

  const checkClicked = (e) => {
    if (e.target.hasAttribute("checked")) {
      e.target.setAttribute("checked", "false");
    } else {
      e.target.setAttribute("checked", "true");
    }
    props.types[2].map((element, index) => {
      if (document.getElementById(element.Type).checked) {
        return (document.getElementById(element.Type + index).style.display =
          "block");
      } else {
        return (document.getElementById(element.Type + index).style.display =
          "none");
      }
    });
  };
  return (
    <div className="onepager-bottomtables-maindiv">
      {/**********************UNIQUE TYPES***************************************** */}
      {props.types[2].length > 0 ? (
        <div
          className="onepager-bottomtables-table "
          style={{ backgroundColor: backgroundGrey }}
        >
          <div
            className="plan-profile-chartsDiv"
            style={{ width: "100%", padding: "3%" }}
          >
            <h1 className="onepager-bottomtables-h1">Types summary</h1>
            <table className="table table-striped table-bordered table-sm table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Type</th>
                  <th data-html2canvas-ignore>More</th>
                  <th>Statistics</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {props.types[2].map((element, index) => {
                  return (
                    <tr key={index}>
                      <td className="align-middle">
                        {element.Type &&
                          commonFunctions.splitCapitalLetterString(
                            element.Type
                          )}
                      </td>
                      <td className="align-middle" data-html2canvas-ignore>
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
                                        return (
                                          <td key={id}>
                                            {numeral(el.Value).format("0,0")}
                                          </td>
                                        );
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
      {/**********************PENSION TYPES***************************************** */}
      {props.types[2].length > 0
        ? props.types[2].map((element, index) => {
            return (
              <div
                key={index}
                id={element.Type + index}
                className="onepager-bottomtables-table onepager-hidden-tables"
                style={{ backgroundColor: backgroundGrey }}
              >
                <div
                  className="plan-profile-chartsDiv"
                  style={{ width: "100%", padding: "3%" }}
                >
                  <h1 className="onepager-bottomtables-h1">
                    {element.Type &&
                      commonFunctions.splitCapitalLetterString(element.Type)}
                  </h1>
                  <table className="table table-striped table-bordered table-sm table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th>Description</th>
                        {uniqueYears.map((el, ind) => {
                          return <th key={ind}>{el}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody className="table-hover">
                      {element.Characteristics &&
                        element.Characteristics.map((e, i) => {
                          return (
                            <tr key={i}>
                              <td className="onepager-pesion-description">
                                {e.Description}
                                <span className="onepager-tooltip">
                                  {e.Definition}
                                </span>
                              </td>
                              {uniqueYears.map((year, yearID) => {
                                if (e.Years.includes(year)) {
                                  return (
                                    <td key={yearID}>
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                        style={{ color: "green" }}
                                      ></i>
                                    </td>
                                  );
                                } else {
                                  return <td key={yearID}>N/A</td>;
                                }
                              })}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default OnePagerPensionPlan;
