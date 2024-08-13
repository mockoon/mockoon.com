---
title: Cloud depoyments are available in Mockoon Cloud
excerpt: The cloud deployments feature is now available for Mockoon Cloud subscribers. Deploy your mock APIs in the cloud and share them with your team.
date: '2024-07-10'
image: cloud-deployments-release.png
imageAlt: mockoon logo and cloud icon
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - product
  - releases
author: guillaume
meta:
  title: Cloud depoyments are available in Mockoon Cloud
  description: The cloud deployments feature is now available for Mockoon Cloud subscribers. Deploy your mock APIs in the cloud and share them with your team.
---

We are excited to announce the **availability of the cloud deployments** feature for Mockoon Cloud subscribers. This feature, part of the [2024 June release](/releases/8.3.0/) and available in the **desktop application**, allows you to easily **deploy your mock APIs in the cloud and share them with your team**.

Cloud deployments are a great way to **make your mock APIs accessible** to your team members, clients, or anyone else who needs to access them. They are also useful for testing and development purposes, as they allow you to **quickly share** your mock APIs with others without having to set up a server or manage infrastructure.

## How to get started

After **subscribing to [Mockoon Cloud](/cloud/)** and [downloading](/download/) the latest version of the desktop application (v8.3.0), you can enable cloud deployments by logging in to the application with your Mockoon account. Once you are logged in, you can deploy an environment to the cloud using the context menu in the local or cloud environments list and selecting **"Deploy to the cloud"**:

![deploy a mock menu entry{513x507}](/images/blog/cloud-deployments-release/deploy-environment-menu.png)

You can further **configure** your deployment by selecting the **visibility** of your mock API (public or private):

![deployment dialog with instance configuration{800x225}](/images/blog/cloud-deployments-release/deploy-environment-dialog.png)

Deploying only takes a few seconds, and you will receive a **deployment URL** in the form of `https://mock-{uniqueId}.{serverId}.mockoon.app` that you can share with others.

Private instances are only accessible to you and your team members, using an API key, while public instances can be accessed by anyone with the link. You can also **update** or **delete** your deployment at any time:

![deployment management dialog{799x205}](/images/blog/cloud-deployments-release/deploy-environment-management-dialog.png)

## Accessing your mock API in the cloud

Once your mock API is deployed in the cloud, you can access it using the **instance URL** provided in the deployment dialog. Private instances require an **API key** to access them, which you can find in the deployment dialog as well. Public instances can be accessed by anyone with the link.

Most of the features available in the desktop application are also available in the cloud, including [CRUD routes](/docs/latest/api-endpoints/crud-routes/), [proxy mode](/docs/latest/server-configuration/proxy-mode/), and [logging through the admin API](/docs/latest/admin-api/transaction-logs/). However, some features are not available due to technical limitations or for security reasons. You can find more information in the [documentation](/docs/latest/mockoon-cloud/api-mock-cloud-deployments/).

## Quotas and limitations

This feature is available to all Mockoon Cloud subscribers, with a quota of 1, 3, or 5 instances, and 50,000, 100,000, or 250,000 monthly requests depending on your subscription plan. You can learn more about the available plans on the [Mockoon Cloud pricing page](/pricing/). You can also check your quota and usage in your account settings on the [Mockoon website](/account/subscription/).

## Custom deployments

As part of our cloud offering, we also provide **custom deployments** for teams that require a dedicated environment. Custom deployments are hosted on a dedicated server and can be configured to meet your specific requirements. Please [contact us](/contact-form/) for more information.

## Future improvements

We hope you will enjoy using this feature as much as we enjoyed developing it, and we are looking forward to your **feedback and suggestions** to make it even better!

We also have a lot of ideas for **future improvements**, such as custom instance URLs and domains, more instance locations, etc. We will keep you updated on our progress in the coming months.
