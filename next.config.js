module.exports = {
  output: 'export',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });

    return config;
  },
  transpilePackages: ['react-github-btn']
  // do not add redirects as we are using a static export (next export) and it doesn't support redirects
};
