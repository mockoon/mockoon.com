---
title: 2025 retrospective and Mockoon 8th birthday
excerpt: Let's take a look back at 2025 and celebrate Mockoon's 8th birthday!
date: '2025-12-20'
image: eight-years-2025-retrospective.png
imageAlt: Mockoon 8th birthday celebration
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - open-source
  - dev blog
author: guillaume
meta:
  title: 2025 retrospective and Mockoon 8th birthday
  description: Let's take a look back at 2025 and celebrate 8 years of Mockoon!
---

It feels like only yesterday we were celebrating our [7th anniversary](/blog/seven-years-2024-retrospective/), and here we are again. Let's take a moment to look back at 2025, a year where we focused on **scaling our infrastructure** and bringing even more power to our users, both in the open-source application and the cloud.

## 🎂 8 years old!

Mockoon's first release was in August 2017. **Eight years later**, the project is stronger than ever. What started as a side project to solve a personal frustration has grown into a comprehensive ecosystem used by tens of thousands of developers worldwide.

Our community continues to grow and the numbers for 2025 are a testament to that:

- Mockoon has now been **downloaded over 900k times**. We are rapidly approaching the 1 million mark!
- Our [GitHub stars count](https://github.com/mockoon/mockoon/stargazers) will soon reach **8,000**, showing the continued trust and support from the developer community.
- [We **published 4 releases** in 2025 (and soon a fifth)](/releases/9.4.0/), each bringing significant improvements and new capabilities to our tools.

Beyond the numbers, what truly drives us is the **feedback** we receive. Whether it's a feature request on GitHub or a message of support, knowing that Mockoon makes your daily development life easier is our greatest reward.
![stars history graph showing a continuous growth{664x480}](/images/blog/eight-years-2025-retrospective/star-history-20251219.png)

## Some of our favorite 2025 features

Here are some of the standout features we introduced in 2025:

- **JSON Schema validation**: You can now [validate incoming request payloads](/releases/9.1.0/#json-schema-formats-support-and-bug-fixes) (or anything else!) against JSON Schemas, ensuring your mocks behave more like real APIs.
- **Improved data buckets state reporting**: The data buckets feature got a significant upgrade with [better state reporting](/releases/9.1.0/#improved-data-buckets-state-reporting), making it easier to track and manage your mock data.
- **CLI watch mode**: The Mockoon CLI now supports a [watch mode](/releases/9.3.0/#new-cli---watch-flag-and-validate-command), allowing you to automatically reload your mocks when the source files change.
- **OpenAPI revamp**: The OpenAPI import/export feature received a [major overhaul](/releases/9.4.0/#openapi-import-and-export-in-the-web-application) with preview, import from local files, URLs or clipboard, and less dependency on external libraries.
- **Many QOL improvements**: We added several quality-of-life improvements, such as [local environments quick access](/releases/9.2.0/#quick-access-to-recently-opened-local-environments), [route response filtering](/releases/9.2.0/#filter-added-to-route-response-list), or [improved server status interface](/releases/9.3.0/#improved-server-status-interface) to enhance your workflow.

We also decided to [introduce a **new label system for our GitHub issues**](/blog/introducing-new-issue-label-system-enhanced-transparency/) and pull requests to better categorize and prioritize contributions. This change has already improved our issue management and community contributions.

![screenshot of the new labels design{617x232}](/images/blog/eight-years-2025-retrospective/new-labels-preview.png)

As Mockoon matures, we also decided to slow down the pace of major releases to focus on **stability, performance, and user experience**, and of course, the cloud platform.

## Accelerating the Cloud

2025 was a pivotal year for **Mockoon Cloud**. We've worked hard to transform it from a set of complementary features into a robust, enterprise-ready platform.

We already talked about it in the past, but [focusing on the cloud](/blog/introducing-mockoon-cloud-web-app/#sustainability-and-shifting-focus-to-mockoon-cloud) is essential to guarantee the sustainability of the open-source project.

We are also not your typical "open-source startup": we didn't seek venture capital funding, and we want to keep our independence while staying true to our open-source roots. This come with its challenges, but we believe it's the right path for us and our community. Bootstrapping and scaling a cloud platform is no easy feat, especially when you're a small team, but the growth we've seen this year is encouraging.

Among the major cloud milestones this year:

- **Custom subdomains**: You can now [choose a subdomain](/cloud/docs/api-mock-cloud-deployments/#deploy-an-environment-to-the-cloud) when deploying on our cloud platform.
- **New Web App**: We [launched a new web application](/blog/introducing-mockoon-cloud-web-app/), based on the same technology as the desktop app. It offers a solution for users who cannot install desktop applications due to company policies.
- **EU Region**: To better serve our European users, we've added a [new deployment region in Europe](/pricing/#available-regions). This also means lower latency for our users in the region. We plan to add more regions in 2026, possibly Australia and Canada.
- **Better performance and scalability**: We've re-architected several parts of our cloud infrastructure to handle increased load and provide a more secure environment for our users.
- **Enhanced Team Management**: We've added new features to help teams collaborate more effectively, including role-based access control and activity logs.
  ![Cloud instance management dialog screenshot{794x203}](/images/blog/eight-years-2025-retrospective/deploy-environment-management-dialog.png)

The challenge for 2026 will be to keep up this momentum and continue delivering value to our users while maintaining the open-source spirit that defines Mockoon.
We also know where our cloud offering falls short compared to our competitors, and we have plans to address these gaps in the coming year. You don't add a Cloud platform on top of an offline-first tool overnight, but we're committed to making Mockoon Cloud a top-tier solution for API mocking and testing.

## Year's highlights

This year saw several other exciting developments in the Mockoon ecosystem:

- We [partnered with GitHub during **maintainer month**](/blog/partner-github-maintainer-month/) to highlight the importance of open-source maintainers and sustainability and provide them with free Mockoon Cloud subscriptions.
- We were invited by GitHub (them again!) to [showcase Mockoon at **We Are Developers 2025 in Berlin**](/blog/mockoon-wearedevelopers-world-congress-2025-highlights/). It was an incredible experience to connect with other developers and share our journey.
- We [**partnered with OpenPledge**](/blog/support-mockoon-development-with-open-pledge/) to allow you to support Mockoon by pledging money on specific issues. We are excited about this new way to involve the community in our development process.
- We [**won the French "Acteurs du Libre 2025" award**](/blog/mockoon-wins-cnll-apell-european-price-award/) in the "European" category during the Open Source Experience conference in Paris! This recognition from the open-source community is a huge honor for us and validates our efforts to build a sustainable open-source project.

![#sub#Guillaume (founder) receiving the award{720x480}](/images/blog/eight-years-2025-retrospective/guillaume-receiving-cnll-apell-european-price-award.jpg)

We will have more exciting announcements for January 2026, so stay tuned!

## New tutorials and tools

This year we published two major tutorials that dive deep into powerful features:

- [**Validate requests payload with JSON Schema**](/tutorials/validate-requests-payload-json-schema/): Learn how to ensure your clients are sending the right data by using JSON Schema validation directly in your mock routes.
- [**Implement rate limiting with custom templates**](/tutorials/implement-rate-limiting-custom-templates/): A guide on how to simulate realistic API constraints and rate limits using Mockoon's flexible templating system.

Both shows how Mockoon becomes more programmable and flexible with each release.

We also added more tools to our [tools page](/tools/) to help you debug, generate, measure, or validate all sort of things and more endpoints to our [playground API](/playground/) (`/echo`, `/error`, etc.).

## What's next?

As we head into our 9th year, we aren't slowing down. Our roadmap for 2026 is packed with exciting features being planned for both the open-source application and the cloud platform.

You can always check our [public roadmap](/public-roadmap/) to see what we're currently working on.

---

Thank you for being part of this journey for the past 8 years. We can't wait to show you what's coming next! 🚀
