import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FooterCTA } from '../models/common.model';
import ContactBanner from './contact-banner';
import DownloadCTA from './download-cta';
import Newsletter from './newsletter';

const Footer: FunctionComponent<{
  banner: FooterCTA;
}> = function (props) {
  return (
    <footer className='py-3 bg-gray-200'>
      <div className='container'>
        <div className='row mb-6'>
          {(props.banner === 'newsletter' && <Newsletter />) ||
            (props.banner === 'contact' && <ContactBanner />) ||
            (props.banner === 'download' && <DownloadCTA />) || <DownloadCTA />}
        </div>
        <div className='row'>
          <div className='col-12 col-lg-2 d-flex flex-column align-items-start'>
            <img
              src='/images/logo-eyes-grey.svg'
              alt='Mockoon eyes logo'
              width='100'
              className='align-self-center'
            />
          </div>
          <div className='col-12 col-lg-6 text-lg-start text-center pt-8 pb-4 pb-lg-0 pt-lg-0'>
            <h6 className='fw-bold text-uppercase text-gray-700'>Tutorials</h6>

            <ul className='list-unstyled text-muted'>
              <li className='mb-2'>
                <Link href='/tutorials/getting-started/'>
                  <a className='text-reset'>Getting started with Mockoon 🚀</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/run-mock-api-anywhere-cli/'>
                  <a className='text-reset'>
                    Run your mock APIs anywhere with the CLI
                  </a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/partial-mocking-proxy/'>
                  <a className='text-reset'>Partial mocking with proxy mode</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/requests-recording-auto-mocking/'>
                  <a className='text-reset'>
                    Requests recording and auto-mocking
                  </a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/generate-mock-json-data/'>
                  <a className='text-reset'>
                    Generate dynamic mock data with Mockoon templating system
                  </a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/api-guide-what-are-api/'>
                  <a className='text-reset'>Mockoon's API guide</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/'>
                  <a className='text-reset'>View all tutorials</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-lg-2 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase text-gray-700'>Learn</h6>

            <ul className='list-unstyled text-muted'>
              <li className='mb-2'>
                <Link href='/tutorials/'>
                  <a className='text-reset'>Tutorials</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/docs/latest/about/'>
                  <a className='text-reset'>Docs</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/faq/'>
                  <a className='text-reset'>FAQ</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/mock-samples/'>
                  <a className='text-reset'>Mock samples</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/case-studies/'>
                  <a className='text-reset'>Case studies</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/use-cases/'>
                  <a className='text-reset'>Use cases</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/blog/'>
                  <a className='text-reset'>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-lg-2 offset-lg-0 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase text-gray-700'>More</h6>

            <ul className='list-unstyled text-muted mb-0'>
              <li className='mb-2'>
                <Link href='/about/'>
                  <a className='text-reset'>About us</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/contact/'>
                  <a className='text-reset'>Request support</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/enterprise/'>
                  <a className='text-reset'>Enterprise</a>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/sponsor-us/'>
                  <a className='text-reset'>Sponsor us</a>
                </Link>
              </li>
            </ul>
            <ul className='align-self-center footer-social list-unstyled list-inline list-social mt-4'>
              <li className='list-inline-item list-social-item me-2'>
                <a
                  href='https://github.com/mockoon/mockoon'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none'
                >
                  <i
                    className='text-muted icon-github list-social-icon'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
              <li className='list-inline-item list-social-item me-2'>
                <a
                  href='https://discord.gg/MutRpsY5gE'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none'
                >
                  <i
                    className='text-muted icon-discord list-social-icon'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
              <li className='list-inline-item list-social-item'>
                <a
                  href='https://twitter.com/intent/follow?screen_name=GetMockoon'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none'
                >
                  <i
                    className='text-muted icon-twitter list-social-item'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p className='text-gray-500 h6'>
            &copy; Mockoon 2017 - {new Date().getFullYear()} -{' '}
            <a href='/privacy/' className='text-reset'>
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
