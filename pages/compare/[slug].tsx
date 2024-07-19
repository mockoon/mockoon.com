import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import Article from '../../components/article';
import Breadcrumb from '../../components/breadcrumb';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import {
  buildIndexStaticProps,
  buildSlugStaticPaths
} from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const fileContent = await require(`../../content/compare/${params.slug}.md`);
  const parsedContent = matter(fileContent.default);
  const {
    props: { articles }
  } = buildIndexStaticProps(
    require.context('../../content/compare/', false, /\.\/.+\.md$/)
  );

  return {
    props: {
      slug: `compare/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content,
      articles
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('compare');

export default function ComparisonGuide(props: {
  slug: string;
  articleData: ArticleData;
  articleBody: string;
  articles: any;
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
        image={`compare/${props.articleData.image}`}
      />

      <Breadcrumb
        currentTitle={props.articleData.title}
        parentLink='/compare/'
        parentTitle='Comparisons'
      />

      <Article
        slug={props.slug}
        path='compare'
        articleBody={props.articleBody}
        articleData={props.articleData}
      />
      {props.articles.length > 0 && (
        <div className='container'>
          <section className='row pt-3 pb-8'>
            <div className='col text-center fs-4'>
              <p>
                For more comparisons between Mockoon and other tools, check out
                our other articles:
              </p>
              {props.articles.map((article, articleIndex) => {
                if (!props.slug.includes(article.slug)) {
                  return (
                    <span key={article.slug}>
                      <Link href={`/compare/${article.slug}`}>
                        {article.data.shortTitle}
                      </Link>
                      {articleIndex !== props.articles.length - 1 && ', '}
                    </span>
                  );
                }
              })}
            </div>
          </section>
        </div>
      )}
    </Layout>
  );
}
