import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { primaryBlue } from "../../../../../../global/Colors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(() => ({
  backBtn: {
    marginTop: "1%",
    backgroundColor: primaryBlue,
    color: "white",
  },
}));
const BackBtn = ({ setView }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.backBtn}
      startIcon={<ArrowBackIcon />}
      onClick={() => setView("")}
    >
      Go Back
    </Button>
  );
};

export default BackBtn;
