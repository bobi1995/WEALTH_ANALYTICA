const uniqueYearsPension = () => {
  return [2015, 2016, 2017, 2018];
};

const yearsPesion = data => {
  return data.map(element => {
    return element.Year;
  });
};
const participantsPension = data => {
  return data.map(element => {
    return element.Value;
  });
};
const totalAssetsPension = data => {
  return data.map(element => {
    return element.Value;
  });
};

const netAssetsPension = data => {
  return data.map(element => {
    return element.Value;
  });
};
//***************UNIQUE PENSION TYPES ********************* */
const typesSummaryYears = data => {
  return data.map(element => {
    return element.Year;
  });
};
export default {
  uniqueYearsPension,
  yearsPesion,
  participantsPension,
  totalAssetsPension,
  netAssetsPension,
  typesSummaryYears
};
