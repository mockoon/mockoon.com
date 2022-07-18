---
title: Listening hostname/adapter
meta:
  title: Listening hostname or adapter
  description: Learn how you can customize the hostname or network adapter your mock API will listen to in the desktop application or the CLI
order: 120
---

# Listening hostname/adapter

---

By default, Mockoon's mock APIs will listen to all available network adapters, often described as `0.0.0.0`. It means that your mock server will be available on all your adapter as `localhost`, `127.0.0.1`, your local IP address `192.168.x.x`, etc.
You can configure each environment to listen on `127.0.0.1`, and thus `localhost` too, by checking a simple option.

Open the **Environment Settings** by clicking on the cog in the upper right corner:

![click on cog icon{832x277}](/images/docs/open-settings.png)

Enable the **Localhost Only** option by ticking the checkbox.

![tick the localhost only checkbox{934x300}](/images/docs/enable-localhost-only.png)

> You may need to restart your environment for the change to take effect.

Your mock API will now be available on `https://localhost:{port}` and `https://127.0.0.1:{port}` only.

> When using the CLI, you can choose a specific adapter to listen to (e.g. `192.168.1.1`) by using the `--hostname` flag with the [`start` command](https://github.com/mockoon/mockoon/tree/main/packages/cli#mockoon-cli-start).
