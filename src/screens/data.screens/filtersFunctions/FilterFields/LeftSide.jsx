import React from "react";
import NetAssets from "./LeftSide/NetAssets";
import CashOutflow from "./LeftSide/CashOutflow";
import Participants from "./LeftSide/Participants";
import Contribution from "./LeftSide/Contributions";
import {
  Box,
  useMediaQuery,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

const styles = (theme) => ({
  root: {
    // display: "flex",
    // marginBottom: "1%",
    // marginTop: "1%",
    // [theme.breakpoints.down("sm")]: {
    //   display: "block",
    // },
    // [theme.breakpoints.up("md")]: {
    //   display: "flex",
    // },

    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
});
// style={{ display: "flex", marginBottom: "1%", marginTop: "1%" }}
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
