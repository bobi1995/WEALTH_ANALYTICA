import React from "react";
import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import { primaryBlue } from "../../../../global/Colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import numeral from "numeral";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import DialogBox from "./Components/DialogBox";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  table: {
    backgroundColor: "#E3F2FD",
    border: `1px solid ${primaryBlue}`,
    marginBottom: "3%",
  },
  tableHeader: {
    color: primaryBlue,
    //fontWeight: "bold",
    //fontSize: 16,
    textAlign: "center",
  },
  cellStyle: { textAlign: "center" },

  previewBtn: {
    textTransform: "none",
  },
});
const Alerts = ({ data, companies }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small" aria-label="a dense table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Field</TableCell>
              {data.map((el, id) => (
                <TableCell
                  key={el.name}
                  className={classes.tableHeader}
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  {el.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                >
                  Contribution Failure Ind.
                </Button>
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  {row.info.ContributionFailureInd ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Contribution Failure Atm."
                  graphData={data.map((row) => row.info.ContributionFailureAtm)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.ContributionFailureAtm).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                >
                  Leases In Default Ind.
                </Button>
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  {row.info.LeasesInDefaultInd ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Leases In Default Atm."
                  graphData={data.map((row) => row.info.LeasesInDefaultAtm)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.LeasesInDefaultAtm).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                >
                  Loans In Default Ind.
                </Button>
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  {row.info.LoansInDefaultInd ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Loans In Default Atm."
                  graphData={data.map((row) => row.info.LoansInDefaultAtm)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.LoansInDefaultAtm).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="Distribution Correction"
                  graphData={data.map((row) => row.info.DistributionCorrection)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.DistributionCorrection).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <Button
                  startIcon={<EqualizerIcon />}
                  color="default"
                  className={classes.previewBtn}
                >
                  DFVC Ind.
                </Button>
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  {row.info.DFVCInd ? (
                    <CheckCircleIcon size={100} style={{ color: "green" }} />
                  ) : (
                    <CancelIcon size={100} style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="ERISA Test Value"
                  graphData={data.map((row) => row.info.ERISATestValue)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.ERISATestValue).format("0,0")}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                <DialogBox
                  title="ERISA Test Over Under"
                  graphData={data.map((row) => row.info.ERISATestOverUnder)}
                  companies={companies}
                />
              </TableCell>
              {data.map((row, id) => (
                <TableCell
                  className={classes.cellStyle}
                  key={row.name}
                  component="th"
                  scope="row"
                  style={{
                    backgroundColor:
                      id === 0
                        ? "rgba(255, 99, 132, 0.2)"
                        : id === 1
                        ? "rgba(54, 162, 235, 0.2)"
                        : id === 2
                        ? "rgba(255, 206, 86, 0.2)"
                        : "rgba(75, 192, 192, 0.2)",
                  }}
                >
                  ${numeral(row.info.ERISATestOverUnder).format("0,0")}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Alerts;
