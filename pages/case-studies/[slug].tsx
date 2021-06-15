import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import Article from '../../components/article';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Share from '../../components/share';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const fileContent = await require(`../../content/case-studies/${params.slug}.md`);
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

      <div className='article-header'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-7 is-offset-1'>
              <img
                src={`/images/case-studies/${props.articleData.header.image}`}
                alt={`${props.articleData.header.imageAlt}`}
              />
              <h1 className='is-size-4'>{props.articleData.title}</h1>
            </div>
            <div className='column is-3'>
              <p className='pb-2'>
                <span className='has-text-weight-bold has-text-white'>
                  Overview:
                </span>
                <span className='ml-2'>
                  {props.articleData.header.overview}
                </span>
              </p>
              <p className='pb-2'>
                <span className='has-text-weight-bold has-text-white'>
                  Industry:
                </span>
                <span className='ml-2'>
                  {props.articleData.header.industry}
                </span>
              </p>
              <p className='pb-2'>
                <span className='has-text-weight-bold has-text-white'>
                  Employees:
                </span>
                <span className='ml-2'>
                  {props.articleData.header.employees}
                </span>
              </p>
              <p className='pb-2'>
                <span className='has-text-weight-bold has-text-white'>
                  Website:
                </span>
                <span className='ml-2'>
                  <a
                    href={props.articleData.header.link}
                    rel='noopener'
                    target='_blank'
                  >
                    {props.articleData.header.linkAnchor}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <Article
                slug={props.slug}
                path='case-studies'
                articleBody={props.articleBody}
                articleData={props.articleData}
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <Share
                  title='Find this case study interesting? Share it!'
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
                <a href='/case-studies/'>⬅ Back to the case studies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
