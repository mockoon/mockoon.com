import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import AccountHeader from '../../../components/account-header';
import LoadingPage from '../../../components/loading-page';
import Meta from '../../../components/meta';
import PlansView from '../../../components/plans';
import Layout from '../../../layout/layout';
import { useAuth } from '../../../utils/auth';

const meta = {
  title: 'My account - Subscribe',
  description: 'Subscribe to a new plan'
};

const AccountSubscribe: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader title='My account' subtitle='Subscribe to a plan' />
          <PlansView showTagline={false} showRegions={false} />
        </>
      )}
    </Layout>
  );
};

export default AccountSubscribe;
