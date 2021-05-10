import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const Loader2 = ({ text, display, success }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    display("");
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
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>

      <DialogContentText style={{ textAlign: "center" }}>
        {success === true ? (
          <CheckCircleIcon
            size={100}
            style={{ color: "green", fontSize: 70 }}
          />
        ) : (
          <CancelIcon size={100} style={{ color: "red", fontSize: 70 }} />
        )}
      </DialogContentText>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Loader2;
