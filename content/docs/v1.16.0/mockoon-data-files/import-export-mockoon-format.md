---
title: Import/export in Mockoon's format
meta:
  title: Import/export in Mockoon's format
  description: Learn how to easily import and export or share with your team your mock API servers and routes using Mockoon own file format
order: 803
---

# Import/export in Mockoon's format [deprecated]

---

> Before [v1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0), exporting data in Mockoon's format was necessary to share your mocks with other users and to run them with the [CLI](/cli/). Since this update, both the desktop application and the CLI can load Mockoon's environments files directly without exporting them. [Learn more](docs:mockoon-data-files/sharing-mock-api-files)  
> **Import/export in Mockoon's format may be removed in the future**

### Export all environments to a JSON file

To export all environments to a file, open the **Import/export** menu, select **Mockoon's format** and then **Export all environments to a file (JSON)**:

![Click on Export all environments to a file (JSON){706x282}](/images/docs/v1.8.0-export-all.png)

The environments exported in older versions will be automatically migrated if imported in a more recent version. Once migrated, environments cannot be imported anymore in an older version.

### Single environment or route export to clipboard

To export a specific environment or route's JSON data to the clipboard, right-click on the environment or route and select **Copy to clipboard (JSON)**:

![Right click on an environment and click on Copy to clipboard (JSON){706x282}](/images/docs/v1.8.0-export-clipboard-env.png)

The resulting JSON is fully compatible with the file-based import. It can either be imported through **Import/export** > **Mockoon's format** > **Import from the clipboard**, or copied in a JSON file and imported through **Import/export** > **Mockoon's format** > **Import from a file**.

One limitation: a single route copied to the clipboard cannot be imported on a different version of Mockoon as data migration cannot be applied on routes only.

### Import from a JSON file

To import data from a JSON file, open the **Import/export** menu, select **Mockoon's format** and then **Import from a file (JSON)**:

![Click on Import from a file{706x282}](/images/docs/v1.8.0-import-file.png)

Any type of export can be imported from a JSON file: environments JSON files or single environment/route copied to the clipboard (see below) and saved to a JSON file. Environments imported from a file will be added at the end of the environments list. No data will be overwritten even if imported environments share the same names. Imported routes will be added to the active environment.

### Import from clipboard

To import data from the clipboard, open the **Import/export** menu, select **Mockoon's format** and then **Import from clipboard**:

![Click on Import from clipboard{706x282}](/images/docs/v1.8.0-import-clipboard.png)

As for the JSON import, any type of exported data can be imported through this method.
