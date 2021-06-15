import { FunctionComponent } from 'react';
import Download from '../components/download';
import Hero from '../components/hero';
import Meta from '../components/meta';
import SimpleCards from '../components/simple-cards';
import Layout from '../layout/layout';
import { ItemCard } from '../models/common.model';

const features: ItemCard = [
  {
    title: 'Unlimited mocking',
    description:
      'Create an unlimited number of mock API with unlimited number of routes and run them in parallel.'
  },
  {
    title: 'Run your mock anywhere',
    description:
      'Use the CLI to run your mock APIs in any headless or automated environment: CI, GitHub Actions, Docker containers, etc.',
    link: '/cli/',
    linkText: 'Discover the CLI'
  },
  {
    title: 'Import / export',
    description:
      'Mock API import / export with Swagger/OpenAPI format support.',
    link: '/docs/latest/import-export-data/'
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
    link: '/docs/latest/route-responses/multiple-responses/'
  },
  {
    title: 'CORS',
    description:
      'Automatically send CORS headers (<code>Access-Control-Allow-Origin</code>, etc.) for OPTIONS requests.',
    link: '/docs/latest/cors/'
  },
  {
    title: 'HTTPS',
    description: 'Serve your mock API over TLS with self-signed certificate.',
    link: '/docs/latest/https/'
  },
  {
    title: 'Response headers',
    description:
      'Add any response headers to your routes and mock API. With auto-completion.',
    link: '/docs/latest/response-headers/'
  },
  {
    title: 'Latency',
    description: 'Add latency at environment or route level or even both.'
  },
  {
    title: 'Requests and responses logs',
    description:
      'All incoming requests and outgoing responses are logged for easier debugging.',
    link: '/docs/latest/requests-logging/'
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
    link: '/docs/latest/templating/overview/'
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
    link: 'https://github.com/mockoon/cli#docker',
    linkText: 'Documentation'
  },
  {
    title: 'Offline',
    description: 'No account, no sign-up, no cloud deployment required.'
  }
];

const Features: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='Mockoon complete list of features'
        description='List of all features offered by Mockoon, the mock API creation tool compatible with Windows, Mac and Linux.'
        ogType='article'
      />
      <Hero
        title='Why Mockoon?'
        subtitle='Mockoon offers tons of features that makes API mocking a breeze.'
      />

      <Download />

      <div className='section'>
        <div className='container'>
          <div className='row'>
            <SimpleCards items={features} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
