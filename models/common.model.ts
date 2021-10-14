import { MouseEvent } from 'react';

export type MetaData = {
  title: string;
  description: string;
  image?: string;
  ogType?: string;
  url?: string;
};

export type CardData = {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  links?: {
    src: string;
    text: string;
    icon?: string;
    clickHandler?: (target: string) => (event: MouseEvent) => void;
  }[];
};

export type ArticleData = {
  title: string;
  excerpt: string;
  date?: string;
  meta: MetaData;
  // canonical URl if different
  canonical?: string;
  image?: string;
  imageAlt?: string;
  // used to build a custom header
  header?: {
    image: string;
    imageAlt: string;
    overview: string;
    industry: string;
    employees: number;
    link: string;
    linkAnchor: string;
  };
  logo?: string;
  logoAlt?: string;
  // order of the article on the index page
  order?: number;
};

export type ArticleList = {
  data: ArticleData;
  slug: string;
}[];

export type QuotationData = {
  type: '##quotation##';
  citation: string;
  author: string;
  authorRole: string;
  pictureUrl: string;
};
