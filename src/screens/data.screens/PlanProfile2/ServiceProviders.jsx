import React from "react";
import { Bar } from "react-chartjs-2";
import DataExtract from "./PlanProfileDataExtract";
import dataReducer from "../../../components/dataReducer";
import common from "../commonFunctions/common";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";
import NetPayments from "./ServiceProviders/NetPayments";
import Failures from "./ServiceProviders/Failures";
import Terminations from "./ServiceProviders/Terminations";

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

export default (props) => {
  const database = props.data;
  const classes = useStyles();

  const reducedDirectFees = dataReducer.arrayReducer(
    DataExtract.ProvidersDirectFees(database)
  );
  const reducedIndirectFees = dataReducer.arrayReducer(
    DataExtract.ProvidersIndirectFees(database)
  );

  const directFees = {
    labels: DataExtract.realYearsPension(database),
    datasets: [
      {
        label: "Providers Direct Fees",
        backgroundColor: "rgba(0, 150, 0,0.2)",
        borderColor: "rgba(0, 150, 0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0, 150, 0,0.4)",
        hoverBorderColor: "rgba(0, 150, 0,1)",
        data: reducedDirectFees,
      },
    ],
  };
  const indirectFees = {
    labels: DataExtract.realYearsPension(database),
    datasets: [
      {
        label: "Providers Indirect Fees",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: reducedIndirectFees,
      },
    ],
  };

  return (
    <Box style={{ marginBottom: "3%" }}>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Service Providers
        </Typography>
      </Box>
      <Box className={classes.charteSection}>
        <Box className={classes.chart}>
          <Bar
            data={directFees}
            options={dataReducer.optionReturn(
              DataExtract.ProvidersDirectFees(database)
            )}
          />
        </Box>
        <Box className={classes.chart}>
          <Bar
            data={indirectFees}
            options={dataReducer.optionReturn(
              DataExtract.ProvidersIndirectFees(database)
            )}
          />
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
                    <th className={classes.cellCenter} key={index}>
                      City in {element.Year}
                    </th>
                  );
                } else if (element.IsBusinessCode === true) {
                  return (
                    <th className={classes.cellCenter} key={index}>
                      Industry for {element.Year}
                    </th>
                  );
                } else {
                  return (
                    <th className={classes.cellCenter} key={index}>
                      {element.Year}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th style={{ textAlign: "center" }} className="thead-dark">
                Eligible Names Count
              </th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.ProviderEligibleNamesCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th style={{ textAlign: "center" }} className="thead-dark">
                Other Names Count
              </th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.ProviderOtherNamesCount).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th style={{ textAlign: "center" }} className="thead-dark">
                Other Providers Direct Fees
              </th>
              {database.map((element, index) => {
                return element.ProviderOtherDirectCompATM >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.ProviderOtherDirectCompATM)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.ProviderOtherDirectCompATM)}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th style={{ textAlign: "center" }} className="thead-dark">
                Other Providers Indirect Fees
              </th>
              {database.map((element, index) => {
                return element.ProviderOtherTotIndCompATM >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.ProviderOtherTotIndCompATM)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.ProviderOtherTotIndCompATM)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <NetPayments companyID={props.companyID} />
        <Failures companyID={props.companyID} />
        <Terminations companyID={props.companyID} />
      </Box>
    </Box>
  );
};
