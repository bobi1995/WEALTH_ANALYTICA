const phoneFormat = phone => {
  const first = "(" + phone.substring(0, 3) + ")";
  const second = phone.substring(3, 6) + "-";
  const third = phone.substring(6);
  const formattedNumber = first + second + third;
  return formattedNumber;
};

export default { phoneFormat };
