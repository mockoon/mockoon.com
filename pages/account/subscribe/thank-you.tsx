import { Plans } from '@mockoon/cloud';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import AccountHeader from '../../../components/account-header';
import Meta from '../../../components/meta';
import PaddleScript from '../../../components/paddle';
import Layout from '../../../layout/layout';
import { useAuth } from '../../../utils/auth';
import { useCurrentUser } from '../../../utils/queries';

const meta = {
  title: 'My account - Thank you for trying Mockoon Cloud!',
  description: 'Discover your Mockoon Cloud plan'
};

const SubscribeThankYou: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { data: userData } = useCurrentUser();

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

      <PaddleScript />
      <AccountHeader title='' subtitle='' showLogout={false} />

      <main className='pb-8 pb-md-11 mt-md-n6'>
        <div className='container-md'>
          <div className='card card-bleed shadow-light-lg mb-6'>
            <div className='card-header'>
              <div className='row align-items-center'>
                <div className='col'>
                  <h3>
                    <div className='badge badge-rounded-circle text-bg-success me-2'>
                      <i className='icon-check'></i>
                    </div>{' '}
                    Thank you for trying Mockoon Cloud!
                  </h3>
                  <p className='text-gray-700 mb-0'>
                    We will send you an email before your trial ends. In the
                    meantime, here are the next steps to get started with
                    Mockoon Cloud.
                  </p>
                </div>
                <div className='col-auto'>
                  <button
                    className={`btn btn-xs btn-primary-subtle `}
                    type='button'
                    onClick={() => {
                      router.push('/account/subscription/');
                    }}
                  >
                    Manage your subscription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='card card-bleed shadow-light-lg mb-6'>
            <div className='card-header border-0'>
              <div className='row align-items-center'>
                <div className='col'>
                  <h3>
                    1. <span className='text-primary'>Getting started</span>{' '}
                    with Mockoon Cloud
                  </h3>
                </div>
                <div className='col-auto'>
                  <Link
                    href={'/tutorials/getting-started-with-mockoon-cloud/'}
                    className='btn btn-xs btn-primary-subtle mt-4'
                  >
                    Check the getting started guide
                  </Link>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <p className='mb-0'>
                If you are new to Mockoon Cloud, we recommend you check our{' '}
                <Link href='/tutorials/getting-started-with-mockoon-cloud/'>
                  getting started guide
                </Link>{' '}
                to learn how to <strong>create</strong> your first mock APIs,{' '}
                <strong>deploy</strong> them to the cloud, and{' '}
                <strong>collaborate</strong> with your team.
              </p>
              <div className='col-md-6 my-4 m-auto'>
                <Link href='/tutorials/getting-started-with-mockoon-cloud/'>
                  <img
                    src='/images/tutorials/tutorial-getting-started-mockoon-cloud.png'
                    alt=''
                    className='img-fluid shadow'
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className='card card-bleed shadow-light-lg mb-6'>
            <div className='card-header border-0'>
              <div className='row align-items-center'>
                <div className='col'>
                  <h3>
                    2. Mockoon Cloud's{' '}
                    <span className='text-primary'>documentation</span>
                  </h3>
                </div>
                <div className='col-auto'>
                  <Link
                    href={'/docs/latest/mockoon-cloud/overview/'}
                    className='btn btn-xs btn-primary-subtle mt-4'
                  >
                    Check the documentation
                  </Link>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <p className='mb-0'>
                If you want to learn more about Mockoon Cloud's features and how
                to use them, you can check each feature's detailed
                documentation:
              </p>
              <ul>
                <li>
                  <Link href='/docs/latest/mockoon-cloud/api-mock-cloud-deployments/'>
                    API mock deployments
                  </Link>
                  : Deploy your mock APIs in the cloud and share them with your
                  team or the world.
                </li>
                <li>
                  <Link href='/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'>
                    Data synchronization and team collaboration
                  </Link>
                  : Synchronize your mock APIs in the cloud, share them with
                  your team, and collaborate in real-time.
                </li>
                <li>
                  <Link href='/docs/latest/mockoon-cloud/templates-and-ai-assistant/'>
                    AI assistants
                  </Link>
                  : Use our AI assistants to generate realistic mock data and
                  HTTP endpoints.
                </li>
              </ul>
            </div>
          </div>
          {userData?.plan !== Plans.FREE && userData?.plan !== Plans.SOLO && (
            <div className='card card-bleed shadow-light-lg mb-6'>
              <div className='card-header border-0'>
                <div className='row align-items-center'>
                  <div className='col'>
                    <h3>
                      3. <span className='text-primary'>Invite</span> your team
                      members
                    </h3>
                  </div>
                  <div className='col-auto'>
                    <Link
                      href={'/account/users/'}
                      className='btn btn-xs btn-primary-subtle mt-4'
                    >
                      Invite members
                    </Link>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <p className='mb-0'>
                  Do not forget to invite your team members to collaborate on
                  your mock APIs. You can manage your team members on your{' '}
                  <Link href='/account/users/'>team management page</Link>.
                  <div className='col-md-6 my-4 m-auto'>
                    <Link href='/account/users/'>
                      <img
                        src='/images/account/subscribe-thank-you/add-team-members.png'
                        alt=''
                        className='img-fluid shadow'
                      />
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default SubscribeThankYou;
