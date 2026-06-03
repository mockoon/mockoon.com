import Link from 'next/link';
import { FunctionComponent } from 'react';

const Sponsors: FunctionComponent<{
  showLink: boolean;
}> = function ({ showLink }) {
  return (
    <div className='container'>
      <div className='col-12 text-center pb-4'>
        <h2 className='mb-0 fw-bold'>Sponsors</h2>
        {showLink && (
          <p className='text-gray-700 fs-lg'>
            <Link href='/sponsor-us/' className='link-secondary fs-sm'>
              Become a sponsor
            </Link>
          </p>
        )}
      </div>
      <h4 className='text-gray-700 text-center pt-6 pb-4 fw-bold'>Platinum</h4>
      <div className='row align-items-center justify-content-center'>
        <div className='col col-md-10 text-center'>
          <Link
            href='https://github.blog/news-insights/company-news/github-accelerator-our-first-cohort-and-whats-next/'
            className='d-inline-block p-4'
            target='_blank'
            rel='sponsored'
          >
            <img
              src='/images/sponsors/github.png'
              className='img-fluid m-4'
              alt='GitHub logo'
              style={{ maxHeight: '64px' }}
            />
          </Link>
          <Link
            href='https://localazy.com/register?ref=a9CiDC61gOac-azO'
            className='d-inline-block p-4'
            target='_blank'
            rel='sponsored'
          >
            <img
              src='/images/sponsors/localazy.png'
              className='img-fluid m-4'
              alt='Localazy logo'
              style={{ maxHeight: '64px' }}
            />
          </Link>
          <Link
            href='https://serpapi.com/?utm_source=mockoon'
            className='d-inline-block p-4'
            target='_blank'
            rel='sponsored'
          >
            <img
              src='/images/sponsors/serpapi.png'
              className='img-fluid m-4'
              alt='SerpApi logo'
              style={{ maxHeight: '64px' }}
            />
          </Link>
        </div>
      </div>
      <h4 className='text-gray-700 text-center pt-6 pb-4 fw-bold'>Gold</h4>
      <div className='row align-items-center justify-content-center'>
        <div className='col col-md-10 text-center'>
          <Link
            href='https://coderabbit.link/mockoon'
            className='d-inline-block p-4'
            target='_blank'
            rel='sponsored'
          >
            <img
              src='/images/sponsors/coderabbit.png'
              className='img-fluid m-4'
              alt='CodeRabbit logo'
              style={{ maxHeight: '56px' }}
            />
          </Link>
          <Link
            href='https://www.rapidproxy.io/?ref=mockoon'
            className='d-inline-block p-4'
            target='_blank'
            rel='sponsored'
          >
            <img
              src='/images/sponsors/rapidproxy.png'
              className='img-fluid m-4'
              alt='RapidProxy logo'
              style={{ maxHeight: '56px' }}
            />
          </Link>
          <Link
            href='https://talordata.com/?campaignid=rGAerPX1XrVAODD0&utm_source=mockoon&utm_term=mockoon'
            className='d-inline-block p-4'
            target='_blank'
            rel='sponsored'
          >
            <img
              src='/images/sponsors/talordata.png'
              className='img-fluid m-4'
              alt='TalorData logo'
              style={{ maxHeight: '56px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
