export const pricing = {
  SOLO: {
    MONTHLY: {
      price: 15
    },
    YEARLY: {
      price: 10 // we will display as a monthly price but charge yearly
    },
    includedSeats: 1,
    trialDays: 7,
    templatesQuota: 100,
    syncQuota: 1,
    deployQuota: 1,
    deployCallsQuota: 10_000,
    deployReqSQuota: 5
  },
  TEAM: {
    MONTHLY: {
      price: 145
    },
    YEARLY: {
      price: 100 // we will display as a monthly price but charge yearly
    },
    includedSeats: 5,
    trialDays: 7,
    templatesQuota: 200,
    syncQuota: 3,
    deployQuota: 3,
    deployCallsQuota: 100_000,
    deployReqSQuota: 10
  }
};
