import Link from 'next/link';
import { FunctionComponent } from 'react';

const DownloadCTA: FunctionComponent = function () {
  return (
    <div className='row align-items-center text-center text-lg-start'>
      <div className='col-12 col-lg-9'>
        <h3 className='fw-bold text-gray-700 mb-1'>Get started today</h3>
        <p className='text-muted mb-6 mb-lg-0'>
          Join thousands of IT professionals who are already using Mockoon to
          work with APIs better and faster
        </p>
      </div>

      <div className='col-12 col-lg-3'>
        <Link href='/download/' className='col-12 btn btn-primary-soft'>
          <span>
            <i className='icon-download'></i> Download
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DownloadCTA;
