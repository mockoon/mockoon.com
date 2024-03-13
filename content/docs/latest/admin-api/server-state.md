---
title: Server state
meta:
  title: Server state
  description: Learn how to purge the state of a running environment using the admin API, resetting the request count and regenerating the data buckets
order: 701
---

# Server state endpoint `/mockoon-admin/state`

---

The `/mockoon-admin/state` endpoint currently allows you to purge the state of a running environment.

### Purging the state of a running environment

To purge the state of a running environment is done by calling one of the following endpoints:

- `PURGE /mockoon-admin/state`.
- `POST /mockoon-admin/state/purge`.

**Effects:**

- Resets the [request counter](docs:route-responses/dynamic-rules#1-target) to 1 for each route.
- Regenerates the data buckets for the environment. The data buckets containing request helpers will be [generated again during the next request](docs:data-buckets/overview#data-buckets-generation).
