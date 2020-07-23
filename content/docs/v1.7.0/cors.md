---
title: CORS
icon: shuffle
meta:
  title: Automatic handling of preflight OPTIONS requests
  description: Front and API are not on the same domain? Handle preflight requests automatically with Mockoon
---

### CORS

---

#### Automatic handling of preflight requests

When mocking, chances are the front-end application and the mocked API won’t be on the **same domain**, thus triggering browsers OPTIONS [preflight requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

For your application to work, you can make Mockoon automatically answer to these OPTIONS requests:

Open the **Environment Settings** by clicking on the cog in the upper right corner:

![click on cog icon](/images/docs/open-settings.png)

Enable the **CORS option** by ticking the checkbox. The option was successfully activated if a blue shield is displayed next to the environment name.

![tick the CORS checkbox](/images/docs/enable-cors.png)

You need to restart the environment for the change to take effect.

Mockoon will now automatically answer with a 200 HTTP status code to all preflight OPTIONS requests. The following headers will also be added to the response:

`Access-Control-Allow-Origin: *`  
`Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS`  
`Access-Control-Allow-Headers: Content-Type, Origin, Accept,Authorization,Content-Length, X-Requested-With`  

Please note that Mockoon won’t send any CORS header on routes with the OPTIONS method (i.e. `OPTIONS /my-route`).

#### Add CORS headers to the environment headers

You can also add the same CORS headers to an environment by clicking on the **Add CORS headers to environment** link:

![Click on the add CORS headers link](/images/docs/add-cors-headers.png)

You need to restart the environment for the change to take effect.
