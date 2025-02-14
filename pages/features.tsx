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
    title: 'Web application',
    topTag: 'Cloud',
    topTagClasses: 'text-bg-warning',
    description:
      'Collaborate on mock APIs directly in your browser with our web application, no desktop installation required.',
    links: [
      {
        src: '/docs/latest/mockoon-cloud/web-application/',
        text: 'Documentation →'
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
    title: 'Deploy in the cloud',
    topTag: 'Cloud',
    topTagClasses: 'text-bg-warning',
    description:
      'Deploy your mock APIs online with Mockoon Cloud and share them with your team',
    links: [
      {
        src: '/docs/latest/mockoon-cloud/api-mock-cloud-deployments/',
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
    title: 'Real-time collaboration',
    topTag: 'Cloud',
    topTagClasses: 'text-bg-warning',
    description: 'Collaborate with your team in real-time on your mock APIs',
    links: [
      {
        src: '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/',
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
    title: 'Cloud synchronization',
    topTag: 'Cloud',
    topTagClasses: 'text-bg-warning',
    description: 'Synchronize your mock APIs across all your devices',
    links: [
      {
        src: '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/',
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
    title: 'Quick prototyping using AI',
    topTag: 'Cloud',
    topTagClasses: 'text-bg-warning',
    description:
      'Use our read-to-use templates and AI assistant to quickly prototype your mock APIs',
    links: [
      {
        src: '/ai-powered-api-mocking/',
        text: 'Learn more →'
      }
    ]
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

const Features: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Mockoon complete list of features'
        description='List of all features offered by Mockoon, the mock API creation tool compatible with Windows, Mac and Linux.'
        ogType='article'
      />
      <Hero
        title='Why Mockoon?'
        subtitle='Mockoon offers tons of features that makes API mocking a breeze.'
      />

      <section className='py-5 py-lg-10'>
        <div className='container'>
          <div className='row'>
            {features.map((feature) => {
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
