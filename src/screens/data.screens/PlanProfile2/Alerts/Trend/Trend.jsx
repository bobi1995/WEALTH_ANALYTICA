import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { primaryBlue } from "../../../../../global/Colors";
import Table from "./Table";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
  },
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
}));

const loans = {
  OriginalIntBalanceOverdue: {
    item: "OriginalIntBalanceOverdue",
    type: "loan",
  },
  DefaultPrincipalInt: { item: "DefaultPrincipalInt", type: "loan" },
  OriginalPrincipal: { item: "OriginalPrincipal", type: "loan" },
  LoanDefaultInd: { item: "LoanDefaultInd", type: "loan" },
  OriginalPrincipalBalanceOverdue: {
    item: "OriginalPrincipalBalanceOverdue",
    type: "loan",
  },
  DefaultPrincipalReceived: { item: "DefaultPrincipalReceived", type: "loan" },
  OriginalPrincipalBalanceOutstanding: {
    item: "OriginalPrincipalBalanceOutstanding",
    type: "loan",
  },

  LeaseCostBasis: {
    item: "LeaseCostBasis",
    type: "Lease",
  },
  LeaseCurrentValue: {
    item: "LeaseCurrentValue",
    type: "Lease",
  },
  LeaseRentalReceipt: {
    item: "LeaseRentalReceipt",
    type: "Lease",
  },
  LeaseExpensePaid: {
    item: "LeaseExpensePaid",
    type: "Lease",
  },
  LeaseNetReceiptAmount: {
    item: "LeaseNetReceiptAmount",
    type: "Lease",
  },
  LeaseArrearsAmount: {
    item: "LeaseArrearsAmount",
    type: "Lease",
  },
  NonExemptLeaseCostBasis: {
    item: "NonExemptLeaseCostBasis",
    type: "non-exempt",
  },
  NonExemptLeaseMarketValue: {
    item: "NonExemptLeaseMarketValue",
    type: "non-exempt",
  },
  NonExemptLeaseExpIncremental: {
    item: "NonExemptLeaseExpIncremental",
    type: "non-exempt",
  },
  NonExemptLeaseGainLoss: {
    item: "NonExemptLeaseGainLoss",
    type: "non-exempt",
  },
  NonExemptLeaseRentalAmt: {
    item: "NonExemptLeaseRentalAmt",
    type: "non-exempt",
  },
  NonExemptPurchasePrice: {
    item: "NonExemptPurchasePrice",
    type: "non-exempt",
  },
  NonExemptSellPrice: {
    item: "NonExemptSellPrice",
    type: "non-exempt",
  },
};
export default (props) => {
  const classes = useStyles();

  props.data.forEach((item) => {
    loans.OriginalIntBalanceOverdue[item.Year] = item.OriginalIntBalanceOverdue;
    loans.DefaultPrincipalInt[item.Year] = item.DefaultPrincipalInt;
    loans.OriginalPrincipal[item.Year] = item.OriginalPrincipal;
    loans.LoanDefaultInd[item.Year] = item.LoanDefaultInd;
    loans.OriginalPrincipalBalanceOverdue[item.Year] =
      item.OriginalPrincipalBalanceOverdue;
    loans.DefaultPrincipalReceived[item.Year] = item.DefaultPrincipalReceived;
    loans.OriginalPrincipalBalanceOutstanding[item.Year] =
      item.OriginalPrincipalBalanceOutstanding;
    loans.LeaseCostBasis[item.Year] = item.LeaseCostBasis;
    loans.LeaseCurrentValue[item.Year] = item.LeaseCurrentValue;
    loans.LeaseRentalReceipt[item.Year] = item.LeaseRentalReceipt;
    loans.LeaseExpensePaid[item.Year] = item.LeaseExpensePaid;
    loans.LeaseNetReceiptAmount[item.Year] = item.LeaseNetReceiptAmount;
    loans.LeaseArrearsAmount[item.Year] = item.LeaseArrearsAmount;
    loans.NonExemptLeaseCostBasis[item.Year] = item.NonExemptLeaseCostBasis;
    loans.NonExemptLeaseMarketValue[item.Year] = item.NonExemptLeaseMarketValue;
    loans.NonExemptLeaseExpIncremental[item.Year] =
      item.NonExemptLeaseExpIncremental;
    loans.NonExemptLeaseGainLoss[item.Year] = item.NonExemptLeaseGainLoss;
    loans.NonExemptLeaseRentalAmt[item.Year] = item.NonExemptLeaseRentalAmt;
    loans.NonExemptPurchasePrice[item.Year] = item.NonExemptPurchasePrice;
    loans.NonExemptSellPrice[item.Year] = item.NonExemptSellPrice;
  });

  const desiredOutput = Object.values(loans);

  const loanData = desiredOutput.filter((el) => el.type === "loan");
  const leaseData = desiredOutput.filter((el) => el.type === "Lease");
  const nonExempt = desiredOutput.filter((el) => el.type === "non-exempt");
  return props.data ? (
    <div className={classes.mainDiv}>
      <Table data={loanData} heading="Loans" />
      <Table data={leaseData} heading="Lease" />
      <Table data={nonExempt} heading="Non-Exempt" />
    </div>
  ) : (
    ""
  );
};
