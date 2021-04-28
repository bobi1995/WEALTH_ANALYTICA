import React, { useState } from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { primaryBlue, backgroundGrey } from "../../../../global/Colors";
import { marketingPdfs } from "../../../../global/pdfList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GetAppIcon from "@material-ui/icons/GetApp";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import apiAddress from "../../../../global/endpointAddress";
import fileDownload from "js-file-download";
import AlertBox from "../../../../components/alertBox";
//import Loader from "../../../../plainCicularLoader";
import axios from "axios";
import AdvisorBtn from "./Marketing/AdvisorBtn";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    width: "100%",
    textAlign: "center",
  },

  header: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    textAlign: "center",
  },
  paper: {
    margin: "3% auto",
    width: "95%",
  },
}));
const Marketing = (props) => {
  const classes = useStyles();
  const [secondary, setSecondary] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [openAdvisor, setOpenAdvisor] = useState(false);
  const handleDownload = (pdfId) => {
    if (pdfId === 33) {
      setOpenAdvisor(true);
    } else {
      const url = `${apiAddress}/api/SmallCompanies/GetMarketingFile?pdfNumber=${pdfId}`;
      axios
        .get(url, {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
          responseType: "blob",
        })
        .then((res) => {
          console.log(res.data);
          fileDownload(res.data, "report.pdf");
        })
        .catch((err) => {
          setAlertMessage("For some reason we could not export the document");
        });
    }
  };

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: backgroundGrey }}>
        <Main opened="marketing" />
        <Grid className={classes.gridStyle}>
          <Typography
            className={classes.header}
            variant="h4"
            component="h4"
            gutterBottom
          >
            Download PDFs
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="See hints"
          />
          <Paper className={classes.paper}>
            <List
              style={{
                columnCount: 3,
              }}
            >
              {marketingPdfs.map((el, index) => (
                <ListItem key={index}>
                  <ListItemIcon onClick={() => handleDownload(el.value)}>
                    <GetAppIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={el.name}
                    secondary={secondary ? el.hint : null}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </div>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : null}
      <AdvisorBtn open={openAdvisor} setOpen={setOpenAdvisor} />
    </div>
  );
};

export default Marketing;
