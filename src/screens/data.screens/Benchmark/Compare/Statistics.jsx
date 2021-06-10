import React from "react";
import { Box, makeStyles, Paper } from "@material-ui/core";
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
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Field</TableCell>
              {data.map((el, id) => (
                <TableCell
                  key={el.name + id}
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
                  title="AUM/HC"
                  graphData={data.map((row) => row.info.AUMHC)}
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
                  ${numeral(row.info.AUMHC).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Distribution Yield"
                  graphData={data.map((row) => row.info.Yield)}
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
                  {numeral(row.info.Yield).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Contribution Yield"
                  graphData={data.map((row) => row.info.ContributionYield)}
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
                  {numeral(row.info.ContributionYield).format("0,0")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Expense Ratio"
                  graphData={data.map((row) => row.info.ExpenseRatio)}
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
                  {numeral(row.info.ExpenseRatio).format("0,0")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="ROR"
                  graphData={data.map((row) => row.info.ROR)}
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
                  {numeral(row.info.ROR).format("0,0")}%
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
