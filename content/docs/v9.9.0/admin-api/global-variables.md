---
title: Global Variables
meta:
  title: 'Admin API: Manage and Purge Global Variables'
  description: 'Learn how to manage and purge global variables using the admin API: add, update and delete global variables'
order: 802
---

# Admin API: Global variables

> 🔌 **Base endpoint:** `/mockoon-admin/global-vars`

---

This endpoint allows you to manage and purge [global variables](docs:variables/global-variables), without restarting the server.

## Get a global variable value

To get the value of a global variable, call the `/mockoon-admin/global-vars` endpoint with the following parameters:

- **Method:** `GET`
- **URL:** `/mockoon-admin/global-vars/:key`, where `:key` is the name of the variable.

**Example request:**

```http
GET /mockoon-admin/global-vars/my_var
```

**Example response:**

```json
{
  "key": "my_var",
  "value": "variableValue"
}
```

## Set or update a global variable

To set or update a global variable, call the `/mockoon-admin/global-vars` endpoint with the following parameters:

- **Method:** `POST`, `PUT` or `PATCH`
- **URL:** `/mockoon-admin/global-vars`
- **Body:** JSON object with the following properties:
  - `key`: the name of the variable.
  - `value`: the value of the variable.

**Example request:**

```http
POST /mockoon-admin/global-vars
Content-Type: application/json

{
  "key": "myGlobalVar",
  "value": "myValue"
}
```

## Purge all global variables

To delete all global variables, call one of the following endpoints without payload:

- `POST /mockoon-admin/global-vars/purge`.
- `PURGE /mockoon-admin/global-vars`.
