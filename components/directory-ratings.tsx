import { FunctionComponent } from 'react';

const DirectoryRatings: FunctionComponent = function () {
  return (
    <div className='d-flex flex-wrap justify-content-between'>
      <div>
        <a href='https://www.g2.com/products/mockoon-mockoon' target='_blank'>
          <img
            src='/images/directories/g2.png'
            alt='G2 rating 4.5'
            width='150'
            className='img-fluid'
          />
        </a>
      </div>
      <div>
        <a href='https://www.capterra.com/p/211671/Mockoon/' target='_blank'>
          <img
            src='/images/directories/capterra.png'
            alt='Capterra rating 4.5'
            width='150'
            className='img-fluid'
          />
        </a>
      </div>
      <div>
        <a href='https://www.producthunt.com/products/mockoon' target='_blank'>
          <img
            src='/images/directories/producthunt.png'
            alt='Producthunt rating 5'
            width='150'
            className='img-fluid'
          />
        </a>
      </div>
    </div>
  );
};

export default DirectoryRatings;
