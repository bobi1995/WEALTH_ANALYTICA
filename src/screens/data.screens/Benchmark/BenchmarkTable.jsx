import React from "react";
import MaterialTable from "material-table";
import { makeStyles, Box, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import numeral from "numeral";
import LoopIcon from "@material-ui/icons/Loop";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "1% auto",
  },
});
const BenchmarkTable = ({ data, industryFlag, filterSearch }) => {
  const classes = useStyles();
  return (
    <Box className={classes.table}>
      <MaterialTable
        title="Services"
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
            title: "Category",
            field: "Service3",
            cellStyle: {
              backgroundColor: "#039be5",
              color: "#FFF",
            },
            headerStyle: {
              backgroundColor: "#039be5",
            },
            render: (rowData) => (rowData.parent ? rowData.Service3 : ""),
          },
          { title: "Service", field: "Service2" },
          {
            title: "2017",
            field: "2017",
            render: (rowData) =>
              rowData.id === "99992"
                ? `${numeral(rowData.overall2017).format("0.00")}%`
                : rowData.parent
                ? `$${numeral(rowData.overall2017).format("0,00")}`
                : rowData[2017]
                ? `$${numeral(rowData[2017]).format("0,00")}`
                : "$0",
          },
          {
            title: "2018",
            field: "2018",
            render: (rowData) =>
              rowData.id === "99992"
                ? `${numeral(rowData.overall2018).format("0.00")}%`
                : rowData.parent
                ? `$${numeral(rowData.overall2018).format("0,00")}`
                : rowData[2018]
                ? `$${numeral(rowData[2018]).format("0,00")}`
                : "$0",
          },
          {
            title: "2019",
            field: "2019",
            render: (rowData) =>
              rowData.id === "99992"
                ? `${numeral(rowData.overall2019).format("0.00")}%`
                : rowData.parent
                ? `$${numeral(rowData.overall2019).format("0,00")}`
                : rowData[2019]
                ? `$${numeral(rowData[2019]).format("0,00")}`
                : "$0",
          },
          {
            title: "Industry 2019",
            field: "industry",
            render: (rowData) =>
              industryFlag ? (
                filterSearch ? (
                  <CircularProgress size={30} style={{ textAlign: "center" }} />
                ) : rowData.id === "99992" ? (
                  `${numeral(rowData.industry).format("0.00")}%`
                ) : (
                  `$${numeral(rowData.industry).format("0,00")}`
                )
              ) : (
                <Tooltip title="Apply some filters to see results">
                  <LoopIcon />
                </Tooltip>
              ),
          },
        ]}
        parentChildData={(row, rows) =>
          rows.find((a) => a.id === row.Service3Code)
        }
        data={data}
        options={{
          paging: false,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          rowStyle: (rowData) => ({
            backgroundColor: !!rowData.parent
              ? rowData.total
                ? "#039be5"
                : "white"
              : "#e0f3ff",
            color: rowData.total ? "white" : "black",
            fontWeight: rowData.total ? "bold" : "normal",
          }),
        }}
      />
    </Box>
  );
};

export default BenchmarkTable;
