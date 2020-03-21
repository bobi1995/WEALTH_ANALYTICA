import React from "react";
import DataExtract from "./OnePagerDataExtract";
import common from "../commonFunctions/common";

const OnePagerTables = props => {
  return (
    <div className="onepager-charts-all">
      {/***************PLAN ASSET TABLE******** */}
      <div className="onepager-chart-content responsive-table-div">
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
              <th className="thead-dark">Total Assets</th>
              {DataExtract.totalAssetsExtract(props.data).map(
                (totalAsset, index) => (
                  <td key={index}>${common.reducer(totalAsset)}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Net Assets</th>
              {DataExtract.netAssetsExtract(props.data).map(
                (netAsset, index) => (
                  <td key={index}>${common.reducer(netAsset)}</td>
                )
              )}
            </tr>
          </tbody>
        </table>
      </div>

      {/***************INCOME STATEMENTS TABLE******** */}
      <div className="onepager-chart-content responsive-table-div">
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
              <th className="thead-dark">Total Income</th>
              {DataExtract.totalIncomeExtract(props.data).map(
                (totalIncome, index) => (
                  <td key={index}>${common.reducer(totalIncome)}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Total Expense</th>
              {DataExtract.totalExpensesExtract(props.data).map(
                (totalExpense, index) => (
                  <td key={index}>${common.reducer(totalExpense)}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Net Income</th>
              {DataExtract.netIncomeExtract(props.data).map(
                (netIncome, index) => (
                  <td key={index}>${common.reducer(netIncome)}</td>
                )
              )}
            </tr>
          </tbody>
        </table>
      </div>

      {/***************PARTICIPANT METRICS TABLE******** */}
      <div className="onepager-chart-content responsive-table-div">
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
              <th className="thead-dark">Participants</th>
              {DataExtract.totalParticipantsExtract(props.data).map(
                (participant, index) => (
                  <th key={index}>{participant}</th>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Part.Loans</th>
              {DataExtract.participantLoansExtract(props.data).map(
                (partLoans, index) => (
                  <td key={index}>${common.reducer(partLoans)}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Contrib.Emp.</th>
              {DataExtract.contributionEmployerExtract(props.data).map(
                (contriEmp, index) => (
                  <td key={index}>${common.reducer(contriEmp)}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Contrib.Part.</th>
              {DataExtract.contributionParticipantExtract(props.data).map(
                (contribPart, index) => (
                  <td key={index}>${common.reducer(contribPart)}</td>
                )
              )}
            </tr>
            <tr>
              <th className="thead-dark">Distribution</th>
              {DataExtract.totalDistributionsExtract(props.data).map(
                (distribution, index) => (
                  <td key={index}>${common.reducer(distribution)}</td>
                )
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnePagerTables;
