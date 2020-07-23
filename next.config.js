const version = require('./package.json').version;

module.exports = {
  generateBuildId: async () => {
    return `v${version}`;
  },
  exportTrailingSlash: true,
  cssLoaderOptions: {
    url: false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });

    return config;
  }
};
