const uniqueYearsPension = () => {
  return [2015, 2016, 2017, 2018];
};

const realYearsPension = (data) => {
  const arr = yearsPesion(data);
  return arr.filter((v, i, a) => a.indexOf(v) === i);
};

const yearsPesion = (data) => {
  return data.map((element) => {
    return element.Year;
  });
};
const participantsPension = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === false) {
      return element.Participants;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
const totalAssetsPension = (data) => {
  return data.map((element) => {
    return element.Value;
  });
};

const netAssetsPension = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === false) {
      return element.NetAssets;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
const netIncome = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === false) {
      return element.NetIncome;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************UNIQUE PENSION TYPES ********************* */
const typesSummaryYears = (data) => {
  return data.map((element) => {
    return element.Year;
  });
};

//***************LAST YEAR AUM/HC ********************* */
const lastYearAum = (data) => {
  const arr = data.map((element) => {
    if (
      element.Year === 2018 &&
      element.IsCity === false &&
      element.IsBusinessCode === false
    ) {
      return element.AUMHC;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};

//***************Industry AUM/HC ********************* */
const industryAum = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === true) {
      return element.AUMHC;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};

//***************City AUM/HC ********************* */
const cityAum = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === true && element.IsBusinessCode === false) {
      return element.AUMHC;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};

//***************LAST YEAR YIELD ********************* */
const lastYearYield = (data) => {
  const arr = data.map((element) => {
    if (
      element.Year === 2018 &&
      element.IsCity === false &&
      element.IsBusinessCode === false
    ) {
      return element.Yield;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************Industry YIELD ********************* */
const industryYield = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === true) {
      return element.Yield;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************City YIELD ********************* */
const cityYield = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === true && element.IsBusinessCode === false) {
      return element.Yield;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};

//***************LAST YEAR CONTRIBUTION YIELD ********************* */
const lastYearContributionYield = (data) => {
  const arr = data.map((element) => {
    if (
      element.Year === 2018 &&
      element.IsCity === false &&
      element.IsBusinessCode === false
    ) {
      return element.ContributionYield;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************Industry CONTRIBUTION YIELD ********************* */
const industryContributionYield = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === true) {
      return element.ContributionYield;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************City CONTRIBUTION YIELD ********************* */
const cityContributionYield = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === true && element.IsBusinessCode === false) {
      return element.ContributionYield;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};

//***************LAST YEAR EXPENSE RATIO ********************* */
const lastYearExpenseRatio = (data) => {
  const arr = data.map((element) => {
    if (
      element.Year === 2018 &&
      element.IsCity === false &&
      element.IsBusinessCode === false
    ) {
      return element.ExpenseRatio;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************Industry EXPENSE RATIO ********************* */
const industryExpenseRatio = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === true) {
      return element.ExpenseRatio;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************City EXPENSE RATIO ********************* */
const cityExpenseRatio = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === true && element.IsBusinessCode === false) {
      return element.ExpenseRatio;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};

//***************LAST YEAR ROR ********************* */
const lastYearROR = (data) => {
  const arr = data.map((element) => {
    if (
      element.Year === 2018 &&
      element.IsCity === false &&
      element.IsBusinessCode === false
    ) {
      return element.ROR;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************Industry ROR ********************* */
const industryROR = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === false && element.IsBusinessCode === true) {
      return element.ROR;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};
//***************City ROR ********************* */
const cityROR = (data) => {
  const arr = data.map((element) => {
    if (element.IsCity === true && element.IsBusinessCode === false) {
      return element.ROR;
    }
  });
  return arr.filter((el) => {
    return el !== undefined;
  });
};

export default {
  uniqueYearsPension,
  yearsPesion,
  participantsPension,
  totalAssetsPension,
  netAssetsPension,
  typesSummaryYears,
  lastYearAum,
  industryAum,
  cityAum,
  lastYearYield,
  industryYield,
  cityYield,
  lastYearContributionYield,
  industryContributionYield,
  cityContributionYield,
  lastYearExpenseRatio,
  industryExpenseRatio,
  cityExpenseRatio,
  lastYearROR,
  industryROR,
  cityROR,
  realYearsPension,
  netIncome,
};
