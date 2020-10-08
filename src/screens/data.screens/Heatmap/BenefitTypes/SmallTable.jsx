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

const useStyles = makeStyles({
  table: {
    width: "100%",
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

const SmallTable = ({ descriptionData, usedData, industryData }) => {
  const classes = useStyles();
  console.log(industryData.benefit);
  console.log(descriptionData.benefitCodes);
  const industry = descriptionData.benefitCodes.map(
    (el) =>
      industryData.benefit.filter((item) =>
        item.BenefitType === el.code ? el : undefined
      )[0]
  );
  console.log(industry);
  return (
    <Paper>
      <Typography
        variant="h6"
        id="tableTitle"
        component="div"
        className={classes.title}
      >
        {descriptionData.BenefitName}
      </Typography>
      <TableContainer className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Code</TableCell>
              <TableCell className={classes.tableHeader}>Type</TableCell>
              <TableCell className={classes.tableHeader}>
                Characteristic
              </TableCell>
              {usedData.map((row, ind) => (
                <TableCell key={row.year + ind} className={classes.tableHeader}>
                  {row.year}
                </TableCell>
              ))}
              <TableCell className={classes.tableHeader}>
                Usage in {industryData.year}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {descriptionData.benefitCodes.map((code, codeInd) => {
              return (
                <TableRow key={code.code}>
                  <TableCell>{code.code}</TableCell>
                  <TableCell>{code.type}</TableCell>
                  <TableCell>{code.characteristics}</TableCell>

                  {usedData.map((el) =>
                    el.benefit.includes(code.code) ? (
                      <TableCell key={el.benefit}>
                        <CheckIcon style={{ color: "green" }} />
                      </TableCell>
                    ) : (
                      <TableCell key={el.benefit}>
                        <ClearIcon style={{ color: "red" }} />
                      </TableCell>
                    )
                  )}
                  {industry.filter(function(x) {
                    if (x && x.BenefitType === code.code) {
                      console.log(x.Percentage);
                      return <TableCell>{x.Percentage}</TableCell>;
                    } else return <TableCell>No</TableCell>;
                  })}
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
