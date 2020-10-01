export const UtilizationExtract = (data = []) => {
  return data.map((el) => ({
    year: el.Year,
    business: el.IsBusinessCodeInState,
    utilization: el.Utilization,
  }));
};
