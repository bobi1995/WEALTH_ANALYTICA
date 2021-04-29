import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import common from "../commonFunctions/common";
import dataReducer from "../../../components/dataReducer";
import DataExtract from "./PlanProfileDataExtract";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";
import Carriers from "./HealthCare/Carriers";
import Brokers from "./HealthCare/Brokers";
import BrokerFailures from "./HealthCare/BrokerFailures";

const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
    marginBottom: "3%",
  },
  chart: {
    width: "45%",
    margin: "0, auto",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
  },
  charteSection: {
    width: "100%",
    margin: "0, auto",
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    marginTop: "3%",
  },
  cellCenter: { textAlign: "center" },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
});

const HealthCare = (props) => {
  const classes = useStyles();
  const database = props.data;

  const brokerCommissions = {
    labels: ["Plan", "Industry", "City"],
    datasets: [
      {
        data: dataReducer.arrayReducer([
          DataExtract.lastYearBrokerCommissions(database)[0],
          DataExtract.industryBrokerCommissions(database)[0],
          DataExtract.cityBrokerCommissions(database)[0],
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
          DataExtract.lastYearBrokerFees(database)[0],
          DataExtract.industryBrokerFees(database)[0],
          DataExtract.cityBrokerFees(database)[0],
        ]),
        backgroundColor: ["#4babe3", "#ffb142", "#FF6384"],
        hoverBackgroundColor: ["#388FC2", "#ff9600", "#fc1e4e"],
      },
    ],
  };

  return (
    <Box style={{ marginBottom: "3%" }}>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Health Care Information
        </Typography>
      </Box>
      <Box className={classes.charteSection}>
        <Box className={classes.chart}>
          <Doughnut data={brokerCommissions} />
          <p style={{ textAlign: "center" }}>
            Broker Commissions
            <small
              className="form-text text-muted"
              style={{ textAlign: "center" }}
            >
              (
              {dataReducer.arrayCategory([
                DataExtract.lastYearBrokerCommissions(database)[0],
                DataExtract.industryBrokerCommissions(database)[0],
                DataExtract.cityBrokerCommissions(database)[0],
              ])}
              )
            </small>
          </p>
        </Box>
        <Box className={classes.chart}>
          <Doughnut data={brokerFees} />
          <p style={{ textAlign: "center" }}>
            Broker Fees
            <small
              className="form-text text-muted"
              style={{ textAlign: "center" }}
            >
              (
              {dataReducer.arrayCategory([
                DataExtract.lastYearBrokerFees(database)[0],
                DataExtract.industryBrokerFees(database)[0],
                DataExtract.cityBrokerFees(database)[0],
              ])}
              )
            </small>
          </p>
        </Box>
      </Box>

      <Box className={classes.table}>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.map((element, index) => {
                if (element.IsCity === true) {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      City in {element.Year}
                    </th>
                  );
                } else if (element.IsBusinessCode === true) {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      Industry for {element.Year}
                    </th>
                  );
                } else {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      {element.Year}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark">Carriers Count</th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.CarriersCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark">Brokers Count</th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.BrokersCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark">Broker Commissions</th>
              {database.map((element, index) => {
                return element.BrokerCommissions >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.BrokerCommissions)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.BrokerCommissions)}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark">Broker Fees</th>
              {database.map((element, index) => {
                return element.BrokerFees >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.BrokerFees)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.BrokerFees)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Carriers companyID={props.companyID} />
        <Brokers companyID={props.companyID} />
        <BrokerFailures companyID={props.companyID} />
      </Box>
    </Box>
  );
};

export default HealthCare;
