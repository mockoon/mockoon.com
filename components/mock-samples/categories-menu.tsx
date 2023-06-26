import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { MockAPIsCategories } from '../../models/common.model';

const CategoriesMenu: FunctionComponent<{
  categories: MockAPIsCategories;
}> = function ({ categories }) {
  const router = useRouter();

  return (
    <aside>
      <ul className='card-list list'>
        <li
          key={`categoryall`}
          className={`list-item py-1 ${
            router.asPath.includes('all') ? 'active' : ''
          }`}
        >
          <Link
            href='/mock-samples/category/all/'
            scroll={false}
            className='list-link'
          >
            All
          </Link>
        </li>

        {categories.map((category, categoryIndex) => {
          return (
            <li
              key={`category${categoryIndex}`}
              className={`list-item py-1 ${
                router.asPath.includes(category.slug) ? 'active' : ''
              }`}
            >
              <Link
                href={`/mock-samples/category/${category.slug}/`}
                className='list-link'
              >
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoriesMenu;
