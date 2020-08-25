import React, { useState } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight, Close } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
    width: "100%",
  },
  headerStyle: {
    color: "#378FC3",
    fontFamily: "Baskervville",
  },
  tablesStyleDiv: {
    display: "flex",
    justifyContent: "space-around",
  },
  sectionStyle: {
    backgroundColor: "#F3F4F8",
    margin: "3% 1%",
  },
}));
export default ({ data }) => {
  const classes = useStyles();
  return data.length > 0 ? (
    <div className={classes.mainDiv}>
      <table className="table table-bordered table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Direct Provider</th>
            <th>Service</th>
            <th>Direct Payments</th>
            <th>Indirect Provider</th>
            <th>Description</th>
            <th>Indirect Payments</th>
            <th>Total Net Payments</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {data.map((result, index) => (
            <>
              {result.DirectPayments.map((el, ind) => (
                <tr key={index + ind}>
                  <td>{el.Name}</td>
                  <td>{el.ProviderOtherServices}</td>
                  <td style={el.Payment < 0 ? { color: "red" } : {}}>
                    ${numeral(el.Payment).format("0,0")}
                  </td>
                </tr>
              ))}
              {result.IndirectPayments.map((el, ind) => (
                <tr key={index + ind} style={{ backgroundColor: "#D7E9F3" }}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{el.Name}</td>
                  <td>{el.Description}</td>
                  <td style={el.Payment < 0 ? { color: "red" } : {}}>
                    ${numeral(el.Payment).format("0,0")}
                  </td>
                </tr>
              ))}
              <tr
                key={index + result.TotalNetPayments}
                style={{ backgroundColor: "#CCEACC" }}
              >
                <td></td>
                <td></td>
                <td
                  style={
                    result.TotalNetPayments - result.TotalIndirectPayments < 0
                      ? { color: "red" }
                      : {}
                  }
                >
                  $
                  {numeral(
                    result.TotalNetPayments - result.TotalIndirectPayments
                  ).format("0,0")}
                </td>
                <td></td>
                <td></td>
                <td
                  style={
                    result.TotalIndirectPayments < 0 ? { color: "red" } : {}
                  }
                >
                  ${numeral(result.TotalIndirectPayments).format("0,0")}
                </td>
                <td style={result.TotalNetPayments < 0 ? { color: "red" } : {}}>
                  ${numeral(result.TotalNetPayments).format("0,0")}
                </td>
              </tr>
              <tr style={{ backgroundColor: "black" }} key={index}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    ""
  );
};
