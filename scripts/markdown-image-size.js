/**
 * Add the image size to all markdown image tags:
 * ![alt text](/images/x/y/z.png)
 * --> ![alt text{5000x5000}](/images/x/y/z.png)
 */

const imageSize = require('image-size');
const { readFileSync, writeFileSync } = require('fs');
var glob = require('glob');

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

glob('./content/**/*.md', function (err, files) {
  files.forEach((file) => {
    console.log('\n', file);
    let fileContent = readFileSync(file).toString();
    const regex = /\!(\[.*\])\((\/images[0-9A-Za-z\_\-\.\/]{0,})\)/g;
    let matches = fileContent.matchAll(regex);

    for (const match of matches) {
      const size = imageSize('./public' + match[2]);

      console.log(match[1], match[2], size);
      const newString = match[1].replace(/\{[0-9]{1,}x[0-9]{1,}\}/g, '');

      fileContent = fileContent.replace(
        match[1],
        insert(
          newString,
          newString.length - 1,
          `{${size.width}x${size.height}}`
        )
      );
    }

    writeFileSync(file, fileContent);
  });
});
