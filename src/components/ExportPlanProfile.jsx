import React, { useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./Email/index.css";
import axios from "axios";
import apiAddress from "../global/endpointAddress";
import fileDownload from "js-file-download";
import AlertBox from "../components/alertBox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { limegreen } from "../global/Colors";
const useStyles = makeStyles({
  contactSign: {
    fontSize: 15,
  },
  exportBtn: {
    backgroundColor: limegreen,
    color: "white",
    "&:hover": {
      backgroundColor: "#68BA54",
    },
  },
  contactButton: {
    backgroundColor: "#3F51B5",
    borderRadius: "20px",
    padding: "8px 15px",
    cursor: "pointer",
    color: "white",
    maxWidth: "220px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
  },

  main: {
    position: "fixed",
    zIndex: 99999999999999999,
    bottom: 0,
    left: "10px",
    fontWeight: 300,
    fontSize: 15,
    fontFamily: "Raleway , Arial, sans-serif",
    width: 179,
  },
});
const ExportPlanProfile = ({ companyID }) => {
  const classes = useStyles();
  const [heading, setHeading] = useState("Export Plan");
  const [alertMessage, setAlertMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const onExportClick = async (e) => {
    e.preventDefault();
    const exportUrl = `${apiAddress}/api/SmallCompanies/GetPlanProfilePdf?companyId=${companyID}`;

    setHeading("Exporting...");

    axios
      .get(exportUrl, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "report.pdf");
        setHeading("Export Plan");
      })
      .catch((err) => {
        setHeading("Export Plan");
        setAlertMessage("For some reason we could not export this plan.");
      });
  };

  return (
    <Box className={classes.main}>
      <Box className={classes.contactButton} onClick={handleClickOpen}>
        <GetAppIcon />
        <Typography component="h4" className={classes.contactSign}>
          {heading}
        </Typography>
      </Box>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle
          id="max-width-dialog-title"
          style={{ textAlign: "center" }}
        >
          Export Plan Design
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Button className={classes.exportBtn}>Export Full Plan</Button>
          </Box>
          <Box>
            <Button className={classes.exportBtn}>
              Export Selected Sections
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default ExportPlanProfile;
