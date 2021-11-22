---
title: TLS
meta:
  title: Serve a mock API over TLS
  description: Need to mock a secured REST API server? Mockoon can also do this by serving over TLS with a self-signed certificate
order: 100
---

# TLS

---

Mockoon supports serving your mock API over TLS with a self signed certificate. You can activate this option for each environment independently:

Open the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab](/images/docs/v1.17.0/open-environment-settings.png)

Enable the **TLS option** by ticking the checkbox. The option was successfully activated if a yellow lock is displayed next to the environment name.

![tick the TLS checkbox](/images/docs/v1.17.0/enable-tls.png)

> You may need to restart your environment for the change to take effect.

Your mock API will now be available on `https://localhost:port` instead of `http://localhost:port`.

> Please note that Mockoon is using a self-signed certificate to serve your environment over TLS.
