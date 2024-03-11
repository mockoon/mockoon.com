---
title: Overview
meta:
  title: Callbacks overview
  description: Learn how to create callbacks in Mockoon to call webhooks or microservices and how to trigger them from your route responses
order: 650
---

# Callbacks overview

---

## What are callbacks?

Callbacks are a way to **make one or more HTTP calls** after an entering request reaches your route. This is useful to **call other APIs or micro-services or to trigger a webhook**.

Callbacks are fully configurable and are created at the environment level, like the [data buckets](docs:data-buckets/overview).

## Create a callback

To create a new callback, open the **Callbacks** options by clicking on the tab at the top of the window:

![click on the callbacks tab at the top{955x160}](docs-img:open-callbacks-view.png)

Add a new callback by clicking on the "plus" button:

![Add a new callback by clicking on the plus button{1264x578}](docs-img:add-callback.png)

## Configure a callback

The callback configuration interface is very similar to the route response interface. You can configure the callback's **name**, **description**, **method**, **URL**, **body**, and **headers**:

- **URL**: the URL to call. Supports [templating helpers](docs:templating/overview).
- **Method**: the HTTP method to use for the call. Only some methods support a body (`POST`, `PUT`, and `PATCH`).
- **Body**: the body to send with the call. You can serve an inline body, a file, or the content of a [data bucket](docs:data-buckets/overview). They support templating too. Please refer to the [response body](docs:response-configuration/response-body) documentation for more details.
- **Headers**: the headers to send with the call. They support our [templating helpers](docs:templating/overview).
