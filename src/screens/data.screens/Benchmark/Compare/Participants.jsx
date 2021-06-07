import React, { useState } from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { primaryBlue } from "../../../../global/Colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import numeral from "numeral";
import DialogBox from "./Components/DialogBox";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  table: {
    backgroundColor: "#E3F2FD",
    border: `1px solid ${primaryBlue}`,
    marginBottom: "3%",
  },
  tableHeader: {
    color: primaryBlue,
    //fontWeight: "bold",
    //fontSize: 16,
    textAlign: "center",
  },
  cellStyle: { textAlign: "center" },

  previewBtn: {
    textTransform: "none",
  },
});
const Participants = ({ data, companies }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table
          stickyHeader
          size="small"
          aria-label="a dense table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Field</TableCell>
              {data.map((el, id) => (
                <TableCell
                  key={el.name}
                  className={classes.tableHeader}
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  {el.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Participants"
                  graphData={data.map((row) => row.info.Participants)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  {numeral(row.info.Participants).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Participants Loans"
                  graphData={data.map((row) => row.info.ParticipantLoans)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.ParticipantLoans).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Contribution Employer"
                  graphData={data.map((row) => row.info.ContributionEmployer)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.ContributionEmployer).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Contribution Participant"
                  graphData={data.map(
                    (row) => row.info.ContributionParticipant
                  )}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.ContributionParticipant).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Other Contributions"
                  graphData={data.map((row) => row.info.OtherContributions)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.OtherContributions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Total Distributions"
                  graphData={data.map((row) => row.info.TotalDistributions)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.TotalDistributions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Participants;
