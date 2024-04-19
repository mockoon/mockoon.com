---
title: Set and Purge Global Variables 
meta:
  title: Set and Purge Global Variables 
  description: Learn how to set and purge global variables using the admin API
order: 802
---

# API endpoint `/mockoon-admin/state/`

---

The `/mockoon-admin/state` endpoint allows you to set and purge [global variables](docs:latest/variables/global-variables/), so that you can share data in between the routes, without restarting the server.

To set or purge the global variables is done by calling one of the following endpoints:

- `POST /mockoon-admin/state/setGlobalVars`.
- `POST /mockoon-admin/state/purgeGlobalVars`.

**Effects:**

- The setGlobalVars endpoint takes 2 values, the variable name and its value, and assigns the value to the variable name.
- The purgeGlobalVars resets/purges all the global variables to its default values or an empty string. 

