import matter from 'gray-matter';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { rsort as semverSort } from 'semver';
import Markdown from '../../components/markdown';
import Meta from '../../components/meta';
import SidebarBanner from '../../components/sidebar-banner';
import Layout from '../../layout/layout';
import {
  DocsNavCategory,
  DocsNavData,
  DocsNavItem,
  DocsTopicData
} from '../../models/docs.model';
import { getDesktopLatestVersion, sortByOrder } from '../../utils/utils';

/**
 * Browse the ./content/docs/... folder and list all the topics.
 * Content files name must follow this pattern:
 * {version}/{category}/{topic}.md
 *
 * Category depth cannot be higher than 1.
 *
 */
export async function getStaticPaths() {
  const paths = ((files) => {
    const keys = files.keys();

    return keys.map((key) => {
      const pathParts = key.split('/');
      return {
        params: {
          slug: [
            // create slug from the path parts (version / path / file name (-ext))
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
  })(require.context('../../content/docs/', true, /\.\/.+\.md$/));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const slugVersion = params.slug[0];

  // get all documentation file list
  const docsData = ((files) => {
    const filePaths = files.keys();
    const fileContents: any[] = filePaths.map(files);
    const versions = new Set<string>();
    const topicList: {
      slug: string;
      data: DocsTopicData;
      categoryName: string;
    }[] = [];

    filePaths.forEach((topicPath, index) => {
      const pathParts = topicPath.split('/');
      const version = pathParts[1];

      versions.add(version);

      // only push topic from the current slug version in the list
      if (topicPath.includes(slugVersion)) {
        // we remove both /docs and version from the current slug
        const topicPath = pathParts.slice(2).map((part, partIndex, parts) => {
          if (partIndex === parts.length - 1) {
            return part.split('.')[0];
          }
          return part;
        });

        const fileContent = fileContents[index];
        const parsedContent = matter(fileContent.default);
        topicList.push({
          slug: `${slugVersion}/${topicPath.join('/')}`,
          data: parsedContent.data as DocsTopicData,
          categoryName: topicPath.length === 2 ? topicPath[0] : null
        });
      }
    });

    return {
      versions: Array.from(versions),
      list: topicList
    };
  })(require.context('../../content/docs', true, /\.\/.+\.md$/));

  const fileContent = await require(
    `../../content/docs/${params.slug.join('/')}.md`
  );
  const parsedContent = matter(fileContent.default);

  const navItems = docsData.list
    .reduce((navItems: DocsNavData, topic) => {
      const newItem: DocsNavItem = {
        type: 'topic',
        title: topic.data.title,
        order: topic.data.order || 1000,
        slug: `/docs/${topic.slug}`,
        proBadge: topic.data.proBadge || false
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
      latestVersion: await getDesktopLatestVersion(),
      slug: `docs/${params.slug.join('/')}`,
      navItems,
      versions: docsData.versions,
      topicData: parsedContent.data,
      topicBody: parsedContent.content
    }
  };
}

export default function Docs(props: {
  latestVersion: string;
  slug: string;
  navItems: DocsNavData;
  topicData: DocsTopicData;
  topicBody: string;
  versions: string[];
}) {
  const router = useRouter();
  let currentVersion = router.asPath.split('/')[2];
  const [selectedVersion, setSelectedVersion] = useState(currentVersion);

  const sortedVersions = semverSort(
    props.versions.filter((version) => version !== 'latest')
  );
  sortedVersions.unshift('latest');
  const versionsMenu = sortedVersions.map((version: string) => {
    let label = version;
    if (version === 'latest') {
      label = `v${props.latestVersion} (${version})`;
    }

    if (version === 'v1.7.0') {
      label = `${version} (and older)`;
    }

    return { value: version, label };
  });

  const switchVersion = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(event.target.value);
    router.push(`/docs/${event.target.value}/about/`);
  };

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
                <h3>Documentation</h3>
                <div className='select'>
                  <select
                    className='form-select form-select-xs'
                    aria-label='Versions menu'
                    value={selectedVersion}
                    onChange={switchVersion}
                  >
                    {versionsMenu.map((version, versionIndex) => (
                      <option
                        aria-label={`Version ${version.label}`}
                        key={`version${versionIndex}`}
                        value={version.value}
                      >
                        {version.label}
                      </option>
                    ))}
                  </select>
                </div>
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
                        <>
                          {item.title}
                          {item.proBadge && (
                            <span className='badge text-bg-warning ms-2'>
                              Pro
                            </span>
                          )}
                        </>
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
                        {menuItem.categoryName.includes('mockoon-cloud') && (
                          <span className='badge text-bg-warning ms-2'>
                            Pro
                          </span>
                        )}
                      </h6>
                    ),
                    itemsHtml
                  ];
                })}
              </ul>
              <div className='mt-8'>
                <SidebarBanner
                  title="Mockoon's official online course"
                  text='Discover our official online course designed to help you get
                  started with API mocking and API design. Coming soon!'
                  link='/course/'
                  ctaText='Discover our course →'
                />
              </div>
            </aside>
          </div>
          <div className='col-12 col-lg-7 ps-lg-5 pb-8'>
            <section className='pt-lg-10'>
              <Markdown
                body={props.topicBody}
                version={currentVersion}
                slug={props.slug}
              />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
