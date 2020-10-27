import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  chartStyle: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
    padding: "0%",
  },
}));
const Chart = ({ data, title }) => {
  const classes = useStyles();
  const graphicData = data.map((el) => el.Value);

  const chartData = {
    labels: data.map((el) => el.Year),
    datasets: [
      {
        label: title,
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54,162,235,0.4)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: graphicData,
      },
    ],
  };
  return (
    <Box className={classes.chartStyle}>
      <Bar data={chartData} />
    </Box>
  );
};

export default Chart;
