import { FunctionComponent } from 'react';

const AccountHeader: FunctionComponent<{
  title: string;
  subtitle: string;
}> = function ({ title, subtitle }) {
  return (
    <header className='bg-dark pt-9 pb-11 d-md-block'>
      <div className='container-md'>
        <div className='row align-items-center'>
          <div className='col'>
            <h1 className='fw-bold text-white mb-2'>{title}</h1>
            <p className='fs-lg text-white text-opacity-75 mb-0'>{subtitle}</p>
          </div>

          <div className='col-auto'>
            <a
              className='btn btn-sm bg-gray-300 bg-opacity-20 bg-opacity-25-hover text-white me-2'
              href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}`}
              target='_blank'
            >
              Open web app <i className='icon-open ps-2' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccountHeader;
