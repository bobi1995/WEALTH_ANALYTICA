import { lastYear } from "../../../global/Years";
const realYearsPension = (data) => {
  const arr = yearsPesion(data);
  return arr.filter((v, i, a) => a.indexOf(v) === i);
};

const yearsPesion = (data) => {
  return data.map((element) => {
    return element.Year;
  });
};

// PARTICIPANTS - NUMBER OF PARTICIPANTS
const participantsPension = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === false
    )
    .map((el) => el.Participants);
  return arr;
};

const totalAssetsPension = (data) => {
  return data.map((element) => {
    return element.Value;
  });
};

// FINANCE - NET ASSESTS
const netAssetsPension = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === false
    )
    .map((el) => el.NetAssets);

  return arr;
};

// FINANCE - NET INCOME
const netIncome = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === false
    )
    .map((el) => el.NetIncome);
  return arr;
};

// SERVICE PROVIDERS - DIRECT FEES
const ProvidersDirectFees = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === false
    )
    .map((el) => el.ProviderOtherDirectCompATM);
  return arr;
};

// SERVICE PROVIDERS - INDIRECT FEES
const ProvidersIndirectFees = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === false
    )
    .map((el) => el.ProviderOtherTotIndCompATM);
  return arr;
};

// PARTICIPANTS - CONTRIBUTION EMPLOYER
const contributionEmployer = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === false
    )
    .map((el) => el.ContributionEmployer);
  return arr;
};

// HEALTHCARE - PLAN LAST YEAR BROKER FEES
const lastYearBrokerFees = (data) => {
  const arr = data
    .filter(
      (element) =>
        element.Year === lastYear &&
        element.IsCity === false &&
        element.IsBusinessCode === false
    )
    .map((el) => el.BrokerFees);

  return arr;
};

// HEALTHCARE - INDUSTRY BROKER FEES
const industryBrokerFees = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === true
    )
    .map((el) => el.BrokerFees);

  return arr;
};

// HEALTHCARE - CITY BROKER FEES
const cityBrokerFees = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === true && element.IsBusinessCode === false
    )
    .map((el) => el.BrokerFees);
  return arr;
};

// HEALTHCARE - PLAN LAST YEAR BROKER COMMISSIONS
const lastYearBrokerCommissions = (data) => {
  const arr = data
    .filter(
      (element) =>
        element.Year === lastYear &&
        element.IsCity === false &&
        element.IsBusinessCode === false
    )
    .map((el) => el.BrokerCommissions);
  return arr;
};

// HEALTHCARE - INDUSTRY BROKER COMMISSIONS
const industryBrokerCommissions = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === true
    )
    .map((el) => el.BrokerCommissions);
  return arr;
};

// HEALTHCARE - CITY BROKER COMMISSIONS
const cityBrokerCommissions = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === true && element.IsBusinessCode === false
    )
    .map((el) => el.BrokerCommissions);
  return arr;
};

//***************UNIQUE PENSION TYPES ********************* */
const typesSummaryYears = (data) => {
  return data.map((element) => {
    return element.Year;
  });
};

//***************LAST YEAR AUM/HC ********************* */
const lastYearAum = (data) => {
  const arr = data
    .filter(
      (element) =>
        element.Year === lastYear &&
        element.IsCity === false &&
        element.IsBusinessCode === false
    )
    .map((el) => el.AUMHC);
  return arr;
};

//***************Industry AUM/HC ********************* */
const industryAum = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === true
    )
    .map((el) => el.AUMHC);
  return arr;
};

//***************City AUM/HC ********************* */
const cityAum = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === true && element.IsBusinessCode === false
    )
    .map((el) => el.AUMHC);
  return arr;
};

//***************LAST YEAR YIELD ********************* */
const lastYearYield = (data) => {
  const arr = data
    .filter(
      (element) =>
        element.Year === lastYear &&
        element.IsCity === false &&
        element.IsBusinessCode === false
    )
    .map((el) => el.Yield);
  return arr;
};

//***************Industry YIELD ********************* */
const industryYield = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === true
    )
    .map((el) => el.Yield);

  return arr;
};

//***************City YIELD ********************* */
const cityYield = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === true && element.IsBusinessCode === false
    )
    .map((el) => el.Yield);
  return arr;
};

//***************LAST YEAR CONTRIBUTION YIELD ********************* */
const lastYearContributionYield = (data) => {
  const arr = data
    .filter(
      (element) =>
        element.Year === lastYear &&
        element.IsCity === false &&
        element.IsBusinessCode === false
    )
    .map((el) => el.ContributionYield);
  return arr;
};

//***************Industry CONTRIBUTION YIELD ********************* */
const industryContributionYield = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === true
    )
    .map((el) => el.ContributionYield);
  return arr;
};

//***************City CONTRIBUTION YIELD ********************* */
const cityContributionYield = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === true && element.IsBusinessCode === false
    )
    .map((el) => el.ContributionYield);
  return arr;
};

//***************LAST YEAR EXPENSE RATIO ********************* */
const lastYearExpenseRatio = (data) => {
  const arr = data
    .filter(
      (element) =>
        element.Year === lastYear &&
        element.IsCity === false &&
        element.IsBusinessCode === false
    )
    .map((el) => el.ExpenseRatio);
  return arr;
};

//***************Industry EXPENSE RATIO ********************* */
const industryExpenseRatio = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === true
    )
    .map((el) => el.ExpenseRatio);

  return arr;
};
//***************City EXPENSE RATIO ********************* */
const cityExpenseRatio = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === true && element.IsBusinessCode === false
    )
    .map((el) => el.ExpenseRatio);

  return arr;
};

//***************LAST YEAR ROR ********************* */
const lastYearROR = (data) => {
  const arr = data
    .filter(
      (element) =>
        element.Year === lastYear &&
        element.IsCity === false &&
        element.IsBusinessCode === false
    )
    .map((el) => el.ROR);

  return arr;
};
//***************Industry ROR ********************* */
const industryROR = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === false && element.IsBusinessCode === true
    )
    .map((el) => el.ROR);

  return arr;
};
//***************City ROR ********************* */
const cityROR = (data) => {
  const arr = data
    .filter(
      (element) => element.IsCity === true && element.IsBusinessCode === false
    )
    .map((el) => el.ROR);

  return arr;
};

export default {
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
  contributionEmployer,
  lastYearBrokerFees,
  industryBrokerFees,
  cityBrokerFees,
  ProvidersDirectFees,
  ProvidersIndirectFees,
  lastYearBrokerCommissions,
  industryBrokerCommissions,
  cityBrokerCommissions,
};
