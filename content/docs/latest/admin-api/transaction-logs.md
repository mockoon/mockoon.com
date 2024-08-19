---
title: Logs
meta:
  title: 'Admin API: fetch and purge transaction logs'
  description: 'Learn how to fetch and purge your mock API transaction logs using the Mockoon admin API endpoints'
order: 803
---

# Admin API: transaction logs

> 🔌 **Base endpoint:** `/mockoon-admin/logs`

---

This endpoint allows you to fetch and purge the application's [transaction logs](docs:logging-and-recording/requests-logging) when using the desktop application, the CLI or the serverless library.

## Retrieve the transaction logs

To retrieve the transaction logs, call the following endpoint:

- **Method:** `GET`
- **URL:** `/mockoon-admin/logs`
- **Query parameters:**
  - `page` (optional): the page number to retrieve. Default is 1.
  - `limit` (optional): the number of logs to retrieve per page. Default is 10.

**Examples:**

```http
GET /mockoon-admin/logs
GET /mockoon-admin/logs?page=2
GET /mockoon-admin/logs?page=2&limit=20
```

**Example of response ([data model](https://github.com/mockoon/mockoon/blob/main/packages/commons/src/models/server.model.ts#L27-L47)):**

```json
[
  {
    "request": {
      "method": "get",
      "urlPath": "/users/5",
      "route": "/users/:id",
      "params": [
        {
          "name": "id",
          "value": "5"
        }
      ],
      "query": "",
      "queryParams": {},
      "body": "",
      "headers": [{ "key": "host", "value": "localhost:3000" }]
    },
    "response": {
      "statusCode": 200,
      "statusMessage": "OK",
      "headers": [{ "key": "content-type", "value": "application/json; charset=utf-8" }],
      "body": "ok"
    },
    "routeResponseUUID": "c0a61351-c542-4d80-902d-4305047aff17",
    "routeUUID": "7e950e12-dc21-425a-930c-e84a381281ee",
    "proxied": false,
    "timestampMs": 1714399178682
  }
]
```

## Purge the transaction logs

To purge the transaction logs, call one of the following endpoints:

- `POST /mockoon-admin/logs/purge`.
- `PURGE /mockoon-admin/logs`.

> ⚠️ This action will only purge the transaction logs stored in the memory of the running mock server. It will not update the [Logs view](docs:logging-and-recording/requests-logging) in the desktop application.
