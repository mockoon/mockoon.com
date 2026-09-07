---
title: Server state
meta:
  title: 'Admin API: Server state'
  description: Learn how to purge the state of a running environment using the admin API, resetting the request count and regenerating the data buckets
order: 804
---

# Admin API: Server state

> 🔌 **Base endpoint:** `/mockoon-admin/state`

---

The `/mockoon-admin/state` endpoint allows you to purge the state of a running environment. This include **resetting the request count**, **regenerating the data buckets**, **clearing the global variables**, and **resetting the transaction logs**.

### Purging the state of a running environment

To purge the state of a running environment is done by calling one of the following endpoints:

- `PURGE /mockoon-admin/state`.
- `POST /mockoon-admin/state/purge`.

**Effects:**

- Resets the [request counter](docs:route-responses/dynamic-rules#1-target) to 1 for each route.
- Regenerates the [data buckets](docs:data-buckets/overview) for the environment. The data buckets containing request helpers will be [generated again during the next request](docs:data-buckets/overview#data-buckets-generation).
- Clears all the [global variables](docs:variables/global-variables).
- Clears the [transaction logs](docs:logging-and-recording/requests-logging) for the environment.
