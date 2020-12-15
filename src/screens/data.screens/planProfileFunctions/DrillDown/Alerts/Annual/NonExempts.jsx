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

  const totalNonExemptLeaseCostBasis = props.data
    .map((el) => el.NonExemptLeaseCostBasis)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalNonExemptLeaseMarketValue = props.data
    .map((el) => el.NonExemptLeaseMarketValue)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalNonExemptLeaseExpIncremental = props.data
    .map((el) => el.NonExemptLeaseExpIncremental)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalNonExemptLeaseGainLoss = props.data
    .map((el) => el.NonExemptLeaseGainLoss)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalNonExemptLeaseRentalAmt = props.data
    .map((el) => el.NonExemptLeaseRentalAmt)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalNonExemptPurchasePrice = props.data
    .map((el) => el.NonExemptPurchasePrice)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  const totalNonExemptSellPrice = props.data
    .map((el) => el.NonExemptSellPrice)
    .reduce(function(acc, val) {
      return isNaN(val) ? acc : acc + val;
    }, 0);

  props.data.push({
    NonExemptPartyName: "Total",
    NonExemptLeaseCostBasis: totalNonExemptLeaseCostBasis,
    NonExemptLeaseMarketValue: totalNonExemptLeaseMarketValue,
    NonExemptLeaseExpIncremental: totalNonExemptLeaseExpIncremental,
    NonExemptLeaseGainLoss: totalNonExemptLeaseGainLoss,
    NonExemptLeaseRentalAmt: totalNonExemptLeaseRentalAmt,
    NonExemptPurchasePrice: totalNonExemptPurchasePrice,
    NonExemptSellPrice: totalNonExemptSellPrice,
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
        Non-Exempts Information
      </Typography>
      <small className="form-text text-muted" style={{ fontSize: "1em" }}>
        Number of Non-Exempts:
        {numeral(props.data.length - 1).format("0,0")}
      </small>
      <MaterialTable
        style={{ margin: "3%" }}
        title="Non-Exempts"
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
            field: "NonExemptPartyName",
            title: "Non-Exempt Party Name",
            render: (rowData) =>
              commonFunctions.formatString(rowData.NonExemptPartyName),
          },

          {
            field: "NonExemptLeaseCostBasis",
            title: "Non-Exempt Lease Cost Basis",
            render: (rowData) =>
              rowData.NonExemptLeaseCostBasis !== null
                ? `$${numeral(rowData.NonExemptLeaseCostBasis).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "NonExemptLeaseMarketValue",

            title: "Non-Exempt Lease Market Value",
            render: (rowData) =>
              rowData.NonExemptLeaseMarketValue !== null
                ? `$${numeral(rowData.NonExemptLeaseMarketValue).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "NonExemptLeaseExpIncremental",
            title: "Non-Exempt Lease Exp. Incremental",
            render: (rowData) =>
              rowData.NonExemptLeaseExpIncremental !== null
                ? `$${numeral(rowData.NonExemptLeaseExpIncremental).format(
                    "0,0"
                  )}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "NonExemptLeaseGainLoss",
            title: "Non-Exempt Lease Gain Loss",
            render: (rowData) =>
              rowData.NonExemptLeaseGainLoss !== null
                ? `$${numeral(rowData.NonExemptLeaseGainLoss).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "NonExemptLeaseRentalAmt",
            title: "Non-Exempt Lease Rental Amount",
            render: (rowData) =>
              rowData.NonExemptLeaseRentalAmt !== null
                ? `$${numeral(rowData.NonExemptLeaseRentalAmt).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "NonExemptPurchasePrice",
            title: "Non-Exempt Purchase Price",
            render: (rowData) =>
              rowData.NonExemptPurchasePrice !== null
                ? `$${numeral(rowData.NonExemptPurchasePrice).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },

          {
            field: "NonExemptSellPrice",
            title: "Non-Exempt Sell Price",
            render: (rowData) =>
              rowData.NonExemptSellPrice !== null
                ? `$${numeral(rowData.NonExemptSellPrice).format("0,0")}`
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
