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
            <p>
              Mockoon is a free and open-source mock API tool created by{' '}
              <Link href={'https://github.com/255kb'}>Guillaume</Link> in 2017.
              Passionate about APIs and great developer tools, he spent a lot of
              time making Mockoon the easiest-to-use and quickest mock API tool.
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
              Helped by <strong>dozens of amazing contributors</strong>, they
              believe in <strong>simplicity and efficiency</strong> and work
              hard every day to bring you a tool that is{' '}
              <strong>easy to set up yet powerful</strong>. The goal is to save
              you tons of time, not waste it.
            </p>
            <p>
              Mockoon is now used by thousands of developers and companies
              around the world and has been{' '}
              <strong>downloaded more than 600k times</strong>.
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
            <p>
              If you believe in what we are building, you can{' '}
              <strong>sponsor us</strong> in this journey and join the dozens of{' '}
              <a
                href='https://github.com/mockoon/mockoon/blob/main/backers.md'
                target='_blank'
                rel='noopener'
              >
                backers and supporters
              </a>
              .
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
          </div>

          <hr />

          <div className='col-lg-10 col-12 mt-8'>
            <p>
              You can also support us by subscribing to our{' '}
              <strong>Pro plans</strong> and enjoy a whole new level of
              capabilities: <strong>AI-powered API mocks generation</strong>,{' '}
              <strong>data synchronization and real-time collaboration</strong>,{' '}
              <strong>cloud deployments</strong>, enterprise-grade support, and
              more to come!
            </p>
          </div>
          <div className='text-center my-8'>
            <a href='/pro/'>
              <img
                src='/images/pro-btn-250.png'
                alt='discover mockoon pro button'
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
