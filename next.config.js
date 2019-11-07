const withSass = require('@zeit/next-sass');
const version = require('./package.json').version;
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withSass({
  generateBuildId: async () => {
    return `v${version}`;
  },
  experimental: {
    publicDirectory: true
  },
  exportTrailingSlash: true,
  cssLoaderOptions: {
    url: false
  }
}));
