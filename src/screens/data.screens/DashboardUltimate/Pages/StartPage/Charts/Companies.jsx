import React from "react";
import { Bar } from "react-chartjs-2";
import dataReducer from "../../StatisticPage/charts";
import { makeStyles } from "@material-ui/styles";
import GridChart from "../../AccountPage/GridChart";
import numeral from "numeral";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import NetworkCheckIcon from "@material-ui/icons/NetworkCheck";
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
const Companies = ({ chartData }) => {
  const classes = styles();

  const data = {
    labels: ["Small", "Large"],
    datasets: [
      {
        label: "Companies",
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54,162,235,0.4)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: dataReducer.arrayReducer(chartData),
      },
    ],
  };

  const sumOfCompanies = (accumulator, currentValue) =>
    accumulator + currentValue;

  return (
    <div className={classes.chartStyle}>
      <GridChart
        data={numeral(chartData.reduce(sumOfCompanies)).format(0, 0)}
        name="Companies"
        icon={EmojiTransportationIcon}
        staticon={NetworkCheckIcon}
        smalltext="all Companies you have access to"
      />
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Companies Type
      </small>
      <Bar data={data} options={dataReducer.optionReturn(chartData)} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        Companies with over 100 participants are considered as Large.
      </small>
    </div>
  );
};

export default Companies;
