import React from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import common from "../../../../commonFunctions/common";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import { primaryBlue } from "../../../../../../global/Colors";
export default (props) => {
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
          parentOnly: "Parent 1",
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
          parentOnly: "Parent 2",
        },

        {
          id: 200,
          name: "Net Assets",
          value: `$${common.reducer(props.data.NetAssets)}`,
          parentOnly: "Parent 3",
        },
      ]}
      parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
      options={{
        paging: false,
        headerStyle: {
          backgroundColor: primaryBlue,
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
