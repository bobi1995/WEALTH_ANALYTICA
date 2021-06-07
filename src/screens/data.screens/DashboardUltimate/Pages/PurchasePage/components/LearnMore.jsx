import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const LearnMore = ({ learnMore, setLearnMore }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setLearnMore("");
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{learnMore.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{learnMore.text}</DialogContentText>
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          For more information about purchasing Membership visit &nbsp;
          <Link
            href="https://wealthanalytica.com/subscription/"
            target="_blank"
          >
            Wealth Analytica Subscription Page.
          </Link>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LearnMore;
