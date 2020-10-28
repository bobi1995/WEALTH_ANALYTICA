import { allYears } from "../../../../../global/Years";
import numeral from "numeral";
const arrayReducer = (array) => {
  const max = Math.max(...array);
  const parts = max.toString().split(".");
  const lengthOfAv = parts[0].toString().length;
  if (lengthOfAv > 12) {
    return array.map((el) => numeral(el / 100000000000).format("0.00"));
  } else if (lengthOfAv <= 12 && lengthOfAv > 9) {
    return array.map((el) => numeral(el / 1000000000).format("0.00"));
  } else if (lengthOfAv <= 9 && lengthOfAv > 6) {
    return array.map((el) => numeral((el = el / 1000000)).format("0.00"));
  } else if (lengthOfAv <= 6 && lengthOfAv > 3) {
    return array.map((el) => numeral((el = el / 1000)).format("0.00"));
  } else {
    return array.map((el) => numeral(el).format("0.00"));
  }
};

const arrayCategory = (array) => {
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
    labels: allYears,
    datasets: [
      {
        label: name,
        data: newArr,
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
      },
    ],
  };
};

const optionReturn = (array) => {
  const label = arrayCategory(array);
  return {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: label,
            fontSize: 15,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
};
export default { dataReturn, optionReturn, arrayReducer, arrayCategory };
