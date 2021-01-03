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
  let total2017 = 0;
  let total2018 = 0;
  let total2019 = 0;
  props.data.map((el) => {
    total2017 = total2017 + el[2017];
    total2018 = total2018 + el[2018];
    total2019 = total2019 + el[2019];
    return null;
  });

  props.data.push({
    item: "Total",
    "2017": total2017,
    "2018": total2018,
    "2019": total2019,
    type: "total",
  });

  return (
    <div>
      <Typography
        variant="h3"
        component="h3"
        className={classes.headerStyle}
        gutterBottom
      >
        {props.heading} Information
      </Typography>

      <MaterialTable
        style={{ margin: "3%" }}
        title={props.heading}
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
            field: "item",
            title: "Item",
            render: (rowData) =>
              commonFunctions.splitCapitalLetterString(rowData.item),
          },
          {
            field: "2017",
            title: "2017",
            render: (rowData) =>
              rowData[2017] !== null
                ? `$${numeral(rowData[2017]).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "2018",
            title: "2018",
            render: (rowData) =>
              rowData[2018] !== null
                ? `$${numeral(rowData[2018]).format("0,0")}`
                : "N/A",
            cellStyle: {
              textAlign: "center",
            },
          },
          {
            field: "2019",
            title: "2019",
            render: (rowData) =>
              rowData[2019] !== null
                ? `$${numeral(rowData[2019]).format("0,0")}`
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
            backgroundColor: rowData.type === "total" ? "#039BE5" : "white",
            color: rowData.type === "total" ? "white" : "black",
          }),
          sorting: false,
        }}
      />
    </div>
  );
};
