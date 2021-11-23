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
      'Create an unlimited number of mock API with unlimited number of routes and run them in parallel.'
  },
  {
    title: 'Run your mock anywhere',
    description:
      'Use the CLI to run your mock APIs in any headless or automated environment: CI, GitHub Actions, Docker containers, etc.',
    links: [{ src: '/cli/', text: 'Discover the CLI →' }]
  },
  {
    title: 'Import / export',
    description:
      'Mock API import / export with Swagger/OpenAPI format support.',
    links: [
      {
        src: '/docs/latest/mockoon-data-files/import-export-openapi-format/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'Route regex',
    description:
      'Route regex supported (/.*, /[a-z]{3}, ...), based on ExpressJS syntax.'
  },
  {
    title: 'Multiple responses per route',
    description:
      'Serve multiple rules-triggered or random responses with any headers body, or HTTP status codes.',
    links: [
      {
        src: '/docs/latest/route-responses/multiple-responses/',
        text: 'Documentation →'
      }
    ]
  },
  {
    title: 'CORS',
    description:
      'Automatically send CORS headers (<code>Access-Control-Allow-Origin</code>, etc.) for OPTIONS requests.',
    links: [{ src: '/docs/latest/cors/', text: 'Documentation →' }]
  },
  {
    title: 'HTTPS',
    description: 'Serve your mock API over TLS with self-signed certificate.',
    links: [{ src: '/docs/latest/https/', text: 'Documentation →' }]
  },
  {
    title: 'Response headers',
    description:
      'Add any response headers to your routes and mock API. With auto-completion.',
    links: [{ src: '/docs/latest/response-headers/', text: 'Documentation →' }]
  },
  {
    title: 'Latency',
    description: 'Add latency at environment or route level or even both.'
  },
  {
    title: 'Requests and responses logs',
    description:
      'All incoming requests and outgoing responses are logged for easier debugging.',
    links: [{ src: '/docs/latest/requests-logging/', text: 'Documentation →' }]
  },
  {
    title: 'Proxy mode',
    description:
      "Redirect all non-defined routes to the specified host with Mockoon's proxy mode."
  },
  {
    title: 'File serving',
    description:
      'File serving with automatic mime type detection and templating support.'
  },
  {
    title: 'Rich text editor',
    description:
      'Rich text editor for body content supporting multiple languages (JSON, HTML, etc).'
  },
  {
    title: 'Templating',
    description:
      'Templating supported in body, file content and header, with many helpers: url params, query params, JSON body lookup, etc.',
    links: [
      { src: '/docs/latest/templating/overview/', text: 'Documentation →' }
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
      'Run the CLI directly as an NPM package or use the provided Docker image.',
    links: [
      { src: 'https://github.com/mockoon/cli#docker', text: 'Documentation →' }
    ]
  },
  {
    title: 'Offline first',
    description: 'No account, no sign-up, no cloud deployment required.'
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

      <div className='section'>
        <div className='container'>
          <div className='row'>
            {features.map((feature) => {
              return (
                <div
                  key={feature.title}
                  className='mx-auto my-lg-3 col-12 col-lg-4 d-flex'
                >
                  <Card data={feature} cover={false} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
