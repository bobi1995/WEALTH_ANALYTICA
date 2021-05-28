import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import TotalAssetsTable from "./BalanceTables/TotalAssetsTable";
import { primaryBlue } from "../../../../../global/Colors";

const useStyles = makeStyles({
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    fontSize: 35,
    textAlign: "center",
  },
});
const BalanceSheet = ({ data }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.headerStyle}>Balance Sheet</Typography>
      <TotalAssetsTable data={data} />
    </Box>
  );
};

export default BalanceSheet;
