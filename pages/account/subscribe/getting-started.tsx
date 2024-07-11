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
  title: 'My account - Thank you for your purchase!',
  description: 'Discover your Mockoon Pro plan'
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
      <AccountHeader
        title='My account'
        subtitle='Getting started with Mockoon Pro'
      />

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
                    Thank you for your purchase!
                  </h3>
                  <p className='text-gray-700 mb-0'>
                    Not sure what should you do next? Follow this guide to get
                    started with Mockoon Cloud.
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

            <div className='card-body'>
              <div className='list-group list-group-flush'>
                <div className='list-group-item'>
                  <div className='row align-items-start'>
                    <div className='col'>
                      <h3>
                        1.{' '}
                        <span className='text-primary'>Install or update</span>{' '}
                        the desktop application
                      </h3>
                      <p className='mb-0'>
                        To fully benefit from your Mockoon Pro plan, make sure
                        you have the latest version of the desktop application
                        installed.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/desktop-application-download-screenshot.png'
                          alt='screenshot of the Mockoon desktop application download page'
                          className='img-fluid shadow'
                        />
                      </div>
                      <Link
                        href={'/download/'}
                        className='btn btn-xs btn-primary-subtle mt-4'
                      >
                        <i className='icon-arrow_forward'></i> Go to the
                        download page
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='list-group-item'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h3>
                        2. <span className='text-primary'>Log in</span> to your
                        account in the desktop application
                      </h3>
                      <p className='mb-0'>
                        To enable your Mockoon Pro features, you need to{' '}
                        <strong>log in</strong> to your account in the desktop
                        application in the upper right corner.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/desktop-application-login.png'
                          alt='view of the Mockoon desktop application account menu'
                          className='img-fluid shadow'
                        />
                      </div>
                      <p className='mb-0'>
                        If you are already logged in, you can also click on{' '}
                        <strong>"Refresh account information"</strong> in the
                        account menu.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/desktop-application-refresh.png'
                          alt='view of the Mockoon desktop application account menu with refresh button'
                          className='img-fluid shadow'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='list-group-item'>
                  <div className='row align-items-start'>
                    <div className='col'>
                      <h3>
                        3. <span className='text-primary'>Deploy</span> your
                        first mock API
                      </h3>
                      <p className='mb-0'>
                        After{' '}
                        <Link href='/tutorials/getting-started/'>
                          creating your first mock APIs
                        </Link>
                        . You are now ready to{' '}
                        <strong>deploy them to the cloud</strong>. Click on the
                        "Deploy to the cloud"menu entry in the environment menu.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/deploy-environment-menu.png'
                          alt='View of the Mockoon desktop application environment menu with the deploy entry highlighted'
                          className='img-fluid shadow'
                        />
                      </div>
                      <p className='mb-0'>
                        You can then <strong>configure</strong> your deployment
                        and deploy your mock API to the cloud in one click.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/deploy-environment-dialog.png'
                          alt='view of the deployment dialog'
                          className='img-fluid shadow'
                        />
                      </div>
                      <p className='mb-0'>
                        Your mock API is now available in the cloud on a{' '}
                        <strong>unique URL</strong>. You can share it with your
                        team or use it in your applications.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/deploy-environment-management-dialog.png'
                          alt='view of the deployment management dialog'
                          className='img-fluid shadow'
                        />
                      </div>
                      <Link
                        href={
                          '/docs/latest/mockoon-cloud/api-mock-cloud-deployments/'
                        }
                        className='btn btn-xs btn-primary-subtle mt-4'
                      >
                        <i className='icon-arrow_forward'></i> Read the
                        documentation
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='list-group-item'>
                  <div className='row align-items-start'>
                    <div className='col'>
                      <h3>
                        4. <span className='text-primary'>Synchronize</span>{' '}
                        your mocks or{' '}
                        <span className='text-primary'>collaborate</span> in
                        real-time with your team
                      </h3>
                      <p className='mb-0'>
                        As soon as you are logged in, you will be able to{' '}
                        <strong>create cloud mocks</strong> and synchronize them
                        between your devices or collaborate in real-time with
                        your team.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/create-cloud-environment.png'
                          alt='environment menu with create cloud environment entry highlighted'
                          className='img-fluid shadow'
                        />
                      </div>
                      <p className='mb-0'>
                        Cloud environments are{' '}
                        <strong>automatically synchronized</strong> with the
                        cloud and between your devices. You can also invite your
                        team members to collaborate on your mocks.
                      </p>
                      <Link
                        href={
                          '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'
                        }
                        className='btn btn-xs btn-primary-subtle mt-4'
                      >
                        <i className='icon-arrow_forward'></i> Read the
                        documentation
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='list-group-item'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h3>
                        5. <span className='text-primary'>Generate</span> HTTP
                        endpoints with our AI assistant
                      </h3>
                      <p className='mb-0'>
                        Use our AI assistant to{' '}
                        <strong>
                          generate JSON templates and HTTP endpoints
                        </strong>{' '}
                        with realistic responses path and data based on your
                        prompt.
                      </p>
                      <div className='col-md-8 my-4'>
                        <img
                          src='/images/account/subscribe-getting-started/generate-http-endpoints.png'
                          alt='view of the ai assistant dialog generating an HTTP endpoint to update an object representing a flight'
                          className='img-fluid shadow'
                        />
                      </div>

                      <Link
                        href={
                          '/docs/latest/mockoon-cloud/templates-and-ai-assistant/'
                        }
                        className='btn btn-xs btn-primary-subtle mt-4'
                      >
                        <i className='icon-arrow_forward'></i> Read the
                        documentation
                      </Link>
                    </div>
                  </div>
                </div>

                {userData?.plan !== Plans.FREE &&
                  userData?.plan !== Plans.SOLO && (
                    <div className='list-group-item'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h3>
                            6. <span className='text-primary'>Invite</span> team
                            members to collaborate
                          </h3>
                          <p className='mb-0'>
                            Do not forget to invite your team members to
                            collaborate on your mocks. You can invite them from
                            the <strong>team management</strong> page.
                          </p>
                          <div className='col-md-8 my-4'>
                            <img
                              src='/images/account/subscribe-getting-started/add-team-members.png'
                              alt='view of the ai assistant dialog generating an HTTP endpoint to update an object representing a flight'
                              className='img-fluid shadow'
                            />
                          </div>

                          <Link
                            href={'/account/users/'}
                            className='btn btn-xs btn-primary-subtle mt-4'
                          >
                            <i className='icon-arrow_forward'></i> Invite team
                            members
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SubscribeThankYou;
