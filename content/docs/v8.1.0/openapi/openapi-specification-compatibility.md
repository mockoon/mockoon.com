---
title: OpenAPI specification compatibility
meta:
  title: OpenAPI specification compatibility
  description: Learn more about Mockoon compatibility with the OpenAPI specification and how to easily share your API definitions with your team
order: 1010
---

# OpenAPI specification compatibility

---

Importing an OpenAPI specification file in Mockoon can be a good starting point to create a mock from your API definition. And exporting your mock to an OpenAPI specification file is also a way to start an API definition. However, there is currently no equivalent between all the OpenAPI specifications and Mockoon's features:

- Some of Mockoon's features will be lost when exporting to an OpenAPI specification because they have no equivalent in the specification. It is the case for the [rules system](docs:route-responses/dynamic-rules).
- Some features are not yet exported to an OpenAPI specification: bodies created in Mockoon are not converted to OpenAPI schemas or body examples.
- when importing an OpenAPI specification file, not all properties have equivalents in Mockoon, or some may not be implemented yet. See below for the list of imported information.

Importing from or exporting to an OpenAPI specification file is a good starting point but not a way to share your mock APIs created with Mockoon. For sharing, we recommend that you directly [share Mockoon's data files](docs:mockoon-data-files/sharing-mock-api-files).  
Also, if you want to run your mock API with the [CLI](/cli/), you must use [Mockoon's data files directly](/tutorials/run-mock-api-anywhere-cli/), or you may lose part of your mock's behavior.

### Supported information

OpenAPI import and export currently support the following API information:

- API title.
- Server URL, port, base path (prefix) and protocol.
- Routes paths (including route parameters translated to `/:param`), methods, responses with status code (200, etc.), headers, and descriptions.

_Import only_: sample responses and JSON bodies are created from OpenAPI schemas and examples during import.
