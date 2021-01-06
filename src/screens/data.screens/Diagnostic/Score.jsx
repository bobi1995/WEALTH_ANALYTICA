import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import MaterialTable from "material-table";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";

const useStyles = makeStyles((theme) => ({
  container: { width: 600, margin: "0 auto" },
}));

const EmailSection = ({ data }) => {
  const classes = useStyles();
  const scoreData = [
    {
      name: "Enterprise Exposure Rating",
      value: data.EnterpriseExposureRating,
    },
    {
      name: "Retirement Enhancement",
      value: data.RetirementEnhancement,
    },
    {
      name: "Enhanced Tax Deferral And Employee Retirement",
      value: data.EnhancedTaxDeferralAndEmployeeRetirement,
    },
    {
      name: "Overall Rating",
      value: data.OverallRating,
    },
    {
      name: "Touches",
      value: data.Touches,
    },
  ];
  return (
    <Box className={classes.container}>
      <MaterialTable
        title={`Wealth Analytica Score Card - ` + data.Year}
        columns={[
          {
            title: "Field",
            field: "name",
            cellStyle: {
              width: "80%",
            },
            render: (rowData) => (rowData.name ? rowData.name : "N/A"),
          },
          {
            title: "Score",
            field: "value",
            render: (rowData) =>
              rowData.value
                ? `${numeral(rowData.value).format("0.0")}%`
                : "N/A",
            cellStyle: (rowData) => ({
              color: rowData < 50 ? "red" : rowData > 79 ? "green" : "orange",
              fontWeight: "bold",
            }),
          },
        ]}
        data={scoreData}
        options={{
          headerStyle: {
            backgroundColor: primaryBlue,
            color: "#FFF",
            fontSize: 18,
          },
          paging: false,
          search: false,
          sorting: false,
        }}
      />
    </Box>
  );
};

export default EmailSection;
