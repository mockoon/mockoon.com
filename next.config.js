const version = require('./package.json').version;

module.exports = {
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
  future: {
    webpack5: true
  }
};
