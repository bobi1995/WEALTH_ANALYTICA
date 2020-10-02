import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import dataReducer from "../../DashboardUltimate/Pages/StatisticPage/charts";

const useStyles = makeStyles({
  graphsContainer: {
    width: "40%",
    minWidth: 650,
  },
});

const Graphs = ({ graphData, data }) => {
  const classes = useStyles();
  console.log(data.map((el) => el));
  let inputData = data.map((el) => el.utilization[graphData]);
  let dataGr;
  if (graphData) {
    dataGr = {
      labels: data.map((el) =>
        el.business ? `Industry for ${el.year}` : el.year
      ),
      datasets: [
        {
          label: graphData.match(/[A-Z][a-z]+|[0-9]+/g).join(" "),
          backgroundColor: "rgba(54,162,235,0.2)",
          borderColor: "rgba(54,162,235,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54,162,235,0.4)",
          hoverBorderColor: "rgba(54,162,235,1)",
          data: dataReducer.arrayReducer(inputData),
        },
      ],
    };
  }
  return (
    <Box className={classes.graphsContainer}>
      {dataGr ? (
        <Bar data={dataGr} options={dataReducer.optionReturn(inputData)} />
      ) : (
        "Graphs!"
      )}
    </Box>
  );
};

export default Graphs;
