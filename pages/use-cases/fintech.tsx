import IndustrySolutionPage from '../../components/industry-solution-page';

const data = {
  metaTitle: 'Build and test banking APIs safely with API mocking',
  metaDescription:
    'Develop banking and fintech experiences faster with realistic API mocks for payments, account data, identity checks, and partner integrations.',
  heroTitle:
    'Build banking experiences <span class="text-primary">without waiting on live systems</span>',
  heroImage: '/images/solutions/banking/banking-hero.png',
  heroImageAlt: 'Illustration of banking API development',
  industry: 'banking and financial services',
  benefits: [
    {
      title: 'Protect Live Services',
      description:
        'Develop and test payment journeys without sending transactions to production systems',
      icon: 'icon-security'
    },
    {
      title: 'Build in Parallel',
      description:
        'Let digital product teams work while core banking or partner APIs are in progress',
      icon: 'icon-groups'
    },
    {
      title: 'Cover More Scenarios',
      description:
        'Exercise declined payments, account limits, and verification edge cases on demand',
      icon: 'icon-tune'
    },
    {
      title: 'Keep Tests Predictable',
      description:
        'Avoid flaky test runs caused by external providers, rate limits, or changing data',
      icon: 'icon-verified'
    }
  ],
  comparisonTitle: 'Live banking integrations vs API mocking',
  comparisonDescription:
    'Build and validate financial workflows with controlled responses before connecting to live services.',
  withoutTitle: 'Relying on live systems',
  without: [
    'Risk of triggering real payments or changing customer data',
    'Waiting for access to core banking and partner environments',
    'Limited control over declines, limits, and verification outcomes',
    'Tests disrupted by provider availability and rate limits',
    'Sensitive credentials and test data shared across environments'
  ],
  withTitle: 'With Mockoon',
  with: [
    'Simulate payment and account flows without live transactions',
    'Start frontend and integration work before partner APIs are ready',
    'Test approvals, declines, limits, and identity checks consistently',
    'Run repeatable tests independent of provider uptime',
    'Use isolated mock environments and representative synthetic data'
  ],
  features: [
    {
      title: 'Mock <span class="text-primary">account and payment APIs</span>',
      description:
        'Create endpoints for balances, transfers, cards, and transaction history. Give mobile and web teams realistic responses before they have access to live banking services.',
      imgSrc: '/images/solutions/banking/mock-account-and-payment-apis.png',
      imgAlt: 'Illustration of mocked banking account and payment endpoints'
    },
    {
      title: 'Test <span class="text-primary">every payment outcome</span>',
      description:
        'Model successful transfers alongside insufficient funds, blocked cards, daily limits, and provider errors. Keep each test case easy to trigger and repeat.',
      imgSrc: '/images/solutions/banking/test-payment-outcomes.png',
      imgAlt: 'Illustration of various payment outcomes'
    },
    {
      title:
        'Prototype <span class="text-primary">open banking journeys</span>',
      description:
        'Simulate consent, account discovery, and balance retrieval to shape user experiences while third-party connections and approvals are still being set up.',
      imgSrc: '/images/solutions/banking/prototype-open-banking.png',
      imgAlt: 'Illustration of an open banking API prototype'
    },
    {
      title:
        'Exercise <span class="text-primary">identity and fraud checks</span>',
      description:
        'Return controlled verification, risk, and review outcomes so teams can validate onboarding and payment decisions without relying on real customer records.',
      imgSrc: '/images/solutions/banking/test-identity-and-fraud-checks.png',
      imgAlt: 'Illustration of identity and fraud checks in a banking context'
    }
  ]
};

export default function BankingUseCase() {
  return <IndustrySolutionPage data={data} />;
}
