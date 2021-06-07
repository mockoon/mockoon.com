export type MetaData = {
  title: string;
  description: string;
  image?: string;
  ogType?: string;
  url?: string;
};

export type ItemCard = {
  title: string;
  description: string;
  disabledLink?: boolean;
  link?: string;
  linkText?: string;
}[];

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

export type QuoteData = {
  type: '##quote##';
  citation: string;
  author: string;
  authorRole: string;
  pictureUrl: string;
};
