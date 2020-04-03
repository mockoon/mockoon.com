import { FunctionComponent } from 'react';
import Download from '../components/download';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import Layout from '../layout/layout';

const meta = {
  title: 'Snippets',
  description:
    'Search among dozens of mock data and endpoints snippets that you can reuse in Mockoon'
};

const Snippets: FunctionComponent = function () {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <Download />

      <div className='section'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-one-quarter is-offset-one-quarter'>
              <div className='card'>
                <div className='card-image'>
                  <a href={`/snippets/basic/json`}>
                    <figure className='image'>
                      <img src='/images/tutorials/thumbnails/body.jpg' alt='' />
                    </figure>
                  </a>
                </div>
                <div className='card-content'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-5'>Basic snippets</p>
                    </div>
                  </div>

                  <div className='content'>
                    JSON bodies, CSV generation, etc
                  </div>
                </div>
                <footer className='card-footer'>
                  <a
                    href={`/snippets/basic/json`}
                    className='card-footer-item has-text-weight-semibold'
                  >
                    View
                  </a>
                </footer>
              </div>
            </div>

            <div className='column is-one-quarter'>
              <div className='card'>
                <div className='card-image'>
                  <figure className='image'>
                    <img src='/images/tutorials/thumbnails/github.jpg' alt='' />
                  </figure>
                </div>
                <div className='card-content'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-5'>GitHub API snippets</p>
                    </div>
                  </div>

                  <div className='content'>
                    Ready to use routes and bodies from most used GitHub API
                  </div>
                </div>
                <footer className='card-footer'>
                  <p className='card-footer-item has-text-weight-semibold'>
                    Coming soon!
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </Layout>
  );
};

export default Snippets;
