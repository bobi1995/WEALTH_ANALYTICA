import React from "react";
import MaterialTable from "material-table";
import {
  softOrange,
  lightgreen,
  limegreen,
  forestgreen,
  softRed,
} from "../../../global/Colors";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "90%",
    margin: "1% auto",
  },
});

const Legend = ({ setState }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <MaterialTable
        title="Average Expense Ratio"
        columns={[
          {
            title: "0.19 and below",
            field: "first",

            headerStyle: {
              backgroundColor: forestgreen,
            },
          },
          {
            title: "0.20 to 0.48",
            field: "first",
            headerStyle: {
              backgroundColor: limegreen,
            },
          },
          {
            title: "0.49 to 0.77",
            field: "first",
            headerStyle: {
              backgroundColor: lightgreen,
            },
          },
          {
            title: "0.78 to 1.06",
            field: "first",
            headerStyle: {
              backgroundColor: softOrange,
            },
          },
          {
            title: "1.07 and above",
            field: "first",
            headerStyle: {
              backgroundColor: softRed,
            },
          },
        ]}
        data={[]}
        options={{
          headerStyle: {
            color: "#FFF",
            textAlign: "center",
          },

          paging: false,
          search: false,
          sorting: false,
          showEmptyDataSourceMessage: false,
        }}
      />
    </Box>
  );
};
export default Legend;
