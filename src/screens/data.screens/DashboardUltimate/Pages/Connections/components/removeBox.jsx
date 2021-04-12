import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import commonFunctions from "../../../../commonFunctions/common";
import axios from "axios";
import apiAddress from "../../../../../../global/endpointAddress";
import AlertBox from "../../../../../../components/alertBox";

const RemoveBox = ({ companyName, companyID, display }) => {
  const [open, setOpen] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
    display(false);
  };

  const removeClient = () => {
    axios
      .post(
        `${apiAddress}/api/Bookmarks/RemoveClient?companyID=${companyID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        setAlertMessage(
          "Something went wrong with removing client. Please try again."
        );
      });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        Wealth Analytica System
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you really want to remove&nbsp;
          <b>{commonFunctions.formatString(companyName)}</b> from your
          connections? <br /> <br />
          This means that you will no longer see&nbsp;
          <b>{commonFunctions.formatString(companyName)}</b> as you existing
          connection (client) but you will keep the company as bookmark until
          you remove it from there also.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={removeClient} color="primary">
          Yes, remove it
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Dialog>
  );
};

export default RemoveBox;
