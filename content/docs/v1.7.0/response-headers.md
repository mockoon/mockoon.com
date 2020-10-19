---
title: Headers
icon: featured_play_list
meta:
  title: Define route and environment response headers
  description: Mockoon can handle response headers at both environment and route levels for your mock server, learn how
---

# Headers

---

In Mockoon you can easily define **response headers** for **each route** but also at the **environment level**. Response headers defined on a route will **override** those defined in an environment.

## Route level response headers

To add response headers like `Content-Type` to your route, go to the route's **Headers tab** and fill the name and value fields:

![Add route response header](/images/docs/add-route-header.png)

## Environment level response headers

You can also add response headers at the environment level. Headers defined in an environment will be overridden if they are redefined on a route. To define an environment response header:

Open the **Environment Settings** by clicking on the cog in the upper right corner:

![click on cog icon](/images/docs/open-settings.png)

And add one or more headers at the bottom of the page:

![Add environment response header](/images/docs/add-environment-header.png)
