import { MetaData } from './common.model';

export type DocsTopicData = {
  title: string;
  meta: MetaData;
  order: number;
};

export type DocsTopicsList = { data: DocsTopicData; slug: string }[];

export type DocsNavItem = {
  type: 'topic';
  title: string;
  slug: string;
  order: number;
};

export type DocsNavCategory = {
  type: 'category';
  title: string;
  categoryName: string;
  order: number;
  items: DocsNavItem[];
};

export type DocsNavData = (DocsNavItem | DocsNavCategory)[];
