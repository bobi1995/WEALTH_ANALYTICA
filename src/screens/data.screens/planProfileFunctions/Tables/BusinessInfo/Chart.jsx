import React from "react";
import { Pie } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
    border: "1px solid lightgray",
    borderRadius: 25,
    textAlign: "center",
    alignSelf: "center",
    marginTop: "7%",
    width: "50%",
    paddingBottom: "1%",
  },
});

const Chart = ({ data, contribution, welfare, benefit }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <small className="form-text text-muted">
          Benefit Pension: {benefit}
        </small>
        <small className="form-text text-muted">
          Contribution Pension: {contribution}
        </small>
        <small className="form-text text-muted">Welfare: {welfare}</small>
      </div>
      <div>
        <Pie data={data} width={500} />
      </div>
    </div>
  );
};

export default Chart;
