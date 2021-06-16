import { FunctionComponent } from 'react';
import Cards from '../../components/cards';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleList } from '../../models/common.model';
import { buildIndexStaticProps } from '../../utils/static-builders';
import { orderArticles } from '../../utils/utils';

const meta = {
  title: 'Mock API samples for your project',
  description:
    "Create your mock API server in no time with Mockoon's ready to use mock samples for Stripe, Paypal, Giphy, Open weather, and more"
};

export async function getStaticProps() {
  const staticProps = buildIndexStaticProps(
    require.context('../../content/mock-samples/', false, /\.md$/)
  );

  staticProps.props.articles = orderArticles(staticProps.props.articles);

  return staticProps;
}

const MockSamples: FunctionComponent<{
  articles: ArticleList;
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

      <section className='pb-8'>
        <div className='container'>
          <Cards path='mock-samples' articles={props.articles} medium />
        </div>
      </section>
    </Layout>
  );
};

export default MockSamples;
