import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Bar, Line } from "react-chartjs-2";
import common from "../commonFunctions/common";
import dataReducer from "../../../components/dataReducer";
import DataExtract from "./PlanProfileDataExtract";
import { primaryBlue } from "../../../global/Colors";
import FinancialDetails from "./Financial/FinancialDetails";

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

const Financial = (props) => {
  const classes = useStyles();
  const database = props.data;
  const reducedData = dataReducer.arrayReducer(
    DataExtract.netAssetsPension(database)
  );

  const reducedNetIncome = dataReducer.arrayReducer(
    DataExtract.netIncome(database)
  );

  const aumhcChartData = {
    labels: DataExtract.realYearsPension(database),
    datasets: [
      {
        label: "Net Assets",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: reducedData,
      },
    ],
  };
  const data = {
    labels: DataExtract.realYearsPension(database),
    datasets: [
      {
        label: "Net Income",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: reducedNetIncome,
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
            options={dataReducer.optionReturn(
              DataExtract.netAssetsPension(database)
            )}
          />
        </Box>
        <Box className={classes.chart}>
          <Line
            data={data}
            width={50}
            height={20}
            options={dataReducer.optionReturn(DataExtract.netIncome(database))}
          />
        </Box>
      </Box>

      <Box className={classes.table}>
        <table className="table table-striped table-bordered table-sm table-hover ">
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
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Total Assets
                <span className="onepager-tooltip">
                  Total assets not including liabilities
                </span>
              </th>
              {database.map((element, index) => {
                return element.TotalAssets >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.TotalAssets)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.TotalAssets)}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Net Assets
                <span className="onepager-tooltip">
                  Total Assets less Liabilities
                </span>
              </th>
              {database.map((element, index) => {
                return element.NetAssets >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.NetAssets)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.NetAssets)}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark">Net Income</th>
              {database.map((element, index) => {
                if (element.ContributionFailureInd) {
                  return element.NetIncome >= 0 ? (
                    <td style={{ textAlign: "center" }} key={index}>
                      <i
                        className="fa fa-flag"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                      ${common.reducer(element.NetIncome)}
                    </td>
                  ) : (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="negative-numbers"
                    >
                      <i
                        className="fa fa-flag"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                      ${common.reducer(element.NetIncome)}
                    </td>
                  );
                } else {
                  return element.NetIncome >= 0 ? (
                    <td style={{ textAlign: "center" }} key={index}>
                      ${common.reducer(element.NetIncome)}
                    </td>
                  ) : (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="negative-numbers"
                    >
                      ${common.reducer(element.NetIncome)}
                    </td>
                  );
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark">Total Expenses</th>
              {database.map((element, index) => {
                return element.TotalExpenses >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.TotalExpenses)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.TotalExpenses)}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Total Distributions
                <span className="onepager-tooltip">
                  Distribution includes only payments of benefits during the
                  plan year, in cash, in kind, by purchase for the distributee
                  of an annuity contract from an insurance company, or by
                  distribution of life insurance contracts. Corrective
                  distributions of excess deferrals, excess contributions, or
                  excess aggregate contributions, or the income allocable to any
                  of these amounts; 2. Distributions of automatic contributions
                  pursuant to Code section 414(w); 3. The distribution of
                  elective deferrals or the return of employee contributions to
                  correct excess annual additions under Code section 415, or the
                  gains attributable to these amounts; and 4. A loan deemed as a
                  distribution under Code section
                </span>
              </th>
              {database.map((element, index) => {
                if (element.ContributionFailureInd) {
                  return element.TotalDistributions >= 0 ? (
                    <td style={{ textAlign: "center" }} key={index}>
                      <i
                        className="fa fa-flag"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                      ${common.reducer(element.TotalDistributions)}
                    </td>
                  ) : (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="plan-profile-red"
                    >
                      <i
                        className="fa fa-flag"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                      ${common.reducer(element.TotalDistributions)}
                    </td>
                  );
                } else {
                  return element.TotalDistributions >= 0 ? (
                    <td style={{ textAlign: "center" }} key={index}>
                      ${common.reducer(element.TotalDistributions)}
                    </td>
                  ) : (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="negative-numbers"
                    >
                      ${common.reducer(element.TotalDistributions)}
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <FinancialDetails companyID={props.companyID} />
      </Box>
    </Box>
  );
};

export default Financial;
