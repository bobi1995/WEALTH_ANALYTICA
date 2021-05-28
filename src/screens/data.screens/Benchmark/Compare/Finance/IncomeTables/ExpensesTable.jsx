import React, { useState } from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { primaryBlue } from "../../../../../../global/Colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import numeral from "numeral";
import Graphs from "../../Graphs";

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
const ExpensesTable = ({ data }) => {
  const classes = useStyles();
  const [graphData, setGraphData] = useState();

  return (
    <Box className={classes.root}>
      <Graphs graphData={graphData} companies={data.map((el) => el.name)} />
      <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Field</TableCell>
              {data.map((el) => (
                <TableCell key={el.name} className={classes.tableHeader}>
                  {el.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() =>
                    setGraphData(data.map((row) => row.finance.AdminFees))
                  }
                >
                  Admin Fees
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.AdminFees).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Distribution
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.Distribution).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Investment Management Fees
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.InvestmentManagementFees).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Other Fees
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.OtherFees).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Professional Fees
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.ProfessionalFees).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Admin Expenses
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalAdminExp).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Cost
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalCost).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Distribution
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalDistribution).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Distribution Correction
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  $
                  {numeral(row.finance.TotalDistributionCorrection).format(
                    "0,0"
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Expenses
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalExpenses).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Gain On Sale
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalGainOnSale).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Interest
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalInterest).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Participating Loans
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalParticipatingLoans).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExpensesTable;
