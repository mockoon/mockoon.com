export const pricing = {
  SOLO: {
    MONTHLY: {
      price: 15,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 150,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_YEARLY_PRICE_ID
    },
    trialDays: 7,
    templatesQuota: 100,
    syncQuota: 1,
    deployQuota: 1,
    deployCallsQuota: 10_000,
    deployReqSQuota: 5,
    discount: '🏷️ 2 months free'
  },
  TEAM: {
    MONTHLY: {
      price: 29,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 290,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_YEARLY_PRICE_ID
    },
    trialDays: 7,
    templatesQuota: 200,
    syncQuota: 3,
    deployQuota: 3,
    deployCallsQuota: 100_000,
    deployReqSQuota: 10,
    discount: '🏷️ 2 months free',
    minSeats: 1,
    maxSeats: 10
  },
  ENTERPRISE: {
    MONTHLY: {
      price: 50,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_ENTERPRISE_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 600,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_ENTERPRISE_YEARLY_PRICE_ID
    },
    trialDays: 7,
    templatesQuota: 500,
    syncQuota: 20,
    deployQuota: 5,
    deployCallsQuota: 250_000,
    deployReqSQuota: 20,
    discount: null,
    minSeats: 1,
    maxSeats: 99
  }
};
