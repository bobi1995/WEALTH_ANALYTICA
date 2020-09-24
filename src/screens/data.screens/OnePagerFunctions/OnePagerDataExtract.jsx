//***************YEARS********************* */
const yearsExtract = (data) => {
  return data.map((element) => {
    return element.Year;
  });
};

//***************TOTAL ASSETS********************* */
const totalAssetsExtract = (data) => {
  return data.map((element) => {
    return element.TotalAssets;
  });
};

//***************NET ASSETS********************* */
const netAssetsExtract = (data) => {
  return data.map((element) => {
    return element.NetAssets;
  });
};

//***************TOTAL INCOME********************* */
const totalIncomeExtract = (data) => {
  return data.map((element, index) => {
    return element.TotalIncome;
  });
};

//***************TOTAL EXPENSES********************* */
const totalExpensesExtract = (data) => {
  return data.map((element) => {
    return element.TotalExpenses;
  });
};

//***************NET INCOME********************* */
const netIncomeExtract = (data) => {
  return data.map((element) => {
    return element.NetIncome;
  });
};

//***************PARTICIPANT LOANS********************* */
const participantLoansExtract = (data) => {
  return data.map((element) => {
    return element.ParticipantLoans;
  });
};

//***************CONTRIBUTION EMPLOYER********************* */
const contributionEmployerExtract = (data) => {
  return data.map((element) => {
    return element.ContributionEmployer;
  });
};

//***************CONTRIBUTION PARTICIPANT********************* */
const contributionParticipantExtract = (data) => {
  return data.map((element) => {
    return element.ContributionParticipant;
  });
};

//***************TOTAL DISTRIBUTIONS********************* */
const totalDistributionsExtract = (data) => {
  return data.map((element) => {
    return element.TotalDistributions;
  });
};

//***************TOTAL PARTICIPANTS********************* */
const totalParticipantsExtract = (data) => {
  return data.map((element) => {
    return element.Participants;
  });
};

//***************AUMHC********************* */
const AUMHCExtract = (data) => {
  return data.map((element) => {
    return element.AUMHC;
  });
};

//***************YIELD********************* */
const yieldExtract = (data) => {
  return data.map((element) => {
    return element.Yield;
  });
};

//***************CONTRIBUTION YIELD********************* */
const contributionYieldExtract = (data) => {
  return data.map((element) => {
    return element.ContributionYield;
  });
};

//***************EXPENSE RATIO********************* */
const expenseRatioExtract = (data) => {
  return data.map((element) => {
    return element.ExpenseRatio;
  });
};

//***************EXPENSE RATIO********************* */
const RORExtract = (data) => {
  return data.map((element) => {
    return element.ROR;
  });
};

//***************PROVIDER ELIGIBLE NAMES COUNT********************* */
const providerEligibleNamesCountExtract = (data) => {
  return data.map((element) => {
    return element.ProviderEligibleNamesCount;
  });
};

//***************PROVIDER OTHER NAMES COUNT********************* */
const providerOtherNamesCountExtract = (data) => {
  return data.map((element) => {
    return element.ProviderOtherNamesCount;
  });
};

//***************PROVIDER OTHER DIRECT COMPATM********************* */
const providerOtherDirectCompATMExtract = (data) => {
  return data.map((element) => {
    return element.ProviderOtherDirectCompATM;
  });
};

//***************PROVIDER OTHER INDIRECT COMPATM********************* */
const providerOtherTotIndCompATMExtract = (data) => {
  return data.map((element) => {
    return element.ProviderOtherTotIndCompATM;
  });
};

//***************CARRIERS COUNT********************* */
const carriersCountExtract = (data) => {
  return data.map((element) => {
    return element.CarriersCount;
  });
};

//***************BROKERS COUNT********************* */
const brokersCountExtract = (data) => {
  return data.map((element) => {
    return element.BrokersCount;
  });
};

//***************BROKERS COMMISIONS********************* */
const brokerCommissionsExtract = (data) => {
  return data.map((element) => {
    return element.BrokerCommissions;
  });
};

//***************BROKERS FEES********************* */
const brokerFeesExtract = (data) => {
  return data.map((element) => {
    return element.BrokerFees;
  });
};

//***************FIDUCIARY TRUST NAME********************* */
const fiduciaryTrustNameExtract = (data) => {
  return data.map((element) => {
    return element.FiduciaryTrustName;
  });
};

//***************FIDELITY BONDAMT********************* */
const fidelityBondAmtExtract = (data) => {
  return data.map((element) => {
    return element.FidelityBondAmt;
  });
};

//***************UNIQUE PENSION TYPES ********************* */
const typesSummaryYears = (data) => {
  return data.map((element) => {
    return element.Year;
  });
};

export default {
  yearsExtract,
  totalAssetsExtract,
  netAssetsExtract,
  totalIncomeExtract,
  totalExpensesExtract,
  netIncomeExtract,
  participantLoansExtract,
  contributionEmployerExtract,
  contributionParticipantExtract,
  totalDistributionsExtract,
  totalParticipantsExtract,
  AUMHCExtract,
  yieldExtract,
  contributionYieldExtract,
  expenseRatioExtract,
  RORExtract,
  providerEligibleNamesCountExtract,
  providerOtherNamesCountExtract,
  providerOtherDirectCompATMExtract,
  providerOtherTotIndCompATMExtract,
  carriersCountExtract,
  brokersCountExtract,
  brokerCommissionsExtract,
  brokerFeesExtract,
  fiduciaryTrustNameExtract,
  fidelityBondAmtExtract,
  typesSummaryYears,
};
