import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import User from "./User";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={"lg"}
      fullWidth={true}
      style={{ minHeight: "80vh", maxHeight: "80vh" }}
    >
      <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
        Existing Users
      </DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {props.users.map((el, ind) => (
          <User
            key={ind}
            data={el}
            states={props.states}
            type={props.type}
            payId={props.paymentID}
          />
        ))}
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({
  users,
  states,
  type,
  payId,
  count,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "3%" }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View all {count}
      </Button>
      <SimpleDialog
        selectedValue="none"
        open={open}
        onClose={handleClose}
        users={users}
        states={states}
        type={type}
        payId={payId}
      />
    </div>
  );
}
