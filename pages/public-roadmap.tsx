import Link from 'next/link';
import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Roadmap: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title="Mockoon's public roadmap"
        description='Mockoon is an open source project with a public roadmap. You can influence the future of Mockoon by voting for the features you want to see implemented.'
        ogType='article'
      />

      <Hero
        title='Public roadmap'
        subtitle='Mockoon is an open-source project with a public roadmap'
        mainPicture='/images/roadmap.png'
        mainPictureAlt='Screenshot of the roadmap kanban board'
        cta={[
          {
            text: 'View the roadmap →',
            link: 'https://github.com/orgs/mockoon/projects/9',
            blank: true
          }
        ]}
      />

      <div className='container'>
        <div className='row d-flex flex-column align-items-center '>
          <div className='col-12 col-lg-10 pt-5'>
            <p>
              Mockoon is an open-source project with a public roadmap. You can
              influence the future of Mockoon by voting for the features you
              want to see implemented.
            </p>
            <h3>Where is the roadmap?</h3>
            <p>
              Our roadmap is hosted on GitHub. You can view it by clicking on
              the button above.
            </p>
            <h3>Where are the features listed?</h3>
            <p>
              All our issues are on our{' '}
              <Link href={'https://github.com/mockoon/mockoon/issues'}>
                GitHub repository
              </Link>{' '}
              too. This is where you can upvote them and contribute to the
              discussions.
            </p>

            <h3>What are the different steps?</h3>
            <ul>
              <li>
                <span className='fw-bold'>Backlog:</span> contains features that
                are potential candidates due to their number of upvotes. Number
                of upvotes is only one indicator, and we may add features with
                less upvotes if they are more relevant to the project. We avoid
                adding too many features to the backlog as they may never get
                implemented.
              </li>
              <li>
                <span className='fw-bold'>Analysis/POC:</span> contains the
                features that we are currently analyzing. They may be
                transferred to "To do" or be rejected if we realize they are not
                a good fit.
              </li>
              <li>
                <span className='fw-bold'>To do:</span> planned features and
                tasks.
              </li>
              <li>
                <span className='fw-bold'>In progress:</span> features currently
                being worked on by the maintainers or external contributors.
              </li>
              <li>
                <span className='fw-bold'>Done:</span> contains the features and
                bug fixes merged to the main branch. As Mockoon is mainly a
                desktop application, releases happen less often than for web
                applications. The repository's main branch is stable but may
                contain features not yet released.
              </li>
            </ul>
            <p className='fst-italic'>
              Note: some work may not be listed on the roadmap. It is the case
              for chores like dependencies updates, or work happening on private
              repositories (backend, cloud offering, etc.).
            </p>
          </div>
        </div>
      </div>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row mt-6'>
            <div className='text-center'>
              <p className='has-text-centered pt-4'>
                <a className='btn btn-primary-soft' href='/enterprise/'>
                  Prioritize your bug reports with our Enterprise support plans
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
