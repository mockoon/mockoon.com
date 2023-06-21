import { MetaData } from './common.model';

export type DocsTopicData = {
  title: string;
  meta: MetaData;
  order: number;
  proBadge?: boolean;
};

export type DocsTopicsList = { data: DocsTopicData; slug: string }[];

export type DocsNavItem = {
  type: 'topic';
  title: string;
  slug: string;
  order: number;
  proBadge?: boolean;
};

export type DocsNavCategory = {
  type: 'category';
  title: string;
  categoryName: string;
  order: number;
  items: DocsNavItem[];
  proBadge?: boolean;
};

export type DocsNavData = (DocsNavItem | DocsNavCategory)[];
