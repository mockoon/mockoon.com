import Link from 'next/link';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = function () {
  return (
    <footer className='py-3 py-md-8 bg-gray-200'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4 col-lg-2'>
            <img
              src='/images/logo-eyes-grey.svg'
              alt='Mockoon eyes logo'
              width='96'
            />
          </div>
          <div className='col-12 col-md-12 col-lg-6'>
            <h6 className='fw-bold text-uppercase text-gray-700'>Tutorials</h6>

            <ul className='list-unstyled text-muted mb-6 mb-md-8 mb-lg-0'>
              <li className='mb-3'>
                <Link href='/tutorials/getting-started/'>
                  <a className='text-reset'>Getting started with Mockoon 🚀</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/tutorials/partial-mocking-proxy/'>
                  <a className='text-reset'>Partial mocking with proxy mode</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/tutorials/requests-recording-auto-mocking/'>
                  <a className='text-reset'>
                    Requests recording and auto-mocking
                  </a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/tutorials/generate-mock-json-data/'>
                  <a className='text-reset'>
                    Generate dynamic mock data with Mockoon templating system
                  </a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/tutorials/'>
                  <a className='text-reset'>View all tutorials</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md-6 col-lg-2'>
            <h6 className='fw-bold text-uppercase text-gray-700'>Learn</h6>

            <ul className='list-unstyled text-muted mb-6 mb-md-8 mb-lg-0'>
              <li className='mb-3'>
                <Link href='/tutorials/'>
                  <a className='text-reset'>Tutorials</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/docs/latest/about/'>
                  <a className='text-reset'>Docs</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/mock-samples/'>
                  <a className='text-reset'>Mock samples</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/case-studies/'>
                  <a className='text-reset'>Case studies</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/blog/'>
                  <a className='text-reset'>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md-6 col-lg-2 offset-lg-0'>
            <h6 className='fw-bold text-uppercase text-gray-700'>More</h6>

            <ul className='list-unstyled text-muted mb-0'>
              <li className='mb-3'>
                <Link href='/contact/'>
                  <a className='text-reset'>Request support</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/sponsor-us/'>
                  <a className='text-reset'>Sponsor us</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/sponsor-us/'>
                  <a
                    href='https://github.com/mockoon'
                    target='_blank'
                    rel='noopener'
                    className='text-reset'
                  >
                    <i className='icon-github' aria-hidden='true'></i> GitHub
                  </a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/sponsor-us/'>
                  <a
                    href='https://discord.gg/MutRpsY5gE'
                    target='_blank'
                    rel='noopener'
                    className='text-reset'
                  >
                    <i className='icon-discord' aria-hidden='true'></i> Discord
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 text-center copyright'>
          <p>&copy; Mockoon 2017 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
