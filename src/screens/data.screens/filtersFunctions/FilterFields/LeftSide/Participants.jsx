import React from "react";
import { Pie } from "react-chartjs-2";
import dataReducer from "../../../../../components/dataReducer";
const Participants = (props) => {
  const ParticipantsReduced = dataReducer.arrayReducer([
    props.TotalParticipants,
    props.RetiredParticipants,
    props.TotalParticipantsBal,
  ]);
  const categoryParticipants = dataReducer.arrayCategory([
    props.TotalParticipants,
    props.RetiredParticipants,
    props.TotalParticipantsBal,
  ]);

  const data = {
    labels: ["Total", "Retired", "Bal"],
    datasets: [
      {
        data: ParticipantsReduced,
        backgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Participants
      </small>
      <Pie data={data} />
      <small className="form-text text-muted" style={{ textAlign: "center" }}>
        {categoryParticipants}
      </small>
    </div>
  );
};

export default Participants;
