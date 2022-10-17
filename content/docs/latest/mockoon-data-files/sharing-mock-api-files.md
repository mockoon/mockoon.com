---
title: Sharing your mock API files
meta:
  title: Sharing your mock API files
  description: Learn how to easily share your mock API files with other mockoon users, or use them with the CLI, and setup a git repository
order: 1110
---

# Sharing your mock API files

---

### Sharing a mock API

Each file can be easily shared with other Mockoon's users, "as-is". Since [v1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0), there is no need to export in Mockoon's format on one computer and re-import on another one (see [legacy export file](docs:mockoon-data-files/import-export-mockoon-format)).
After [locating your environment file](docs:mockoon-data-files/data-storage-location#locating-the-files), you can share it with your coworkers by using Git for example. You coworkers can then save the file in any folder and open it directly using the "Open environment" button:

![open an environment](docs-img:open-environment.png)

### Use a Git-tracked folder

You can save your environment data files in a Git-tracked folder to make sharing easier. By default, an environment file JSON content is saved pretty-printed to allow comparing changes between two commits.
You can disable pretty printing in the settings:

![disable pretty printing](docs-img:storage-pretty-printing.png)

### Use a mock API with the CLI

The CLI is directly [compatible with environment files](https://github.com/mockoon/cli#use-your-mocks-in-the-cli). After locating your environment file, you run them with the CLI using the following command: `mockoon-cli start -d ./path-to-file/environment-data-file.json`.
