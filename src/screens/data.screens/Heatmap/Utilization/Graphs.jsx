import React from "react";
import {
  makeStyles,
  Box,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import dataReducer from "../../DashboardUltimate/Pages/StatisticPage/charts";
import WAImage from "../../../../styles/images/Wealth_Analytica.png";

const useStyles = makeStyles({
  graphsContainer: {
    width: "40%",
    minWidth: 650,
  },
  signContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 440,
  },
});

const Graphs = ({ graphData, data }) => {
  const classes = useStyles();
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
        <Box className={classes.signContainer}>
          <Card>
            <CardMedia
              style={{ width: "70%", margin: "0 auto" }}
              component="img"
              image={WAImage}
              title="Wealth Analytica"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Choose Field by clicking on it's name and we will visualise it
                in nice graph for you.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default Graphs;
