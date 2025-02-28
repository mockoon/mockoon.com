import matter from 'gray-matter';
import Head from 'next/head';
import Article from '../../components/article';
import Breadcrumb from '../../components/breadcrumb';
import Card from '../../components/card';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleData, CardData } from '../../models/common.model';
import {
  buildIndexStaticProps,
  buildSlugStaticPaths
} from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const blogList = buildIndexStaticProps(
    require.context('../../content/blog/', false, /\.\/.+\.md$/)
  );
  const suggestedArticles = blogList.props.articles
    .sort(
      (firstArticle, secondArticle) =>
        new Date(secondArticle.data.date).getTime() -
        new Date(firstArticle.data.date).getTime()
    )
    .map((article) => ({
      slug: article.slug,
      title: article.data.title,
      description: article.data.excerpt,
      imageSrc: `/images/blog/${article.data.image}`,
      links: [{ src: `/blog/${article.slug}`, text: 'Read more' }]
    }))
    .filter((article) => article.slug !== params.slug)
    .slice(0, 3);

  const fileContent = await require(`../../content/blog/${params.slug}.md`);
  const parsedContent = matter(fileContent.default);

  // replace #xxx links
  parsedContent.content = parsedContent.content.replace(
    /Issue #([0-9]+)/gi,
    '[Issue #$1](https://github.com/mockoon/mockoon/issues/$1)'
  );

  // replace mockoon/cli#xxx or cli/#xxx links
  parsedContent.content = parsedContent.content.replace(
    /Issue ((mockoon\/)?(commons|cli)#([0-9]+))/gi,
    '[Issue #$4](https://github.com/mockoon/$3/issues/$4)'
  );

  return {
    props: {
      slug: `blog/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content,
      suggestedArticles
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('blog');

export default function BlogArticle(props: {
  slug: string;
  articleData: ArticleData;
  articleBody: string;
  suggestedArticles: CardData[];
}) {
  return (
    <Layout footerBanner='newsletter'>
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
        image={`blog/${props.articleData.image}`}
      />
      <Breadcrumb
        currentTitle={props.articleData.title}
        parentLink='/blog/'
        parentTitle='Blog'
      />
      <Article
        slug={props.slug}
        path='blog'
        articleBody={props.articleBody}
        articleData={props.articleData}
        tags={props.articleData.tags}
        author={props.articleData.author}
      />
      <section>
        <div className='container text-center pt-3 pb-8'>
          <h3 className='fw-medium position-relative my-4'>
            You might also be interested in these articles
          </h3>
          <div className='row'>
            {props.suggestedArticles.map((article, articleIndex) => {
              return (
                <div
                  key={`suggestedArticle${articleIndex}`}
                  className='col-12 col-lg-4 mb-4 mb-lg-0'
                >
                  <Card data={article} cover border vertical />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
