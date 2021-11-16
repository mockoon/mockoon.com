import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Article from '../../components/article';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const fileContent =
    await require(`../../content/tutorials/${params.slug}.md`);
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      slug: `tutorials/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('tutorials');

export default function Tutorial(props: {
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
        image={`tutorials/${props.articleData.image}`}
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
            {!props.articleData.nextLink && !props.articleData.previousLink && (
              <Link href='/tutorials/'>
                <a className='btn btn-secondary-soft'>
                  ⬅ Back to the list of tutorials
                </a>
              </Link>
            )}
            {(props.articleData.previousLink || props.articleData.nextLink) && (
              <Fragment>
                {props.articleData.previousLink && (
                  <Link
                    href={`/tutorials/${
                      props.articleData.previousLink
                        ? props.articleData.previousLink + '/'
                        : ''
                    }`}
                  >
                    <a className='btn btn-secondary-soft'>
                      ⬅&nbsp;{props.articleData.previousText}
                    </a>
                  </Link>
                )}
                {props.articleData.nextLink && (
                  <Link
                    href={`/tutorials/${
                      props.articleData.nextLink
                        ? props.articleData.nextLink + '/'
                        : ''
                    }`}
                  >
                    <a className='btn btn-secondary-soft'>
                      {props.articleData.nextText}&nbsp;➡
                    </a>
                  </Link>
                )}
              </Fragment>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
