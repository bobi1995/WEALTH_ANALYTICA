import React from "react";
import { makeStyles, Box, Paper } from "@material-ui/core";
import MaterialTable from "material-table";

import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
const useStyles = makeStyles((theme) => ({
  tableBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    width: "100%",
  },
  paperStyle: {
    width: "94%",
  },
}));

const Indicators = ({ info }) => {
  const classes = useStyles();
  return info.length > 0 ? (
    <Box className={classes.tableBox}>
      <Paper className={classes.paperStyle}>
        <MaterialTable
          title="Compliance Indicators"
          columns={[
            {
              title: "Field",
              field: "field",
              cellStyle: {
                width: "80%",
              },
              render: (rowData) => (rowData.field ? rowData.field : "N/A"),
            },
            {
              title: "Score",
              field: "value",

              render: (rowData) =>
                rowData.type ? (
                  rowData.type === "amount" ? (
                    `$${rowData.value}`
                  ) : (
                    rowData.value
                  )
                ) : rowData.value === 0 ? (
                  <CheckIcon style={{ color: "green" }} />
                ) : (
                  <ClearIcon style={{ color: "red" }} />
                ),

              cellStyle: (rowData) => ({
                color: rowData < 0 ? "red" : "black",
              }),
            },
          ]}
          data={info}
          options={{
            headerStyle: {
              backgroundColor: "#378FC3",
              color: "#FFF",
              fontSize: 18,
            },
            paging: false,
            search: false,
          }}
        />
      </Paper>
    </Box>
  ) : (
    ""
  );
};

export default Indicators;
