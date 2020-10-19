import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const Loader2 = ({ text }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
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
      <div style={{ width: "100%", textAlign: "center" }}>
        <CircularProgress
          size={150}
          style={{ textAlign: "center", marginTop: "15%" }}
        />
        <p style={{ textAlign: "center", marginTop: "3%" }}>{text}</p>
      </div>
    </Dialog>
  );
};

export default Loader2;
