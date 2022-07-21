import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import Article from '../../components/article';
import Breadcrumb from '../../components/breadcrumb';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildSlugStaticPaths } from '../../utils/static-builders';

export async function getStaticProps({ params }) {
  const fileContent = await require(`../../content/compare/${params.slug}.md`);
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      slug: `compare/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('compare');

export default function ComparisonGuide(props: {
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
              <Link href='/compare/'>
                <a className='btn btn-sm btn-secondary-soft'>
                  ⬅ Back to the list of comparison guides
                </a>
              </Link>
            )}
            {(props.articleData.previousLink || props.articleData.nextLink) && (
              <Fragment>
                {props.articleData.previousLink && (
                  <Link
                    href={`/compare/${
                      props.articleData.previousLink
                        ? props.articleData.previousLink + '/'
                        : ''
                    }`}
                  >
                    <a className='btn btn-sm btn-secondary-soft'>
                      ⬅&nbsp;{props.articleData.previousText}
                    </a>
                  </Link>
                )}
                {props.articleData.nextLink && (
                  <Link
                    href={`/compare/${
                      props.articleData.nextLink
                        ? props.articleData.nextLink + '/'
                        : ''
                    }`}
                  >
                    <a className='btn btn-sm btn-secondary-soft'>
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
