import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";
const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  table: {
    width: "95%",

    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: `1px solid ${primaryBlue}`,
  },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
  header: {
    textAlign: "center",
    color: primaryBlue,
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 20,
  },
});

const SmallTable = ({ data, title, type }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.header}>{title}</Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {data.map((el) => (
                <TableCell
                  style={{ textAlign: "center" }}
                  key={el.Year}
                  className={classes.tableHeader}
                >
                  {el.Year}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {data.map((el) => (
                <TableCell style={{ textAlign: "center" }} key={el.Year}>
                  {type === "percent"
                    ? `${numeral(el.Value).format("0,00.00")}%`
                    : `$${numeral(el.Value).format("0,00")}`}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SmallTable;
