import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  header: {
    textAlign: "center",
    fontSize: 30,
    marginTop: "2%",
    marginBottom: "2%",
  },
  sectionHeader: {
    textAlign: "center",
    fontSize: 20,
  },
});

const AccountantInfo = ({
  name,
  opinionDescription,
  auditScoreDescription,
  opinion,
  auditScope,
}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        maxWidth={"lg"}
        fullWidth={true}
      >
        <Typography className={classes.header} id="simple-dialog-title">
          {name}
        </Typography>
        <DialogContent dividers>
          <DialogTitle
            id="simple-dialog-title"
            className={classes.sectionHeader}
          >
            Opinion
          </DialogTitle>

          <DialogContentText style={{ textAlign: "center" }}>
            {opinion}
          </DialogContentText>

          <DialogTitle
            id="simple-dialog-title"
            className={classes.sectionHeader}
          >
            Opinion Description
          </DialogTitle>

          <DialogContentText style={{ textAlign: "center" }}>
            {opinionDescription}
          </DialogContentText>
        </DialogContent>

        <DialogContent dividers>
          <DialogTitle
            id="simple-dialog-title"
            className={classes.sectionHeader}
          >
            Audit Scope
          </DialogTitle>

          <DialogContentText style={{ textAlign: "center" }}>
            {auditScope}
          </DialogContentText>
          <DialogTitle
            id="simple-dialog-title"
            className={classes.sectionHeader}
          >
            Audit Scope Description
          </DialogTitle>

          <DialogContentText style={{ textAlign: "center" }}>
            {auditScoreDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AccountantInfo;
