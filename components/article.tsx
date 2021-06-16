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
        <section
          data-jarallax
          data-speed='.8'
          className='py-12 py-md-15 bg-cover jarallax'
          style={{
            backgroundImage: props.articleData.header.image
              ? `url("/images/${props.path}/${props.articleData.header.image}")`
              : ''
          }}
        ></section>
      )}

      {props.articleData.image && !props.articleData.header && (
        <div className='pt-5 pb-2 col-12 d-flex justify-content-center'>
          <div className='img-skewed img-skewed-start mb-8 mb-md-0'>
            <img
              src={`/images/${props.path}/${props.articleData.image}`}
              alt={props.articleData.imageAlt}
              loading='lazy'
              className='screenshot img-fluid'
              data-aos='img-skewed-item-start'
              data-aos-delay='100'
            />
          </div>
        </div>
      )}

      <section className='pt-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-10 col-xl-10'>
              <h1 className='display-4 text-center'>
                {props.articleData.title}
              </h1>

              <p className='lead mb-7 text-center text-muted'>
                {props.articleData.excerpt}
              </p>

              <div
                className={`row ${
                  props.articleData.date ? '' : 'd-flex justify-content-center'
                } align-items-center py-5 border-top border-bottom`}
              >
                {props.articleData.date && (
                  <div className='col ms-n5'>
                    <h6 className='text-uppercase mb-0'>Guillaume Monnet</h6>

                    <time className='fs-sm text-muted' dateTime='2019-05-20'>
                      Published on {props.articleData.date}
                    </time>
                  </div>
                )}

                <div className='col-auto my-auto'>
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

      <section className='pt-6 pt-md-8 pb-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-10 col-xl-10'>
              <Markdown body={props.articleBody} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Article;
