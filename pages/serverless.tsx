import { FunctionComponent } from 'react';
import Card from '../components/card';
import CodeBlock from '../components/code-block';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Terminal from '../components/terminal';
import Layout from '../layout/layout';
import { CardData } from '../models/common.model';

const features: CardData[] = [
  {
    title: "Supports all Mockoon's features",
    description:
      "Our Serverless library supports all of Mockoon's features: dynamic templating, response rules, proxy mode, etc.",
    links: [{ src: '/features/', text: 'View all features' }]
  },
  {
    title: 'Lightweight and fast',
    description:
      'Deploy lighting fast mock servers in your serverless environment with a simple and easy-to-use NPM package.',
    links: [
      {
        src: 'https://github.com/mockoon/mockoon/tree/main/packages/serverless#using-this-package',
        text: 'How to use it',
        blank: true
      }
    ]
  },
  {
    title: 'Compatible with all providers',
    description:
      'Deploy a cloud function compatible with any provider: AWS Lambda, GCP Functions, Firebase Functions, etc.',
    links: [
      {
        src: 'https://github.com/mockoon/mockoon/tree/main/packages/serverless#request-listener-express-application',
        text: 'See code samples',
        blank: true
      }
    ]
  }
];

const Serverless: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Deploy your mocks in serverless environments'
        description='Mockoon Serverless package takes your mock APIs in cloud functions and serverless environments. Easy to use, lightweight and fast.'
        image='serverless-screenshot.png'
      />
      <Hero
        title="Deploy your mocks in <span class='text-primary'>serverless environments</span>"
        subtitle='Mockoon Serverless package takes your mock APIs in cloud functions and serverless environments. Easy to use, lightweight and fast.'
        cta={[
          {
            text: 'Usage instructions →',
            link: 'https://github.com/mockoon/mockoon/tree/main/packages/serverless#using-this-package',
            blank: true,
            subtitle: 'MIT license'
          }
        ]}
        mainPicture='/images/serverless-screenshot.png'
        mainPictureAlt='Mockoon Serverless screenshot'
        mainPictureWidth={1200}
        mainPictureHeight={772}
      />
      <section className='py-5 py-lg-10'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-12'>
              <div className='text-center'>
                <h2 className='mb-10'>
                  Mockoon's perfect complement for cloud functions and
                  serverless environments.
                </h2>
              </div>
            </div>
            <div className='col-12'>
              <div className='row'>
                {features.map((feature) => {
                  return (
                    <div
                      key={feature.title}
                      className='mx-auto my-lg-3 col-12 col-lg-4'
                    >
                      <Card data={feature} cover={false} border />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='row py-8 justify-content-center'>
            <div className='col-md-6'>
              <h3 className='text-center'>NPM package installation</h3>
              <Terminal lines={['npm install @mockoon/serverless']} />
            </div>
          </div>
          <div className='row py-8 justify-content-center'>
            <div className='col-md-6'>
              <h3 className='text-center'>AWS Lambda quick start</h3>
              <pre>
                <CodeBlock
                  code={`const mockoon = require('@mockoon/serverless');
const mockEnv = require('./mockoon-datafile.json');

const mockoonServerless = new mockoon.MockoonServerless(mockEnv);

module.exports.handler = mockoonServerless.awsHandler();`}
                  dark
                  language='typescript'
                />
              </pre>
            </div>
            <div className='col-md-6'>
              <h3 className='text-center'>Firebase Functions quick start</h3>
              <pre>
                <CodeBlock
                  code={`import * as functions from 'firebase-functions';
import { MockoonServerless } from '@mockoon/serverless';

const mockEnv = require('./mockoon-datafile.json');

const app = new MockoonServerless(mockEnv);
exports.app = functions.https.onRequest(app);`}
                  dark
                  language='typescript'
                />
              </pre>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='alert alert-dark' role='alert'>
                🚀 Learn how to use Mockoon CLI in 5 minutes with our{' '}
                <a
                  href='/tutorials/run-mock-api-anywhere-cli/'
                  className='text-gray-500'
                >
                  getting started tutorial
                </a>
                !
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Serverless;
