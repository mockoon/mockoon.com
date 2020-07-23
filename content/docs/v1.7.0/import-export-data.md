---
title: Import/export data
icon: import_export
meta:
  title: Import and export environments and routes
  description: Learn how to easily import and export your environments and routes in Mockoon format
---

### Import/export data

---

Mockoon offers data import/export in its own format (JSON).

#### Export all environments to a JSON file

To export all environments to a file, open the **Import/export** menu, select **Mockoon's format** and then **Export all environments to a file (JSON)**:

![Click on Export all environments to a file (JSON)](/images/docs/export-all.png)

Since v1.7.0, the environments exported in older versions will be automatically migrated if imported in a more recent version. Once migrated, environments cannot be imported anymore in an older version.

For versions prior 1.7.0, exports are locked to the version on which they were created and cannot be imported on a different version.

#### Single environment or route export to clipboard

To export a specific environment or route's JSON data to the clipboard, right-click on the environment or route and select **Copy to clipboard (JSON)**:

![Right click on an environment and click on Copy to clipboard (JSON)](/images/docs/export-clipboard-env.png)

Starting with v1.7.0, the resulting JSON is fully compatible with the file-based import. It can either be imported through **Import/export** > **Mockoon's format** > **Import from the clipboard**, or copied in a JSON file and imported through **Import/export** > **Mockoon's format** > **Import from a file**.

One limitation: a single route copied to the clipboard cannot be imported on a different version of Mockoon as data migration cannot be applied on routes only.

#### Import from a JSON file

To import data from a JSON file, open the **Import/export** menu, select **Mockoon's format** and then **Import from a file (JSON)**:

![Click on Import from a file](/images/docs/import-file.png)

Any type of export can be imported from a JSON file: environments JSON files or single environment/route copied to the clipboard (see below) and saved to a JSON file. Environments imported from a file will be added at the end of the environments list. No data will be overwritten even if imported environments share the same names. Imported routes will be added to the active environment.

#### Import from clipboard

To import data from the clipboard, open the **Import/export** menu, select **Mockoon's format** and then **Import from clipboard**:

![Click on Import from clipboard](/images/docs/import-clipboard.png)

As for the JSON import, any type of exported data can be imported through this method.

#### Note for older versions (<1.7.0)

Before v1.7.0, data exported through the clipboard method was not compatible with import from a file and vice versa.
