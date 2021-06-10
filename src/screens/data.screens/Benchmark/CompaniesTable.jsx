import React from "react";
import MaterialTable from "material-table";
import { makeStyles, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import {
  ArrowUpward,
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import commonFunctions from "../commonFunctions/common";
import numeral from "numeral";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "1% auto",
  },
});

const BenchmarkTable = ({ data, setCompareIds }) => {
  const classes = useStyles();
  return (
    <Box className={classes.table}>
      <MaterialTable
        title="Companies included in Industry Calculations"
        icons={{
          Filter: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
          Search: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
          ResetSearch: React.forwardRef((props, ref) => (
            <RotateLeftIcon ref={ref} />
          )),
          SortArrow: ArrowUpward,
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
        }}
        columns={[
          {
            title: "Name",
            field: "Name",
            render: (rowData) => commonFunctions.formatString(rowData.Name),
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          { title: "State", field: "State" },
          {
            title: "City",
            field: "City",
            render: (rowData) => commonFunctions.formatString(rowData.City),
          },
          {
            title: "Average Participants",
            field: "AverageParticipants",
            render: (rowData) =>
              numeral(rowData.AverageParticipants).format("0,0"),
          },
          {
            title: "Total Assets",
            field: "TotalAssets",
            render: (rowData) =>
              `$${numeral(rowData.TotalAssets).format("0,0")}`,
          },
        ]}
        data={data}
        options={{
          paging: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          selection: true,
        }}
        onSelectionChange={(rows) => setCompareIds(rows)}
      />
    </Box>
  );
};

export default BenchmarkTable;
