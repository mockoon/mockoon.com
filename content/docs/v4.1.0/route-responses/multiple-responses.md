---
title: Multiple route responses
meta:
  title: Define multiple responses for each route
  description: Multiple responses can be defined for each route with different body, headers and status. Learn how to create them and randomize them.
order: 900
---

# Multiple responses

---

For each route, multiple responses can be defined (status, body, and headers) and [triggered using a set of rules](docs:route-responses/dynamic-rules). There is always at least one response when you create a new route. You can modify it and add more responses but you can never delete the last route response.

## Adding or duplicating a response

To **add** a new response to your route, click on the "plus" icon next to the responses list:

![Click on the icon to add a new response{987x164}](docs-img:add-route-response.png)

You can also **duplicate** an existing route response by clicking on the "copy" icon on the right:

![Click on the copy icon to duplicate a response{985x195}](docs-img:duplicate-route-response.png)

Everything will be copied to the new response: documentation, file/body, headers and rules.

## Route responses precedence

Route responses order define the order in which the [rules are interpreted](docs:route-responses/dynamic-rules). You can easily change the default response by reordering the responses menu with a drag and drop:

![Reorder route responses{968x221}](docs-img:reorder-responses.png)

## Default route response

Without rules or when a request does not match the one you defined, the default response will always be the one marked with the blue flag. You can easily change the default response by clicking on the grey flags in the menu:

![Define a new default route response{1033x216}](docs-img:change-route-responses-default.png)

## Random route response

Mockoon can serve the route responses randomly (200, 500, 404) to simulate an unpredictable behavior.

To activate this option, click on the "shuffle" icon next to the response list:

![Random route responses{1032x174}](docs-img:random-route-responses.png)

> ⚠️ When this option is active, the [default response](#default-route-response) and all the rules defined on this route will be ignored. Also, this option cannot be selected in addition to the sequential responses option below.

## Sequential route response

Mockoon can serve the route responses sequentially (200 → 500 → 404). Mockoon will serve all the responses one after the other and restart at the beginning. The sequence is reset when restarting the server.

To activate this option, click on the "repeat" icon next to the response list:

![Sequential route responses{1021x174}](docs-img:sequential-route-responses.png)

> ⚠️ When this option is active, the [default response](#default-route-response) and all the rules defined on this route will be ignored. Also, this option cannot be selected in addition to the random responses option above.

## Fallback mode

When the **fallback mode** is enabled, Mockoon will automatically pass the request to the proxy (or the next route, see below) when none of the responses' rules match.

To activate this option, click on the "fallback" icon next to the response list:

![fallback mode responses{979x174}](docs-img:fallback-mode-responses.png)

Behind the scene, the server will automatically jump to the next route and, ultimately, the proxied server. It allows to create more complex setups where a wildcard or parameterized route's rules would not match, but the next route would catch the call (according to the [order of the routes](docs:api-endpoints/routing#routes-order)):

```
GET /users/:id --> no rule matches
GET /users --> served
```

> ⚠️ When this option is active, the [default response](#default-route-response) will be ignored. Also, this option cannot be selected in addition to the other response options above and could result in a 404 if the proxy is not enabled.
