---
title: Proxy mode
icon: security
meta:
  title: API mocking with proxy mode
  description: Learn how to partially create a mock REST API and proxy to another JSON REST server with Mockoon
---

# Proxy mode

---

## Partial mock API using the proxy mode

Mockoon supports partial mocking of an API endpoints by forwarding the requests that does not match a declared route to the URL of your choice.

Open the **Environment Settings** by clicking on the cog in the upper right corner:

![click on cog icon](/images/docs/open-settings.png)

Enable proxy mode and enter the server URL to which you want to forward calls. A small shield icon should appear on the right of your environment name indicating that the proxy mode has been enabled:

![tick the Proxy checkbox](/images/docs/enable-proxy.png)

All routes that have been defined will be intercepted by Mockoon, and any other request will be forwarded to the server defined in the proxy mode setting.
