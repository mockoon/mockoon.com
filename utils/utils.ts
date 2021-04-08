import { ArticleList } from '../models/common.model';

export const sortByOrder = (firstTopic, secondTopic) =>
  firstTopic.order > secondTopic.order
    ? 1
    : secondTopic.order > firstTopic.order
    ? -1
    : 0;

export const orderArticles = (articles: ArticleList) => {
  return articles.sort((firstArticle, secondArticle) =>
    firstArticle.data.order > secondArticle.data.order
      ? 1
      : secondArticle.data.order > firstArticle.data.order
      ? -1
      : 0
  );
};
