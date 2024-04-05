import { compareBuild as semverCompare } from 'semver';
import { ArticleList } from '../models/common.model';
import { Template, TemplateLight } from '../models/templates.model';

export const sortByOrder = (firstTopic, secondTopic) =>
  firstTopic.order > secondTopic.order
    ? 1
    : secondTopic.order > firstTopic.order
      ? -1
      : 0;

export const sortPathBySemver = (a: string, b: string) => {
  const aPathparts = a.split('/');
  const bPathparts = b.split('/');

  return semverCompare(
    bPathparts[bPathparts.length - 1].slice(0, -3),
    aPathparts[aPathparts.length - 1].slice(0, -3),
    false
  );
};

export const orderArticles = (articles: ArticleList) => {
  return articles.sort((firstArticle, secondArticle) =>
    firstArticle.data.order > secondArticle.data.order
      ? 1
      : secondArticle.data.order > firstArticle.data.order
        ? -1
        : 0
  );
};
async function delay(ms: number) {
  new Promise((resolve) => setTimeout(resolve, ms));
}

export const getDesktopLatestVersion = async () => {
  const response = await fetch(process.env.DESKTOP_LATEST_RELEASE_URL);
  const data: { tag: string } = await response.json();

  return data.tag;
};

export const getTemplatesList = async () => {
  await delay(500);
  const listResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/templates`
  );

  return (await listResponse.json()) as TemplateLight[];
};

export const getTemplate = async (slug: string) => {
  await delay(500);
  const templateResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/templates/${slug}`
  );

  return (await templateResponse.json()) as Template[];
};
