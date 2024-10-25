---
title: Using data buckets
meta:
  title: Using data buckets
  description: Learn how to use Mockoon's data buckets, using the two data and dataRaw helpers, or by directly linking the bucket to a route response
order: 610
---

# Using data buckets

---

After [creating data buckets](docs:data-buckets/overview), you can use them through the `data` templating helpers or by directly referencing them in a route response or CRUD route.

## Using data helpers

### Retrieving data

Two helpers are available: [`data`](docs:templating/mockoon-helpers#data) and [`dataRaw`](docs:templating/mockoon-helpers#dataraw). They work in a similar way to the [`body`](docs:templating/mockoon-request-helpers#body) and [`bodyRaw`](docs:templating/mockoon-request-helpers#bodyraw) helpers.

They can be used [anywhere templating helpers are supported](docs:templating/overview): body editor, files, headers keys and values, etc., and allow you to partially reuse your data bucket content and compose dynamic responses body easily.

Both helpers support retrieving the data bucket by its unique ID or name. It also allows you to retrieve only part of the data bucket using an optional object path:

```handlebars
{{data 'ID_or_name' 'object.path'}}
```

> 💡 To retrieve data at a specific path, the content of the data bucket must be valid JSON.

Head over to the [data helpers' documentation](docs:templating/mockoon-helpers#data) to see more examples.

### Setting data programmatically

A [`setData`](docs:templating/mockoon-helpers#setdata) helper is available to set the content of a data bucket programmatically. It can be used [anywhere templating helpers are supported](docs:templating/overview).

This helper is useful when you want to update the content of a data bucket, push a new value to an array, delete a property, increment or decrement a number, or invert a boolean:

```handlebars
{{setData 'set' 'bucketNameOrId' 'path.to.property' 'newValue'}}
{{setData 'push' 'bucketNameOrId' 'path.to.array' 'newValue'}}
{{setData 'del' 'bucketNameOrId' 'path.to.property'}}
{{setData 'inc' 'bucketNameOrId' 'path.to.property' 2}}
{{setData 'dec' 'bucketNameOrId' 'path.to.property' 2}}
{{setData 'invert' 'bucketNameOrId' 'path.to.property'}}
```

> 💡 To set data at a specific path, the content of the data bucket must be valid JSON.

Head over to the [`setData` helper documentation](docs:templating/mockoon-helpers#setdata) to see more examples.

## Link a bucket to a CRUD route

When creating a **CRUD route** you must link a data bucket. This feature allows you to **serve** and **manipulate** the **data bucket content** depending on the **CRUD operations**. The CRUD routes follow usual REST conventions: `GET /resources`, `POST /resources`, `PUT /resources/:id`, `DELETE /resources/:id`, etc.

Head over to the dedicated [CRUD routes documentation](docs:api-endpoints/crud-routes) to learn more about this feature.

## Referencing a bucket in a route response

A data bucket can also be directly **linked** to a route response. Linking a data bucket will serve the generated data bucket content "as-is".

To link a data bucket to a route response, choose "Data" in the body selector and select your data bucket.

![Using data bucket in a route response{1172x464}](docs-img:link-data-bucket-response.png)

## Storing JSON schemas

A data bucket can also store a **JSON schema**. This schema can be used in the [rules system](docs:route-responses/dynamic-rules#5-value), using the **"valid JSON schema"** operator to validate the targeted property using [ajv](https://www.npmjs.com/package/ajv).

To store a JSON schema in a data bucket, create a new data bucket and paste your JSON schema in the content editor. The schema must be a valid JSON object:

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": { "type": "number" }
  },
  "required": ["name", "age"]
}
```

You will then be able to reference this full schema in a rule's value field (e.g. `dataBucketNameOrId`), or a specific schema's property using the [object-path](https://www.npmjs.com/package/object-path) syntax (e.g. `dataBucketNameOrId.name`).
