import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeHighlighter from '../../components/code-highlighter';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Newsletter from '../../components/newsletter';
import Layout from '../../layout/layout';
import { TutorialData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';
import { linkTarget, transformLinkUri } from '../../utils/url';

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

export async function getStaticPaths() {
  return buildSlugStaticPaths('tutorials');
}

export default function Tutorials(props: {
  slug: string;
  articleData: TutorialData;
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
              <div className='content'>
                <figure className='image is-3by1 ml-0 mr-0'>
                  <img
                    src={`/images/tutorials/${props.articleData.image}`}
                    alt={props.articleData.imageAlt}
                  />
                </figure>
                <ReactMarkdown
                  source={props.articleBody}
                  renderers={{ code: CodeHighlighter }}
                  transformLinkUri={transformLinkUri()}
                  linkTarget={linkTarget}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <a href='/tutorials/'>⬅ Back to the tutorials</a>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </Layout>
  );
}
