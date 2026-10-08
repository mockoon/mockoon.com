---
title: 2026 retrospective and Mockoon 9th birthday
excerpt: Let's look back at 2026 and celebrate Mockoon's 9th birthday!
date: '2026-10-08'
image: nine-years-2026-retrospective.png
imageAlt: Mockoon 9th birthday celebration
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - open-source
  - dev blog
author: guillaume
meta:
  title: 2026 retrospective and Mockoon 9th birthday
  description: Let's look back at 2026 and celebrate 9 years of Mockoon!
---

It feels like only yesterday we were celebrating our [8th anniversary](/blog/eight-years-2025-retrospective/), yet another busy year has already passed. In 2026, we reached an important community milestone, made Mockoon more **private** and responsive to **security updates**, and took a major step toward bringing our collaboration platform to **your own infrastructure**.

Let's look back at the highlights of Mockoon's ninth year.

## 🎂 9 years old and one million downloads!

Mockoon's first release was around October 2017 followed by its first [open-source release](https://github.com/mockoon/mockoon/releases/tag/v0.1.0) in August 2018. Nine years later, what started as a small desktop application has become a complete API mocking ecosystem spanning a desktop app, web app, CLI, Docker image, cloud platform, and now a self-hosted collaboration platform.

This year, Mockoon crossed **one million downloads** (1,2 million at the time of writing). It is a milestone we could only reach thanks to everyone using the applications, opening issues, contributing code, writing about Mockoon, and recommending it to others.

The number itself is worth celebrating, but what matters most is what it represents: developers and teams relying on Mockoon every day to design, test, and demonstrate their APIs. Thank you for continuing to make this project useful and sustainable.

## Six releases and a faster cadence

Since our previous retrospective, we shipped versions [9.4.0](/releases/9.4.0/) through [9.9.0](/releases/9.9.0/). These six releases improved the desktop app, web app, CLI, and cloud platform while strengthening security and reliability.

Some of our favorite additions include:

- A **revamped OpenAPI import workflow**, supporting URLs, local files, and the clipboard, with a preview and the ability to [re-import a specification into an existing mock](/releases/9.6.0/#openapi-re-import).
- **Callbacks with relative URLs**, making it easier to call another endpoint in the same mock without hard-coding a host and port.
- **Live mock updates**, so most configuration changes are applied immediately without restarting the local server.
- A **multi-select mode** for routes, data buckets, and callbacks, including bulk duplicate and delete actions.
- A new **MCP server in the CLI**, allowing compatible AI assistants to list, start, and stop local mock APIs.
- **WebSocket support in Mockoon Cloud**, alongside many improvements to synchronization and offline editing.

![#sub#OpenAPI re-import summary{1200x675}](/images/releases/9.6.0/reimport-openapi-summary.png)

We also [moved to a monthly-to-bi-monthly release cycle](/blog/roadmap-update-faster-releases-self-hosting-focus-2026/). Smaller and more frequent releases help us deliver fixes sooner, especially security updates for the CLI and Docker image, while making each update easier to review and test.

## Strengthening security with GitHub

This year, Mockoon also [participated in GitHub's Secure Open Source Fund](/blog/securing-mockoon-github-secure-open-source-fund/), alongside projects such as Node.js, Jenkins, Keycloak, Mermaid, and Webpack. The program combined funding, training, and direct guidance from GitHub's Security Lab and other security experts.

During the program, we reviewed our security posture and strengthened protections across the project. We improved GitHub Actions permissions and branch protections, reviewed our CodeQL, Dependabot, and secret-scanning configurations, formalized our incident response and CVE management processes, and adopted npm trusted publishing. Version 9.4.0 also became our [first release to include a Software Bill of Materials (SBOM)](/releases/9.4.0/#distributionsecurity).

Beyond these concrete improvements, the program helped us build stronger security practices for future releases and respond more effectively when vulnerabilities are reported. We are grateful to GitHub and all the experts and maintainers who shared their experience with us.

## Mockoon Pro: bringing collaboration to your infrastructure

The biggest product milestone of 2026 is the launch of [**Mockoon Pro self-hosted in beta**](/blog/mockoon-pro-self-hosted-beta/).

Over the past years, Mockoon Cloud taught us what teams need beyond a local API mocking tool: real-time collaboration, browser access, shared environments, centralized administration, and a simple way to deploy mock APIs. It also highlighted a major constraint. For many organizations, API definitions, credentials, and test traffic cannot leave their infrastructure.

Mockoon Pro brings these capabilities to **your own private cloud, on-premises infrastructure, or isolated network**. Packaged as a lightweight Docker container, the first beta includes:

- real-time collaboration and data synchronization;
- managed mock API deployments on your own network;
- the complete Mockoon web application;
- local accounts and OpenID Connect authentication;
- roles, permissions, and an audit trail;
- offline license validation, with no telemetry or phoning home.

![#sub#Mockoon Pro architecture diagram](/images/blog/mockoon-pro-self-hosted-beta/mockoon-pro-architecture-diagram.png)

This new offer builds directly on our cloud work while staying true to Mockoon's local-first roots. The open-source desktop application, CLI, and Docker image remain free and actively maintained, while Mockoon Pro adds the features needed by teams and larger organizations.

The beta is only the beginning. We are already working on smoother installation and upgrades, Git synchronization, more granular role-based access control, and further improvements to administration and deployment workflows.

## Goodbye telemetry

Privacy has always been central to Mockoon. In May, we took the final step and [removed telemetry from the desktop and web applications](/blog/telemetry-removed-desktop-web-app/).

We also deleted the previously collected data and removed the collection endpoint. Together with the CLI and Docker image, which never included telemetry, all Mockoon applications are now **free of usage tracking**.

We initially built a lightweight, privacy-friendly telemetry system to help guide product decisions. In practice, direct conversations through support, GitHub discussions, and our community proved far more useful than anonymous usage metrics. Removing telemetry was both the practical choice and the one most consistent with our values.

![#sub#Telemetry has been removed from Mockoon's desktop and web apps{1200x400}](/images/blog/telemetry-removed-desktop-web-app.png)

## More practical tutorials

As Mockoon gains more advanced templating and state-management capabilities, we want to make these features easier to discover and apply. This year, we published three hands-on tutorials, each including a downloadable mock environment:

- [**Implement rate limiting with custom templates and rules**](/tutorials/implement-rate-limiting-custom-templates/): build time-based and quota-based limits with realistic `429` responses.
- [**Advanced data bucket manipulation with `setData`**](/tutorials/advanced-data-bucket-manipulation/): create stateful flows for API key rotation, usage tracking, and login sessions.
- [**Serve weighted responses with custom templating rules**](/tutorials/weighted-responses-custom-rules/): simulate flaky endpoints and intermittent failures with controlled probabilities.

These examples show how Mockoon can simulate increasingly realistic scenarios while remaining approachable and quick to configure.

## What's next?

Our immediate priority is to learn from the Mockoon Pro beta and make the self-hosted platform easier to install, operate, and upgrade across a wide range of infrastructures. At the same time, we will keep improving the open-source applications through smaller, regular releases focused on stability, security, and day-to-day usability.

You can follow our progress on the [public roadmap](/public-roadmap/) and share your ideas through [GitHub Discussions](https://github.com/mockoon/mockoon/discussions). If your organization has specific self-hosting, security, or compliance requirements, we would also be happy to hear from you through our [contact page](/contact/).

---

Thank you for being part of Mockoon's journey for the past nine years. We cannot wait to see what we build together in year ten! 🚀
