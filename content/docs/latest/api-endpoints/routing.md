---
title: Routing
meta:
  title: Mockoon routing documentation
  description: Everything about Mockoon mock API paths creation, API prefix, route parameters, query strings, wildcards and more
order: 700
---

# Routing

---

## API prefix

In order to prefix all your mock API routes,

Open the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab{796x160}](docs-img:open-environment-settings.png)

Then, fill the **API prefix** input at the top of the **environment Settings**:

![fill the prefix input{930x298}](docs-img:environment-prefix.png)

The prefix will appear under your environment name in the environments list. All your environment's routes will now be prefixed and available at the following address `http://localhost:port/myprefix/myroute` instead of `http://localhost:port/myroute`.

You need to restart the environment for the change to take effect.

## API routes

Mockoon uses Express to run the mock servers. In general, most of the Express' documentation applies. Please refer to the [routing documentation](https://expressjs.com/en/guide/routing.html) for more information and examples on the following topics.

### Routes order

Routes are declared in the server in the order displayed in the application (inside folders or not). It means that a the first ones takes precedence over the following ones.

One consequence is that a route parameter will capture any value at the specific URL segment. For example, `/users/:id` will intercept `/users/search`. The more specific "search" route should be declared first. You can always reorder routes by dragging and dropping them.

### Route patterns

Routes support certain patterns. Here are some examples of the available ones:

- `/ab?cd` will match `/acd` and `/abcd`.
- `/ab+cd` will match `abcd`, `abbcd`, `abbbcd`, and so on.

![route pattern{956x74}](docs-img:route-patterns.png)

For a complete overview of the patterns available, please refer to Express' [route paths documentation](https://expressjs.com/en/guide/routing.html#route-paths).

### Route parameters

Route parameters can be defined in routes by using a colon `:`. The name of a parameter can only contains the following characters `A-Za-z0-9_`.

![route parameter{956x74}](docs-img:route-params.png)

For a complete overview on how to use and declare route parameters, please refer to Express' [route parameters documentation](https://expressjs.com/en/guide/routing.html#route-parameters).

You can also retrieve the route parameters by using the `{{urlParam 'paramName'}}` [templating helper](docs:templating/mockoon-request-helpers#urlparam).

> To use a colon `:` in your route path as a normal character, you can escape it by either using double backslashes `\\` or square brackets `[]`:
> `/part1[:]part2` > `/part1\\:part2`

### Query parameters

Routes **must** be declared without query parameters as they are not part of the route path. They can only be added to the request when calling an endpoint.

Query parameters can be retrieved by using the `{{queryParam 'paramName'}}` [templating helper](docs:templating/mockoon-request-helpers#queryparam).

#### Query parameters arrays and objects

Mockoon is using [qs](https://www.npmjs.com/package/qs) to parse the query string in a object usable in our templating or rules systems. It supports both arrays and objects.
To pass arrays and objects in the query string of a request, you must use the following syntax:

- for objects: `?param1=test&obj[prop1]=value`.
- for arrays: `?param1=test&array[]=value1&array[]=value2` or `?param1=test&array[0]=value1&array[1]=value2` or `?param1=test&array=value1,value2`.
