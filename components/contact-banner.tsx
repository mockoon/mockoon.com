import Link from 'next/link';
import { FunctionComponent } from 'react';

const ContactBanner: FunctionComponent<{
  title?: string;
  ctaText?: string;
}> = function (props) {
  return (
    <div className='bg-gray-200'>
      <div className='container py-5 border-bottom border-gray-300'>
        <div className='row align-items-center text-center text-lg-start'>
          <div className='col-12 col-lg-9'>
            <h4 className='mb-4 mb-lg-1'>
              {props.title ||
                'Feedback? Questions? We are always here to help.'}
            </h4>
          </div>
          <div className='col-12 col-lg-3 d-flex justify-content-end'>
            <Link href='/contact/'>
              <button className='col-12 btn btn-primary-soft'>
                <span> {props.ctaText || 'Contact us'}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
