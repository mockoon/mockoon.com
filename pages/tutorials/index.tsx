import { FunctionComponent } from 'react';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Newsletter from '../../components/newsletter';
import Layout from '../../layout/layout';
import { TutorialList } from '../../models/tutorials.model';
import { buildIndexStaticProps } from '../../utils/static-builders';

const meta = {
  title: "Learn with Mockoon's tutorials",
  description:
    'Learn how to get started with Mockoon and create mock APIs for your favorite languages and frameworks'
};

export async function getStaticProps() {
  const staticProps = buildIndexStaticProps(
    require.context('../../content/tutorials/', false, /\.md$/)
  );
  staticProps.props.articles = staticProps.props.articles.sort(
    (firstArticle, secondArticle) =>
      firstArticle.data.order > secondArticle.data.order
        ? 1
        : secondArticle.data.order > firstArticle.data.order
        ? -1
        : 0
  );
  return staticProps;
}

const Tutorials: FunctionComponent<{
  articles: TutorialList;
}> = function (props) {
  return (
    <Layout>
      <style jsx>{`
        .card {
          margin-bottom: 30px;
        }
      `}</style>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />
      <Download />
      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-6 is-offset-3'>
              {props.articles.map((article) => {
                return (
                  <a key={article.slug} href={`/tutorials/${article.slug}/`}>
                    <div className='card'>
                      <div className='card-image'>
                        <figure className='image is-3by1'>
                          <img
                            src={`/images/tutorials/${article.data.image}`}
                            alt={article.data.imageAlt}
                          />
                        </figure>
                      </div>
                      <div className='card-content'>
                        <p className='title'>{article.data.title}</p>
                        <p className='subtitle'>{article.data.excerpt}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  );
};

export default Tutorials;
