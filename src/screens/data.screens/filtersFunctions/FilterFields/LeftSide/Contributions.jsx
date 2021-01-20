import React from "react";
import { Doughnut } from "react-chartjs-2";

import dataReducer from "../../../../../components/dataReducer";

const Contribution = (props) => {
  const ContributionReduced = dataReducer.arrayReducer([
    props.ParticipantContribution,
    props.EmployerContribution,
  ]);
  const categoryContribution = dataReducer.arrayCategory([
    props.ParticipantContribution,
    props.EmployerContribution,
  ]);

  const data = {
    labels: ["Participants", "Employers"],
    datasets: [
      {
        data: ContributionReduced,
        backgroundColor: ["#71B37C", "#F29079"],
        hoverBackgroundColor: ["#71B37C", "#F29079"],
      },
    ],
  };

  return (
    <div style={{ width: "25%" }}>
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Contribution
      </small>
      <Doughnut data={data} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        {categoryContribution}
      </small>
    </div>
  );
};

export default Contribution;
