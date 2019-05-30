const { join } = require('path');
const withSass = require('@zeit/next-sass');
const fs = require('fs-extra');
const version = require('./package.json').version;

module.exports = withSass({
  generateBuildId: async () => {
    return `v${version}`;
  },
  distDir: 'build',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (!dev) {
      await fs.copy(join(dir, './rootFiles'), join(outDir, './'));
    }

    return defaultPathMap;
  }
});
