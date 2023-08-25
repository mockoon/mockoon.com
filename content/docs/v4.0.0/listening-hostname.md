---
title: Listening hostname/adapter
meta:
  title: Listening hostname or adapter
  description: Learn how you can customize the hostname or network adapter your mock API will listen to in the desktop application or the CLI
order: 120
---

# Listening hostname/adapter

---

By default, Mockoon's mock APIs will listen to all available network adapters on IPv4 and IPv6, often described as `0.0.0.0` and `::`. Your mock server will be available on all your adapters, such as `localhost`, `127.0.0.1`, your local IPv4 address(es) `192.168.x.x`, `::1`, etc.

To configure each environment to listen on a specific hostname, open the **Environment Settings** by clicking on the tab at the top of the window:

![click on the settings tab{1034x160}](docs-img:open-environment-settings.png)

Add a **custom hostname** in the input field:

![field to set a custom hostname{1264x213}](docs-img:custom-hostname-setting.png)

> You may need to restart your environment for the change to take effect.

> When using the CLI, you can choose a specific adapter to listen to (e.g. `192.168.1.1`) by using the `--hostname` flag with the [`start` command](https://github.com/mockoon/mockoon/tree/main/packages/cli#mockoon-cli-start).
