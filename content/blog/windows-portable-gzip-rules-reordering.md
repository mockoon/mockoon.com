---
title: New Windows portable version and more in v1.15.0
excerpt: Discover Mockoon's new v1.15.0 release with Windows portable version, rules reordering, gzip decoding and more
date: '2021-08-18'
image: windows-portable-rules-reordering.png
imageAlt: Mockoon logo with suitcase
imageWidth: 1200
imageHeight: 400
meta:
  title: New Windows portable version and more in v1.15.0
  description: Discover Mockoon's new v1.15.0 release with Windows portable version, rules reordering, gzip decoding and more
---

This new release comes with the usual load of bug fixes and minor improvements you can check on the [v1.15.0 release page](https://github.com/mockoon/mockoon/releases/tag/v1.15.0).

You will find below some new features that we would like to highlight:

## Windows portable version

A portable version for Windows is now available. Head over to our [download page](/download/) to download it. When using the portable version, the data folder will be located next to the executable. It will contain Mockoon's application files, your settings, and environments in `./mockoon-data/storage/environments|settings.json`. In the non-portable application, these data files are usually stored in your use data folder in `c:/Users/xxx/AppData/Roaming/mockoon/storage`:

![windows portable version{606x365}](/images/blog/windows-portable/windows-portable.png)

## Rules reordering

Rules can now be reordered with a simple drag and drop. It allows you to influence the order in which the rules are interpreted. You can check our [documentation](docs:route-responses/dynamic-rules) for more information on rules order interpretation.

![Drag and drop rules to reorder them{1008x191}](/images/docs/route-response-rule-reorder.gif)

## Listen to localhost only

A new option is available that allows your mocks API to listen to localhost (and 127.0.0.1) only, instead of all network adapters (0.0.0.0). This feature can be easily enabled for each environment in the settings:

![tick the localhost only checkbox{934x300}](/images/docs/enable-localhost-only.png)

This option is also available in the [CLI](/cli/)'s latest version but is even more customizable. You can pass any hostname at runtime `mockoon-cli ... --hostname 192.168.x.x.` to listen on a specific network adapter on your machine.

## 404 fallback

A new option has been added to the route response to automatically send a 404 status when a file was not found. This option only overrides the status code and will revert to serving the body present in the editor instead of the file.

![tick the 404 fallback checkbox{753x213}](/images/docs/enable-404-fallback.png)

## Gzip decoding

To make debugging easier, compressed bodies received from proxied APIs are now automatically decompressed and displayed in clear in the logs page:

![gzip is decoded{651x420}](/images/blog/windows-portable/gzip-decoding.png)

This feature currently supports gzip, brotli and deflate.
