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
          <h1 className="onepager-bottomtables-h1">UNIQUE Types</h1>
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark" id="onepager-pension-main-table">
              <tr>
                <th>Type</th>
                <th>Plan Name</th>
                <th>More</th>
                <th>Statistics</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {DataExtract.uniquePensionTypes(props.types[2]).map(
                (element, index) => (
                  <tr key={index}>
                    <td className="align-middle">{element}</td>
                    <td className="align-middle">{element}</td>
                    <td className="align-middle">More</td>
                    <td>
                      <table className="onepager-small-table">
                        <thead>
                          <tr>
                            <th></th>
                            {DataExtract.uniqueYearsPension(props.types[2]).map(
                              (element, index) => (
                                <th key={index}>{element}</th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Participants</th>

                            {DataExtract.participantsPension(
                              props.types[2]
                            ).map((element, index) => {
                              const rowId = document.getElementsByTagName("tr");
                              console.log(rowId);
                              if (index % 2 === 0) {
                                return <th key={index}>{element}</th>;
                              }
                            })}
                          </tr>
                          <tr>
                            <th>Total Asset</th>
                          </tr>
                          <tr>
                            <th>Net Asset</th>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}

      {/**********************PENSION TYPES***************************************** */}
      {props.types[0].length > 0 ? (
        <div className="onepager-bottomtables-table ">
          <h1 className="onepager-bottomtables-h1">Pension Types</h1>
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Year</th>
                <th>Participants</th>
                <th>Total Assets</th>
                <th>Net Assets</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {props.types[0].map((element, index) => (
                <tr key={index}>
                  <td>
                    {element.Type &&
                      commonFuctions.splitCapitalLetterString(element.Type)}
                  </td>
                  <td>{element.Description}</td>
                  <td>{element.Year}</td>
                  <td>{element.Participants}</td>

                  <td>${numeral(element.TotalAssets).format("0,0")}</td>
                  <td>${numeral(element.NetAssets).format("0,0")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
      {/**********************WELFARE TYPES***************************************** */}
      {props.types[1].length > 0 ? (
        <div className="onepager-bottomtables-table ">
          <h1 className="onepager-bottomtables-h1">Welafe Types</h1>
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Year</th>
                <th>Participants</th>
                <th>Total Assets</th>
                <th>Net Assets</th>
                <th>Plan Name</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {props.types[1].map((element, index) => (
                <tr key={index}>
                  <td>
                    {element.Type &&
                      commonFuctions.splitCapitalLetterString(element.Type)}
                  </td>
                  <td>{element.Description}</td>
                  <td>{element.Year}</td>
                  <td>{element.Participants}</td>

                  <td>${numeral(element.TotalAssets).format("0,0")}</td>
                  <td>${numeral(element.NetAssets).format("0,0")}</td>
                  <td>{element.PlanName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OnePagerPensionPlan;
