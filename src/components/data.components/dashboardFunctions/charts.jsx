const arrayReducer = array => {
  let newArr = [];
  const max = Math.max(...array);
  const parts = max.toString().split(".");
  const lengthOfAv = parts[0].toString().length;
  if (lengthOfAv > 12) {
    return (newArr = array.map(el => el / 100000000000));
  } else if (lengthOfAv <= 12 && lengthOfAv > 9) {
    return (newArr = array.map(el => el / 1000000000));
  } else if (lengthOfAv <= 9 && lengthOfAv > 6) {
    return (newArr = array.map(el => (el = el / 1000000)));
  } else if (lengthOfAv <= 6 && lengthOfAv > 3) {
    return (newArr = array.map(el => (el = el / 1000)));
  } else {
    return array;
  }
};

const arrayCategory = array => {
  // for (let i = 0; i < array.length; i++) {
  //   total += array[i];
  // }
  // const average = total / array.length;
  //const lengthOfAv = average.toString().length;
  const max = Math.max(...array);

  const parts = max.toString().split(".");
  const lengthOfAv = parts[0].toString().length;
  if (lengthOfAv > 12) {
    return "Result in Trillion";
  } else if (lengthOfAv <= 12 && lengthOfAv > 9) {
    return "Results in Billions";
  } else if (lengthOfAv <= 9 && lengthOfAv > 6) {
    return "Results in Millions";
  } else if (lengthOfAv <= 6 && lengthOfAv > 3) {
    return "Results in Thousands";
  } else if (lengthOfAv <= 3) {
    return "";
  }
};

const dataReturn = (array, name) => {
  const newArr = arrayReducer(array);

  return {
    labels: ["2015", "2016", "2017", "2018"],
    datasets: [
      {
        label: name,
        data: newArr,
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)"
      }
    ]
  };
};

const optionReturn = array => {
  const label = arrayCategory(array);
  return {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: label,
            fontSize: 15
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
};
export default { dataReturn, optionReturn, arrayReducer };
