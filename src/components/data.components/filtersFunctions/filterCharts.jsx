import dashboardCharts from "../dashboardFunctions/charts";

const dataBeginEnd = (begin, end) => {
  const newArray = dashboardCharts.arrayReducer([begin, end]);
  return {
    labels: ["Begin of the Year", "End of the Year"],
    datasets: [
      {
        label: "Begin End",
        data: newArray,
        backgroundColor: "rgb(135,206,250)",
        borderColor: "rgb(0,98,204)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(30,144,255)",
        hoverBorderColor: "rgb(0,0,255)"
      }
    ]
  };
};

const participantsChart = (total, retired, bal) => {
  let newArray = [];
  if (total > 1000 && retired > 1000 && bal > 1000) {
    newArray = dashboardCharts.arrayReducer([total, retired, bal]);
  } else {
    newArray = [total, retired, bal];
  }

  return {
    labels: ["Total", "Retired", "Bal"],
    datasets: [
      {
        label: "Participants",
        data: newArray,
        backgroundColor: "rgb(144,238,144)",
        borderColor: "rgb(76,175,80)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(50,205,50)",
        hoverBorderColor: "rgb(0,100,0)"
      }
    ]
  };
};

const distribution = (dist, corrDist, service, other) => {
  const newArray = dashboardCharts.arrayReducer([
    dist,
    corrDist,
    service,
    other
  ]);

  return {
    labels: ["Dist", "Corrective", "ServiceExpenses", "Other"],
    datasets: [
      {
        label: "Cash Outflow",
        data: newArray,
        backgroundColor: "rgb(255,160,122)",
        borderColor: "rgb(205,92,92)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(255,99,71)",
        hoverBorderColor: "rgb(139,0,0)"
      }
    ]
  };
};

const contribution = (participant, employee) => {
  const newArray = dashboardCharts.arrayReducer([participant, employee]);

  return {
    labels: ["Participant", "Employee"],
    datasets: [
      {
        label: "Contribution",
        data: newArray,
        backgroundColor: "rgb(255,255,204)",
        borderColor: "rgb(204,204,0)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(255,255,0)",
        hoverBorderColor: "rgb(102,102,0)"
      }
    ]
  };
};

export default { dataBeginEnd, participantsChart, distribution, contribution };
