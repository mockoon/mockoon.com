import { MetaData } from './common.model';

export type DocsTopicData = {
  title: string;
  meta: MetaData;
};

export type DocsTopicsList = { data: DocsTopicData; slug: string }[];

export type DocsNavData = { title: string; icon: string; slug: string }[];
