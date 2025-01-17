---
title: Data Buckets
meta:
  title: 'Admin API: Data buckets management'
  description: 'Learn how to manage the data buckets of a running environment using the admin API: retrieve their values and reset them to their initial state'
order: 801
---

# Admin API: Data Buckets

> 🔌 **Base endpoint:** `/mockoon-admin/data-buckets`

---

This endpoint allows you to manage the [data buckets](docs:data-buckets/overview) without restarting the server.

## Get the data buckets status

To get the status of all data buckets (without their values), call the `/mockoon-admin/data-buckets` endpoint with the following parameters:

- **Method:** `GET`
- **URL:** `/mockoon-admin/data-buckets`.

**Example request:**

```http
GET /mockoon-admin/data-buckets
```

**Example response:**

```json
[
  {
    "id": "jb18",
    "name": "data 1",
    "parsed": true,
    "validJson": true
  },
  {
    "id": "fhcj",
    "name": "data 2",
    "parsed": true,
    "validJson": false
  }
]
```

> 💡 These information are also available in the [`/mockoon-admin/events` endpoint](docs:admin-api/events#data-buckets-processed-event).

## Get a data bucket value

To get the value of a data bucket, call the `/mockoon-admin/data-buckets` endpoint with the following parameters:

- **Method:** `GET`
- **URL:** `/mockoon-admin/data-buckets/:nameOrId`, where `:nameOrId` is the name or unique id of the data bucket.

**Example request:**

```http
GET /mockoon-admin/data-buckets/myData
```

**Example response:**

```json
{
  "name": "myData",
  "id": "abcd",
  "value": { "property": "value" }
}
```

The value of the data bucket is returned as a JSON object in the `value` property. This allows you to check if the data bucket was correctly parsed from the JSON string content initially provided.

## Reset the data buckets

To **reset** the data buckets to their **initial state**, call one of the following endpoints without payload:

- `POST /mockoon-admin/data-buckets/purge`.
- `PURGE /mockoon-admin/data-buckets`.

> ⚠️ The data buckets containing request helpers will be [generated again during the next request](docs:data-buckets/overview#data-buckets-generation).
