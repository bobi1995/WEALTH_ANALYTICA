import React from "react";
import { Box, makeStyles, Paper } from "@material-ui/core";
import { primaryBlue } from "../../../../global/Colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
    textAlign: "center",
  },
  cellStyle: { textAlign: "center" },

  previewBtn: {
    textTransform: "none",
  },
});
const Utilization = ({ data, companies }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
                  title="Active Participants %"
                  graphData={data.map(
                    (row) => row.info.ActiveParticipantsPercent
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
                  {numeral(row.info.ActiveParticipantsPercent).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Separated Vested Participants"
                  graphData={data.map(
                    (row) => row.info.SeparatedVestedParticipants
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
                  {numeral(row.info.SeparatedVestedParticipants).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Participants With Benefit Account"
                  graphData={data.map(
                    (row) => row.info.ParticipantsWithBenefitAccount
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
                  {numeral(row.info.ParticipantsWithBenefitAccount).format(
                    "0,0"
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Average Active Participants"
                  graphData={data.map(
                    (row) => row.info.AverageActiveParticipants
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
                  {numeral(row.info.AverageActiveParticipants).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Total Contributions"
                  graphData={data.map((row) => row.info.TotalContributions)}
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
                  ${numeral(row.info.TotalContributions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Total Contributions Participant"
                  graphData={data.map(
                    (row) => row.info.TotalContributionsParticipant
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
                  {numeral(row.info.TotalContributionsParticipant).format(
                    "0,0"
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Employer Contributions"
                  graphData={data.map((row) => row.info.EmployerContributions)}
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
                  ${numeral(row.info.EmployerContributions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Participant Contributions"
                  graphData={data.map(
                    (row) => row.info.ParticipantContributions
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
                  ${numeral(row.info.ParticipantContributions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Contribution Yield"
                  graphData={data.map((row) => row.info.ContributionYield)}
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
                  {numeral(row.info.ContributionYield).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Average Assets"
                  graphData={data.map((row) => row.info.ContributionYield)}
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
                  ${numeral(row.info.AverageAssets).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Loans % Yield"
                  graphData={data.map((row) => row.info.LoansPercentageYield)}
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
                  {numeral(row.info.LoansPercentageYield).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Loan Participants"
                  graphData={data.map((row) => row.info.LoanParticipants)}
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
                  ${numeral(row.info.LoanParticipants).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Total Loans"
                  graphData={data.map((row) => row.info.TotalLoans)}
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
                  ${numeral(row.info.TotalLoans).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Total Distbibutions"
                  graphData={data.map((row) => row.info.TotalDistbibutions)}
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
                  ${numeral(row.info.TotalDistbibutions).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Distribution Yield"
                  graphData={data.map((row) => row.info.DistributionYield)}
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
                  {numeral(row.info.DistributionYield).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Distributions Participant"
                  graphData={data.map(
                    (row) => row.info.DistributionsParticipant
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
                  ${numeral(row.info.DistributionsParticipant).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Average Participant Balance"
                  graphData={data.map(
                    (row) => row.info.AverageParticipantBalance
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
                  ${numeral(row.info.AverageParticipantBalance).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="% Part. Contribution By Part."
                  graphData={data.map(
                    (row) =>
                      row.info.PercentParticipantContributionByParticipant
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
                  {numeral(
                    row.info.PercentParticipantContributionByParticipant
                  ).format("0.00")}
                  %
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="% Employer Contribution By Part."
                  graphData={data.map(
                    (row) => row.info.PercentEmployerContributionByParticipant
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
                  {numeral(
                    row.info.PercentEmployerContributionByParticipant
                  ).format("0.00")}
                  %
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="% Distribution By Part."
                  graphData={data.map(
                    (row) => row.info.PercentDistributionByParticipants
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
                  {numeral(row.info.PercentDistributionByParticipants).format(
                    "0.00"
                  )}
                  %
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Transfers"
                  graphData={data.map((row) => row.info.Transfers)}
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
                  ${numeral(row.info.Transfers).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Transfers Out"
                  graphData={data.map((row) => row.info.TransfersOut)}
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
                  ${numeral(row.info.TransfersOut).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Return Of Investment"
                  graphData={data.map((row) => row.info.ReturnOfInvestment)}
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
                  {numeral(row.info.ReturnOfInvestment).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Return Of Assets"
                  graphData={data.map((row) => row.info.ReturnOfAssets)}
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
                  {numeral(row.info.ReturnOfAssets).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Total Expenses"
                  graphData={data.map((row) => row.info.TotalExpenses)}
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
                  ${numeral(row.info.TotalExpenses).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Cost Participants"
                  graphData={data.map((row) => row.info.CostParticipants)}
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
                  ${numeral(row.info.CostParticipants).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Expense Ratio"
                  graphData={data.map((row) => row.info.ExpenseRatio)}
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
                  {numeral(row.info.ExpenseRatio).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Annual Dist"
                  graphData={data.map((row) => row.info.AnnualDist)}
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
                  ${numeral(row.info.AnnualDist).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Annual Cost"
                  graphData={data.map((row) => row.info.AnnualCost)}
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
                  ${numeral(row.info.AnnualCost).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Annual ROI"
                  graphData={data.map((row) => row.info.AnnualROI)}
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
                  {numeral(row.info.AnnualROI).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Annual Employee Contrib."
                  graphData={data.map((row) => row.info.AnnualEmployeeContrib)}
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
                  ${numeral(row.info.AnnualEmployeeContrib).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Annual Total"
                  graphData={data.map((row) => row.info.AnnualTotal)}
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
                  ${numeral(row.info.AnnualTotal).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Plan Design Rating"
                  graphData={data.map(
                    (row) => row.info.OverallPlanDesignRating
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
                  {numeral(row.info.OverallPlanDesignRating).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Touches"
                  graphData={data.map((row) => row.info.Touches)}
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
                  {numeral(row.info.Touches).format("0.00")}%
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Utilization;
