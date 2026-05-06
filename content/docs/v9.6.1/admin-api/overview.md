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

## Disable the admin API

The admin API is **enabled by default**.

In the desktop application, the admin API cannot be disabled. However, you can disable it when running your mock with the [CLI](/cli/) or the [serverless library](/serverless/).

### Disable the admin API with the CLI

To **disable** the admin API when running your mock with the CLI, use the `--disable-admin-api` flag:

```bash
mockoon-cli start --disable-admin-api -d ./mock.json
```

> 📘 Check the [CLI dedicated documentation](https://github.com/mockoon/mockoon/tree/main/packages/cli#readme)

### Disable the admin API with the serverless library

To **disable** the admin API when running your mock with the serverless library, set the `enableAdminApi` option to `false` when building the `MockoonServerless` instance:

```javascript
const mockoonServerless = new mockoon.MockoonServerless(mockEnv, {
  enableAdminApi: false
});
```

> 📘 Check the [serverless library dedicated documentation](https://github.com/mockoon/mockoon/tree/main/packages/serverless#readme)

## Admin API capabilities

Currently, the admin API allows you to:

- [Reset the state of a running environment](docs:admin-api/server-state)
- [Manage the global variables](docs:admin-api/global-variables)
- [Manage the environment variables](docs:admin-api/environment-variables)
- [Manage the transaction logs](docs:admin-api/transaction-logs)
- [Manage the data buckets](docs:admin-api/data-buckets)
- [Subscribe to server-sent events](docs:admin-api/events)
