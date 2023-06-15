export type Template = {
  id: string;
  name: string;
  slug: string;
  content: string;
  type: string;
  source?: string;
  pro: boolean;
};

export type TemplateLight = Omit<Template, 'content' | 'type' | 'source'>;
