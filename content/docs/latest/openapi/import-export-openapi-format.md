---
title: Import/export in OpenAPI format
meta:
  title: Import/export in OpenAPI format
  description: Learn how to easily import and export or share with your team your mock API servers and routes using the OpenAPI specification
order: 1000
---

# Import/export in OpenAPI format

---

Mockoon supports imports in both OpenAPI v2 (Swagger) and v3 formats. Environments can be exported to OpenAPI version 3.

### Import an environment from an OpenAPI v2 or v3 JSON/YAML file

To import an environment from a file, open the **Environment creation** menu, and select **New local environment from OpenAPI/Swagger**:

![Click on Import Swagger v2/OpenAPI v3 (JSON or YAML)](/images/docs/shared/import-open-api-main-menu.png)

A dialog will open where you can either provide a **file path**, **URL** or **paste the content** of your OpenAPI/Swagger file in JSON or YAML format:

![OpenAPI import dialog](/images/docs/shared/import-openapi-dialog.png)

### Export an environment to an OpenAPI v3 JSON file

To export an environment to a JSON file, use the **Export Current Environment to OpenAPI** commands from the command palette:

![Command palette showing export to OpenAPI commands](/images/docs/shared/export-openapi-command-palette.png)

### Compatibility

Compatibility between the OpenAPI specification and Mockoon's features is only partial and detailed in the [next article](docs:openapi/openapi-specification-compatibility).
