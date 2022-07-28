/**
 * 1. Get the current desktop app version from the API
 * 2. Copy the latest documentation in a folder with the current app version name v{x.x.x}
 */
const axios = require('axios');
const fs = require('fs');

axios
  .get('https://api.mockoon.com/releases/desktop/stable.json')
  .then((response) => {
    fs.cp(
      './content/docs/latest',
      './content/docs/v' + response.data.tag,
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
