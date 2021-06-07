import Link from 'next/link';
import { Fragment, FunctionComponent } from 'react';
import { ArticleList } from '../models/common.model';
const Cards: FunctionComponent<{
  path: string;
  articles: ArticleList;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}> = function (props) {
  let sizing = 'col-md-12 col-lg-12';
  let textSizing = 'col-md-6 col-12';
  let cardRow = '';
  let cardBorder = '';
  let imgStyle = '';

  if (props.small) {
    sizing = 'col-md-6 col-lg-4';
    cardRow = '';
    cardBorder = 'card-border-xl';
    textSizing = 'col-md-12 col-12';
  }
  if (props.large) {
    textSizing = 'col-md-12 col-12';
  }
  if (props.medium) {
    imgStyle = 'card-img-start w-100 bg-cover img-fluid';
    cardRow = 'card-row';
  }

  return (
    <Fragment>
      <div className='row'>
        {props.articles.map((article) => {
          return (
            <div key={article.slug} className={`col-12 my-3 ${sizing}`}>
              <div
                className={`card card-border ${cardRow} ${cardBorder} shadow-light-lg lift lift-lg`}
              >
                <div className='card-body text-center'>
                  <div className='row'>
                    {props.medium && article.data.image && (
                      <div className='col-12 col-md-6'>
                        <div className='card-img-slider'>
                          <img
                            src={`/images/${props.path}/${article.data.image}`}
                            alt={article.data.imageAlt}
                            className={imgStyle}
                          />
                        </div>
                      </div>
                    )}

                    {article.data.title && (
                      <div className={textSizing}>
                        <div
                          className={`img-fluid mx-auto p-5 ${
                            props.medium ? 'w-50' : ''
                          }`}
                        >
                          {props.medium && article.data.logo && (
                            <img
                              src={`/images/${props.path}/${article.data.logo}`}
                              alt={article.data.logoAlt}
                            />
                          )}
                          {(props.small || props.large) &&
                            article.data.image && (
                              <img
                                src={`/images/${props.path}/${article.data.image}`}
                                alt={article.data.imageAlt}
                              />
                            )}
                        </div>
                        <p className='text-gray-700 mb-5'>
                          <b>{article.data.title}</b>
                          <br />
                          {article.data.excerpt}
                        </p>

                        <Link href={`/${props.path}/${article.slug}/`}>
                          <button className='btn-xs btn btn-primary-soft'>
                            Read more
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Cards;
