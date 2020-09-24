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
const Plans = () => {
  const classes = styles();

  //const netAssetsONLY = netAssets.map((el) => el.NetAssets);

  const data = {
    labels: ["Benefit Plans", "Contribution Plans", "Welfare"],
    datasets: [
      {
        data: dataReducer.arrayReducer([687742, 754876, 67134]),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const categoryAsstes = dataReducer.arrayCategory([687742, 754876, 67134]);

  return (
    <div className={classes.chartStyle}>
      <GridChart
        data={numeral(752264).format(0, 0)}
        name="Plans"
        icon={ImportContactsIcon}
        smallstat={100}
        staticon={TrendingUpIcon}
        smalltext="of All Plans in USA"
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
