import { Fragment, FunctionComponent } from 'react';
import { ArticleData } from '../models/common.model';
import Markdown from './markdown';

const Article: FunctionComponent<{
  slug: string;
  path: string;
  articleData: ArticleData;
  articleBody: string;
}> = function (props) {
  return (
    <Fragment>
      <style jsx>{`
        a.button.is-link {
          vertical-align: middle;
          margin-left: 150px;
        }
        a i {
          margin-right: 10px;
        }
      `}</style>

      <div className='content'>
        {props.articleData.image && !props.articleData.header && (
          <figure className='image is-3by1 ml-0 mr-0'>
            <img
              src={`/images/${props.path}/${props.articleData.image}`}
              alt={props.articleData.imageAlt}
            />
          </figure>
        )}
        <Markdown body={props.articleBody} />
      </div>
    </Fragment>
  );
};

export default Article;
