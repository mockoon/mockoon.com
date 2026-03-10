import AlternatedFeatures from '../../components/alternated-features';
import CompanyLogos from '../../components/company-logos';
import Hero from '../../components/hero';
import LandingCta from '../../components/landing-cta';
import Meta from '../../components/meta';
import SocialProof from '../../components/social-proof';
import Layout from '../../layout/layout';

const apiSandboxingFeatures = [
  {
    title:
      'Create <span class="text-primary">isolated</span> testing environments',
    description:
      'Build completely isolated sandbox environments that mirror production without affecting live systems. Test risky operations, data modifications, and integrations safely.',
    imgSrc:
      '/images/solutions/api-sandboxing/isolated-testing-environments.png',
    imgAlt: 'Mockoon application screenshot showing sandbox environment setup'
  },
  {
    title:
      '<span class="text-primary">Simulate</span> production-like conditions',
    description:
      'Create realistic sandbox APIs that behave like production systems. Test with production-like data, configurations, and behavior patterns without any risk to live infrastructure.',
    imgSrc:
      '/images/solutions/api-sandboxing/simulate-production-conditions.png',
    imgAlt: 'Mockoon application screenshot showing production simulation'
  },
  {
    title:
      'Safely <span class="text-primary">experiment</span> with new features',
    description:
      'Test experimental features, alpha APIs, and breaking changes in isolation. Validate new functionality with users or stakeholders in a controlled sandbox environment.',
    imgSrc: '/images/solutions/api-sandboxing/experiment-safely.png',
    imgAlt:
      'Mockoon application screenshot showing experimental feature testing'
  },
  {
    title:
      'Enable <span class="text-primary">risk-free</span> developer exploration',
    description:
      'Allow developers to explore APIs, test integrations, and learn without fear. Sandbox environments provide a safe space for experimentation and skill development.',
    imgSrc: '/images/solutions/api-sandboxing/safe-exploration.png',
    imgAlt: 'Mockoon application screenshot showing API exploration'
  }
];

const benefits = [
  {
    title: 'Risk-Free Testing',
    description:
      'Test any scenario without affecting production systems or live data',
    icon: 'icon-shield'
  },
  {
    title: 'Parallel Development',
    description:
      'Multiple teams can test independently without interfering with each other',
    icon: 'icon-groups'
  },
  {
    title: 'Cost Reduction',
    description:
      'Eliminate expensive production infrastructure needed for testing',
    icon: 'icon-savings'
  },
  {
    title: 'Compliance & Security',
    description:
      'Meet security requirements by keeping test data separate from production',
    icon: 'icon-lock'
  }
];

export default function ApiSandboxingSolution() {
  return (
    <Layout footerBanner='download'>
      <Meta
        title={
          'Test risky API changes without production risk with API sandboxing'
        }
        description='Create isolated sandbox environments to experiment safely, validate edge cases early, and give teams confidence before every release.'
      />

      <Hero
        title='Test risky API changes <span class="text-primary">without production risk.</span>'
        subtitle='Create isolated sandbox environments to experiment safely, validate edge cases early, and give teams confidence before every release.'
        mainPicture='/images/solutions/api-sandboxing/api-sandboxing-hero.png'
        mainPictureAlt='API sandboxing illustration with isolated environment'
        mainPictureSkewed={false}
      >
        <SocialProof />
      </Hero>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <CompanyLogos />
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            Why developers choose Mockoon for API sandboxing
          </h2>
          <div className='row g-6 justify-content-center'>
            {benefits.map((benefit, index) => (
              <div key={index} className='col-lg-6 col-xl-3'>
                <div className='text-center'>
                  <div className='icon-wrapper mb-3'>
                    <i
                      className={`${benefit.icon} text-primary`}
                      style={{ fontSize: '2.5rem' }}
                    ></i>
                  </div>
                  <h4 className='fw-bold mb-2'>{benefit.title}</h4>
                  <p className='text-muted mb-0'>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='fw-bold mb-4'>
                Production testing vs API sandboxing
              </h2>
              <p className='text-muted mb-6'>
                See how API sandboxing transforms your testing approach
              </p>
            </div>
          </div>

          <div className='row g-6 justify-content-around'>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-danger mb-4'>
                  <i className='icon-close me-2'></i>
                  Without Sandboxing
                </h5>
                <ul className='list-unstyled'>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Risk of affecting production systems</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Expensive production-like test infrastructure</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Teams blocking each other during testing</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Compliance and data privacy concerns</span>
                  </li>
                  <li className='d-flex mb-0'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>
                      Inability to safely experiment with new features
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-success mb-4'>
                  <i className='icon-check me-2'></i>
                  With API Sandboxing
                </h5>
                <ul className='list-unstyled'>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Completely isolated from production</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Minimal infrastructure costs</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Independent parallel testing and development</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Full compliance and data privacy control</span>
                  </li>
                  <li className='d-flex mb-0'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Safe experimentation and feature validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={apiSandboxingFeatures} />
        </div>
      </section>

      <LandingCta />
    </Layout>
  );
}
