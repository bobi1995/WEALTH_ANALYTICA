import React, { useState } from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { primaryBlue } from "../../../../global/Colors";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import MaterialTable from "material-table";
import numeral from "numeral";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  table: {
    backgroundColor: "#E3F2FD",
    border: `1px solid ${primaryBlue}`,
    marginBottom: "3%",
    maxHeight: 350,
  },
  tableHeader: {
    color: primaryBlue,
    //fontWeight: "bold",
    //fontSize: 16,
    textAlign: "center",
  },
  cellStyle: { textAlign: "center" },

  previewBtn: {
    textTransform: "none",
  },
});
const ServiceProviders = ({ data }) => {
  const classes = useStyles();
  const [graphData, setGraphData] = useState();
  const [label, setLabel] = useState("");

  const headArr = data.map((el, index) => {
    return {
      id: index,
      company: el.name,
      providerName: "",
      total: "",
      failures: el.info.FailuresCount,
      terminations: el.info.TerminationsCount,
    };
  });

  const rowArr = data.map((el, index) => {
    return el.info.Payments.map((payment, ind) => {
      return {
        id: index + ind + 100,
        company: "",
        providerName: payment.Name,
        total: payment.TotalNetPayments,
        failures: "",
        terminations: "",
        parentId: index,
      };
    });
  });

  const newArr = headArr.concat(...rowArr);

  return (
    <Box className={classes.root}>
      <MaterialTable
        title="Service Providers"
        icons={{
          Filter: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
          Search: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
          ResetSearch: React.forwardRef((props, ref) => (
            <RotateLeftIcon ref={ref} />
          )),
          SortArrow: ArrowUpward,
          DetailPanel: ChevronRight,
        }}
        data={newArr}
        columns={[
          { title: "Company", field: "company" },
          { title: "Provider Name", field: "providerName" },
          {
            title: "Total",
            field: "total",
            render: (rowData) =>
              rowData.parentId !== undefined
                ? `$${numeral(rowData.total).format("0,0")}`
                : "",
          },
          {
            title: "Failures",
            field: "failures",
            render: (rowData) =>
              rowData.parentId === undefined
                ? `$${numeral(rowData.failures).format("0,0")}`
                : "",
          },
          {
            title: "Terminations",
            field: "terminations",
            render: (rowData) =>
              rowData.parentId === undefined
                ? `$${numeral(rowData.terminations).format("0,0")}`
                : "",
          },
        ]}
        parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
        options={{
          paging: false,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          rowStyle: (rowData) => ({
            backgroundColor:
              rowData.parentId !== undefined ? "#039be5" : "white",
            color: rowData.parentId !== undefined ? "white" : "black",
            fontWeight: rowData.parentId !== undefined ? "bold" : "normal",
          }),
        }}
      />
    </Box>
  );
};

export default ServiceProviders;
