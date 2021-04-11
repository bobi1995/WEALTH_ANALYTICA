import React from "react";
import { Pie } from "react-chartjs-2";
import dataReducer from "../../StatisticPage/charts";
import { makeStyles } from "@material-ui/styles";

import GridChart from "../../AccountPage/GridChart";
import numeral from "numeral";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
const styles = makeStyles(() => ({
  chartStyle: {
    width: "50%",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
    padding: "0%",
    margin: "1%",
  },
}));
const Plans = ({ chartData, percentage, totalPlans }) => {
  const classes = styles();

  const data = {
    labels: ["Benefit Plans", "Contribution Plans", "Welfare"],
    datasets: [
      {
        data: dataReducer.arrayReducer(chartData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const categoryAsstes = dataReducer.arrayCategory(chartData);

  return (
    <div className={classes.chartStyle}>
      <GridChart
        data={numeral(totalPlans).format(0, 0)}
        name="Plans in your subscription"
        icon={ImportContactsIcon}
        smallstat={percentage}
        staticon={TrendingUpIcon}
        smalltext="of the plans in USA"
      />
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Different Plans
      </small>
      <Pie data={data} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        {categoryAsstes}
      </small>
    </div>
  );
};

export default Plans;
