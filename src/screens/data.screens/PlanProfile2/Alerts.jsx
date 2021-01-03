import React from "react";
import numeral from "numeral";
import common from "../commonFunctions/common";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { primaryBlue } from "../../../global/Colors";
import Transactions from "./Alerts/Transactions";
import Annual from "./Alerts/Annual";

const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
    marginBottom: "3%",
  },
  chart: {
    width: "45%",
    margin: "0, auto",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
  },
  charteSection: {
    width: "100%",
    margin: "0, auto",
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    marginTop: "3%",
  },
  cellCenter: { textAlign: "center" },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
});

export default (props) => {
  const database = props.data;
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Alerts Information
        </Typography>
      </Box>

      <Box className={classes.table}>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.map((element, index) => {
                if (element.IsCity === true) {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      City in {element.Year}
                    </th>
                  );
                } else if (element.IsBusinessCode === true) {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      Industry for {element.Year}
                    </th>
                  );
                } else {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      {element.Year}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Contribution Failure Ind
                <span className="onepager-tooltip">
                  The plan failed to transmit participant contributions within
                  the time period described
                </span>
              </th>
              {database.map((element, index) => {
                if (element.ContributionFailureInd) {
                  return (
                    <td style={{ textAlign: "center" }} key={index}>
                      <i
                        className="fa fa-exclamation-triangle"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                    </td>
                  );
                } else {
                  return (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="plan-profile-red"
                    >
                      <i
                        className="fa fa-check"
                        aria-hidden="true"
                        style={{ color: "green" }}
                      ></i>
                    </td>
                  );
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Contribution Failure Amt
                <span className="onepager-tooltip">
                  The amount plan failed to transmit participant contributions
                  within the time period described
                </span>
              </th>
              {database.map((element, index) => {
                if (element.ContributionFailureAtm >= 0) {
                  if (element.ContributionFailureInd) {
                    return (
                      <td style={{ textAlign: "center" }} key={index}>
                        <i
                          className="fa fa-flag"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                        ${numeral(element.ContributionFailureAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td style={{ textAlign: "center" }} key={index}>
                        ${numeral(element.ContributionFailureAtm).format("0,0")}
                      </td>
                    );
                  }
                } else {
                  if (element.ContributionFailureInd) {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        key={index}
                        className="plan-profile-red"
                      >
                        <i
                          className="fa fa-flag"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                        ${numeral(element.ContributionFailureAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        key={index}
                        className="plan-profile-red"
                      >
                        ${numeral(element.ContributionFailureAtm).format("0,0")}
                      </td>
                    );
                  }
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Leases In Default Ind
                <span className="onepager-tooltip">
                  A lease is an agreement conveying the right to use property,
                  plant, or equipment for astated period. A lease is in default
                  when the required payment(s) has not been made. An
                  uncollectible lease is one where the required payments have
                  not been made and forwhich there is little probability that
                  payment will be made.
                </span>
              </th>
              {database.map((element, index) => {
                if (element.LeasesInDefaultInd) {
                  return (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="plan-profile-red"
                    >
                      <i
                        className="fa fa-exclamation-triangle"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                    </td>
                  );
                } else {
                  return (
                    <td style={{ textAlign: "center" }} key={index}>
                      <i
                        className="fa fa-check"
                        aria-hidden="true"
                        style={{ color: "green" }}
                      ></i>
                    </td>
                  );
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Leases In Default Amt
                <span className="onepager-tooltip">
                  Leases In Default Amount
                </span>
              </th>
              {database.map((element, index) => {
                if (element.LeasesInDefaultAtm >= 0) {
                  if (element.LeasesInDefaultInd) {
                    return (
                      <td style={{ textAlign: "center" }} key={index}>
                        <i
                          className="fa fa-flag"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                        ${numeral(element.LeasesInDefaultAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td style={{ textAlign: "center" }} key={index}>
                        ${numeral(element.LeasesInDefaultAtm).format("0,0")}
                      </td>
                    );
                  }
                } else {
                  if (element.LeasesInDefaultInd) {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        key={index}
                        className="plan-profile-red"
                      >
                        <i
                          className="fa fa-flag"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                        ${numeral(element.LeasesInDefaultAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        key={index}
                        className="plan-profile-red"
                      >
                        ${numeral(element.LeasesInDefaultAtm).format("0,0")}
                      </td>
                    );
                  }
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Loans In Default Ind
                <span className="onepager-tooltip">
                  A loan by the plan is in default when the borrower isunable to
                  pay the obligation upon maturity. Obligations that require
                  periodic repayment can default at any time. Generally, loans
                  and fixed income obligations are considered uncollectible when
                  payment has not been made and there is little probability that
                  payment will be made. A fixed income obligation has a fixed
                  maturity date at a specified interest rate.
                </span>
              </th>
              {database.map((element, index) => {
                if (element.LoansInDefaultInd) {
                  return (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="plan-profile-red"
                    >
                      {element.LoansInDefaultInd ? (
                        <i
                          className="fa fa-exclamation-triangle"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                      ) : (
                        <i
                          className="fa fa-check"
                          aria-hidden="true"
                          style={{ color: "green" }}
                        ></i>
                      )}
                    </td>
                  );
                } else {
                  return (
                    <td style={{ textAlign: "center" }} key={index}>
                      {element.LoansInDefaultInd ? (
                        <i
                          className="fa fa-exclamation-triangle"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                      ) : (
                        <i
                          className="fa fa-check"
                          aria-hidden="true"
                          style={{ color: "green" }}
                        ></i>
                      )}
                    </td>
                  );
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Loans In Default Amt
                <span className="onepager-tooltip">
                  Loans In Default Amount
                </span>
              </th>
              {database.map((element, index) => {
                if (element.LoansInDefaultAtm >= 0) {
                  if (element.LoansInDefaultInd) {
                    return (
                      <td style={{ textAlign: "center" }} key={index}>
                        <i
                          className="fa fa-flag"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                        ${numeral(element.LoansInDefaultAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td style={{ textAlign: "center" }} key={index}>
                        ${numeral(element.LoansInDefaultAtm).format("0,0")}
                      </td>
                    );
                  }
                } else {
                  if (element.LoansInDefaultInd) {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        key={index}
                        className="plan-profile-red"
                      >
                        <i
                          className="fa fa-flag"
                          aria-hidden="true"
                          style={{ color: "red" }}
                        ></i>
                        ${numeral(element.LoansInDefaultAtm).format("0,0")}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        key={index}
                        className="plan-profile-red"
                      >
                        ${numeral(element.LoansInDefaultAtm).format("0,0")}
                      </td>
                    );
                  }
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Distribution Correction
                <span className="onepager-tooltip">
                  Corrective distributions of excess deferrals, excess
                  contributions, or excess aggregate contributions, or the
                  income
                </span>
              </th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${numeral(element.DistributionCorrection).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                DFVC Ind
                <span className="onepager-tooltip">
                  Delinquent Filer Voluntary Compliance Program
                </span>
              </th>
              {database.map((element, index) => {
                if (element.DFVCInd) {
                  return (
                    <td
                      style={{ textAlign: "center" }}
                      key={index}
                      className="plan-profile-red"
                    >
                      <i
                        className="fa fa-exclamation-triangle"
                        aria-hidden="true"
                        style={{ color: "red" }}
                      ></i>
                    </td>
                  );
                } else {
                  return (
                    <td style={{ textAlign: "center" }} key={index}>
                      <i
                        className="fa fa-check"
                        aria-hidden="true"
                        style={{ color: "green" }}
                      ></i>
                    </td>
                  );
                }
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Erisa Test Value
                <span className="onepager-tooltip">
                  The Plan estimated fidelity bond coverage amount
                </span>
              </th>
              {database.map((element, index) => {
                return element.ERISATestValue >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.ERISATestValue)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.ERISATestValue)}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Erisa Test Over/Under
                <span className="onepager-tooltip">
                  The Fidelity Bond Coverage Gap +/-
                </span>
              </th>
              {database.map((element, index) => {
                return element.ERISATestOverUnder >= 0 ? (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.ERISATestOverUnder)}
                  </td>
                ) : (
                  <td
                    style={{ textAlign: "center" }}
                    key={index}
                    className="negative-numbers"
                  >
                    ${common.reducer(element.ERISATestOverUnder)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Transactions companyID={props.companyID} />
        <Annual companyID={props.companyID} />
      </Box>
    </Box>
  );
};
