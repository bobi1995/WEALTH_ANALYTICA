import React, { useState } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import common from "../../../../../commonFunctions/common";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";

export default (props) => {
  const [selectedRow, setSelectedRow] = useState(null);
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
          secondParent: "Parent 1 1",
        },
        {
          id: 3,
          name: "Contribution Participant",
          value: `$${common.reducer(props.data.ContrContributionParticipant)}`,
          parentId: 1,
          secondParent: "Parent 1 2",
        },
        {
          id: 4,
          name: "Contribution Other Rec",
          value: `$${common.reducer(props.data.ContrContributionOtherRec)}`,
          parentId: 1,
          secondParent: "Parent 1 3",
        },
        {
          id: 5,
          name: "Contribution Non Cash",
          value: `$${common.reducer(props.data.ContrContributionNonCash)}`,
          parentId: 1,
          secondParent: "Parent 1 4",
        },
        {
          id: 130,
          name: "Total Income",
          value: `$${common.reducer(props.data.TotalIncome)}`,
          parentOnly: "Parent 4",
        },

        {
          id: 143,
          name: "Total Expenses",
          value: `$${common.reducer(props.data.TotalExpenses)}`,
          parentOnly: "Parent 9",
        },
        {
          id: 131,
          name: "Total Distribution",
          value: `$${common.reducer(props.data.TotalDistribution)}`,
          parentId: 143,
        },

        {
          id: 135,
          name: "Total Distribution Correction",
          value: `$${common.reducer(props.data.TotalDistributionCorrection)}`,
          parentId: 143,
        },

        {
          id: 136,
          name: "Total Participating Loans",
          value: `$${common.reducer(props.data.TotalParticipatingLoans)}`,
          parentId: 143,
        },

        {
          id: 142,
          name: "Other Fees",
          value: `$${common.reducer(props.data.OtherFees)}`,
          parentId: 143,
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
          backgroundColor: !!rowData.parentOnly
            ? "white"
            : rowData.secondParent
            ? "#e0f3ff"
            : "#AFD4EC",
        }),
      }}
    />
  ) : (
    ""
  );
};
