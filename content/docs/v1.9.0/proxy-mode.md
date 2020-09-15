---
title: Proxy mode
icon: security
meta:
  title: API mocking with proxy mode
  description: Learn how to partially mock a REST API and proxy to another server with Mockoon
---

## Proxy mode

---

### Partial mocking using the proxy mode

Mockoon supports partial mocking of an API endpoints by forwarding the requests that does not match a declared route to the URL of your choice.

Open the **Environment Settings** by clicking on the cog in the upper right corner:

![click on cog icon](/images/docs/open-settings.png)

Enable proxy mode and enter the server URL to which you want to forward calls. A small shield icon should appear on the right of your environment name indicating that the proxy mode has been enabled:

![tick the Proxy checkbox](/images/docs/v1.8.0-enable-proxy.png)

All routes that have been defined will be intercepted by Mockoon, and any other request will be forwarded to the server defined in the proxy mode setting.

### Proxy headers

Proxy specific headers can also be added.

![add proxy headers by filling the keys and values](/images/docs/v1.8.0-proxy-headers.png)

**Proxy request headers** will be automatically added to the request sent to the proxied server, while **proxy response headers** are added to the response received from the proxied server.
