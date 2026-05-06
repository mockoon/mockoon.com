---
title: Using callbacks
meta:
  title: Using callbacks
  description: Learn how to use Mockoon's callbacks or webhooks, link them to your route responses and delay their execution
order: 651
---

# Using callbacks

---

After [creating callbacks](docs:callbacks/overview), you can link them in your route responses and delay their execution.

## Link a callback to a route response

To link a callback to a route response, choose "Callbacks" in the route response menu:

![click on the callbacks tab in the route response menu{1174x174}](docs-img:open-route-response-callbacks.png)

Then, click on the "plus" button to add a new callback, and select the callback you want to link:

![click on the plus button to add a new callback{1147x234}](docs-img:link-callback-response.png)

> 💡 You can **delay a callback execution** by adding a delay in milliseconds in the "Callback latency" field.

## Infinite callbacks loop prevention

To prevent infinite loops when a callback calls a route that triggers the same callback (or a circular chain of callbacks), Mockoon send a special header `X-Mockoon-Callback-Chain` containing the list of route response UUIDs that have been executed in the current chain.

When Mockoon detects that a callback is triggered by a route response that has already been executed in the current chain, it prevents the callback from being executed again and stops the chain.
