import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import apiAddress from "../../../../../../global/endpointAddress";
import AlerBox from "../../../../../../components/alertBox";

const useStyles = makeStyles((theme) => ({
  removeButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "#cc0000",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#ff7f7f",
    },
  },
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeState = () => {
    let temp = JSON.parse(localStorage.getItem("States"));
    axios
      .post(
        `${apiAddress}/api/Users/RemoveSubscription?userGuid=${props.guid}&state=${props.data.State}&type=${props.data.Type}&paymentID=${props.data.PaymentID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (props.isBusiness === true) {
          temp = temp.filter(
            (el) => el.State !== props.data.State || el.Type !== props.data.Type
          );
          localStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        setAlertMessage(
          "Subscription removed unsuccessfully. Please try again"
        );
      });
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.removeButton}
      >
        Remove
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Removing State subscription for this user means that he will no more
            be able to use it in his profile. The User will be added in free
            states of your profile.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => removeState()} color="primary" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
      {alertMessage ? (
        <AlerBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
}
