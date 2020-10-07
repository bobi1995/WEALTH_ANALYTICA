import React from "react";
import { makeStyles } from "@material-ui/core";
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
    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: "1px solid #378FC3",
  },
  tableHeader: { color: "#378FC3", fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  title: {
    flex: "1 1 100%",
  },
  fieldCell: {
    fontWeight: "bold",
  },
});

const ComplianceTable = ({ data }) => {
  const classes = useStyles();
  let rowCount = Object.keys(data[1].benefit).length;

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table stickyHeader size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>Field</TableCell>
            {data.map((el, ind) =>
              el.business ? (
                <TableCell key={ind} className={classes.tableHeader}>
                  Benefit usage {el.year}
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
            let current_compliance_key = data[1].benefit[i].BenefitType;
            return (
              <TableRow key={i}>
                <TableCell className={classes.fieldCell}>
                  {current_compliance_key}
                </TableCell>
                {data.map((row, j) => {
                  //console.log(row, j);

                  if (row.business) {
                    return (
                      <TableCell key={j}>
                        {numeral(
                          row.benefit.filter(
                            (e) => e.BenefitType === current_compliance_key
                          )[0].Percentage
                        ).format("0,0")}
                        %
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell key={j}>
                        {console.log(
                          row.benefit.filter(
                            (e) => e === current_compliance_key
                          )[0]
                        )}
                        {row.benefit.filter(
                          (e) => e === current_compliance_key
                        )[0] ? (
                          <CheckIcon style={{ color: "green" }} />
                        ) : (
                          <ClearIcon style={{ color: "red" }} />
                        )}
                      </TableCell>
                    ); // cell_content = el.compliance[current_compliance_key];
                  }
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
