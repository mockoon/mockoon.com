import Link from 'next/link';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

export default function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title={'What is Mockoon?'}
        description='New to Mockoon? Learn more about our popular open-source API mocking tool and the benefits of API mocking.'
      />

      <Hero
        title='What is <span class="text-primary">Mockoon</span>?'
        subtitle='New to Mockoon? Learn more about our popular open-source API mocking tool and the benefits of API mocking.'
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <p>
                Mockoon is a popular open-source API mocking tool{' '}
                <strong>
                  created in 2017 by{' '}
                  <Link href={'https://github.com/255kb'}>
                    Guillaume Monnet
                  </Link>
                </strong>
                . It allows developers to quickly create mock APIs and test
                their applications without relying on third-party APIs that can
                be unreliable, slow, or expensive to use in development and
                testing environments.
              </p>
              <p>
                Mockoon is a <strong>desktop application</strong> available on
                the major operating systems{' '}
                <strong>
                  accompanied by a CLI, Docker image, and several libraries
                </strong>{' '}
                to help developers{' '}
                <strong>
                  integrate their API mocks into their existing workflows
                </strong>
                , servers, and CI/CD pipelines.
                <br />
                Mockoon is <strong>easy to use, fast, and reliable</strong>. It
                is built with modern web technologies and is constantly updated
                with new features and improvements.
              </p>
              <p>
                Mockoon is{' '}
                <strong>used by thousands of developers and companies</strong>{' '}
                around the world to speed up their development process and
                reduce dependencies on external services. It has been{' '}
                <strong>downloaded more than 700k times</strong> and has a
                vibrant community of contributors and users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            Benefits of using Mockoon and API mocking
          </h2>
          <div className='row g-10 justify-content-center'>
            <div className='col-lg-4'>
              <div className='row'>
                <div className='col-12 col-md-8 m-auto'>
                  <img
                    src='/images/illustrations/use-cases/api-integration.svg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p>
                    <strong>
                      Speed up development and third-party API integration
                    </strong>{' '}
                    by reducing dependency on external services and their
                    limitations: rate limits, costs, availability, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='row'>
                <div className='col-12 col-md-8 m-auto'>
                  <img
                    src='/images/illustrations/use-cases/integration-testing.svg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p>
                    Test your applications in a{' '}
                    <strong>controlled environment</strong> with predictable
                    responses, status codes, and latencies. Easily{' '}
                    <strong>simulate edge cases and error scenarios</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='row'>
                <div className='col-12 col-md-8 m-auto'>
                  <img
                    src='/images/illustrations/use-cases/onboarding.svg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p>
                    <strong>Onboard new team members faster</strong> by
                    providing them with a{' '}
                    <strong>consistent and reliable environment</strong> to test
                    and develop their applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-6'>
            <div className='col-12 col-md-4'>
              <Link
                href='/use-cases/'
                className='btn w-100 btn-primary btn-primary-subtle d-flex align-items-center lift'
              >
                View all the use cases
                <i className='icon-arrow_forward ms-auto'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <h2 className='fw-bold position-relative mt-8 text-center'>
                Main features
              </h2>
              <ul>
                <li>Powerful rule-based request matching</li>
                <li>Stateful responses with dynamic values and templating</li>
                <li>CRUD operations on fake JSON databases</li>
                <li>Automated mock creation with record and replay</li>
                <li>OpenAPI and Swagger import and export</li>
                <li>Support for callbacks/webhooks</li>
                <li>Proxying and partial mocking of third-party APIs</li>
                <li>Self-hosting with CLI and Docker image</li>
              </ul>
              <div className='row justify-content-center mt-6'>
                <div className='col-lg-8'>
                  <Link
                    href='/features/'
                    className='btn w-100 btn-primary btn-primary-subtle d-flex align-items-center lift'
                  >
                    Discover all features
                    <i className='icon-arrow_forward ms-auto'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h2 className='fw-bold position-relative mt-8 text-center'>
                Mockoon's ecosystem
              </h2>
              <p>
                Mockoon offers a complete ecosystem of tools and libraries to
                help developers integrate API mocking into their existing
                workflows and environments.
                <br />
                <Link href='/download/'>
                  <strong>Mockoon Desktop</strong>
                </Link>{' '}
                is the main application that allows developers to{' '}
                <strong>create and manage mock APIs</strong> with a graphical
                user interface.
              </p>
              <p>
                <Link href='/cli/'>
                  <strong>Mockoon CLI</strong>
                </Link>{' '}
                is a command-line interface that allows developers to{' '}
                <strong>self-host their mock APIs</strong> and{' '}
                <strong>integrate them into their CI/CD</strong> pipelines and
                servers. The CLI is also available as a{' '}
                <Link href='https://hub.docker.com/r/mockoon/cli'>
                  <strong>Docker image</strong>
                </Link>
                .
              </p>
              <p>
                An{' '}
                <Link href='/serverless/'>
                  <strong>NPM library</strong>
                </Link>{' '}
                is also available to{' '}
                <strong>deploy and manage mock APIs programmatically</strong>.
                It is compatible with most{' '}
                <strong>cloud functions providers</strong>: AWS Lambda, Google
                Cloud Functions, Netlify Functions, etc.
              </p>
              <div className='text-center my-4'>
                <img
                  src='/images/what-is-mockoon/desktop-cli-screenshot.png'
                  className='img-fluid w-md-50'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-6'>
            <div className='col-12 col-md-4'>
              <Link
                href='/download/'
                className='btn w-100 btn-primary btn-primary-subtle d-flex align-items-center lift'
              >
                Download the desktop app
                <i className='icon-arrow_forward ms-auto'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h2 className='fw-bold position-relative mt-8 text-center'>
                What is Mockoon Cloud?
              </h2>
              <p>
                Mockoon Cloud allows developers to{' '}
                <strong>collaborate and share their API mocks</strong> in the
                cloud. It streamlines the API mocking process and accelerates
                the development of APIs and applications.
                <br />
                Several features are available in Mockoon Cloud:
              </p>
              <ul>
                <li>
                  <strong>Real-time collaboration</strong>: work on API mocks
                  with your team in real time.
                </li>
                <li>
                  <strong>Data synchronization</strong>: keep your data in sync
                  across all your devices.
                </li>
                <li>
                  <strong>Cloud deployments</strong>: deploy your mock APIs to
                  the cloud with a single click and share them with your team.
                </li>
                <li>
                  <strong>Enterprise-grade support</strong>: get priority
                  support from the Mockoon Team.
                </li>
                <li>
                  <strong>AI-powered API mocks generation</strong>: prototype
                  faster with AI-generated JSON templates and endpoints.
                </li>
              </ul>
              <div className='text-center my-4'>
                <img
                  src='/images/what-is-mockoon/cloud-illustration.svg'
                  className='img-fluid w-md-50'
                  alt='illustration showing mockoon logo with the features written around it'
                />
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-6'>
            <div className='col-12 col-md-4'>
              <Link
                href='/cloud/'
                className='btn w-100 btn-primary btn-primary-subtle d-flex align-items-center lift'
              >
                Discover Mockoon Cloud
                <i className='icon-arrow_forward ms-auto'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
