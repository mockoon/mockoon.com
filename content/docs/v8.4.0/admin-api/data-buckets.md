---
title: Data Buckets
meta:
  title: 'Admin API: Reset the data buckets'
  description: 'Learn how to reset the data buckets of a running environment to their initial state using the admin API'
order: 801
---

# Admin API: Data Buckets

> 🔌 **Base endpoint:** `/mockoon-admin/data-buckets`

---

This endpoint allows you to reset the [data buckets](docs:data-buckets/overview) to their initial state without restarting the server.

## Reset the data buckets

To **reset** the data buckets to their **initial state**, call one of the following endpoints without payload:

- `POST /mockoon-admin/data-buckets/purge`.
- `PURGE /mockoon-admin/data-buckets`.

> ⚠️ The data buckets containing request helpers will be [generated again during the next request](docs:data-buckets/overview#data-buckets-generation).
