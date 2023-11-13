import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { useAuth } from '../utils/auth';

const AccountHeader: FunctionComponent = function () {
  const auth = useAuth();
  const router = useRouter();

  const logout = async () => {
    await auth.logout();
  };

  const subtitles = {
    info: 'General information',
    security: 'Manage your password',
    subscription: 'Manage your subscription',
    users: 'Manage your plan users'
  };

  return (
    <header className='bg-dark pt-9 pb-11 d-md-block'>
      <div className='container-md'>
        <div className='row align-items-center'>
          <div className='col'>
            <h1 className='fw-bold text-white mb-2'>My account</h1>
            <p className='fs-lg text-white text-opacity-75 mb-0'>
              {subtitles[router.asPath.split('/')[2]]}
            </p>
          </div>
          <div className='col-auto'>
            <button
              className='btn btn-sm bg-gray-300 bg-opacity-20 bg-opacity-25-hover text-white'
              onClick={async () => logout()}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccountHeader;
