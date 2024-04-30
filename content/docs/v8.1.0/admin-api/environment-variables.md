---
title: Environment Variables
meta:
  title: 'Admin API: Manage the environment variables'
  description: 'Learn how to manage your running mocks environment variables using the admin API: add, update and delete environment variables'
order: 802
---

# Admin API: Environment variables

> 🔌 **Base endpoint:** `/mockoon-admin/env-vars`

---

This endpoint allows you to manage the [environment variables](docs:variables/environment-variables), without restarting the mock server or the application.

## Set or update an environment variable

To set or update an environment variable, call the `/mockoon-admin/env-vars` endpoint with the following parameters:

- **Method:** `POST`, `PUT` or `PATCH`
- **URL:** `/mockoon-admin/env-vars`
- **Body:** JSON object with the following properties:
  - `key`: the name of the variable, including the `MOCKOON_` prefix, or the [custom prefix](docs:variables/environment-variables#changing-or-removing-the-prefix) defined in the application settings.
  - `value`: the value of the variable.

**Example:**

```http
POST /mockoon-admin/env-vars
Content-Type: application/json

{
  "key": "MOCKOON_ENV_VAR",
  "value": "myValue"
}
```

> ⚠️ This will only create or update the environment variable for the running mock server. It will **not** modify your system environment variables.
