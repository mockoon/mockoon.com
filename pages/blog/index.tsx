import { FunctionComponent } from 'react';
import Card from '../../components/card';
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
    require.context('../../content/blog/', false, /\.\/.+\.md$/)
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
    <Layout footerBanner='newsletter'>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <section className='pb-8'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row'>
            <div className='mx-auto my-lg-3 col-12 col-xxl-10'>
              {props.articles.map((article) => {
                return (
                  <Card
                    key={article.slug}
                    data={{
                      title: article.data.title,
                      description: article.data.excerpt,
                      imageSrc: `/images/blog/${article.data.image}`,
                      imageAlt: article.data.imageAlt,
                      links: [
                        { src: `/blog/${article.slug}`, text: 'Read more' }
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

export default Blog;
