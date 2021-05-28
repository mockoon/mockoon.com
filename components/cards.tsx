import { Fragment, FunctionComponent } from 'react';
import { ArticleList } from '../models/common.model';

const Cards: FunctionComponent<{
  path: string;
  articles: ArticleList;
  small?: boolean;
}> = function (props) {
  let sizing = 'col-md-12 col-lg-12';

  if (props.small) {
    sizing = 'col-md-5 col-lg-4';
  }

  return (
    <Fragment>
      {props.articles.map((article) => {
        return (
          <div key={article.slug} className={`col-12 ${sizing}`}>
            <div className='card card-border card-border-xl shadow-light-lg lift lift-lg'>
              <div className='card-body text-center'>
                {article.data.image && (
                  <div
                    className={`img-fluid mb-5 mx-auto ${
                      article.data.header ? 'p-5' : ''
                    }`}
                  >
                    <img
                      src={`/images/${props.path}/${article.data.image}`}
                      alt={article.data.imageAlt}
                    />
                  </div>
                )}

                <p className='text-gray-700 mb-5'>
                  <b>{article.data.title}</b>
                  <br />
                  {article.data.excerpt}
                </p>

                <a href={`/${props.path}/${article.slug}/`}>Read more</a>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Cards;
