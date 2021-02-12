import { Fragment, FunctionComponent } from 'react';
import { ArticleData } from '../models/common.model';
import Download from './download';
import Markdown from './markdown';
import Share from './share';

const Article: FunctionComponent<{
  slug: string;
  path: string;
  articleData: ArticleData;
  articleBody: string;
  backText: string;
  shareText: string;
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
      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3'>
              <div className='content'>
                <Download />
              </div>
            </div>
            <div className='column is-9'>
              <div className='content'>
                {props.articleData.image && (
                  <figure className='image is-3by1 ml-0 mr-0'>
                    <img
                      src={`/images/${props.path}/${props.articleData.image}`}
                      alt={props.articleData.imageAlt}
                    />
                  </figure>
                )}
                <Markdown body={props.articleBody} />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='columns'>
            <div className='column is-9 is-offset-3'>
              <div className='content'>
                <hr />
                <h5>{props.shareText}</h5>
                <Share
                  url={`https://mockoon.com/${props.slug}/`}
                  text={props.articleData.meta.description}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='columns'>
            <div className='column '>
              <div className='content'>
                <a href={`/${props.path}/`}>{props.backText}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Article;
