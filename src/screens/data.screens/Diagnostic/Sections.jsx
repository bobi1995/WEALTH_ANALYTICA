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
    fontSize: 27,
  },
  wrapper: {
    border: "2px solid #388FCE",
    position: "relative",
    padding: "15px",
    borderLeft: "40px solid #388FCE",
    minHeight: "300px",
    width: "70%",
    marginBottom: "3%",
    margin: "0 auto",
  },
  rotatedTypo: {
    transform: "rotate(270deg)",
    transformOrigin: "0 0 ",
    position: "absolute",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "3px",
    bottom: 0,
    left: 0,
    marginLeft: "-30px",
    color: "white",
    fontWeight: "bold",
    top: "80%",
  },
  fieldLabel: { width: "15%" },
  valueBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "3%",
  },
  paperStyle: {
    width: "94%",
  },
}));

const Tables = ({ info, mainHeading }) => {
  const classes = useStyles();
  return info.length > 0 ? (
    <Box className={classes.tableBox}>
      <Paper className={classes.paperStyle}>
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
                    style={{ width: "100%" }}
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
