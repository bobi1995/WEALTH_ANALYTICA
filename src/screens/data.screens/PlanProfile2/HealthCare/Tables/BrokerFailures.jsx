import React from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import commonFunction from "../../../commonFunctions/common";
import { primaryBlue } from "../../../../../global/Colors";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
  },
  headerStyle: {
    color: primaryBlue,
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
        Broker Failures
      </Typography>
      {/* <small className="form-text text-muted" style={{ fontSize: "1em" }}>
              Total Amount: ${numeral(el.TotalAmount).format("0,0")}
            </small> */}

      <MaterialTable
        style={{ margin: "3%" }}
        title="Broker Failures"
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
            render: (rowData) => commonFunction.formatString(rowData.Name),
          },
          {
            field: "Description",
            title: "Description",
            render: (rowData) =>
              commonFunction.formatString(rowData.Description),
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
        }}
      />
    </div>
  ) : (
    ""
  );
};
