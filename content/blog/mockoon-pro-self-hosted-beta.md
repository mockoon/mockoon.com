---
title: 'Mockoon Pro self-hosted is now available in beta'
excerpt: Mockoon Pro is now available in beta, bringing real-time collaboration, mock API deployments, and the web app to your own infrastructure.
date: '2026-10-01'
image: mockoon-pro-self-hosted-beta.png
imageAlt: Mockoon Pro self-hosted beta announcement
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - product
  - cloud
author: guillaume
meta:
  title: 'Mockoon Pro self-hosted is now available in beta'
  description: Mockoon Pro is now available in beta, bringing real-time collaboration, mock API deployments, and the web app to your own infrastructure.
---

Earlier this year, we [made self-hosting our main roadmap focus](/blog/roadmap-update-faster-releases-self-hosting-focus-2026/#roadmap-focus-for-the-rest-of-2026-self-hosting). After months of development and feedback from teams with strict security, privacy, and sovereignty requirements, **Mockoon Pro is now available in beta**.

Mockoon Pro brings the collaboration and deployment capabilities developed for Mockoon Cloud to **your own infrastructure**. You keep control of your network, data, users, and deployment while giving your team a shared platform for designing and running mock APIs.

You can [start a free 14-day trial](/pro/checkout/?mode=trial) today using your work email. No account or payment method is required.

## A self-hosted platform for API mocking

The beta packages the complete Mockoon Pro platform as a lightweight Docker container. It can run on your private cloud, on-premises infrastructure, or an isolated network, with no external database dependency.

The first beta includes:

- **real-time collaboration and data synchronization** across the desktop and embedded web applications,
- **API mock deployment and orchestration** on your own network,
- an **embedded web application** for designing, managing, and deploying mock APIs from a browser,
- **user management and authentication**, including local accounts and OpenID Connect,
- **roles, permissions, and an audit trail** for managing access and reviewing activity,
- **offline license validation**, with no telemetry or phoning home.

You can explore all the capabilities in the [Mockoon Pro documentation](/pro/docs/discover-mockoon-pro/) or follow the [installation guide](/pro/docs/self-hosting/installation/) to deploy the beta.

![#sub#Mockoon Pro architecture diagram](/images/blog/mockoon-pro-self-hosted-beta/mockoon-pro-architecture-diagram.png)

## Privacy at its core

At Mockoon, privacy is not a buzzword. It is a core principle that guides the design and development of our products. Mockoon Pro, with its self-hosted architecture, ensures that your data, API definitions, and test traffic remain within your own infrastructure.

We also went to great lengths to ensure that Mockoon Pro, like its desktop counterpart, stays **fully offline** with no telemetry, phoning home, or external API calls. Even the license validation process is performed entirely offline.

This makes Mockoon Pro suitable for **organizations with strict data privacy and security requirements**, and air-gapped or isolated network environments.

## Why we are focusing on self-hosting

Mockoon Cloud helped us understand what teams need beyond a local API mocking application: shared environments, real-time collaboration, browser access, and a simple way to run mock APIs for an entire organization.

It also made one constraint increasingly clear. For many organizations, source data, API definitions, credentials, and test traffic cannot leave their own environment. These strict regulatory and security policies often make a multi-tenant SaaS platform difficult or impossible to adopt.

The feedback on our self-hosting plans was strong and consistent. As a result, **Mockoon Pro is now our main commercial offer**. This is a meaningful pivot for us, but one that builds directly on the work completed for Mockoon Cloud and on Mockoon's long-standing ability to run locally and privately.

The open-source desktop application, CLI, and Docker image remain free and actively maintained. Mockoon Pro complements them with team collaboration, centralized administration, browser access, and managed mock deployments.

## What this means for Mockoon Cloud customers

**Nothing changes for existing Mockoon Cloud customers.** Your subscription and current service will continue to operate, and you can keep using Mockoon Cloud as you do today.

If you would prefer to move your environments and team to a self-hosted Mockoon Pro installation, [contact us](/contact-form/) and we will help you evaluate and plan the migration.

## What to expect during the beta

The beta gives us an opportunity to validate Mockoon Pro across a wider range of infrastructures and deployment constraints. We will use your feedback to improve installation, configuration, upgrades, diagnostics, and day-to-day administration.

Making Mockoon Pro **easy to deploy and update** is a priority. The platform follows the Mockoon application release cycle, and we are working toward smaller, more frequent releases that are simpler to review, test, and roll out.

Our roadmap also includes **Git synchronization**, **more granular role-based access control (RBAC)**, and further improvements to administration and deployment workflows. You can follow our [public roadmap](/public-roadmap/) as these features progress.

## Try Mockoon Pro

The self-hosted beta is available now. Eligible companies can request a **free 14-day trial with five license slots** using a verified work email. The trial does not require an account or payment method and does not renew automatically.

[Start your free Mockoon Pro trial](/pro/checkout/?mode=trial), deploy it on your infrastructure, and share your feedback with us. For larger evaluations, migration assistance, or specific security and compliance requirements, [contact our team](/contact-form/).

Thank you to everyone who shared their requirements and helped shape this new direction. We look forward to building the next stage of Mockoon Pro with you.
