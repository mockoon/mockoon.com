import { FunctionComponent } from 'react';
import Cards from '../../components/cards';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleList } from '../../models/common.model';
import { buildIndexStaticProps } from '../../utils/static-builders';

const meta = {
  title: "Mockoon's latest news and announcements",
  description:
    "Stay up to date with all Mockoon's news and announcements. Learn how to create free mock REST API servers in no time."
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
  articles: ArticleList;
}> = function (props) {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <section className='pb-8'>
        <div className='container'>
          <Cards path='blog' articles={props.articles} large />
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
