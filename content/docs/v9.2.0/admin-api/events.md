---
title: Events
meta:
  title: 'Admin API: subscribe to API events'
  description: 'Learn how to subscribe to real-time events from your mock admin API'
order: 805
---

# Admin API: events

> 🔌 **Base endpoint:** `/mockoon-admin/events`

---

This endpoint allows you to subscribe to real-time events from your mock server. It uses the [Server-sent events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) protocol to send the events in real-time.

## Subscribe to the events

To subscribe to the events, call the following endpoint:

- **Method:** `GET`
- **URL:** `/mockoon-admin/events`

**Example request:**

```http
GET /mockoon-admin/events
```

## Events

The events are sent in the JSON format:

```text
data: {"event":"{EVENT_NAME}","{DATA_PROPERTY}":...}
```

The event names and poperties are following the same structure as the [MockoonServer events](https://github.com/mockoon/mockoon/blob/main/packages/commons/src/models/events.model.ts). Currently, the following events are sent:

- `transaction-complete`: sent when a transaction is completed. Contains the transaction data in a `transaction` property.
- `data-bucket-processed`: sent when the data buckets are processed when launching the server. Contains the data buckets statuses in a `dataBuckets` property.

### Log event

Example of a log event:

```json
{
  "event": "transaction-complete",
  "transaction": {
    "request": {
      "method": "get",
      "urlPath": "/test",
      "route": "/test",
      "params": [],
      "query": "",
      "queryParams": {},
      "body": "",
      "headers": [
        { "key": "accept", "value": "*/*" },
        { "key": "accept-encoding", "value": "gzip, br, deflate" }
      ]
    },
    "response": {
      "statusCode": 200,
      "statusMessage": "OK",
      "headers": [{ "key": "content-type", "value": "application/json; charset=utf-8" }],
      "body": ""
    },
    "routeResponseUUID": "24571b2f-25ce-4107-9bc7-e24913d21fc4",
    "routeUUID": "1803af89-c34c-45ac-a019-e856f137e3b2",
    "proxied": false,
    "timestampMs": 1741706443013
  }
}
```

The data in the `transaction` property is following the [Transaction model](https://github.com/mockoon/mockoon/blob/main/packages/commons/src/models/server.model.ts#L61-L86) similar to the one used in the [`/mockoon-admin/logs` endpoint](docs:admin-api/transaction-logs).

### Data buckets processed event

This event is triggered when the data buckets are processed during the server launch. It contains details about the statuses of the data buckets in a `dataBuckets` property:

```json
{
  "event": "data-bucket-processed",
  "dataBuckets": [
    { "uuid": "3b95903c-4291-4cee-bcf3-824e6793b8a7", "id": "jb18", "name": "data 1", "parsed": true, "validJson": true },
    { "uuid": "7b5ad631-1936-4b37-9334-2bad9fb97c88", "id": "fhcj", "name": "data 2", "parsed": true, "validJson": true }
  ]
}
```

This event is also re-emitted every time a new client subscribes to the events.
