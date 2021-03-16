import { Fragment, FunctionComponent } from 'react';
import { ArticleList } from '../models/common.model';

const Cards: FunctionComponent<{
  path: string;
  articles: ArticleList;
  small?: boolean;
}> = function (props) {
  let sizing = 'is-6 is-offset-3';

  if (props.small) {
    sizing = 'is-4 is-offset-4';
  }

  return (
    <Fragment>
      <div className='columns'>
        <div className={`column ${sizing}`}>
          {props.articles.map((article) => {
            return (
              <a key={article.slug} href={`/${props.path}/${article.slug}/`}>
                <div className={`card ${'mb-6'}`}>
                  {article.data.image && (
                    <div
                      className={`card-image ${
                        article.data.header ? 'p-5' : ''
                      }`}
                    >
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
    </Fragment>
  );
};

export default Cards;
