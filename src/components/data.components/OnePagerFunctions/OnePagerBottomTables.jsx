import React from "react";
import DataExtract from "./OnePagerDataExtract";
import numeral from "numeral";

const OnePagerBottomTables = props => {
  console.log("here");
  return (
    <div className="onepager-bottomtables-maindiv">
      {/**********************STATISTICS***************************************** */}
      <div className="onepager-bottomtables-table ">
        <h1 className="onepager-bottomtables-h1">Statistics</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>

              {DataExtract.yearsExtract(props.data).map(element => (
                <th key={element}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th className="thead-dark">AUM/HC</th>
              {DataExtract.AUMHCExtract(props.data).map((auhmc, index) => (
                <td key={index}>${numeral(auhmc).format("0,0")}</td>
              ))}
            </tr>
            <tr>
              <th className="thead-dark">Yeild</th>
              {DataExtract.yieldExtract(props.data).map((yield1, index) => (
                <td key={index}>{numeral(yield1).format("0.00")}%</td>
              ))}
            </tr>
            <tr>
              <th className="thead-dark">Contribution Yeild</th>
              {DataExtract.contributionYieldExtract(props.data).map(
                (contributionYield, index) => (
                  <td key={index}>
                    {numeral(contributionYield).format("0.00")}%
                  </td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Expense Ratio</th>
              {DataExtract.expenseRatioExtract(props.data).map(
                (expenseRatio, index) => (
                  <td key={index}>{numeral(expenseRatio).format("0.00")}%</td>
                )
              )}
            </tr>

            <tr>
              <th className="thead-dark">ROR</th>
              {DataExtract.RORExtract(props.data).map((ror, index) => (
                <td key={index}>{numeral(ror).format("0.00")}%</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/**********************Service Providers***************************************** */}
      <div className="onepager-bottomtables-table ">
        <h1 className="onepager-bottomtables-h1">Service Providers</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>

              {DataExtract.yearsExtract(props.data).map(element => (
                <th key={element}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th className="thead-dark">Eligible Providers Count</th>
              {DataExtract.providerEligibleNamesCountExtract(props.data).map(
                (epc, index) => (
                  <td key={index}>{epc}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Other Providers Count</th>
              {DataExtract.providerOtherNamesCountExtract(props.data).map(
                (opc, index) => (
                  <td key={index}>{opc}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Other Providers direct fees</th>
              {DataExtract.providerOtherDirectCompATMExtract(props.data).map(
                (directFees, index) => (
                  <td key={index}>${numeral(directFees).format("0,0")}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Other Providers Indirect Fees</th>
              {DataExtract.providerOtherTotIndCompATMExtract(props.data).map(
                (indirectFees, index) => (
                  <td key={index}>${numeral(indirectFees).format("0,0")}</td>
                )
              )}
            </tr>
          </tbody>
        </table>
      </div>

      {/**********************HEALTHCARE INSURANCE***************************************** */}
      <div className="onepager-bottomtables-table ">
        <h1 className="onepager-bottomtables-h1">Healthcare Insurance</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>

              {DataExtract.yearsExtract(props.data).map(element => (
                <th key={element}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th className="thead-dark">Carriers Count</th>
              {DataExtract.carriersCountExtract(props.data).map(
                (carriersCount, index) => (
                  <td key={index}>{carriersCount}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Brokers Count</th>
              {DataExtract.brokersCountExtract(props.data).map(
                (brokersCount, index) => (
                  <td key={index}>{brokersCount}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Broker Commissions</th>
              {DataExtract.brokerCommissionsExtract(props.data).map(
                (brokerCom, index) => (
                  <td key={index}>${numeral(brokerCom).format("0,0")}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Broker Fees</th>
              {DataExtract.brokerFeesExtract(props.data).map((fees, index) => (
                <td key={index}>${numeral(fees).format("0,0")}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/**********************FIDELITY BOND***************************************** */}
      <div className="onepager-bottomtables-table ">
        <h1 className="onepager-bottomtables-h1">Fidelity Bond</h1>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>

              {DataExtract.yearsExtract(props.data).map(element => (
                <th key={element}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <th className="thead-dark">Fiduciary Trust Name</th>
              {DataExtract.fiduciaryTrustNameExtract(props.data).map(
                (name, index) => (
                  <td key={index}>{name}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Fidelity Bond Amt</th>
              {DataExtract.fidelityBondAmtExtract(props.data).map(
                (bond, index) => (
                  <td key={index}>${numeral(bond).format("0,0")}</td>
                )
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnePagerBottomTables;
