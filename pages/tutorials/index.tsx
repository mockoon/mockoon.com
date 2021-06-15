import { FunctionComponent } from 'react';
import Cards from '../../components/cards';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleList } from '../../models/common.model';
import { buildIndexStaticProps } from '../../utils/static-builders';
import { orderArticles } from '../../utils/utils';

const meta = {
  title: "Learn with Mockoon's tutorials",
  description:
    'Learn how to get started with Mockoon and create mock APIs for your favorite languages and frameworks'
};

export async function getStaticProps() {
  const staticProps = buildIndexStaticProps(
    require.context('../../content/tutorials/', false, /\.md$/)
  );

  staticProps.props.articles = orderArticles(staticProps.props.articles);

  return staticProps;
}

const Tutorials: FunctionComponent<{
  articles: ArticleList;
}> = function (props) {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <div className='section'>
        <div className='container'>
          <Cards path='tutorials' articles={props.articles} large={true} />
        </div>
      </div>
    </Layout>
  );
};

export default Tutorials;
