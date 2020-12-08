import { sync } from 'glob';
import matter from 'gray-matter';
import { ArticleData, ArticleList } from '../models/common.model';

export const buildIndexStaticProps = (
  context: __WebpackModuleApi.RequireContext
) => {
  const articles: ArticleList = ((files) => {
    const keys = files.keys();
    const fileContents: any[] = keys.map(files);

    return keys.map((key, index) => {
      const pathParts = key.split('/');
      const fileContent = fileContents[index];
      const parsedContent = matter(fileContent.default);

      return {
        slug: pathParts[pathParts.length - 1].slice(0, -3),
        data: parsedContent.data as ArticleData
      };
    });
  })(context);

  return {
    props: {
      articles
    }
  };
};

export const buildSlugStaticPaths = (folder: string) => {
  const articlePaths = sync(`${process.cwd()}/content/${folder}/*.md`);
  const paths = articlePaths.map((articlePath) => {
    const pathParts = articlePath.split('/');

    return {
      params: { slug: pathParts[pathParts.length - 1].slice(0, -3) }
    };
  });

  return {
    paths,
    fallback: false
  };
};
