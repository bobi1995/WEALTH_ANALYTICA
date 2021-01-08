import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import { primaryBlue } from "../../global/Colors";
import ContactsTable from "./EmailingSystem/ContactsTable";
import PdfList from "./EmailingSystem/PdfList";
import EmailFields from "./EmailingSystem/EmailFields";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: "60px",
  },
  buttonStyle: {
    backgroundColor: primaryBlue,
    color: "white",
    "&:hover": {
      color: primaryBlue,
    },
    whiteSpace: "nowrap",
  },
  tableStyle: {
    height: "75vh",
    display: "flex",
    justifyContent: "space-around",
  },
  titleStyle: {
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    color: "grey",

    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    textAlign: "center",
  },
  contactAndPDF: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
const EmailingSystem = ({ contact, setDisplay }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const fullWidth = true;
  const maxWidth = "xl";
  const [pdfs, setPdfs] = useState([]);
  const [receivers, setReceivers] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
    setDisplay("none");
  };
  const handleClose = () => {
    setOpen(false);
    setDisplay("block");
    setReceivers("");
  };

  return (
    <Box>
      <Button
        variant="outlined"
        className={classes.buttonStyle}
        onClick={handleClickOpen}
      >
        <EmailIcon /> Open
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className={classes.mainDiv}
      >
        <DialogTitle className={classes.titleStyle}>
          Wealth Analytica Email System
        </DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Box className={classes.contactAndPDF}>
          <ContactsTable
            contacts={contact}
            receivers={receivers}
            setReceivers={setReceivers}
          />
          <PdfList setPdfs={setPdfs} />
        </Box>
        <Box>
          <EmailFields receivers={receivers} pdfs={pdfs} />
        </Box>
      </Dialog>
    </Box>
  );
};

export default EmailingSystem;
