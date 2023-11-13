import matter from 'gray-matter';
import Head from 'next/head';
import Article from '../../components/article';
import Breadcrumb from '../../components/breadcrumb';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const fileContent =
    await require(`../../content/case-studies/${params.slug}.md`);
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      slug: `case-studies/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('case-studies');

export default function CaseStudy(props: {
  slug: string;
  articleData: ArticleData;
  articleBody: string;
}) {
  return (
    <Layout footerBanner='download'>
      {props.articleData.canonical && (
        <Head>
          <link rel='canonical' href={`${props.articleData.canonical}/`} />
        </Head>
      )}

      <Meta
        title={props.articleData.meta.title}
        description={props.articleData.meta.description}
        ogType='article'
        url={`/${props.slug}/`}
      />

      <Breadcrumb
        currentTitle={props.articleData.title}
        parentLink='/case-studies/'
        parentTitle='Case studies'
      />

      <Article
        slug={props.slug}
        path='case-studies'
        articleBody={props.articleBody}
        articleData={props.articleData}
      />
      <section>
        <div className='container text-center pt-3 pb-8'>
          <a className='btn btn-sm btn-secondary-subtle' href='/case-studies/'>
            ⬅ Back to the list of case studies
          </a>
        </div>
      </section>
    </Layout>
  );
}
