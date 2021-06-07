import Link from 'next/link';
import { FunctionComponent } from 'react';

const Download: FunctionComponent = function () {
  return (
    <section>
      <div className='container pb-6 pb-md-8 border-bottom'>
        <div className='row align-items-center bg-gray-200 p-5 card-border cta-border'>
          <div className='col-12 col-md '>
            <h3 className='fw-bold mb-1'>
              <i className='icon-download'></i> Get Mockoon
            </h3>
            <p className='text-muted mb-6 mb-md-0'>
              Get Mockoon latest version and start creating mock APIs!
            </p>
          </div>

          <div className='col-auto'>
            <Link href='/#download'>
              <button className='btn btn-primary'>
                <span>Download</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
