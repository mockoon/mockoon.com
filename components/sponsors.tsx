import Link from 'next/link';
import { FunctionComponent } from 'react';

const Sponsors: FunctionComponent<{
  showLink: boolean;
  showHonorary: boolean;
}> = function ({ showLink, showHonorary }) {
  return (
    <div className='container'>
      <div className='col-12 text-center pb-4'>
        <h2 className='mb-0 fw-bold'>Sponsors</h2>
        {showLink && (
          <p className='text-gray-700 fs-lg'>
            <Link href='/sponsor-us/'>
              <a className='link-secondary fs-sm'>Become a sponsor</a>
            </Link>
          </p>
        )}
      </div>
      <h4 className='text-muted text-center pt-6 pb-4 fw-bold'>Platinum</h4>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-md-0 px-xl-8 text-center'>
          <div className='img-fluid mb-2 mb-md-0'>
            <Link href='https://appwrite.io'>
              <a
                className='link-secondary fs-sm'
                target='_blank'
                rel='sponsored noopener'
              >
                <img src='/images/sponsors/appwrite.svg' alt='Appwrite logo' />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {showHonorary && (
        <>
          <h4 className='text-muted text-center pt-6 pb-4 fw-bold'>
            Special thanks
          </h4>
          <div className='row align-items-center justify-content-center'>
            <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-md-0 px-xl-8 text-center'>
              <div className='img-fluid mb-2 mb-md-0'>
                <Link href='https://www.pragm.co/en/about/about-pragm'>
                  <a
                    className='link-secondary fs-sm'
                    target='_blank'
                    rel='sponsored noopener'
                  >
                    <img
                      src='/images/sponsors/pragm.png'
                      className='img-fluid'
                      alt='Appwrite logo'
                      width=''
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sponsors;
