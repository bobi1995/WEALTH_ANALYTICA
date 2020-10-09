export const UtilizationExtract = (data = []) => {
  return data.map((el) => ({
    year: el.Year,
    business: el.IsBusinessCodeInState,
    utilization: el.Utilization,
  }));
};

export const ComplianceExtract = (data = []) => {
  return data.map((el) => ({
    year: el.Year,
    business: el.IsBusinessCodeInState,
    compliance: el.Compliance,
  }));
};

export const AccountantExtract = (data = []) => {
  return data.map((el) => ({
    year: el.Year,
    business: el.IsBusinessCodeInState,
    accountant: el.Accountant,
  }));
};

export const BenefitTypesExtract = (data = []) => {
  return data.map((el) =>
    el.IsBusinessCodeInState
      ? {
          year: el.Year,
          business: el.IsBusinessCodeInState,
          benefit: el.BenefitTypesIndustryPecentages,
        }
      : {
          year: el.Year,
          business: el.IsBusinessCodeInState,
          benefit: el.BenefitTypes,
        }
  );
};

export const TouchesExtract = (data = []) => {
  return data.map((el) =>({
          year: el.Year,
          touches: el.Touches,
        })
  );
};

