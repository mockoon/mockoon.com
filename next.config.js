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
  webpack5: true,
  async redirects() {
    const response = await fetch(process.env.DESKTOP_LATEST_RELEASE_URL);
    const data = await response.json();

    return [
      {
        source: '/releases/',
        destination: `/releases/${data.tag}/`,
        permanent: true
      },
      {
        source: '/releases/desktop/:path*/',
        destination: '/old-releases/desktop/:path*/',
        permanent: true
      },
      {
        source: '/releases/cli/:path*',
        destination: '/old-releases/cli/:path*/',
        permanent: true
      },
      {
        source: '/releases/serverless/:path*/',
        destination: '/old-releases/serverless/:path*/',
        permanent: true
      }
    ];
  }
});
