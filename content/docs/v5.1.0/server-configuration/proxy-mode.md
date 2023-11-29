---
title: Partial mocking with proxy mode
meta:
  title: Partial API mocking with proxy mode
  description: Learn how to create a mock REST API to intercept traffic and proxy requests to another JSON REST server with Mockoon
order: 100
---

# Proxy mode

---

## Partially mock APIs using the proxy mode

Mockoon supports partial mocking of an API endpoints by forwarding the requests that does not match a declared route to the URL of your choice.

To activate the proxy mode, open the **Environment Proxy** options by clicking on the tab at the top of the window:

![click on proxy tab{887x160}](docs-img:open-proxy-options.png)

Enable the proxy mode by checking the box and enter the server URL to which you want to forward the calls. A small shield icon should appear on the right of your environment name indicating that the proxy mode has been enabled:

![tick the Proxy checkbox{1264x274}](docs-img:enable-proxy.png)

From now on, all routes that have been defined in Mockoon will be intercepted, and any other request not matching any route path will be forwarded to the server URL you entered in the proxy mode setting.

## Disable API prefix forwarding

By default, the API prefix will be part of the path called on the proxied API. You can disable this behavior by ticking the "Remove prefix" checkbox:

![tick the Proxy no prefix forward checkbox{699x306}](docs-img:proxy-no-forward.png)

## Proxy headers

Proxy specific headers can also be added, both to the forwarded request and the response received from the target API.

![add proxy headers by filling the keys and values{1264x360}](docs-img:proxy-headers.png)

> **Proxy request headers** will be automatically added to the request sent to the proxied server, while **proxy response headers** are added to the response received from the proxied server.
