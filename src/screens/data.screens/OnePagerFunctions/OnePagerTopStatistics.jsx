import React from "react";
import { Bar, Line } from "react-chartjs-2";
import DataExtract from "./OnePagerDataExtract";
import dataReducer from "../../../components/dataReducer";
import common from "../commonFunctions/common";
import numeral from "numeral";

export default (props) => {
  let planAssetData = {};
  let incomeStatementsData = {};
  let partMetrics = {};
  let dataParticipants = {};

  let biggestTotalAsset;
  let biggestNetAsstes;

  let biggestIncome;
  let biggestExpense;
  let biggestNetIncome;

  let biggestPartLoan;
  let biggestContribEmp;
  let biggestContribPart;
  let biggestDistrib;

  const divideBy = (array) => {
    const max = Math.max(...array);
    const parts = max.toString().split(".");
    const lengthOfAv = parts[0].toString().length;
    if (lengthOfAv > 12) {
      return 100000000000;
    } else if (lengthOfAv <= 12 && lengthOfAv > 9) {
      return 1000000000;
    } else if (lengthOfAv <= 9 && lengthOfAv > 6) {
      return 1000000;
    } else if (lengthOfAv <= 6 && lengthOfAv > 3) {
      return 1000;
    }
  };

  if (props.data) {
    //YEARS IN ARRAY
    const years = DataExtract.yearsExtract(props.data);

    /*****************PLAN ASSET DATA******************* */
    const totalAssets = DataExtract.totalAssetsExtract(props.data);
    const netAssets = DataExtract.netAssetsExtract(props.data);

    const allArrayAsset = totalAssets.concat(netAssets);

    const totalAssetsReduced = totalAssets.map((element) => {
      return element / divideBy(allArrayAsset);
    });
    const netAssetsReduced = netAssets.map((element) => {
      return element / divideBy(allArrayAsset);
    });

    biggestTotalAsset = Math.max(...totalAssets);
    biggestNetAsstes = Math.max(...netAssets);

    planAssetData = {
      labels: years,
      datasets: [
        {
          label: "Total Assets",
          backgroundColor: "rgba(147,112,219)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(221,160,221)",
          hoverBorderColor: "rgba(147,112,219)",
          data: totalAssetsReduced,
          stack: 1,
        },
        {
          label: "Net Assets",
          backgroundColor: "rgba(32,178,170)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(175,238,238)",
          hoverBorderColor: "rgba(32,178,170)",
          data: netAssetsReduced,
          stack: 2,
        },
      ],
    };

    /*****************INCOME STATEMENTS DATA******************* */
    const income = DataExtract.totalIncomeExtract(props.data);
    const expense = DataExtract.totalExpensesExtract(props.data);
    const netIncome = DataExtract.netIncomeExtract(props.data);

    const allArrayStatement = income.concat(expense, netIncome);

    const incomeReduced = income.map((element) => {
      return element / divideBy(allArrayStatement);
    });
    const expenseReduced = expense.map((element) => {
      return element / divideBy(allArrayStatement);
    });
    const netIncomeReduced = netIncome.map((element) => {
      return element / divideBy(allArrayStatement);
    });

    biggestIncome = Math.max(...income);
    biggestExpense = Math.max(...expense);
    biggestNetIncome = Math.max(...netIncome);
    incomeStatementsData = {
      labels: years,
      datasets: [
        {
          label: "Income",
          backgroundColor: "rgba(147,112,219)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(221,160,221)",
          hoverBorderColor: "rgba(147,112,219)",
          data: incomeReduced,
          stack: 1,
        },
        {
          label: "Expense",
          backgroundColor: "rgba(32,178,170)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(175,238,238)",
          hoverBorderColor: "rgba(32,178,170)",
          data: expenseReduced,
          stack: 2,
        },
        {
          label: "Net Income",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: netIncomeReduced,
          stack: 3,
        },
      ],
    };

    /*******************PARTICIPANT METRICS*********** */
    const partLoan = DataExtract.participantLoansExtract(props.data);
    const contribEmp = DataExtract.contributionEmployerExtract(props.data);
    const contribPart = DataExtract.contributionParticipantExtract(props.data);
    const distribution = DataExtract.totalDistributionsExtract(props.data);

    const allArray = partLoan.concat(contribEmp, contribPart, distribution);

    const partLoanReduced = partLoan.map((element) => {
      return element / divideBy(allArray);
    });
    const contribEmpReduced = contribEmp.map((element) => {
      return element / divideBy(allArray);
    });
    const contribPartReduced = contribPart.map((element) => {
      return element / divideBy(allArray);
    });
    const distributionReduced = distribution.map((element) => {
      return element / divideBy(allArray);
    });

    biggestPartLoan = Math.max(...partLoan);
    biggestContribEmp = Math.max(...contribEmp);
    biggestContribPart = Math.max(...contribPart);
    biggestDistrib = Math.max(...distribution);

    partMetrics = {
      labels: years,
      datasets: [
        {
          label: "Part.Loans",
          backgroundColor: "rgba(147,112,219)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(221,160,221)",
          hoverBorderColor: "rgba(147,112,219)",
          data: partLoanReduced,
          stack: 1,
        },
        {
          label: "Contrib.Emp.",
          backgroundColor: "rgba(32,178,170)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(175,238,238)",
          hoverBorderColor: "rgba(32,178,170)",
          data: contribEmpReduced,
          stack: 2,
        },
        {
          label: "Contrib.Part.",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: contribPartReduced,
          stack: 3,
        },
        {
          label: "Distributions",
          backgroundColor: "rgba(0, 177, 106, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 239, 178, 1)",
          hoverBorderColor: "rgba(0, 177, 106, 1)",
          data: distributionReduced,
          stack: 4,
        },
      ],
    };

    dataParticipants = {
      labels: years,
      datasets: [
        {
          label: "Participants",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataReducer.arrayReducer(
            DataExtract.totalParticipantsExtract(props.data)
          ),
        },
      ],
    };
  }

  return (
    <div className="plan-businessInfo-2 plan-graphs">
      <div className="chart-plan-section">
        <div className="plan-profile-chartsDiv">
          <h2 className="onepager-h2">Plan Asset</h2>

          <Bar
            data={planAssetData}
            options={dataReducer.optionReturn([
              biggestTotalAsset,
              biggestNetAsstes,
            ])}
            width={400}
            height={200}
          />
          <div
            className="plan-table-section responsive-table-div"
            style={{ marginTop: "3%", marginRight: "3%" }}
          >
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
                  <th className="thead-dark">Total Assets</th>
                  {DataExtract.totalAssetsExtract(props.data).map(
                    (totalAsset, index) => {
                      return totalAsset >= 0 ? (
                        <td key={index}>${common.reducer(totalAsset)}</td>
                      ) : (
                        <td key={index} className="negative-numbers">
                          ${common.reducer(totalAsset)}
                        </td>
                      );
                    }
                  )}
                </tr>
                <tr>
                  <th className="thead-dark">Net Assets</th>
                  {DataExtract.netAssetsExtract(props.data).map(
                    (netAsset, index) => {
                      return netAsset >= 0 ? (
                        <td key={index}>${common.reducer(netAsset)}</td>
                      ) : (
                        <td key={index} className="negative-numbers">
                          ${common.reducer(netAsset)}
                        </td>
                      );
                    }
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="plan-profile-chartsDiv">
          <h2 className="onepager-h2">Income Statements</h2>
          <Bar
            data={incomeStatementsData}
            width={400}
            height={200}
            options={dataReducer.optionReturn([
              biggestIncome,
              biggestExpense,
              biggestNetIncome,
            ])}
          />
          <div
            className="plan-table-section responsive-table-div"
            style={{ marginTop: "3%", marginLeft: "3%" }}
          >
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
                  <th className="thead-dark">Total Income</th>
                  {DataExtract.totalIncomeExtract(props.data).map(
                    (totalIncome, index) => {
                      return totalIncome >= 0 ? (
                        <td key={index}>${common.reducer(totalIncome)}</td>
                      ) : (
                        <td key={index} className="negative-numbers">
                          ${common.reducer(totalIncome)}
                        </td>
                      );
                    }
                  )}
                </tr>
                <tr>
                  <th className="thead-dark">Total Expense</th>
                  {DataExtract.totalExpensesExtract(props.data).map(
                    (totalExpense, index) => {
                      return totalExpense >= 0 ? (
                        <td key={index}>${common.reducer(totalExpense)}</td>
                      ) : (
                        <td key={index} className="negative-numbers">
                          ${common.reducer(totalExpense)}
                        </td>
                      );
                    }
                  )}
                </tr>
                <tr>
                  <th className="thead-dark">Net Income</th>
                  {DataExtract.netIncomeExtract(props.data).map(
                    (netIncome, index) => {
                      return netIncome >= 0 ? (
                        <td key={index}>${common.reducer(netIncome)}</td>
                      ) : (
                        <td key={index} className="negative-numbers">
                          ${common.reducer(netIncome)}
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
      {/* METRICS */}
      <div
        className="plan-profile-chartsDiv"
        style={{
          width: "90%",
          marginTop: "3%",
          marginLeft: "5%",
        }}
      >
        <h2 className="onepager-h2">Participant Metrics</h2>

        <div
          className="chart-plan-section"
          style={{
            paddingLeft: "3%",
            paddingRight: "3%",
          }}
        >
          <div className="plan-profile-chartsDiv" style={{ border: "none" }}>
            <Line
              data={dataParticipants}
              width={400}
              height={200}
              options={dataReducer.optionReturn(
                DataExtract.totalParticipantsExtract(props.data)
              )}
            />
          </div>
          <div className="plan-profile-chartsDiv" style={{ border: "none" }}>
            <Bar
              data={partMetrics}
              width={400}
              height={200}
              options={dataReducer.optionReturn([
                biggestPartLoan,
                biggestContribEmp,
                biggestContribPart,
                biggestDistrib,
              ])}
            />
          </div>
        </div>
        <div
          className="plan-table-section responsive-table-div"
          style={{ marginTop: "3%", marginRight: "3%" }}
        >
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
                <th className="thead-dark">Participants</th>
                {DataExtract.totalParticipantsExtract(props.data).map(
                  (participant, index) => (
                    <th key={index}> {numeral(participant).format("0,0")}</th>
                  )
                )}
              </tr>
              <tr>
                <th className="thead-dark">Participants Loans</th>
                {DataExtract.participantLoansExtract(props.data).map(
                  (partLoans, index) => {
                    return partLoans >= 0 ? (
                      <td key={index}>${common.reducer(partLoans)}</td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        ${common.reducer(partLoans)}
                      </td>
                    );
                  }
                )}
              </tr>
              <tr>
                <th className="thead-dark">Contribution Employer</th>
                {DataExtract.contributionEmployerExtract(props.data).map(
                  (contriEmp, index) => {
                    return contriEmp >= 0 ? (
                      <td key={index}>${common.reducer(contriEmp)}</td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        ${common.reducer(contriEmp)}
                      </td>
                    );
                  }
                )}
              </tr>
              <tr>
                <th className="thead-dark">Contribution Participants</th>
                {DataExtract.contributionParticipantExtract(props.data).map(
                  (contribPart, index) => {
                    return contribPart >= 0 ? (
                      <td key={index}>${common.reducer(contribPart)}</td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        ${common.reducer(contribPart)}
                      </td>
                    );
                  }
                )}
              </tr>
              <tr>
                <th className="thead-dark">Distribution</th>
                {DataExtract.totalDistributionsExtract(props.data).map(
                  (distribution, index) => {
                    return distribution >= 0 ? (
                      <td key={index}>${common.reducer(distribution)}</td>
                    ) : (
                      <td key={index} className="negative-numbers">
                        ${common.reducer(distribution)}
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
