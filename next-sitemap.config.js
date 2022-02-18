/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://mockoon.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  exclude: ['/docs/v*/*'],
  transform: (config, path) => {
    const value = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    };

    if (path === '/') {
      return null;
    }

    return value;
  }
};
