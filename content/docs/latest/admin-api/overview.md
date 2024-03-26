---
title: Overview
meta:
  title: Admin API overview
  description: Learn how to use the admin API exposed by Mockoon to manage your environments, routes, and responses
order: 800
---

# Admin API overview

---

Each running mock server **exposes an admin API** that allows you to manage your environment. This API can be used to automate the management of your mock server, especially in a remote environment, without having to restart the application.

## Admin API base endpoint

The admin API **base endpoint** is the same as the mock server URL with the `/mockoon-admin` path appended.

For example, if your mock server is running on `http://localhost:3000`, the admin API base endpoint will be `http://localhost:3000/mockoon-admin`.

> 💡 The [API prefix](docs:server-configuration/port-prefix) is not applied to the admin API base endpoint. If your API endpoints are accessible on `http://localhost:3000/myprefix/{endpoint}`, the admin API base endpoint will still be `http://localhost:3000/mockoon-admin`.

## Admin API capabilities

Currently, the admin API allows you to:

- [purge the state of a running environment](docs:admin-api/server-state)
