const withTM = require('next-transpile-modules')(['react-github-btn']);

module.exports = withTM({
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
