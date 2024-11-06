---
title: Query parameters
meta:
  title: Query parameters usage and parsing
  description: Learn how Mockoon parses query parameters and how to use them in your mock API responses.
order: 155
---

# Query parameters

---

## Query parameters parsing

Routes must be **declared without query parameters** as they are not part of the route path. They can only be added to the request when calling an endpoint.
Mockoon is using the [qs NPM package](https://www.npmjs.com/package/qs) to parse query parameters in the URL. `qs` supports **nested objects and arrays** in the query string.

As Mockoon is based on JavaScript, the body will be converted into a JSON object internally, which you can manipulate as you would any JSON object using dot notation or array notation.

Example URL with query parameters:

```text
http://localhost:3000/route?param1=test&param2=test2&array[]=value1&array[]=value2&obj[prop1]=value

// alternative array syntaxes
array[0]=value1&array[1]=value2
array=value1,value2
```

Parsed query parameters:

```json
{
  "param1": "test",
  "param2": "test2",
  "array": ["value1", "value2"],
  "obj": {
    "prop1": "value"
  }
}
```

## Where can I access the query parameters?

The parsed query parameters will be available **everywhere [templating helpers](docs:templating/overview) are supported**: response body, headers, rules, data buckets, callbacks, etc. You will be able to use the [`queryParam`](docs:templating/mockoon-request-helpers#queryparam) and [`queryParamRaw`](docs:/docs/latest/templating/mockoon-request-helpers/#queryparamraw) to access the parsed parameters and create dynamic responses based on it.

The parameters will also be **available in the [response rules](docs:route-responses/dynamic-rules)** to check their content and serve different responses based on them.

Example `queryParam` templating helper usage:

```handlebars
{{queryParam 'param1'}}
<!-- object-path syntax -->
{{queryParam 'obj.prop1'}}
<!-- JSONPath syntax -->
{{queryParam '$.obj.prop1'}}
```
