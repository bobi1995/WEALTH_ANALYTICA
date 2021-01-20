import React from "react";
import { Bar } from "react-chartjs-2";
import dataReducer from "../../../../../components/dataReducer";
const CashOutflow = (props) => {
  const CashOutflowReduced = dataReducer.arrayReducer([
    props.Distribution,
    props.CorrectivrDistribution,
    props.ServiceProviderExpenses,

    props.OtherExpenses,
  ]);

  const data = {
    labels: ["Distribution", "Correctiver", "Service Expenses", "Other"],
    datasets: [
      {
        label: "Cash Outflow",
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54,162,235,0.4)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: CashOutflowReduced,
      },
    ],
  };
  return (
    <div style={{ width: "25%" }}>
      <small
        className="form-text text-muted"
        style={{ textAlign: "center", fontSize: "17px" }}
      >
        Cash Outflow
      </small>
      <Bar
        data={data}
        options={dataReducer.optionReturn([
          props.Distribution,
          props.CorrectivrDistribution,
          props.ServiceProviderExpenses,
          props.OtherExpenses,
        ])}
      />
    </div>
  );
};

export default CashOutflow;
