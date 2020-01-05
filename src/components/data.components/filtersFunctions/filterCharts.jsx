import dashboardCharts from '../dashboardFunctions/charts'

const dataBeginEnd = (begin, end) => {
  const newArray = dashboardCharts.arrayReducer([begin, end])
  return {
    labels: ["Begin of the Year", "End of the Year"],
    datasets: [
      {
        label: "Begin End",
        data: newArray,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,0,0,0.4)",
        hoverBorderColor: "rgba(0,0,0,1)"
      }
    ]
  };
};

const participantsChart = (total, retired,bal) => {
  const newArray = dashboardCharts.arrayReducer([total, retired,bal])

  return {
    labels: ["Total", "Retired","Bal"],
    datasets: [
      {
        label: "Participants",
        data: newArray,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,0,0,0.4)",
        hoverBorderColor: "rgba(0,0,0,1)"
      }
    ]
  };
};

const distribution = (dist, corrDist,service,other) => {
  const newArray = dashboardCharts.arrayReducer([dist, corrDist,service,other])

  return {
    labels: ["Dist", "Corrective","ServiceExpenses","Other"],
    datasets: [
      {
        label: "Cash Outflow",
        data: newArray,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,0,0,0.4)",
        hoverBorderColor: "rgba(0,0,0,1)"
      }
    ]
  };
};

const contribution = (participant,employee) => {
  const newArray = dashboardCharts.arrayReducer([participant,employee])

  return {
    labels: ["Participant", "Employee"],
    datasets: [
      {
        label: "Contribution",
        data: newArray,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,0,0,0.4)",
        hoverBorderColor: "rgba(0,0,0,1)"
      }
    ]
  };
};


export default { dataBeginEnd,participantsChart,distribution,contribution };
