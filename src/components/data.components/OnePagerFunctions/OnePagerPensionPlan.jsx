import React, { useEffect, Component } from "react";
import commonFunctions from "../commonFunctions/common";
import numeral from "numeral";
import DataExtract from "./OnePagerDataExtract";

const OnePagerPensionPlan = props => {
  const uniqueYears = DataExtract.uniqueYearsPension();

  useEffect(() => {});
  const checkClicked = e => {
    if (e.target.hasAttribute("checked")) {
      e.target.setAttribute("checked", "false");
    } else {
      e.target.setAttribute("checked", "true");
    }
    props.types[2].map((element, index) => {
      if (document.getElementById(element.Type).checked) {
        document.getElementById(element.Type + index).style.display = "block";
      } else {
        document.getElementById(element.Type + index).style.display = "none";
      }
    });
  };
  return (
    <div className="onepager-bottomtables-maindiv">
      {/**********************UNIQUE TYPES***************************************** */}
      {props.types[2].length > 0 ? (
        <div className="onepager-bottomtables-table ">
          <h1 className="onepager-bottomtables-h1">Types summary</h1>
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Type</th>
                <th>More</th>
                <th>Statistics</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {props.types[2].map((element, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      {element.Type &&
                        commonFunctions.splitCapitalLetterString(element.Type)}
                    </td>
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

                            {element.Participants.reverse().map((el, ind) => {
                              return uniqueYears.map((e, i) => {
                                // console.log(el.Year);
                                if (el.Year == e) {
                                  return (
                                    <td key={ind}>
                                      ${numeral(el.Value).format("0,0")}
                                    </td>
                                  );
                                }
                              });
                            })}
                          </tr>

                          <tr>
                            <th>Total Asset</th>
                            {element.TotalAssets.reverse().map(
                              (element, index) => (
                                <td key={index}>
                                  ${numeral(element.Value).format("0,0")}
                                </td>
                              )
                            )}
                          </tr>
                          <tr>
                            <th>Net Asset</th>
                            {element.NetAssets.reverse().map(
                              (element, index) => (
                                <td key={index}>
                                  ${numeral(element.Value).format("0,0")}
                                </td>
                              )
                            )}
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
                            <td>{e.Description}</td>
                            {uniqueYears.map((year, yearID) => {
                              if (e.Years.includes(year)) {
                                return <td key={yearID}>Y</td>;
                              } else {
                                return <td key={yearID}>N</td>;
                              }
                            })}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default OnePagerPensionPlan;
