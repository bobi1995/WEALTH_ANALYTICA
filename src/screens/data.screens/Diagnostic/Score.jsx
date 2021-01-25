import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import MaterialTable from "material-table";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";
import Chart from "chart.js";

const useStyles = makeStyles((theme) => ({
  container: { width: 600, margin: "0 auto" },
}));

const EmailSection = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  const scoreData = [
    {
      name: "Overall Rating",
      value: data.OverallRating,
    },
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
      name: "Touches",
      value: data.Touches,
    },
  ];

  useEffect(() => {
    console.log("here");
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: scoreData.map((el) => el.name),
        datasets: [
          {
            label: "Overall in %",
            data: scoreData.map((el) => {
              console.log(el.value);
              return el.value;
            }),
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(153, 102, 255, 1)",
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
      <canvas id="myChart" width="800" height="400"></canvas>
      {/* <MaterialTable
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
      /> */}
    </Box>
  );
};

export default EmailSection;
