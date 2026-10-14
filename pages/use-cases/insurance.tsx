import IndustrySolutionPage from '../../components/industry-solution-page';

const data = {
  metaTitle: 'Develop insurance products faster with API mocking',
  metaDescription:
    'Mock policy, quote, claims, and partner APIs to test insurance journeys with realistic responses before connecting to live systems.',
  heroTitle:
    'Bring insurance products to market <span class="text-primary">without integration delays</span>',
  heroImage: '/images/solutions/insurance/insurance-hero.png',
  heroImageAlt: 'Illustration of insurance API development',
  industry: 'insurance',
  benefits: [
    {
      title: 'Accelerate Product Work',
      description:
        'Build quote and policy experiences while underwriting services are still evolving',
      icon: 'icon-speed'
    },
    {
      title: 'Test Complex Decisions',
      description:
        'Model eligibility, pricing, referrals, and declines without manual setup',
      icon: 'icon-tune'
    },
    {
      title: 'Stabilize Integrations',
      description:
        'Keep tests running when brokers, repair networks, or data providers are unavailable',
      icon: 'icon-verified'
    },
    {
      title: 'Protect Customer Data',
      description:
        'Use controlled responses instead of exposing real policyholder information',
      icon: 'icon-security'
    }
  ],
  comparisonTitle: 'Live insurance systems vs API mocking',
  comparisonDescription:
    'Validate policyholder and partner journeys using repeatable responses at every stage of development.',
  withoutTitle: 'Relying on live systems',
  without: [
    'Quote flows blocked by underwriting or rating service changes',
    'Claims scenarios difficult to reproduce consistently',
    'Testing depends on broker and service-provider availability',
    'Realistic edge cases require complex test data preparation',
    'Risk of using sensitive policyholder details in development'
  ],
  withTitle: 'With Mockoon',
  with: [
    'Build customer journeys before every backend service is ready',
    'Reproduce claim, renewal, and underwriting outcomes on demand',
    'Test partner integrations without external service dependencies',
    'Generate predictable data for edge cases and regression tests',
    'Work with isolated mocks instead of real policyholder records'
  ],
  features: [
    {
      title:
        'Prototype <span class="text-primary">quote and bind journeys</span>',
      description:
        'Mock quote, eligibility, premium, and policy creation endpoints so teams can shape purchase flows before rating and policy administration systems are connected.',
      imgSrc: '/images/solutions/insurance/prototype-quote-and-bind.png',
      imgAlt: 'Illustration of an insurance quote and bind API flow'
    },
    {
      title: 'Simulate <span class="text-primary">claims scenarios</span>',
      description:
        'Test claim submission, status updates, document checks, and settlement outcomes, including exceptions that are difficult to produce in shared test systems.',
      imgSrc: '/images/solutions/insurance/simulate-claims-scenarios.png',
      imgAlt: 'Illustration of simulated insurance claim responses'
    },
    {
      title:
        'Connect <span class="text-primary">broker and partner APIs</span>',
      description:
        'Stand in for broker platforms, repair networks, payment providers, and data services while integrations are under development or unavailable.',
      imgSrc: '/images/solutions/insurance/mock-broker-and-partner-apis.png',
      imgAlt: 'Illustration of insurance broker and partner API mocks'
    },
    {
      title:
        'Validate <span class="text-primary">renewals and policy changes</span>',
      description:
        'Create repeatable responses for renewals, endorsements, cancellations, and coverage changes to verify customer communications and downstream workflows.',
      imgSrc: '/images/solutions/insurance/test-policy-lifecycle.png',
      imgAlt: 'Illustration of insurance policy lifecycle testing'
    }
  ]
};

export default function InsuranceUseCase() {
  return <IndustrySolutionPage data={data} />;
}
