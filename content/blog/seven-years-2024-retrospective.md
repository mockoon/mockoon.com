---
title: 2024 retrospective and Mockoon 7th birthday
excerpt: Let's take a look back at 2024 (and 2023?) and celebrate Mockoon's 7th birthday!
date: '2024-11-11'
image: seven-years-2024-retrospective.png
imageAlt: Mockoon user interface with a cake
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - open-source
  - dev blog
author: guillaume
meta:
  title: 2024 retrospective and Mockoon 7th birthday
  description: Let's take a look back at 2024 (and 2023?) and celebrate 7 years of Mockoon!
---

Too busy building a **fantastic open-source project and cloud**, we didn't even notice that the [last retrospective article](/blog/five-years-2022-retrospective/) was in 2022! Let's take the occasion of Mockoon's 7th birthday to look back at 2024 and maybe even a bit of 2023 and at the things to come.

And we promise next time we won't wait two years to write a retrospective article!

## 🎂 7 years old!

Mockoon's [first release](https://github.com/mockoon/mockoon/releases/tag/v0.1.0) was a bit more than 7 years ago, in August 2017. It's been a long journey since then, and we are proud of what we have achieved so far. We have come a long way from a simple mock server to a powerful tool that allows you to create complex mock APIs with rules, templates, fake data, proxy, recording, JSON databases, guards, webhooks, and much more.

