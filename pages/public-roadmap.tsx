import Link from 'next/link';
import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const faq: AccordionData = [
  {
    title: 'Roadmap FAQ',
    items: [
      {
        question: 'Where is the roadmap?',
        answer:
          'Our <a href="https://github.com/orgs/mockoon/projects/9" target="_blank">public roadmap</a> for our open-source projects is hosted on GitHub. Above is a summary of the current state of the roadmap with the most important features, including the non-open-source ones.'
      },
      {
        question: 'Where are the features listed? How can I contribute?',
        answer:
          'All our issues for the public open-source projects are on our <a href="https://github.com/mockoon/mockoon/issues" target="_blank">GitHub repository</a>. This is where you can upvote them and contribute to the <a href="https://github.com/mockoon/mockoon/discussions" target="_blank">discussions</a>.'
      },
      {
        question: 'What are the different steps of the public roadmap?',
        answer:
          '<ul><li><span class="fw-bold">Backlog:</span> contains features that are potential candidates due to their number of upvotes. Number of upvotes is only one indicator, and we may add features with less upvotes if they are more relevant to the project. We avoid adding too many features to the backlog as they may never get implemented.</li><li><span class="fw-bold">Analysis/POC:</span> contains the features that we are currently analyzing. They may be transferred to "To do" or be rejected if we realize they are not a good fit.</li><li><span class="fw-bold">To do:</span> planned features and tasks.</li><li><span class="fw-bold">In progress:</span> features currently being worked on by the maintainers or external contributors.</li><li><span class="fw-bold">Done:</span> contains the features and bug fixes merged to the main branch. As Mockoon is mainly a desktop application, releases happen less often than for web applications. The repository\'s main branch is stable but may contain features not yet released.</li></ul>'
      },
      {
        question: 'Is everything on the public roadmap?',
        answer:
          'No. Some work may not be listed on the roadmap. It is the case for chores like dependencies updates or work happening on non-open-source products (backend, cloud offering, etc.).'
      }
    ]
  }
];

const Roadmap: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title="Mockoon's public roadmap"
        description='Mockoon is an open source project with a public roadmap. You can influence the future of Mockoon by voting for the features you want to see implemented.'
        ogType='article'
      />

      <Hero
        title='Public <span class="text-primary">roadmap</span>'
        subtitle='Mockoon is an open-source project with a public roadmap'
        mainPicture='/images/roadmap.png'
        mainPictureAlt='Screenshot of the roadmap kanban board'
        cta={[
          {
            text: 'View the open-source roadmap →',
            link: 'https://github.com/orgs/mockoon/projects/9',
            blank: true
          }
        ]}
      />

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row pb-8'>
            <div className='col-12 pt-5'>
              <h2 className='fw-bold text-center'>Global roadmap overview</h2>
              <p className='lead text-center text-gray-700 mb-6 mb-lg-8'>
                This is a summary of the current state of the roadmap with the
                most important features, including the non-open-source ones.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-4 p-0'>
              <div className='mb-6'>
                <div className='badge badge-lg badge-arrow bg-success-soft d-block fs-5'>
                  Recently released
                </div>
              </div>
              <div className='px-4'>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link
                      href={
                        '/docs/latest/route-responses/multiple-responses/#fallback-mode'
                      }
                    >
                      Response fallback mode
                    </Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link
                      href={'https://github.com/mockoon/mockoon/issues/1063'}
                    >
                      Applications logging standardization
                    </Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link href={'/pro/'}>AI-powered mocks</Link>
                    <span className='badge text-bg-warning ms-2'>Pro</span>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link
                      href={
                        '/docs/latest/logging-and-recording/auto-mocking-and-recording/#record-your-api-calls'
                      }
                    >
                      Auto-mocking with recording
                    </Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link href={'/docs/latest/api-endpoints/crud-routes/'}>
                      CRUD routes
                    </Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link href={'/serverless/'}>Serverless package</Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link href={'/docs/latest/data-buckets/overview/'}>
                      Data buckets
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 p-0'>
              <div className='mb-6'>
                <div className='badge badge-lg badge-arrow bg-primary-soft d-block fs-5'>
                  In progress
                </div>
              </div>
              <div className='px-4'>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-primary-soft mt-1 me-4'>
                    <i className='icon icon-refresh'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link
                      href={'https://github.com/mockoon/mockoon/issues/995'}
                      target='_blank'
                    >
                      Support for JSON path
                    </Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-primary-soft mt-1 me-4'>
                    <i className='icon icon-refresh'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link
                      href={'https://github.com/mockoon/mockoon/issues/849'}
                      target='_blank'
                    >
                      Environment variable support in templating
                    </Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-primary-soft mt-1 me-4'>
                    <i className='icon icon-refresh'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link
                      href={'https://github.com/mockoon/mockoon/issues/709'}
                      target='_blank'
                    >
                      Trigger requests after a call
                    </Link>
                  </p>
                </div>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-primary-soft mt-1 me-4'>
                    <i className='icon icon-refresh'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link
                      href={'https://github.com/mockoon/mockoon/issues/1044'}
                      target='_blank'
                    >
                      Support for Range header
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 p-0'>
              <div className='mb-6'>
                <div className='badge badge-lg badge-arrow bg-secondary-soft d-block fs-5'>
                  Coming soon
                </div>
              </div>

              <div className='px-4'>
                <div className='d-flex'>
                  <div className='badge badge-rounded-circle bg-secondary-soft mt-1 me-4'>
                    <i className='icon icon-hourglass_empty'></i>
                  </div>

                  <p className='text-gray-800'>
                    <Link href={'/pro/'}>
                      Data synchronization for solo developers
                    </Link>
                    <span className='badge text-bg-warning ms-2'>Pro</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <Accordion data={faq} />
              <p>
                <small>
                  <strong>Disclaimer: </strong> this roadmap is intended to give
                  you an idea of what we are working on, and we may change it at
                  any time. It is not a commitment and does not guarantee that
                  the features will be released. It may not be incorporated into
                  any agreement.
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row'>
            <div className='text-center'>
              <p className='has-text-centered pt-4'>
                <a className='btn btn-primary-soft' href='/pro/'>
                  Get enterprise support with Mockoon Pro
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Roadmap;
