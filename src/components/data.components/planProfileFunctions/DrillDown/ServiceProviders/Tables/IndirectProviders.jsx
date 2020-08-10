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
        Indirect Providers
      </Typography>
      {/* <small className="form-text text-muted" style={{ fontSize: "1em" }}>
              Total Amount: ${numeral(el.TotalAmount).format("0,0")}
            </small> */}

      <MaterialTable
        style={{ margin: "3%" }}
        title="Indirect Providers"
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
          },

          {
            field: "Payment",
            title: "Payment",
            render: (rowData) =>
              rowData.Payment
                ? `$${numeral(rowData.Payment).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "Description",
            title: "Description",
          },
          {
            field: "EIN",
            title: "EIN",
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
