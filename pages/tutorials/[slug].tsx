import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
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
  const tutorialsList = buildIndexStaticProps(
    require.context('../../content/tutorials/', false, /\.\/.+\.md$/)
  );
  // randomize
  const suggestedArticles = tutorialsList.props.articles
    .filter((article) => article.data.tags?.includes('mockoon'))
    .map((article) => ({
      title: article.data.title,
      description: article.data.excerpt,
      imageSrc: `/images/tutorials/${article.data.image}`,
      links: [{ src: `/tutorials/${article.slug}`, text: 'Read more' }]
    }))
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const fileContent = await require(
    `../../content/tutorials/${params.slug}.md`
  );
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      slug: `tutorials/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content,
      suggestedArticles
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('tutorials');

export default function Tutorial(props: {
  slug: string;
  articleData: ArticleData;
  articleBody: string;
  suggestedArticles: CardData[];
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
        image={`tutorials/${props.articleData.image}`}
      />

      <Breadcrumb
        currentTitle={props.articleData.title}
        parentLink='/tutorials/'
        parentTitle='Tutorials'
      />

      <Article
        slug={props.slug}
        path='tutorials'
        articleBody={props.articleBody}
        articleData={props.articleData}
      />
      <div className='container'>
        <section className='row pt-3 pb-8'>
          <div
            className={`col d-flex ${
              props.articleData.nextLink && props.articleData.previousLink
                ? 'justify-content-between'
                : 'justify-content-center'
            }`}
          >
            {(props.articleData.previousLink || props.articleData.nextLink) && (
              <Fragment>
                {props.articleData.previousLink && (
                  <Link
                    href={`/tutorials/${
                      props.articleData.previousLink
                        ? props.articleData.previousLink + '/'
                        : ''
                    }`}
                    className='btn btn-sm btn-secondary-subtle'
                  >
                    ⬅{props.articleData.previousText}
                  </Link>
                )}
                {props.articleData.nextLink && (
                  <Link
                    href={`/tutorials/${
                      props.articleData.nextLink
                        ? props.articleData.nextLink + '/'
                        : ''
                    }`}
                    className='btn btn-sm btn-secondary-subtle'
                  >
                    {props.articleData.nextText}➡
                  </Link>
                )}
              </Fragment>
            )}
          </div>
        </section>
      </div>
      <section>
        <div className='container text-center pt-3 pb-8'>
          <h3 className='fw-medium position-relative my-4'>
            You might also be interested in these tutorials
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
