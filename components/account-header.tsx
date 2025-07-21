import { FunctionComponent } from 'react';
import { useCurrentUser } from '../utils/queries';

const AccountHeader: FunctionComponent<{
  title: string;
  subtitle: string;
  showWebappLink?: boolean;
}> = function ({ title, subtitle, showWebappLink }) {
  showWebappLink = showWebappLink ?? true;

  const { isLoading, data: userData } = useCurrentUser();
  const canSeeWebApp =
    !isLoading &&
    userData?.plan !== 'FREE' &&
    (!userData?.teamId ||
      (userData?.teamRole !== 'team_admin' &&
        userData?.teamRole !== 'billing'));

  return (
    <header className='bg-dark pt-9 pb-11 d-md-block'>
      <div className='container-md'>
        <div className='row align-items-center'>
          <div className='col'>
            <h1 className='fw-bold text-white mb-2'>{title}</h1>
            <p className='fs-lg text-white text-opacity-75 mb-0'>{subtitle}</p>
          </div>

          {showWebappLink && canSeeWebApp && (
            <div className='col-auto'>
              <a
                className='btn btn-sm bg-gray-300 bg-opacity-20 bg-opacity-25-hover text-white me-2'
                href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}`}
                target='_blank'
              >
                Open web app{' '}
                <i className='icon-open ps-2' aria-hidden='true'></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AccountHeader;
