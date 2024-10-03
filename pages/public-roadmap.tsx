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
        title: 'Where is the roadmap?',
        content:
          'Our <a href="https://github.com/orgs/mockoon/projects/9" target="_blank">public roadmap</a> for our open-source projects is hosted on GitHub. Above is a summary of the current state of the roadmap with the most important features, including the non-open-source ones.'
      },
      {
        title: 'Where are the features listed? How can I contribute?',
        content:
          'All our issues for the public open-source projects are on our <a href="https://github.com/mockoon/mockoon/issues" target="_blank">GitHub repository</a>. This is where you can upvote them and contribute to the <a href="https://github.com/mockoon/mockoon/discussions" target="_blank">discussions</a>.'
      },
      {
        title: 'What are the different steps of the public roadmap?',
        content:
          '<ul><li><span class="fw-bold">Backlog:</span> contains features that are potential candidates due to their number of upvotes. Number of upvotes is only one indicator, and we may add features with less upvotes if they are more relevant to the project. We avoid adding too many features to the backlog as they may never get implemented.</li><li><span class="fw-bold">Analysis/POC:</span> contains the features that we are currently analyzing. They may be transferred to "To do" or be rejected if we realize they are not a good fit.</li><li><span class="fw-bold">To do:</span> planned features and tasks.</li><li><span class="fw-bold">In progress:</span> features currently being worked on by the maintainers or external contributors.</li><li><span class="fw-bold">Done:</span> contains the features and bug fixes merged to the main branch. As Mockoon is mainly a desktop application, releases happen less often than for web applications. The repository\'s main branch is stable but may contain features not yet released.</li></ul>'
      },
      {
        title: 'Is everything on the public roadmap?',
        content:
          'No. Some work may not be listed on the roadmap. It is the case for chores like dependencies updates or work happening on non-open-source products (backend, cloud offering, etc.).'
      }
    ]
  }
];

const tasks: {
  [key in 'released' | 'inProgress' | 'comingSoon']: {
    link?: string;
    title: string;
    cloud: boolean;
    target?: string;
  }[];
} = {
  released: [
    {
      link: '/releases/8.4.0#random-latencies',
      title: 'Randomized lantency',
      cloud: false,
      target: null
    },
    {
      link: '/docs/latest/mockoon-cloud/api-mock-cloud-deployments/',
      title: 'API deployments in the cloud',
      cloud: true,
      target: null
    },
    {
      link: '/ai-powered-api-mocking/',
      title: 'AI powered HTTP endpoints mocking',
      cloud: true,
      target: null
    },
    {
      link: '/docs/latest/admin-api/overview/',
      title: 'Admin API',
      cloud: false
    },
    {
      link: '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/',
      title: 'Real-time collaboration for teams',
      cloud: true
    },
    {
      link: '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/',
      title: 'Data synchronization for solo developers',
      cloud: true
    },
    {
      link: '/docs/latest/variables/environment-variables/',
      title: 'Environment variables support in templating',
      cloud: false
    },
    {
      link: '/docs/latest/variables/global-variables/',
      title: 'Global variables',
      cloud: false
    },
    {
      link: '/docs/latest/api-endpoints/crud-routes/#filtering-sorting-and-pagination-on-the-main-get-route',
      title: 'CRUD routes filtering',
      cloud: false
    }
  ],
  inProgress: [
    {
      title: 'Real-time collaboration improved presence',
      cloud: true,
      link: 'https://github.com/mockoon/mockoon/issues/1512',
      target: '_blank'
    },
    {
      link: 'https://github.com/mockoon/mockoon/issues/83',
      title: 'WebSockets support',
      cloud: false,
      target: '_blank'
    },
    {
      link: 'https://github.com/mockoon/mockoon/issues/1444',
      title: 'New array includes rule',
      cloud: false,
      target: '_blank'
    },
    {
      link: 'https://github.com/mockoon/mockoon/issues/1045',
      title: 'Export logs as HAR',
      cloud: false,
      target: '_blank'
    },
    {
      link: 'https://github.com/mockoon/mockoon/issues/1458',
      title: 'Copy logs as cURL',
      cloud: false,
      target: '_blank'
    }
  ],
  comingSoon: [
    {
      title: 'Environment variables support in cloud deployments',
      cloud: true,
      target: null
    },
    {
      title: 'More cloud deployment regions',
      cloud: true,
      target: null
    }
  ]
};

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
                <div className='badge badge-lg badge-arrow text-bg-success-subtle d-block fs-5'>
                  Recently released
                </div>
              </div>
              <div className='px-4'>
                {tasks.released.map((task, taskIndex) => (
                  <div key={`taskreleased${taskIndex}`} className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-check'></i>
                    </div>

                    <p className='text-gray-800'>
                      {task.cloud && (
                        <span className='badge text-bg-warning me-2'>
                          Cloud
                        </span>
                      )}
                      {task.link && (
                        <Link
                          href={task.link}
                          target={task.target ? task.target : undefined}
                        >
                          {task.title}
                        </Link>
                      )}
                      {!task.link && task.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-12 col-md-4 p-0'>
              <div className='mb-6'>
                <div className='badge badge-lg badge-arrow text-bg-primary-subtle d-block fs-5'>
                  In progress
                </div>
              </div>
              <div className='px-4'>
                {tasks.inProgress.map((task, taskIndex) => (
                  <div key={`taskinprogress${taskIndex}`} className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-primary-subtle mt-1 me-4'>
                      <i className='icon icon-refresh'></i>
                    </div>

                    <p className='text-gray-800'>
                      {task.cloud && (
                        <span className='badge text-bg-warning me-2'>
                          Cloud
                        </span>
                      )}
                      {task.link && (
                        <Link
                          href={task.link}
                          target={task.target ? task.target : undefined}
                        >
                          {task.title}
                        </Link>
                      )}
                      {!task.link && task.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-12 col-md-4 p-0'>
              <div className='mb-6'>
                <div className='badge badge-lg badge-arrow text-bg-secondary-subtle d-block fs-5'>
                  Coming soon
                </div>
              </div>

              <div className='px-4'>
                {tasks.comingSoon.map((task, taskIndex) => (
                  <div key={`taskcomingsoon${taskIndex}`} className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-secondary-subtle mt-1 me-4'>
                      <i className='icon icon-hourglass_empty'></i>
                    </div>

                    <p className='text-gray-800'>
                      {task.cloud && (
                        <span className='badge text-bg-warning me-2'>
                          Cloud
                        </span>
                      )}
                      {task.link && (
                        <Link
                          href={task.link}
                          target={task.target ? task.target : undefined}
                        >
                          {task.title}
                        </Link>
                      )}
                      {!task.link && task.title}
                    </p>
                  </div>
                ))}
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
                <a className='btn btn-primary-subtle' href='/cloud/'>
                  Get enterprise support with Mockoon Cloud
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
