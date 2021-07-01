import Cards from '../../components/cards';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleList } from '../../models/common.model';
import { buildIndexStaticProps } from '../../utils/static-builders';
import { orderArticles } from '../../utils/utils';

const meta = {
  title: 'Case studies',
  description:
    'Explore how Mockoon users improve their development workflows with Mockoon API tooling'
};

export async function getStaticProps() {
  const staticProps = buildIndexStaticProps(
    require.context('../../content/case-studies/', false, /\.md$/)
  );

  staticProps.props.articles = orderArticles(staticProps.props.articles);

  return staticProps;
}

export default function CaseStudies(props: { articles: ArticleList }) {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <section className='pb-8'>
        <div className='container'>
          <Cards
            large
            path='case-studies'
            articles={props.articles}
            cover={false}
          />
        </div>
      </section>
    </Layout>
  );
}
