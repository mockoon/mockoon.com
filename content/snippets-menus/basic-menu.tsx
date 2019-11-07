import { LeftNavItems } from '../../components/left-nav';

export const BasicSnippetsMenu: LeftNavItems = [
  {
    label: 'Body examples',
    links: [
      { title: 'JSON snippets', slug: '/snippets/basic/json' },
      { title: 'CSV generation', slug: '/snippets/basic/csv-generation' }
    ]
  },
  {
    label: 'Complete routes',
    links: [
      { title: 'Route', slug: '/snippets/basic/complete-route' }
    ]
  }
];
