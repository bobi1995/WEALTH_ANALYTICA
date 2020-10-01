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
});

const UtilizationTable = ({ data }) => {
  const classes = useStyles();
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
            <TableCell>Active Participants</TableCell>
            {data.map((row, ind) => (
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
                {row.utilization.ActiveParticipantsPercent}%
              </TableCell>
            ))}
          </TableRow>
          {/**SeparatedVestedParticipants */}
          <TableRow>
            <TableCell>SeparatedVestedParticipants</TableCell>
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
                {row.utilization.SeparatedVestedParticipants}
              </TableCell>
            ))}
          </TableRow>
          {/**ParticipantsWithBenefitAccount */}
          <TableRow>
            <TableCell>ParticipantsWithBenefitAccount</TableCell>
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
                {row.utilization.ParticipantsWithBenefitAccount}
              </TableCell>
            ))}
          </TableRow>
          {/**AverageActiveParticipants */}
          <TableRow>
            <TableCell>AverageActiveParticipants</TableCell>
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
                {row.utilization.AverageActiveParticipants}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalContributions */}
          <TableRow>
            <TableCell>Total Contributions</TableCell>
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
                ${numeral(row.utilization.TotalContributions).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalContributionsParticipant */}
          <TableRow>
            <TableCell>Total Contrib. Participant</TableCell>
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
                $
                {numeral(row.utilization.TotalContributionsParticipant).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
          {/**EmployerContributions */}
          <TableRow>
            <TableCell>Employer Contributions</TableCell>
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
                {row.utilization.EmployerContributions}%
              </TableCell>
            ))}
          </TableRow>
          {/**ParticipantContributions */}
          <TableRow>
            <TableCell>Participant Contributions</TableCell>
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
                {row.utilization.ParticipantContributions}%
              </TableCell>
            ))}
          </TableRow>
          {/**ContributionYield */}
          <TableRow>
            <TableCell>Contribution Yield</TableCell>
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
                {row.utilization.ContributionYield}%
              </TableCell>
            ))}
          </TableRow>
          {/**AverageAssets */}
          <TableRow>
            <TableCell>Average Assets</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AverageAssets < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.AverageAssets).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**LoansPercentageYield */}
          <TableRow>
            <TableCell>Loans Yield</TableCell>
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
                {row.utilization.LoansPercentageYield}%
              </TableCell>
            ))}
          </TableRow>
          {/**LoanParticipants */}
          <TableRow>
            <TableCell>Loan Participants</TableCell>
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
                ${numeral(row.utilization.LoanParticipants).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalLoans */}
          <TableRow>
            <TableCell>Total Loans</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TotalLoans < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.TotalLoans).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TotalDistbibutions */}
          <TableRow>
            <TableCell>Total Distbibutions</TableCell>
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
                ${numeral(row.utilization.TotalDistbibutions).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**DistributionYield */}
          <TableRow>
            <TableCell>Distribution Yield</TableCell>
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
                {row.utilization.DistributionYield}%
              </TableCell>
            ))}
          </TableRow>
          {/**DistributionsParticipant */}
          <TableRow>
            <TableCell>Distributions Participant</TableCell>
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
                $
                {numeral(row.utilization.DistributionsParticipant).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
          {/**AverageParticipantBalance */}
          <TableRow>
            <TableCell>Average Participant Balance</TableCell>
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
                $
                {numeral(row.utilization.AverageParticipantBalance).format(
                  "0,0"
                )}
              </TableCell>
            ))}
          </TableRow>
          {/**PercentParticipantContributionByParticipant */}
          <TableRow>
            <TableCell>Participant Contribution By Participant</TableCell>
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
                {row.utilization.PercentParticipantContributionByParticipant}%
              </TableCell>
            ))}
          </TableRow>
          {/**PercentEmployerContributionByParticipant */}
          <TableRow>
            <TableCell>Employer Contribution By Participant</TableCell>
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
                {row.utilization.PercentEmployerContributionByParticipant}%
              </TableCell>
            ))}
          </TableRow>
          {/**PercentDistributionByParticipants */}
          <TableRow>
            <TableCell>Distribution By Participants</TableCell>
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
                {row.utilization.PercentDistributionByParticipants}%
              </TableCell>
            ))}
          </TableRow>
          {/**Transfers */}
          <TableRow>
            <TableCell>Transfers</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.Transfers < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.Transfers).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**TransfersOut */}
          <TableRow>
            <TableCell>Transfers Out</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TransfersOut < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.TransfersOut).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**ReturnOfInvestment */}
          <TableRow>
            <TableCell>Return Of Investment</TableCell>
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
                {row.utilization.ReturnOfInvestment}%
              </TableCell>
            ))}
          </TableRow>
          {/**ReturnOfAssets */}
          <TableRow>
            <TableCell>Return Of Assets</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ReturnOfAssets < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {row.utilization.ReturnOfAssets}%
              </TableCell>
            ))}
          </TableRow>
          {/**TotalExpenses */}
          <TableRow>
            <TableCell>Total Expenses</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.TotalExpenses < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.TotalExpenses).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**CostParticipants */}
          <TableRow>
            <TableCell>Cost Participants</TableCell>
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
                ${numeral(row.utilization.CostParticipants).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**ExpenseRatio */}
          <TableRow>
            <TableCell>Expense Ratio</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ExpenseRatio < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {row.utilization.ExpenseRatio}%
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualDist */}
          <TableRow>
            <TableCell>Annual Dist</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualDist < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.AnnualDist).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualCost */}
          <TableRow>
            <TableCell>Annual Cost</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualCost < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.AnnualCost).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualROI */}
          <TableRow>
            <TableCell>Annual ROI</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualROI < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {row.utilization.AnnualROI}%
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualEmployeeContrib */}
          <TableRow>
            <TableCell>Annual Employee Contrib.</TableCell>
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
                ${numeral(row.utilization.AnnualEmployeeContrib).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**AnnualTotal */}
          <TableRow>
            <TableCell>Annual Total</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.AnnualTotal < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.AnnualTotal).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**EstimatedEmployeeContributionPerYear */}
          <TableRow>
            <TableCell>Emp. Contrib. Per Year</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.EstimatedEmployeeContributionPerYear < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                $
                {numeral(
                  row.utilization.EstimatedEmployeeContributionPerYear
                ).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**EstimatedEmployeeContribRatePerYear */}
          <TableRow>
            <TableCell>Employee Contrib. Rate</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.EstimatedEmployeeContribRatePerYear < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {row.utilization.EstimatedEmployeeContribRatePerYear}%
              </TableCell>
            ))}
          </TableRow>
          {/**EstAnnualIncome */}
          <TableRow>
            <TableCell>Annual Income</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.EstAnnualIncome < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.EstAnnualIncome).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**ReplacementIncomeRate */}
          <TableRow>
            <TableCell>Replacement Income Rate</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ReplacementIncomeRate < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {row.utilization.ReplacementIncomeRate}%
              </TableCell>
            ))}
          </TableRow>
          {/**RetirementIncome */}
          <TableRow>
            <TableCell>Retirement Income</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.RetirementIncome < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                ${numeral(row.utilization.RetirementIncome).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**ExpectedRateOfReturn */}
          <TableRow>
            <TableCell>Expected Rate Of Return</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.ExpectedRateOfReturn < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {row.utilization.ExpectedRateOfReturn}%
              </TableCell>
            ))}
          </TableRow>
          {/**WAEstimatedAverageParticipantBalance */}
          <TableRow>
            <TableCell>WA Average Participant Balance</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.WAEstimatedAverageParticipantBalance < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                $
                {numeral(
                  row.utilization.WAEstimatedAverageParticipantBalance
                ).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**WAEstimatedYearsToRetirementReadiness */}
          <TableRow>
            <TableCell>WA Years To Retirement</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.WAEstimatedYearsToRetirementReadiness < 0
                    ? classes.negativeNum
                    : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
                {numeral(
                  -row.utilization.WAEstimatedYearsToRetirementReadiness
                ).format("0,0")}
              </TableCell>
            ))}
          </TableRow>
          {/**OverallPlanDesignRating */}
          <TableRow>
            <TableCell>Overall Plan Design Rating</TableCell>
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
                {row.utilization.OverallPlanDesignRating}%
              </TableCell>
            ))}
          </TableRow>
          {/**Touches */}
          <TableRow>
            <TableCell>Touches</TableCell>
            {data.map((row, ind) => (
              <TableCell
                className={
                  row.utilization.Touches < 0 ? classes.negativeNum : ""
                }
                key={ind}
                component="th"
                scope="row"
              >
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
