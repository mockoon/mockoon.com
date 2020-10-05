export type MetaData = {
  title: string;
  description: string;
  image?: string;
  ogType?: string;
  url?: string;
};

export type ArticleData = {
  title: string;
  excerpt: string;
  date: string;
  meta: MetaData;
  canonical?: string;
};

export interface TutorialData extends ArticleData {
  image: string;
  imageAlt: string;
}
