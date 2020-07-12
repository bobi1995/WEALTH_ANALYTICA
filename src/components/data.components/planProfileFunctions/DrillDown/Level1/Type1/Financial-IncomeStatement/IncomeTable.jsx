import React, { useState } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import common from "../../../../../commonFunctions/common";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";

export default (props) => {
  const [selectedRow, setSelectedRow] = useState(null);
  console.log(props.data);
  return props.data ? (
    <MaterialTable
      style={{ width: "100%", margin: "3%" }}
      title="Income Statement"
      icons={{
        Filter: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
        Search: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
        ResetSearch: React.forwardRef((props, ref) => (
          <RotateLeftIcon ref={ref} />
        )),
        SortArrow: ArrowUpward,
        DetailPanel: ChevronRight,
      }}
      columns={[
        {
          field: "name",
          title: "Category",
        },
        {
          field: "value",
          title: "Value",

          cellStyle: {
            textAlign: "center",
          },
        },
      ]}
      data={[
        {
          id: 1,
          name: "Contribution",
          value: `$${common.reducer(props.data.ContrTotalContribution)}`,
          parentOnly: "Parent 1",
        },
        {
          id: 2,
          name: "Contribution Employer",
          value: `$${common.reducer(props.data.ContrContributionEmployer)}`,
          parentId: 1,
        },
        {
          id: 3,
          name: "Contribution Participant",
          value: `$${common.reducer(props.data.ContrContributionParticipant)}`,
          parentId: 1,
        },
        {
          id: 4,
          name: "Contribution Other Rec",
          value: `$${common.reducer(props.data.ContrContributionOtherRec)}`,
          parentId: 1,
        },
        {
          id: 5,
          name: "Contribution Non Cash",
          value: `$${common.reducer(props.data.ContrContributionNonCash)}`,
          parentId: 1,
        },
        {
          id: 100,
          name: "Earning On Investment",
          value: ``,
          parentOnly: "Parent 2",
        },
        {
          id: 101,
          name: "Interest",
          value: `$${common.reducer(props.data.IntTotalInterest)}`,
          parentId: 100,
        },
        {
          id: 102,
          name: "Cash - Interest",
          value: `$${common.reducer(props.data.IntCashInterest)}`,
          parentId: 101,
        },
        {
          id: 103,
          name: "Government Securities Interest",
          value: `$${common.reducer(
            props.data.IntGovernmentSecuritiesInterest
          )}`,
          parentId: 101,
        },
        {
          id: 104,
          name: "Corp Debt Interest",
          value: `$${common.reducer(props.data.IntCorpDebtInterest)}`,
          parentId: 101,
        },
        {
          id: 105,
          name: "Loan Interest - Other",
          value: `$${common.reducer(props.data.IntLoanInterestOther)}`,
          parentId: 101,
        },
        {
          id: 106,
          name: "Participant Loan Int Inc",
          value: `$${common.reducer(props.data.IntParticipantLoanIntInc)}`,
          parentId: 101,
        },
        {
          id: 107,
          name: "Investment Other Interest",
          value: `$${common.reducer(props.data.IntInvestmentOtherInterest)}`,
          parentId: 101,
        },
        {
          id: 109,
          name: "Dividends",
          value: `$${common.reducer(props.data.DivTotalDividends)}`,
          parentId: 100,
        },
        {
          id: 110,
          name: "Preferred Stock Dividend",
          value: `$${common.reducer(props.data.DivPreferredStockDividend)}`,
          parentId: 109,
        },
        {
          id: 111,
          name: "Common Stock Dividend",
          value: `$${common.reducer(props.data.DivCommonStockDividend)}`,
          parentId: 109,
        },
        {
          id: 112,
          name: "Reg Investment",
          value: `$${common.reducer(props.data.DivRegInvestment)}`,
          parentId: 109,
        },
        {
          id: 114,
          name: "Rent",
          value: `$${common.reducer(props.data.TotalRent)}`,
          parentId: 100,
        },
        {
          id: 115,
          name: "Net Gain Loss on Sale",
          value: `$${common.reducer(props.data.TotalGainOnSale)}`,
          parentId: 100,
        },
        {
          id: 116,
          name: "Total Proceeds",
          value: `$${common.reducer(props.data.TotalProceeds)}`,
          parentId: 115,
        },
        {
          id: 117,
          name: "Total Cost",
          value: `$${common.reducer(props.data.TotalCost)}`,
          parentId: 115,
        },
        {
          id: 119,
          name: "Unrealized",
          value: `$${common.reducer(props.data.TotalUnrealized)}`,
          parentId: 100,
        },
        {
          id: 120,
          name: "Unrealized Gains Other",
          value: `$${common.reducer(props.data.UnrealizedGainsOther)}`,
          parentId: 119,
        },
        {
          id: 121,
          name: "Unrealized Gains RE",
          value: `$${common.reducer(props.data.UnrealizedGainsRE)}`,
          parentId: 119,
        },
        {
          id: 123,
          name: "Net Investment G/L",
          value: ``,
          parentId: 100,
        },
        {
          id: 124,
          name: "Gain Loss on 103 12",
          value: `$${common.reducer(props.data.GainLosson10312)}`,
          parentId: 123,
        },
        {
          id: 125,
          name: "Gain Loss on Common Trust",
          value: `$${common.reducer(props.data.GainLossonCommonTrust)}`,
          parentId: 123,
        },
        {
          id: 126,
          name: "Gain Loss on Master Trust",
          value: `$${common.reducer(props.data.GainLossonMasterTrust)}`,
          parentId: 123,
        },
        {
          id: 127,
          name: "Gain Loss on Pool",
          value: `$${common.reducer(props.data.GainLossonPool)}`,
          parentId: 123,
        },
        {
          id: 128,
          name: "Gain Loss on Reg Investment",
          value: `$${common.reducer(props.data.GainLossonRegInvestment)}`,
          parentId: 123,
        },
        {
          id: 129,
          name: "Other Income",
          value: `$${common.reducer(props.data.OtherIncome)}`,
          parentOnly: "Parent 3",
        },
        {
          id: 130,
          name: "Total Income",
          value: `$${common.reducer(props.data.TotalIncome)}`,
          parentOnly: "Parent 4",
        },
        {
          id: 131,
          name: "Benefit",
          value: `$${common.reducer(props.data.TotalDistribution)}`,
          parentOnly: "Parent 5",
        },
        {
          id: 132,
          name: "Distribution",
          value: `$${common.reducer(props.data.Distribution)}`,
          parentId: 131,
        },
        {
          id: 133,
          name: "Benefits Amount 1",
          value: `$${common.reducer(props.data.BenefitsAmount1)}`,
          parentId: 131,
        },
        {
          id: 134,
          name: "Benefits Amount 2",
          value: `$${common.reducer(props.data.BenefitsAmount2)}`,
          parentId: 131,
        },
        {
          id: 135,
          name: "Total Distribution Correction",
          value: `$${common.reducer(props.data.TotalDistributionCorrection)}`,
          parentOnly: "Parent 6",
        },
        {
          id: 136,
          name: "Total Participating Loans",
          value: `$${common.reducer(props.data.TotalParticipatingLoans)}`,
          parentOnly: "Parent 6",
        },
        {
          id: 137,
          name: "Total Interest",
          value: `$${common.reducer(props.data.TotalInterest)}`,
          parentOnly: "Parent 7",
        },
        {
          id: 138,
          name: "Administrative Fees",
          value: `$${common.reducer(props.data.TotalAdminExp)}`,
          parentOnly: "Parent 8",
        },
        {
          id: 139,
          name: "Professional Fees",
          value: `$${common.reducer(props.data.ProfessionalFees)}`,
          parentId: 138,
        },
        {
          id: 140,
          name: "Admin Fees",
          value: `$${common.reducer(props.data.AdminFees)}`,
          parentId: 138,
        },
        {
          id: 141,
          name: "Investment Management Fees",
          value: `$${common.reducer(
            props.data.AdminInvestmentManagementFeesFees
          )}`,
          parentId: 138,
        },
        {
          id: 142,
          name: "Other Fees",
          value: `$${common.reducer(props.data.OtherFees)}`,
          parentId: 138,
        },
        {
          id: 143,
          name: "Total Expenses",
          value: `$${common.reducer(props.data.TotalExpenses)}`,
          parentOnly: "Parent 9",
        },
        {
          id: 144,
          name: "Net Income",
          value: `$${common.reducer(props.data.NetIncome)}`,
          parentOnly: "Parent 10",
        },
        {
          id: 145,
          name: "Plan Transfers",
          value: `$${common.reducer(props.data.PlanTransfers)}`,
          parentOnly: "Parent 11",
        },
      ]}
      parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
      options={{
        paging: false,
        headerStyle: {
          backgroundColor: "#378FC3",
          color: "#FFF",
          fontSize: "17px",
          textAlign: "center",
          fontWeight: "bold",
        },

        rowStyle: (rowData) => ({
          backgroundColor: !!rowData.parentOnly ? "white" : "#e0f3ff",
        }),
      }}
    />
  ) : (
    ""
  );
};
