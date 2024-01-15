const fs = require('fs');
const axios = require('axios');
const { glob } = require('glob');

const websiteURL = 'https://mockoon.com';
const sitemapList = [];

const getAPIList = async () => {
  return (
    await axios.get(
      'https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/list.json'
    )
  ).data;
};

function addPage(frequency, priority) {
  return function (path) {
    const route =
      (path.includes('/index') ? path.replace('/index', '') : path) + '/';

    return `  <url>
    <loc>${`${websiteURL}${route}`}</loc>
    <changefreq>${frequency || 'monthly'}</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${priority || '0.7'}</priority>
  </url>`;
  };
}

function buildSitemap(list) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${list.map(addPage()).join('\n')}
  </urlset>`;
}

/**
 * create sitemaps for each mock samples category pages
 */
async function generateMockSamplesCategoriesSitemap() {
  const apiList = await getAPIList();
  let categoryPaths = ['/mock-samples/category/all'];

  // create categories paths
  categoryPaths = [
    ...categoryPaths,
    ...apiList.categories.map((category) => {
      return `/mock-samples/category/${category}`;
    })
  ];

  console.log(categoryPaths);

  fs.writeFileSync(
    'public/sitemaps/mock-samples-categories.xml',
    buildSitemap(categoryPaths)
  );
  sitemapList.push('/sitemaps/mock-samples-categories.xml');
}

/**
 * Create sitemaps for each mock samples per category
 */
async function generateMockSamplesCategorySitemap() {
  let apiList = await getAPIList();

  // keep only one category per item to avoid dups
  apiList.items.forEach((item) => {
    if (item.categories.length > 1) {
      item.categories.splice(1);
      console.log(item.title);
    }
  });

  apiList.categories.forEach((category) => {
    const filteredItemsPaths = apiList.items
      .filter((item) => item.categories.includes(category))
      .map((item) => `/mock-samples/${item.slug}`);

    if (filteredItemsPaths.length) {
      fs.writeFileSync(
        `public/sitemaps/mock-samples-category-${category}.xml`,
        buildSitemap(filteredItemsPaths)
      );

      sitemapList.push(`/sitemaps/mock-samples-category-${category}.xml`);
    }
  });

  // create sitemap for uncategorized APIs
  const uncategorizedItemsPaths = apiList.items
    .filter((item) => item.categories.length === 0)
    .map((item) => `/mock-samples/${item.slug}`);

  fs.writeFileSync(
    'public/sitemaps/mock-samples-category-none.xml',
    buildSitemap(uncategorizedItemsPaths)
  );

  sitemapList.push('/sitemaps/mock-samples-category-none.xml');
}

if (!fs.existsSync('public/sitemaps/')) {
  fs.mkdirSync('public/sitemaps/');
}

/**
 * Generate sitemap for MD and TSX files
 *
 * @param {*} path
 * @param {*} filename
 * @param {*} toRemove
 * @param {*} additionalPaths
 */
async function generateSitemap(
  path,
  filename,
  toRemove,
  additionalPaths,
  exclude
) {
  let files = await glob(path);

  files = files.map((file) => {
    return file
      .replace(new RegExp(toRemove), '')
      .replace('.tsx', '')
      .replace('.md', '');
  });

  if (exclude && exclude.length) {
    files = files.filter(
      (file) => !exclude.some((excluded) => file.includes(excluded))
    );
  }

  if (additionalPaths && additionalPaths.length) {
    files = [...files, ...additionalPaths];
  }

  console.log(files);

  fs.writeFileSync(`public/sitemaps/${filename}.xml`, buildSitemap(files));
  sitemapList.push(`/sitemaps/${filename}.xml`);
}

if (!fs.existsSync('public/sitemaps/')) {
  fs.mkdirSync('public/sitemaps/');
}

Promise.all([
  generateSitemap('pages/!(_|index)*.tsx', 'root-pages', '^pages', null, [
    'app-auth',
    'login',
    'signup',
    'privacy',
    'terms',
    'email-verification',
    '404'
  ]),
  generateSitemap('pages/integrations/*.tsx', 'integrations', '^pages'),
  generateSitemap(
    '{pages,content}/tutorials/!(\\[)*.{tsx,md}',
    'tutorials',
    '^(content|pages)'
  ),
  generateSitemap(
    '{pages,content}/articles/!(\\[)*.{tsx,md}',
    'articles',
    '^(content|pages)'
  ),
  generateSitemap(
    '{pages,content}/blog/!(\\[)*.{tsx,md}',
    'blog',
    '^(content|pages)'
  ),
  generateSitemap(
    '{pages,content}/case-studies/!(\\[)*.{tsx,md}',
    'case-studies',
    '^(content|pages)'
  ),
  generateSitemap(
    '{pages,content}/compare/!(\\[)*.{tsx,md}',
    'comparisons',
    '^(content|pages)'
  ),
  generateSitemap('pages/tools/*.tsx', 'tools', '^pages'),
  generateSitemap(
    'content/old-releases/**/*.md',
    'old-releases',
    '^(content|pages)',
    ['/old-releases/cli', '/old-releases/desktop', '/old-releases/serverless']
  ),
  generateSitemap('content/docs/latest/**/*.md', 'docs', '^(content|pages)'),
  generateSitemap('content/releases/*.md', 'releases', '^(content|pages)'),
  generateMockSamplesCategoriesSitemap(),
  generateMockSamplesCategorySitemap()
]).then(() => {
  // generate sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapList
  .map((sitemapFile) => {
    return `    <sitemap>
      <loc>${websiteURL}${sitemapFile}</loc>
    </sitemap>`;
  })
  .join('\n')}
  </sitemapindex>`;

  fs.writeFileSync(`public/sitemap.xml`, sitemapIndex);
});
