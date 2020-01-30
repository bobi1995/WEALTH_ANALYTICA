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

export default { phoneFormat, formatString };
