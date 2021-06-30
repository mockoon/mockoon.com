import Link from 'next/link';
import { FunctionComponent } from 'react';

const DownloadCTA: FunctionComponent = function () {
  return (
    <section>
      <div className='container pb-5 border-bottom'>
        <div className='row align-items-center py-8 border-bottom border-gray-300 text-center text-lg-start'>
          <div className='col-12 col-lg-9'>
            <h3 className='fw-bold text-gray-700 mb-1'>
              <i className='icon-download'></i> Get Mockoon
            </h3>
            <p className='text-muted mb-6 mb-lg-0'>
              Get Mockoon latest version and start creating mock APIs!
            </p>
          </div>

          <div className='col-12 col-lg-3'>
            <Link href='/download/'>
              <button className='col-12 btn btn-primary-soft'>
                <span>Download</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
