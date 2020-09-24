import React from "react";
import numeral from "numeral";
import DataExtract from "../PlanProfileDataExtract";
import common from "../../commonFunctions/common";
import { Doughnut } from "react-chartjs-2";
import dataReducer from "../../../../components/dataReducer";
import Carriers from "../DrillDown/HealthCare/Carriers";
import Brokers from "../DrillDown/HealthCare/Brokers";
import BrokerFailures from "../DrillDown/HealthCare/BrokerFailures";

export default (props) => {
  const database = props.info;
  const brokerCommissions = {
    labels: ["Plan", "Industry", "City"],
    datasets: [
      {
        data: dataReducer.arrayReducer([
          DataExtract.lastYearBrokerCommissions(database.data[0])[0],
          DataExtract.industryBrokerCommissions(database.data[0])[0],
          DataExtract.cityBrokerCommissions(database.data[0])[0],
        ]),
        backgroundColor: ["#4babe3", "#ffb142", "#FF6384"],
        hoverBackgroundColor: ["#388FC2", "#ff9600", "#fc1e4e"],
      },
    ],
  };

  const brokerFees = {
    labels: ["Plan", "Industry", "City"],
    datasets: [
      {
        data: dataReducer.arrayReducer([
          DataExtract.lastYearBrokerFees(database.data[0])[0],
          DataExtract.industryBrokerFees(database.data[0])[0],
          DataExtract.cityBrokerFees(database.data[0])[0],
        ]),
        backgroundColor: ["#4babe3", "#ffb142", "#FF6384"],
        hoverBackgroundColor: ["#388FC2", "#ff9600", "#fc1e4e"],
      },
    ],
  };
  return (
    <div className="plan-businessInfo  plan-graphs">
      <div className="chart-plan-section">
        <div className="plan-profile-chartsDiv">
          <Doughnut data={brokerCommissions} />
          <p>
            Broker Commissions
            <small className="form-text text-muted">
              (
              {dataReducer.arrayCategory([
                DataExtract.lastYearBrokerCommissions(database.data[0])[0],
                DataExtract.industryBrokerCommissions(database.data[0])[0],
                DataExtract.cityBrokerCommissions(database.data[0])[0],
              ])}
              )
            </small>
          </p>
        </div>
        <div className="plan-profile-chartsDiv">
          <Doughnut data={brokerFees} />
          <p>
            Broker Fees
            <small className="form-text text-muted">
              (
              {dataReducer.arrayCategory([
                DataExtract.lastYearBrokerFees(database.data[0])[0],
                DataExtract.industryBrokerFees(database.data[0])[0],
                DataExtract.cityBrokerFees(database.data[0])[0],
              ])}
              )
            </small>
          </p>
        </div>
      </div>

      <div className="plan-table-section" style={{ marginTop: "3%" }}>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.data[0].map((element, index) => {
                if (element.IsCity === true) {
                  return <th key={index}>City in {element.Year}</th>;
                } else if (element.IsBusinessCode === true) {
                  return <th key={index}>Industry for {element.Year}</th>;
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
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Carriers companyID={props.companyID} />
        <Brokers companyID={props.companyID} />
        <BrokerFailures companyID={props.companyID} />
      </div>
    </div>
  );
};
