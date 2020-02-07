import React from "react";
import { Bar } from "react-chartjs-2";
import filterCharts from "../filtersFunctions/filterCharts";
import dashboardChartFuntions from "../dashboardFunctions/charts";

const MiddleFilterCHARTS = props => {
  const result = props.result;
  return (
    <div className="filter-top-charts">
      <div className="chart-content filter-chart1">
        <Bar
          data={filterCharts.dataBeginEnd(
            result.NetAssetBeginOfYear,
            result.NetAssetEndOfYear
          )}
          options={dashboardChartFuntions.optionReturn([
            result.NetAssetBeginOfYear,
            result.NetAssetEndOfYear
          ])}
          width={350}
          height={300}
        />
        <br />
        <Bar
          data={filterCharts.participantsChart(
            result.TotalParticipants,
            result.RetiredParticipants,
            result.TotalParticipantsBal
          )}
          options={dashboardChartFuntions.optionReturn([
            result.TotalParticipants,
            result.RetiredParticipants,
            result.TotalParticipantsBal
          ])}
          width={350}
          height={300}
        />
      </div>
      <div className="chart-content filter-chart1">
        <Bar
          data={filterCharts.distribution(
            result.Distributions,
            result.CorrectivrDistribution,
            result.ServiceProviderExpenses,
            result.OtherExpenses
          )}
          options={dashboardChartFuntions.optionReturn([
            result.Distributions,
            result.CorrectivrDistribution,
            result.ServiceProviderExpenses,
            result.OtherExpenses
          ])}
          width={350}
          height={300}
        />
        <br />
        <Bar
          data={filterCharts.contribution(
            result.ParticipantContribution,
            result.EmployerContribution
          )}
          options={dashboardChartFuntions.optionReturn([
            result.ParticipantContribution,
            result.EmployerContribution
          ])}
          width={350}
          height={300}
        />
      </div>
    </div>
  );
};

export default MiddleFilterCHARTS;
