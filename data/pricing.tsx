export const pricing = {
  SOLO: {
    MONTHLY: {
      price: 15,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 10, // we will display as a monthly price but charge yearly
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_YEARLY_PRICE_ID
    },
    trialDays: 7,
    templatesQuota: 100,
    syncQuota: 1,
    deployQuota: 1,
    deployCallsQuota: 10_000,
    deployReqSQuota: 5
  },
  TEAM: {
    MONTHLY: {
      price: 29,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 24, // we will display as a monthly price but charge yearly
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_YEARLY_PRICE_ID
    },
    trialDays: 7,
    templatesQuota: 200,
    syncQuota: 3,
    deployQuota: 3,
    deployCallsQuota: 100_000,
    deployReqSQuota: 10,
    minSeats: 2,
    maxSeats: 99
  }
};
