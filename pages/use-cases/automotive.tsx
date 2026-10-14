import IndustrySolutionPage from '../../components/industry-solution-page';

const data = {
  metaTitle: 'Build connected automotive services with API mocking',
  metaDescription:
    'Develop connected vehicle, mobility, dealer, and charging experiences with realistic API mocks that keep teams moving before integrations are ready.',
  heroTitle:
    'Build connected vehicle services <span class="text-primary">without waiting on every integration</span>',
  heroImage: '/images/solutions/automotive/automotive-hero.png',
  heroImageAlt: 'Illustration of connected automotive API development',
  industry: 'automotive and mobility',
  benefits: [
    {
      title: 'Develop in Parallel',
      description:
        'Build driver and dealer experiences before vehicle or backend APIs are available',
      icon: 'icon-groups'
    },
    {
      title: 'Test Unusual Conditions',
      description:
        'Simulate connectivity loss, stale vehicle data, and unavailable services',
      icon: 'icon-tune'
    },
    {
      title: 'Coordinate Ecosystems',
      description:
        'Work across vehicle, mobile, charging, and service-provider integrations',
      icon: 'icon-device_hub'
    },
    {
      title: 'Repeat Tests Reliably',
      description:
        'Run consistent scenarios without depending on vehicles or external systems',
      icon: 'icon-verified'
    }
  ],
  comparisonTitle: 'Vehicle and partner dependencies vs API mocking',
  comparisonDescription:
    'Prototype connected services and test integration behavior without requiring a live vehicle or partner system for every iteration.',
  withoutTitle: 'Relying on live systems',
  without: [
    'Development waits for access to vehicles and hardware environments',
    'Vehicle states and telemetry are difficult to reproduce on demand',
    'Partner APIs and charging networks add availability dependencies',
    'Connectivity failures and edge cases are hard to trigger reliably',
    'Integration tests vary with real-world conditions and data'
  ],
  withTitle: 'With Mockoon',
  with: [
    'Build connected experiences before device integrations are ready',
    'Simulate vehicle status, diagnostics, and telemetry responses',
    'Mock dealer, charging, navigation, and service-provider APIs',
    'Test timeouts, offline states, and unexpected responses consistently',
    'Keep development and automated tests repeatable across teams'
  ],
  features: [
    {
      title:
        'Prototype <span class="text-primary">connected vehicle apps</span>',
      description:
        'Create mock endpoints for vehicle status, location, charging level, and remote commands so mobile teams can develop before vehicle services are connected.',
      imgSrc:
        '/images/solutions/automotive/prototype-connected-vehicle-apps.png',
      imgAlt: 'Illustration of a connected vehicle application API'
    },
    {
      title: 'Simulate <span class="text-primary">vehicle telemetry</span>',
      description:
        'Return realistic diagnostics, sensor readings, and changing vehicle states to validate dashboards, alerts, and data processing workflows.',
      imgSrc: '/images/solutions/automotive/simulate-vehicle-telemetry.png',
      imgAlt: 'Illustration of simulated vehicle telemetry responses'
    },
    {
      title:
        'Integrate <span class="text-primary">charging and mobility services</span>',
      description:
        'Mock station discovery, charger availability, reservations, and session status while connecting electric vehicle experiences to charging networks.',
      imgSrc:
        '/images/solutions/automotive/mock-charging-and-mobility-apis.png',
      imgAlt: 'Illustration of EV charging and mobility API mocks'
    },
    {
      title:
        'Test <span class="text-primary">dealer and service workflows</span>',
      description:
        'Model inventory, appointment booking, service history, and repair updates to validate customer and dealer journeys before partner systems are ready.',
      imgSrc: '/images/solutions/automotive/test-dealer-service-workflows.png',
      imgAlt: 'Illustration of automotive dealer and service API testing'
    }
  ]
};

export default function AutomotiveUseCase() {
  return <IndustrySolutionPage data={data} />;
}
