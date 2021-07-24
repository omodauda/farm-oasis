export const FUND_A_FARM = 'FUND_A_FARM';

export const fundAFarm = farmId => {
  const date = new Date();
  return {
    type: FUND_A_FARM,
    farmId,
    startDate: date,
  };
};
