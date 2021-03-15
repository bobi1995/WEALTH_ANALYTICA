import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import numeral from "numeral";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { primaryBlue } from "../../../../global/Colors";

const useStyles = makeStyles({
  table: {
    width: "55%",
    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: `1px solid ${primaryBlue}`,
    marginBottom: "3%",
  },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  previewBtn: {
    textTransform: "none",
  },
});

const UtilizationTable = ({ setGraphs, data }) => {
  const classes = useStyles();

  const comparingFunc = (last, business, current) => {
    if (business > last && last === current)
      return <ArrowDownwardIcon style={{ color: "red" }} />;
    else if (business < last && last === current)
      return <ArrowUpwardIcon style={{ color: "green" }} />;
    else if (business === last && last === current)
      return <DragHandleIcon style={{ color: "orange" }} />;
  };

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
          {/**ActiveParticipantsPercent */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("ActiveParticipantsPercent")}
              >
                Active Participants
              </Button>
            </TableCell>
            {data.map((row, ind) => {
              return (
                <TableCell
                  className={
                    row.utilization.ActiveParticipantsPercent < 0
                      ? classes.negativeNum
                      : ""
                  }
                  key={ind}
                  component="th"
                  scope="row"
                >
                  {comparingFunc(
                    data[data.length - 2].utilization.ActiveParticipantsPercent,
                    data[data.length - 1].utilization.ActiveParticipantsPercent,
                    row.utilization.ActiveParticipantsPercent
                  )}
                  {row.utilization.ActiveParticipantsPercent !== null
                    ? `${row.utilization.ActiveParticipantsPercent}%`
                    : "N/A"}
                </TableCell>
              );
            })}
          </TableRow>
          {/**SeparatedVestedParticipants */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("SeparatedVestedParticipants")}
              >
                Separated Vested Participants
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.SeparatedVestedParticipants < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.SeparatedVestedParticipants,
                  data[data.length - 1].utilization.SeparatedVestedParticipants,
                  row.utilization.SeparatedVestedParticipants
                )}
                {row.utilization.SeparatedVestedParticipants !== null
                  ? `${numeral(
                      row.utilization.SeparatedVestedParticipants
                    ).format("0,0")}`
                  : "N/A"}
              </TableCell>
            ))}
          </TableRow>
          {/**ParticipantsWithBenefitAccount */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("ParticipantsWithBenefitAccount")}
              >
                Participants With Benefit Account
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ParticipantsWithBenefitAccount < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization
                    .ParticipantsWithBenefitAccount,
                  data[data.length - 1].utilization
                    .ParticipantsWithBenefitAccount,
                  row.utilization.ParticipantsWithBenefitAccount
                )}
                {row.utilization.ParticipantsWithBenefitAccount !== null
                  ? `${numeral(
                      row.utilization.ParticipantsWithBenefitAccount
                    ).format("0,0")}`
                  : "N/A"}
              </TableCell>
            ))}
          </TableRow>
          {/**AverageActiveParticipants */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AverageActiveParticipants")}
              >
                Average Active Participants
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AverageActiveParticipants < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AverageActiveParticipants,
                  data[data.length - 1].utilization.AverageActiveParticipants,
                  row.utilization.AverageActiveParticipants
                )}
                {numeral(row.utilization.AverageActiveParticipants).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalContributions */}
          <TableRow>
            <TableCell>
              {" "}
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("TotalContributions")}
              >
                Total Contributions
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TotalContributions < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.TotalContributions,
                  data[data.length - 1].utilization.TotalContributions,
                  row.utilization.TotalContributions
                )}
                ${numeral(row.utilization.TotalContributions).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalContributionsParticipant */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("TotalContributionsParticipant")}
              >
                Total Contrib. Participant
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TotalContributionsParticipant < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization
                    .TotalContributionsParticipant,
                  data[data.length - 1].utilization
                    .TotalContributionsParticipant,
                  row.utilization.TotalContributionsParticipant
                )}
                $
                {numeral(row.utilization.TotalContributionsParticipant).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
          {/**EmployerContributions */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("EmployerContributions")}
              >
                Employer Contributions
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.EmployerContributions < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.EmployerContributions,
                  data[data.length - 1].utilization.EmployerContributions,
                  row.utilization.EmployerContributions
                )}
                {row.utilization.EmployerContributions}%
              </TableCell>
            ))}
          </TableRow>
          {/**ParticipantContributions */}
          <TableRow>
            <TableCell>
              {" "}
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("ParticipantContributions")}
              >
                Participant Contributions
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ParticipantContributions < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.ParticipantContributions,
                  data[data.length - 1].utilization.ParticipantContributions,
                  row.utilization.ParticipantContributions
                )}
                {row.utilization.ParticipantContributions}%
              </TableCell>
            ))}
          </TableRow>
          {/**ContributionYield */}
          <TableRow>
            <TableCell>
              {" "}
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("ContributionYield")}
              >
                Contribution Yield
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ContributionYield < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.ContributionYield,
                  data[data.length - 1].utilization.ContributionYield,
                  row.utilization.ContributionYield
                )}
                {row.utilization.ContributionYield}%
              </TableCell>
            ))}
          </TableRow>
          {/**AverageAssets */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AverageAssets")}
              >
                Average Assets
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AverageAssets < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AverageAssets,
                  data[data.length - 1].utilization.AverageAssets,
                  row.utilization.AverageAssets
                )}
                ${numeral(row.utilization.AverageAssets).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**LoansPercentageYield */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("LoansPercentageYield")}
              >
                Loans Yield
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.LoansPercentageYield < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.LoansPercentageYield,
                  data[data.length - 1].utilization.LoansPercentageYield,
                  row.utilization.LoansPercentageYield
                )}
                {row.utilization.LoansPercentageYield}%
              </TableCell>
            ))}
          </TableRow>
          {/**LoanParticipants */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("LoanParticipants")}
              >
                Loan Participant
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.LoanParticipants < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.LoanParticipants,
                  data[data.length - 1].utilization.LoanParticipants,
                  row.utilization.LoanParticipants
                )}
                ${numeral(row.utilization.LoanParticipants).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalLoans */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("TotalLoans")}
              >
                Total Loans
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TotalLoans < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.TotalLoans,
                  data[data.length - 1].utilization.TotalLoans,
                  row.utilization.TotalLoans
                )}
                ${numeral(row.utilization.TotalLoans).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalDistbibutions */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("TotalDistbibutions")}
              >
                Total Distbibutions
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TotalDistbibutions < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.TotalDistbibutions,
                  data[data.length - 1].utilization.TotalDistbibutions,
                  row.utilization.TotalDistbibutions
                )}
                ${numeral(row.utilization.TotalDistbibutions).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**DistributionYield */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("DistributionYield")}
              >
                Distribution Yield{" "}
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.DistributionYield < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.DistributionYield,
                  data[data.length - 1].utilization.DistributionYield,
                  row.utilization.DistributionYield
                )}
                {row.utilization.DistributionYield}%
              </TableCell>
            ))}
          </TableRow>
          {/**DistributionsParticipant */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("DistributionsParticipant")}
              >
                Distributions Participant
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.DistributionsParticipant < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.DistributionsParticipant,
                  data[data.length - 1].utilization.DistributionsParticipant,
                  row.utilization.DistributionsParticipant
                )}
                $
                {numeral(row.utilization.DistributionsParticipant).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
          {/**AverageParticipantBalance */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AverageParticipantBalance")}
              >
                Average Participant Balance
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AverageParticipantBalance < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AverageParticipantBalance,
                  data[data.length - 1].utilization.AverageParticipantBalance,
                  row.utilization.AverageParticipantBalance
                )}
                $
                {numeral(row.utilization.AverageParticipantBalance).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
          {/**PercentParticipantContributionByParticipant */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() =>
                  setGraphs("PercentParticipantContributionByParticipant")
                }
              >
                Est. Employee % Contrib.
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.PercentParticipantContributionByParticipant <
                  0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization
                    .PercentParticipantContributionByParticipant,
                  data[data.length - 1].utilization
                    .PercentParticipantContributionByParticipant,
                  row.utilization.PercentParticipantContributionByParticipant
                )}
                {row.utilization.PercentParticipantContributionByParticipant}%
              </TableCell>
            ))}
          </TableRow>
          {/**PercentEmployerContributionByParticipant */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() =>
                  setGraphs("PercentEmployerContributionByParticipant")
                }
              >
                Est. Employer % Contrib.
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.PercentEmployerContributionByParticipant < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization
                    .PercentEmployerContributionByParticipant,
                  data[data.length - 1].utilization
                    .PercentEmployerContributionByParticipant,
                  row.utilization.PercentEmployerContributionByParticipant
                )}
                {row.utilization.PercentEmployerContributionByParticipant}%
              </TableCell>
            ))}
          </TableRow>
          {/**PercentDistributionByParticipants */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("PercentDistributionByParticipants")}
              >
                Distribution By Participants
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.PercentDistributionByParticipants < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization
                    .PercentDistributionByParticipants,
                  data[data.length - 1].utilization
                    .PercentDistributionByParticipants,
                  row.utilization.PercentDistributionByParticipants
                )}
                {row.utilization.PercentDistributionByParticipants}%
              </TableCell>
            ))}
          </TableRow>
          {/**Transfers */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("Transfers")}
              >
                Transfers
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.Transfers < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.Transfers,
                  data[data.length - 1].utilization.Transfers,
                  row.utilization.Transfers
                )}
                ${numeral(row.utilization.Transfers).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TransfersOut */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("TransfersOut")}
              >
                Transfers Out
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TransfersOut < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.TransfersOut,
                  data[data.length - 1].utilization.TransfersOut,
                  row.utilization.TransfersOut
                )}
                ${numeral(row.utilization.TransfersOut).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**ReturnOfInvestment */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("ReturnOfInvestment")}
              >
                Return Of Investment
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ReturnOfInvestment < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.ReturnOfInvestment,
                  data[data.length - 1].utilization.ReturnOfInvestment,
                  row.utilization.ReturnOfInvestment
                )}
                {row.utilization.ReturnOfInvestment}%
              </TableCell>
            ))}
          </TableRow>
          {/**ReturnOfAssets */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("ReturnOfAssets")}
              >
                Return Of Assets
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ReturnOfAssets < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.ReturnOfAssets,
                  data[data.length - 1].utilization.ReturnOfAssets,
                  row.utilization.ReturnOfAssets
                )}
                {row.utilization.ReturnOfAssets}%
              </TableCell>
            ))}
          </TableRow>
          {/**TotalExpenses */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("TotalExpenses")}
              >
                Total Expenses
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TotalExpenses < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.TotalExpenses,
                  data[data.length - 1].utilization.TotalExpenses,
                  row.utilization.TotalExpenses
                )}
                ${numeral(row.utilization.TotalExpenses).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**CostParticipants */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("CostParticipants")}
              >
                Cost Participants
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.CostParticipants < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.CostParticipants,
                  data[data.length - 1].utilization.CostParticipants,
                  row.utilization.CostParticipants
                )}
                ${numeral(row.utilization.CostParticipants).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**ExpenseRatio */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("ExpenseRatio")}
              >
                Expense Ratio
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ExpenseRatio < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.ExpenseRatio,
                  data[data.length - 1].utilization.ExpenseRatio,
                  row.utilization.ExpenseRatio
                )}
                {row.utilization.ExpenseRatio}%
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualDist */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AnnualDist")}
              >
                Annual Dist
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualDist < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AnnualDist,
                  data[data.length - 1].utilization.AnnualDist,
                  row.utilization.AnnualDist
                )}
                ${numeral(row.utilization.AnnualDist).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualCost */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AnnualCost")}
              >
                Annual Cost
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualCost < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AnnualCost,
                  data[data.length - 1].utilization.AnnualCost,
                  row.utilization.AnnualCost
                )}
                ${numeral(row.utilization.AnnualCost).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualROI */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AnnualROI")}
              >
                Annual ROI
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualROI < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AnnualROI,
                  data[data.length - 1].utilization.AnnualROI,
                  row.utilization.AnnualROI
                )}
                {row.utilization.AnnualROI}%
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualEmployeeContrib */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AnnualEmployeeContrib")}
              >
                Annual Employee Contrib.
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualEmployeeContrib < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AnnualEmployeeContrib,
                  data[data.length - 1].utilization.AnnualEmployeeContrib,
                  row.utilization.AnnualEmployeeContrib
                )}
                ${numeral(row.utilization.AnnualEmployeeContrib).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualTotal */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("AnnualTotal")}
              >
                Annual Total
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualTotal < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.AnnualTotal,
                  data[data.length - 1].utilization.AnnualTotal,
                  row.utilization.AnnualTotal
                )}
                ${numeral(row.utilization.AnnualTotal).format("0,0")}
              </TableCell>
            ))}
          </TableRow>

          {/**OverallPlanDesignRating */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("OverallPlanDesignRating")}
              >
                Overall Plan Design Rating
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.OverallPlanDesignRating < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.OverallPlanDesignRating,
                  data[data.length - 1].utilization.OverallPlanDesignRating,
                  row.utilization.OverallPlanDesignRating
                )}
                {row.utilization.OverallPlanDesignRating}%
              </TableCell>
            ))}
          </TableRow>
          {/**Touches */}
          <TableRow>
            <TableCell>
              <Button
                startIcon={<EqualizerIcon />}
                color="default"
                className={classes.previewBtn}
                onClick={() => setGraphs("Touches")}
              >
                Touches
              </Button>
            </TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.Touches < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {comparingFunc(
                  data[data.length - 2].utilization.Touches,
                  data[data.length - 1].utilization.Touches,
                  row.utilization.Touches
                )}
                {row.utilization.Touches}%
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UtilizationTable;
