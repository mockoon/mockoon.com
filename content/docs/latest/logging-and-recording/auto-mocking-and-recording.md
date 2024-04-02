---
title: Auto-mocking and recording
meta:
  title: Automatic API mock creation
  description: Learn how to automatically mock your API endpoints manually or by recording all the entering requests made to an existing API
order: 701
---

# Automatically create mock routes

---

You can automatically create mock routes from HTTP transactions (request/response). This is especially useful when used in pair with the [proxy mode](docs:server-configuration/proxy-mode) to create a mock API from an existing API.

## Manually create a mock from a request

Mockoon offers the possibility to automatically create mocks for entering requests. Click on the "plus" icon on a record to create a route containing the same information (headers, body, etc.):

![create a route from a log{1384x633}](docs-img:logs-auto-mocking.png)

## Record your API calls

Mockoon can also automatically create mock API endpoints every time a request is logged. To activate this feature, click on the "Record" button at the top of the logs view:

![click on the record button{1384x633}](docs-img:logs-start-recording.png)

You can record in multiple environments at the same time. A red blinking recording icon will appear next to the environment name to indicate that the recording is active:

![recording icon{1184x433}](docs-img:logs-recording-in-progress.png)

The recording will only create a route once, based on the path and HTTP method.

> The recording mode works best with the [proxy mode](docs:server-configuration/proxy-mode) enabled and intercepting all the entering requests.
