const fs = require('fs');

/**
 * Recursively read directories and only keep path containing a config.json file
 * Returns full paths
 *
 * @param {*} rootPath - path to look into
 * @param {*} pagesArray - array to which append the found directories
 */
const readDirectories = (rootPath, pagesArray, recurPath = '') => {
  // merge items to pages array
  fs.readdirSync(rootPath).forEach((file) => {
    const isDir = fs.statSync(rootPath + file).isDirectory();
    const hasConfigJson = fs.existsSync((rootPath + file) + '/config.json');

    // stop when folder contains a config.json file
    if (isDir && hasConfigJson) {
      pagesArray.push(recurPath + file);
    } else if (isDir) {
      // otherwise read recursively
      readDirectories(rootPath + file + '/', pagesArray, (recurPath + file + '/'));
    }
  });
};

module.exports = {
  /**
   * Read a JSON config file synchronously
   * Used instead of require() to avoid the cache and get live reload on config files
   *
   * @param {string} path - file path
   */
  readJSONSync: (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
  },
  readDirectories
};
