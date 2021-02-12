---
title: Requests logging
meta:
  title: Mock API requests logging
  description: Learn how to access requests and responses logs or record your REST API servers calls for easier debugging
---

# Requests logging

---

## Accessing the logs

For easier debugging, Mockoon records all entering requests and all the corresponding outgoing responses for each of your mock API. To access an environment's log, click on the clock icon in the upper right corner:

![click the clock icon](/images/docs/open-logs.png)

## Logs content

The list shows all intercepted requests and how Mockoon answered to them.
Please note that all requests are intercepted, even the `/favicon` request made by the browser.
Each record contains the entering request and the outgoing response information. This includes the complete list of headers, route params, query params, and body in raw format.

![view the request](/images/docs/logs-request.png)
![view the response](/images/docs/logs-response.png)

## Logs metadata

You can also easily see if a request has been caught by Mockoon (record shows a green tick) or has been passed to another URL if the [proxy mode](docs:proxy-mode) is activated (record shows a shield icon):

![view logs metadata](/images/docs/logs-metadata.png)

## Route auto-mocking

Mockoon also offers the possibility to automatically create mocks for entering requests. Click on the "plus" icon on a record to create a route containing the same information (headers, body, etc.):

![create a route from a log](/images/docs/logs-auto-mocking.png)
