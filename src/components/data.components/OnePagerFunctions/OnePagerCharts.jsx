import React from "react";
import { Bar } from "react-chartjs-2";
import DataExtract from "./OnePagerDataExtract";
import reducers from "../dashboardFunctions/charts";

const OnePagerCharts = props => {
  let planAssetData = {};
  let incomeStatementsData = {};
  let partMetrics = {};

  let biggestTotalAsset;
  let biggestNetAsstes;

  let biggestIncome;
  let biggestExpense;
  let biggestNetIncome;

  let biggestPartLoan;
  let biggestContribEmp;
  let biggestContribPart;
  let biggestDistrib;

  const divideBy = array => {
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

    const totalAssetsReduced = totalAssets.map(element => {
      return element / divideBy(allArrayAsset);
    });
    const netAssetsReduced = netAssets.map(element => {
      return element / divideBy(allArrayAsset);
    });

    biggestTotalAsset = Math.max(...totalAssets);
    biggestNetAsstes = Math.max(...netAssets);

    planAssetData = {
      labels: years,
      datasets: [
        {
          label: "Total Assets",
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: totalAssetsReduced,
          stack: 1
        },
        {
          label: "Net Assets",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: netAssetsReduced,
          stack: 2
        }
      ]
    };

    /*****************INCOME STATEMENTS DATA******************* */
    const income = DataExtract.totalIncomeExtract(props.data);
    const expense = DataExtract.totalExpensesExtract(props.data);
    const netIncome = DataExtract.netIncomeExtract(props.data);

    const allArrayStatement = income.concat(expense, netIncome);

    const incomeReduced = income.map(element => {
      return element / divideBy(allArrayStatement);
    });
    const expenseReduced = expense.map(element => {
      return element / divideBy(allArrayStatement);
    });
    const netIncomeReduced = netIncome.map(element => {
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
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: incomeReduced,
          stack: 1
        },
        {
          label: "Expense",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: expenseReduced,
          stack: 2
        },
        {
          label: "Net Income",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: netIncomeReduced,
          stack: 3
        }
      ]
    };

    /*******************PARTICIPANT METRICS*********** */
    const partLoan = DataExtract.participantLoansExtract(props.data);
    const contribEmp = DataExtract.contributionEmployerExtract(props.data);
    const contribPart = DataExtract.contributionParticipantExtract(props.data);
    const distribution = DataExtract.totalDistributionsExtract(props.data);

    const allArray = partLoan.concat(contribEmp, contribPart, distribution);

    const partLoanReduced = partLoan.map(element => {
      return element / divideBy(allArray);
    });
    const contribEmpReduced = contribEmp.map(element => {
      return element / divideBy(allArray);
    });
    const contribPartReduced = contribPart.map(element => {
      return element / divideBy(allArray);
    });
    const distributionReduced = distribution.map(element => {
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
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: partLoanReduced,
          stack: 1
        },
        {
          label: "Contrib.Emp.",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: contribEmpReduced,
          stack: 2
        },
        {
          label: "Contrib.Part.",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: contribPartReduced,
          stack: 3
        },
        {
          label: "Distributions",
          backgroundColor: "rgba(0, 177, 106, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 239, 178, 1)",
          hoverBorderColor: "rgba(0, 177, 106, 1)",
          data: distributionReduced,
          stack: 4
        }
      ]
    };
  }
  return (
    <div className="onepager-charts-all">
      <div className="onepager-chart-content">
        <h2 className="onepager-h2">Plan Asset</h2>

        <Bar
          data={planAssetData}
          options={reducers.optionReturn([biggestTotalAsset, biggestNetAsstes])}
          width={400}
          height={200}
        />
      </div>
      <div className="onepager-chart-content">
        <h2 className="onepager-h2">Income Statements</h2>
        <Bar
          data={incomeStatementsData}
          width={400}
          height={200}
          options={reducers.optionReturn([
            biggestIncome,
            biggestExpense,
            biggestNetIncome
          ])}
        />
      </div>
      <div className="onepager-chart-content">
        <h2 className="onepager-h2">Participant Metrics</h2>
        <Bar
          data={partMetrics}
          width={400}
          height={200}
          options={reducers.optionReturn([
            biggestPartLoan,
            biggestContribEmp,
            biggestContribPart,
            biggestDistrib
          ])}
        />
      </div>
    </div>
  );
};

export default OnePagerCharts;
