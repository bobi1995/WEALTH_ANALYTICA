import React, { useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    width: "40%",
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
    maxHeight: 440,
  },
  title: {
    flex: "1 1 100%",
  },
});

const ComplianceTable = ({ data }) => {
  const classes = useStyles();
  let rowCount = Object.keys(data[0].accountant).length;
  let counter = 0;
  //COUNT FAILURES (0 - OK, 1 - FAIL)
  data.map((el) =>
    el.business
      ? ""
      : Object.values(el.accountant).filter((item) =>
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
            <TableRow>
              {/**EligibleAssets*/}
              <TableCell>Eligible Assets</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.EligibleAssets} Plans are with Ineligible Asset`
                  ) : row.accountant.EligibleAssets === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantTotalParticipants*/}
            <TableRow>
              <TableCell>Accountant Total Participants</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantTotalParticipants}% have less than 100 participants`
                  ) : row.accountant.AccountantTotalParticipants === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantAuditScope*/}
            <TableRow>
              <TableCell>Accountant Audit Scope</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantAuditScope}% the scope remained intact`
                  ) : row.accountant.AccountantAuditScope === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantOpinion */}
            <TableRow>
              <TableCell>Accountant Opinion</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantOpinion}%  has a positive opinion`
                  ) : row.accountant.AccountantOpinion === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantWaiver */}
            <TableRow>
              <TableCell>Accountant Waiver</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantWaiver}% applied for the waiver`
                  ) : row.accountant.AccountantWaiver === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* --------------------STATISTIC SECTION------------------------------- */}
      <Box className={classes.statsSection}>Statistics!</Box>
    </Box>
  );
};

export default ComplianceTable;
