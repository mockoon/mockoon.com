import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import Article from '../../components/article';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const fileContent = await require(`../../content/mock-samples/${params.slug}.md`);
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      slug: `mock-samples/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('mock-samples');

export default function MockSample(props: {
  slug: string;
  articleData: ArticleData;
  articleBody: string;
}) {
  return (
    <Layout>
      {props.articleData.canonical && (
        <Head>
          <link rel='canonical' href={`${props.articleData.canonical}/`} />
        </Head>
      )}

      <Meta
        title={props.articleData.meta.title}
        description={props.articleData.meta.description}
        ogType='article'
        url={`/${props.slug}`}
        image={props.articleData.image}
      />
      <Article
        slug={props.slug}
        path='mock-samples'
        articleBody={props.articleBody}
        articleData={props.articleData}
      />
      <section>
        <div className='container text-center pt-3 pb-8'>
          <a className='btn btn-secondary-soft' href='/mock-samples/'>
            ⬅ Back to the list of mock samples
          </a>
        </div>
      </section>
    </Layout>
  );
}
