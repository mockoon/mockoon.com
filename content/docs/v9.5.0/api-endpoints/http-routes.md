---
title: HTTP routes
meta:
  title: Mockoon HTTP routes documentation
  description: All you need to know about Mockoon's mock API HTTP routes creation, behavior, custom body, headers and more.
order: 210
---

# HTTP routes

---

## Overview

**HTTP routes** are the most basic **endpoints** you can create in Mockoon. They are flexible and can be used to mock any type of API. They support many customizations like [headers](docs:response-configuration/response-headers) and [body](docs:response-configuration/response-body) and can have [multiple responses](docs:route-responses/multiple-responses) and [rules](docs:route-responses/dynamic-rules) to handle different scenarios.

To create a new HTTP route, click on the "HTTP route" entry in the add route menu:

![Add a new HTTP route{498x335}](docs-img:add-http-route.png)

A new route will be created with a default 200 status code and an empty body. You can then customize it to fit your needs.

![view of a new HTTP route{1484x476}](docs-img:new-http-route.png)

## Independence and statelessness

All HTTP routes are **independent** of each other and **stateless**. It means that HTTP routes will **not share any data** with other routes and that the route will **not remember any information** between requests. This is important to keep in mind when creating complex APIs with multiple routes.

Some exceptions to this rule are:

- [**Global variables**](docs:variables/global-variables) that can be used to store and share data between routes in the templating engine.
- [**Rules based on the request number**](docs:route-responses/dynamic-rules#1-target) that can be used to answer differently based on the index of the requests.
- [**Data buckets**](docs:data-buckets/overview) that can be used to serve data from a shared source. However, the data bucket cannot be modified by an HTTP route, see below.

## Relation with data buckets

HTTP routes can use [**data buckets**](docs:data-buckets/overview) to serve data from a **shared source** and avoid duplication. By selecting ["Data bucket" in the route response body type](docs:response-configuration/response-body#data-bucket), you can choose a data bucket to serve data from for any of your routes.

However, the **data bucket cannot be modified** by an HTTP route. Example: an HTTP route with a PUT method won't be able to update a data bucket. It ensures that the data bucket remains a shared source of truth and that the HTTP routes remain stateless.

If you want a data bucket to act as a **simple JSON database** and be **manipulated** by your endpoints, you can create [**CRUD routes**](docs:api-endpoints/crud-routes) that will be able to interact with the data bucket by creating, reading, filtering, updating, and deleting data, in a RESTful way.
