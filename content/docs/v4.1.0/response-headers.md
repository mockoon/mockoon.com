---
title: Headers
meta:
  title: Define route and environment response headers
  description: Mockoon can handle response headers at both environment and route levels for your mock server, learn how
order: 40
---

# Headers

---

In Mockoon you can easily define **response headers** for **each route** but also at the **environment level**. Response headers defined on a route will **override** those defined in an environment.

## Route level response headers

To add response headers like `Content-Type` to your route, go to the route's **Headers tab** and fill the name and value fields:

![Complete route response header form{997x204}](docs-img:fill-route-header-form.png)

You can add one or more headers by clicking on the "Add header" button at the bottom of the list:

![Add route response header{977x234}](docs-img:add-route-header.png)

## Environment level response headers

You can also add response headers at the environment level. Headers defined in an environment will be overridden if they are redefined on a route. To define an environment response header:

Open the **Environment Headers** by clicking on the tab at the top of the window:

![click on the headers tab{746x160}](docs-img:open-environment-headers.png)

And add one or more headers by clicking on the "Add header" button at the bottom of the list:

![Add environment header{1177x137}](docs-img:add-environment-header.png)
