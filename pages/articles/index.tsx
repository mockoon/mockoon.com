import { FunctionComponent } from 'react';
import Card from '../../components/card';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleList } from '../../models/common.model';
import { buildIndexStaticProps } from '../../utils/static-builders';
import { orderArticles } from '../../utils/utils';

const meta = {
  title: "Mockoon's API related articles",
  description:
    'Learn more about HTTP, APIs, REST servers, and API mocking with this series of articles and guides'
};

export async function getStaticProps() {
  const staticProps = buildIndexStaticProps(
    require.context('../../content/articles/', false, /\.md$/)
  );

  staticProps.props.articles = orderArticles(staticProps.props.articles);

  return staticProps;
}

const Articles: FunctionComponent<{
  articles: ArticleList;
}> = function (props) {
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <section className='pb-8'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row'>
            <div className='mx-auto my-lg-3 col-12 col-xxl-10'>
              {props.articles
                .filter((article) => !article.data.hidden)
                .map((article) => {
                  return (
                    <Card
                      key={article.slug}
                      data={{
                        title: article.data.title,
                        description: article.data.excerpt,
                        imageSrc: `/images/articles/${article.data.image}`,
                        imageAlt: article.data.imageAlt,
                        links: [
                          {
                            src: `/articles/${article.slug}`,
                            text: 'Read more'
                          }
                        ]
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
