import { FunctionComponent } from 'react';

const SocialProof: FunctionComponent = function () {
  return (
    <>
      <div className='d-flex flex-wrap align-items-center gap-4 mb-6'>
        <div>
          <a
            href='https://github.blog/news-insights/company-news/github-accelerator-our-first-cohort-and-whats-next/'
            target='_blank'
          >
            <img
              src='/images/backed-by-github-accelerator.png'
              alt='github accelerator logo'
              width='312'
              className='img-fluid'
            />
          </a>
        </div>
        <div>
          <a
            href='https://github.blog/open-source/maintainers/securing-the-ai-software-supply-chain-security-results-across-67-open-source-projects/'
            target='_blank'
          >
            <img
              src='/images/backed-by-github-secure-os-fund.png'
              alt='github secure open source fund logo'
              width='200'
              className='img-fluid'
            />
          </a>
        </div>
      </div>
      <div className='d-flex flex-wrap align-items-start gap-4'>
        <div>
          <a
            href='https://www.g2.com/products/mockoon-mockoon/reviews'
            target='_blank'
          >
            <img
              src='/images/directories/g2.png'
              alt='G2 rating 4.5'
              width='120'
              className='img-fluid'
            />
          </a>
        </div>
        <div>
          <a href='https://www.capterra.com/p/211671/Mockoon/' target='_blank'>
            <img
              src='/images/directories/capterra.png'
              alt='Capterra rating 4.5'
              width='120'
              className='img-fluid'
            />
          </a>
        </div>
        <div>
          <a
            href='https://www.producthunt.com/products/mockoon'
            target='_blank'
          >
            <img
              src='/images/directories/producthunt.png'
              alt='Producthunt rating 5'
              width='120'
              className='img-fluid'
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialProof;
