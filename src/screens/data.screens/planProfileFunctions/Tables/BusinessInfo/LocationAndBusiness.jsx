import React from "react";
import { makeStyles, Box, Link, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import { primaryBlue } from "../../../../../global/Colors";
import commonFunctions from "../../../commonFunctions/common";

const useStyles = makeStyles({
  container: {
    marginBottom: "3%",
  },
});

const Location = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <MaterialTable
        title={props.title}
        columns={[
          {
            title: "Field",
            field: "Field",
          },
          {
            title: "Information",
            field: "Info",
            render: (rowData) =>
              rowData.Info && commonFunctions.formatString(rowData.Info),
          },
        ]}
        data={props.data}
        options={{
          headerStyle: {
            backgroundColor: primaryBlue,
            color: "#FFF",
            fontSize: 18,
          },
          paging: false,
          search: false,
        }}
      />
    </Box>
  );
};

export default Location;
