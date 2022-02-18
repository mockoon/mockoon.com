export type AccordionData = {
  title: string;
  items: { question: string; answer: string }[];
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
  title: string;
  description?: string;
  links?: {
    src: string;
    text: string;
    icon?: string;
  }[];
};

export type FooterCTA = 'newsletter' | 'contact' | 'download';

export type ArticleData = {
  title: string;
  excerpt: string;
  date?: string;
  meta: MetaData;
  // canonical URl if different
  canonical?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
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
