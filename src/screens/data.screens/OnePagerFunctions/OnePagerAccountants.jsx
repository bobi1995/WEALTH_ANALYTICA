import React from "react";
import { backgroundGrey, primaryBlue } from "../../../global/Colors";
import { makeStyles, Typography } from "@material-ui/core";
import commonFunctions from "../commonFunctions/common";

const useStyles = makeStyles({
  heading: {
    color: primaryBlue,
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 35,
    marginTop: "3%",
  },
});

const OnePagerAccountants = (props) => {
  const classes = useStyles();
  return (
    <div
      className="onePager-bottom-div"
      style={{ width: "90%", margin: "0 auto" }}
    >
      {props.accountants.length > 0 ? (
        <div
          className="onepager-bottomtables-table"
          style={{ backgroundColor: backgroundGrey }}
        >
          <div
            className="plan-profile-chartsDiv"
            style={{ width: "100%", padding: "3%" }}
          >
            <Typography className={classes.heading}>
              Accountant Firms
            </Typography>
            <table className="table table-striped table-bordered table-sm table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {props.accountants.map((acc, index) => {
                  return (
                    <tr key={index}>
                      <td>{commonFunctions.formatString(acc)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}

      {props.trusts.length > 0 ? (
        <div
          className="onepager-bottomtables-table"
          style={{ backgroundColor: backgroundGrey }}
        >
          <div
            className="plan-profile-chartsDiv"
            style={{ width: "100%", padding: "3%" }}
          >
            <h1 className="onepager-bottomtables-h1">Fiduciary Trust Names</h1>
            <table className="table table-striped table-bordered table-sm table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Name Of The Trusts</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {props.trusts.map((trust, index) => {
                  return (
                    <tr key={index}>
                      <td>{commonFunctions.formatString(trust)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OnePagerAccountants;
