import React from "react";
import DataExtract from "../OnePagerDataExtract";
import numeral from "numeral";
import common from "../../commonFunctions/common";
import { Bar } from "react-chartjs-2";
import dataReducer from "../../../../components/dataReducer";
import { backgroundGrey, primaryBlue } from "../../../../global/Colors";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    color: primaryBlue,
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 35,
    marginTop: "3%",
  },
});

export default (props) => {
  const classes = useStyles();
  let brokerFees = {};
  let bondAmt = {};
  if (props.data) {
    const years = DataExtract.yearsExtract(props.data);
    // ---------------------Broker Fees--------------------------------------------
    brokerFees = {
      labels: years,
      datasets: [
        {
          label: "Broker Fees",
          backgroundColor: "rgba(0, 177, 106, 1)",

          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 239, 178, 1)",
          hoverBorderColor: "rgba(0, 177, 106, 1)",
          data: dataReducer.arrayReducer(
            DataExtract.brokerFeesExtract(props.data)
          ),
          stack: 1,
        },
      ],
    };
    // ---------------------Fidelity Bond AMT--------------------------------------------
    bondAmt = {
      labels: years,
      datasets: [
        {
          label: "Fidelity Bond Amt",
          backgroundColor: "rgba(255,99,132, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,155,177, 1)",
          hoverBorderColor: "rgba(255,99,132, 1)",
          data: dataReducer.arrayReducer(
            DataExtract.fidelityBondAmtExtract(props.data)
          ),
          stack: 1,
        },
      ],
    };
  }
  return (
    <div className="onePager-bottom-div">
      {/**********************HEALTHCARE INSURANCE***************************************** */}
      <div
        className="onepager-bottomtables-table"
        style={{ backgroundColor: backgroundGrey, margin: "3%" }}
      >
        <div
          className="plan-profile-chartsDiv"
          style={{ width: "100%", padding: "3%" }}
        >
          <Typography className={classes.heading}>
            Healthcare Insurance
          </Typography>
          <Bar
            data={brokerFees}
            options={dataReducer.optionReturn(
              DataExtract.brokerFeesExtract(props.data)
            )}
            width={400}
            height={200}
          />
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th></th>

                {DataExtract.yearsExtract(props.data).map((element) => (
                  <th key={element}>{element}</th>
                ))}
              </tr>
            </thead>
            <tbody className="table-hover">
              <tr>
                <th className="thead-dark">Carriers Count</th>
                {DataExtract.carriersCountExtract(props.data).map(
                  (carriersCount, index) => (
                    <td key={index}>{numeral(carriersCount).format("0,0")}</td>
                  )
                )}
              </tr>
              <tr>
                <th className="thead-dark">Brokers Count</th>
                {DataExtract.brokersCountExtract(props.data).map(
                  (brokersCount, index) => (
                    <td key={index}>{numeral(brokersCount).format("0,0")}</td>
                  )
                )}
              </tr>
              <tr>
                <th className="thead-dark">Broker Commissions</th>
                {DataExtract.brokerCommissionsExtract(props.data).map(
                  (brokerCom, index) => (
                    <td key={index}>${common.reducer(brokerCom)}</td>
                  )
                )}
              </tr>
              <tr>
                <th className="thead-dark">Broker Fees</th>
                {DataExtract.brokerFeesExtract(props.data).map(
                  (fees, index) => (
                    <td key={index}>${common.reducer(fees)}</td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/**********************FIDELITY BOND***************************************** */}
      <div
        className="onepager-bottomtables-table"
        style={{ backgroundColor: backgroundGrey, margin: "3%" }}
      >
        <div
          className="plan-profile-chartsDiv"
          style={{ width: "100%", padding: "3%" }}
        >
          {" "}
          <Typography className={classes.heading}>Fidelity Bond</Typography>
          <Bar
            data={bondAmt}
            options={dataReducer.optionReturn(
              DataExtract.fidelityBondAmtExtract(props.data)
            )}
            width={400}
            height={200}
          />
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th></th>

                {DataExtract.yearsExtract(props.data).map((element) => (
                  <th key={element}>{element}</th>
                ))}
              </tr>
            </thead>
            <tbody className="table-hover">
              <tr>
                <th className="thead-dark">Fidelity Bond Amt</th>
                {DataExtract.fidelityBondAmtExtract(props.data).map(
                  (bond, index) => (
                    <td key={index}>${common.reducer(bond)}</td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
