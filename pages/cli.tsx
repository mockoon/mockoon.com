import { FunctionComponent } from 'react';
import CodeBlock from '../components/code-block';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Quote from '../components/quote';
import Layout from '../layout/layout';

const benefits = [
  {
    title: 'Full Feature Parity',
    description:
      "Supports all of Mockoon's features: dynamic templating, response rules, proxy mode, and OpenAPI compatibility.",
    icon: 'icon-tune',
    link: '/features/',
    linkText: 'View all features'
  },
  {
    title: 'Lightweight & Fast',
    description:
      'Deploy lightning-fast mock servers in your CI environment with minimal resource footprint using NPM or Docker.',
    icon: 'icon-speed',
    link: 'https://github.com/mockoon/mockoon/tree/main/packages/cli#installation',
    linkText: 'How to use it',
    blank: true
  },
  {
    title: 'Run Anywhere',
    description:
      'Available as an NPM package, official Docker image, and GitHub Action for any CI/CD platform.',
    icon: 'icon-cloud',
    link: '/tutorials/self-host-mock-api-server-cli/',
    linkText: 'Getting started tutorial'
  },
  {
    title: 'Automated Testing',
    description:
      'Eliminate external dependencies and rate limits from automated integration and regression test suites.',
    icon: 'icon-verified'
  }
];

const CLI: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Self-host your mocks with Mockoon CLI'
        description='Run your mock APIs in your CI/CD pipeline, on your servers or in your cloud environments with Mockoon CLI'
        image='cli/cli-hero.png'
      />
      <Hero
        title='<span class="text-primary">Self-host</span> your mocks with Mockoon CLI'
        subtitle='Run your mock APIs in your CI/CD pipeline, on your servers or in your cloud environments with Mockoon CLI'
        cta={[
          {
            text: 'Installation instructions →',
            link: 'https://github.com/mockoon/mockoon/tree/main/packages/cli#installation',
            blank: true,
            subtitle: 'MIT license'
          }
        ]}
        mainPicture='/images/cli/cli-hero.png'
        mainPictureAlt='Mockoon CLI screenshot'
        mainPictureWidth={1200}
        mainPictureHeight={430}
      />
      <section>
        <div className='container'>
          <Quote colorScheme='warning'>
            <h4 className='my-4 d-flex align-items-center'>
              <div>
                📢 <strong>Mockoon Pro</strong> is now available. Self-host team
                collaboration, data synchronization, and API mock deployments on
                your own infrastructure.
              </div>
              <div className='ms-auto'>
                <a href='/blog/mockoon-pro-self-hosted-beta/'>
                  Read the announcement
                </a>
              </div>
            </h4>
          </Quote>
        </div>
      </section>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            The perfect companion for headless and automated environments
          </h2>
          <div className='row g-6 justify-content-center'>
            {benefits.map((benefit, index) => (
              <div key={index} className='col-lg-6 col-xl-3'>
                <div className='text-center'>
                  <div className='icon-wrapper mb-3'>
                    <i
                      className={`${benefit.icon} text-primary`}
                      style={{ fontSize: '2.5rem' }}
                    ></i>
                  </div>
                  <h4 className='fw-bold mb-2'>{benefit.title}</h4>
                  <p className='text-muted mb-3'>{benefit.description}</p>
                  {benefit.link && (
                    <a
                      href={benefit.link}
                      className='fs-sm text-primary text-decoration-none'
                      target={benefit.blank ? '_blank' : undefined}
                      rel={benefit.blank ? 'noopener' : undefined}
                    >
                      {benefit.linkText} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-8 py-lg-10'>
        <div className='container'>
          <div className='row justify-content-center mb-6'>
            <div className='col-lg-8 text-center'>
              <h2 className='fw-bold mb-4'>Quick start guides</h2>
              <p className='text-muted'>
                Run your mock APIs in seconds across your favorite tools and
                environments
              </p>
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
                code={`$ docker run -d --mount type=bind,source=/home/your-data-file.json,target=/home/mockoon/data/your-data-file.json,readonly -p 3000:3000 mockoon/cli:latest --data /home/mockoon/data/your-data-file.json --port 3000`}
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
  uses: mockoon/cli-action@v3
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
                  href='/tutorials/self-host-mock-api-server-cli/'
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
