type ComparisonValue = {
  included: boolean;
  label: string;
};

const comparisonGroups = [
  {
    title: 'Mock creation',
    rows: [
      {
        feature: 'Advanced API mocking',
        openSource: {
          included: true,
          label: 'Rules, templating, CRUD, proxying, and recording'
        },
        pro: { included: true, label: 'Everything in Open Source' }
      },
      {
        feature: 'Desktop application and CLI',
        openSource: { included: true, label: 'Included' },
        pro: { included: true, label: 'Included' }
      },
      {
        feature: 'Embedded web application',
        openSource: { included: false, label: 'Desktop installation required' },
        pro: { included: true, label: 'Full workspace in any browser' }
      }
    ]
  },
  {
    title: 'Team workflow',
    rows: [
      {
        feature: 'Real-time collaboration',
        openSource: { included: false, label: 'Share files or use Git' },
        pro: { included: true, label: 'Shared workspace with live presence' }
      },
      {
        feature: 'Mock API deployments',
        openSource: {
          included: false,
          label: 'Manage individual CLI or Docker deployments'
        },
        pro: {
          included: true,
          label: 'Deploy and manage instances from one place'
        }
      },
      {
        feature: 'Centralized team workspace',
        openSource: { included: false, label: 'Local files and tooling' },
        pro: { included: true, label: 'Self-hosted on your infrastructure' }
      }
    ]
  },
  {
    title: 'Administration & control',
    rows: [
      {
        feature: 'Users, invitations, and access roles',
        openSource: { included: false, label: 'Not included' },
        pro: { included: true, label: 'Centralized administration' }
      },
      {
        feature: 'OpenID Connect (OIDC) SSO',
        openSource: { included: false, label: 'Not included' },
        pro: { included: true, label: 'Connect your identity provider' }
      },
      {
        feature: 'Administrative and workspace audit trail',
        openSource: { included: false, label: 'Not included' },
        pro: { included: true, label: 'Searchable activity history' }
      },
      {
        feature: 'Support',
        openSource: { included: true, label: 'Community support' },
        pro: { included: true, label: 'Priority support from our team' }
      }
    ]
  }
];

const ComparisonCell = ({ value }: { value: ComparisonValue }) => (
  <div className='d-flex align-items-start gap-2'>
    <span
      className={`fw-bold fs-3 lh-1 ${value.included ? 'text-success' : 'text-gray-500'}`}
      aria-hidden='true'
    >
      <i className={value.included ? 'icon-check' : 'icon-clear'}></i>
    </span>
    <span>{value.label}</span>
  </div>
);

const OssProComparison = function () {
  return (
    <>
      <div className='text-center mx-auto mb-6' style={{ maxWidth: '700px' }}>
        <h2 className='fw-bold mb-3'>Choose how your team works</h2>
        <p className='lead text-gray-700 mb-0'>
          Build mocks locally for free, or add the shared workspace, deployment,
          and administration capabilities your organization needs.
        </p>
      </div>

      <div className='table-responsive border rounded'>
        <table className='table table-hover align-middle mb-0'>
          <thead>
            <tr>
              <th className='py-4 px-4' scope='col'>
                Capability
              </th>
              <th className='py-4 px-4' scope='col'>
                <span className='d-block fw-bold'>Mockoon Open Source</span>
                <small className='text-gray-600 fw-normal'>Free forever</small>
              </th>
              <th className='py-4 px-4 bg-primary-subtle' scope='col'>
                <span className='d-block fw-bold text-primary'>
                  Mockoon Pro
                </span>
                <small className='text-gray-700 fw-normal'>For teams</small>
              </th>
            </tr>
          </thead>
          {comparisonGroups.map((group) => (
            <tbody key={group.title}>
              <tr>
                <th
                  className='bg-light text-uppercase text-gray-700 small py-3 px-4'
                  colSpan={3}
                  scope='rowgroup'
                >
                  {group.title}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.feature}>
                  <th className='fw-medium py-4 px-4' scope='row'>
                    {row.feature}
                  </th>
                  <td className='py-4 px-4'>
                    <ComparisonCell value={row.openSource} />
                  </td>
                  <td className='py-4 px-4 bg-primary-subtle'>
                    <ComparisonCell value={row.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default OssProComparison;
