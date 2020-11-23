import { FunctionComponent } from 'react';
import GitHub from './github';

const Footer: FunctionComponent = function () {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-4'>
            <div className='content'>
              <a href='/' className='is-size-4 has-text-weight-semibold'>
                Home
              </a>
            </div>
            <div className='content'>
              <p>
                <a
                  href='/tutorials/'
                  className='is-size-4 has-text-weight-semibold'
                >
                  Tutorials
                </a>
              </p>
              <p>
                <a href='/tutorials/getting-started/'>
                  Getting started with Mockoon 🚀
                </a>
              </p>
              <p>
                <a href='/tutorials/partial-mocking-proxy/'>
                  Partial mocking with proxy mode
                </a>
              </p>
              <p>
                <a href='/tutorials/requests-recording-auto-mocking/'>
                  Requests recording and auto-mocking
                </a>
              </p>
              <p>
                <a href='/tutorials/generate-mock-json-data/'>
                  Generate dynamic mock data with Mockoon templating system
                </a>
              </p>
              <p>
                <a href='/tutorials/' className='has-text-grey'>
                  View all tutorials
                </a>
              </p>
            </div>
          </div>

          <div className='column is-4 is-offset-4'>
            <div className='content'>
              <p className='is-size-4'>More</p>
              <p>
                <a href='/blog/'>📓 Blog</a>
              </p>
              <p>
                <a href='/docs/latest/about/'>📚 Documentation</a>
              </p>
              <p>
                <a href='/mock-samples/'>📄 Mock samples</a>
              </p>
              <p>
                <a href='https://github.com/mockoon/mockoon/discussions'>
                  ❓ Support
                </a>
              </p>
              <p>
                <a href='https://github.com/mockoon/mockoon/blob/master/backers.md'>
                  👩‍💻 Backers and supporters
                </a>
              </p>
              <p>
                <GitHub />
              </p>
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
