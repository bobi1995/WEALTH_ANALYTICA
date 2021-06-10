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
import WAImage from "../../../../../styles/images/Wealth_Analytica.png";
import dataReducer from "../../../../../components/dataReducer";

const useStyles = makeStyles({
  graphsContainer: {
    width: "30%",
    minWidth: 650,
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  signContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 440,
  },
});

const Graphs = ({ graphData, companies, labelData }) => {
  const classes = useStyles();

  const reducedData = dataReducer.arrayReducer(graphData);

  const data = {
    labels: companies,
    datasets: [
      {
        label: labelData,
        data: reducedData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box className={classes.graphsContainer}>
      {graphData ? (
        <Bar data={data} options={dataReducer.optionReturn(graphData)} />
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
              <Typography
                style={{ textAlign: "center" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
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
