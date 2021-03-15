import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import apiAddress from "../../../global/endpointAddress";
import AlerBox from "../../../components/alertBox";

const useStyles = makeStyles({
  buttonStyle: {
    marginBottom: "3%",
    border: "none",
    fontSize: 10,
    color: "#CFD8E5",
    fontStyle: "italic",
    "&:hover": {
      color: "grey",
      border: "1px solid grey",
    },
  },
});

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = (e) => {
    e.preventDefault();

    axios
      .post(`${apiAddress}/api/Users/ForgotPassword?email=${email}`)
      .then((res) => {
        handleClose();
        setAlertMessage(
          "Email is sent and will be there in up to 5 minutes. Please check your SPAM folder also."
        );
      })
      .catch((e) => {
        setAlertMessage("Invalid Email Address");
      });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Button
        className={classes.buttonStyle}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Forgot password?
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Forgotten Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To restore your password, please enter the registered email here. We
            will send you there the new password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            onChange={onChangeEmail}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSend} color="primary">
            Send
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
