import React, { useState } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight, Close } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
  },
  headerStyle: {
    color: "#378FC3",
    fontFamily: "Baskervville",
  },
}));
export default (props) => {
  const classes = useStyles();
  return props.data.length > 0 ? (
    <div className={classes.mainDiv}>
      <Typography
        variant="h3"
        component="h3"
        className={classes.headerStyle}
        gutterBottom
      >
        Carriers
      </Typography>
      {/* <small className="form-text text-muted" style={{ fontSize: "1em" }}>
              Total Amount: ${numeral(el.TotalAmount).format("0,0")}
            </small> */}

      <MaterialTable
        style={{ margin: "3%" }}
        title="Carriers"
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
            field: "Name",
            title: "Name",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },

          {
            field: "Service",
            title: "Service",
            render: (rowData) => (rowData.Service ? rowData.Service : "N/A"),
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "ServiceFailure",
            title: "Service Failure",
            render: (rowData) =>
              rowData.ServiceFailure ? (
                <CheckIcon style={{ color: "green" }} />
              ) : (
                <CloseIcon style={{ color: "red" }} />
              ),
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "CoveredPersons",
            title: "Covered Persons",
            render: (rowData) =>
              `${numeral(rowData.CoveredPersons).format("0,0")}`,

            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "CommissionsPaid",
            title: "Commissions Paid",
            render: (rowData) =>
              `$${numeral(rowData.CommissionsPaid).format("0,0")}`,

            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "BrokerFeesPaid",
            title: "Broker Fees Paid",
            render: (rowData) =>
              `$${numeral(rowData.BrokerFeesPaid).format("0,0")}`,
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "WelfareExpense",
            title: "Welfare Expense",
            render: (rowData) =>
              `$${numeral(rowData.WelfareExpense).format("0,0")}`,
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "GeneralAccountAsset",
            title: "General Account Asset",
            render: (rowData) =>
              `$${numeral(rowData.GeneralAccountAsset).format("0,0")}`,
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "SeparateAccountAsset",
            title: "Separate Account Asset",
            render: (rowData) =>
              `$${numeral(rowData.SeparateAccountAsset).format("0,0")}`,
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "EIN",
            title: "EIN",
            render: (rowData) => (rowData.EIN ? rowData.EIN : "N/A"),
            cellStyle: {
              textAlign: "center",
            },
          },
        ]}
        data={props.data}
        options={{
          paging: false,
          headerStyle: {
            backgroundColor: "#378FC3",
            color: "#FFF",
            fontSize: "17px",
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  ) : (
    ""
  );
};
