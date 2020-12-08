import { FunctionComponent } from 'react';

const Footer: FunctionComponent = function () {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-4'>
            <div className='content'>
              <div className='title is-size-5 has-text-weight-semibold'>
                Tutorials
              </div>
              <br />
              <div className='mb-2'>
                <a href='/tutorials/getting-started/'>
                  Getting started with Mockoon 🚀
                </a>
              </div>
              <div className='mb-2'>
                <a href='/tutorials/partial-mocking-proxy/'>
                  Partial mocking with proxy mode
                </a>
              </div>
              <div className='mb-2'>
                <a href='/tutorials/requests-recording-auto-mocking/'>
                  Requests recording and auto-mocking
                </a>
              </div>
              <div className='mb-2'>
                <a href='/tutorials/generate-mock-json-data/'>
                  Generate dynamic mock data with Mockoon templating system
                </a>
              </div>
              <div className='mb-2'>
                <a href='/tutorials/'>View all tutorials</a>
              </div>
            </div>
          </div>

          <div className='column is-2 is-offset-1'>
            <div className='content'>
              <div className='title is-size-5 has-text-weight-semibold'>
                Resources
              </div>
              <div className='mb-2'>
                <a href='/tutorials/'>Tutorials</a>
              </div>
              <div className='mb-2'>
                <a href='/docs/latest/about/'>Docs</a>
              </div>
              <div className='mb-2'>
                <a href='/mock-samples/'>Mock samples</a>
              </div>
              <div className='mb-2'>
                <a href='/blog/'>Blog</a>
              </div>
            </div>
          </div>

          <div className='column is-2'>
            <div className='content'>
              <div className='title is-size-5 has-text-weight-semibold'>
                More
              </div>
              <div className='mb-2'>
                <a href='/contact/'>Request support</a>
              </div>
              <div className='mb-2'>
                <a href='/sponsor-us/'>Sponsor us</a>
              </div>
              <div className='mb-2'>
                <a href='/about/'>About us</a>
              </div>
              <div className='mb-2'>
                <a
                  href='https://github.com/mockoon'
                  target='_blank'
                  rel='noopener'
                >
                  <i className='icon-github' aria-hidden='true'></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className='column is-3'>
            <div className='content has-text-centered'>
              <img
                src='/images/logo-eyes-grey.svg'
                alt='Mockoon eyes logo'
                width='96'
              />
            </div>
          </div>
        </div>

        <div className='content has-text-centered'>
          <p>
            &copy; Mockoon 2017 - present by{' '}
            <a href='https://github.com/255kb' rel='noopener'>
              255kb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
