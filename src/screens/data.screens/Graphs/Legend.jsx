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
    width: "60%",
    margin: "0 auto",
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
            title: "-0.95 and below",
            field: "first",

            headerStyle: {
              backgroundColor: forestgreen,
            },
          },
          {
            title: "-0.94 to -0.16",
            field: "first",
            headerStyle: {
              backgroundColor: limegreen,
            },
          },
          {
            title: "-0.15 to 0.62",
            field: "first",
            headerStyle: {
              backgroundColor: lightgreen,
            },
          },
          {
            title: "0.63 to 1.40",
            field: "first",
            headerStyle: {
              backgroundColor: softOrange,
            },
          },
          {
            title: "1.43 and above",
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
