import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  tableBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    marginTop: "5%",
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
  alertStyle: { width: "100%", fontSize: 12 },
}));

const Tables = ({ info, mainHeading }) => {
  const classes = useStyles();
  return info.length > 0 ? (
    <Box className={classes.tableBox}>
      <Paper className={classes.paperStyle} elevation={21}>
        <Box>
          <Typography className={classes.subheading}>{mainHeading}</Typography>
          {info.map((el, ind) => (
            <Box key={ind} className={classes.wrapper}>
              <Typography className={classes.rotatedTypo}>{el.name}</Typography>
              {el.data.map((item) => (
                <Box key={item.field} className={classes.valueBox}>
                  <Typography className={classes.fieldLabel}>
                    {item.field}
                  </Typography>
                  <Alert
                    severity="info"
                    elevation={6}
                    variant="filled"
                    className={classes.alertStyle}
                  >
                    {item.value}
                  </Alert>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  ) : (
    ""
  );
};

export default Tables;
