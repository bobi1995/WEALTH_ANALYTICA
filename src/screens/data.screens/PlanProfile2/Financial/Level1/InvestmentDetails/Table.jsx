import React from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
import commonFunctions from "../../../../commonFunctions/common";
import { primaryBlue } from "../../../../../../global/Colors";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
    marginTop: "3%",
  },
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
}));
export default (props) => {
  const classes = useStyles();
  return props.data.length > 0 ? (
    props.data.map((el) => {
      return (
        <div key={el.Name} className={classes.mainDiv}>
          <Typography
            component="h5"
            variant="h5"
            className={classes.headerStyle}
            gutterBottom
          >
            {el.Name}
          </Typography>
          <small className="form-text text-muted" style={{ fontSize: "1em" }}>
            Total Amount: ${numeral(el.TotalAmount).format("0,0")}
          </small>
          {el.Funds.length > 0 ? (
            <MaterialTable
              style={{ margin: "3%" }}
              title={el.Name}
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
                  field: "SponsorName",
                  title: "Sponsor Name",
                  render: (rowData) =>
                    commonFunctions.formatString(rowData.SponsorName),
                },

                {
                  field: "PlanName",
                  title: "Plan Name",
                  render: (rowData) =>
                    commonFunctions.formatString(rowData.PlanName),
                },

                {
                  field: "FundName",
                  title: "Fund Name",
                  render: (rowData) =>
                    commonFunctions.formatString(rowData.FundName),
                },
                {
                  field: "Amount",
                  title: "Amount",
                  render: (rowData) =>
                    rowData.Amount
                      ? `$${numeral(rowData.Amount).format("0,0")}`
                      : "N/A",
                  cellStyle: {
                    textAlign: "center",
                  },
                },
              ]}
              data={el.Funds}
              options={{
                paging: false,
                headerStyle: {
                  backgroundColor: primaryBlue,
                  color: "#FFF",
                  fontSize: "17px",
                  textAlign: "center",
                  fontWeight: "bold",
                },
              }}
            />
          ) : (
            ""
          )}
        </div>
      );
    })
  ) : (
    <div>
      <h1
        className="onepager-bottomtables-h1"
        style={{ width: "70%", margin: "auto" }}
      >
        No Investment Details information for this plan
      </h1>
    </div>
  );
};
