import React from "react";
import { Bar } from "react-chartjs-2";
import dataReducer from "../charts";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles(() => ({
  chartStyle: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
    padding: "0%",
  },
}));
const NetIncome = (props) => {
  const classes = styles();

  const netIncome = props.statistics.map((el) => ({
    Year: el.Year,
    NetIncome: el.NetIncome,
  }));

  const netIncomeOnly = netIncome.map((el) => el.NetIncome);

  const data = {
    labels: netIncome.map((el) => el.Year),
    datasets: [
      {
        label: "Net Income",
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54,162,235,0.4)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: dataReducer.arrayReducer(netIncomeOnly),
      },
    ],
  };

  return (
    <div className={classes.chartStyle}>
      <Bar data={data} options={dataReducer.optionReturn(netIncomeOnly)} />
    </div>
  );
};

export default NetIncome;
