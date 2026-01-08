import { useMutation, useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import CodeBlock from '../../components/code-block';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import CustomTooltip from '../../components/tooltip';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentUser } from '../../utils/queries';

type TokenPermissions = string;

type Permission = {
  name: string;
  description: string;
};

enum TokenExpirationDays {
  NEVER = 'NEVER',
  SEVEN = 'SEVEN',
  THIRTY = 'THIRTY',
  SIXTY = 'SIXTY',
  NINETY = 'NINETY',
  ONE_HUNDRED_EIGHTY = 'ONE_HUNDRED_EIGHTY',
  THREE_HUNDRED_SIXTY_FIVE = 'THREE_HUNDRED_SIXTY_FIVE'
}

type TokenListItem = {
  id: string;
  name: string;
  tokenPreview: string;
  expiresAt: number;
  lastUsedAt: number;
  permissions: TokenPermissions[];
};

type CreateTokenDto = {
  name: string;
  permissions: TokenPermissions[];
  expiresInDays: TokenExpirationDays;
};

type CreateTokenResponse = {
  token: string;
  permissions: TokenPermissions[];
  tokenPreview: string;
};

const meta = {
  title: 'My account - Access tokens',
  description: 'Manage your Mockoon Cloud access tokens'
};

const expirationOptions: Array<{
  value: TokenExpirationDays;
  label: string;
}> = [
  { value: TokenExpirationDays.NEVER, label: 'Never' },
  { value: TokenExpirationDays.SEVEN, label: '7 days' },
  { value: TokenExpirationDays.THIRTY, label: '30 days' },
  { value: TokenExpirationDays.SIXTY, label: '60 days' },
  { value: TokenExpirationDays.NINETY, label: '90 days' },
  { value: TokenExpirationDays.ONE_HUNDRED_EIGHTY, label: '180 days' },
  { value: TokenExpirationDays.THREE_HUNDRED_SIXTY_FIVE, label: '365 days' }
];

