---
title: Create global rules for your routes
excerpt: Learn how to create global rules to protect all your routes at once.
meta:
  title: Create global rules for your routes
  description: Learn how to create global rules and apply them to all your routes at once by using Mockoon's fallback mode and wildcard endpoints.
image: tutorial-global-rules-routes.png
imageAlt: schema of rules being checked before calling a route
imageWidth: 1200
imageHeight: 400
order: 57
---

When creating an API mock, you often need to apply the same rules to all your endpoints. It also makes your mock more consistent and easier to maintain. For example, you may want to check that all your requests contain an `Authorization` header or that they all contain a specific property in their body. In mockoon, you can easily create routes that will apply rules to all your endpoints and server specific responses, like a `401 Unauthorized`. This tutorial will show you how to do it through an example.

Creating global rules in Mockoon requires the use of different features:

- The response's [fallback mode](docs:route-responses/multiple-responses#fallback-mode).
- [Wildcard routes](docs:api-endpoints/routing#api-routes)
- [Response rules](docs:route-responses/dynamic-rules)

In this tutorial, we will create a mock API with a simple GET route and a global route that will check that all the requests contain an `Authorization` header and return a `401 Unauthorized` error if that's not the case.

## 1. Create a route to protect

Starting with an empty environment, create a new route and set its path to `/protected` and its method to `GET`:

![mockoon interface with a single route named protected{1204x691}](/images/tutorials/create-global-rules-routes/create-protected-route.png)

You can keep the status code to `200` and add a simple JSON response body:

```json
{
  "response": "success"
}
```

## 2. Create a wildcard route

To create a global route, you first need to create a new HTTP route that will match all the endpoints you want to protect, both with its path and method(s). To do so, create a new route, set its path to `*`, which will match any path, and select "All methods" in the method dropdown:

![wildcard route on all methods{1204x691}](/images/tutorials/create-global-rules-routes/create-wildcard-route.png)

We could also set its path to `/protected` and its method to `GET` to match our previous route, but it would only protect this specific route and not all the others.

Important point: you need to move the wildcard route above the `GET /protected` route, so it can be [evaluated first](docs:api-endpoints/routing#routes-order) and catch all the requests. You can create it first or move it up in the routes list with a drag and drop.

> 💡 You can also create a wildcard route that only matches a specific method, like `GET` or `POST`, instead of "All methods", if you want to protect all your `POST` endpoints, for example.  
> Finally, you can create a wildcard route that matches all the endpoints starting with a specific path, like `/users/*` instead of `/*`. You can use this method to protect all your `/users/something` endpoints but not the `/users` one.

## 3. setup the response and rule

The second step is to set up one or more responses with rules on this wildcard route. We will create a rule checking that the request contains an `Authorization` header and return a `401` error if it's not present.

### 3a. Set the status code and body

Modify the existing response by setting the status code to `401`:

![set response status code to 401 in the menu{1204x691}](/images/tutorials/create-global-rules-routes/response-status-code-401-unauthorized.png)

You can also add a simple JSON response body returning an error:

```json
{
  "error": "Unauthorized"
}
```

### 3b. Create a new rule

The second step is to add a new rule to this response by navigating to the "Rules" tab in the response view and clicking the "Add rule" button.
In the newly added rule, select the "Header" rule type. Then, set the "Header name" to `Authorization` and the operator to `null`:

![create rule to check that the Authorization header is null{1204x691}](/images/tutorials/create-global-rules-routes/response-rule-header-null.png)

> 💡 You can create more responses with associated rules to verify more criteria on the request and serve different responses accordingly (400 Bad Request when the body is missing, etc.).

## 4. Activate the fallback mode

Once your route is created and your responses customized, activate the **fallback mode** on your wildcard route by clicking on the "fallback" icon next to the response list:

![fallback mode activated{1204x691}](/images/tutorials/create-global-rules-routes/activate-fallback-mode.png)

The fallback mode will automatically pass the request to the next route, here `GET /protected`, when none of the wildcard route rules match.

> 📘 You can learn more about the [fallback mode](docs:route-responses/multiple-responses#fallback-mode) in our documentation.

## 5. Test your mock

Our setup is complete, and we can now test our mock by making two requests to our `GET /protected` route, one without and one with an `Authorization` header.

First, **start your environment** by clicking on the green "play" button at the top:

![highlighted green play button at the top of the screen{1204x691}](/images/tutorials/create-global-rules-routes/start-mock-server.png)

Then, open a terminal and make a request without the `Authorization` header using curl:

```bash
curl -i http://localhost:3000/protected
```

You should get a `401 Unauthorized` error with our "Unauthorized" response body:

```bash
$ curl -i http://localhost:3000/protected
HTTP/1.1 401 Unauthorized
[...]
{
  "error": "Unauthorized"
}
```

Now, make a second request with a fake `Authorization` header:

```bash
 curl -i http://localhost:3000/protected -H "Authorization: xxxx"
```

You should get a `200` status code with our "Success" response body:

```bash
$ curl -i http://localhost:3000/protected -H "Authorization: xxxx"
HTTP/1.1 200 OK
[...]
{
  "response": "success"
}
```
