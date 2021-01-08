import React from "react";
import { Bar } from "react-chartjs-2";
import DataExtract from "./PlanProfileDataExtract";
import dataReducer from "../../../components/dataReducer";
import common from "../commonFunctions/common";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";

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

  const yeildData = {
    labels: ["Yield", "Contr.Yield", "Return on Inv.", "Return on Assets"],
    datasets: [
      {
        label: "Plan Asset",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: dataReducer.arrayReducer([
          DataExtract.lastYearYield(database)[0],
          DataExtract.lastYearContributionYield(database)[0],
          DataExtract.lastYearExpenseRatio(database)[0],
          DataExtract.lastYearROR(database)[0],
        ]),
        stack: 1,
      },
      {
        label: "Industry",
        backgroundColor: "rgba(248, 148, 6, 0.2)",
        borderColor: "rgba(248, 148, 6, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(248, 148, 6, 0.4)",
        hoverBorderColor: "rgba(248, 148, 6, 1)",
        data: dataReducer.arrayReducer([
          DataExtract.industryYield(database)[0],
          DataExtract.industryContributionYield(database)[0],
          DataExtract.industryExpenseRatio(database)[0],
          DataExtract.industryROR(database)[0],
        ]),
        stack: 2,
      },
      {
        label: "City",
        backgroundColor: "rgba(108, 122, 137, 0.2)",
        borderColor: "rgba(108, 122, 137, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(108, 122, 137 ,0.4)",
        hoverBorderColor: "rgba(108, 122, 137, 1)",
        data: dataReducer.arrayReducer([
          DataExtract.cityYield(database)[0],
          DataExtract.cityContributionYield(database)[0],
          DataExtract.cityExpenseRatio(database)[0],
          DataExtract.cityROR(database)[0],
        ]),
        stack: 3,
      },
    ],
  };

  const aumhcChartData = {
    labels: ["Plan Asset", "Industry", "City"],
    datasets: [
      {
        label: "AUM/HC",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: dataReducer.arrayReducer([
          DataExtract.lastYearAum(database)[0],
          DataExtract.industryAum(database)[0],
          DataExtract.cityAum(database)[0],
        ]),
      },
    ],
  };

  return (
    <Box style={{ marginBottom: "3%" }}>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Financial Information
        </Typography>
      </Box>
      <Box className={classes.charteSection}>
        <Box className={classes.chart}>
          <Bar
            data={aumhcChartData}
            options={dataReducer.optionReturn([
              DataExtract.lastYearAum(database)[0],
              DataExtract.industryAum(database)[0],
              DataExtract.cityAum(database)[0],
            ])}
          />
        </Box>
        <Box className={classes.chart}>
          <Bar
            data={yeildData}
            options={{
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Results in %",
                      fontSize: 15,
                    },
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
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
              <th className="thead-dark onepager-pesion-description">
                AUM/HC
                <span className="onepager-tooltip">
                  Total assets not including liabilities divided by Plan
                  Participants
                </span>
              </th>
              {database.map((element, index) => {
                return element.AUMHC >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.AUMHC)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${numeral(element.AUMHC).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Distribution Yield
                <span className="onepager-tooltip">
                  Yield equals Total Distributon divided by Total Assets
                </span>
              </th>
              {database.map((element, index) => {
                return element.Yield >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.Yield).format("0.00")}%
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    {numeral(element.Yield).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Contribution Yield
                <span className="onepager-tooltip">
                  Contribution Yield equals Participant and Employer
                  Contribution divided by Total Assets
                </span>
              </th>
              {database.map((element, index) => {
                return element.ContributionYield >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.ContributionYield).format("0.00")}%
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    {numeral(element.ContributionYield).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Return on Investment
                <span className="onepager-tooltip">
                  Net Income plus Distributions divided by Total Assets
                </span>
              </th>
              {database.map((element, index) => {
                return element.ExpenseRatio >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.ExpenseRatio).format("0.00")}%
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    {numeral(element.ExpenseRatio).format("0.00")}%
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Return on Assets
                <span className="onepager-tooltip">
                  End of Year Assets less Beginning of Year Assets divided by
                  Beginning of Year Assets
                </span>
              </th>
              {database.map((element, index) => {
                return element.ROR >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.ROR).format("0.00")}%
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    {numeral(element.ROR).format("0.00")}%
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};
