import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { FooterCTA } from '../models/common.model';
import ContactBanner from './contact-banner';
import DownloadCTA from './download-cta';
import EmailForm from './email-form';
import CustomTooltip from './tooltip';

const Footer: FunctionComponent<{
  banner: FooterCTA;
}> = function (props) {
  const router = useRouter();

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

                  <p className='fs-lg text-gray-700 mb-4 mb-lg-0'>
                    Enter your email address to receive Mockoon's latest updates
                  </p>
                </div>
                <div className='col-lg-5 justify-content-end'>
                  <EmailForm type='newsletter' />
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
          <div className='col-12 col-lg-1 d-flex flex-column align-items-start opacity-75'>
            <img
              src='/images/logo-eyes-sticker.svg'
              alt='Mockoon eyes logo'
              width='100'
              className='align-self-center'
            />
          </div>
          <div className='col-12 col-lg-3 text-lg-start text-center pt-8 pb-4 pb-lg-0 pt-lg-0'>
            <h6 className='fw-bold text-uppercase'>
              Popular tutorials and articles
            </h6>

            <ul className='list-unstyled text-gray-700'>
              <li className='mb-2'>
                <Link href='/what-is-mockoon/' className='text-reset'>
                  What is Mockoon?
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tutorials/getting-started/' className='text-reset'>
                  Getting started with Mockoon 🚀
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/tutorials/self-host-mock-api-server-cli/'
                  className='text-reset'
                >
                  Self-host a mock API with Mockoon CLI
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
                  View all tutorials
                  <i className='icon-arrow_forward ms-2'></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-12 col-md-6 col-lg-2 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase'>Learn</h6>

            <ul className='list-unstyled text-gray-700'>
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
                {/* Do not use <Link>, as routes with a dot inside get rewritten without trailing slash */}
                <a href='/releases/9.3.0/' className='text-reset'>
                  Releases
                </a>
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
                <Link href='/training/' className='text-reset'>
                  Training
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
          <div className='col-12 col-md-6 col-lg-2 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase'>Cloud</h6>

            <ul className='list-unstyled text-gray-700'>
              <li className='mb-2'>
                <Link href='/cloud/' className='text-reset'>
                  Overview
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/pricing/' className='text-reset'>
                  Pricing
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/ai-powered-api-mocking/' className='text-reset'>
                  AI-powered API mocking
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/status/' className='text-reset'>
                  Services status
                </Link>
              </li>
            </ul>
            <h6 className='fw-bold text-uppercase'>Services</h6>

            <ul className='list-unstyled text-gray-700'>
              <li className='mb-2'>
                <Link href='/training/' className='text-reset'>
                  Training
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/custom-services/' className='text-reset'>
                  Custom services
                </Link>
              </li>
            </ul>
            <h6 className='fw-bold text-uppercase'>Apps</h6>

            <ul className='list-unstyled text-gray-700'>
              <li className='mb-2'>
                <Link href='/download/' className='text-reset'>
                  Desktop application
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}`}
                  className='text-reset'
                >
                  Web application
                  <CustomTooltip
                    className='icon-cloud ms-2 text-warning'
                    text='Cloud customers only'
                  ></CustomTooltip>
                  <CustomTooltip
                    className='icon-lab ms-2 text-info'
                    text='Early access'
                  ></CustomTooltip>
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
            </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-2 offset-lg-0 text-lg-start text-center'>
            {' '}
            <h6 className='fw-bold text-uppercase'>Tools</h6>
            <ul className='list-unstyled text-gray-700'>
              <li className='mb-2'>
                <Link href='/playground/' className='text-reset'>
                  API playground
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
                <Link
                  href='/integrations/embedded-button/'
                  className='text-reset'
                >
                  Mockoon button
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/tools/' className='text-reset'>
                  Useful tools
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-2 offset-lg-0 text-lg-start text-center'>
            <h6 className='fw-bold text-uppercase'>More</h6>

            <ul className='list-unstyled text-gray-700 mb-0'>
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
                <Link href='/brand/' className='text-reset'>
                  Brand assets
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/oss-friends/' className='text-reset'>
                  OSS friends
                </Link>
              </li>
            </ul>

            <h6 className='fw-bold text-uppercase'>Policies</h6>

            <ul className='list-unstyled text-gray-700 mb-0'>
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
            </ul>

            <ul className='align-self-center footer-social list-unstyled list-inline list-social mt-8'>
              <li className='list-inline-item list-social-item me-2'>
                <a
                  href='https://github.com/mockoon/mockoon'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none text-reset'
                >
                  <i
                    className='icon-github list-social-icon'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
              <li className='list-inline-item list-social-item'>
                <a
                  href='https://www.youtube.com/channel/UCzkVOmqzbh2CdSU4yHa54wg'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none text-reset'
                >
                  <i
                    className='icon-youtube list-social-item'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
              <li className='list-inline-item list-social-item'>
                <a
                  href='https://www.linkedin.com/company/mockoon'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none text-reset'
                >
                  <i
                    className='icon-linkedin list-social-item'
                    aria-hidden='true'
                  ></i>
                </a>
              </li>
              <li className='list-inline-item list-social-item'>
                <a
                  href='https://www.reddit.com/r/mockoon/'
                  target='_blank'
                  rel='noopener'
                  className='text-decoration-none text-reset'
                >
                  <i
                    className='icon-reddit list-social-item'
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
          {(router.route.includes('use-cases') ||
            router.route.includes('custom-services')) && (
            <p>
              <a href='https://storyset.com' className='text-gray-500 h6'>
                Illustrations by Storyset
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
