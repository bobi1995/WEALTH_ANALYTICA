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
export default (props) => {
  const classes = useStyles();
  return props.data.length > 0 ? (
    <div className={classes.mainDiv}>
      {props.data.map((el, ind) => (
        <div key={ind} className={classes.sectionStyle}>
          <div className={classes.tablesStyleDiv}>
            <div>
              <Typography
                variant="h4"
                component="h4"
                className={classes.headerStyle}
                gutterBottom
              >
                Direct Providers
              </Typography>

              <MaterialTable
                style={{ width: "100%" }}
                title="Direct Providers"
                icons={{
                  Filter: React.forwardRef((props, ref) => (
                    <SearchIcon ref={ref} />
                  )),
                  Search: React.forwardRef((props, ref) => (
                    <SearchIcon ref={ref} />
                  )),
                  ResetSearch: React.forwardRef((props, ref) => (
                    <RotateLeftIcon ref={ref} />
                  )),
                  SortArrow: ArrowUpward,
                  DetailPanel: ChevronRight,
                }}
                columns={[
                  {
                    field: "Name",
                    title: "Name",
                    cellStyle: {
                      whiteSpace: "nowrap",
                    },
                  },
                  {
                    field: "ProviderOtherServices",
                    title: "Services",
                  },
                  {
                    field: "Payment",
                    title: "Payment",
                    render: (rowData) =>
                      rowData.Payment ? (
                        <p style={rowData.Payment < 0 ? { color: "red" } : {}}>
                          ${numeral(rowData.Payment).format("0,0")}
                        </p>
                      ) : (
                        "N/A"
                      ),
                    cellStyle: { textAlign: "center" },
                  },
                ]}
                data={el.DirectPayments}
                options={{
                  paging: false,
                  headerStyle: {
                    backgroundColor: "#378FC3",
                    color: "#FFF",
                    fontSize: "17px",
                    textAlign: "center",
                    fontWeight: "bold",
                  },
                  cellStyle: {
                    width: "100%",
                  },
                }}
              />
              <Typography
                variant="h6"
                component="h6"
                className={classes.headerStyle}
                gutterBottom
                style={
                  el.TotalNetPayments - el.TotalIndirectPayments < 0
                    ? { color: "red" }
                    : {}
                }
              >
                Total Direct Payments:
                {el.TotalNetPayments - el.TotalIndirectPayments == 0
                  ? " N/A"
                  : `$${numeral(
                      el.TotalNetPayments - el.TotalIndirectPayments
                    ).format("0,0")}`}
              </Typography>
            </div>
            <div>
              <Typography
                variant="h4"
                component="h4"
                className={classes.headerStyle}
                gutterBottom
              >
                Indirect Providers
              </Typography>
              <MaterialTable
                style={{ width: "100%" }}
                title="Indirect Providers"
                icons={{
                  Filter: React.forwardRef((props, ref) => (
                    <SearchIcon ref={ref} />
                  )),
                  Search: React.forwardRef((props, ref) => (
                    <SearchIcon ref={ref} />
                  )),
                  ResetSearch: React.forwardRef((props, ref) => (
                    <RotateLeftIcon ref={ref} />
                  )),
                  SortArrow: ArrowUpward,
                  DetailPanel: ChevronRight,
                }}
                columns={[
                  {
                    field: "Name",
                    title: "Name",
                    cellStyle: {
                      whiteSpace: "nowrap",
                    },
                  },
                  {
                    field: "Description",
                    title: "Description",
                  },

                  {
                    field: "Payment",
                    title: "Payment",
                    render: (rowData) =>
                      rowData.Payment ? (
                        <p style={rowData.Payment < 0 ? { color: "red" } : {}}>
                          ${numeral(rowData.Payment).format("0,0")}
                        </p>
                      ) : (
                        "N/A"
                      ),
                    cellStyle: {
                      textAlign: "center",
                    },
                  },
                ]}
                data={el.IndirectPayments}
                options={{
                  paging: false,
                  headerStyle: {
                    backgroundColor: "#378FC3",
                    color: "#FFF",
                    fontSize: "17px",
                    textAlign: "center",
                    fontWeight: "bold",
                  },
                  cellStyle: {
                    width: "100%",
                  },
                }}
              />
              <Typography
                variant="h6"
                component="h6"
                className={classes.headerStyle}
                gutterBottom
                style={el.TotalIndirectPayments < 0 ? { color: "red" } : {}}
              >
                Total Indirect Payments:
                {el.TotalIndirectPayments
                  ? `$${numeral(el.TotalIndirectPayments).format("0,0")}`
                  : " N/A"}
              </Typography>
            </div>
          </div>
          <Typography
            variant="h6"
            component="h6"
            className={classes.headerStyle}
            gutterBottom
          >
            Total Net Payment: ${numeral(el.TotalNetPayments).format("0,0")}
          </Typography>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
};
