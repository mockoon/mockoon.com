import { FunctionComponent } from 'react';
import Card from '../components/card';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { CardData } from '../models/common.model';

const features: CardData[] = [
  {
    title: 'Unlimited mocking',
    description:
      'Create an unlimited number of mock API with unlimited number of routes and run them in parallel'
  },
  {
    title: 'Embedded web application',
    topTag: 'Pro',
    topTagClasses: 'text-bg-warning',
    description:
      'Create and edit mock APIs directly in your browser without installing the desktop application.',
    links: [
      {
        src: '/pro/docs/clients/embedded-web-application/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Private and sovereign deployment',
    topTag: 'Pro',
    topTagClasses: 'text-bg-warning',
    description:
      'Self-host Mockoon Pro on-premises, in your private cloud, or on an isolated or air-gapped network with full control over your data.',
    links: [
      {
        src: '/pro/docs/self-hosting/installation/',
        text: 'Installation guide →'
      }
    ]
  },
  {
    title: 'Self-host',
    description:
      'Use the CLI to run your mock APIs in any headless or automated environment: CI, GitHub Actions, Docker containers, etc',
    links: [{ src: '/cli/', text: 'Discover the CLI →' }]
  },

  {
    title: 'OpenAPI Import / export',
    description: 'Mock API import / export with Swagger/OpenAPI format support',
    links: [
      {
        src: '/docs/latest/openapi/import-export-openapi-format/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Mock API deployments',
    topTag: 'Pro',
    topTagClasses: 'text-bg-warning',
    description:
      'Deploy and manage running mock APIs on your private infrastructure with automatic subdomain routing.',
    links: [
      {
        src: '/pro/docs/features/api-mock-deployments/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Authentication and user management',
    topTag: 'Pro',
    topTagClasses: 'text-bg-warning',
    description:
      'Manage invitations and users with local accounts or OpenID Connect (OIDC) Single Sign-On.',
    links: [
      {
        src: '/pro/docs/misc/authentication/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Route regex',
    description:
      'Route regex supported (/.*, /[a-z]{3}, ...), based on ExpressJS syntax'
  },
  {
    title: 'Multiple responses per route',
    description:
      'Serve multiple rules-triggered or random responses with any headers body, or HTTP status codes',
    links: [
      {
        src: '/docs/latest/route-responses/multiple-responses/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Data synchronization and collaboration',
    topTag: 'Pro',
    topTagClasses: 'text-bg-warning',
    description:
      'Synchronize mock APIs across devices and collaborate with your team in real time.',
    links: [
      {
        src: '/pro/docs/features/data-synchronization-team-collaboration/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'CORS',
    description:
      'Automatically send CORS headers (<code>Access-Control-Allow-Origin</code>, etc.) for OPTIONS requests',
    links: [
      {
        src: '/docs/latest/server-configuration/cors/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'HTTPS',
    description: 'Serve your mock API over TLS with a custom certificate',
    links: [
      {
        src: '/docs/latest/server-configuration/serving-over-tls/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Audit trail',
    topTag: 'Pro',
    topTagClasses: 'text-bg-warning',
    description:
      'Track administrative, security, and workspace events across your Mockoon Pro instance.',
    links: [
      {
        src: '/pro/docs/misc/audit-trail/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Response headers',
    description:
      'Add any response headers to your routes and mock API. With auto-completion',
    links: [
      {
        src: '/docs/latest/response-configuration/response-headers/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Simulated latency',
    description: 'Add latency at environment or route level or even both'
  },
  {
    title: 'Stateful CRUD operations',
    description: 'Perform RESTful CRUD operations on fake JSON databases',
    links: [
      {
        src: '/docs/latest/api-endpoints/crud-routes/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Callbacks/webhooks support',
    description: 'Simulate complex API behaviors with callbacks/webhooks',
    links: [
      {
        src: '/docs/latest/callbacks/overview/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Serverless compatibility',
    description:
      'Run your mock APIs in serverless environments: AWS Lambda, GCP/Firebase Functions, etc',
    links: [
      {
        src: '/serverless/',
        text: 'Serverless library →'
      }
    ]
  },
  {
    title: 'Requests and responses logs',
    description:
      'All incoming requests and outgoing responses are logged for easier debugging',
    links: [
      {
        src: '/docs/latest/logging-and-recording/requests-logging/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Auto-mocking',
    description:
      'Auto-mock your API by recording requests and responses from a real API',
    links: [
      {
        src: '/docs/latest/logging-and-recording/auto-mocking-and-recording/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Proxy mode',
    description:
      "Redirect all non-defined routes to the specified host with Mockoon's proxy mode.",
    links: [
      {
        src: '/docs/latest/server-configuration/proxy-mode/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'WebSockets support',
    description: 'Simulate real-time communication using WebSockets',
    links: [
      {
        src: '/docs/latest/api-endpoints/websockets/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'File serving',
    description:
      'File serving with automatic mime type detection and templating support',
    links: [
      {
        src: '/docs/latest/response-configuration/file-serving/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Rich text editor',
    description:
      'Rich text editor for body content supporting multiple languages (JSON, HTML, etc)'
  },
  {
    title: 'Templating',
    description:
      'Templating supported in body, file content and header, with many helpers: url params, query params, JSON body lookup, etc',
    links: [
      { src: '/docs/latest/templating/overview/', text: 'Documentation →' }
    ]
  },
  {
    title: 'Programmable responses',
    description: 'Local, global and environment variables support in responses',
    links: [
      {
        src: '/docs/latest/variables/global-variables/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Auto-save',
    description:
      'Real-time auto save as you type. Never worry again about saving!'
  },
  {
    title: 'Docker support for the CLI',
    description:
      'Run the CLI directly as an NPM package or use the provided Docker image',
    links: [
      {
        src: 'https://github.com/mockoon/mockoon/tree/main/packages/cli#docker',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Privacy friendly',
    description:
      'Offline and privacy friendly making Mockoon the best choice for highly regulated or high-security environments'
  },
  {
    title: 'Offline first',
    description: 'No account, no sign-up, no cloud deployment required'
  }
];

const nonProFeatures = features.filter((feature) => feature.topTag !== 'Pro');
const proFeatures = features.filter((feature) => feature.topTag === 'Pro');

const Features: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Mockoon complete list of features'
        description='List of all features offered by Mockoon, the API sandboxing and mock API creation tool compatible with Windows, Mac and Linux.'
        ogType='article'
      />
      <Hero
        title='Why Mockoon?'
        subtitle='Mockoon offers tons of features that make API sandboxing and virtualization a breeze.'
      />

      <section className='py-5 py-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Mockoon Pro features</h2>
            </div>
            {proFeatures.map((feature) => {
              return (
                <div
                  key={feature.title}
                  className='mx-auto my-4 col-12 col-lg-4 d-flex'
                >
                  <Card data={feature} cover={false} border />
                </div>
              );
            })}
          </div>

          <div className='row mt-5 mt-lg-8'>
            <div className='col-12'>
              <h2>Open source features</h2>
            </div>
            {nonProFeatures.map((feature) => {
              return (
                <div
                  key={feature.title}
                  className='mx-auto my-4 col-12 col-lg-4 d-flex'
                >
                  <Card data={feature} cover={false} border />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
