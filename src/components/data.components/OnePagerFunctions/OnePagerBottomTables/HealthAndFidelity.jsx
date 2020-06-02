import React from "react";
import DataExtract from "../OnePagerDataExtract";
import numeral from "numeral";
import common from "../../commonFunctions/common";
import { Bar, Line } from "react-chartjs-2";
import reducers from "../../dashboardFunctions/charts";

export default (props) => {
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
          data: reducers.arrayReducer(
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
          data: reducers.arrayReducer(
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
        style={{ backgroundColor: "#f3f4f8", margin: "3%" }}
      >
        <div
          className="plan-profile-chartsDiv"
          style={{ width: "100%", padding: "3%" }}
        >
          <h1 className="onepager-bottomtables-h1">Healthcare Insurance</h1>
          <Bar
            data={brokerFees}
            options={reducers.optionReturn(
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
        style={{ backgroundColor: "#f3f4f8", margin: "3%" }}
      >
        <div
          className="plan-profile-chartsDiv"
          style={{ width: "100%", padding: "3%" }}
        >
          <h1 className="onepager-bottomtables-h1">Fidelity Bond</h1>
          <Bar
            data={bondAmt}
            options={reducers.optionReturn(
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
