import matter from 'gray-matter';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Hero from '../../../components/hero';
import Markdown from '../../../components/markdown';
import Meta from '../../../components/meta';
import { appsList } from '../../../constants/releases';
import Layout from '../../../layout/layout';
import { ReleaseList } from '../../../models/common.model';
import { sortPathBySemver } from '../../../utils/utils';

export function getStaticPaths() {
  return {
    paths: appsList.map((app) => {
      return {
        params: {
          appname: app.appname
        }
      };
    }),
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
      app: appsList.find((app) => app.appname === params.appname),
      releases
    }
  };
}

export default function ReleasesIndex(props: {
  releases: ReleaseList;
  app: { name: string; appname: string };
}) {
  const router = useRouter();
  const meta = {
    title: `${props.app.name} application releases`,
    description: `Discover Mockoon ${props.app.name} application new releases content: latest news from the project, new features, improvements and bug fixes`
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={meta.title}
        description={meta.description}
        url={`/releases/${props.app.appname}/`}
      />
      <Hero title={meta.title} />

      <section className='pb-8'>
        <div className='container'>
          <div className='row justify-content-center gx-0 mx-lg-0 mt-12'>
            <div className='col-12 col-lg-4 mb-8 pe-lg-8'>
              <aside className='flex-grow-1 sticky-top pt-4'>
                <div className='list-group'>
                  {appsList.map((app, appIndex) => {
                    return (
                      <Fragment key={`appAnchors${appIndex}`}>
                        <a
                          href={`/releases/${app.appname}/`}
                          className={`list-group-item list-group-item-action p-4 ${
                            router.asPath.includes(app.appname) ? 'active' : ''
                          }`}
                        >
                          <h5 className='m-0'>{app.name}</h5>
                        </a>
                        {props.app.appname === app.appname &&
                          props.releases.map((release, releaseIndex) => {
                            return (
                              <div
                                key={`releasesAnchors${releaseIndex}`}
                                className='list-group-item p-2 ps-8'
                              >
                                <a href={`#${release.version}`}>
                                  {release.version}
                                </a>
                              </div>
                            );
                          })}
                      </Fragment>
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
                        href={`/releases/${props.app.appname}/${release.version}/`}
                        className='display-4'
                      >
                        {`${release.version}`}
                      </a>
                      {props.app.appname === 'desktop' && (
                        <a
                          href={`https://github.com/mockoon/mockoon/releases/tag/v${release.version}`}
                          target='_blank'
                          rel='noopener'
                          className='text-decoration-none ms-4 fs-4'
                        >
                          <i
                            className='text-muted icon-github list-social-icon'
                            aria-hidden='true'
                          ></i>
                        </a>
                      )}
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
