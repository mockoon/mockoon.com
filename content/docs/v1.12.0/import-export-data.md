---
title: Import/export data
meta:
  title: Import and export mock API and routes
  description: Learn how to easily import and export or share with your team your mock API servers and routes in OpenAPI or Mockoon's own format
order: 70
---

# Import/export data

---

Mockoon supports import/export in two formats: Mockoon own format (JSON) and Swagger (v2) or OpenAPI (v3) format.

## 1. Mockoon's format

### Export all environments to a JSON file

To export all environments to a file, open the **Import/export** menu, select **Mockoon's format** and then **Export all environments to a file (JSON)**:

![Click on Export all environments to a file (JSON)](/images/docs/v1.8.0-export-all.png)

The environments exported in older versions will be automatically migrated if imported in a more recent version. Once migrated, environments cannot be imported anymore in an older version.

### Single environment or route export to clipboard

To export a specific environment or route's JSON data to the clipboard, right-click on the environment or route and select **Copy to clipboard (JSON)**:

![Right click on an environment and click on Copy to clipboard (JSON)](/images/docs/v1.8.0-export-clipboard-env.png)

The resulting JSON is fully compatible with the file-based import. It can either be imported through **Import/export** > **Mockoon's format** > **Import from the clipboard**, or copied in a JSON file and imported through **Import/export** > **Mockoon's format** > **Import from a file**.

One limitation: a single route copied to the clipboard cannot be imported on a different version of Mockoon as data migration cannot be applied on routes only.

### Import from a JSON file

To import data from a JSON file, open the **Import/export** menu, select **Mockoon's format** and then **Import from a file (JSON)**:

![Click on Import from a file](/images/docs/v1.8.0-import-file.png)

Any type of export can be imported from a JSON file: environments JSON files or single environment/route copied to the clipboard (see below) and saved to a JSON file. Environments imported from a file will be added at the end of the environments list. No data will be overwritten even if imported environments share the same names. Imported routes will be added to the active environment.

### Import from clipboard

To import data from the clipboard, open the **Import/export** menu, select **Mockoon's format** and then **Import from clipboard**:

![Click on Import from clipboard](/images/docs/v1.8.0-import-clipboard.png)

As for the JSON import, any type of exported data can be imported through this method.

## 2. Swagger/OpenAPI format

Mockoon also supports import in both OpenAPI v2 (Swagger) and v3 formats. Environments can be exported to OpenAPI v3 format only.

OpenAPI import and export currently support the following properties:
- API title.
- Server URL, port, base path (prefix) and protocol.
- Routes paths (including parameters), methods, responses with status code (200, etc) and headers, and descriptions.

Import only: sample JSON bodies are created from OpenAPI schemas during import.

### Import environment from an OpenAPI v2 or v3 JSON/YAML file

To import an environment from a file, open the **Import/export** menu, select **Swagger/OpenAPI** and then **Import Swagger v2/OpenAPI v3 (JSON or YAML)**:

![Click on Import Swagger v2/OpenAPI v3 (JSON or YAML)](/images/docs/v1.8.0-import-openapi.png)

### Export an environment to an OpenAPI v3 JSON file

To export an environment to a JSON file, open the **Import/export** menu, select **Swagger/OpenAPI** and then **Export current environment to OpenAPI v3 (JSON)**:

![Click on Export current environment to OpenAPI v3 (JSON)](/images/docs/v1.8.0-export-openapi.png)
