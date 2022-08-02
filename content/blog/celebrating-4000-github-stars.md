---
title: Celebrating 4000 GitHub stars 🎉
excerpt: Let's celebrates this milestone by doing a recap of Mockoon's past year's news, announcements, new features and sponsors
date: '2022-07-21'
image: mockoon-celebrating-4000-github-stars.png
imageAlt: Mockoon user interface
imageWidth: 1200
imageHeight: 400
meta:
  title: Celebrating 4000 GitHub stars 🎉
  description: Let's celebrates this milestone by doing a recap of Mockoon's past year's news, announcements, new features and sponsors
---

Mockoon reached **4000 stargazers on GitHub** 🎉. We would like to thank our awesome community for following us since the beginning and recommending Mockoon to their friends and coworkers!

We will use this fantastic milestone to recap some of Mockoon's news of the past year.

## Sustained user growth

There are thousands of users using Mockoon every day. We also crossed the **250k downloads** mark several months ago, and it shows no sign of stopping. From solo developers to teams at Fortune 500 companies, you all find something in Mockoon that you like. We are thrilled and proud that our work is helping you work better and faster.
It's also rewarding to randomly meet more and more people (IRL!) using our tools.

## Lots of new features

Last year, we added many features for the desktop application and the CLI. It's impossible to list all of them here, but here is some major ones:

- We switched to a [new way of storing your mocks](/blog/new-storage-system-git-data-sharing/) to make them easily shareable over git and directly launch them with the CLI without relying anymore on an import/export feature.
- We added a [file monitoring option](/blog/file-monitoring-mock-api-samples/#file-monitoring) for the desktop application to automatically reload the application when an external change to a mock file is detected.
- Mockoon now supports [custom TLS certificates](/docs/latest/serving-over-tls/#provide-your-own-certificate) to serve your mock securely without relying on Mockoon's self-signed certificate.
- We improved the system of [rules](/docs/latest/route-responses/dynamic-rules/) by adding a lot of features: support for cookies, reordering, rule inversion (coming soon!), rule disabling (coming soon!), `multipart/form-data` support (coming soon!)
- We removed Google Analytics from the desktop application to increase your privacy.
- We added [XML support](/docs/latest/xml-support/) for both templating helpers and rules.
- We added more binaries formats: Apple Silicon, Windows portable, and Microsoft Store.
- The [CLI](https://github.com/mockoon/mockoon/tree/main/packages/cli#mockoon-cli-start) can now run multiple mocks at once, log the complete HTTP transaction (`--log-transaction` flag), and run as a foreground process (`--daemon-off` flag).

We also started working on a **GraphQL mocking** feature. It's progressing well, and we are satisfied with the Proof of Concept. However, it is a complex feature with a different approach than the HTTP endpoints. So, we want to take our time to do it right and build something useful. Stay tuned, as it will probably be released later this year.

## Thousands of mock samples and Mockoon's embedded button

We added [thousands of mock samples](/mock-samples/category/all/) to help you get started with mocking your favorite API. If you have installed the application, you can run the mock API in one click.
You can also embed a [Mockoon button](/integrations/embedded-button/) in your API documentation if you want to offer the same feature to your users.

## More content creation

After years of close to zero content writing, we made it one of our priority. After years of user support, it became clear that we needed more content to help our users getting started. So we worked hard to improve our [documentation](/docs/latest/about/) and [FAQ](/faq/) and cover more topics.

We also have many [tutorials](/tutorials/) and [articles](/articles/) to help you get started with API mocking or tutorials specific to Mockoon. We also started covering simple API calls or creation with popular frameworks and languages. Two examples to illustrate this: [Python/Flask API creation](/tutorials/create-api-python-flask-mocking/) and [Node.js API call using node-fetch](/tutorials/nodejs-api-call-and-mocking/).

## Open-source and sponsorship

Mockoon is still, after five years, an open-source tool built by volunteer maintainers. In 2021, our main maintainer [@255kb](https://github.com/255kb) quit his job and decided to dedicate his whole time to Mockoon. We have long-term plans for Mockoon, but none of them are putting into question the open-source nature of the project.

So, to continue working on this project, we recently started looking for sponsors. And we were excited to announce in July that Mockoon was chosen by AppWrite as the first sponsored open-source project in their [OSS Fund](https://dev.to/appwrite/appwrite-oss-fund-sponsors-mockoon-119k). AppWrite is now our first Platinum sponsor 💪

[![Appwrite logo{300x64}](/images/sponsors/appwrite-300.png)](https://appwrite.io/)

If you like our application, please consider sponsoring us too and join all the [Sponsors and Backers](https://github.com/mockoon/mockoon/blob/main/backers.md) who helped this project over time!

[![sponsor button{300x86}](/images/sponsor-btn.png)](https://github.com/sponsors/mockoon)

## New enterprise services

As part of this search for sustainability, you may have noticed that we are now offering [enterprise services](/enterprise/): live support, applications deployment, bug prioritization, custom development, etc. Do not hesitate to reach out if your company needs such services.