const AccountAccessTokens: FunctionComponent = function () {
  const router = useRouter();
  const { getIdToken, isLoading: isAuthLoading, user, isAuth } = useAuth();
  const { isLoading: isUserLoading, data: userData } = useCurrentUser();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createdToken, setCreatedToken] = useState<CreateTokenResponse | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState<TokenListItem | null>(null);

  const {
    register,
    handleSubmit,
    reset: resetCreateForm,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CreateTokenDto>({
    defaultValues: {
      name: '',
      permissions: [],
      expiresInDays: TokenExpirationDays.THIRTY
    }
  });

  useEffect(() => {
    register('permissions', { required: true });
  }, [register]);

  const watchedPermissions = watch('permissions') ?? [];

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

  const {
    data: tokens,
    isLoading: isTokensLoading,
    isError: isTokensError,
    error: tokensError,
    refetch: refetchTokens
  } = useQuery<TokenListItem[]>({
    queryKey: ['teamTokens'],
    retry: false,
    enabled: isAuth,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error('Unable to load tokens');
      }

      return response.json();
    }
  });

  const { data: permissions, isLoading: isPermissionsLoading } = useQuery<
    Permission[]
  >({
    queryKey: ['tokensPermissions'],
    retry: false,
    enabled: isAuth,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens/permissions`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Unable to load permissions');
      }

      return response.json();
    }
  });

  const {
    mutate: createToken,
    isPending: isCreatingToken,
    isError: isCreateTokenError,
    error: createTokenError
  } = useMutation({
    mutationFn: async (payload: CreateTokenDto) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens`,
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Unable to create token');
      }

      return (await response.json()) as CreateTokenResponse;
    },
    onSuccess: (data) => {
      setCreatedToken(data);
      setCopied(false);
      refetchTokens();
    }
  });

  const {
    mutate: deleteToken,
    isPending: isDeletingToken,
    isError: isDeleteTokenError,
    error: deleteTokenError
  } = useMutation({
    mutationFn: async (tokenId: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/tokens/${tokenId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Unable to delete token');
      }
    },
    onSuccess: () => {
      setDeleteTarget(null);
      refetchTokens();
    }
  });

  function closeCreateModal() {
    setShowCreateModal(false);
    setCreatedToken(null);
    setCopied(false);
    resetCreateForm({
      name: '',
      permissions: [],
      expiresInDays: TokenExpirationDays.THIRTY
    });
  }

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader
            title='My account'
            subtitle='Manage your access tokens'
          />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>

                {/* Create token modal */}
                <Modal
                  show={showCreateModal}
                  onHide={closeCreateModal}
                  centered
                  scrollable={false}
                  size='lg'
                >
                  <Modal.Header closeButton className='p-4'>
                    <Modal.Title>
                      {createdToken ? 'Token created' : 'Create access token'}
                    </Modal.Title>
                  </Modal.Header>

                  {!createdToken ? (
                    <form
                      onSubmit={(event) => {
                        handleSubmit((data) => createToken(data))(event);
                      }}
                    >
                      <Modal.Body className='p-4'>
                        <div className='mb-3'>
                          <label
                            htmlFor='token-name'
                            className='col-form-label'
                          >
                            Name*
                          </label>
                          <input
                            id='token-name'
                            className='form-control form-control-xs'
                            required
                            {...register('name', { required: true })}
                          />
                          {errors.name && (
                            <p className='text-danger mt-2 mb-0'>
                              <small>Name is required</small>
                            </p>
                          )}
                        </div>

                        <div className='mb-3'>
                          <label className='col-form-label'>Permissions*</label>

                          <div className='d-flex flex-column gap-2'>
                            {isPermissionsLoading && <Spinner small />}
                            {permissions?.map((permission) => {
                              const checked = watchedPermissions.includes(
                                permission.name
                              );

                              return (
                                <label
                                  key={permission.name}
                                  className='d-flex align-items-start gap-2'
                                >
                                  <input
                                    type='checkbox'
                                    className='form-check-input mt-1'
                                    checked={checked}
                                    onChange={(e) => {
                                      const next = new Set(watchedPermissions);
                                      if (e.target.checked) {
                                        next.add(permission.name);
                                      } else {
                                        next.delete(permission.name);
                                      }
                                      setValue(
                                        'permissions',
                                        Array.from(next),
                                        {
                                          shouldValidate: true,
                                          shouldDirty: true
                                        }
                                      );
                                    }}
                                  />
                                  <span>
                                    <span className='d-block fw-semibold'>
                                      {permission.name}
                                      <span className='ms-2'>
                                        {permission.description && (
                                          <CustomTooltip
                                            text={permission.description}
                                          />
                                        )}
                                      </span>
                                    </span>
                                  </span>
                                </label>
                              );
                            })}
                          </div>

                          {errors.permissions && (
                            <p className='text-danger mt-2 mb-0'>
                              <small>Select at least one permission</small>
                            </p>
                          )}
                        </div>

                        <div className='mb-0'>
                          <label
                            htmlFor='token-expiration'
                            className='col-form-label'
                          >
                            Expiration
                          </label>
                          <select
                            id='token-expiration'
                            className='form-select form-control-xs'
                            required
                            {...register('expiresInDays', { required: true })}
                          >
                            {expirationOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          <p className='form-text text-gray-700 mb-0'>
                            The token will be automatically revoked after this
                            period.
                          </p>
                        </div>
                      </Modal.Body>

                      <Modal.Footer className='p-4'>
                        {isCreatingToken && <Spinner small />}

                        {isCreateTokenError && (
                          <p className='text-danger text-center my-0'>
                            {(createTokenError as any)?.message}
                          </p>
                        )}

                        <button
                          className='btn btn-xs btn-primary ms-auto'
                          type='submit'
                          disabled={isCreatingToken}
                        >
                          Create
                        </button>
                      </Modal.Footer>
                    </form>
                  ) : (
                    <>
                      <Modal.Body className='p-4'>
                        <p className='mb-3'>
                          <small className='text-gray-700'>
                            Your token has been created. Make sure to copy and
                            store it securely now as you won't be able to see it
                            again.
                          </small>
                        </p>

                        <div className='mb-3'>
                          <div className='d-flex gap-2'>
                            <CodeBlock
                              language='text'
                              code={createdToken.token}
                              lineBreak
                            />
                          </div>
                          {copied && (
                            <p className='text-success mt-2 mb-0'>
                              <small>Copied</small>
                            </p>
                          )}
                        </div>
                      </Modal.Body>

                      <Modal.Footer className='p-4'>
                        <button
                          className='btn btn-xs btn-primary ms-auto'
                          type='button'
                          onClick={closeCreateModal}
                        >
                          Done
                        </button>
                      </Modal.Footer>
                    </>
                  )}
                </Modal>

                {/* Delete token modal */}
                <Modal
                  show={deleteTarget != null}
                  onHide={() => setDeleteTarget(null)}
                  centered
                  scrollable={false}
                >
                  <Modal.Header closeButton className='p-4'>
                    <Modal.Title>Revoke token</Modal.Title>
                  </Modal.Header>

                  <Modal.Body className='p-4'>
                    <p className='mb-2'>
                      <small className='text-gray-700'>
                        Are you sure you want to revoke this token?
                      </small>
                    </p>
                    <p className='mb-0'>
                      <span className='fw-semibold'>{deleteTarget?.name}</span>{' '}
                      <small className='text-gray-700'>
                        ({deleteTarget?.tokenPreview}****)
                      </small>
                    </p>

                    {isDeleteTokenError && (
                      <p className='text-danger mt-3 mb-0'>
                        {(deleteTokenError as any)?.message}
                      </p>
                    )}
                  </Modal.Body>

                  <Modal.Footer className='p-4'>
                    {isDeletingToken && <Spinner small />}
                    <button
                      className='btn btn-xs btn-secondary'
                      type='button'
                      onClick={() => setDeleteTarget(null)}
                      disabled={isDeletingToken}
                    >
                      Cancel
                    </button>
                    <button
                      className='btn btn-xs btn-danger'
                      type='button'
                      onClick={() => deleteToken(deleteTarget.id)}
                      disabled={isDeletingToken}
                    >
                      Revoke
                    </button>
                  </Modal.Footer>
                </Modal>

                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>Access tokens</h4>
                          <small className='text-gray-700 ms-auto'>
                            Create access tokens to interact with Mockoon Cloud
                            from the CLI.{' '}
                            <Link href='/cloud/docs/access-tokens/'>
                              Learn more
                            </Link>
                          </small>
                        </div>

                        <div className='col-auto'>
                          <button
                            className='btn btn-xs btn-primary'
                            type='button'
                            onClick={() => setShowCreateModal(true)}
                            disabled={isUserLoading}
                          >
                            Add token
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        {isTokensLoading ? (
                          <Spinner />
                        ) : isTokensError ? (
                          <p className='text-danger text-center mb-0'>
                            {(tokensError as any)?.message || 'Load failed'}
                          </p>
                        ) : tokens?.length ? (
                          <>
                            <div className='list-group-item d-none d-md-block'>
                              <div className='row align-items-center'>
                                <div className='col'>
                                  <small className='text-gray-700 text-uppercase'>
                                    Name
                                  </small>
                                </div>
                                <div className='col'>
                                  <small className='text-gray-700 text-uppercase'>
                                    Preview
                                  </small>
                                </div>
                                <div className='col'>
                                  <small className='text-gray-700 text-uppercase'>
                                    Permissions
                                  </small>
                                </div>
                                <div className='col'>
                                  <small className='text-gray-700 text-uppercase'>
                                    Expires
                                  </small>
                                </div>
                                <div className='col'>
                                  <small className='text-gray-700 text-uppercase'>
                                    Last used
                                  </small>
                                </div>
                                <div className='col text-end'></div>
                              </div>
                            </div>

                            {tokens.map((token) => (
                              <div key={token.id} className='list-group-item'>
                                <div className='row align-items-center'>
                                  <div className='col'>
                                    <p className='mb-0 fw-semibold fs-sm'>
                                      {token.name}
                                    </p>
                                  </div>

                                  <div className='col mt-2 mt-md-0'>
                                    <small className='text-gray-700 d-block d-md-none'>
                                      Token
                                    </small>
                                    <p className='mb-0 fs-sm'>
                                      {token.tokenPreview}****
                                    </p>
                                  </div>

                                  <div className='col mt-2 mt-md-0'>
                                    <small className='text-gray-700 d-block d-md-none'>
                                      Permissions
                                    </small>
                                    <p
                                      className='mb-0 fs-sm'
                                      dangerouslySetInnerHTML={{
                                        __html: token.permissions?.length
                                          ? token.permissions.join('<br/>')
                                          : '—'
                                      }}
                                    ></p>
                                  </div>

                                  <div className='col mt-2 mt-md-0'>
                                    <small className='text-gray-700 d-block d-md-none'>
                                      Expires
                                    </small>
                                    <p className='mb-0 fs-sm'>
                                      {token.expiresAt
                                        ? format(
                                            token.expiresAt,
                                            "MMM dd, yyyy 'at' hh:mmaaa"
                                          )
                                        : 'Never'}
                                    </p>
                                  </div>

                                  <div className='col mt-2 mt-md-0'>
                                    <small className='text-gray-700 d-block d-md-none'>
                                      Last used
                                    </small>
                                    <p className='mb-0 fs-sm'>
                                      {token.lastUsedAt
                                        ? format(
                                            token.lastUsedAt,
                                            "MMM dd, yyyy 'at' hh:mmaaa"
                                          )
                                        : 'Never'}
                                    </p>
                                  </div>

                                  <div className='col text-md-end mt-2 mt-md-0'>
                                    <button
                                      className='btn btn-xs btn-danger-subtle'
                                      type='button'
                                      onClick={() => setDeleteTarget(token)}
                                      disabled={isDeletingToken}
                                    >
                                      Revoke
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          <p className='text-center text-gray-700 mb-0'>
                            No tokens found
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-body'>
                      <p className='mb-0'>
                        <small className='text-gray-700'>
                          <i className='icon-https me-2 text-warning'></i> Keep
                          tokens secret. If a token is exposed, revoke it and
                          create a new one.
                        </small>
                      </p>
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

export default AccountAccessTokens;
