import matter from 'gray-matter';
import { useRouter } from 'next/router';
import Hero from '../../../components/hero';
import Markdown from '../../../components/markdown';
import Meta from '../../../components/meta';
import Layout from '../../../layout/layout';
import { ReleaseList } from '../../../models/common.model';
import { sortPathBySemver } from '../../../utils/utils';

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          appname: 'desktop'
        }
      },
      {
        params: {
          appname: 'cli'
        }
      }
    ],
    fallback: false
  };
}

export async function getStaticProps({
  params
}: {
  params: { appname: string };
}) {
  const files = require.context('../../../content/releases/', true, /\.md$/);
  const releasePaths = files
    .keys()
    .filter((filePath) => filePath.includes(params.appname))
    .sort(sortPathBySemver);
  const releasesContent: any[] = releasePaths.map(files);

  let releases = releasePaths.map((releasePath, releasePathIndex) => {
    const parsedContent = matter(releasesContent[releasePathIndex].default);
    const pathparts = releasePath.split('/');

    return {
      version: pathparts[pathparts.length - 1].slice(0, -3),
      data: parsedContent.data,
      content: parsedContent.content
    };
  });

  return {
    props: {
      appname: params.appname,
      releases
    }
  };
}

export default function ReleasesIndex(props: {
  releases: ReleaseList;
  appname: string;
}) {
  const router = useRouter();
  const appnameHuman = { desktop: 'desktop', cli: 'CLI' };
  const meta = {
    title: `${
      appnameHuman[props.appname].charAt(0).toUpperCase() +
      appnameHuman[props.appname].slice(1)
    } application releases`,
    description: `Discover Mockoon ${
      appnameHuman[props.appname]
    } application new releases content: latest news from the project, new features, improvements and bug fixes`
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={meta.title}
        description={meta.description}
        url={`/releases/${props.appname}/`}
      />
      <Hero title={meta.title} />

      <section className='pb-8'>
        <div className='container'>
          <div className='row justify-content-center gx-0 mx-lg-0 mt-12'>
            <div className='col-12 col-lg-4 mb-8 pe-lg-8'>
              <aside className='flex-grow-1 sticky-top pt-4'>
                <div className='list-group'>
                  <a
                    href='/releases/desktop/'
                    className={`list-group-item list-group-item-action p-4 ${
                      router.asPath.includes('desktop') ? 'active' : ''
                    }`}
                    aria-current='true'
                  >
                    <h5 className='m-0'>Desktop</h5>
                  </a>

                  {props.appname === 'desktop' &&
                    props.releases.map((release, releaseIndex) => {
                      return (
                        <div
                          key={`releasesAnchors${releaseIndex}`}
                          className='list-group-item p-2 ps-8'
                        >
                          <a href={`#${release.version}`}>{release.version}</a>
                        </div>
                      );
                    })}

                  <a
                    href='/releases/cli/'
                    className={`list-group-item list-group-item-action p-4 ${
                      router.asPath.includes('cli') ? 'active' : ''
                    }`}
                  >
                    <h5 className='m-0'>CLI</h5>
                  </a>
                  {props.appname === 'cli' &&
                    props.releases.map((release, releaseIndex) => {
                      return (
                        <div
                          key={`releasesAnchors${releaseIndex}`}
                          className='list-group-item p-2 ps-8'
                        >
                          <a href={`#${release.version}`}>{release.version}</a>
                        </div>
                      );
                    })}
                </div>
              </aside>
            </div>
            <div className='col-12 col-lg-8 ps-lg-5 pb-8'>
              {props.releases.map((release, releaseIndex) => {
                return (
                  <div key={`release${releaseIndex}`} className='mb-12'>
                    <h2 id={`${release.version}`}>
                      <a
                        href={`/releases/${props.appname}/${release.version}/`}
                        className='display-4'
                      >
                        {`${release.version}`}
                      </a>
                      <a
                        href={`https://github.com/mockoon/mockoon/releases/tag/${
                          props.appname === 'desktop' ? 'v' : 'cli-v'
                        }${release.version}`}
                        target='_blank'
                        rel='noopener'
                        className='text-decoration-none ms-4 fs-4'
                      >
                        <i
                          className='text-muted icon-github list-social-icon'
                          aria-hidden='true'
                        ></i>
                      </a>
                    </h2>
                    <div>
                      <Markdown body={release.content} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
