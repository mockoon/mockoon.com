---
title: New release with endpoints filtering and improved security
excerpt: Discover Mockoon's new v1.13.0 release with endpoints filtering, improved security and a revamped templating documentation
date: '2021-04-21'
image: api-filtering-improved-security.png
imageAlt: Mockoon logo with secure shield
imageWidth: 1200
imageHeight: 400
tags:
  - releases
author: guillaume
meta:
  title: New release with endpoints filtering and improved security
  description: Discover Mockoon's new v1.13.0 release with endpoints filtering, improved security and a revamped templating documentation
---

Spring is here, and a new release of Mockoon 🌻. It comes with a usual batch of bug fixes and minor improvements you can check on the [GitHub release page](https://github.com/mockoon/mockoon/releases/tag/v1.13.0).

There are also three new features and improvements that we want to share with you today.

## New API endpoints filtering feature

In this iteration, we worked on a long-awaited feature. Nothing big or complex, but one of those improvements that make developers' life easier: endpoints filtering.
It was requested a lot as many of you have to scroll among many mock endpoints. Only one step to use it, start typing some text in the filtering input, and it will filter the API endpoints by path or documentation.

![api endpoints filtering{610x266}](/images/tutorials/misc/routes-filtering.gif)

We are already planning to improve this feature in the future, notably by adding keyboard shortcuts.

## Improved security

Even if invisible, the main focus of this release was the application security and Electron's best practices. After several weeks of work, Mockoon is now more secure by a combination of enabling Chrome [sandboxing](https://www.electronjs.org/docs/latest/tutorial/sandbox/) and Electron [context isolation](https://www.electronjs.org/docs/latest/tutorial/context-isolation/). Node.js integration has also been disabled, and we stopped relying on Electron's `remote` module in the renderer process.

These changes have been pushed by Electron's team, and some of them were enabled default in recent Electron releases. We took it on ourselves to follow all these best practices and rewrote a big part of the application architecture. The main idea was to stop using Node.js libraries and features like `fs` directly from the renderer and instead communicate with the main process through the Inter-Process Communication (IPC). The main process would then perform the requested task and send the result to the renderer process. This was not a small change and required a lot of testing.

Aside from the improved security and prevention of future vulnerabilities like XSS and RCE, we also saw slightly better performances overall.

## Revamped documentation

Lastly, we spent time rewriting the templating documentation to better explain how and where to use all the available helpers. We also documented all the helpers, including hidden ones as `ipv4`, `tld`, `hexColor`, etc.

Templating documentation is now split in four parts:

- a [global overview](docs:templating/overview) (how and where).
- the list of Mockoon's [helpers](docs:templating/mockoon-helpers).
- the list of Mockoon's [request helpers](docs:templating/mockoon-request-helpers).
- more information on how to use [Faker.js library helpers](docs:templating/fakerjs-helpers).

On a lower level, we also split the route responses documentation to better surface the rules documentation. Again, this section is now split into two parts:

- [how to configure multiple responses](docs:route-responses/multiple-responses).
- [how to add rules](docs:route-responses/dynamic-rules) with a slightly improved explanation on how rules are interpreted.
