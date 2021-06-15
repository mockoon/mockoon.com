import React, { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Faq: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='Frequently asked questions (FAQ)'
        description='Find the most frequently asked questions about Mockoon, the free cross-platform desktop mock REST API servers creation tool.'
        ogType='article'
      />

      <Hero title='Frequently asked questions' />

      <section className='container '>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <div className='accordion shadow-light-lg mb-5 mb-md-6'>
              <div className='accordion-item'>
                <div className='accordion-button'>
                  <h3 className='me-4'>
                    How does Mockoon mock API creation works?
                  </h3>
                </div>
                <div className='accordion-collapse'>
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
                <div className='accordion-button'>
                  <h3 className='me-4'>
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
                  <h3 className='me-4'>
                    Does Mockoon work behind a company firewall?
                  </h3>

                  <div className='text-muted ms-auto'></div>
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
                  <h3 className='me-4'>
                    Does Mockoon require an active internet connection?
                  </h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div className='accordion-collapse '>
                  <div className='accordion-body'>
                    <p className='text-gray-700'>
                      No, you don't need an internet connection to use Mockoon.
                      Everything runs locally.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3 className='me-4'>
                    Do you need an account to create mock APIs?
                  </h3>

                  <div className='text-muted ms-auto'></div>
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
                  <h3 className='me-4'>Does Mockoon offer a CLI?</h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div className='accordion-collapse '>
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
                <div className='accordion-button '>
                  <h3 className='me-4'>Is Mockoon compatible with OpenAPI?</h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div className='accordion-collapse '>
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
                <div className='accordion-button '>
                  <h3 className='me-4'>Is Mockoon free and/or open source?</h3>

                  <div className='text-muted ms-auto'></div>
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
                      ).
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <div className='accordion-button '>
                  <h3 className='me-4'>Where are my data stored?</h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div className='accordion-collapse '>
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
                <div className='accordion-button '>
                  <h3 className='me-4'>Are you collecting usage data?</h3>

                  <div className='text-muted ms-auto'></div>
                </div>

                <div className='accordion-collapse '>
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
    </Layout>
  );
};

export default Faq;
