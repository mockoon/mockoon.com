import { sync } from 'glob';
import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Newsletter from '../../components/newsletter';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/blog.model';

export async function getStaticProps({ params }) {
  const fileContent = await require(`../../content/blog/${params.slug}.md`);
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      articleData: parsedContent.data,
      articleBody: parsedContent.content
    }
  };
}

export async function getStaticPaths() {
  const articleNames = sync(process.cwd() + '/content/blog/*.md');
  const paths = articleNames.map((articleName) => {
    const pathParts = articleName.split('/');

    return {
      params: { slug: pathParts[pathParts.length - 1].slice(0, -3) }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export default function (props: {
  articleData: ArticleData;
  articleBody: string;
}) {
  return (
    <Layout>
      {props.articleData.canonical && (
        <Head>
          <link rel='canonical' href={props.articleData.canonical} />
        </Head>
      )}

      <Meta
        title={props.articleData.meta.title}
        description={props.articleData.meta.description}
      />
      <Hero
        title={props.articleData.meta.title}
        subtitle={props.articleData.meta.description}
      />

      <Download />

      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <div className='content'>
                <ReactMarkdown source={props.articleBody} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </Layout>
  );
}
