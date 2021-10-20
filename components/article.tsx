import { Fragment, FunctionComponent } from 'react';
import { ArticleData } from '../models/common.model';
import Markdown from './markdown';
import Share from './share';
const Article: FunctionComponent<{
  slug: string;
  path: string;
  articleData: ArticleData;
  articleBody: string;
}> = function (props) {
  return (
    <Fragment>
      {props.articleData.header && (
        <section className='article-header pt-7 py-5'>
          <div className='container'>
            <div className='row d-flex align-items-center'>
              <div className='text-center col-12 col-lg-4'>
                <img
                  src={`/images/case-studies/${props.articleData.header.image}`}
                  alt={`${props.articleData.header.imageAlt}`}
                />
              </div>
              <div className='col-12 col-lg-8 text-center'>
                <div className='row pt-5 pt-lg-0'>
                  <p className='col-12 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>Overview</span>
                    <span className='mt-n1'>
                      {props.articleData.header.overview}
                    </span>
                  </p>
                </div>
                <div className='d-flex flex-row my-6'>
                  <p className='col-4 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>Industry</span>
                    <span className='mt-n1'>
                      {props.articleData.header.industry}
                    </span>
                  </p>
                  <p className='col-4 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>Employees</span>
                    <span className='mt-n1'>
                      {props.articleData.header.employees}
                    </span>
                  </p>
                  <p className='col-4 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>Website</span>
                    <span className='mt-n1'>
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
        </section>
      )}
      <div className='container'>
        {props.articleData.image && !props.articleData.header && (
          <div className='pt-5 pb-2 col-12 d-flex justify-content-center'>
            <div className='mb-8 mb-lg-0'>
              <img
                src={`/images/${props.path}/${props.articleData.image}`}
                alt={props.articleData.imageAlt}
                loading='lazy'
                className='screenshot img-fluid'
              />
            </div>
          </div>
        )}

        <section className='pt-8'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-10 col-lg-10 col-xl-10'>
                <h1 className='display-4 text-center'>
                  {props.articleData.title}
                </h1>

                <p className='lead mb-7 text-center text-muted'>
                  {props.articleData.excerpt}
                </p>

                <div
                  className={`row ${
                    props.articleData.date
                      ? ''
                      : 'd-flex justify-content-center'
                  } align-items-center py-5 border-top border-bottom`}
                >
                  <div className='col-12 d-flex align-items-center flex-column text-center text-lg-start mb-2 mb-lg-0'>
                    {props.articleData.date && (
                      <time
                        className='fs-sm text-muted'
                        dateTime={props.articleData.date}
                      >
                        Published on {props.articleData.date}
                      </time>
                    )}
                    <Share
                      title='Find this post interesting? Share it!'
                      url={`https://mockoon.com/${props.slug}/`}
                      text={props.articleData.meta.description}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pt-6 pt-lg-8 pb-8'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-10 col-xl-10'>
                <Markdown body={props.articleBody} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Article;
