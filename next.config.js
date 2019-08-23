const withSass = require('@zeit/next-sass');
const version = require('./package.json').version;

module.exports = withSass({
  generateBuildId: async () => {
    return `v${version}`;
  },
  experimental: {
    publicDirectory: true
  },
  exportTrailingSlash: true
});
