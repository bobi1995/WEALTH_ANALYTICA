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
      title="Balance Sheet"
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
          name: "Total Assets",
          value: `$${common.reducer(props.data.TotalAssets)}`,
        },
        {
          id: 2,
          name: "Cash - Non Interest",
          value: `$${common.reducer(props.data.CachNonInterest)}`,
          parentId: 1,
        },
        {
          id: 3,
          name: "Contribution Employer",
          value: `$${common.reducer(props.data.ContributionEmployer)}`,
          parentId: 1,
        },
        {
          id: 4,
          name: "Contribution Participant",
          value: `$${common.reducer(props.data.ContributionParticipant)}`,
          parentId: 1,
        },
        {
          id: 5,
          name: "Receivables",
          value: `$${common.reducer(props.data.Receivables)}`,
          parentId: 1,
        },
        {
          id: 6,
          name: "Cash - Interest",
          value: `$${common.reducer(props.data.CashInterest)}`,
          parentId: 1,
        },
        {
          id: 7,
          name: "Government Securities",
          value: `$${common.reducer(props.data.GovernmentSecurities)}`,
          parentId: 1,
        },
        {
          id: 8,
          name: "Corp Debt Preferred",
          value: `$${common.reducer(props.data.CorpDebtPreferred)}`,
          parentId: 1,
        },
        {
          id: 9,
          name: "Corp Debt Other",
          value: `$${common.reducer(props.data.CorpDebtOther)}`,
          parentId: 1,
        },
        {
          id: 10,
          name: "Preferred Stock",
          value: `$${common.reducer(props.data.PreferredStock)}`,
          parentId: 1,
        },
        {
          id: 11,
          name: "Common Stock",
          value: `$${common.reducer(props.data.CommonStock)}`,
          parentId: 1,
        },
        {
          id: 12,
          name: "Joint Venture",
          value: `$${common.reducer(props.data.JointVenture)}`,
          parentId: 1,
        },
        {
          id: 13,
          name: "Real Estate",
          value: `$${common.reducer(props.data.RealEstate)}`,
          parentId: 1,
        },
        {
          id: 14,
          name: "Loans - Other",
          value: `$${common.reducer(props.data.LoansOther)}`,
          parentId: 1,
        },
        {
          id: 15,
          name: "Participant Loans",
          value: `$${common.reducer(props.data.ParticipantLoans)}`,
          parentId: 1,
        },
        {
          id: 16,
          name: "Common Trust",
          value: `$${common.reducer(props.data.CommonTrust)}`,
          parentId: 1,
        },
        {
          id: 17,
          name: "Pooled Sep Account",
          value: `$${common.reducer(props.data.PooledSepAccount)}`,
          parentId: 1,
        },
        {
          id: 18,
          name: "Master Trust",
          value: `$${common.reducer(props.data.MasterTrust)}`,
          parentId: 1,
        },
        {
          id: 19,
          name: "103 12 Investment",
          value: `$${common.reducer(props.data.Investment_103_12)}`,
          parentId: 1,
        },
        {
          id: 20,
          name: "Reg Investment",
          value: `$${common.reducer(props.data.RegInvestment)}`,
          parentId: 1,
        },
        {
          id: 21,
          name: "Insurance GA",
          value: `$${common.reducer(props.data.InsuranceGA)}`,
          parentId: 1,
        },
        {
          id: 22,
          name: "Investment Other",
          value: `$${common.reducer(props.data.InvestmentOther)}`,
          parentId: 1,
        },
        {
          id: 23,
          name: "Employer - Security",
          value: `$${common.reducer(props.data.EmployerSecurity)}`,
          parentId: 1,
        },
        {
          id: 24,
          name: "Investment Personal Prop",
          value: `$${common.reducer(props.data.InvestmentPersonalProp)}`,
          parentId: 1,
        },
        {
          id: 25,
          name: "Employer - Property",
          value: `$${common.reducer(props.data.EmployerProperty)}`,
          parentId: 1,
        },
        {
          id: 26,
          name: "Mortgate Participant",
          value: `$${common.reducer(props.data.MortgateParticipant)}`,
          parentId: 1,
        },
        {
          id: 100,
          name: "Liabilities",
          value: `$${common.reducer(props.data.TotalLiabilities)}`,
        },
        {
          id: 102,
          name: "Benefit Payable",
          value: `$${common.reducer(props.data.BenefitPayable)}`,
          parentId: 100,
        },
        {
          id: 103,
          name: "Operating Payable",
          value: `$${common.reducer(props.data.OperatingPayable)}`,
          parentId: 100,
        },
        {
          id: 104,
          name: "Acquisition Debt",
          value: `$${common.reducer(props.data.AcquisitionDebt)}`,
          parentId: 100,
        },
        {
          id: 105,
          name: "Liabilities Other",
          value: `$${common.reducer(props.data.LiabilitiesOther)}`,
          parentId: 100,
        },
        {
          id: 200,
          name: "Net Assets",
          value: `$${common.reducer(props.data.NetAssets)}`,
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

        rowStyle: (rowData) => {
          return {
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
          };
        },
      }}
    />
  ) : (
    ""
  );
};
