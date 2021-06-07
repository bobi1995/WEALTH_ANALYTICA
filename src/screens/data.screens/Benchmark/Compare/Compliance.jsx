import React, { useState } from "react";
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
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
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
    textAlign: "center",
  },
  cellStyle: { textAlign: "center" },

  previewBtn: {
    textTransform: "none",
  },
});
const Compliance = ({ data, companies }) => {
  const classes = useStyles();
  const [graphData, setGraphData] = useState();
  const [label, setLabel] = useState("");

  return (
    <Box className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table
          stickyHeader
          size="small"
          aria-label="a dense table"
          stickyHeader
        >
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
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  disabled
                >
                  Contribution Failure
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
                  {row.info.ContributionFailureInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
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
                  disabled
                >
                  All Plan Asset Distribution
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
                  {row.info.AllPlanAssetDistributionInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
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
                  disabled
                >
                  Asset Held
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
                  {row.info.AssetHeldInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
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
                  disabled
                >
                  Asset Not Values
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
                  {row.info.AssetNotValuesInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Asset Not Values"
                  graphData={data.map((row) => row.info.AssetNotValuesAmt)}
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
                  ${numeral(row.info.AssetNotValuesAmt).format("0,0")}
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
                  Benefit Payment Failure
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
                  {row.info.BenefitPaymentFailureInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Benefit Payment Failure"
                  graphData={data.map(
                    (row) => row.info.BenefitPaymentFailureAmt
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
                  ${numeral(row.info.BenefitPaymentFailureAmt).format("0,0")}
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
                  Blackout Period
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
                  {row.info.BlackoutPeriodInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
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
                  disabled
                >
                  Blackout Notice
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
                  {row.info.BlackoutNoticeInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
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
                  disabled
                >
                  Contribution Failure
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
                  {row.info.ContributionFailureInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Contribution Failure"
                  graphData={data.map((row) => row.info.ContributionFailureAmt)}
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
                  ${numeral(row.info.ContributionFailureAmt).format("0,0")}
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
                  Contribution Non Cash
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
                  {row.info.ContributionNonCashInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Contribution Non Cash"
                  graphData={data.map((row) => row.info.ContributionNonCashAmt)}
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
                  ${numeral(row.info.ContributionNonCashAmt).format("0,0")}
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
                  Five Percent
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
                  {row.info.FivePercentInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
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
                  disabled
                >
                  Inv. Concentration 20
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
                  {row.info.InvConcentration20Ind === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Inv. Concentration 20"
                  graphData={data.map((row) => row.info.InvConcentration20Amt)}
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
                  ${numeral(row.info.InvConcentration20Amt).format("0,0")}
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
                  Leases In Default
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
                  {row.info.LeasesInDefaultInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Leases In Default"
                  graphData={data.map((row) => row.info.LeasesInDefaultAmt)}
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
                  ${numeral(row.info.LeasesInDefaultAmt).format("0,0")}
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
                  Loans In Default
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
                  {row.info.LoansInDefaultInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Loans In Default"
                  graphData={data.map((row) => row.info.LoansInDefaultAmt)}
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
                  ${numeral(row.info.LoansInDefaultAmt).format("0,0")}
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
                  Loss Discover
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
                  {row.info.LossDiscoverInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Loss Discover"
                  graphData={data.map((row) => row.info.LossDiscoverAmt)}
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
                  ${numeral(row.info.LossDiscoverAmt).format("0,0")}
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
                  Party Int. Not Reporting
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
                  {row.info.PartyIntNotReportingInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Party Int. Not Reporting"
                  graphData={data.map(
                    (row) => row.info.PartyIntNotReportingAmt
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
                  ${numeral(row.info.PartyIntNotReportingAmt).format("0,0")}
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
                  PBGC Insurance
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
                  {row.info.PBGCInsuranceInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Pension Funding 412"
                  graphData={data.map((row) => row.info.PensionFunding412Amt)}
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
                  ${numeral(row.info.PensionFunding412Amt).format("0,0")}
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
                  Reserve Term
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
                  {row.info.ReserveTermInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Reserve Term."
                  graphData={data.map((row) => row.info.ReserveTermAmt)}
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
                  ${numeral(row.info.ReserveTermAmt).format("0,0")}
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
                  Fidelity Bond
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
                  {row.info.FidelityBondInd === 1 ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Compliance;
