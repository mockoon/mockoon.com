import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentUser } from '../../utils/queries';
import { triggerBrowserDownload } from '../../utils/utils';

const meta = {
  title: 'My account - Audit trail',
  description: 'Access and export your Mockoon Cloud audit trail'
};

const AccountAuditTrail: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading, getIdToken } = useAuth();
  const router = useRouter();
  const { isLoading: isUserLoading, data: userData } = useCurrentUser();
  const [isExporting, setIsExporting] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      } else if (
        user &&
        isAuth &&
        !isUserLoading &&
        (userData?.plan === 'FREE' || userData?.plan === 'SOLO')
      ) {
        router.push('/account/info/');
      }
    }
  }, [isAuthLoading, user, isAuth, isUserLoading, userData?.plan]);

  const exportAuditTrail = async () => {
    setIsExporting(true);
    setHasError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team/audit`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        const auditData = await response.json();

        triggerBrowserDownload(
          `audit-trail-${new Date().toISOString().split('T')[0]}.json`,
          JSON.stringify(auditData, null, 2)
        );
      } else {
        setHasError(
          'Failed to export audit trail. Please try again later or contact support.'
        );
      }
    } catch (error) {
      setHasError(
        'Failed to export audit trail. Please try again later or contact support.'
      );
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading || (isUserLoading && <LoadingPage />)}

      {!isAuthLoading && !isUserLoading && isAuth && (
        <>
          <AccountHeader title='My account' subtitle='Audit trail' />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  {(userData?.plan === 'TEAM' ||
                    userData?.plan === 'ENTERPRISE') && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <h4 className='mb-0'>Audit trail</h4>
                        <small className='text-gray-700'>
                          Access and export your team's audit trail. The
                          retention period for audit events for your plan is{' '}
                          {userData?.plan === 'TEAM'
                            ? '30 days'
                            : userData?.plan === 'ENTERPRISE'
                              ? '1 year'
                              : ''}
                          .{' '}
                          <Link href='/cloud/docs/audit-trail/'>
                            Learn more
                          </Link>
                        </small>
                      </div>
                      <div className='card-body'>
                        <div className='list-group list-group-flush'>
                          <div className='list-group-item'>
                            <div className='d-flex align-items-center'>
                              <button
                                className='btn btn-primary'
                                onClick={exportAuditTrail}
                                disabled={isExporting}
                              >
                                Export audit trail
                              </button>
                              {isExporting && (
                                <div className='ms-2'>
                                  <Spinner small />
                                </div>
                              )}
                            </div>
                            {hasError && (
                              <p className='col-auto text-danger fw-bold mt-2 mb-0'>
                                {hasError}
                              </p>
                            )}
                            <p className='mt-3 mb-0'>
                              <small className='text-gray-700'>
                                Export will download a JSON file with all audit
                                events from the past{' '}
                                {userData?.plan === 'TEAM'
                                  ? '30 days'
                                  : userData?.plan === 'ENTERPRISE'
                                    ? 'year'
                                    : ''}
                                .
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </Layout>
  );
};

export default AccountAuditTrail;
