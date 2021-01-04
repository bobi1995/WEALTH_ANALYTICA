import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import common from "../commonFunctions/common";
import { primaryBlue } from "../../../global/Colors";
import FinancialDetails from "./Financial/FinancialDetails";
import InvestmentDetails from "./Financial/Level1/InvestmentDetails";

const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
    marginBottom: "3%",
  },
  table: {
    marginTop: "3%",
  },
  cellCenter: { textAlign: "center" },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
});

const Investment = (props) => {
  const classes = useStyles();
  const database = props.data;

  return (
    <Box>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Financial Information
        </Typography>
      </Box>

      <Box className={classes.table}>
        <table className="table table-striped table-bordered table-sm table-hover ">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.map((element, index) => {
                if (
                  element.IsCity === true ||
                  element.IsBusinessCode === true
                ) {
                  return null;
                } else {
                  return (
                    <th className={classes.cellCenter} key={index}>
                      {element.Year}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Investment Funds
              </th>
              {database.map((element, index) => {
                if (
                  element.IsCity === true ||
                  element.IsBusinessCode === true
                ) {
                  return null;
                } else
                  return (
                    <td style={{ textAlign: "center" }} key={index}>
                      {common.reducer(element.InvestmentFundsCount)}
                    </td>
                  );
              })}
            </tr>
          </tbody>
        </table>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <FinancialDetails companyID={props.companyID} />
        <InvestmentDetails companyID={props.companyID} />
      </Box>
    </Box>
  );
};

export default Investment;
