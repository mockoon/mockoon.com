import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import LoadingPage from '../components/loading-page';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const EmailLinkAction: FunctionComponent = function () {
  const router = useRouter();
  let oobCode = router.query.oobCode?.toString();
  let mode: string = router.query.mode as string;

  useEffect(() => {
    if (oobCode) {
      if (mode === 'verifyEmail' || mode === 'verifyAndChangeEmail') {
        router.push(`/email-verification/?code=${oobCode}`);
      } else if (mode === 'revertSecondFactorAddition') {
        router.push(`/unenroll-tfa/?code=${oobCode}`);
      } else if (mode === 'recoverEmail') {
        router.push(`/recover-email/?code=${oobCode}`);
      } else if (mode === 'resetPassword') {
        router.push(`/reset-password/?code=${oobCode}`);
      } else {
        router.push('/');
      }
    }
  }, [mode, oobCode]);

  return (
    <Layout footerBanner='download'>
      <Meta title='' description='' />

      <LoadingPage />
    </Layout>
  );
};

export default EmailLinkAction;
