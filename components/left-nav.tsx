import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';

type LeftNavLabel = { label: string; links: LeftNavLink[] };
type LeftNavLink = {
  title: string;
  slug: string;
};

export type LeftNavItems = LeftNavLabel[];

const LeftNav: FunctionComponent<{ menuItems: LeftNavItems }> = props => {
  const router = useRouter;

  return (
    <aside className='menu'>
      <ul className='menu-list'>
        {props.menuItems.map((menuItem, menuItemIndex) => {
          const elements = [];

          if (menuItem.links) {
            elements.push(
              <p key={'label' + menuItemIndex} className='menu-label'>
                {menuItem.label}
              </p>
            );
            menuItem.links.map((link, linkIndex) => {
              elements.push(
                <li key={'link' + linkIndex}>
                  <a
                    href={link.slug}
                    className={
                      router().pathname === link.slug ? 'is-active' : ''
                    }
                  >
                    {link.title}
                  </a>
                </li>
              );
            });
          }

          return elements;
        })}
      </ul>
    </aside>
  );
};

export default LeftNav;
