import React from "react";
import { Bar } from "react-chartjs-2";

const OnePagerCharts = props => {
  console.log(props.data);
  let planAssetData = {};
  let incomeStatementsData = {};
  let partMetrics = {};
  if (props.data) {
    planAssetData = {
      labels: ["2016", "2017", "2018"],
      datasets: [
        {
          label: "Total Assets",
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: [
            props.data[0].TotalAssets,
            props.data[1].TotalAssets,
            props.data[2].TotalAssets
          ],
          stack: 1
        },
        {
          label: "Net Assets",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: [
            props.data[0].NetAssets,
            props.data[1].NetAssets,
            props.data[2].NetAssets
          ],
          stack: 2
        }
      ]
    };

    incomeStatementsData = {
      labels: ["2016", "2017", "2018"],
      datasets: [
        {
          label: "Income",
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: [
            props.data[0].TotalIncome,
            props.data[1].TotalIncome,
            props.data[2].TotalIncome
          ],
          stack: 1
        },
        {
          label: "Expense",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: [
            props.data[0].TotalExpenses,
            props.data[1].TotalExpenses,
            props.data[2].TotalExpenses
          ],
          stack: 2
        },
        {
          label: "Net Income",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: [
            props.data[0].NetIncome,
            props.data[1].NetIncome,
            props.data[2].NetIncome
          ],
          stack: 3
        }
      ]
    };
    partMetrics = {
      labels: ["2016", "2017", "2018"],
      datasets: [
        {
          label: "Part.Loans",
          backgroundColor: "rgba(44, 130, 201, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(137, 196, 244, 1)",
          hoverBorderColor: "rgba(44, 130, 201, 1)",
          data: [
            props.data[0].ParticipantLoans,
            props.data[1].ParticipantLoans,
            props.data[2].ParticipantLoans
          ],
          stack: 1
        },
        {
          label: "Contrib.Emp.",
          backgroundColor: "rgba(248, 148, 6, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(253, 227, 167, 1)",
          hoverBorderColor: "rgba(248, 148, 6, 1)",
          data: [
            props.data[0].ContributionEmployer,
            props.data[1].ContributionEmployer,
            props.data[2].ContributionEmployer
          ],
          stack: 2
        },
        {
          label: "Contrib.Part.",
          backgroundColor: "rgba(108, 122, 137, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(189, 195, 199, 1)",
          hoverBorderColor: "rgba(108, 122, 137, 1)",
          data: [
            props.data[0].ContributionParticipant,
            props.data[1].ContributionParticipant,
            props.data[2].ContributionParticipant
          ],
          stack: 3
        },
        {
          label: "Distributions",
          backgroundColor: "rgba(0, 177, 106, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(123, 239, 178, 1)",
          hoverBorderColor: "rgba(0, 177, 106, 1)",
          data: [
            props.data[0].TotalDistributions,
            props.data[1].TotalDistributions,
            props.data[2].TotalDistributions
          ],
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
