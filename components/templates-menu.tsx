import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Template } from '../models/templates.model';
import SidebarBanner from './sidebar-banner';

const TemplatesMenu: FunctionComponent<{
  templates: Template[];
  activeTemplate?: Template;
}> = function ({ templates }) {
  const router = useRouter();
  return (
    <aside className='flex-grow-1 sticky-top'>
      <ul className='card-list list mb-6'>
        <h6 className='fw-bold text-uppercase mb-2'>Templates</h6>
        {templates.map((template, templateIndex) => {
          return (
            <li
              key={`template${templateIndex}`}
              className={`list-item py-1 ${
                router.query.slug?.includes(template.slug) ? 'active' : ''
              }`}
            >
              <Link href={`/templates/${template.slug}`} className='list-link'>
                {template.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <SidebarBanner
        pro
        title='Prototype faster than ever!'
        text='With Mockoon Pro, you can generate your own templates using our AI assistant and prototype faster than ever.'
        link='/pro/'
        ctaText='Discover Mockoon Pro →'
      />
    </aside>
  );
};

export default TemplatesMenu;
