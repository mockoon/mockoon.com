import Link from 'next/link';
import { FunctionComponent } from 'react';

const ContactBanner: FunctionComponent<{}> = function (props) {
  return (
    <div className='bg-gray-200'>
      <div className='container py-8 border-bottom border-gray-300'>
        <div className='row align-items-center text-center text-lg-start'>
          <div className='col-12 col-lg-9'>
            <h4 className='mb-4 mb-lg-1 fw-bold text-gray-700'>
              Feedback? Questions? We are always here to help.
            </h4>
          </div>
          <div className='col-12 col-lg-3 d-flex justify-content-end'>
            <Link href='/contact/'>
              <a className='col-12 btn btn-primary-soft'>
                <span> Contact us</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
