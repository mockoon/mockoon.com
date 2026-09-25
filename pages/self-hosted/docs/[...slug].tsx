import matter from 'gray-matter';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Markdown from '../../../components/markdown';
import Meta from '../../../components/meta';
import Layout from '../../../layout/layout';
import {
  DocsNavCategory,
  DocsNavData,
  DocsNavItem,
  DocsTopicData
} from '../../../models/docs.model';
import { sortByOrder } from '../../../utils/utils';

/**
 * Browse the ./content/self-hosted-docs/... folder and list all the topics.
 * Content files name must follow this pattern:
 * {category}/{topic}.md
 *
 * Category depth cannot be higher than 1.
 */
export async function getStaticPaths() {
  const paths = ((files) => {
    const keys = files.keys();

    return keys.map((key) => {
      const pathParts = key.split('/');
      return {
        params: {
          slug: [
            // create slug from the path parts (path / file name (-ext))
            ...pathParts.slice(1).map((part, partIndex, parts) => {
              if (partIndex === parts.length - 1) {
                return part.split('.')[0];
              }
              return part;
            })
          ]
        }
      };
    });
  })(
    require.context('../../../content/self-hosted-docs/', true, /\.\/.+\.md$/)
  );

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // get all documentation file list
  const docsData = ((files) => {
    const filePaths = files.keys();
    const fileContents: any[] = filePaths.map(files);
    const topicList: {
      slug: string;
      data: DocsTopicData;
      categoryName: string;
    }[] = [];

    filePaths.forEach((filePath, index) => {
      const pathParts = filePath.split('/');

      // we remove both /docs and version from the current slug
      const topicPath = pathParts.slice(1).map((part, partIndex, parts) => {
        if (partIndex === parts.length - 1) {
          return part.split('.')[0];
        }
        return part;
      });

      const fileContent = fileContents[index];
      const parsedContent = matter(fileContent.default);
      topicList.push({
        slug: `${topicPath.join('/')}`,
        data: parsedContent.data as DocsTopicData,
        categoryName: topicPath.length === 2 ? topicPath[0] : null
      });
    });

    return {
      list: topicList
    };
  })(require.context('../../../content/self-hosted-docs', true, /\.\/.+\.md$/));

  const fileContent = await require(
    `../../../content/self-hosted-docs/${params.slug.join('/')}.md`
  );
  const parsedContent = matter(fileContent.default);

  const navItems = docsData.list
    .reduce((navItems: DocsNavData, topic) => {
      const newItem: DocsNavItem = {
        type: 'topic',
        title: topic.data.title,
        order: topic.data.order || 1000,
        slug: `/self-hosted/docs/${topic.slug}`
      };

      if (topic.categoryName) {
        const existingCategoryIndex = navItems.findIndex(
          (navItem) =>
            navItem.type === 'category' &&
            navItem.categoryName === topic.categoryName
        );

        if (existingCategoryIndex !== -1) {
          (navItems[existingCategoryIndex] as DocsNavCategory).items.push(
            newItem
          );
          (navItems[existingCategoryIndex] as DocsNavCategory).items.sort(
            sortByOrder
          );
        } else {
          navItems.push({
            type: 'category',
            title: topic.categoryName.replace(/\-/g, ' '),
            categoryName: topic.categoryName,
            order: topic.data.order,
            items: [newItem]
          });
        }
      } else {
        navItems.push(newItem);
      }

      return navItems;
    }, [])
    .sort(sortByOrder);

  return {
    props: {
      slug: `docs/${params.slug.join('/')}`,
      navItems,
      topicData: parsedContent.data,
      topicBody: parsedContent.content
    }
  };
}

export default function SelfHostedDocs(props: {
  slug: string;
  navItems: DocsNavData;
  topicData: DocsTopicData;
  topicBody: string;
}) {
  const router = useRouter();

  return (
    <Layout footerBanner='contact'>
      <Meta
        title={props.topicData.meta.title}
        description={props.topicData.meta.description}
        ogType='article'
        url={`/${props.slug}/`}
      />
      <div className='container-fluid'>
        <div className='row justify-content-center gx-0 mx-lg-0 mb-5'>
          <div className='col-12 col-lg-2 me-lg-5'>
            <aside className='flex-grow-1 py-8 py-lg-10'>
              <div className='content mb-5'>
                <h3>Mockoon Self-Hosted</h3>
              </div>
              <hr />
              <ul className='card-list list'>
                {props.navItems.map((menuItem, menuItemIndex) => {
                  const itemsToBuild =
                    menuItem.type === 'category' ? menuItem.items : [menuItem];

                  const itemsHtml = itemsToBuild.map((item, itemIndex) => (
                    <li
                      key={`link${itemIndex}`}
                      className={`list-item py-1 ${
                        menuItem.type === 'category' ? 'ps-2' : ''
                      } ${router.asPath.includes(item.slug) ? 'active' : ''}`}
                    >
                      <Link href={`${item.slug}/`} className='list-link'>
                        <>{item.title}</>
                      </Link>
                    </li>
                  ));

                  return [
                    menuItem.type === 'category' && (
                      <h6
                        className='fw-bold text-uppercase mt-5 mb-2'
                        key={`category${menuItemIndex}`}
                      >
                        {menuItem.title}
                      </h6>
                    ),
                    itemsHtml
                  ];
                })}
              </ul>
            </aside>
          </div>
          <div className='col-12 col-lg-8'>
            <section className='py-8 py-lg-10'>
              <div className='content'>
                <Markdown body={props.topicBody} slug={props.slug} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
