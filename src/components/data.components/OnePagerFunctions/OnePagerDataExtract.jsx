//***************YEARS********************* */
const yearsExtract = data => {
  return data.map(element => {
    return element.Year;
  });
};

//***************TOTAL ASSETS********************* */
const totalAssetsExtract = data => {
  return data.map(element => {
    return element.TotalAssets;
  });
};

//***************NET ASSETS********************* */
const netAssetsExtract = data => {
  return data.map(element => {
    return element.NetAssets;
  });
};

//***************TOTAL INCOME********************* */
const totalIncomeExtract = data => {
  return data.map((element, index) => {
    return element.TotalIncome;
  });
};

//***************TOTAL EXPENSES********************* */
const totalExpensesExtract = data => {
  return data.map(element => {
    return element.TotalExpenses;
  });
};

//***************NET INCOME********************* */
const netIncomeExtract = data => {
  return data.map(element => {
    return element.NetIncome;
  });
};

//***************PARTICIPANT LOANS********************* */
const participantLoansExtract = data => {
  return data.map(element => {
    return element.ParticipantLoans;
  });
};

//***************CONTRIBUTION EMPLOYER********************* */
const contributionEmployerExtract = data => {
  return data.map(element => {
    return element.ContributionEmployer;
  });
};

//***************CONTRIBUTION PARTICIPANT********************* */
const contributionParticipantExtract = data => {
  return data.map(element => {
    return element.ContributionParticipant;
  });
};

//***************TOTAL DISTRIBUTIONS********************* */
const totalDistributionsExtract = data => {
  return data.map(element => {
    return element.TotalDistributions;
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
  totalDistributionsExtract
};
