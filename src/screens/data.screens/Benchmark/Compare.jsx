import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import apiAddress from "../../../global/endpointAddress";
import { lastYear } from "../../../global/Years";
import axios from "axios";
import AlertBox from "../../../components/alertBox";
import Loader from "../../../components/plainCicularLoader";
import MainMenu from "./Compare/MainMenu";
import ExportCompare from "./Compare/Components/ExportCompare";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    zIndex: "1",
    marginTop: "60px",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btnStyle: {
    textAlign: "center",
    margin: "0 auto",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ data }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [results, setResults] = useState();
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      let url = `${apiAddress}/api/SmallCompanies/GetBenchmarkCompare?year=${lastYear}`;

      data.map((el) => {
        url = url.concat(`&companyids=${el.CompanyID}`);
        return url;
      });

      axios({
        method: "get",
        url,
        timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          setResults(res.data);
        })
        .catch((err) => {
          setAlertMessage(
            "For some reason we could not find the desired results. Probably companies are too big. Try to choose another companies."
          );
        });
    }
  }, [open, data]);

  return (
    <Box style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.btnStyle}
      >
        Compare
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Comparing {data.map((el) => `${el.Name} `)}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        {results ? <MainMenu data={results} /> : <Loader />}
        <ExportCompare data={data} />
        {alertMessage ? (
          <AlertBox
            text={alertMessage}
            display={setAlertMessage}
            success={false}
          />
        ) : (
          ""
        )}
      </Dialog>
    </Box>
  );
}
