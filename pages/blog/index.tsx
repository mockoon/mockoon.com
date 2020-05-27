import matter from 'gray-matter';
import { FunctionComponent } from 'react';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Newsletter from '../../components/newsletter';
import Layout from '../../layout/layout';
import { ArticleData } from '../../models/blog.model';

const meta = {
  title: "Mockoon's blog",
  description: "Stay up to date with all Mockoon's news!"
};

export async function getStaticProps() {
  const articles = ((files) => {
    const keys = files.keys();
    const fileContents: any[] = keys.map(files);

    return keys.map((key, index) => {
      const pathParts = key.split('/');
      const fileContent = fileContents[index];
      const parsedContent = matter(fileContent.default);

      return {
        slug: pathParts[pathParts.length - 1].slice(0, -3),
        data: parsedContent.data
      };
    });
  })(require.context('../../content/blog/', false, /\.md$/));

  return {
    props: {
      articles
    }
  };
}

const Blog: FunctionComponent<{
  articles: { data: ArticleData; slug: string }[];
}> = function (props) {
  return (
    <Layout>
      {' '}
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
                  <a key={article.slug} href={'/blog/' + article.slug}>
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
