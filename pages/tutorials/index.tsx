import { FunctionComponent } from 'react';
import Card from '../../components/card';
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
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'></div>
        </div>
      </div>

      <section className='pb-8'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row'>
            <div className='mx-auto my-lg-3 col-12 col-xxl-10 mb-6 text-center'>
              <a href='/video-tutorials/'>
                <img
                  className='img-fluid'
                  src='/images/video-tutorials-btn-250.png'
                  alt=''
                />
              </a>
            </div>
          </div>

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
                        imageSrc: `/images/tutorials/${article.data.image}`,
                        imageAlt: article.data.imageAlt,
                        links: [
                          {
                            src: `/tutorials/${article.slug}`,
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

export default Tutorials;
