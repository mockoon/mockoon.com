import matter from 'gray-matter';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { rsort as semverSort } from 'semver';
import Download from '../../components/download';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Newsletter from '../../components/newsletter';
import Layout from '../../layout/layout';
import { DocsNavData, DocsTopicData } from '../../models/docs.model';
import { linkTarget, transformLinkUri } from '../../utils/url';
const latestVersion = require('../../package.json').version;

export async function getStaticPaths() {
  const paths = ((files) => {
    const keys = files.keys();

    return keys.map((key) => {
      const pathParts = key.split('/');
      let version = 'latest';

      //get version in path: dot / version / topic
      if (pathParts.length === 3) {
        version = pathParts[pathParts.length - 2];
      }

      let topicName = pathParts[pathParts.length - 1].slice(0, -3);

      return {
        params: { slug: [version, topicName] }
      };
    });
  })(require.context('../../content/docs/', true, /\.md$/));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const slugVersion = params.slug[0];

  // get all documentation file list
  const topics = ((files) => {
    const topicPaths = files.keys();
    const fileContents: any[] = topicPaths.map(files);
    const versions = new Set<string>();
    const list = [];

    topicPaths.forEach((topicPath, index) => {
      const pathParts = topicPath.split('/');
      let version = 'latest';

      // only older version are in a subfolder
      if (pathParts.length === 3) {
        version = pathParts[pathParts.length - 2];
      }

      versions.add(version);

      // only push topic from the versionSlug in the list
      if (
        topicPath.includes(slugVersion) ||
        (version === 'latest' && slugVersion === 'latest')
      ) {
        let topicName = pathParts[pathParts.length - 1].slice(0, -3);
        const fileContent = fileContents[index];
        const parsedContent = matter(fileContent.default);

        list.push({
          slug: `${slugVersion}/${topicName}`,
          data: parsedContent.data as DocsTopicData
        });
      }
    });

    return {
      versions: Array.from(versions),
      list
    };
  })(require.context('../../content/docs', true, /\.md$/));

  const topicFilePath =
    params.slug[0] === 'latest' ? params.slug[1] : params.slug.join('/');

  const fileContent = await require(`../../content/docs/${topicFilePath}.md`);
  const parsedContent = matter(fileContent.default);

  return {
    props: {
      slug: `docs/${params.slug.join('/')}`,
      navItems: topics.list.map((topic) => ({
        title: topic.data.title,
        icon: topic.data.icon || null,
        slug: `/docs/${topic.slug}`
      })),
      versions: topics.versions,
      topicData: parsedContent.data,
      topicBody: parsedContent.content,
      slugVersion
    }
  };
}

export default function Docs(props: {
  slug: string;
  navItems: DocsNavData;
  topicData: DocsTopicData;
  topicBody: string;
  versions: string[];
  slugVersion: string;
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
      label = `v${latestVersion} (${version})`;
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
    <Layout>
      <Meta
        title={props.topicData.meta.title}
        description={props.topicData.meta.description}
        ogType='article'
        url={`/${props.slug}`}
      />
      <Hero />
      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3'>
              <div className='content'>
                <h3>Documentation</h3>
                <div className='select'>
                  <select
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
              <aside className='menu'>
                <ul className='menu-list'>
                  {props.navItems.map((menuItem, menuItemIndex) => {
                    return (
                      <li key={`link${menuItemIndex}`}>
                        <a
                          href={`${menuItem.slug}/`}
                          className={
                            router.asPath === menuItem.slug ? 'is-active' : ''
                          }
                        >
                          {menuItem.icon && (
                            <i
                              className={`icon-${menuItem.icon} is-primary`}
                            ></i>
                          )}
                          {menuItem.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div style={{ marginTop: '25px' }}>
                  <Download />
                </div>
              </aside>
            </div>
            <div className='column is-9'>
              <div className='content'>
                <ReactMarkdown
                  source={props.topicBody}
                  transformLinkUri={transformLinkUri(currentVersion)}
                  linkTarget={linkTarget}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  );
}
