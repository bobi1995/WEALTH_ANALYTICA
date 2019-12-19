const dataBeginEnd = (begin, end) => {
  return {
    labels: ["Begin of the Year", "End of the Year"],
    datasets: [
      {
        label: "Begin End",
        data: [begin, end],
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,0,0,0.4)",
        hoverBorderColor: "rgba(0,0,0,1)"
      }
    ]
  };
};

export default { dataBeginEnd };
