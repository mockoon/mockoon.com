---
title: Legacy export files
meta:
  title: Legacy export files
  description: Learn how to run your mock API server using deprecated legacy Mockoon export files, both supported by the desktop application and the CLI
order: 1140
---

# Legacy export files

---

## Pre v1.16.0 export format

Before [v1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0), exporting data in Mockoon's format was necessary to share your mocks with other users and to run them with the [CLI](/cli/). Since this update, both the desktop application and the CLI can use or load Mockoon's environments files directly without exporting them ([Learn more](docs:mockoon-data-files/sharing-mock-api-files)).

Export files looked like regular environment files, wrapped in Mockoon's specific format:

```json
{
  "source": "mockoon:1.17.0",
  "data": [
    {
      "type": "environment",
      "item": {
        "uuid": "",
        "lastMigration": 19,
        "name": "Exported environment",
        ...
      }
    }
  ]
}
```

## v1.18.0 deprecation

In [v1.18.0](https://github.com/mockoon/mockoon/releases/tag/v1.18.0), the options to import/export in Mockoon's format have been removed from the application. You won't be able to export your environments in this format anymore.

However, both the CLI and the desktop application can load these legacy export files.

When opening an old export file, Mockoon will ask for confirmation before opening it. Upon confirmation, the export file will be migrated to the new format automatically:

![prompt before opening legacy export file](docs-img:legacy-export-file-open-prompt.png)
