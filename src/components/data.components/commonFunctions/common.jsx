import numeral from "numeral";
const phoneFormat = phone => {
  const first = "(" + phone.substring(0, 3) + ")";
  const second = phone.substring(3, 6) + "-";
  const third = phone.substring(6);
  const formattedNumber = first + second + third;
  return formattedNumber;
};

const formatString = str => {
  return str
    .replace(/(\B)[^ ]*/g, match => match.toLowerCase())
    .replace(/^[^ ]/g, match => match.toUpperCase());
};

const splitCapitalLetterString = str => {
  const temp = str.split(/(?=[A-Z])/);

  return temp.join(" ");
};

const reducer = number => {
  if (number) {
    const parts = number.toString().split(".");
    let lengthOfAv = 0;
    if (number < 0) {
      const negative = parts[0].toString().split("-");
      lengthOfAv = negative[1].toString().length;
    } else lengthOfAv = parts[0].toString().length;
    if (lengthOfAv > 12) {
      return (parts[0] / 100000000000).toFixed(1) + " T";
    } else if (lengthOfAv <= 12 && lengthOfAv > 9) {
      return (parts[0] / 1000000000).toFixed(1) + " B";
    } else if (lengthOfAv <= 9 && lengthOfAv > 6) {
      return (parts[0] / 1000000).toFixed(1) + " M";
    } else if (lengthOfAv <= 6 && lengthOfAv > 3) {
      return (parts[0] / 1000).toFixed(1) + " K";
    } else {
      return parts[0];
    }
  } else return numeral(number).format("0,0");
};
export default { phoneFormat, formatString, splitCapitalLetterString, reducer };
