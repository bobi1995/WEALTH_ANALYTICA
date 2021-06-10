import React from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { primaryBlue } from "../../../../global/Colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EqualizerIcon from "@material-ui/icons/Equalizer";
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
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    fontSize: 35,
    textAlign: "center",
    marginTop: "3%",
  },
  previewBtn: {
    textTransform: "none",
  },
});
const Financial = ({ data, companies }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.headerStyle}>
          Income Statement - Income
        </Typography>

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
                    title="Contr. Contribution Non Cash"
                    graphData={data.map(
                      (row) => row.finance.ContrContributionNonCash
                    )}
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
                    $
                    {numeral(row.finance.ContrContributionNonCash).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Contr. Contribution Other Rec."
                    graphData={data.map(
                      (row) => row.finance.ContrContributionOtherRec
                    )}
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
                    $
                    {numeral(row.finance.ContrContributionOtherRec).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Contr. Contribution Part."
                    graphData={data.map(
                      (row) => row.finance.ContrContributionParticipant
                    )}
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
                    $
                    {numeral(row.finance.ContrContributionParticipant).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Contr. Total Contribution"
                    graphData={data.map(
                      (row) => row.finance.ContrTotalContribution
                    )}
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
                    ${numeral(row.finance.ContrTotalContribution).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Div. Common Stock Dividend"
                    graphData={data.map(
                      (row) => row.finance.DivCommonStockDividend
                    )}
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
                    ${numeral(row.finance.DivCommonStockDividend).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Div. Preferred Stock Dividend"
                    graphData={data.map(
                      (row) => row.finance.DivPreferredStockDividend
                    )}
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
                    $
                    {numeral(row.finance.DivPreferredStockDividend).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Div. Reg. Investment"
                    graphData={data.map((row) => row.finance.DivRegInvestment)}
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
                    ${numeral(row.finance.DivRegInvestment).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Div. Total Dividends"
                    graphData={data.map((row) => row.finance.DivTotalDividends)}
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
                    ${numeral(row.finance.DivTotalDividends).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Gain/Loss on 10312"
                    graphData={data.map((row) => row.finance.GainLosson10312)}
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
                    ${numeral(row.finance.GainLosson10312).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Gain/Loss on Common Trust"
                    graphData={data.map(
                      (row) => row.finance.GainLossonCommonTrust
                    )}
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
                    ${numeral(row.finance.GainLossonCommonTrust).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Gain/Loss on Master Trust"
                    graphData={data.map(
                      (row) => row.finance.GainLossonMasterTrust
                    )}
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
                    ${numeral(row.finance.GainLossonMasterTrust).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Gain/Loss on Pool"
                    graphData={data.map((row) => row.finance.GainLossonPool)}
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
                    ${numeral(row.finance.GainLossonPool).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Gain/Loss on Reg. Investment"
                    graphData={data.map(
                      (row) => row.finance.GainLossonRegInvestment
                    )}
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
                    $
                    {numeral(row.finance.GainLossonRegInvestment).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Int. Cash Interest"
                    graphData={data.map((row) => row.finance.IntCashInterest)}
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
                    ${numeral(row.finance.IntCashInterest).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Int. Corp. Debt Interest"
                    graphData={data.map(
                      (row) => row.finance.IntCorpDebtInterest
                    )}
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
                    ${numeral(row.finance.IntCorpDebtInterest).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Int. Government Securities Interest"
                    graphData={data.map(
                      (row) => row.finance.IntGovernmentSecuritiesInterest
                    )}
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
                    $
                    {numeral(
                      row.finance.IntGovernmentSecuritiesInterest
                    ).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Int. Loan Interest Other"
                    graphData={data.map(
                      (row) => row.finance.IntLoanInterestOther
                    )}
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
                    ${numeral(row.finance.IntLoanInterestOther).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Int. Participant Loan Int. Inc."
                    graphData={data.map(
                      (row) => row.finance.IntParticipantLoanIntInc
                    )}
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
                    $
                    {numeral(row.finance.IntParticipantLoanIntInc).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Int. Total Interest"
                    graphData={data.map((row) => row.finance.IntTotalInterest)}
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
                    ${numeral(row.finance.IntTotalInterest).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Other Income"
                    graphData={data.map((row) => row.finance.OtherIncome)}
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
                    ${numeral(row.finance.OtherIncome).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Income"
                    graphData={data.map((row) => row.finance.TotalIncome)}
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
                    ${numeral(row.finance.TotalIncome).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Proceeds"
                    graphData={data.map((row) => row.finance.TotalProceeds)}
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
                    ${numeral(row.finance.TotalProceeds).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Rent"
                    graphData={data.map((row) => row.finance.TotalRent)}
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
                    ${numeral(row.finance.TotalRent).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Typography className={classes.headerStyle}>
          Income Statement - Expenses
        </Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table stickyHeader size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeader}>Field</TableCell>
                {data.map((el, id) => (
                  <TableCell
                    key={el.name}
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
                    title="Admin Fees"
                    graphData={data.map((row) => row.finance.AdminFees)}
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
                    ${numeral(row.finance.AdminFees).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Distribution"
                    graphData={data.map((row) => row.finance.Distribution)}
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
                    ${numeral(row.finance.Distribution).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Investment Management Fees"
                    graphData={data.map(
                      (row) => row.finance.InvestmentManagementFees
                    )}
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
                    $
                    {numeral(row.finance.InvestmentManagementFees).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Other Fees"
                    graphData={data.map((row) => row.finance.OtherFees)}
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
                    ${numeral(row.finance.OtherFees).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Professional Fees"
                    graphData={data.map((row) => row.finance.ProfessionalFees)}
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
                    ${numeral(row.finance.ProfessionalFees).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Admin Expenses"
                    graphData={data.map((row) => row.finance.TotalAdminExp)}
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
                    ${numeral(row.finance.TotalAdminExp).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Cost"
                    graphData={data.map((row) => row.finance.TotalCost)}
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
                    ${numeral(row.finance.TotalCost).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Distribution"
                    graphData={data.map((row) => row.finance.TotalDistribution)}
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
                    ${numeral(row.finance.TotalDistribution).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Distribution Correction"
                    graphData={data.map(
                      (row) => row.finance.TotalDistributionCorrection
                    )}
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
                    $
                    {numeral(row.finance.TotalDistributionCorrection).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Expenses"
                    graphData={data.map((row) => row.finance.TotalExpenses)}
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
                    ${numeral(row.finance.TotalExpenses).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Gain On Sale"
                    graphData={data.map((row) => row.finance.TotalGainOnSale)}
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
                    ${numeral(row.finance.TotalGainOnSale).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Interest"
                    graphData={data.map((row) => row.finance.TotalInterest)}
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
                    ${numeral(row.finance.TotalInterest).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Participating Loans"
                    graphData={data.map(
                      (row) => row.finance.TotalParticipatingLoans
                    )}
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
                    $
                    {numeral(row.finance.TotalParticipatingLoans).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography className={classes.headerStyle}>
          Income Statement - Net Assets
        </Typography>
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
                    title="Net Assets"
                    graphData={data.map((row) => row.finance.NetAssets)}
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
                    ${numeral(row.finance.NetAssets).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Net Income"
                    graphData={data.map((row) => row.finance.NetIncome)}
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
                    ${numeral(row.finance.NetIncome).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography className={classes.headerStyle}>
          Balance Sheet - Liabilites
        </Typography>
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
                    title="Acquisition Debt"
                    graphData={data.map((row) => row.finance.AcquisitionDebt)}
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
                    ${numeral(row.finance.AcquisitionDebt).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Benefit Payable"
                    graphData={data.map((row) => row.finance.BenefitPayable)}
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
                    ${numeral(row.finance.BenefitPayable).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Liabilities Other"
                    graphData={data.map((row) => row.finance.LiabilitiesOther)}
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
                    ${numeral(row.finance.LiabilitiesOther).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Operating Payable"
                    graphData={data.map((row) => row.finance.OperatingPayable)}
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
                    ${numeral(row.finance.OperatingPayable).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Liabilities"
                    graphData={data.map((row) => row.finance.TotalLiabilities)}
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
                    ${numeral(row.finance.TotalLiabilities).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography className={classes.headerStyle}>
          Balance Sheet - Total Assets
        </Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table stickyHeader size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeader}>Field</TableCell>
                {data.map((el, id) => (
                  <TableCell
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
                    key={el.name}
                    className={classes.tableHeader}
                  >
                    {el.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/***********Buildings */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Buildings"
                    graphData={data.map((row) => row.finance.Buildings)}
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
                    ${numeral(row.finance.Buildings).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Cach Non Interest*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Cash Non Interest"
                    graphData={data.map((row) => row.finance.CachNonInterest)}
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
                    ${numeral(row.finance.CachNonInterest).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Cash Interest*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Cash Interest"
                    graphData={data.map((row) => row.finance.CashInterest)}
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
                    ${numeral(row.finance.CashInterest).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Common Stock */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Common Stock"
                    graphData={data.map((row) => row.finance.CommonStock)}
                    companies={companies}
                  />
                </TableCell>
                {data.map((row, id) => (
                  <TableCell
                    className={classes.cellStyle}
                    key={row.name}
                    component="th"
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
                    scope="row"
                  >
                    ${numeral(row.finance.CommonStock).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Common Trust */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Common Trust"
                    graphData={data.map((row) => row.finance.CommonTrust)}
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
                    ${numeral(row.finance.CommonTrust).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Contr. Contribution Employer*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Contr. Contribution Employer"
                    graphData={data.map(
                      (row) => row.finance.ContrContributionEmployer
                    )}
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
                    $
                    {numeral(row.finance.ContrContributionEmployer).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Contribution Employer */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Contribution Employer"
                    graphData={data.map(
                      (row) => row.finance.ContributionEmployer
                    )}
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
                    ${numeral(row.finance.ContributionEmployer).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Contribution Participant */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Contribution Participant"
                    graphData={data.map(
                      (row) => row.finance.ContributionParticipant
                    )}
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
                    $
                    {numeral(row.finance.ContributionParticipant).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Corp Debt Other */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Corp. Debt Other"
                    graphData={data.map((row) => row.finance.CorpDebtOther)}
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
                    ${numeral(row.finance.CorpDebtOther).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Corp. Debt Preferred*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Corp. Debt Preferred"
                    graphData={data.map((row) => row.finance.CorpDebtPreferred)}
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
                    ${numeral(row.finance.CorpDebtPreferred).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Employer Property */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Employer Property"
                    graphData={data.map((row) => row.finance.EmployerProperty)}
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
                    ${numeral(row.finance.EmployerProperty).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Employer Security */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Employer Security"
                    graphData={data.map((row) => row.finance.EmployerSecurity)}
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
                    ${numeral(row.finance.EmployerSecurity).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Government Securities*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Government Securities"
                    graphData={data.map(
                      (row) => row.finance.GovernmentSecurities
                    )}
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
                    ${numeral(row.finance.GovernmentSecurities).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Insurance GA*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Insurance GA"
                    graphData={data.map((row) => row.finance.InsuranceGA)}
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
                    ${numeral(row.finance.InsuranceGA).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Int. Investment Other Interest*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Int. Investment Other Interest"
                    graphData={data.map(
                      (row) => row.finance.IntInvestmentOtherInterest
                    )}
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
                    $
                    {numeral(row.finance.IntInvestmentOtherInterest).format(
                      "0,0"
                    )}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Investment Other */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Investment Other"
                    graphData={data.map((row) => row.finance.InvestmentOther)}
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
                    ${numeral(row.finance.InvestmentOther).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Investment Personal Prop */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Investment Personal Prop"
                    graphData={data.map(
                      (row) => row.finance.InvestmentPersonalProp
                    )}
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
                    ${numeral(row.finance.InvestmentPersonalProp).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Investment_103_12*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Investment_103_12"
                    graphData={data.map((row) => row.finance.Investment_103_12)}
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
                    ${numeral(row.finance.Investment_103_12).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Joint Venture */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Joint Venture"
                    graphData={data.map((row) => row.finance.JointVenture)}
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
                    ${numeral(row.finance.JointVenture).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********LoansOther*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Loans Other"
                    graphData={data.map((row) => row.finance.LoansOther)}
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
                    ${numeral(row.finance.LoansOther).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Master Trust*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Master Trust"
                    graphData={data.map((row) => row.finance.MasterTrust)}
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
                    ${numeral(row.finance.MasterTrust).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Mortgate Participant */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Mortgate Participant"
                    graphData={data.map(
                      (row) => row.finance.MortgateParticipant
                    )}
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
                    ${numeral(row.finance.MortgateParticipant).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Participant Loans */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Participant Loans"
                    graphData={data.map((row) => row.finance.ParticipantLoans)}
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
                    ${numeral(row.finance.ParticipantLoans).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Pooled Sep. Account */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Pooled Sep. Account"
                    graphData={data.map((row) => row.finance.PooledSepAccount)}
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
                    ${numeral(row.finance.PooledSepAccount).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Preferred Stock*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Preferred Stock"
                    graphData={data.map((row) => row.finance.PreferredStock)}
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
                    ${numeral(row.finance.PreferredStock).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Real Estate */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Real Estate"
                    graphData={data.map((row) => row.finance.RealEstate)}
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
                    ${numeral(row.finance.RealEstate).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Receivables*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Receivables"
                    graphData={data.map((row) => row.finance.Receivables)}
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
                    ${numeral(row.finance.Receivables).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Reg. Investment*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Reg. Investment"
                    graphData={data.map((row) => row.finance.RegInvestment)}
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
                    ${numeral(row.finance.RegInvestment).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Total Assets */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Assets"
                    graphData={data.map((row) => row.finance.TotalAssets)}
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
                    ${numeral(row.finance.TotalAssets).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              {/***********Total Unrealized*/}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Total Unrealized"
                    graphData={data.map((row) => row.finance.TotalUnrealized)}
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
                    ${numeral(row.finance.TotalUnrealized).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Unrealized Gains Other */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Unrealized Gains Other"
                    graphData={data.map(
                      (row) => row.finance.UnrealizedGainsOther
                    )}
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
                    ${numeral(row.finance.UnrealizedGainsOther).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
              {/***********Unrealized Gains RE */}
              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Unrealized Gains RE"
                    graphData={data.map((row) => row.finance.UnrealizedGainsRE)}
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
                    ${numeral(row.finance.UnrealizedGainsRE).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography className={classes.headerStyle}>Others</Typography>
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
                    title="Benefits Amount 1"
                    graphData={data.map((row) => row.finance.BenefitsAmount1)}
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
                    ${numeral(row.finance.BenefitsAmount1).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Benefits Amount 2"
                    graphData={data.map((row) => row.finance.BenefitsAmount2)}
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
                    ${numeral(row.finance.BenefitsAmount2).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <Button
                    startIcon={<EqualizerIcon />}
                    color="default"
                    className={classes.previewBtn}
                    disabled
                  >
                    Company Size
                  </Button>
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
                    {row.finance.CompanyType === 1
                      ? "Large"
                      : row.finance.CompanyType === 2
                      ? "Medium"
                      : "Small"}
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell className={classes.cellStyle}>
                  <DialogBox
                    title="Plan Transfers"
                    graphData={data.map((row) => row.finance.PlanTransfers)}
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
                    ${numeral(row.finance.PlanTransfers).format("0,0")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Financial;
