---
title: UI redesign and custom TLS certificates
excerpt: Discover this update's new UI header redesign and interface polish, custom TLS certificate support, and cookie rules
date: '2021-11-30'
image: ui-redesign-custom-tls.png
imageAlt: Mockoon logo with security shield
imageWidth: 1200
imageHeight: 400
tags:
  - releases
author: guillaume
meta:
  title: UI redesign and custom TLS certificates
  description: Discover this update's new UI header redesign and interface polish, custom TLS certificate support, and cookie rules
---

We are happy to share with you a new version of Mockoon ([v1.17.0](https://github.com/mockoon/mockoon/releases/tag/v1.17.0)) and the CLI ([v1.3.0](https://github.com/mockoon/cli/releases/tag/v1.2.0)), fixing many bugs and bringing some exciting new features.

We hope you will enjoy them! Do not hesitate to give us your [feedback](/contact/) 😃

## Partial UI redesign and improvements

To improve some features' discoverability and to declutter the interface a bit, we redesigned the main header. We also polished the interface here and there to give you a more streamlined and uniform experience. Here are the most significant changes:

### New header design

We removed multiple inputs from the main header and added a new tabs menu to make the proxy mode and logs more easily discoverable. We also split the environment settings into three views: the environment headers, the proxy options, and the environment settings.

![new header design{1142x104}](/images/blog/ui-redesign-custom-tls/new-header.png)

The environment's inputs previously available in the header (name, port, prefix, and latency) are now in the "Settings" tab.
To make it more convenient, you can edit the environment's name in both the "Settings" page and the environment menu (see below).

### Environment's menu improvements

Following the header redesign, we made some modifications to the environment menu:

- You can edit the environment's name directly in the menu.
- We removed the "CORS" icon as the option is mostly always enabled and moved the "HTTPS" icon next to the URL.
- The "Truncate long paths" option in the application settings (`ctrl+comma`) that apply to the long endpoint paths also applies now to the environment address. If enabled, environment URLs won't be truncated anymore.

![new environment menu design{333x154}](/images/blog/ui-redesign-custom-tls/new-env-menu.gif)

### Headers and rules delete button

All the headers and rules lists now use a "click-to-confirm" delete button that requires two click to effectively delete an item:

![click and confirm{799x154}](/images/blog/ui-redesign-custom-tls/click-to-confirm.gif)

### Responses list improvements

The route responses menu is now split into two lines as it was becoming too cluttered and could cause visual bugs on smaller screens. We also added more information to the response menu:

![responses dropdown menu{806x92}](/images/blog/ui-redesign-custom-tls/responses-menu.png)

### File and body information display improvements

We removed the redundant Content-Type information in the "Status & body" tab that could be confusing and replaced it with a small "footer" under the body editor. This footer will always display the effective Content-Type taking the following order of precedence into account:
**environment headers → file mime type → route headers**

![file body information{806x503}](/images/blog/ui-redesign-custom-tls/file-body-info.png)

## Custom TLS certificate

You can now provide a custom TLS certificate to serve your mocks over HTTPS in PKCS12 or PEM format. Mockoon still uses the same self-signed certificate as before if you don't provide a custom one. Head over to the documentation for more information about the [TLS configuration](docs:server-configuration/serving-over-tls).

![add custom TLS certificate{978x466}](/images/blog/ui-redesign-custom-tls/custom-tls-settings.png)

## New response rules for cookies

A new type of response rule is available to check a cookie's value or presence:

![cookie response rules choice{1214x175}](/images/blog/ui-redesign-custom-tls/new-cookie-response-rule.png)

---

Be sure to check the [full changelog](https://github.com/mockoon/mockoon/releases/tag/v1.17.0) to discover all the improvements and fixes.
