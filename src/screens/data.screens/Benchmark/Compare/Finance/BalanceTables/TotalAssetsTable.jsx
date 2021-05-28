import React, { createRef } from "react";
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
    fontWeight: "bold",
    // fontSize: 16,
    textAlign: "center",
  },
  cellStyle: { textAlign: "center" },

  previewBtn: {
    textTransform: "none",
  },
});
const TotalAssetsTable = ({ data }) => {
  const classes = useStyles();
  const ref = createRef();

  return (
    <Box className={classes.root}>
      <Graphs />
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
            {/***********Buildings */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Buildings
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.Buildings).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Cach Non Interest*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Cash Non Interest
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.CachNonInterest).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Cash Interest*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Cash Interest
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.CashInterest).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Common Stock */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Common Stock
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.CommonStock).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Common Trust */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Common Trust
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.CommonTrust).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Contr. Contribution Employer*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Contr. Contrib. Employer
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
                  {numeral(row.finance.ContrContributionEmployer).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Contribution Employer */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Contribution Employer
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.ContributionEmployer).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Contribution Participant */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Contribution Participant
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.ContributionParticipant).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Corp Debt Other */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Corp. Debt Other
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.CorpDebtOther).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Corp. Debt Preferred*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Corp. Debt Preferred
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.CorpDebtPreferred).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Employer Property */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Employer Property
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.EmployerProperty).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Employer Security */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Employer Security
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.EmployerSecurity).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Government Securities*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Government Securities
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.GovernmentSecurities).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Insurance GA*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  InsuranceGA
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.InsuranceGA).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Int. Investment Other Interest*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Int. Investment Other Interest
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
                  {numeral(row.finance.IntInvestmentOtherInterest).format(
                    "0,0"
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/***********Investment Other */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Investment Other
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.InvestmentOther).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Investment Personal Prop */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Investment Personal Prop
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.InvestmentPersonalProp).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Investment_103_12*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Investment_103_12
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.Investment_103_12).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Joint Venture */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Joint Venture
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.JointVenture).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********LoansOther*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Loans Other
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.LoansOther).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Master Trust*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Master Trust
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.MasterTrust).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Mortgate Participant */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Mortgate Participant
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.MortgateParticipant).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Participant Loans */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Participant Loans
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.ParticipantLoans).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Pooled Sep. Account */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Pooled Sep. Account
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.PooledSepAccount).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Preferred Stock*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Preferred Stock
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.PreferredStock).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Real Estate */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Real Estate
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.RealEstate).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Receivables*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Receivables
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.Receivables).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Reg. Investment*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Reg. Investment
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.RegInvestment).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********TotalAssets */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Assets
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalAssets).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            {/***********Total Unrealized*/}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Total Unrealized
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.TotalUnrealized).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Unrealized Gains Other */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Unrealized Gains Other
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.UnrealizedGainsOther).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
            {/***********Unrealized Gains RE */}
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                  onClick={() => {}}
                >
                  Unrealized Gains RE
                </Button>
              </TableCell>
              {data.map((row) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                >
                  ${numeral(row.finance.UnrealizedGainsRE).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TotalAssetsTable;
