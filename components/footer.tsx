import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FooterCTA } from '../models/common.model';
import ContactBanner from './contact-banner';
import DownloadCTA from './download-cta';
import EmailForm from './email-form';

const Footer: FunctionComponent<{
  banner: FooterCTA;
}> = function (props) {
  return (
    <footer className='py-3 bg-gray-200'>
      <div className='container'>
        <div className='row mb-6'>
          <div className='py-8 border-bottom border-gray-300'>
            {(props.banner === 'newsletter' && (
              <div className='row align-items-center text-lg-start text-center'>
                <div className='col-12 col-lg-7'>
                  <h4 className='mb-1 fw-bold text-gray-700'>
                    Get our stories delivered
                  </h4>

                  <p className='fs-lg text-muted mb-4 mb-lg-0'>
                    Enter your email address to receive Mockoon's latest updates
                  </p>
                </div>
                <div className='col-lg-5 justify-content-end'>
                  <EmailForm formType='newsletter' />
                </div>
              </div>
            )) ||
              (props.banner === 'contact' && <ContactBanner />) ||
              (props.banner === 'download' && <DownloadCTA />) || (
                <DownloadCTA />
              )}
          </div>
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
          <div className='col-12 col-lg-4 text-lg-start text-center pt-8 pb-4 pb-lg-0 pt-lg-0'>
            <h6 className='fw-bold text-uppercase text-gray-700'>
              Popular tutorials and articles
            </h6>

            <ul className='list-unstyled text-muted'>
              <li className='mb-2'>
                <Link href='/tutorials/getting-started/' className='text-reset'>
                  Getting started with Mockoon 🚀
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/tutorials/run-mock-api-anywhere-cli/'
                  className='text-reset'
                >
                  Run your mock APIs anywhere with the CLI
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/tutorials/partial-mocking-proxy/'
                  className='text-reset'
                >
                  Partial mocking with proxy mode
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/tutorials/requests-recording-auto-mocking/'
                  className='text-reset'
                >
                  Requests recording and auto-mocking
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/tutorials/generate-mock-json-data/'
                  className='text-reset'
                >
                  Dynamic mock data with Mockoon's templating system
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/articles/api-guide-what-are-api/'
                  className='text-reset'
                >
                  What are APIs?
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/articles/what-is-api-mocking/'
                  className='text-reset'
                >
                  What is API mocking?
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/use-cases/' className='text-reset'>
                  Why do you need API mocking?
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/' className='text-reset'>
                  View all tutorials →
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-4 col-lg-2 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase text-gray-700'>Learn</h6>

            <ul className='list-unstyled text-muted'>
              <li className='mb-2'>
                <Link href='/docs/latest/about/' className='text-reset'>
                  Docs
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/faq/' className='text-reset'>
                  FAQ
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/blog/' className='text-reset'>
                  Blog
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/releases/4.0.0/' className='text-reset'>
                  Releases
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/' className='text-reset'>
                  Tutorials
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/video-tutorials/' className='text-reset'>
                  Video tutorials
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/articles/' className='text-reset'>
                  Articles
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/compare/' className='text-reset'>
                  Comparisons
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/case-studies/' className='text-reset'>
                  Case studies
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-4 col-lg-2 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase text-gray-700'>Services</h6>

            <ul className='list-unstyled text-muted'>
              <li className='mb-2'>
                <Link href='/pro/' className='text-reset'>
                  Pro plans
                </Link>
              </li>
            </ul>

            <h6 className='fw-bold text-uppercase text-gray-700'>Tools</h6>

            <ul className='list-unstyled text-muted'>
              <li className='mb-2'>
                <Link href='/download/' className='text-reset'>
                  Desktop application
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/cli/' className='text-reset'>
                  CLI
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/serverless/' className='text-reset'>
                  Serverless package
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/mock-samples/category/all/' className='text-reset'>
                  Mock samples
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/templates/' className='text-reset'>
                  Templates
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/ai-powered-api-mocking/' className='text-reset'>
                  AI-powered API mocking
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/integrations/embedded-button/'
                  className='text-reset'
                >
                  Mockoon button
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-4 col-lg-2 offset-lg-0 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase text-gray-700'>More</h6>

            <ul className='list-unstyled text-muted mb-0'>
              <li className='mb-2'>
                <Link href='/about/' className='text-reset'>
                  About us
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/sponsor-us/' className='text-reset'>
                  Sponsor us
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/public-roadmap/' className='text-reset'>
                  Public roadmap
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/contact/' className='text-reset'>
                  Get support
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/newsletter/' className='text-reset'>
                  Newsletter
                </Link>
              </li>

              <li className='mb-2'>
                <Link
                  href='https://mockoon.threadless.com/'
                  className='text-reset'
                  target='_blank'
                  rel='noopener'
                >
                  <>
                    Shop{' '}
                    <i className='text-muted icon-open' aria-hidden='true'></i>
                  </>
                </Link>
              </li>

              <li className='mb-2'>
                <Link href='/oss-friends/' className='text-reset'>
                  OSS friends
                </Link>
              </li>
            </ul>

            <h6 className='fw-bold text-uppercase text-gray-700 mt-4'>Legal</h6>

            <ul className='list-unstyled text-muted mb-0'>
              <li className='mb-2'>
                <Link href='/terms/' className='text-reset'>
                  Terms of service
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/privacy/' className='text-reset'>
                  Privacy policy
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/brand/' className='text-reset'>
                  Brand assets
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
              <li className='list-inline-item list-social-item'>
                <a
                  href='https://www.youtube.com/channel/UCzkVOmqzbh2CdSU4yHa54wg'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none'
                >
                  <i
                    className='text-muted icon-youtube list-social-item'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p className='text-gray-500 h6'>
            &copy; Mockoon 2017 - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
