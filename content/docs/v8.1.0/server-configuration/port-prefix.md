---
title: Port and prefix
meta:
  title: Change port and API prefix
  description: Learn how you can customize the localhost port and API prefix of your mock server.
order: 100
---

# Port and prefix

---

By default, Mockoon's new environments will listen on port `3000` and will have **no API prefix**. If you have multiple environments already opened, Mockoon will automatically increment the port number for each new environment.

You can change the **port number** and the **API prefix** in the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab{921x160}](docs-img:open-environment-settings.png)

Then, change the port number and/or the API prefix in the corresponding input fields:

![field to set a custom port{661x298}](docs-img:environment-custom-port.png)

![field to set a custom prefix{1128x298}](docs-img:environment-custom-prefix.png)

> 💡 The API prefix can contain multiple sections (e.g. `/api/v1/`) and will be applied to all your routes.
