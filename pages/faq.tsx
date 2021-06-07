import { FunctionComponent } from 'react';
import Download from '../components/download';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import Layout from '../layout/layout';

const Faq: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='Frequently asked questions (FAQ)'
        description='Find the most frequently asked questions about Mockoon, the free cross-platform desktop mock REST API servers creation tool.'
        ogType='article'
      />
      <section className='container py-5 py-md-5'>
        <div className='row'>
          <div className='col-12 col-md'>
            <h1 className='display-4 mb-2'>Frequently asked questions</h1>
          </div>
        </div>
      </section>

      <Download />

      <section className='container '>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <div
              className='accordion shadow-light-lg mb-5 mb-md-6'
              id='helpAccordionOne'
            >
              <div className='accordion-item'>
                <div className='accordion-button' role='button'>
                  <div className='me-auto'>
                    <h2 className='fw-bold mb-0'></h2>

                    <p className='fs-sm text-muted mb-0'></p>
                  </div>

                  <span className='badge rounded-pill bg-success-soft ms-4'>
                    <span className='h6 text-uppercase'>10 answers</span>
                  </span>
                </div>
              </div>
              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpOne'
                  aria-expanded='false'
                  aria-controls='helpOne'
                >
                  <h3 className='me-4' id='helpOneHeading'>
                    How does Mockoon mock API creation works?
                  </h3>
                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpOne'
                  aria-labelledby='helpOneHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Unlike many other mocking tools, Mockoon is a desktop
                      application using a local Node.js server to avoid latency
                      and the hassle of deploying through a remote service.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpTwo'
                  aria-expanded='false'
                  aria-controls='helpTwo'
                >
                  <h3 className='me-4' id='helpTwoHeading'>
                    Does Mockoon need elevated rights to run?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpTwo'
                  aria-labelledby='helpTwoHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      No, Mockoon can be run in most environments by regular
                      non-privileged users.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpThree'
                  aria-expanded='false'
                  aria-controls='helpThree'
                >
                  <h3 className='me-4' id='helpThreeHeading'>
                    Does Mockoon work behind a company firewall?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpThree'
                  aria-labelledby='helpThreeHeading'
                  data-bs-parent='#helpAccordionOne'
                >
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
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpFour'
                  aria-expanded='false'
                  aria-controls='helpFour'
                >
                  <h3 className='me-4' id='helpFourHeading'>
                    Does Mockoon require an active internet connection?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpFour'
                  aria-labelledby='helpFourHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      No, you don't need an internet connection to use Mockoon.
                      Everything runs locally.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpFive'
                  aria-expanded='false'
                  aria-controls='helpFive'
                >
                  <h3 className='me-4' id='helpFiveHeading'>
                    Do you need an account to create mock APIs?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpFive'
                  aria-labelledby='helpFiveHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      No, you don't need to sign up or create an account to use
                      Mockoon.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpSix'
                  aria-expanded='false'
                  aria-controls='helpSix'
                >
                  <h3 className='me-4' id='helpSixHeading'>
                    Does Mockoon offer a CLI?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpSix'
                  aria-labelledby='helpSixHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, Mockoon has an <a href='/cli/'>official CLI</a> that
                      allows you to run all your mock APIs in any headless or
                      automated environment: servers, CI, GitHub Actions, Docker
                      containers, etc. A Docker image is also available on{' '}
                      <a
                        href='https://hub.docker.com/u/mockoon'
                        target='_blank'
                        rel='noopener'
                      >
                        Mockoon's Docker Hub
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpSeven'
                  aria-expanded='false'
                  aria-controls='helpSix'
                >
                  <h3 className='me-4' id='helpSevenHeading'>
                    Is Mockoon compatible with OpenAPI?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpSeven'
                  aria-labelledby='helpSevenHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, Mockoon supports most of the OpenAPI specifications
                      (v2 and v3) both for import and export. You can learn more
                      on{' '}
                      <a href='/docs/latest/import-export-data/'>
                        Mockoon's OpenAPI documentation page
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpHeight'
                  aria-expanded='false'
                  aria-controls='helpHeight'
                >
                  <h3 className='me-4' id='helpHeightHeading'>
                    Is Mockoon free and/or open source?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpHeight'
                  aria-labelledby='helpHeightHeading'
                  data-bs-parent='#helpAccordionOne'
                >
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
                      ).
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpNine'
                  aria-expanded='false'
                  aria-controls='helpHeight'
                >
                  <h3 className='me-4' id='helpNineHeading'>
                    Where are my data stored?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpNine'
                  aria-labelledby='helpNineHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Locally, in your operating system user data folder.{' '}
                      <ul>
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
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div
                  className='accordion-button collapsed'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#helpTen'
                  aria-expanded='false'
                  aria-controls='helpTen'
                >
                  <h3 className='me-4' id='helpTenHeading'>
                    Are you collecting usage data?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div
                  className='accordion-collapse collapse'
                  id='helpTen'
                  aria-labelledby='helpTenHeading'
                  data-bs-parent='#helpAccordionOne'
                >
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      Yes, but only anonymous data through Google Analytics.
                      Besides Google Analytics standard collected data (OS,
                      screen size, etc.) we are also collecting some events
                      happening in the application. A typical event includes the
                      following JSON{' '}
                      <code>
                        {'{'}category: 'delete', action: 'environment'{'}'}
                      </code>
                      ,{' '}
                      <code>
                        {'{'}category: 'server', action: 'start' {'}'}
                      </code>
                      , etc.
                      <br />
                      None of your mock API, routes or URLs are collected. You
                      can always opt-out of the data collection inside the
                      application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Faq;
