const version = require('./package.json').version;
const withTM = require('next-transpile-modules')(['react-github-btn']);

module.exports = withTM({
  generateBuildId: async () => {
    return `v${version}`;
  },
  trailingSlash: true,
  cssLoaderOptions: {
    url: false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });

    return config;
  },
  webpack5: true
});
