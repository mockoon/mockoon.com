import { FunctionComponent } from 'react';
import AccountHeader from '../../components/account-header';
import Meta from '../../components/meta';
import Plans from '../../components/plans';
import Layout from '../../layout/layout';

const meta = {
  title: 'My account',
  description: 'Subscribe to a new plan'
};

const AccountSubscribe: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <AccountHeader />

      <Plans showFree={false} showTagline={false} />
    </Layout>
  );
};

export default AccountSubscribe;