![#sub#Mockoon's v0.1 interface{1286x893}](/images/blog/seven-years-2024-retrospective/v1-interface.jpg)

In an industry where novelty and hype drive all the attention (half joking), you could ask if this project is still alive and relevant after 7 years. And you would be right to ask. After all, it's a long time. We could answer "yes!", that it is more relevant than ever, but you would have to take our word for it.

We like to imagine that numbers and facts speak for themselves. 🙂

So, first numbers:

- Mockoon has been downloaded 800k times, which is 500k more since the [last retrospective article](/blog/five-years-2022-retrospective/) one year and a half ago.
- Our [GitHub stars count](https://github.com/mockoon/mockoon/stargazers) is now above 6500, which is also a significant increase from the ~4000 we had in early 2023.
- Our [Docker image](https://hub.docker.com/r/mockoon/cli) has been pulled more than 3 million times.
- Our number of daily and monthly active users is growing steadily.
- We published 8 releases in 2024 including 3 major versions (see below for an [overview of the latest features](#an-overview-of-the-latest-features)).

We agree these numbers are but vanity metrics. Maybe more importantly, every day we talk with new users, individuals, and companies, who tell us how Mockoon is helping them in their daily work. Nearly all support requests or GitHub issues start with a thank you note, which is more than we could have hoped for.

We could continue to talk about the project's success forever but I will just say that we are grateful for the support we have received from the community over the years. And we hope to continue to build a great product for many years to come.

![#sub#Our users thank you notes!](/images/blog/seven-years-2024-retrospective/thank-you-cloud.png)

## An overview of the latest features

Many of the recent features were introduced with one goal in mind: making Mockoon more powerful while avoiding UI clutter and keeping the user experience as simple as possible. We must admit that it's not always easy to find the right balance between power and simplicity. We are constantly trying to improve the application, and we are always looking for feedback from our users to help us make the right decisions.

Among the most important features added in the past year, we can mention:

- Many improvements to the **CRUD routes**: The [CRUD route](/docs/latest/api-endpoints/crud-routes/) feature was introduced in March 2023 and has been improved a lot since then with auto-incremented IDs, filtering, and more.
- **Callbacks and webhooks simulation**: Mockoon now supports [callbacks and webhooks simulation](/docs/latest/callbacks/overview/). We recently published a tutorial on how to use this feature to [simulate a payment gateway](/tutorials/simulate-webhooks-and-callbacks/).
- **WebSocket support**: Mockoon now supports [WebSockets](/docs/latest/api-endpoints/websockets/), allowing you to test your WebSocket-based applications like chat applications or real-time dashboards.
- **Global variables**: You can now [define global variables](/docs/latest/variables/global-variables/) that can be used across all your routes.
- **Environment variables support**: You can [access your system environment variables](/docs/latest/variables/environment-variables/) in your routes using specific helpers.
- **Admin API**: An [admin API](/docs/latest/admin-api/overview/) was introduced to make Mockoon more scriptable and automate some tasks. It allows you to reset the state or retrieve certain parts of the application, like the data buckets or the global variables. More features are planned for the admin API in the future. Ultimately, we want to make Mockoon fully programmable with this API, but there is still a lot of work to do.
- **Better rules system**: From JSON schema validation support to custom templating, the [rules system](/docs/latest/route-responses/dynamic-rules/) has been improved a lot in the last year.

These are just a few examples of the many features that have been recently added to Mockoon. We invite you to check out the [releases page](/releases/) for a complete list.

## Mockoon Cloud and the path to sustainability

What kept us exceptionally busy in 2023 and 2024 was the development of Mockoon Cloud.

When [Mockoon was selected for the GitHub Accelerator program in 2023](/blog/github-accelerator/), we had the opportunity to work with the GitHub team and learn a lot about building a sustainable open-source project. Long story short, it's really hard!

We explored this a bit in a [previous blog post](/blog/our-commitment-open-source-community/) which was the occasion to reflect on the sustainability of the project and reiterate our commitment to the open-source community.

Based on the users' feedback, our own experience, and observations of other open-source projects, we decided to build a SaaS to complement the open-source project. The goal was to provide advanced features for teams and companies that need more than what the open-source project can offer while keeping the open-source project free and open to everyone.

At the end of 2023, the first major feature was released: the ability to [collaborate in real-time with your team](/blog/data-synchronization-team-collaboration-release/) in the desktop application.

![#sub#Mockoon Cloud team collaboration](/images/blog/seven-years-2024-retrospective/team-collaboration.png)

And after months of work, we released earlier this summer, the [first version of our cloud deployment feature](/blog/mock-api-cloud-deployments-release/). It allows you to deploy your mock APIs to the cloud and share them with your team with a simple link.

![#sub#Mockoon Cloud deployments](/images/blog/seven-years-2024-retrospective/deploy-environment-management-dialog.png)

We are excited about the future of Mockoon Cloud and we are working hard to add more features to it. We were also careful to keep the open-source project and the cloud services separate. If you were a user before the cloud, absolutely nothing has changed for you. And if you need these advanced features for your team, just [give Mockoon Cloud a try](/pricing/).

Last but not least, we are generating revenue which these services which is very encouraging. Every month, more companies are subscribing to Mockoon Cloud. It seems that we are on the right track to guarantee a sustainable future for the project and make a living out of it without external funding. The future will tell.

## Contributors interviews

During the last year, we had the opportunity to interview some of our recent contributors. We wanted to know more about them, their motivations, and their experience with Mockoon. It was also a way to put a spotlight on the people who help us make Mockoon better every day. All these people are volunteers and we are humbled by their dedication to the project. We would like to thank them once again for their hard work.

We published these interviews on our blog, and we invite you to read them if you haven't already.

Some examples: [Lukas, from OneFootball](/blog/contributor-spotlight-lukas-spiss-onefootball/) or [Bradley, from AppWrite](/blog/contributor-spotlight-bradley-schofield-appwrite/)

![#sub#Our interviewees!](/images/blog/seven-years-2024-retrospective/contributors-map.png)

## New tutorials and tools

We are not planning to make an exhaustive list of all the new content we created in the last year, but we think it's worth mentioning that we published new tutorials and tools to help you get the most out of Mockoon.

These tutorials cover features recently added to Mockoon:

- [How to use global variables and state](/tutorials/use-global-variables-state/)
- [How to use environment variables](/tutorials/use-environment-variables/)
- [How to simulate webhooks and callbacks](/tutorials/simulate-webhooks-and-callbacks/)
- [How to create an endpoint serving a static file](/tutorials/create-endpoint-serving-static-file/)

We also added many new tools to our [tools page](/tools/). Some can be particularly useful when working with Mockoon, like the [JSON object path evaluator](/tools/json-object-path-evaluator/) or the [date and Unix timestamp converter](/tools/date-unix-timestamp-converter-formatter/).

## What's next?

We have many ideas for the future of Mockoon. Some are already in progress, and some are still in the brainstorming phase. Here are a few things we are working on:

- **More cloud features** like custom domains, environment variables support, new deployment regions, etc.
- **Quality of life improvements for the desktop application** like a list of recently opened projects, multi-selection in the routes list, better visibility of the data buckets state, and maybe an undo feature.

You can follow our progress using the [public roadmap](/public-roadmap/). We are always open to new ideas and suggestions, so don't hesitate to [open a new discussion on GitHub](https://github.com/mockoon/mockoon/discussions).

---

Thank you for reading! See you in one year for the next retrospective article! 🎉
