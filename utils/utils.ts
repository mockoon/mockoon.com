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

export const getDesktopLatestVersion = async () => {
  const response = await fetch(process.env.DESKTOP_LATEST_RELEASE_URL);
  const data: { tag: string } = await response.json();

  return data.tag;
};

export const getFreeTemplates = async () => {
  const listResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/templates/free`
  );
  const templatesList: TemplateLight[] = await listResponse.json();

  const templatesResponses = await Promise.all(
    templatesList.map((templateEntry) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/templates/free/${templateEntry.id}`
      );
    })
  );

  const templates: Template[] = await Promise.all(
    templatesResponses.map((response) => response.json())
  );

  return templates;
};
