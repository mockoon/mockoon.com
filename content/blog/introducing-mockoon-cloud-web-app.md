---
title: 'Introducing Mockoon Cloud Web App'
excerpt: We are excited to announce the release of a new web app for Mockoon Cloud, designed to enhance your API mocking experience.
date: '2025-04-02'
image: introducing-mockoon-cloud-web-app.png
imageAlt: Mockoon web user interface in a browser
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - product
  - dev blog
author: guillaume
meta:
  title: 'Introducing Mockoon Cloud Web App'
  description: We are excited to announce the release of a new web app for Mockoon Cloud, designed to enhance your API mocking experience.
---

As we settle into 2025, we're excited to share what we’ve been working on at Mockoon earlier this year: **a new web app for Mockoon Cloud**! This web application is designed for teams that want to fully embrace Mockoon Cloud and collaborate on their mock APIs without needing to install desktop software.

## Mockoon Cloud Web App

We've listened to your feedback and are excited to announce the release of a new web app for Mockoon Cloud. This web application is **based on the desktop version** while providing the **flexibility of a browser-based experience**.

The web version of Mockoon is ideal for teams and individuals who need to **collaborate** on their mock APIs **without installing desktop software** or for those working in environments with installation restrictions.

![mockoon web app screenshot](/images/blog/introducing-mockoon-cloud-web-app/mockoon-cloud-web-application.png)

Another advantage of the web app is that it will always be updated with the latest features and improvements, receiving new functionality faster than the desktop application. This ensures you can focus on your work without needing to manage software updates.

> 🔑 You can access the web app at [app.mockoon.com](https://app.mockoon.com) and log in with your Mockoon account credentials. Once logged in, you can manage your synchronized and deployed environments directly from the web interface. The web application currently requires a paid Mockoon Cloud plan, but we are considering introducing a free tier in the future to allow more users to try it before committing to a plan.

## Challenges of building a web app

Building a web application in 2025 is standard, but after seven years of developing a desktop application, creating a web version that works seamlessly with our cloud service presented some **challenges**.

Mockoon is a feature-rich application, and we aimed to provide a web experience as close as possible to the desktop version while accounting for cloud-specific constraints.

The desktop application, built with Electron, has access to the local file system and can run a local server, enabling features like file serving, custom TLS certificates, and other local-specific options. These capabilities are not available in a browser environment, requiring some adjustments for the web app.

To ensure smooth integration with our cloud service, we had to disable features that are not relevant in a web context, such as file serving and custom TLS certificates. Additionally, implementing features like request logs, recording, and data bucket parsing status without direct access to a locally running mock required a different approach. We leveraged the **[Admin API](docs:admin-api/overview) exposed by each API mock** to bridge this gap, which also lays the groundwork for future functionality, such as a REST API for managing mocks.

Finally, we updated the user interface to **improve usability in a cloud-based workflow**, making the web app more intuitive and accessible, even for users new to Mockoon.

## Two applications, one Mockoon

The web app **will not replace the desktop application**, which remains the core of Mockoon. **Both options serve different use cases** and provide distinct benefits.

The web app is well-suited for teams that need to collaborate on mock APIs without installing desktop software.

The desktop application, on the other hand, is ideal for developers who need to **run mocks locally**, access local files and servers, and utilize the full range of Mockoon's features, including self-hosting, custom TLS certificates, and file serving.

## Sustainability and shifting focus to Mockoon Cloud

Mockoon began as a side project in 2017 and has since evolved into a powerful, feature-rich API mocking tool used by thousands of developers and teams worldwide. We take pride in what we’ve built and in the community that has grown around it.

Maintaining and improving an open-source project like Mockoon requires a **sustainable long-term approach**. We remain [committed to keeping Mockoon free and open-source](/blog/our-commitment-open-source-community/), but we also need to ensure its continued development and support. We discussed this in our [2024 retrospective](/blog/seven-years-2024-retrospective/#mockoon-cloud-and-the-path-to-sustainability).

Mockoon is now a **mature and stable tool**. While there will always be room for incremental improvements, our **priority** is ensuring that Mockoon **remains actively maintained in the long run**.

To achieve this, we are **shifting our focus slightly toward Mockoon Cloud**. Since its launch in mid-2024, we have been working on improving the service. Its growth has been encouraging, and we are committed to further investing in its development.

Mockoon Cloud is our path to making Mockoon **sustainable** as an open-source project, keeping it **free** for the community while ensuring its **long-term independence**.

Thank you for your continued support and feedback. We are excited about the future of Mockoon and look forward to sharing more updates with you soon!
