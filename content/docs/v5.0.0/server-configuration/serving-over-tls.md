---
title: TLS
meta:
  title: Serve a mock API over TLS
  description: Need to mock a secured REST API server? Mockoon can also do this by serving over TLS with a self-signed certificate
order: 110
---

# TLS

---

Mockoon supports serving your mock API over TLS with a self-signed certificate by default. You can also provide your certificate and trusted CA certificates.

## Activate the TLS option

You can activate the TLSoption for each environment independently. Open the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab{1034x160}](docs-img:open-environment-settings.png)

Enable the **TLS option** by ticking the checkbox. The option was successfully activated if a yellow lock is displayed next to the environment name.

![tick the TLS checkbox{807x343}](docs-img:enable-tls.png)

> You may need to restart your environment for the change to take effect.

Your mock API will now be available on `https://localhost:port` instead of `http://localhost:port`.

Please note that Mockoon is using a self-signed certificate to serve your environment over TLS.

## Provide your own certificate

You can also provide your certificate in both PKCS12 or PEM formats by filling out the input fields with the path to the file(s).

![add certificate path{1264x590}](docs-img:enable-tls-custom-certificate.png)

Mockoon also supports passphrase-protected keys and custom-trusted CA certificates. As Mockoon is using Node.js' `tls`, you can refer to the [`tls.createSecureContext()` documentation](https://nodejs.org/dist/latest-v16.x/docs/api/tls.html#tlscreatesecurecontextoptions) for a full description of the available options.

> All the path fields support both absolute and relative paths. Relative paths are resolved from the environment's file location.
