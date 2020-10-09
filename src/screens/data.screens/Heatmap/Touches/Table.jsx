import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    width: "40%",
    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: "1px solid #378FC3",
  },
  tableHeader: { color: "#378FC3", fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  previewBtn: {
    textTransform: "none",
  },
  statsSection: {
    width: "40%",
    maxHeight: 440,
  },
  title: {
    flex: "1 1 100%",
  },
});


const TouchesTable = ({ data }) => {
  const classes = useStyles();
  let rowCount = Object.keys(data[0].touches).length;
  let counter = 0;

  //COUNT FAILURES (0 - OK, 1 - FAIL)
  data.map((el) => Object.values(el.touches).filter((item) =>
          item === 1 ? counter++ : ""
        )
  );

  const chartData = {
    labels: ["Checks", "Failures"],
    datasets: [
      {
        data: [rowCount - counter, counter],
        backgroundColor: ["green", "red"],
        hoverBackgroundColor: ["#3CB371", "#ff7f7f"],
      },
    ],
  };
  

  return (
    <Box className={classes.container}>
      <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Field</TableCell>
              {data.map((el, ind) => <TableCell key={ind} className={classes.tableHeader}>
                    {el.year}
                  </TableCell>
                
              )}
            </TableRow>
          </TableHead>
          <TableBody>
          {[...Array(rowCount)].map((_, i) => {
              let current_touches_key = Object.keys(data[0].touches)[i];

              return (
                <TableRow key={i}>
                  <TableCell>
                    {current_touches_key
                      .match(/[A-Z]+(?![a-z])|[A-Z][a-z]*|\d+[a-z]+/g)
                      .join(" ")}
                  </TableCell>
                  {data.map((el, j) => {
                    let cell_content = el.touches[current_touches_key];
                    console.log(cell_content)

                    return (
                      <TableCell key={j}>
                        {cell_content === 0 ? (
                          <CheckIcon style={{ color: "green" }} />
                        ) : (
                          <ClearIcon style={{ color: "red" }} />
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            </TableBody>
        </Table>
      </TableContainer>
 {/* --------------------STATISTIC SECTION------------------------------- */}
 <Box className={classes.statsSection}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h6" component="div">
            Summary
          </Typography>
          <TableContainer>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader}>
                    All Fields
                  </TableCell>
                  <TableCell className={classes.tableHeader}>Checks</TableCell>
                  <TableCell className={classes.tableHeader}>
                    Failures
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{rowCount}</TableCell>
                  <TableCell>{rowCount - counter}</TableCell>
                  <TableCell>{counter}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Doughnut
          width={40}
          height={20}
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </Box>
    </Box>
  );
};

export default TouchesTable;
