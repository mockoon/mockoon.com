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

In order to prefix all your mock API routes,

Open the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab{803x162}](/images/docs/v1.17.0/open-environment-settings.png)

Then, fill the **API prefix** input at the top of the **environment Settings**:

![fill the prefix input{1052x211}](/images/docs/v1.17.0/environment-prefix.png)

The prefix will appear under your environment name in the environments list. All your environment's routes will now be prefixed and available at the following address `http://localhost:port/myprefix/myroute` instead of `http://localhost:port/myroute`.

You need to restart the environment for the change to take effect.

## API routes

Mockoon uses Express to run the mock servers. In general, most of the Express' documentation applies. Please refer to the [routing documentation](https://expressjs.com/en/guide/routing.html) for more information and examples on the following topics.

### Route patterns

Routes support certain patterns. Here are some examples of the available ones:

- `/ab?cd` will match `/acd` and `/abcd`.
- `/ab+cd` will match `abcd`, `abbcd`, `abbbcd`, and so on.

![route pattern{716x90}](/images/docs/v1.17.0/route-patterns.png)

For a complete overview of the patterns available, please refer to Express' [route paths documentation](https://expressjs.com/en/guide/routing.html#route-paths).

### Route parameters

Route parameters can be defined in routes by using a colon `:`. The name of a parameter can only contains the following characters `A-Za-z0-9_`.

![route parameter{716x90}](/images/docs/v1.17.0/route-params.png)

For a complete overview on how to use and declare route parameters, please refer to Express' [route parameters documentation](https://expressjs.com/en/guide/routing.html#route-parameters).

You can also retrieve the route parameters by using the `{{urlParam 'paramName'}}` [templating helper](docs:templating/mockoon-request-helpers#urlparam).

> To use a colon `:` in your route path as a normal character, you can escape it by either using double backslashes `\\` or square brackets `[]`:
> `/part1[:]part2`
> `/part1\\:part2`

### Query parameters

Routes **must** be declared without query parameters as they are not part of the route path. They can only be added to the request when calling an endpoint.  
Query parameters can be retrieved by using the `{{queryParam 'paramName'}}` [templating helper](docs:templating/mockoon-request-helpers#queryparam).
