import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ data, contribution, welfare, benefit }) => {
  return (
    <div className="businessplan-smallDiv">
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
