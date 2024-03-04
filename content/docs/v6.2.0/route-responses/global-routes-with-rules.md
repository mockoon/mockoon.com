---
title: Global routes with rules
meta:
  title: Define global routes with reusable responses and rules
  description: Learn how to define global routes with responses and rules to protect your endpoints. Create reusable responses and rules and apply them to all your routes.
order: 320
---

# Global routes with rules

---

If you want to serve the same responses based on the same rules for all or part of your endpoints, you can create global routes using the **fallback mode** and a **wildcard path**. This is useful if you want to protect all your endpoints by checking if an `Authorization` header is present or if you want to verify that all your requests contain a specific property in their body.

Three parts are required to create a global route:

## 1. Create a wildcard route

To create a global route, you first need to create a new HTTP route that will match all the endpoints you want to protect. To do so, create a new route and select "All methods" in the method dropdown:

![wildcard route on all methods{599x318}](docs-img:create-wildcard-route.png)

In this example, the wildcard route is placed above the `GET /users` route, which is important as it will be [evaluated first](docs:api-endpoints/routing#routes-order) and catch all the requests. You can create it first or move it up in the routes list with a drag and drop.

> 💡 You can also create a wildcard route that only matches a specific method, like `GET` or `POST`, instead of "All methods", if you want to protect all your `POST` endpoints, for example.  
> Finally, you can create a wildcard route that matches all the endpoints starting with a specific path, like `/users/*` instead of `/*`. You can use this method to protect all your `/users/something` endpoints but not the `/users` one.

## 2. Create your global responses and rules

The second step is to create one or more responses with rules. For example, you can create a response checking that the request contains an `Authorization` header and returning a `401` error if's not present.
To follow this example, use the existing response or create a new one and set the status code to `401`:

![create response with status code 401{1006x261}](docs-img:response-status-code-401.png)

Add a new rule to this response by clicking on the "add rule" button and selecting the "Header" rule type. Then, set the rule to check that the `Authorization` header is null as we want to return a `401` error if it is not present:

![create rule to check that the Authorization header is null{987x304}](docs-img:response-rule-header-null.png)

> 💡 You can create more responses with associated rules to verify more criteria on the request and serve different responses accordingly (errors, etc.).

## 3. Activate the fallback mode

Once your route is created and your responses customized, activate the fallback mode by clicking on the "fallback" icon next to the response list:

![Activate fallback mode{1264x174}](docs-img:activate-fallback-mode.png)

This will automatically pass the request to the next route when none of the [responses' rules](docs:route-responses/dynamic-rules) match.

> 📘 Learn more about the [fallback mode](docs:route-responses/multiple-responses#fallback-mode) in our documentation.
