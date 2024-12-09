---
title: Supported body formats
meta:
  title: Supported request body formats
  description: Learn about the supported request body formats in Mockoon, including JSON, form data, and URL-encoded data. How to use them and related options.
order: 150
---

# Supported request body formats

---

## Request body parsing

Mockoon supports the following **request body formats**, provided that the request's **`Content-Type` header** is correctly set:

- [`application/json`](#json-support)
- [`application/x-www-form-urlencoded`](#x-www-form-urlencoded-support)
- [`multipart/form-data`](#multipart-form-data-support)
- [`application/xml`](#xml-support)

Invalid bodies will be parsed as strings.

## What can I do with the parsed body?

The parsed body will be available **everywhere [templating helpers](docs:templating/overview) are supported**: response body, headers, rules, data buckets, callbacks, etc. You will be able to use helpers like [`body`](docs:templating/mockoon-request-helpers/#body) and [`bodyRaw`](docs:templating/mockoon-request-helpers/#bodyraw) to access the parsed body content and create dynamic responses based on it.

The body will also be **available in the [response rules](docs:route-responses/dynamic-rules)** to check its content and serve different responses based on it.

As Mockoon is based on JavaScript, the body will be converted into a JSON object internally, which you can manipulate as you would any JSON object using dot notation or array notation.

## JSON support

JSON bodies will be parsed if the request Content-Type is set to `application/json` with or without extra parameters like `charset=utf-8` or vendor-specific subtypes like `application/vnd.com.example.object+json`.

Example JSON body:

```json
{
  "key": "value",
  "nested": {
    "key": "value"
  }
}
```

Example `body` templating helper usage:

```handlebars
{{body 'key'}}
<!-- object-path syntax -->
{{body 'nested.key'}}
<!-- JSONPath syntax -->
{{body '$.nested.key'}}
```

> 📘 Please refer to the [templating](docs:templating/overview) documentation for more information on how to use the `body` helper.

> 🛠️ Use our [JSON validator tool](/tools/json-validator/) to validate your JSON body before using it in Mockoon.

## X-WWW-Form-Urlencoded support

When sending a request containing a **valid URL-encoded body and an `application/x-www-form-urlencoded` `Content-Type`**, Mockoon will parse the URL-encoded body using the [qs NPM package](https://www.npmjs.com/package/qs). qs supports nested objects and arrays in the URL-encoded body.

Example URL-encoded body:

```plaintext
key1=value1&key2=value2&array[]=value1&array[]=value2

// alternative array syntaxes
array[0]=value1&array[1]=value2
array=value1,value2
```

> 💡 The same syntax applies to the [parsing of query strings](docs:api-endpoints/routing#query-parameters-arrays-and-objects).

Parsed body:

```json
{
  "key1": "value1",
  "key2": "value2",
  "array": ["value1", "value2"]
}
```

## Multipart form data support

When sending a request containing a **valid multipart form data body** and a `multipart/form-data` `Content-Type`, Mockoon will parse the form data using the [busboy NPM package](https://www.npmjs.com/package/busboy). Fields will be parsed as strings, and files, while not saved to disk, will be processed and their metadata will be available in the parsed body.

Example multipart form data body:

```plaintext
--X-BOUNDARY
Content-Disposition: form-data; name="key1"

value1
--X-BOUNDARY
Content-Disposition: form-data; name="key2"

value2
--X-BOUNDARY
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: text/plain

file content
--X-BOUNDARY--
```

Parsed body:

```json
{
  "key1": "value1",
  "key2": "value2",
  "file": {
    "filename": "file.txt",
    "mimetype": "text/plain",
    "size": 11
  }
}
```

## XML support

When sending a request containing a valid XML body and an `application/xml`, `text/xml` or `application/soap+xml` `Content-Type`, Mockoon will parse the XML using the [**xml-js** NPM package](https://www.npmjs.com/package/xml-js) to convert the entering XML. Please note that the **xml-js** package converts XML into JSON in a particular way, as shown below:

Entering XML body:

```xml
<?xml version="1.0" encoding="utf-8"?>
<user userID="123">
<firstname>John</firstname>
<lastname>Doe</lastname>
</user>
```

JSON equivalent (compacted):

```json
{
  "_declaration": {
    "_attributes": {
      "version": "1.0",
      "encoding": "utf-8"
    }
  },
  "user": {
    "_attributes": {
      "userID": "123"
    },
    "firstname": {
      "_text": "John"
    },
    "lastname": {
      "_text": "Doe"
    }
  }
}
```

> 📘 Please refer to [xml-js documentation](https://www.npmjs.com/package/xml-js) for more detail on how the XML is parsed.

> 🛠️ Use our [XML to JSON converter](/tools/xml-to-json/) to get a preview of how Mockoon will convert your XML to JSON. You can also use our [XML validator](/tools/xml-validator/) to make sure your XML is valid.
