import React from "react";
import DataExtract from "./OnePagerDataExtract";
import numeral from "numeral";

const OnePagerPensionPlan = props => {
  return (
    <div className="onepager-bottomtables-maindiv">
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
                  <td>{element.Type}</td>
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
                  <td>{element.Type}</td>
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
