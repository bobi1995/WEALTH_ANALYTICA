import React from "react";
import NetAssets from "./LeftSide/NetAssets";
import CashOutflow from "./LeftSide/CashOutflow";
import Participants from "./LeftSide/Participants";
import Contribution from "./LeftSide/Contributions";
import { Box, makeStyles } from "@material-ui/core/";

const styles = () => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
});

const useStyles = makeStyles(styles);

const LeftSide = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
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
      <Participants
        TotalParticipants={props.TotalParticipants}
        RetiredParticipants={props.RetiredParticipants}
        TotalParticipantsBal={props.TotalParticipantsBal}
      />
      <Contribution
        ParticipantContribution={props.ParticipantContribution}
        EmployerContribution={props.EmployerContribution}
      />
    </Box>
  );
};

export default LeftSide;
