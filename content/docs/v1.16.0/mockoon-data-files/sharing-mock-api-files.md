---
title: Sharing your mock API files
meta:
  title: Sharing your mock API files
  description: Learn how to easily share your mock API files with other mockoon users, or use them with the CLI, and setup a git repository
order: 801
---

# Sharing your mock API files

---

### Sharing a mock API

Each file can be easily shared with other Mockoon's users, "as-is". Since [v1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0), there is no need to export in Mockoon's format on one computer and re-import on another one.
After sharing and saving an environment file in any folder, the application can open them directly using the "Open environment" button:

![open an environment](/images/docs/open-environment.png)

### Use a Git-tracked folder

You can save your environment data files in a Git-tracked folder to make sharing easier. By default, an environment file JSON content is saved pretty-printed to allow comparing changes between two commits.
You can disable pretty printing in the settings:

![disable pretty printing](/images/docs/storage-pretty-printing.png)

### Use a mock API with the CLI

Before v1.16.0 and CLI's v1.2.0, the latter was only compatible with export files. Since v1.2.0, the CLI is also directly [compatible with environment files](https://github.com/mockoon/cli#use-a-mockoon-environment-file-preferred-method).
