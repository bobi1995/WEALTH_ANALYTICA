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
  let auhmc = {};
  let eligibleProviders = {};
  if (props.data) {
    const years = DataExtract.yearsExtract(props.data);
    // ---------------------AUHMC--------------------------------------------
    auhmc = {
      labels: years,
      datasets: [
        {
          label: "AUM/HC",
          backgroundColor: "rgba(147,112,219)",

          borderWidth: 1,
          hoverBackgroundColor: "rgba(221,160,221)",
          hoverBorderColor: "rgba(147,112,219)",
          data: dataReducer.arrayReducer(DataExtract.AUMHCExtract(props.data)),
          stack: 1,
        },
      ],
    };
    // ---------------------eligibleProviders--------------------------------------------
    eligibleProviders = {
      labels: years,
      datasets: [
        {
          label: "Eligible Providers",
          backgroundColor: "rgba(32,178,170)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(175,238,238)",
          hoverBorderColor: "rgba(32,178,170)",
          data: dataReducer.arrayReducer(
            DataExtract.providerOtherDirectCompATMExtract(props.data)
          ),
          stack: 1,
        },
      ],
    };
  }
  return (
    <div className="onePager-bottom-div">
      {/**********************STATISTICS***************************************** */}
      <div
        className="onepager-bottomtables-table"
        style={{ backgroundColor: backgroundGrey, margin: "3%" }}
      >
        <div
          className="plan-profile-chartsDiv"
          style={{ width: "100%", padding: "3%" }}
        >
          <Typography className={classes.heading}>Statistics</Typography>
          <Bar
            data={auhmc}
            options={dataReducer.optionReturn(
              DataExtract.AUMHCExtract(props.data)
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
                <th className="thead-dark">AUM/HC</th>
                {DataExtract.AUMHCExtract(props.data).map((auhmc, index) => {
                  return auhmc >= 0 ? (
                    <td key={index}>${common.reducer(auhmc)}</td>
                  ) : (
                    <td key={index} className="negative-numbers">
                      ${common.reducer(auhmc)}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Distribution Yield</th>
                {DataExtract.yieldExtract(props.data).map((yield1, index) => {
                  return yield1 >= 0 ? (
                    <td key={index}>{numeral(yield1).format("0.00")}%</td>
                  ) : (
                    <td key={index} className="negative-numbers">
                      {numeral(yield1).format("0.00")}%
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="thead-dark">Contribution Yield</th>
                {DataExtract.contributionYieldExtract(props.data).map(
                  (contributionYield, index) => {
                    return contributionYield >= 0 ? (
                      <td key={index}>
                        {numeral(contributionYield).format("0.00")}%
                      </td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        {numeral(contributionYield).format("0.00")}%
                      </td>
                    );
                  }
                )}
              </tr>
              <tr>
                <th className="thead-dark">Return on Investment</th>
                {DataExtract.expenseRatioExtract(props.data).map(
                  (expenseRatio, index) => {
                    return expenseRatio >= 0 ? (
                      <td key={index}>
                        {numeral(expenseRatio).format("0.00")}%
                      </td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        {numeral(expenseRatio).format("0.00")}%
                      </td>
                    );
                  }
                )}
              </tr>

              <tr>
                <th className="thead-dark">Return on Assets</th>
                {DataExtract.RORExtract(props.data).map((ror, index) => {
                  return ror >= 0 ? (
                    <td key={index}>{numeral(ror).format("0.00")}%</td>
                  ) : (
                    <td key={index} className="negative-numbers">
                      {numeral(ror).format("0.00")}%
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/**********************Service Providers***************************************** */}
      <div
        className="onepager-bottomtables-table"
        style={{ backgroundColor: backgroundGrey, margin: "3%" }}
      >
        <div
          className="plan-profile-chartsDiv"
          style={{ width: "100%", padding: "3%" }}
        >
          <Typography className={classes.heading}>Service Providers</Typography>
          <Bar
            data={eligibleProviders}
            options={dataReducer.optionReturn(
              DataExtract.providerOtherDirectCompATMExtract(props.data)
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
                <th className="thead-dark">Eligible Providers Count</th>
                {DataExtract.providerEligibleNamesCountExtract(props.data).map(
                  (epc, index) => (
                    <td key={index}>{numeral(epc).format("0,0")}</td>
                  )
                )}
              </tr>
              <tr>
                <th className="thead-dark">Other Providers Count</th>
                {DataExtract.providerOtherNamesCountExtract(props.data).map(
                  (opc, index) => (
                    <td key={index}>{numeral(opc).format("0,0")}</td>
                  )
                )}
              </tr>
              <tr>
                <th className="thead-dark">Other Providers direct fees</th>
                {DataExtract.providerOtherDirectCompATMExtract(props.data).map(
                  (directFees, index) => {
                    return directFees >= 0 ? (
                      <td key={index}>${common.reducer(directFees)}</td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        ${common.reducer(directFees)}
                      </td>
                    );
                  }
                )}
              </tr>
              <tr>
                <th className="thead-dark">Other Providers Indirect Fees</th>
                {DataExtract.providerOtherTotIndCompATMExtract(props.data).map(
                  (indirectFees, index) => {
                    return indirectFees >= 0 ? (
                      <td key={index}>${common.reducer(indirectFees)}</td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        ${common.reducer(indirectFees)}
                      </td>
                    );
                  }
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
