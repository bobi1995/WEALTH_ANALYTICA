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
    marginBottom: "3%",
  },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  previewBtn: {
    textTransform: "none",
  },
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
});

const PreCalculatedTable = ({ data }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography component="h4" variant="h4" className={classes.heading}>
        Plan Design
      </Typography>
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
            {/**AvgParticipantBalance*/}
            <TableRow>
              <TableCell>Avg. Participant Balance</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  ${numeral(row.AvgParticipantBalance).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/**TotalContributions*/}
            <TableRow>
              <TableCell>Total Contributions</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  ${numeral(row.TotalContributions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/**TotalDistributions*/}
            <TableRow>
              <TableCell>Total Distributions</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  ${numeral(row.TotalDistributions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/**NetPartFlow*/}
            <TableRow>
              <TableCell>Net Part. Flow</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  ${numeral(row.NetPartFlow).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PreCalculatedTable;
