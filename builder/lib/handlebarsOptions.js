const config = require('./config');
const version = require('../../package.json').version;

module.exports = {
  batch: [config.sourcePath + 'partials'],
  helpers: {
    text: function (key) {
      return this.texts[key] || this.commonTexts[key];
    },
    version: function () {
      return version;
    }
  }
};
