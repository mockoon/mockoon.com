---
title: Partial mocking with proxy mode
icon: security
meta:
  title: Partial API mocking with proxy mode
  description: Learn how to partially create a mock REST API and proxy to another JSON REST server with Mockoon
---

# Proxy mode

---

## Partial mock API using the proxy mode

Mockoon supports partial mocking of an API endpoints by forwarding the requests that does not match a declared route to the URL of your choice.

To activate the proxy mode, open the **Environment Settings** by clicking on the cog in the upper right corner:

![click on cog icon](/images/docs/open-settings.png)

Enable the proxy mode by checking the box and enter the server URL to which you want to forward the calls. A small shield icon should appear on the right of your environment name indicating that the proxy mode has been enabled:

![tick the Proxy checkbox](/images/docs/v1.8.0-enable-proxy.png)

From now on, all routes that have been defined in Mockoon will be intercepted, and any other request not matching any route path will be forwarded to the server URL you entered in the proxy mode setting.

## Proxy headers

Proxy specific headers can also be added, both to the forwarded request and the response received from the target API.

![add proxy headers by filling the keys and values](/images/docs/v1.8.0-proxy-headers.png)

> **Proxy request headers** will be automatically added to the request sent to the proxied server, while **proxy response headers** are added to the response received from the proxied server.
