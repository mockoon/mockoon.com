import Link from 'next/link';
import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

export async function getStaticProps() {
  let contributors = [];

  try {
    const res = await fetch(
      'https://api.github.com/repos/mockoon/mockoon/contributors?per_page=100',
      {
        headers: {
          Accept: 'application/vnd.github+json'
        }
      }
    );
    const data = await res.json();

    contributors = data.map((contributor) => {
      return {
        username: contributor.login,
        avatarUrl: contributor.avatar_url
      };
    });

    contributors = contributors.filter(
      (contributor) =>
        contributor.username !== '255kb' &&
        contributor.username !== 'dependabot[bot]'
    );
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      contributors
    }
  };
}

const About: FunctionComponent<{
  contributors: { username: string; avatarUrl: string }[];
}> = function ({ contributors }) {
  return (
    <Layout footerBanner='download'>
      <Meta
        title="About Mockoon's team"
        description='Mockoon is the fastest and easiest way to create mock API servers. It is a free and open-source project built by a team of passionate developers.'
      />

      <Hero
        title='Meet the <span class="text-primary">team and contributors</span>'
        subtitle='&#8220;We want to craft the best API tools on the market!&#8221;'
      />

      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center flex-column pb-8'>
          <div className='col-lg-10 col-12'>
            <h2>Who are we?</h2>
            <p>
              Mockoon is a <strong>free and open-source</strong> API mocking
              tool created in 2017 by{' '}
              <Link href={'https://github.com/255kb'}>Guillaume</Link>, a
              developer passionate about APIs and building great tools for other
              developers. Since day one, the goal has been clear: make API
              mocking <strong>simple</strong>, <strong>fast</strong>, and{' '}
              <strong>accessible</strong> to everyone. Mockoon is a{' '}
              <strong>free and open-source API tool</strong> created by in 2017.
            </p>
          </div>
        </div>

        <div className='row d-flex justify-content-center pb-8'>
          <div className='col-12 col-lg-4 text-center'>
            <div className='avatar avatar-xl m-1'>
              <Link href={`https://github.com/255kb`} rel='noopener'>
                <img
                  className='avatar-img img-thumbnail rounded-circle'
                  src='/images/about/guillaume.jpg'
                  alt='Guillaume, Mockoon founder and main maintainer'
                  width={64}
                  height={64}
                />
              </Link>
            </div>
            <h6 className='text-uppercase text-gray-700'>
              <strong>Guillaume</strong>
              <br />
              Founder and main maintainer
            </h6>
          </div>
        </div>

        <div className='row d-flex justify-content-center align-items-center flex-column pb-8'>
          <div className='col-lg-10 col-12'>
            <p>
              Helped by <strong>dozens of amazing contributors</strong>,
              Guillaume continues to maintain and grow the project with a strong
              focus on simplicity, efficiency, and developer experience. Mockoon
              is designed to save you time — not waste it — by being{' '}
              <strong>easy to set up yet powerful</strong> enough for complex
              use cases. Today, Mockoon is used by{' '}
              <strong>thousands of developers and teams worldwide</strong>, from
              solo devs to large companies, and has been downloaded over{' '}
              <strong>900,000 times</strong>.
            </p>
          </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center flex-column pb-8'>
          <div className='col-lg-10 col-12 text-center'>
            {contributors.length > 0 &&
              contributors.map((contributor) => (
                <div
                  className='avatar avatar-xl m-1'
                  key={contributor.username}
                >
                  <Link
                    href={`https://github.com/${contributor.username}`}
                    rel='noopener'
                  >
                    <img
                      className='avatar-img img-thumbnail rounded-circle mr-4'
                      src={contributor.avatarUrl}
                      alt={`Contributor ${contributor.username}`}
                      title={`Contributor ${contributor.username}`}
                      width={64}
                      height={64}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center flex-column pb-8'>
          <div className='col-lg-10 col-12'>
            <h2>How do we finance Mockoon?</h2>
            <p>
              We are proud to be an{' '}
              <strong>independent open-source project</strong>, maintained
              without external funding or venture capital. Mockoon is sustained
              through a mix of <strong>community support</strong> and our{' '}
              <strong>commercial offering</strong>,{' '}
              <a href='/cloud/'>Mockoon Cloud</a>.
            </p>
            <p>
              If you believe in what we're building, you can{' '}
              <strong>sponsor us</strong> and join the growing community of{' '}
              <a
                href='https://github.com/mockoon/mockoon/blob/main/backers.md'
                target='_blank'
                rel='noopener'
              >
                backers
              </a>{' '}
              helping keep the project alive and evolving.{' '}
              <strong>Subscribing to Mockoon Cloud</strong> is another great way
              to support us — and it comes with powerful features like{' '}
              <strong>AI-powered API mock generation</strong>,{' '}
              <strong>real-time team collaboration</strong>,{' '}
              <strong>cloud deployments</strong>, and more. Your support helps
              us remain sustainable while keeping the core project free and open
              for everyone.
            </p>
          </div>
          <div className='text-center my-8'>
            <a
              href='https://github.com/sponsors/mockoon'
              target='_blank'
              rel='noopener'
            >
              <img
                src='/images/sponsor-btn-250.png'
                alt='sponsor button'
                width={250}
                height={71}
              />
            </a>
            <a href='/cloud/' className='ms-4'>
              <img
                src='/images/cloud-btn-250.png'
                alt='discover mockoon cloud button'
                width={250}
                height={71}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
