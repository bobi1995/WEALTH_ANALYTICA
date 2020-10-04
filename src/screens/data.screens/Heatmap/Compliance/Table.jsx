import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import numeral from "numeral";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  table: {
    width: "40%",
    minWidth: 650,
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
});

const dollars = [
  "AssetNotValuesAmt",
  "BenefitPaymentFailureAmt",
  "ContributionFailureAmt",
  "ContributionNonCashAmt",
  "InvConcentration20Amt",
  "LeasesInDefaultAmt",
  "LoansInDefaultAmt",
  "LossDiscoverAmt",
  "PartyIntNotReportingAmt",
  "PensionFunding412Amt",
  "ReserveTermAmt",
];

const ComplianceTable = ({ data }) => {
  const classes = useStyles();
  let rowCount = Object.keys(data[0].compliance).length;
  let counter = 0;
  return (
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
          {[...Array(rowCount)].map((_, i) => {
            let current_compliance_key = Object.keys(data[0].compliance)[i];

            return (
              <TableRow key={i}>
                <TableCell>
                  {current_compliance_key
                    .match(/[A-Z][a-z]+|[0-9]+/g)
                    .join(" ")}
                </TableCell>
                {data.map((el, j) => {
                  let cell_content = el.compliance[current_compliance_key];
                  return (
                    <TableCell key={j}>
                      {el.business ? (
                        dollars.includes(current_compliance_key) ? (
                          `$${numeral(cell_content).format("0,0")}`
                        ) : (
                          `${cell_content}% in Industry are OK`
                        )
                      ) : cell_content === 0 ? (
                        (counter++,
                        console.log(counter),
                        (<CheckIcon style={{ color: "green" }} />))
                      ) : (
                        <ClearIcon style={{ color: "red" }} />
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComplianceTable;
