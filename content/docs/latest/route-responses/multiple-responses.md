---
title: Multiple route responses
meta:
  title: Define multiple responses for each route
  description: Multiple responses can be defined for each route with different body, headers and status. Learn how to create them and randomize them.
order: 900
---

# Multiple responses

---

For each route, multiple responses can be defined (status, body, and headers) and [triggered using a set of rules](docs:route-responses/dynamic-rules).

## Adding or duplicating a response

To **add** a new response to your route, click on the "plus" icon next to the responses list:

![Click on the icon to add a new response](/images/docs/v1.17.0/add-route-response.png)

You can also **duplicate** an existing route response by clicking on the "copy" icon on the right:

![Click on the copy icon to duplicate a response](/images/docs/v1.17.0/duplicate-route-response.png)

Everything will be copied to the new response: documentation, file/body, headers and rules.

## Default route response

There is always at least one response when you create a new route. You can modify it and add more responses. But you can never delete the last route response.

Without rules or when a request does not match the one you defined, the default response will always be the first one in the list. You can easily change the default response by reordering the responses menu with a drag and drop:

![Reorder route responses](/images/docs/v1.17.0/reorder-responses.png)

## Random route response

Mockoon can serve the route responses randomly (200, 500, 404) to simulate an unpredictable behavior.

To activate this option, click on the "shuffle" icon next to the response list:

![Random route responses](/images/docs/v1.17.0/random-route-responses.png)

> When this option is active, all the rules defined on this route will be ignored. Also, this option cannot be selected in addition to the sequential responses option below.

## Sequential route response

Mockoon can serve the route responses sequentially (200 → 500 → 404). Mockoon will serve all the responses one after the other and restart at the beginning. The sequence is reset when restarting the server.

To activate this option, click on the "repeat" icon next to the response list:

![Sequential route responses](/images/docs/v1.17.0/sequential-route-responses.png)

> When this option is active, all the rules defined on this route will be ignored. Also, this option cannot be selected in addition to the random responses option above.
