import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import MaterialTable from "material-table";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";
import Chart from "chart.js";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
}));

const EmailSection = ({ data }) => {
  const classes = useStyles();
  const scoreData = [
    // {
    //   name: "Overall Rating",
    //   value: data.OverallRating,
    // },
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
    // {
    //   name: "Touches",
    //   value: data.Touches,
    // },
  ];

  useEffect(() => {
    var ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: ["Overall rating", "Touches"],
        datasets: [
          {
            label: "Rating in %",
            data: [data.OverallRating, data.Touches],
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
              },
            },
          ],
        },
      },
    });
  }, [data]);

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

      <Box>
        <canvas id="myChart" width="600" height="300"></canvas>
      </Box>
    </Box>
  );
};

export default EmailSection;
