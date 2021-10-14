---
title: Request helpers
meta:
  title: Create dynamic responses with templating request helpers
  description: Create dynamic fake mock data for your mock environments with Mockoon's templating request helpers
order: 1020
---

# Templating request helpers <!-- omit in toc -->

---

Mockoon offers the following helpers which can return information relative to the entering request:

- [`body`](#body)
- [`queryParam`](#queryparam)
- [`urlParam`](#urlparam)
- [`cookie`](#cookie)
- [`header`](#header)
- [`hostname`](#hostname)
- [`ip`](#ip)
- [`method`](#method)
- [`baseUrl`](#baseurl)

## `body`

Get the value at a given `path` from the request body if the entering `Content-Type` is set to `application/json` or `application/x-www-form-urlencoded`.
- The `path` takes the following form `key.0.key.5.key`. The syntax is based on [NPM **object-path** package](https://www.npmjs.com/package/object-path). 
- For both JSON and form params bodies, full objects or arrays can be retrieved by the helper.
- The full request's raw body can also be fetched when the `path` is omitted (`{{body}}`) independently from the request's `Content-Type`.
- If no value is present at the requested `path`, the default value will be used.
- A third parameter (boolean) can be set to true to returns a stringified value even if it's a primitive.

| Arguments (ordered) | Type    | Description                            |
| ------------------- | ------- | -------------------------------------- |
| 0                   | string  | Path to the body property              |
| 1                   | string  | Default value if property is not found |
| 2                   | boolean | Stringify primitive values             |

**Examples**

```handlebars
{{body}}
{{body 'path.to.property'}}
{{body 'path' 'default value'}}
{{body 'path' 'default value' true}}
```

## `queryParam`

Get the value at a given `path` from the request's query string. Complex query strings with arrays and objects are supported.
- The `path` takes the following form `key.0.key.5.key`. The syntax is based on [NPM **object-path** package](https://www.npmjs.com/package/object-path).
- Full objects or arrays can be retrieved by the helper.
- The full query string object can also be fetched when the `path` is omitted (`{{queryParam}}`). It will be stringified and can be used in a JSON body for example.
- If there is no value at the requested `path`, the default value will be used.
- A third parameter (boolean) can be set to true to returns a stringified value even if it's a primitive.

| Arguments (ordered) | Type    | Description                            |
| ------------------- | ------- | -------------------------------------- |
| 0                   | string  | Path to the query param property       |
| 1                   | string  | Default value if property is not found |
| 2                   | boolean | Stringify primitive values             |

**Examples**

```handlebars
{{queryParam}}
{{queryParam 'path.to.property'}}
{{queryParam 'path' 'default value'}}
{{queryParam 'path' 'default value' true}}
```

## `urlParam`

Get a named parameter from the route `/:paramName1/:paramName2`.

| Arguments (ordered) | Type   | Description          |
| ------------------- | ------ | -------------------- |
| 0                   | string | Route parameter name |

**Examples**

```handlebars
{{urlParam 'paramName1'}}
```

## `cookie`

Get the content of a cookie or returns a default value if the cookie is not present.

| Arguments (ordered) | Type   | Description                          |
| ------------------- | ------ | ------------------------------------ |
| 0                   | string | Cookie name                          |
| 1                   | string | Default value if cookie is not found |

**Examples**

```handlebars
{{cookie 'cookie_name' 'default value'}}
```

## `header`

Get content from any request header or returns a default value if header is not present.

| Arguments (ordered) | Type   | Description                          |
| ------------------- | ------ | ------------------------------------ |
| 0                   | string | Header name                          |
| 1                   | string | Default value if header is not found |

**Examples**

```handlebars
{{header 'Header-Name' 'default value'}}
```

## `hostname`

Returns the request hostname.

**Examples**

```handlebars
{{hostname}}
```

## `ip`

Returns the request IP address.

**Examples**

```handlebars
{{ip}}
```

## `method`

Returns the request method (GET, PUT, POST, etc.).

**Examples**

```handlebars
{{method}}
```

## `baseUrl`

Returns the base URL of the request: protocol, host, port and API prefix.

**Examples**

```handlebars
{{baseUrl}}
```
