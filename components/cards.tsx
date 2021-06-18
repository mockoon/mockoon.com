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
  let sizing = 'col-12';
  let textSizing = 'col-lg-6 col-12';
  let cardRow = '';
  let cardBorder = '';

  if (props.small) {
    sizing = 'col-lg-4';
    cardRow = '';
    cardBorder = 'card-border-xl';
    textSizing = 'col-12';
  }
  if (props.medium) {
    textSizing = 'col-12';
    sizing = 'col-lg-6';
  }
  if (props.large) {
    cardRow = 'card-row';
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row d-flex flex-column flex-lg-row'>
          {props.articles.map((article) => {
            sizing = !article.data.image ? 'col-lg-4' : sizing;
            textSizing = !article.data.image ? 'col-12' : textSizing;
            return (
              <div key={article.slug} className={`col-12 my-lg-3 ${sizing}`}>
                <Link href={`/${props.path}/${article.slug}/`}>
                  <div
                    className={`${
                      !article.data.image ? cardRow : ''
                    } ${cardBorder} pointer card shadow-light-lg mb-6`}
                  >
                    <div className='text-center'>
                      <div
                        className={`d-flex flex-column ${
                          !props.large && article.data.image
                            ? ''
                            : 'flex-lg-row'
                        } `}
                      >
                        {article.data.image && (
                          <div
                            className={`col-12 col-lg-6 bg-cover ${
                              !props.large && article.data.image
                                ? 'card-img-top'
                                : 'card-img-start'
                            } `}
                            style={{
                              backgroundImage: `url('/images/${props.path}/${article.data.image}')`,
                              minHeight: '200px'
                            }}
                          >
                            <div className='img-fluid d-lg-none invisible'>
                              <img
                                src={`/images/${props.path}/${article.data.image}`}
                                alt={article.data.imageAlt}
                              />
                            </div>
                          </div>
                        )}

                        {article.data.title && (
                          <div className={`${textSizing} p-5`}>
                            {article.data.logo && (
                              <div
                                className={`img-fluid mx-auto p-5 ${
                                  props.large ? 'w-50' : ''
                                }`}
                              >
                                {article.data.logo && (
                                  <img
                                    src={`/images/${props.path}/${article.data.logo}`}
                                    alt={article.data.logoAlt}
                                  />
                                )}
                              </div>
                            )}
                            <div className='text-gray-700 d-flex flex-column align-items-center'>
                              <h3 className='py-3 h4'>{article.data.title}</h3>
                              <p className='col-10 text-muted'>
                                {article.data.excerpt}
                              </p>
                              <Link href={`/${props.path}/${article.slug}/`}>
                                <button className='btn-xs btn btn-primary-soft'>
                                  Read more
                                </button>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
