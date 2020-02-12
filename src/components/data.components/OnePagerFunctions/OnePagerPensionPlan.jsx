import React from "react";
import commonFuctions from "../commonFunctions/common";
import numeral from "numeral";
import DataExtract from "./OnePagerDataExtract";

const OnePagerPensionPlan = props => {
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
                        commonFuctions.splitCapitalLetterString(element.Type)}
                    </td>
                    <td className="align-middle">
                      <div className="slideThree">
                        {console.log(element.Type)}
                        <input
                          type="checkbox"
                          value="None"
                          id={element.Type}
                          name="check"
                        />
                        <label htmlFor={element.Type}></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <table className="onepager-small-table">
                        <thead>
                          <tr>
                            <th></th>
                            {DataExtract.uniqueYearsPension(
                              props.types[2][index]
                            ).map((element, index) => {
                              return <th key={index}>{element}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Participants</th>

                            {element.Participants.map((element, index) => (
                              <td key={index}>
                                {numeral(element.Value).format("0,0")}
                              </td>
                            ))}
                          </tr>

                          <tr>
                            <th>Total Asset</th>
                            {element.TotalAssets.map((element, index) => (
                              <td key={index}>
                                ${numeral(element.Value).format("0,0")}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <th>Net Asset</th>
                            {element.NetAssets.map((element, index) => (
                              <td key={index}>
                                ${numeral(element.Value).format("0,0")}
                              </td>
                            ))}
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
      {props.types[0].length > 0
        ? DataExtract.uniquePensionTypes(props.types[0]).map(
            (element, index) => {
              {
                console.log(document.getElementById(`${element}`));
              }
            }
          )
        : ""}
    </div>
  );
};

export default OnePagerPensionPlan;
