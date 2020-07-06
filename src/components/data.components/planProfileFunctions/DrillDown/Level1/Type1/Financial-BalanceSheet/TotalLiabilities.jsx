import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import common from "../../../../../commonFunctions/common";
const useStyle = makeStyles(() => ({
  negatives: {
    color: "red",
  },
  containerStyle: {
    margin: "3%",
  },
}));

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "#378FC3",
    color: "white",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function Row(props) {
  const classes = useStyle();
  const row = props.row;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        {/* <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}
        <StyledTableCell
          component="th"
          scope="row"
          style={{ whiteSpace: "nowrap" }}
        >
          {props.name}
        </StyledTableCell>
        {row >= 0 ? (
          <StyledTableCell align="right">
            ${common.reducer(row)}
          </StyledTableCell>
        ) : (
          <StyledTableCell className={classes.negatives} align="right">
            ${common.reducer(row)}
          </StyledTableCell>
        )}
      </TableRow>
      <TableRow>
        {/* <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      test
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell> */}
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  const classes = useStyle();

  return (
    <TableContainer component={Paper} className={classes.containerStyle}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {/* <TableCell /> */}
            <StyledTableCell />

            <StyledTableCell align="right">Value</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Row
            key="Total Liabilities"
            row={props.data.TotalLiabilities}
            name="Total Liabilities"
          />
          <Row
            key="Benefit Payable"
            row={props.data.BenefitPayable}
            name="Benefit Payable"
          />
          <Row
            key="Operating Payable"
            row={props.data.OperatingPayable}
            name="Operating Payable"
          />
          <Row
            key="Acquisition Debt"
            row={props.data.AcquisitionDebt}
            name="Acquisition Debt"
          />
          <Row
            key="Liabilities Other"
            row={props.data.LiabilitiesOther}
            name="Liabilities Other"
          />
          <Row key="Net Assets" row={props.data.NetAssets} name="Net Assets" />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
