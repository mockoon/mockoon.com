import { FunctionComponent } from 'react';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Newsletter from '../../components/newsletter';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/common.model';
import { buildIndexStaticProps } from '../../utils/static-builders';

const meta = {
  title: "Mockoon's latest news and announcements",
  description:
    "Stay up to date with all Mockoon's news. Learn how to create free mock REST API servers"
};

export async function getStaticProps() {
  const staticProps = buildIndexStaticProps(
    require.context('../../content/blog/', false, /\.md$/)
  );

  staticProps.props.articles = staticProps.props.articles.sort(
    (firstArticle, secondArticle) =>
      new Date(secondArticle.data.date).getTime() -
      new Date(firstArticle.data.date).getTime()
  );
  return staticProps;
}

const Blog: FunctionComponent<{
  articles: { data: ArticleData; slug: string }[];
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
            <div className='column is-8 is-offset-2'>
              {props.articles.map((article) => {
                return (
                  <a key={article.slug} href={`/blog/${article.slug}/`}>
                    <div className='card'>
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

export default Blog;
