import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import Article from '../../components/article';
import ContactBanner from '../../components/contact-banner';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Share from '../../components/share';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const fileContent = await require(`../../content/tutorials/${params.slug}.md`);
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

      <Hero />

      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3'>
              <div className='content'>
                <Download />
              </div>
            </div>
            <div className='column is-9'>
              <Article
                slug={props.slug}
                path='tutorials'
                articleBody={props.articleBody}
                articleData={props.articleData}
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='columns'>
            <div className='column is-9 is-offset-3'>
              <div className='content'>
                <Share
                  title='Find this tutorial useful? Share it!'
                  url={`https://mockoon.com/${props.slug}/`}
                  text={props.articleData.meta.description}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div className='content'>
                <a href='/tutorials/'>⬅ Back to the tutorials</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactBanner />
    </Layout>
  );
}
