import React from "react";
import NetAssets from "./LeftSide/NetAssets";
import CashOutflow from "./LeftSide/CashOutflow";
import Participants from "./LeftSide/Participants";
import Contribution from "./LeftSide/Contributions";
const LeftSide = (props) => {
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "5%" }}>
        <NetAssets
          NetAssetBegin={props.NetAssetBegin}
          NetAssetEnd={props.NetAssetEnd}
        />
        <CashOutflow
          Distribution={props.Distribution}
          CorrectivrDistribution={props.CorrectivrDistribution}
          ServiceProviderExpenses={props.ServiceProviderExpenses}
          OtherExpenses={props.OtherExpenses}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Participants
          TotalParticipants={props.TotalParticipants}
          RetiredParticipants={props.RetiredParticipants}
          TotalParticipantsBal={props.TotalParticipantsBal}
        />
        <Contribution
          ParticipantContribution={props.ParticipantContribution}
          EmployerContribution={props.EmployerContribution}
        />
      </div>
    </div>
  );
};

export default LeftSide;
