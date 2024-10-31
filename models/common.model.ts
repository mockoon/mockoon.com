import { ReactElement } from 'react';
import { authors } from '../constants/authors';

export type AccordionData = {
  title?: string;
  items: {
    title: string;
    subtitle?: string;
    content: string | string[] | ReactElement;
    count?: number;
  }[];
}[];

export type MockAPI = {
  title: string;
  slug: string;
  version: string;
  description: string;
  categories: string[];
  provider: string;
  environmentSrc: string;
  logoSrc: string | null;
  logoBg: string;
  externalLink: string;
};

export type MockAPIsDescriptor = {
  items: MockAPI[];
  categories: string[];
};

export type MockAPIsCategories = { slug: string; title: string }[];

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
  imagePaddingClasses?: string;
  title: string;
  description?: string;
  topTag?: string;
  topTagClasses?: string;
  links?: {
    src: string;
    text: string;
    icon?: string;
    iconAfter?: boolean;
    blank?: boolean;
  }[];
};

export type FooterCTA = 'newsletter' | 'contact' | 'download';

export type ArticleData = {
  title?: string;
  // short title used sometimes to build shorter more catchy links
  shortTitle?: string;
  excerpt?: string;
  date?: string;
  meta?: MetaData;
  // canonical URl if different
  canonical?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  tags: string[];
  author?: keyof typeof authors;
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
  // if present add a link to the previous/next page (when tutorials follows)
  previousLink?: string;
  nextLink?: string;
  previousText?: string;
  nextText?: string;
  // hide article from the list of tutorials
  hidden?: boolean;
  // will automatically add a paragraph with buttons to download the demo environment
  mockApiFile?: string;
};

export type ArticleList = {
  data: ArticleData;
  slug: string;
}[];

export type ReleaseList = {
  version: string;
  data: ArticleData;
  content: string;
}[];

export type QuotationData = {
  type: '##quotation##';
  citation: string;
  author: string;
  authorRole: string;
  pictureUrl: string;
};
