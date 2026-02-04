---
title: TLS
meta:
  title: Serve a mock API over TLS
  description: Need to mock a secured REST API server? Mockoon can also do this by serving over TLS with a self-signed certificate
order: 120
---

# TLS

---

Mockoon supports serving your mock API over TLS with a self-signed certificate by default. You can also provide your certificate and trusted CA certificates.

## Activate the TLS option

You can activate the TLS option for each environment independently. Open the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab{1198x160}](docs-img:open-environment-settings.png)

Enable the **TLS option** by ticking the checkbox. The option was successfully activated if a yellow lock is displayed next to the environment name.

![tick the TLS checkbox{854x342}](docs-img:enable-tls.png)

> 💡 You may need to restart your environment for the change to take effect.

Your mock API will now be available on `https://localhost:port` instead of `http://localhost:port`.

Please note that Mockoon is using a self-signed certificate to serve your environment over TLS.

## Provide your own certificate

You can also **provide your certificate in both PKCS12 or PEM formats** by filling out the input fields with the path to the file(s).

![add certificate path{1484x612}](docs-img:enable-tls-custom-certificate.png)

Mockoon also supports passphrase-protected keys and custom-trusted CA certificates. As Mockoon is using Node.js' `tls`, you can refer to the [`tls.createSecureContext()` documentation](https://nodejs.org/dist/latest-v20.x/docs/api/tls.html#tlscreatesecurecontextoptions) for a full description of the available options.

> 💡 All the path fields support both absolute and relative paths. Relative paths are resolved from the environment's file location.

## Disable TLS at runtime with the CLI or serverless library

You can disable TLS when running your mock with the [CLI](/cli/) or the [serverless library](/serverless/).

### Disable TLS with the CLI

To **disable** TLS when running your mock with the CLI, use the `--disable-tls` flag:

```bash
mockoon-cli start --disable-tls -d ./mock.json
```

> 📘 Check the [CLI dedicated documentation](https://github.com/mockoon/mockoon/tree/main/packages/cli#readme)

### Disable TLS with the serverless library

To **disable** TLS when running your mock with the serverless library, set the `disableTLS` option to `true` when building the `MockoonServerless` instance:

```javascript
const mockoonServerless = new mockoon.MockoonServerless(mockEnv, {
  disableTLS: true
});
```

> 📘 Check the [serverless library dedicated documentation](https://github.com/mockoon/mockoon/tree/main/packages/serverless#readme)
