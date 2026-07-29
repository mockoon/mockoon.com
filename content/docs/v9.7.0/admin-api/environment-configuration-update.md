---
title: Environment configuration update
meta:
  title: 'Admin API: Update the environment configuration'
  description: 'Learn how to update the environment configuration using the admin API: add, update and delete routes, responses, and more'
order: 806
---

# Admin API: Environment configuration updates

> 🔌 **Base endpoint:** `/mockoon-admin/environment`

---

This endpoint allows you to **partially update** the environment definition, such as updating the responses or adding headers without restarting the mock server or the application.

> ⚠️ **Note:** some server configuration options cannot be updated during runtime (see below).

## Update the environment configuration

To update the environment configuration, call the `/mockoon-admin/environment` endpoint with the following parameters:

- **Method:** `PUT`
- **URL:** `/mockoon-admin/environment`
- **Body:** JSON object following the [environment schema](https://github.com/mockoon/mockoon/blob/main/packages/commons/src/models/environment.model.ts#L50-L71).

**Example request:**

```http
PUT /mockoon-admin/environment
Content-Type: application/json

{
  "uuid": "7417c190-8547-442d-aab0-b61f2c3ee381",
  "name": "API mock",
  "routes": [
    {
      "uuid": "ba616755-e6cb-4aec-9b59-2643c347552b",
      "type": "http",
      "method": "get",
      "endpoint": "test",
      "responses": [
        {
          "uuid": "a9ec0e58-94f9-405a-b802-60005c020dd0",
          "body": "hello123",
          ...
        }
      ],
      ...
    }
  ]
}
```

Since version 9.6.0, most of the environment configuration can be updated during runtime, without restarting the mock server. The updated endpoints, WebSocket servers and proxy options will be applied immediately, and the new routes will be available for incoming requests.

However, the **server port, hostname and TLS options** cannot be updated during runtime and require a server restart to take effect.
