import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import ContactBanner from './contact-banner';
import Download from './download';
import Newsletter from './newsletter';

const Footer: FunctionComponent = function () {
  const router = useRouter();
  const displayNewsletter = [
    '/',
    '/features',
    '/blog/[slug]',
    '/blog',
    '/faq',
    '/contact',
    '/sponsor-us'
  ];
  const displayContact = [
    '/docs/[...slug]',
    '/cli',
    '/tutorials',
    '/tutorials/[slug]'
  ];
  const displayDownload = [];
  return (
    <footer className='py-3 bg-gray-200'>
      <div className='container'>
        <div className='row mb-6'>
          {displayNewsletter.includes(router.pathname) && <Newsletter />}
          {displayContact.includes(router.pathname) && <ContactBanner />}
          {displayDownload.includes(router.pathname) && <Download />}
        </div>
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
                <Link href='/tutorials/getting-started/' passHref={true}>
                  <a className='text-reset'>Getting started with Mockoon 🚀</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/tutorials/partial-mocking-proxy/' passHref={true}>
                  <a className='text-reset'>Partial mocking with proxy mode</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link
                  href='/tutorials/requests-recording-auto-mocking/'
                  passHref={true}
                >
                  <a className='text-reset'>
                    Requests recording and auto-mocking
                  </a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link
                  href='/tutorials/generate-mock-json-data/'
                  passHref={true}
                >
                  <a className='text-reset'>
                    Generate dynamic mock data with Mockoon templating system
                  </a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/tutorials/' passHref={true}>
                  <a className='text-reset'>View all tutorials</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md-6 col-lg-2'>
            <h6 className='fw-bold text-uppercase text-gray-700'>Learn</h6>

            <ul className='list-unstyled text-muted mb-6 mb-md-8 mb-lg-0'>
              <li className='mb-3'>
                <Link href='/tutorials/' passHref={true}>
                  <a className='text-reset'>Tutorials</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/docs/latest/about/' passHref={true}>
                  <a className='text-reset'>Docs</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/mock-samples/' passHref={true}>
                  <a className='text-reset'>Mock samples</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/case-studies/' passHref={true}>
                  <a className='text-reset'>Case studies</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/blog/' passHref={true}>
                  <a className='text-reset'>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md-6 col-lg-2 offset-lg-0'>
            <h6 className='fw-bold text-uppercase text-gray-700'>More</h6>

            <ul className='list-unstyled text-muted mb-0'>
              <li className='mb-3'>
                <Link href='/contact/' passHref={true}>
                  <a className='text-reset'>Request support</a>
                </Link>
              </li>
              <li className='mb-3'>
                <Link href='/sponsor-us/' passHref={true}>
                  <a className='text-reset'>Sponsor us</a>
                </Link>
              </li>
              <li className='mb-3'>
                <a
                  href='https://github.com/mockoon'
                  target='_blank'
                  rel='noopener'
                  className='text-reset'
                >
                  <i className='icon-github' aria-hidden='true'></i> GitHub
                </a>
              </li>
              <li className='mb-3'>
                <a
                  href='https://discord.gg/MutRpsY5gE'
                  target='_blank'
                  rel='noopener'
                  className='text-reset'
                >
                  <i className='icon-discord' aria-hidden='true'></i> Discord
                </a>
              </li>
              <li className='mb-3'>
                <a
                  href='https://twitter.com/intent/follow?screen_name=GetMockoon'
                  target='_blank'
                  rel='noopener'
                  className='text-reset'
                >
                  <i className='icon-twitter' aria-hidden='true'></i> Twitter
                </a>
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
