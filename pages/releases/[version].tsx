import { sync } from 'glob';
import matter from 'gray-matter';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hero from '../../components/hero';
import Markdown from '../../components/markdown';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { sortPathBySemver } from '../../utils/utils';

export function getStaticPaths() {
  const releasesPaths = sync(`./content/releases/*.md`);
  const paths = releasesPaths.map((path) => {
    const pathParts = path.split('/');

    return {
      params: {
        version: pathParts[pathParts.length - 1].slice(0, -3)
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({
  params
}: {
  params: {
    version: string;
  };
}) {
  const files = require.context('../../content/releases/', true, /\.md$/);
  const releasePaths = files.keys().sort(sortPathBySemver);

  const fileContent =
    await require(`../../content/releases/${params.version}.md`);
  const release = matter(fileContent.default);

  let releases = releasePaths.map((releasePath, releasePathIndex) => {
    const pathparts = releasePath.split('/');

    return pathparts[pathparts.length - 1].slice(0, -3);
  });

  return {
    props: {
      releases,
      version: params.version,
      release: release.content,
      releaseData: release.data
    }
  };
}

export default function Release(props: {
  releases: string[];
  version: string;
  release: string;
  releaseData: ArticleData;
}) {
  const router = useRouter();
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title={props.releaseData.meta.title}
        description={props.releaseData.meta.description}
        ogType='article'
        url={`/releases/${props.version}/`}
      />

      <Hero
        title={props.releaseData.meta.title}
        subtitle={props.releaseData.date}
      />

      <section className='pb-8'>
        <div className='container'>
          <div className='row justify-content-center gx-0 mx-lg-0 mt-12'>
            <div className='col-12 col-lg-4 mb-8 pe-lg-8'>
              <aside className='flex-grow-1 sticky-top pt-4'>
                <ul className='card-list list mb-6'>
                  <h6 className='fw-bold text-uppercase mb-2'>
                    Applications releases
                  </h6>
                  {props.releases.map((release, releaseIndex) => {
                    return (
                      <li
                        key={`app${releaseIndex}`}
                        className={`list-item py-1 ${
                          router.asPath.includes(release) ? 'active' : ''
                        }`}
                      >
                        <a href={`/releases/${release}/`} className='list-link'>
                          v{release}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <p className='mb-6'>
                  <span className='icon me-2'>
                    <i className='icon-history'></i>
                  </span>
                  <Link href={'/old-releases/desktop/'}>
                    Legacy releases (&lt; v3.0.0)
                  </Link>
                </p>
              </aside>
            </div>
            <div className='col-12 col-lg-8'>
              <Markdown body={props.release} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
