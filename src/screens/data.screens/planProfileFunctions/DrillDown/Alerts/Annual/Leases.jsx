import React from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
import commonFunctions from "../../../../commonFunctions/common";
import { primaryBlue } from "../../../../../../global/Colors";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
}));
export default (props) => {
  const classes = useStyles();

  const totalLeaseCostBasis = props.data
    .map((el) => el.LeaseCostBasis)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalLeaseCurrentValue = props.data
    .map((el) => el.LeaseCurrentValue)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalLeaseRentalReceipt = props.data
    .map((el) => el.LeaseRentalReceipt)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalLeaseExpensePaid = props.data
    .map((el) => el.LeaseExpensePaid)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalLeaseNetReceiptAmount = props.data
    .map((el) => el.LeaseNetReceiptAmount)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);
  const totalLeaseArrearsAmount = props.data
    .map((el) => el.LeaseArrearsAmount)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  props.data.push({
    LessorName: "Total",
    LeaseCostBasis: totalLeaseCostBasis,
    LeaseCurrentValue: totalLeaseCurrentValue,
    LeaseRentalReceipt: totalLeaseRentalReceipt,
    LeaseExpensePaid: totalLeaseExpensePaid,
    LeaseNetReceiptAmount: totalLeaseNetReceiptAmount,
    LeaseArrearsAmount: totalLeaseArrearsAmount,
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
        Leases Information
      </Typography>
      <small className="form-text text-muted" style={{ fontSize: "1em" }}>
        Number of Leases:
        {numeral(props.data.length - 1).format("0,0")}
      </small>
      <MaterialTable
        style={{ margin: "3%" }}
        title="Leases"
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
            field: "LessorName",
            title: "Lessor Name",
            render: (rowData) =>
              commonFunctions.formatString(rowData.LessorName),
          },

          {
            field: "LeaseCostBasis",
            title: "Lease Cost Basis",
            render: (rowData) =>
              rowData.LeaseCostBasis !== null
                ? `$${numeral(rowData.LeaseCostBasis).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "LeaseCurrentValue",
            title: "Lease Current Value",
            render: (rowData) =>
              rowData.LeaseCurrentValue !== null
                ? `$${numeral(rowData.LeaseCurrentValue).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "LeaseRentalReceipt",
            title: "Lease Rental Receipt",
            render: (rowData) =>
              rowData.LeaseRentalReceipt !== null
                ? `$${numeral(rowData.LeaseRentalReceipt).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "LeaseExpensePaid",
            title: "Lease Expense Paid",
            render: (rowData) =>
              rowData.LeaseExpensePaid !== null
                ? `$${numeral(rowData.LeaseExpensePaid).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "LeaseNetReceiptAmount",
            title: "Lease Net Receipt Amount",
            render: (rowData) =>
              rowData.LeaseNetReceiptAmount !== null
                ? `$${numeral(rowData.LeaseNetReceiptAmount).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "LeaseArrearsAmount",
            title: "Lease Arrears Amount",
            render: (rowData) =>
              rowData.LeaseArrearsAmount !== null
                ? `$${numeral(rowData.LeaseArrearsAmount).format("0,0")}`
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
