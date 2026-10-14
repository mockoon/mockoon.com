import IndustrySolutionPage from '../../components/industry-solution-page';

const data = {
  metaTitle: 'Test industrial automation APIs with realistic mocks',
  metaDescription:
    'Develop and validate industrial software integrations with mock APIs for equipment, telemetry, manufacturing systems, and operational workflows.',
  heroTitle:
    'Connect industrial systems <span class="text-primary">before the production line is ready</span>',
  heroImage:
    '/images/solutions/industrial-automation/industrial-automation-hero.png',
  heroImageAlt: 'Illustration of industrial automation API development',
  industry: 'industrial automation',
  benefits: [
    {
      title: 'Develop Off the Line',
      description:
        'Build applications without reserving production equipment or factory access',
      icon: 'icon-speed'
    },
    {
      title: 'Isolate Integrations',
      description:
        'Test services independently across manufacturing and operations systems',
      icon: 'icon-device_hub'
    },
    {
      title: 'Reproduce Faults',
      description:
        'Simulate device errors, delayed data, and unavailable downstream systems',
      icon: 'icon-tune'
    },
    {
      title: 'Keep Environments Safe',
      description:
        'Validate software behavior without issuing commands to live equipment',
      icon: 'icon-security'
    }
  ],
  comparisonTitle: 'Live equipment dependencies vs API mocking',
  comparisonDescription:
    'Build and test industrial applications against controlled service behavior before deploying to operational environments.',
  withoutTitle: 'Relying on live systems',
  without: [
    'Development tied to equipment, lab, or factory availability',
    'Risk of test commands affecting operational devices',
    'Device faults and production edge cases are hard to reproduce',
    'Integration tests require several systems to be available together',
    'Unstable device data makes automated tests difficult to repeat'
  ],
  withTitle: 'With Mockoon',
  with: [
    'Develop against APIs without waiting for equipment access',
    'Exercise application logic without sending commands to live devices',
    'Simulate sensor values, faults, delays, and service interruptions',
    'Test manufacturing integrations independently and in parallel',
    'Use predictable responses for repeatable development and CI tests'
  ],
  features: [
    {
      title:
        'Mock <span class="text-primary">equipment and gateway APIs</span>',
      description:
        'Represent machines, edge gateways, and device services with endpoints for status, commands, and configuration, giving application teams a stable integration target.',
      imgSrc:
        '/images/solutions/industrial-automation/mock-equipment-gateway-apis.png',
      imgAlt: 'Illustration of equipment and industrial gateway API mocks'
    },
    {
      title: 'Generate <span class="text-primary">realistic telemetry</span>',
      description:
        'Return changing sensor readings, machine states, and production metrics to build and test monitoring dashboards without connecting to physical equipment.',
      imgSrc:
        '/images/solutions/industrial-automation/generate-realistic-telemetry.png',
      imgAlt: 'Illustration of generated industrial telemetry responses'
    },
    {
      title:
        'Connect <span class="text-primary">MES, ERP, and cloud services</span>',
      description:
        'Simulate work orders, inventory, production events, and status updates across manufacturing systems while integrations are still being designed.',
      imgSrc:
        '/images/solutions/industrial-automation/connect-manufacturing-systems.png',
      imgAlt: 'Illustration of MES and ERP API integration testing'
    },
    {
      title:
        'Exercise <span class="text-primary">fault and recovery paths</span>',
      description:
        'Model timeouts, malformed readings, maintenance states, and unavailable services to verify that applications handle interruptions predictably.',
      imgSrc: '/images/solutions/industrial-automation/test-fault-recovery.png',
      imgAlt: 'Illustration of industrial fault and recovery scenarios'
    }
  ]
};

export default function IndustrialAutomationUseCase() {
  return <IndustrySolutionPage data={data} />;
}
