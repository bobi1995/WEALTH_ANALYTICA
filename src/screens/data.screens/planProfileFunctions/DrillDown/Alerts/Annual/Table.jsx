import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Loans from "./Loans";
import Leases from "./Leases";
import NonExempts from "./NonExempts";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
  },
}));

export default (props) => {
  const classes = useStyles();
  console.log(props.data);
  return props.data ? (
    <div className={classes.mainDiv}>
      <Loans data={props.data.Loans} />
      <Leases data={props.data.Leases} />
      <NonExempts data={props.data.NonExempts} />
    </div>
  ) : (
    ""
  );
};
