import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import Article from '../../components/article';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Newsletter from '../../components/newsletter';
import Share from '../../components/share';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';

export async function getStaticProps({ params }) {
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
      articleBody: parsedContent.content
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('blog');

export default function BlogArticle(props: {
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
                path='blog'
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
                  title='Find this post interesting? Share it!'
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
                <a href='/blog/'>⬅ Back to the blog posts</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  );
}
