---
title: September 2023 news
excerpt: 'Mockoon quarterly news for September 2023: new releases, global rules, GitHub Action, and more.'
date: '2023-10-06'
image: september-news.png
imageAlt: mockoon logo with screenshot
imageWidth: 1200
imageHeight: 400
meta:
  title: September 2023 news
  description: 'Mockoon quarterly news for September 2023: new releases, global rules, GitHub Action, and more.'
---

Welcome to our first blog quarterly news! Usually sent in the form of a newsletter, we decided to publish it on our blog too.

In this update, we have a lot to share since June, including exciting new features, upcoming developments, and our commitment to privacy. Read on to discover what's been happening in the world of Mockoon.

> 🎂 Also, Mockoon just turned 6 years old. The MVP was released in September 2017. Time flies...

## 📦 New releases

We have released three new versions since the last June newsletter, as we have moved to a monthly release schedule. [4.0.0](https://mockoon.com/releases/4.0.0/) (July), [4.1.0](https://mockoon.com/releases/4.1.0/) (August) and [5.0.0](https://mockoon.com/releases/5.0.0/) (September). Among the new features and changes:

- **JSONPath support**: Mockoon now supports JSONPath alongside object-path everywhere a path to an object property can be provided: in templating helpers like data, body and queryParam, in the response rules path, etc. 📘&nbsp;[Read more](https://mockoon.com/releases/5.0.0/#jsonpath-support)
- **Logging**: Logging has been standardized across all Mockoon applications and packages. The logs will now be formatted the same way in the desktop application log file, the CLI's console and log file, and the serverless package's console logging. 📘&nbsp;[Read more](https://mockoon.com/releases/4.0.0/#logs-standardization-and-credentials-filtering)
- **CLI changes**: We refactored the CLI to remove the dependency to PM2, which was subject to some security vulnerabilities. Another reason for this refactoring, was that, having multiple other ways to manage running CLI instances (i.e. containers), embedding a process manager felt a bit outdated and overkill. The CLI is now easier to maintain and more lightweight. As a consequence multiple flags and options disappeared, and running the CLI as a foreground process is now the default. 📘&nbsp;[Read more](https://mockoon.com/releases/4.0.0/#cli)
- **Response fallback mode**: A new response mode has been added. It allows you to fallback to the next route and ultimately the proxied server when no response rules match instead of serving the default response. 📘&nbsp;[Read the documentation](https://mockoon.com/docs/latest/route-responses/multiple-responses/#fallback-mode)
- **HTTP methods**: It is now possible to create routes that will match any HTTP method by selecting "All methods" in the routes method dropdown. 📘&nbsp;[Read more](https://mockoon.com/releases/5.0.0/#routes-targeting-all-http-methods)
- **OpenAPI support improvements**: When exporting to OpenAPI format, inline bodies are now used to populate the example property. 📘&nbsp;[Read more](https://mockoon.com/releases/4.0.0/#openapi)
- **And more**: [templating support in rules](https://mockoon.com/releases/4.1.0/#dynamic-rules-with-templating), [new array filtering templating helper](https://mockoon.com/releases/4.1.0/#changes-to-templating-helpers).

## 📏 Global rules

Thanks to the [response fallback mode](https://mockoon.com/docs/latest/route-responses/multiple-responses/#fallback-mode) introduced in [v4.1.0](https://mockoon.com/releases/4.1.0/), it is now possible to create wildcard routes containing global rules, such as validating the presence of an Authorization header or verifying that the request body contains a specific property. Head over to our new [Global routes with rules](https://mockoon.com/docs/latest/route-responses/global-routes-with-rules/) documentation section to learn how to create reusable responses and rules and apply them to all your routes.

![application screenshot with a wildcard route](/images/blog/september-2023-news/create-wildcard-route.png)

## 🎬 New GitHub Action

We have officially launched a [GitHub Action](https://github.com/marketplace/actions/mockoon-cli) for the CLI, allowing you to effortlessly run your mocks within your GitHub CI environment.

![screenshot of mockoon github action code](/images/blog/september-2023-news/mockoon-github-action-code-screenshot.png)

No complex setup is required. Simply add the action to your workflow and provide a path to a local data file, or a URL, and you're good to go.

## 👷 Mockoon Pro data synchronization

The development of Mockoon's Pro data synchronization feature for solo developers is progressing smoothly. We anticipate releasing this feature as part of the Pro Solo plan by the end of this year. Concurrently, we have also begun working on the team collaboration feature, which shares similarities with the solo data synchronization. You can look forward to this feature being available in the Team and Enterprise plans in the first quarter of next year.

## 📊 Ditching Google Analytics for the website

We have recently removed Google Analytics from our website as part of our commitment to enhancing privacy. We now exclusively track the number of page views and referrals, using a somewhat old-school approach similar to a simple visit counter. We've come to realize that many metrics provided by traditional analytics tools are not the actionable insights we are looking for. So, why not keep it simple?

## 🤝 OSS friends

We have partnered with several other open-source projects that we admire and wish to support. Feel free to [explore them!](https://mockoon.com/oss-friends/)

![](/images/blog/september-2023-news/oss-friends.png)

## 🛠️ Custom services

We now offer [custom services](https://mockoon.com/custom-services/) to help you get started with Mockoon through training, support, and custom development. [Contact us](https://mockoon.com/contact-form/) for more information.
