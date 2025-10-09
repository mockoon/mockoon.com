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
          'Our <a href="https://github.com/orgs/mockoon/projects/9" target="_blank">public roadmap</a> for our open-source projects is hosted on GitHub. Above is a summary of the current state of the open-source roadmap with the most important features, including Mockoon Cloud\'s features.'
      },
      {
        title: 'Where are the features listed? How can I contribute?',
        content:
          'All our issues for the public open-source projects are on our <a href="https://github.com/mockoon/mockoon/issues" target="_blank">GitHub repository</a>. This is where you can upvote them and contribute to the <a href="https://github.com/mockoon/mockoon/discussions" target="_blank">discussions</a>.'
      },
      {
        title: 'What are the different steps of the public roadmap?',
        content:
          '<ul><li><span class="fw-bold">Planned:</span> planned features and tasks.</li><li><span class="fw-bold">Analysis/POC:</span> contains the features that we are currently analyzing. They may be transferred to "In progress" or be rejected if we realize they are not a good fit.</li><li><span class="fw-bold">In progress:</span> features currently being worked on by the maintainers or external contributors.</li><li><span class="fw-bold">Done:</span> contains the features and bug fixes merged to the main branch. As Mockoon is mainly a desktop application, releases happen less often than for web applications. The repository\'s main branch is stable but may contain features not yet released.</li></ul>'
      },
      {
        title: 'Is everything on the public roadmap?',
        content:
          'No. Some work may not be listed on the roadmap. It is the case for chores like dependencies updates or work happening on non-open-source products and tools (backend, cloud offering, etc.).'
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
      link: '/cloud/docs/roles-permissions/',
      title: 'Support roles (team admin, billing)',
      cloud: true,
      target: null
    },
    {
      link: 'https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md#start-command',
      title: 'CLI local files watch mode',
      cloud: false,
      target: null
    },
    {
      link: '/docs/latest/templating/mockoon-helpers/#jmespath',
      title: 'JMESPath support',
      cloud: false,
      target: null
    },
    {
      link: null,
      title: 'Enable 2FA for Mockoon Cloud accounts',
      cloud: true,
      target: null
    },
    {
      link: '/cloud/docs/web-application/',
      title: 'Mockoon Cloud Web app',
      cloud: true,
      target: null
    },
    {
      link: '/releases/9.1.0/#cloud-deployments',
      title: 'Custom sub domains in cloud deployments',
      cloud: true,
      target: null
    },
    {
      link: '/releases/9.1.0/#improved-data-buckets-state-reporting',
      title: 'Improved data buckets state reporting',
      cloud: false,
      target: null
    },
    {
      title: 'Real-time collaboration improved presence',
      cloud: true,
      link: '/cloud/docs/data-synchronization-team-collaboration/#team-collaboration-and-conflict-handling',
      target: null
    },
    {
      link: '/docs/latest/api-endpoints/websockets/',
      title: 'WebSockets support',
      cloud: false,
      target: null
    },
    {
      link: '/docs/latest/route-responses/dynamic-rules/#4-comparison-operator',
      title: 'New array includes rule operator',
      cloud: false,
      target: null
    },
    {
      link: '/docs/latest/route-responses/dynamic-rules/#4-comparison-operator',
      title: 'New JSON schema validation rule operator',
      cloud: false,
      target: null
    }
  ],
  inProgress: [
    {
      title: 'EU cloud deployment regions',
      cloud: true,
      target: null
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
    },
    {
      link: 'https://github.com/mockoon/mockoon/issues/1807',
      title: 'Cloud logs replay',
      cloud: true,
      target: '_blank'
    },
    {
      link: 'https://github.com/mockoon/mockoon/issues/1808',
      title: 'Display cloud logs in the desktop app',
      cloud: true,
      target: '_blank'
    },
    {
      link: 'https://github.com/mockoon/mockoon/issues/1821',
      title: 'OpenAPI import in web app',
      cloud: true,
      target: '_blank'
    },
    {
      title: 'Account activity audit logs',
      cloud: true,
      target: null
    }
  ],
  comingSoon: [
    {
      title: 'Team-level environment variables support for cloud deployments',
      cloud: true,
      target: null
    },
    {
      title: 'Websocket support in cloud deployments',
      cloud: true,
      target: null
    },
    {
      title: 'CLI: deploy from a cloud mock',
      link: 'https://github.com/mockoon/mockoon/issues/1736',
      cloud: true,
      target: '_blank'
    },
    {
      title: 'Resources activity audit logs',
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
