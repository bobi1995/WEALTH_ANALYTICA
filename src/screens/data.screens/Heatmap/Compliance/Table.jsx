import React, { useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import numeral from "numeral";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    width: "40%",
    minWidth: 650,
    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: "1px solid #378FC3",
  },
  tableHeader: { color: "#378FC3", fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  previewBtn: {
    textTransform: "none",
  },
  statsSection: {
    width: "40%",
    minWidth: 650,
    maxHeight: 440,
  },
  title: {
    flex: "1 1 100%",
  },
});

const dollars = [
  "AssetNotValuesAmt",
  "BenefitPaymentFailureAmt",
  "ContributionFailureAmt",
  "ContributionNonCashAmt",
  "InvConcentration20Amt",
  "LeasesInDefaultAmt",
  "LoansInDefaultAmt",
  "LossDiscoverAmt",
  "PartyIntNotReportingAmt",
  "PensionFunding412Amt",
  "ReserveTermAmt",
];

const ComplianceTable = ({ data }) => {
  const classes = useStyles();
  let rowCount = Object.keys(data[0].compliance).length;
  let counter = 0;
  console.log(rowCount);
  //COUNT FAILURES (0 - OK, 1 - FAIL)
  data.map((el) =>
    el.business
      ? ""
      : Object.values(el.compliance).filter((item) =>
          item === 1 ? counter++ : ""
        )
  );

  const chartData = {
    labels: ["Checks", "Failures"],
    datasets: [
      {
        data: [rowCount - counter, counter],
        backgroundColor: ["green", "red"],
        hoverBackgroundColor: ["#3CB371", "#ff7f7f"],
      },
    ],
  };

  console.log(counter);
  return (
    <Box className={classes.container}>
      <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Field</TableCell>
              {data.map((el, ind) =>
                el.business ? (
                  <TableCell key={ind} className={classes.tableHeader}>
                    Industry for {el.year}
                  </TableCell>
                ) : (
                  <TableCell key={ind} className={classes.tableHeader}>
                    {el.year}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(rowCount)].map((_, i) => {
              let current_compliance_key = Object.keys(data[0].compliance)[i];

              return (
                <TableRow key={i}>
                  <TableCell>
                    {current_compliance_key
                      .match(/[A-Z][a-z]+|[0-9]+/g)
                      .join(" ")}
                  </TableCell>
                  {data.map((el, j) => {
                    let cell_content = el.compliance[current_compliance_key];
                    return (
                      <TableCell key={j}>
                        {el.business ? (
                          dollars.includes(current_compliance_key) ? (
                            `$${numeral(cell_content).format(
                              "0,0"
                            )} is average for the Industry`
                          ) : (
                            `${cell_content}% Industry is in Compliance`
                          )
                        ) : cell_content === 0 ? (
                          <CheckIcon style={{ color: "green" }} />
                        ) : (
                          <ClearIcon style={{ color: "red" }} />
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* --------------------STATISTIC SECTION------------------------------- */}
      <Box className={classes.statsSection}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h6" component="div">
            Summary
          </Typography>
          <TableContainer>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader}>
                    All Fields
                  </TableCell>
                  <TableCell className={classes.tableHeader}>Checks</TableCell>
                  <TableCell className={classes.tableHeader}>
                    Failures
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{rowCount}</TableCell>
                  <TableCell>{rowCount - counter}</TableCell>
                  <TableCell>{counter}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Doughnut
          width={40}
          height={20}
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </Box>
    </Box>
  );
};

export default ComplianceTable;
