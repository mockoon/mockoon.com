/**
 * 1. Get the current desktop app version from the API
 * 2. Copy the latest documentation in a folder with the current app version name v{x.x.x}
 */

import { cp } from 'node:fs';

fetch('https://api.mockoon.com/releases/desktop/stable.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    cp(
      './content/docs/latest',
      './content/docs/v' + data.tag,
      {
        recursive: true
      },
      (error) => {
        console.log(error);
      }
    );
    cp(
      './public/images/docs/latest',
      './public/images/docs/v' + data.tag,
      {
        recursive: true
      },
      (error) => {
        console.log(error);
      }
    );
  })
  .catch((error) => {
    console.log(error);
  });
