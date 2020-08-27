import React from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight, Close } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import commonFunction from "../../../../commonFunctions/common";

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
        Terminations
      </Typography>

      <MaterialTable
        style={{ margin: "3%" }}
        title="Terminations"
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
            field: "Services",
            title: "Services",
            render: (rowData) => commonFunction.formatString(rowData.Services),
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
