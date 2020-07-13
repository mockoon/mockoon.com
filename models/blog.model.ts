import { MetaData } from './common.model';

export type ArticleData = {
  title: string;
  excerpt: string;
  date: string;
  meta: MetaData;
  canonical?: string;
};
