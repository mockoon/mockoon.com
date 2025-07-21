import { TeamRoles } from '@mockoon/cloud';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import { planNames } from '../../constants/plans';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentTeam, useCurrentUser } from '../../utils/queries';

const roleLabels: Record<TeamRoles, string> = {
  owner: 'Owner',
  team_admin: 'Team admin',
  billing: 'Billing',
  user: 'User'
};
const meta = {
  title: 'My account - Manage team users',
  description: 'Manage your Mockoon Cloud subscription users'
};

const AccountUsers: FunctionComponent = function () {
  const router = useRouter();
  const { getIdToken, isLoading: isAuthLoading, user, isAuth } = useAuth();
  const { isLoading: isUserLoading, data: userData } = useCurrentUser();
  const [showAddModal, setShowAddModal] = useState<'member' | 'supportMember'>(
    null
  );
  const { data: teamData, refetch: teamRefetch } = useCurrentTeam(
    userData?.teamId,
    userData?.teamRole
  );
  const {
    register: registerAddUserFormField,
    handleSubmit,
    reset: resetAddUserForm
  } = useForm<{
    email: string;
    role: TeamRoles;
  }>();
  const canManageUsers =
    (userData?.plan === 'TEAM' || userData?.plan === 'ENTERPRISE') &&
    (userData?.teamRole === 'team_admin' || userData?.teamRole === 'owner');

  const members = teamData?.members.filter(
    (member) => member.role !== 'billing' && member.role !== 'team_admin'
  );
  const supportMembers = teamData?.members.filter(
    (member) => member.role === 'billing' || member.role === 'team_admin'
  );

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
        userData?.plan !== 'TEAM' &&
        userData?.plan !== 'ENTERPRISE'
      ) {
        router.push('/account/info/');
      }
    }
  }, [isAuthLoading, user, isAuth, isUserLoading, userData?.plan]);

  const {
    mutate: addUser,
    isError: isAddUserError,
    error: addUserError,
    isPending: isAddingUser
  } = useMutation({
    mutationFn: async (data: { email: string; role: TeamRoles }) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team`,
        {
          body: JSON.stringify(data),
          method: 'POST',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 204) {
        const data = await response.json();

        throw new Error(data.message);
      }

      resetAddUserForm();
    },
    onError: (error) => {},
    onSuccess: (data) => {
      teamRefetch();
      setShowAddModal(null);
    }
  });

  const { mutate: removeUser, isPending: isRemovingUser } = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team`,
        {
          body: JSON.stringify({ email }),
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 204) {
        const data = await response.json();

        throw new Error(data.message);
      }
    },
    onError: (error) => {},
    onSuccess: (data) => {
      teamRefetch();
    }
  });

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader title='My account' subtitle='Manage your plan users' />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <Modal
                  show={showAddModal != null}
                  onHide={() => setShowAddModal(null)}
                  centered
                  scrollable={false}
                >
                  <Modal.Header closeButton className='p-4'>
                    <Modal.Title>
                      Add a new{' '}
                      {showAddModal === 'supportMember' ? 'support' : ''} user
                    </Modal.Title>
                  </Modal.Header>

                  <form
                    onSubmit={(event) => {
                      handleSubmit((data) => {
                        addUser(data);
                      })(event);
                    }}
                  >
                    <Modal.Body className='p-4'>
                      <div className='col-auto'>
                        <label htmlFor='user-email' className='col-form-label'>
                          Email address
                        </label>
                      </div>
                      <div className='col-auto'>
                        <input
                          type='email'
                          id='user-email'
                          autoComplete='email'
                          className='form-control form-control-xs'
                          placeholder='user@example.org'
                          required
                          {...registerAddUserFormField('email')}
                        />
                      </div>
                      <div className='col-auto'>
                        <label htmlFor='user-role' className='col-form-label'>
                          Role
                        </label>
                      </div>
                      <div className='col-auto flex-grow-1'>
                        <select
                          id='user-role'
                          className='form-select form-control-xs'
                          aria-label='Default select example'
                          required
                          {...registerAddUserFormField('role')}
                        >
                          {showAddModal === 'member' && (
                            <option value='user'>User</option>
                          )}
                          {showAddModal === 'supportMember' &&
                            !teamData?.members.find(
                              (member) => member.role === 'team_admin'
                            ) && (
                              <option value='team_admin'>
                                Team admin (max 1 per team)
                              </option>
                            )}
                          {showAddModal === 'supportMember' &&
                            !teamData?.members.find(
                              (member) => member.role === 'billing'
                            ) && (
                              <option value='billing'>
                                Billing (max 1 per team)
                              </option>
                            )}
                        </select>
                        <p className='form-text text-gray-700 mb-0'>
                          <Link href='/cloud/docs/roles-permissions/'>
                            <small>Learn more about roles</small>
                          </Link>
                        </p>
                      </div>

                      <p className='mt-4 mb-0'>
                        <small className='text-gray-700'>
                          To add a user, please enter their email address and
                          select a role. The user must have a Mockoon account to
                          be added to your team.
                        </small>
                      </p>
                    </Modal.Body>
                    <Modal.Footer className='p-4'>
                      {isAddingUser && <Spinner small />}
                      {isAddUserError && (
                        <p className='text-danger text-center my-0'>
                          {(addUserError as any)?.message}
                        </p>
                      )}
                      <button
                        className='btn btn-xs btn-primary ms-auto'
                        type='submit'
                        disabled={isAddingUser}
                      >
                        Add
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal>
                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>
                            {planNames[teamData?.plan]} plan users
                          </h4>
                          <small className='text-gray-700 ms-auto'>
                            Need more seats? Contact us at{' '}
                            <a href='mailto:support@mockoon.com'>
                              support@mockoon.com
                            </a>
                          </small>
                        </div>
                        <div className='col-auto'>
                          {isUserLoading ? (
                            <Spinner />
                          ) : (
                            <small
                              className={
                                members?.length >= teamData?.seats
                                  ? 'text-danger'
                                  : 'text-gray-700'
                              }
                            >
                              {members?.length}/{teamData?.seats} seats
                            </small>
                          )}
                        </div>
                        {canManageUsers && (
                          <div className='col-auto'>
                            <button
                              className={`btn btn-xs btn-primary `}
                              type='button'
                              disabled={members?.length >= teamData?.seats}
                              onClick={() => setShowAddModal('member')}
                            >
                              Invite user
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        {isUserLoading ? (
                          <Spinner />
                        ) : (
                          members?.map((member, memberIndex) => {
                            return (
                              <div
                                key={`member${memberIndex}`}
                                className='list-group-item'
                              >
                                <div className='row align-items-center'>
                                  <div className='col-6'>
                                    <p className='mb-0'>
                                      {member.email}{' '}
                                      {member.uid === user?.uid && (
                                        <span className='badge rounded-pill ms-4'>
                                          <span className='h6 text-uppercase fw-bold'>
                                            <i className='icon-account_circle me-2'></i>
                                            you
                                          </span>
                                        </span>
                                      )}
                                      <span
                                        className={`badge rounded-pill ms-4 ${
                                          member.role === 'owner'
                                            ? 'text-bg-primary-subtle'
                                            : 'text-bg-secondary-subtle'
                                        }`}
                                      >
                                        <span className='h6 text-uppercase fw-bold'>
                                          {roleLabels[member.role]}
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                  {canManageUsers &&
                                    member.uid !== user?.uid &&
                                    member.role !== 'owner' && (
                                      <div className='col-auto ms-auto'>
                                        <button
                                          className={`btn btn-xs btn-danger-subtle`}
                                          onClick={() =>
                                            removeUser(member.email)
                                          }
                                          disabled={isRemovingUser}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    )}
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>Support users</h4>
                          <small className='text-gray-700 ms-auto'>
                            You can add up to 2 support users to your team
                            without consuming a seat.{' '}
                            <Link href='/cloud/docs/roles-permissions/'>
                              Learn more about roles
                            </Link>
                          </small>
                        </div>

                        {canManageUsers && (
                          <div className='col-auto'>
                            <button
                              className={`btn btn-xs btn-primary`}
                              type='button'
                              disabled={supportMembers?.length >= 2}
                              onClick={() => setShowAddModal('supportMember')}
                            >
                              Invite support user
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        {isUserLoading ? (
                          <Spinner />
                        ) : supportMembers?.length > 0 ? (
                          supportMembers?.map((member, memberIndex) => {
                            return (
                              <div
                                key={`member${memberIndex}`}
                                className='list-group-item'
                              >
                                <div className='row align-items-center'>
                                  <div className='col-6'>
                                    <p className='mb-0'>
                                      {member.email}{' '}
                                      {member.uid === user?.uid && (
                                        <span className='badge rounded-pill text-bg-success-subtle ms-4'>
                                          <span className='h6 text-uppercase fw-bold'>
                                            <i className='icon-account_circle me-2'></i>
                                            you
                                          </span>
                                        </span>
                                      )}
                                      <span
                                        className={`badge rounded-pill ms-4 ${
                                          member.role === 'owner'
                                            ? 'text-bg-primary-subtle'
                                            : 'text-bg-secondary-subtle'
                                        }`}
                                      >
                                        <span className='h6 text-uppercase fw-bold'>
                                          {roleLabels[member.role]}
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                  {canManageUsers &&
                                    member.uid !== user?.uid && (
                                      <div className='col-auto ms-auto'>
                                        <button
                                          className={`btn btn-xs btn-danger-subtle`}
                                          onClick={() =>
                                            removeUser(member.email)
                                          }
                                          disabled={isRemovingUser}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    )}
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p className='text-center text-gray-700 mb-0'>
                            No support users found
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </Layout>
  );
};

export default AccountUsers;
