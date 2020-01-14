import React from "react";
import { Bar } from "react-chartjs-2";
import DataExtract from "./OnePagerDataExtract";

const OnePagerCharts = props => {
  console.log(props.data);
  let planAssetData = {};
  let incomeStatementsData = {};
  let partMetrics = {};
  if (props.data) {
    //YEARS IN ARRAY
    const years = DataExtract.yearsExtract(props.data);

    /*****************PLAN ASSET DATA******************* */
    planAssetData = {
      labels: years,
      datasets: [
        {
          label: "Total Assets",
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: DataExtract.totalAssetsExtract(props.data),
          stack: 1
        },
        {
          label: "Net Assets",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: DataExtract.netAssetsExtract(props.data),
          stack: 2
        }
      ]
    };

    /*****************INCOME STATEMENTS DATA******************* */
    incomeStatementsData = {
      labels: years,
      datasets: [
        {
          label: "Income",
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: DataExtract.totalIncomeExtract(props.data),
          stack: 1
        },
        {
          label: "Expense",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: DataExtract.totalExpensesExtract(props.data),
          stack: 2
        },
        {
          label: "Net Income",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: DataExtract.netIncomeExtract(props.data),
          stack: 3
        }
      ]
    };
    partMetrics = {
      labels: years,
      datasets: [
        {
          label: "Part.Loans",
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: DataExtract.participantLoansExtract(props.data),
          stack: 1
        },
        {
          label: "Contrib.Emp.",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: DataExtract.contributionEmployerExtract(props.data),
          stack: 2
        },
        {
          label: "Contrib.Part.",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: DataExtract.contributionParticipantExtract(props.data),
          stack: 3
        },
        {
          label: "Distributions",
          backgroundColor: "rgba(0, 177, 106, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 239, 178, 1)",
          hoverBorderColor: "rgba(0, 177, 106, 1)",
          data: DataExtract.totalDistributionsExtract(props.data),
          stack: 4
        }
      ]
    };
  }
  return (
    <div className="onepager-charts-all">
      <div className="onepager-chart-content">
        <h2 className="onepager-h2">Plan Asset</h2>
        <Bar data={planAssetData} width={400} height={200} />
      </div>
      <div className="onepager-chart-content">
        <h2 className="onepager-h2">Income Statements</h2>
        <Bar data={incomeStatementsData} width={400} height={200} />
      </div>
      <div className="onepager-chart-content">
        <h2 className="onepager-h2">Participant Metrics</h2>
        <Bar data={partMetrics} width={400} height={200} />
      </div>
    </div>
  );
};

export default OnePagerCharts;
