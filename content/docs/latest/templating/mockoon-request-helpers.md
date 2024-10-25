---
title: Request helpers
meta:
  title: Create dynamic responses with templating request helpers
  description: "Create dynamic fake mock data for your mock environments with Mockoon's templating request helpers. All formats are supported: JSON, CSV, HTML, etc."
order: 502
---

# Templating request helpers

---

Mockoon offers the following helpers which can return information relative to the entering request:

- [`body`](#body)
- [`bodyRaw`](#bodyraw)
- [`queryParam`](#queryparam)
- [`queryParamRaw`](#queryparamraw)
- [`urlParam`](#urlparam)
- [`cookie`](#cookie)
- [`header`](#header)
- [`hostname`](#hostname)
- [`ip`](#ip)
- [`method`](#method)
- [`baseUrl`](#baseurl)

## body

Get the value at a given `path` from the request's body if the `Content-Type` is set to `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, `application/xml`, `application/soap+xml` or `text/xml`. This helper is designed to retrieve data, **stringify** it, it order to use it directly in a response. To reuse the retrieved data (strings, booleans, arrays, etc.) with other helpers (`each`, `if`, etc.), use the [`bodyRaw` helper](#bodyraw) below.

- The `path` supports two syntaxes, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.
- XML bodies are parsed using [xml-js](https://www.npmjs.com/package/xml-js) package. Please refer to this [page](docs:response-configuration/xml-support) or the package documentation for more information on how the XML is parsed and how to fetch specific properties.
- `multipart/form-data` supports fields and files. Uploaded files will not be stored, but their metadata (`filename`, `mimetype`, `size`) will be available in the request body:

  ```json
  {
    "field1": "value1",
    "file1": {
      "filename": "file1.txt",
      "mimetype": "text/plain",
      "size": 1234
    }
  }
  ```

- Full objects or arrays can be retrieved by the helper.
- The full request's body can also be fetched when the `path` is omitted (`{{body}}`) independently from the request's `Content-Type`.
- If no value is present at the requested `path`, the default value will be used.
- A third parameter (boolean) can be set to true to returns a stringified value even if it's a primitive.

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

| Arguments (ordered) | Type    | Description                            |
| ------------------- | ------- | -------------------------------------- |
| 0                   | string  | Path to the body property              |
| 1                   | string  | Default value if property is not found |
| 2                   | boolean | Stringify primitive values             |

**Examples**

```handlebars
{{body}}

<!-- Using object-path syntax -->
{{body 'path.to.property'}}
{{body 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{body '$.array.[*].property'}}

{{body 'path' 'default value'}}
{{body 'path' 'default value' true}}
```

## bodyRaw

Get the **raw** value (string, boolean, array, etc.) at a given `path` from the request's body if the `Content-Type` is set to `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, `application/xml`, `application/soap+xml` or `text/xml`. This "raw" helper is designed to give you access to the values to use them with other helpers (`each`, `if`, etc.). To directly use the stringified data in the response, use the [`body` helper](#body) above.

- The `path` supports two syntaxes, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.
- XML bodies are parsed using [xml-js](https://www.npmjs.com/package/xml-js) package. PLease refer to this [page](docs:response-configuration/xml-support) or the package documentation for more information on how the XML is parsed and how to fetch specific properties.
- `multipart/form-data` only supports fields and files. Uploaded files will not be stored, but their metadata (`filename`, `mimetype`, `size`) will be available in the request body:

  ```json
  {
    "field1": "value1",
    "file1": {
      "filename": "file1.txt",
      "mimetype": "text/plain",
      "size": 1234
    }
  }
  ```

- Full objects or arrays can be retrieved by the helper.
- The full request's raw body can also be fetched when the `path` is omitted (`{{bodyRaw}}`) independently from the request's `Content-Type`.
- If no value is present at the requested `path`, the default value will be used.
- This helper allows the use of `body` within handlebars' helpers such as `{{#each}}` and `{{#if}}`.

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

| Arguments (ordered) | Type   | Description                            |
| ------------------- | ------ | -------------------------------------- |
| 0                   | string | Path to the body property              |
| 1                   | string | Default value if property is not found |

**Examples**

```handlebars
{{bodyRaw}}

<!-- Using object-path syntax -->
{{bodyRaw 'path.to.property'}}
{{bodyRaw 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{bodyRaw '$.array.[*].property'}}

{{bodyRaw 'path' 'default value'}}

{{#each (bodyRaw 'path.to.array.property' 'default value')}}
  value
{{/each}}

{{#if (bodyRaw 'path.to.boolean.property' 'default value')}}
  value
{{/if}}
```

## queryParam

Get the value at a given `path` from the request's query string. Complex query strings with arrays and objects are supported. This helper is designed to retrieve data to be served in a response. To reuse the retrieved data with other helpers (`each`, `if`, etc.), use the [`queryParamRaw` helper](#queryparamraw) below.

- The `path` supports two syntaxes, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.
- Full objects or arrays can be retrieved by the helper.
- The full query string object can also be fetched when the `path` is omitted (`{{queryParam}}`). It will be stringified and can be used in a JSON body for example.
- If there is no value at the requested `path`, the default value will be used.
- A third parameter (boolean) can be set to true to returns a stringified value even if it's a primitive.

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

| Arguments (ordered) | Type    | Description                            |
| ------------------- | ------- | -------------------------------------- |
| 0                   | string  | Path to the query param property       |
| 1                   | string  | Default value if property is not found |
| 2                   | boolean | Stringify primitive values             |

**Examples**

```handlebars
{{queryParam}}

<!-- Using object-path syntax -->
{{queryParam 'path.to.property'}}
{{queryParam 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{queryParam '$.array.[*].property'}}

{{queryParam 'path' 'default value'}}
{{queryParam 'path' 'default value' true}}
```

## queryParamRaw

Get the **raw** value at a given `path` from the request's query string. Complex query strings with arrays and objects are supported. This "raw" helper is designed to work with other helpers (`each`, `if`, etc.). To directly use the retrieved data in the response, use the [`queryParam` helper](#queryparam) above.

- The `path` supports two syntaxes, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.
- Full objects or arrays can be retrieved by the helper.
- The full query string object can also be fetched when the `path` is omitted (`{{queryParamRaw}}`).
- If there is no value at the requested `path`, the default value will be used.
- This helper allows the use of `queryParam` within handlebars' helpers such as `{{#each}}` and `{{#if}}`.

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

| Arguments (ordered) | Type   | Description                            |
| ------------------- | ------ | -------------------------------------- |
| 0                   | string | Path to the query param property       |
| 1                   | string | Default value if property is not found |

**Examples**

```handlebars
{{queryParamRaw}}

<!-- Using object-path syntax -->
{{queryParamRaw 'path.to.property'}}
{{queryParamRaw 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{queryParamRaw '$.array.[*].property'}}

{{queryParamRaw 'path' 'default value'}}

{{#each (queryParamRaw 'path.to.array.query' 'default value')}}
  value
{{/each}}

{{#if (queryParamRaw 'path.to.boolean.query' 'default value')}}
  value
{{/if}}
```

## urlParam

Get a named parameter from the route `/:paramName1/:paramName2`.

| Arguments (ordered) | Type   | Description          |
| ------------------- | ------ | -------------------- |
| 0                   | string | Route parameter name |

**Examples**

```handlebars
{{urlParam 'paramName1'}}
```

## cookie

Get the content of a cookie or returns a default value if the cookie is not present.

| Arguments (ordered) | Type   | Description                          |
| ------------------- | ------ | ------------------------------------ |
| 0                   | string | Cookie name                          |
| 1                   | string | Default value if cookie is not found |

**Examples**

```handlebars
{{cookie 'cookie_name' 'default value'}}
```

## header

Get content from any request header or returns a default value if header is not present.

| Arguments (ordered) | Type   | Description                          |
| ------------------- | ------ | ------------------------------------ |
| 0                   | string | Header name                          |
| 1                   | string | Default value if header is not found |

**Examples**

```handlebars
{{header 'Header-Name' 'default value'}}
```

## hostname

Returns the request hostname.

**Examples**

```handlebars
{{hostname}}
```

## ip

Returns the request IP address.

**Examples**

```handlebars
{{ip}}
```

## method

Returns the request method (GET, PUT, POST, etc.).

**Examples**

```handlebars
{{method}}
```

## baseUrl

Returns the base URL of the request: protocol, host, port and API prefix.

**Examples**

```handlebars
{{baseUrl}}
```
