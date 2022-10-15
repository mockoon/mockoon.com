---
title: Overview
meta:
  title: Response body overview
  description: Learn how to serve different type of bodies with Mockoon, how to use files or databucket to serve realistic dynamic responses
order: 800
---

# Response body overview

---

Each [route response](docs:route-responses/multiple-responses) can serve a different body content. You have three possibilities to add a body content to your response: the inline body editor, an external file, or the content of a data bucket.

You can choose each option using the body selector:

![TODO](/images/docs/TODO)

## Body editor (inline)

You can use the body editor to directly create your response content. It supports all the [templating helpers](docs:templating/overview).

![TODO](/images/docs/TODO)

> Mockoon will save the content of the inline body editor directly in your [data file](docs:mockoon-data-files/data-storage-location).  
> Using an external file could improve the performance for large content.

## External file

You can also choose to serve an external file, using the second option:

![TODO](/images/docs/TODO)

Please refer to the [file serving documentation](docs:response-body/file-serving) for more information.

## Data bucket

You can finally choose to serve the content of a data bucket using the third option:

![TODO](/images/docs/TODO)

Please refer to the [data bucket documentation](docs:data-buckets/overview) for more information.
