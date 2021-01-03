import React from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
import commonFunctions from "../../../commonFunctions/common";
import { primaryBlue } from "../../../../../global/Colors";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
}));
export default (props) => {
  const classes = useStyles();

  const totalOriginalIntBalanceOverdue = props.data
    .map((el) => el.OriginalIntBalanceOverdue)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalDefaultPrincipalInt = props.data
    .map((el) => el.DefaultPrincipalInt)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalOriginalPrincipal = props.data
    .map((el) => el.OriginalPrincipal)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalOriginalPrincipalBalanceOverdue = props.data
    .map((el) => el.OriginalPrincipalBalanceOverdue)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalDefaultPrincipalReceived = props.data
    .map((el) => el.DefaultPrincipalReceived)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalOriginalPrincipalBalanceOutstanding = props.data
    .map((el) => el.OriginalPrincipalBalanceOutstanding)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  props.data.push({
    ObligorName: "Total",
    OriginalIntBalanceOverdue: totalOriginalIntBalanceOverdue,
    DefaultPrincipalInt: totalDefaultPrincipalInt,
    OriginalPrincipal: totalOriginalPrincipal,
    OriginalPrincipalBalanceOverdue: totalOriginalPrincipalBalanceOverdue,
    DefaultPrincipalReceived: totalDefaultPrincipalReceived,
    OriginalPrincipalBalanceOutstanding: totalOriginalPrincipalBalanceOutstanding,
    total: true,
  });
  return (
    <div>
      <Typography
        variant="h3"
        component="h3"
        className={classes.headerStyle}
        gutterBottom
      >
        Loan Information
      </Typography>
      <small className="form-text text-muted" style={{ fontSize: "1em" }}>
        Number of Loans:
        {numeral(props.data.length - 1).format("0,0")}
      </small>
      <MaterialTable
        style={{ margin: "3%" }}
        title="Loans"
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
            field: "ObligorName",
            title: "Obligor Name",
            render: (rowData) =>
              commonFunctions.formatString(rowData.ObligorName),
          },

          {
            field: "OriginalIntBalanceOverdue",
            title: "Original Int. Balance Overdue",
            render: (rowData) =>
              rowData.OriginalIntBalanceOverdue !== null
                ? `$${numeral(rowData.OriginalIntBalanceOverdue).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "DefaultPrincipalInt",
            title: "Default Principal Int.",
            render: (rowData) =>
              rowData.DefaultPrincipalInt !== null
                ? `$${numeral(rowData.DefaultPrincipalInt).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "OriginalPrincipal",
            title: "Original Principal",
            render: (rowData) =>
              rowData.OriginalPrincipal !== null
                ? `$${numeral(rowData.OriginalPrincipal).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "OriginalPrincipalBalanceOverdue",
            title: "Original Principal Balance Overdue",
            render: (rowData) =>
              rowData.OriginalPrincipalBalanceOverdue !== null
                ? `$${numeral(rowData.OriginalPrincipalBalanceOverdue).format(
                    "0,0"
                  )}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "DefaultPrincipalReceived",
            title: "Default Principal Received",
            render: (rowData) =>
              rowData.DefaultPrincipalReceived !== null
                ? `$${numeral(rowData.DefaultPrincipalReceived).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "OriginalPrincipalBalanceOutstanding",
            title: "Original Principal Balance Outstanding",
            render: (rowData) =>
              rowData.OriginalPrincipalBalanceOutstanding !== null
                ? `$${numeral(
                    rowData.OriginalPrincipalBalanceOutstanding
                  ).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },
        ]}
        data={props.data}
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
            backgroundColor: !!rowData.total ? "#039BE5" : "white",
            color: !!rowData.total ? "white" : "black",
          }),
          sorting: false,
        }}
      />
    </div>
  );
};
