---
title: Import/export in OpenAPI format
meta:
  title: Import/export in OpenAPI format
  description: Learn how to easily import and export or share with your team your mock API servers and routes using the OpenAPI specification
order: 802
---

# Import/export in OpenAPI format

---

Mockoon supports import in both OpenAPI v2 (Swagger) and v3 formats. Environments can be exported to OpenAPI v3 format only.

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
