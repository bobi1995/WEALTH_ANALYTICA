import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ExpensesTable from "./IncomeTables/ExpensesTable";
import { primaryBlue } from "../../../../../global/Colors";

const useStyles = makeStyles({
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    fontSize: 35,
    textAlign: "center",
  },
});
const Income = ({ data }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.headerStyle}>Income</Typography>
      <ExpensesTable data={data} />
    </Box>
  );
};

export default Income;
