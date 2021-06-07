import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import numeral from "numeral";
import { primaryBlue } from "../../../../../global/Colors";
const useStyles = makeStyles({
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
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    fontSize: 35,
    textAlign: "center",
    marginTop: "3%",
  },
});

const SmallTable = ({ descriptionData, usedData }) => {
  const classes = useStyles();

  console.log(usedData);
  return (
    <Paper>
      <Typography className={classes.headerStyle}>
        {descriptionData.BenefitName}
      </Typography>
      <TableContainer className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Characteristic
              </TableCell>
              {usedData.map((row, id) => (
                <TableCell
                  key={row.name}
                  className={classes.tableHeader}
                  style={{ textAlign: "center" }}
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
                  {row.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {descriptionData.benefitCodes.map((code, codeInd) => {
              return (
                <TableRow key={code.code + codeInd}>
                  <TableCell>{code.characteristics}</TableCell>

                  {usedData.map((el, id) =>
                    el.info.includes(code.code) ? (
                      <TableCell
                        key={el + code.code}
                        style={{
                          textAlign: "center",
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
                        <CheckIcon style={{ color: "green" }} />
                      </TableCell>
                    ) : (
                      <TableCell
                        key={el + code.code}
                        style={{
                          textAlign: "center",
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
                        <ClearIcon style={{ color: "red" }} />
                      </TableCell>
                    )
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SmallTable;
