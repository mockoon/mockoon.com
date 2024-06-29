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
  const fileContent = await require(
    `../../content/use-cases/${params.slug}.md`
  );
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      slug: `use-cases/${params.slug}`,
      articleData: parsedContent.data,
      articleBody: parsedContent.content
    }
  };
}

export const getStaticPaths = buildSlugStaticPaths('use-cases');

export default function (props: {
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
        image={`use-cases/${props.articleData.image}`}
      />

      <Breadcrumb
        currentTitle={props.articleData.title}
        parentLink='/use-cases/'
        parentTitle='Use cases'
      />

      <Article
        slug={props.slug}
        path='use-cases'
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
              <Link
                href='/use-cases/'
                className='btn btn-sm btn-secondary-subtle'
              >
                ⬅ Back to the list of use cases
              </Link>
            )}
            {(props.articleData.previousLink || props.articleData.nextLink) && (
              <Fragment>
                {props.articleData.previousLink && (
                  <Link
                    href={`/use-cases/${
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
                    href={`/use-cases/${
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
    </Layout>
  );
}
