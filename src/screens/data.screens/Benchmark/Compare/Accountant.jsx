import React from "react";
import { Box, makeStyles, Paper } from "@material-ui/core";
import { primaryBlue } from "../../../../global/Colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
const Accountants = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
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
                Accountant Opinion
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
                  {row.info.AccountantOpinion}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                Accountant Audit Scope
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
                  {row.info.AccountantAuditScope}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                Accountant Waiver
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
                  {row.info.AccountantWaiver}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>
                Accountant Waiver
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
                  {row.info.AccountantWaiver}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell className={classes.cellStyle}>Accountants</TableCell>
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
                  {row.info.Accountants.map((el, ind) =>
                    ind === row.info.Accountants.length - 1
                      ? `${el.Name}`
                      : `${el.Name} | `
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Accountants;
