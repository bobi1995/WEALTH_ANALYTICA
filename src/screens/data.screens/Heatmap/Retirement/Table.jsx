import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import numeral from "numeral";
import { primaryBlue } from "../../../../global/Colors";
const useStyles = makeStyles({
  table: {
    width: "100%",
    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: `1px solid ${primaryBlue}`,
  },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
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

const RetirementTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table stickyHeader size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>Field</TableCell>
            {data.map((el, ind) =>
              el.IsBusinessCodeInState ? (
                <TableCell key={ind} className={classes.tableHeader}>
                  Industry for {el.Year}
                </TableCell>
              ) : (
                <TableCell key={ind} className={classes.tableHeader}>
                  {el.Year}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {/**DistributionsParticipant*/}
          <TableRow>
            <TableCell>Distributions Participant</TableCell>
            {data.map((row, ind) => (
              <TableCell key={ind}>
                ${numeral(row.DistributionsParticipant).format("0,0")}
              </TableCell>
            ))}
          </TableRow>

          {/**AverageParticipantBalance*/}
          <TableRow>
            <TableCell>Average Participant Balance</TableCell>
            {data.map((row, ind) => (
              <TableCell key={ind}>
                ${numeral(row.AverageParticipantBalance).format("0,0")}
              </TableCell>
            ))}
          </TableRow>

          {/**EstimatedEmployeeContributionPerYear*/}
          <TableRow>
            <TableCell>Estimated Employee Contrib. Per Year</TableCell>
            {data.map((row, ind) => (
              <TableCell key={ind}>
                $
                {numeral(row.EstimatedEmployeeContributionPerYear).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>

          {/**EstAnnualIncome*/}
          <TableRow>
            <TableCell>Est. Annual Income</TableCell>
            {data.map((row, ind) => (
              <TableCell key={ind}>
                ${numeral(row.EstAnnualIncome).format("0,0")}
              </TableCell>
            ))}
          </TableRow>

          {/**RetirementIncome*/}
          <TableRow>
            <TableCell>Retirement Income</TableCell>
            {data.map((row, ind) => (
              <TableCell key={ind}>
                ${numeral(row.RetirementIncome).format("0,0")}
              </TableCell>
            ))}
          </TableRow>

          {/**WAEstimatedAverageParticipantBalance*/}
          <TableRow>
            <TableCell>WA Estimated Average Participant Balance</TableCell>
            {data.map((row, ind) => (
              <TableCell key={ind}>
                $
                {numeral(row.WAEstimatedAverageParticipantBalance).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>

          {/**WAEstimatedYearsToRetirementReadiness*/}
          <TableRow>
            <TableCell>WA Estimated Years To Retirement Readiness</TableCell>
            {data.map((row, ind) => (
              <TableCell key={ind}>
                {numeral(row.WAEstimatedYearsToRetirementReadiness).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default RetirementTable;
