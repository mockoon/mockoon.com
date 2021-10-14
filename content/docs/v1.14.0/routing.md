---
title: Routing
meta:
  title: Mockoon routing documentation
  description: Everything about Mockoon mock API paths creation, API prefix, route parameters, query strings, wildcards and more
order: 30
---

# Routing

---

## API prefix

In order to prefix all your mock API routes, fill the **prefix** input at the top of the **environment options**:

![fill the prefix input](/images/docs/environment-prefix.png)

The prefix will appear under your environment name in the environments list. All your environment's routes will now be prefixed and available at the following address `http://localhost:port/myprefix/myroute` instead of `http://localhost:port/myroute`.

You need to restart the environment for the change to take effect.

## Routing 

Mockoon uses Express to run the mock servers. In general, most of the Express' documentation applies. Please refer to the [routing documentation](https://expressjs.com/en/guide/routing.html) for more information and examples on the following topics. 

### Route patterns

Routes support certain patterns. Here are some examples of the available ones:

- `/ab?cd` will match `/acd` and `/abcd`.
- `/ab+cd` will match `abcd`, `abbcd`, `abbbcd`, and so on.

### Route parameters

Route parameters can be defined in routes by using a colon `:`. The name of a parameter can only contains the following characters `A-Za-z0-9_`.  
You can also retrieve the route parameters by using the `{{urlParam 'paramName'}}` [templating helper](docs:templating/overview).

### Query parameters

Routes **must** be declared without query parameters as they are not part of the route path. They can only be added to the request when calling an endpoint.  
Query parameters can be retrieved by using the `{{queryParam 'paramName'}}` [templating helper](docs:templating/overview).
