---
title: December 2023 news
excerpt: 'Mockoon quarterly news for December 2023: new releases, callbacks, global variables, API playground, and more.'
date: '2024-01-02'
image: december-2023-news.png
imageAlt: mockoon logo with screenshot
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - releases
author: guillaume
meta:
  title: December 2023 news
  description: 'Mockoon quarterly news for December 2023: new releases, callbacks, global variables, API playground, and more.'
---

Welcome to the last quarterly news of the year 2023! We wish you a happy New Year 2024, full of API mocking! 🎉

> 💡 You can subscribe to this quarterly news by [signing up for our newsletter](/newsletter/).

In this update, we have a lot to share since [September](/blog/september-2023-news/), including exciting new features, upcoming developments, and a new API playground. Read on to discover what's been happening in the world of Mockoon.

## 📦 New releases

We have released three new versions since September:

- **[October's v5.1.0](/releases/5.1.0/)** with a new command palette (see below), Faker.js v8 migration, and support for [Range headers](/docs/latest/response-configuration/file-serving/#serving-a-range-of-bytes-from-a-file).
- **[November's v6.0.0](/releases/6.0.0/)** with the [callbacks](/docs/latest/callbacks/overview/) feature and new [CLI import/export commands](https://github.com/mockoon/mockoon/tree/main/packages/cli#import-command).
- **[December's v6.1.0](/releases/6.1.0/)** with [CRUD filtering and searching](/docs/latest/api-endpoints/crud-routes/#filtering-sorting-and-pagination-on-the-main-get-route) and [global variables](/docs/latest/variables/global-variables/).

## ☎️ Callbacks

Callbacks are a way to **make one or more HTTP calls after an entering request** reaches your route. This is useful to call other APIs or micro-services, or to trigger a webhook. Callbacks are fully configurable and can be activated after a certain delay:

![callbacks configuration interface{1310x476}](/images/blog/december-2023-news/callbacks-configuration-interface.png)

![callback invocation interface{1310x476}](/images/blog/december-2023-news/callbacks-invocation-interface.png)

📘&nbsp;[Read the documentation](/docs/latest/callbacks/overview/)

## 🗃️ CRUD filtering and searching

This new feature adds **search** and **filter** options to the **main GET endpoint of a CRUD route**, using query parameters. Many operators are available to filter your data like `_eq`,`_gt`,`_lte`, or `_start`. They can filter on any property of your data, including nested properties using the dot notation:

`/users?name_eq=John&age_gt=18&address.city_start=New`

You can also use the search parameter to search for a string in all properties of your data:

`/users?search=john`

📘&nbsp;[Read the documentation](/docs/latest/api-endpoints/crud-routes/#filtering-sorting-and-pagination-on-the-main-get-route)

## 🌐 Global variables

Mockoon now supports **global variables** that can be set and accessed using the `setGlobalVar` and `getGlobalVar` helpers at runtime. It's the perfect way to share data between routes or to store data that needs to be reused in multiple places, like simulating an authentication workflow.

```handlebars
{{setGlobalVar 'myVar' 'myValue'}}
{{getGlobalVar 'myVar'}}
```

These variables can be used anywhere templating is supported, like the response body or headers. Their values are reset when the environment is stopped or restarted.

📘&nbsp;[Read the documentation](/docs/latest/variables/global-variables/)

## 🎨 Command palette

We added a new **command palette** in the desktop application to quickly access all the application's features. You can open it by pressing `Ctrl+P` (Windows/Linux) or `Cmd+P` (MacOS). You can also access it by clicking on the icon in the header.

It currently supports most common actions like creating new environments, starting/stopping them, opening the settings, etc. You can also search for any environment, route, or data bucket by typing their name or path. We will add more actions in the future. Let us know what you think, and do not hesitate to suggest new actions on our [Discord server](https://discord.gg/FtJjkejKGp) or [GitHub discussions](https://github.com/mockoon/mockoon/discussions).

![screenshot of the desktop application with the command palette opened{1410x568}](/images/blog/december-2023-news/command-palette.png)

## 🔌 Upcoming WebSocket support

One of our contributors started working on adding **support for WebSockets**. A long-awaited feature that will surely be appreciated by many of you.
Feel free to give feedback on [his pull request](https://github.com/mockoon/mockoon/pull/1214). Now is the time! 😉

## 🛝 New API playground

We have created a new [API playground](https://mockoon.com/playground/). It is a free and ready-to-use mock API offering multiple CRUD endpoints with fake data. The perfect tool to quickly prototype your frontend applications, test your API calls, or learn about APIs.

The API playground is available at `https://playground.mockoon.com` and was built with Mockoon, of course!

![screenshot of the API playground in mockoon desktop{1175x632}](/images/blog/december-2023-news/creating-crud-endpoints-mockoon-desktop.png)

## 🔎 Website search

We added a **search feature** to the website covering all the pages, tutorials, documentation, or mock samples. No more being lost in the documentation!

![screenshot of the search modal on the website{1335x850}](/images/blog/december-2023-news/website-search.png)
