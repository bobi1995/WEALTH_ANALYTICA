import React from "react";
import numeral from "numeral";
import DataExtract from "../PlanProfileDataExtract";
import common from "../../commonFunctions/common";

export default props => {
  const database = props.info;

  return (
    <div className="plan-businessInfo">
      <div className="plan-table-section ">
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.data[0].map((element, index) => {
                if (element.IsCity === true) {
                  return (
                    <th key={index}>
                      {database.data[1]} in {element.Year}
                    </th>
                  );
                } else if (element.IsBusinessCode === true) {
                  return (
                    <th key={index}>
                      {database.data[2]} in {element.Year}
                    </th>
                  );
                } else {
                  return <th key={index}>{element.Year}</th>;
                }
              })}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th className="thead-dark">Carriers Count</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.CarriersCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Brokers Count</th>
              {database.data[0].map((element, index) => {
                return (
                  <td key={index}>
                    {numeral(element.BrokersCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Broker Commissions</th>
              {database.data[0].map((element, index) => {
                return element.BrokerCommissions >= 0 ? (
                  <td key={index}>
                    ${common.reducer(element.BrokerCommissions)}
                  </td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${common.reducer(element.BrokerCommissions)}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className="thead-dark">Broker Fees</th>
              {database.data[0].map((element, index) => {
                return element.BrokerFees >= 0 ? (
                  <td key={index}>${common.reducer(element.BrokerFees)}</td>
                ) : (
                  <td key={index} className="negative-numbers">
                    ${common.reducer(element.BrokerFees)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
