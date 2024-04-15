---
title: Using data buckets
meta:
  title: Using data buckets
  description: Learn how to use Mockoon's data buckets, using the two data and dataRaw helpers, or by directly linking the bucket to a route response
order: 610
---

# Using data buckets

---

After [creating data buckets](docs:data-buckets/overview), you can use them through the `data` templating helpers or by directly referencing them in a route response.

## Using data helpers

Two helpers are available: [`data`](docs:templating/mockoon-helpers#data) and [`dataRaw`](docs:templating/mockoon-helpers#dataraw). They work in a similar way to the [`body`](docs:templating/mockoon-request-helpers#body) and [`bodyRaw`](docs:templating/mockoon-request-helpers#bodyraw) helpers.

They can be used [anywhere templating helpers are supported](docs:templating/overview): body editor, files, headers keys and values, etc., and allow you to partially reuse your data bucket content and compose dynamic responses body easily.

Both helpers support retrieving the data bucket by its unique ID or name. It also allows you to retrieve only part of the data bucket using an optional object path:

```handlebars
{{data 'ID_or_name' 'object.path'}}
```

> Retrieving data at a specific object path requires that the data bucket content is a valid JSON.

Head over to the [data helpers' documentation](docs:templating/mockoon-helpers#data) to see more examples.

## Referencing in a route response

A data bucket can also be directly linked to a route response. Linking a data bucket will serve the generated data bucket content "as-is".

To link a data bucket to a route response, choose "Data" in the body selector and select your data bucket.

![Using data bucket in a route response{1172x464}](docs-img:link-data-bucket-response.png)
