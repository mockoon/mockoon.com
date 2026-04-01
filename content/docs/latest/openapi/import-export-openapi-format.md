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

![Click on Import Swagger v2/OpenAPI v3 (JSON or YAML){989x209}](/images/docs/shared/import-open-api-main-menu.png)

A dialog will open where you can either provide a **file path**, **URL** or **paste the content** of your OpenAPI/Swagger file in JSON or YAML format:

![OpenAPI import dialog{995x665}](/images/docs/shared/import-openapi-dialog.png)

### Update/reimport an environment from an OpenAPI v2 or v3 JSON/YAML file

Starting with [v9.6.0](/releases/9.6.0/), you can also update an existing environment with an OpenAPI specification file. To do so, open the **Environment context menu**, and select **Reimport from OpenAPI/Swagger**:

![Click on Reimport Swagger v2/OpenAPI v3 (JSON or YAML){729x311}](docs-img:reimport-openapi-context-menu.png)

After selecting the file, or copying the content, a import summary will be displayed showing the planned changes to the environment. You can then choose to apply or discard the changes:

![OpenAPI reimport summary dialog{955x637}](docs-img:reimport-openapi-summary.png)

The following operations are supported when reimporting an OpenAPI specification file:

- **Add new routes to the environment**: if the OpenAPI file contains routes (by method and path) that are not already in the environment, they will be added.
- **Add new responses to existing routes**: if the OpenAPI file contains responses (by status code) for existing routes that are not already in the environment, they will be added.

No existing routes or responses will be modified or deleted when reimporting an OpenAPI specification file.

### Export an environment to an OpenAPI v3 JSON file

To export an environment to a JSON file, use the **Export Current Environment to OpenAPI** commands from the command palette:

![Command palette showing export to OpenAPI commands{1026x185}](/images/docs/shared/export-openapi-command-palette.png)

### Compatibility

Compatibility between the OpenAPI specification and Mockoon's features is only partial and detailed in the [next article](docs:openapi/openapi-specification-compatibility).
