/**
 * Add the image size to all markdown image tags:
 * ![alt text](/images/x/y/z.png)
 * --> ![alt text{5000x5000}](/images/x/y/z.png)
 */

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { imageSize } from 'image-size';

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

glob('./content/**/*.md').then((files) => {
  files.forEach((filePath) => {
    filePath = filePath.replace(/\\/g, '/');
    console.log('\n', filePath);
    let fileContent = readFileSync(filePath).toString();
    const regex =
      /\!(\[.*\])\(((?:\/images|docs\-img\:)[0-9A-Za-z\_\-\.\/]{0,})\)/g;
    let matches = fileContent.matchAll(regex);

    for (const match of matches) {
      let size;
      if (match[2].startsWith('docs-img:')) {
        const buffer = readFileSync(
          `./public/images/${filePath
            .replace('./content/', '')
            .replace('content/', '')
            .replace('.md', '')}/${match[2].replace('docs-img:', '')}`
        );

        size = imageSize(buffer);
      } else {
        const buffer = readFileSync('./public' + match[2]);
        size = imageSize(buffer);
      }

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

    writeFileSync(filePath, fileContent);
  });

  console.log('✅ Done');
});
