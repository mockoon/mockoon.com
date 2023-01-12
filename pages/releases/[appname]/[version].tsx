import { sync } from 'glob';
import matter from 'gray-matter';
import Link from 'next/link';
import Breadcrumb from '../../../components/breadcrumb';
import Hero from '../../../components/hero';
import Markdown from '../../../components/markdown';
import Meta from '../../../components/meta';
import { appsList } from '../../../constants/releases';
import Layout from '../../../layout/layout';
import { ArticleData } from '../../../models/common.model';

export function getStaticPaths() {
  const releasesPaths = sync(`./content/releases/**/*.md`);
  const paths = releasesPaths.map((path) => {
    const pathParts = path.split('/');

    return {
      params: {
        appname: pathParts[pathParts.length - 2],
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
    appname: string;
    version: string;
  };
}) {
  const fileContent =
    await require(`../../../content/releases/${params.appname}/${params.version}.md`);
  const release = matter(fileContent.default);

  return {
    props: {
      app: appsList.find((app) => app.appname === params.appname),
      version: params.version,
      release: release.content,
      releaseData: release.data
    }
  };
}

export default function Release(props: {
  app: { name: string; appname: string };
  version: string;
  release: string;
  releaseData: ArticleData;
}) {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title={props.releaseData.meta.title}
        description={props.releaseData.meta.description}
        ogType='article'
        url={`/releases/${props.app.appname}/${props.version}/`}
      />

      <Breadcrumb
        currentTitle={`${props.version}`}
        parentLink={`/releases/${props.app.appname}/`}
        parentTitle={`${props.app.name} releases`}
      />
      <Hero title={props.releaseData.meta.title} />

      <div className='container'>
        <section className='pt-6 pt-lg-8 pb-8'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-10'>
              <Markdown body={props.release} />
            </div>
          </div>
        </section>
        <section className='row pt-3 pb-8'>
          <div className='col d-flex justify-content-center'>
            <Link href={`/releases/${props.app.appname}`}>
              <a className='btn btn-sm btn-secondary-soft'>
                ⬅ Back to the list of {props.app.name} releases
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
