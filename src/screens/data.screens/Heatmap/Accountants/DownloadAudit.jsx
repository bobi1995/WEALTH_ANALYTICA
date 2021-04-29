import React, { useState } from "react";
import PropTypes from "prop-types";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import GetAppIcon from "@material-ui/icons/GetApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Box, makeStyles } from "@material-ui/core";
import { primaryBlue } from "../../../../global/Colors";
import apiAddress from "../../../../global/endpointAddress";
import AlertBox from "../../../../components/alertBox";
import Loader from "../../../../components/plainCicularLoader";
import axios from "axios";
import fileDownload from "js-file-download";

const useStyles = makeStyles({
  dialogContent: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  itemBox: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    flexWrap: "wrap",
  },
  stateName: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Baskervville",
    color: primaryBlue,
    textAlign: "center",
  },
});
function SimpleDialog(props) {
  const { onClose, selectedValue, open, reports } = props;

  const classes = useStyles();
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExport = (ackId) => {
    const url = `${apiAddress}/api/SmallCompanies/GetAuditReportFile?ackid=${ackId}`;
    setLoading(true);
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "AuditReport.pdf");
        setLoading(false);
      })
      .catch((err) => {
        setAlertMessage("For some reason we could not export the document");
        setLoading(false);
      });
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      style={{ marginTop: "5%" }}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={"sm"}
      fullWidth={true}
    >
      <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
        Audit Report
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {loading ? (
          <Loader />
        ) : (
          <Box className={classes.itemBox}>
            <List>
              {reports
                ? reports.map((el) => (
                    <ListItem key={el.AckId}>
                      <ListItemIcon>
                        <GetAppIcon onClick={() => handleExport(el.AckId)} />
                      </ListItemIcon>
                      <ListItemText primary={el.PlanName} />
                    </ListItem>
                  ))
                : null}
            </List>
          </Box>
        )}
      </DialogContent>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : null}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ reports }) {
  const [open, setOpen] = useState(false);
  const handleClose = (value) => {
    setOpen(false);
  };
  const handleOpen = (value) => {
    setOpen(true);
  };
  console.log(reports);
  return (
    <div>
      <GetAppIcon onClick={handleOpen} />

      <SimpleDialog
        selectedValue="none"
        open={open}
        onClose={handleClose}
        reports={reports}
      />
    </div>
  );
}
