---
title: CORS
meta:
  title: Automatic handling of CORS preflight OPTIONS requests
  description: Front-end application and your JSON mock API are not on the same domain? Handle preflight OPTIONS requests automatically with Mockoon
order: 110
---

# CORS

---

## Automatic handling of CORS preflight requests

When creating mock APIs, chances are the front-end application and the mocked API won’t be on the **same domain**, thus triggering browsers OPTIONS [preflight requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

For your application to work, you can make Mockoon automatically answer to these OPTIONS requests:

Open the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab](/images/docs/v1.17.0/open-environment-settings.png)

Enable the **Automatically handle OPTIONS pre-flight requests ** by ticking the checkbox:

![tick the CORS checkbox](/images/docs/v1.17.0/enable-cors.png)

You need to restart the environment for the change to take effect.

Mockoon will now automatically answer with a 200 HTTP status code to all preflight OPTIONS requests. The following headers will also be added to the response:

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS
Access-Control-Allow-Headers: Content-Type, Origin, Accept,Authorization,Content-Length, X-Requested-With
```

Please note that Mockoon won’t send any CORS header on routes with the OPTIONS method (i.e. `OPTIONS /my-route`).

## Add CORS headers to the environment headers

You can also add the same CORS headers to all routes of a mock API with one click.

Open the **Environment Headers** by clicking on the tab at the top of the window:

![click on the headers tab](/images/docs/v1.17.0/open-environment-headers.png)

Then, click on the **Add CORS headers** link:

![Click on the add CORS headers link](/images/docs/v1.17.0/add-cors-headers.png)

The above headers will be automatically added to your list of headers:

![view cors headers in the list](/images/docs/v1.17.0/view-cors-headers.png)
