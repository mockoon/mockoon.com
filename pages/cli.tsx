import { FunctionComponent } from 'react';
import Card from '../components/card';
import CodeBlock from '../components/code-block';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Quote from '../components/quote';
import Layout from '../layout/layout';
import { CardData } from '../models/common.model';

const features: CardData[] = [
  {
    title: "Supports all Mockoon's features",
    description:
      "The CLI supports all of Mockoon's features: dynamic templating, response rules, proxy mode, OpenAPI compatibility, etc.",
    links: [{ src: '/features/', text: 'View all features' }]
  },
  {
    title: 'Lightweight and fast',
    description:
      'Deploy lighting fast mock servers in your CI environment with a simple and easy to use NPM package.',
    links: [
      {
        src: 'https://github.com/mockoon/mockoon/tree/main/packages/cli#installation',
        text: 'How to use it',
        blank: true
      }
    ]
  },
  {
    title: 'Run your mocks everywhere',
    description:
      'Also available as a Docker image and a GitHub Action, run your mock APIs in your favorite CI platform!',
    links: [
      {
        src: '/tutorials/run-mock-api-anywhere-cli/',
        text: 'Getting started tutorial'
      }
    ]
  }
];

const CLI: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Take Mockoon to the command line'
        description='Mockoon CLI takes Mockoon where it has never been before: servers, CI environments, etc. Lightweight and fast.'
        image='cli-hero.png'
      />
      <Hero
        title="Take Mockoon to the <span class='text-primary'>command line</span>"
        subtitle='Mockoon CLI takes Mockoon where it has never been before. Lightweight and fast.'
        cta={[
          {
            text: 'Installation instructions →',
            link: 'https://github.com/mockoon/mockoon/tree/main/packages/cli#installation',
            blank: true,
            subtitle: 'MIT license'
          }
        ]}
        mainPicture='/images/cli-hero.png'
        mainPictureAlt='Mockoon CLI screenshot'
        mainPictureWidth={1200}
        mainPictureHeight={430}
      />
      <section>
        <div className='container'>
          <Quote colorScheme='warning'>
            <h4 className='my-4 d-flex align-items-center'>
              <div>
                📢 <strong>Cloud deployments</strong> are now available in{' '}
                <strong>Mockoon Cloud</strong>. Supercharge your API development
                now!
              </div>
              <div className='ms-auto'>
                <a href='/blog/mock-api-cloud-deployments-release/'>
                  Learn more
                </a>
              </div>
            </h4>
          </Quote>
        </div>
      </section>

      <section className='py-8 py-lg-10'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-12'>
              <div className='text-center'>
                <h2 className='fw-medium'>
                  Mockoon's perfect complement for all your headless and
                  automated environments.
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
                      <Card data={feature} cover={false} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='row py-8'>
            <div className='col-md-6'>
              <h3 className='text-center fw-medium'>
                NPM package quick start
                <a
                  href='https://www.npmjs.com/package/@mockoon/cli'
                  className='text-decoration-none'
                  target='_blank'
                  rel='noopener'
                >
                  <i
                    className='text-gray-700 icon-open ps-2'
                    aria-hidden='true'
                  ></i>
                </a>
              </h3>

              <CodeBlock
                code={`$ npm install -g @mockoon/cli
$ mockoon-cli start --data ./data-file.json`}
                lineBreak
                language='bash'
              />
            </div>
            <div className='col-md-6'>
              <h3 className='text-center fw-medium'>
                Docker image quick start
                <a
                  href='https://hub.docker.com/r/mockoon/cli'
                  className='text-decoration-none'
                  target='_blank'
                  rel='noopener'
                >
                  <i
                    className='text-gray-700 icon-open ps-2'
                    aria-hidden='true'
                  ></i>
                </a>
              </h3>
              <CodeBlock
                code={`$ docker run -d --mount type=bind,source=/data-file.json,target=/data,readonly -p 3000:3000 mockoon/cli:latest -d data -p 3000`}
                lineBreak
                language='bash'
              />
            </div>
          </div>
          <div className='row py-5 justify-content-center'>
            <div className='col-md-8'>
              <h3 className='text-center fw-medium'>
                GitHub Action quick start
                <a
                  href='https://github.com/marketplace/actions/mockoon-cli'
                  className='text-decoration-none'
                  target='_blank'
                  rel='noopener'
                >
                  <i
                    className='text-gray-700 icon-open ps-2'
                    aria-hidden='true'
                  ></i>
                </a>
              </h3>
              <pre>
                <CodeBlock
                  code={`- name: Run Mockoon CLI
  uses: mockoon/cli-action@v2
  with:
    # Mockoon CLI version, default to 'latest'
    version: "latest"
    # Mockoon local data file or URL
    data-file: "./mockoon-data.json"
    # port, default to 3000
    port: 3000
- name: Make test call
  run: curl -X GET http://localhost:3000/endpoint`}
                  lineBreak
                  language='yaml'
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

export default CLI;
