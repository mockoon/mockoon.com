---
title: Requests logging
meta:
  title: Mock API requests logging
  description: Learn how to access requests and responses logs or record your REST API servers calls for easier debugging
order: 850
---

# Requests logging

---

## Accessing the logs

For easier debugging, Mockoon records all entering requests and all the corresponding outgoing responses for each of your mock API. To access an environment's log, click on the "Logs" tab at the top of the window:

![click the logs tab{801x160}](docs-img:open-logs.png)

## Logs content

The list shows all intercepted requests and how Mockoon answered to them.
Please note that all requests are intercepted, even the `/favicon` request made by the browser.
Each record contains the entering request and the outgoing response information. This includes the complete list of headers, route params, query params, and body in raw format.

![view the request{1214x632}](docs-img:logs-request.png)

![view the response{1214x632}](docs-img:logs-response.png)

The interface is showing truncated bodies for both the request and the response (the truncation length can be adjusted in the settings). You can still view them in full in a separated editor by clicking on **View full body in editor**:

![click on view full body in editor link{1214x632}](docs-img:logs-view-body.png)

![body content is showed in a modal{860x696}](docs-img:logs-view-body-modal.png)

## Logs metadata

You can also easily see if a request has been caught by Mockoon (record shows a green tick) or has been passed to another URL if the [proxy mode](docs:proxy-mode) is activated (record shows a shield icon):

![view logs metadata{1214x632}](docs-img:logs-metadata.png)

## File logging

Mockoon records all transactions in the [logs file](docs:mockoon-data-files/settings-and-logs#application-logs) in JSON format:

```json
{
  "app": "mockoon-server",
  "level": "info",
  "message": "Transaction recorded",
  "timestamp": "2023-06-29T09:40:01.772Z"
  "environmentName": "Demo API",
  "environmentUUID": "6a5ccd5b-fd28-471a-bbdc-cbbd7ea54157",
  "requestMethod": "GET",
  "requestPath": "/test",
  "requestProxied": false,
  "responseStatus": 200,
}
```

You can also enable full transaction logging in the application settings by checking the "Log the full transactions" checkbox in the settings dialog.

When using this option, logs will contain the full transaction (request and response) with the same information you can see in the desktop application "Logs" tab:

```json
{
  "app": "mockoon-server",
  "level": "info",
  "message": "Transaction recorded",
  "timestamp": "2023-06-29T09:02:09.801Z",
  "environmentName": "Demo API",
  "environmentUUID": "d682bfab-52aa-4ec5-a3a5-853e6d3950cc",
  "requestMethod": "GET",
  "requestPath": "/test",
  "requestProxied": false,
  "responseStatus": 200,
  "transaction": {
    "proxied": false,
    "request": {
      "body": "{}",
      "headers": [{ "key": "accept", "value": "*/*" }],
      "method": "GET",
      "params": [],
      "query": "",
      "queryParams": {},
      "route": "/test",
      "urlPath": "/test"
    },
    "response": {
      "body": "{}",
      "headers": [
        { "key": "content-type", "value": "application/json; charset=utf-8" }
      ],
      "statusCode": 200,
      "statusMessage": "OK"
    },
    "routeResponseUUID": "173e37f8-7edd-4ca4-9244-32ca14eeb158",
    "routeUUID": "03a3f8de-7a4e-4dd1-a008-719e6165207c"
  }
}
```

> ⚠️ Enabling this option will generate a lot of logs and can quickly fill up your disk space. Use it with caution.

> 🔏 Our logging system will automatically anonymize any credentials present in the `Authorization` or `Proxy-Authorization` headers.
