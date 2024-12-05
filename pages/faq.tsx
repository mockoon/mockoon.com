import Link from 'next/link';
import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Faq: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Frequently asked questions (FAQ)'
        description='Find the most frequently asked questions about Mockoon, the free cross-platform desktop mock REST API servers creation tool.'
        ogType='article'
      />

      <Hero title='Frequently asked questions' />

      <section className='container pb-8'>
        <div className='row'>
          <div className='col-12'>
            <div className='accordion shadow-light-lg mb-5 mb-lg-6'>
              <div className='accordion-item'>
                <div className='accordion-button'>
                  <h3
                    id='how-does-mockoon-mock-api-creation-works'
                    className='me-4 fw-medium'
                  >
                    What is API mocking?
                  </h3>
                </div>
                <div className='accordion-collapse'>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      To learn more about APIs and API mocking in general, you
                      can read our{' '}
                      <a href='/articles/api-guide-what-are-api/'>API</a> and{' '}
                      <a href='/articles/what-is-api-mocking/'>API mocking</a>{' '}
                      guides.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-button'>
                  <h3
                    id='how-does-mockoon-mock-api-creation-work'
                    className='me-4 fw-medium'
                  >
                    How does Mockoon mock API creation work?
                  </h3>
                </div>
                <div className='accordion-collapse'>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Unlike many other mocking tools, Mockoon is a desktop
                      application using a local Node.js server to avoid latency
                      and the hassle of deploying through a remote service. You
                      can read our{' '}
                      <a href='/tutorials/getting-started/'>
                        getting started tutorial
                      </a>{' '}
                      for an overview of how Mockoon works.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-button'>
                  <h3
                    id='does-mockoon-need-elevated-rights-to-run'
                    className='me-4 fw-medium'
                  >
                    Does Mockoon need elevated rights to run?
                  </h3>
                </div>
                <div className='accordion-collapse'>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      No, Mockoon can be run in most environments by regular
                      non-privileged users.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-button'>
                  <h3
                    id='does-mockoon-work-behind-a-company-firewall'
                    className='me-4 fw-medium'
                  >
                    Does Mockoon work behind a company firewall?
                  </h3>
                </div>

                <div className='accordion-collapse'>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Mockoon creates a local mock server running on Node.js and
                      does not require internet access. The server is then made
                      available on all local network adapters (localhost,
                      127.0.0.1, 192.168.x.x, etc.) on the port you define. If
                      the machine on which Mockoon is running has open ports on
                      the local network, other users will be able to access it.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='does-mockoon-require-an-active-internet-connection'
                    className='me-4 fw-medium'
                  >
                    Does Mockoon require an active internet connection?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      No, you don't need an internet connection to use Mockoon.
                      Everything runs locally.
                      <br />
                      However, an internet connection is required to use our{' '}
                      <a href='/cloud/'>cloud services</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='do-you-need-an-account-to-create-mock-apis'
                    className='me-4 fw-medium'
                  >
                    Do you need an account to create mock APIs?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      No, you don't need to sign up or create an account to use
                      Mockoon.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3 id='does-mockoon-offer-a-cli' className='me-4 fw-medium'>
                    Does Mockoon offer a CLI?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, Mockoon has an <a href='/cli/'>official CLI</a> that
                      allows you to run all your mock APIs in any headless or
                      automated environment: servers, CI, GitHub Actions, Docker
                      containers, etc. A Docker image is available on{' '}
                      <a
                        href='https://hub.docker.com/u/mockoon'
                        target='_blank'
                        rel='noopener'
                      >
                        Mockoon's Docker Hub
                      </a>{' '}
                      as well as a{' '}
                      <a
                        href='https://github.com/marketplace/actions/mockoon-cli'
                        target='_blank'
                        rel='noopener'
                      >
                        GitHub Action
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='is-mockoon-compatible-serverless'
                    className='me-4 fw-medium'
                  >
                    Is Mockoon compatible with cloud functions and serverless
                    environments?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, Mockoon has an{' '}
                      <a href='/serverless/'>official NPM package</a> that
                      allows you to run all your mock API servers in cloud
                      functions and serverless environments: AWS Lambda, GCP
                      Functions, Firebase Functions, etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='is-mockoon-compatible-with-openapi'
                    className='me-4 fw-medium'
                  >
                    Is Mockoon compatible with OpenAPI?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, Mockoon supports most of the OpenAPI specifications
                      (v2 and v3) both for import and export. You can learn more
                      on{' '}
                      <a href='/docs/latest/openapi/import-export-openapi-format/'>
                        Mockoon's OpenAPI documentation page
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='is-mockoon-free-and-or-open-source'
                    className='me-4 fw-medium'
                  >
                    Is Mockoon free and/or open source?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Mockoon is 100% free AND open source (
                      <a
                        href='https://github.com/mockoon/mockoon/blob/main/LICENSE.md'
                        target='_blank'
                        rel='noopener'
                      >
                        MIT license
                      </a>
                      ). We also have a Cloud version that offers additional
                      features (see below).
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='is-mockoon-free-and-or-open-source'
                    className='me-4 fw-medium'
                  >
                    Do you offer a Cloud version?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, we have <a href='/cloud/'>Cloud plans</a> that offers
                      additional features like AI-powered API mocks generation,
                      data synchronization and real-time collaboration, cloud
                      deployments, enterprise-grade support, and more!
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='is-mockoon-free-and-or-open-source'
                    className='me-4 fw-medium'
                  >
                    Do you offer enterprise-grade support?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, you can get enterprise-grade support with our{' '}
                      <a href='/cloud/'>Cloud plans</a>. We can also provide
                      priority support separately.{' '}
                      <a href='/contact-form/'>Contact us</a> for more
                      information.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3 id='where-are-my-data-stored' className='me-4 fw-medium'>
                    Do you use my data or content for AI training?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <div className='text-gray-700'>
                      <p>
                        No. We do not use your mock API data or content for AI
                        training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3 id='where-are-my-data-stored' className='me-4 fw-medium'>
                    Where are my data stored?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <div className='text-gray-700'>
                      <p>
                        Mockoon application data and settings are stored in your
                        operating system user data folder:
                      </p>
                      <ul className='text-break'>
                        <li>
                          Windows:{' '}
                          <code>
                            c:/Users/xxx/AppData/Roaming/mockoon/storage
                          </code>
                        </li>
                        <li>
                          Linux: <code>~/.config/mockoon/storage</code>
                        </li>
                        <li>
                          macOS:{' '}
                          <code>
                            ~/Library/Application Support/mockoon/storage
                          </code>
                        </li>
                      </ul>
                      <p>
                        If you use the Windows portable version, your data will
                        be stored next to the executable in a{' '}
                        <code>./mockoon-data/storage</code> folder. The{' '}
                        <code>./mockoon-data</code> folder also contains all the
                        files necessary to run the application.
                      </p>
                      <p>
                        Mockoon's <code>storage</code> folder contains a{' '}
                        <code>settings.json</code> file with your{' '}
                        <Link href='/docs/latest/mockoon-data-files/settings-and-logs/'>
                          application settings and preferences
                        </Link>{' '}
                        and multiple{' '}
                        <Link href='/docs/latest/mockoon-data-files/data-files-location/'>
                          environment files
                        </Link>{' '}
                        containing your API mocks data.
                      </p>
                      <p>
                        <Link href='/docs/latest/mockoon-data-files/data-files-location/'>
                          Learn more about Mockoon's data storage
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3
                    id='is-the-application-collecting-usage-data'
                    className='me-4 fw-medium'
                  >
                    Is the application collecting usage data?
                  </h3>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes. The desktop application uses a custom telemetry
                      system collecting anonymous and basic usage data like
                      session duration, country, operating system, application
                      version, and number of environments. You can opt out of
                      this telemetry system in the application settings.
                    </p>
                    <p className='text-gray-700'>
                      None of your mock API data like route names, headers,
                      bodies are collected.
                    </p>
                    <p className='text-gray-700'>
                      When using our Cloud services, your data is stored in our
                      secure cloud infrastructure. None of your data is shared
                      with third parties nor used for any purpose other than
                      providing the service.
                    </p>
                    <p className='text-gray-700'>
                      No data or telemetry is collected when using the{' '}
                      <a href='/cli/'>CLI</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
