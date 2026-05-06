---
title: Today we removed telemetry from Mockoon's desktop and web apps
excerpt: Starting today, Mockoon's desktop application and cloud web app do not collect telemetry anymore.
date: '2026-05-06'
image: telemetry-removed-desktop-web-app.png
imageAlt: privacy shield and analytics chart turned off
imageWidth: 1200
imageHeight: 400
tags:
  - product
  - privacy
  - open-source
author: guillaume
meta:
  title: Today we removed telemetry from Mockoon's desktop and web apps
  description: Starting today, Mockoon's desktop application and cloud web app do not collect telemetry anymore.
---

Starting today, **May 6, 2026**, Mockoon's desktop application and cloud web app **do not collect telemetry anymore**. This change is effective immediately, and the telemetry setting will be removed from the desktop application in the next release (v9.7.0).

## Privacy-friendly from the start

From the [**removal of Google Analytics** from the desktop application in 2022](/old-releases/desktop/#google-analytics-removal) and [the website in 2023](/blog/september-2023-news/#-ditching-google-analytics-for-the-website), to the [**migration** to a **light custom telemetry system** in 2024](/blog/building-own-analytics-fun-and-profit/), Mockoon has always been built with privacy in mind.

We have always been transparent about the data we collect and how we use it, and our apps were always **free of any other kind of third-party tracking tools** and marketing analytics. No heatmaps, session recordings, A/B testing, etc.

Our telemetry system was designed to be as privacy-friendly as possible. It was opt-out, but we made sure to only collect **anonymous and basic usage information**, mostly equivalent to a simple visit counter.

On top of that, we never collected any content from your mocks, such as routes, headers, bodies, etc.
And the **CLI and Docker images**, popular self-hosting options, **didn't include any telemetry at all**, and they still don't.

## Why remove telemetry?

Over time, we realized that the telemetry data we were collecting was **not as useful as we initially thought**. We had hoped to use it to improve the product and understand our users better, but in practice, unless you add tons of custom events, it is **hard to get actionable insights from basic usage data**.

We also realized we were looking at this data less and less over time. What's the point of looking at vanity metrics to drive product decisions when we have **direct feedback from our users** through our support channels, GitHub discussions, and social media?

Another reason is that **developers**, our core audience, really **hate analytics**, especially the opt-out kind. Even if nobody really complained about our small telemetry system over the past years, we read the news and see the backlash other companies can get, and we understand. After all, we are developers too!

At this point, removing telemetry entirely is the decision most consistent with our values and the last step to make Mockoon a **truly privacy-first product**, and we are happy to take it.

## Privacy-first!

Starting today, here is what you can expect regarding privacy and data collection in Mockoon:

- The **telemetry data collection endpoint has been removed** in our API and all the existing data has been deleted.
- The **telemetry setting** in the desktop and web apps is still visible up to v9.6.0, but non-functional. It **will be removed** in the next release (v9.7.0).
- **Mockoon apps are not making any API calls** to our systems unless you are logged in with a Mockoon Cloud account and using the cloud features.
- The **CLI and Docker images** remain **telemetry-free**, as before.

We are committed to maintaining Mockoon as a privacy-first product, and we will continue to prioritize our users' privacy in all our future developments. If you have any questions or concerns about this change, please feel free to reach out to us through our [support channels](/contact).
