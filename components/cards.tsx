import { Fragment, FunctionComponent } from 'react';
import { ArticleList } from '../models/common.model';

const Cards: FunctionComponent<{
  path: string;
  articles: ArticleList;
}> = function (props) {
  return (
    <Fragment>
      <style jsx>{`
        .card {
          margin-bottom: 30px;
        }
      `}</style>
      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-6 is-offset-3'>
              {props.articles.map((article) => {
                return (
                  <a
                    key={article.slug}
                    href={`/${props.path}/${article.slug}/`}
                  >
                    <div className='card'>
                      {article.data.image && (
                        <div className='card-image'>
                          <figure className='image is-3by1'>
                            <img
                              src={`/images/${props.path}/${article.data.image}`}
                              alt={article.data.imageAlt}
                            />
                          </figure>
                        </div>
                      )}
                      <div className='card-content'>
                        <p className='title is-size-5'>{article.data.title}</p>
                        <p>{article.data.excerpt}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
