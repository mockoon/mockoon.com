---
title: JWT helpers
meta:
  title: Create dynamic responses with templating helpers
  description: "Create dynamic fake data for your mock server with Mockoon's templating helpers. All formats are supported: JSON, CSV, HTML, etc."
order: 503
---

# JWT helpers

---

Mockoon [templating system](docs:templating/overview) includes various helpers to help you create dynamic responses. This page lists the helpers related to JWT tokens.

## jwtPayload

Extract a property from a JWT token's payload. The full token must be passed as the first argument. It will automatically ignore the `Bearer ` prefix if present, to make it easier to use it with the `Authorization` header.
If no property is passed, the full payload object will be returned to be used with other helpers like `lookup`.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | string | JWT token   |
| 1                   | string | Property    |

**Examples**

```handlebars
<!-- Returns the full payload object -->
{{jwtPayload 'abcd...'}}

<!-- Returns the 'sub' property using lookup -->
{{lookup (jwtPayload 'abcd...') 'sub'}}

<!-- Returns the 'sub' property -->
{{jwtPayload 'abcd...' 'sub'}}

<!-- Use with header helper (no need to remove 'Bearer ' from the header content) -->
{{jwtPayload (header 'Authorization') 'sub'}}
```

## jwtHeader

Extract a property from a JWT token's header. The full token must be passed as the first argument. It will automatically ignore the `Bearer ` prefix if present, to make it easier to use it with the `Authorization` header.
If no property is passed, the full header object will be returned to be used with other helpers like `lookup`.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | string | JWT token   |
| 1                   | string | Property    |

**Examples**

```handlebars
<!-- Returns the full payload object -->
{{jwtHeader 'abcd...'}}

<!-- Returns the 'alg' property using lookup -->
{{lookup (jwtHeader 'abcd...') 'alg'}}

<!-- Returns the 'alg' property -->
{{jwtHeader 'abcd...' 'alg'}}

<!-- Use with header helper (no need to remove 'Bearer ' from the header content) -->
{{jwtHeader (header 'Authorization') 'alg'}}
```
