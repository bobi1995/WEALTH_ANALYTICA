import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { primaryBlue } from "../../../../global/Colors";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    width: "100%",

    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: `1px solid ${primaryBlue}`,
  },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  previewBtn: {
    textTransform: "none",
  },

  title: {
    flex: "1 1 100%",
  },
});

const ComplianceTable = ({ data }) => {
  const classes = useStyles();
  let counter = 0;
  //COUNT FAILURES (0 - OK, 1 - FAIL)
  data.map((el) =>
    el.business
      ? ""
      : Object.values(el.accountant).filter((item) =>
          item === 1 ? counter++ : ""
        )
  );

  return (
    <Box className={classes.container}>
      <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Field</TableCell>
              {data.map((el, ind) =>
                el.business ? (
                  <TableCell key={ind} className={classes.tableHeader}>
                    Industry for {el.year}
                  </TableCell>
                ) : (
                  <TableCell key={ind} className={classes.tableHeader}>
                    {el.year}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {/**EligibleAssets*/}
              <TableCell>Eligible Assets</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.EligibleAssets} Plans are with Ineligible Asset`
                  ) : row.accountant.EligibleAssets === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantTotalParticipants*/}
            <TableRow>
              <TableCell>Accountant Total Participants</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantTotalParticipants}% have less than 100 participants`
                  ) : row.accountant.AccountantTotalParticipants === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantAuditScope*/}
            <TableRow>
              <TableCell>Accountant Audit Scope</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantAuditScope}% the scope remained intact`
                  ) : row.accountant.AccountantAuditScope === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantOpinion */}
            <TableRow>
              <TableCell>Accountant Opinion</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantOpinion}%  has a positive opinion`
                  ) : row.accountant.AccountantOpinion === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>

            {/**AccountantWaiver */}
            <TableRow>
              <TableCell>Accountant Waiver</TableCell>
              {data.map((row, ind) => (
                <TableCell key={ind}>
                  {row.business ? (
                    `${row.accountant.AccountantWaiver}% applied for the waiver`
                  ) : row.accountant.AccountantWaiver === 0 ? (
                    <CheckIcon style={{ color: "green" }} />
                  ) : (
                    <ClearIcon style={{ color: "red" }} />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* --------------------STATISTIC SECTION------------------------------- */}
      <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.tableHeader}
                style={{ textAlign: "center" }}
              >
                Accountant name
              </TableCell>
              <TableCell
                className={classes.tableHeader}
                style={{ textAlign: "center" }}
              >
                Website
              </TableCell>
              <TableCell
                className={classes.tableHeader}
                style={{ textAlign: "center" }}
              >
                Opinion
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, ind) =>
              row.year === 2019
                ? row.accountant.Accountants.map((el, ind) => (
                    <TableRow key={ind + el}>
                      <TableCell style={{ textAlign: "center" }}>
                        {el.Name}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {el.Website ? el.Website : "N/A"}
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {el.Opinion ? el.Opinion : "N/A"}
                      </TableCell>
                    </TableRow>
                  ))
                : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ComplianceTable;
