import { MetaData } from './common.model';

export type TutorialData = {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  meta: MetaData;
  order: number;
};

export type TutorialList = { data: TutorialData; slug: string }[];
