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

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "3% auto",
  },
});

const BenchmarkTable = ({ data, compareIds, setCompareIds }) => {
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
            title: "Address",
            field: "Address",
            render: (rowData) => commonFunctions.formatString(rowData.Address),
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
