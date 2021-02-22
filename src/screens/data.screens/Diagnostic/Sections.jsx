import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { observations } from "../../../global/diagnosticObservations";
import numeral from "numeral";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(() => ({
  tableBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    marginTop: "2%",
  },
  subheading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    fontStyle: "italic",
    fontSize: 40,
    marginBottom: "2%",
  },
  wrapper: {
    border: "2px solid #388FCE",
    position: "relative",
    padding: "15px",
    borderLeft: "40px solid #388FCE",
    width: "70%",
    marginBottom: "1%",
    margin: "0 auto",
  },
  rotatedTypo: {
    transform: "rotate(270deg)",
    transformOrigin: "0 0 ",
    position: "absolute",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "3px",
    bottom: 0,
    left: 0,
    marginLeft: "-30px",
    color: "white",
    fontWeight: "bold",
    top: "96%",
  },
  fieldLabel: { width: "15%", fontSize: 12, paddingTop: "1%" },
  valueBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "1%",
  },
  paperStyle: {
    width: "94%",
  },
  alertStyle: { width: "100%", fontSize: 15 },
}));

const Tables = ({ info, mainHeading }) => {
  const classes = useStyles();
  return (
    <Box className={classes.tableBox}>
      <Paper className={classes.paperStyle} elevation={21}>
        <Box>
          <Typography className={classes.subheading}>{mainHeading}</Typography>
          {observations.map((el, ind) => (
            <Box key={ind} className={classes.wrapper}>
              <Typography className={classes.rotatedTypo}>{el.name}</Typography>
              {el.data.map((item) => (
                <Box key={item.field} className={classes.valueBox}>
                  <Typography className={classes.fieldLabel}>
                    {item.field}
                  </Typography>
                  {info.map((el) =>
                    el.Name === item.code ? (
                      <Alert
                        key={el.Name}
                        severity="info"
                        elevation={6}
                        variant="filled"
                        className={classes.alertStyle}
                        style={
                          el.Type === 1
                            ? el.CompanyValue - el.IndusrtyValue > 0
                              ? { backgroundColor: "#6ACD75" }
                              : { backgroundColor: "#FC3468" }
                            : el.Type === 2
                            ? { backgroundColor: "#DBA800" }
                            : { backgroundColor: "#A9A9A9" }
                        }
                      >
                        {el.Type === 1 ? (
                          `Company has ${numeral(el.CompanyValue).format(
                            "0,00.00"
                          )} with average for the industy ${numeral(
                            el.IndusrtyValue
                          ).format("0,00.00")}`
                        ) : el.Type === 2 ? (
                          isNaN(el.Text) ? (
                            el.Text
                          ) : (
                            `$${numeral(el.Text).format("0,00")}`
                          )
                        ) : el.Ind === 1 ? (
                          <CheckIcon key={el.Ind} style={{ color: "green" }} />
                        ) : (
                          <ClearIcon key={el.Ind} style={{ color: "red" }} />
                        )}
                      </Alert>
                    ) : (
                      ""
                    )
                  )}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Tables;
