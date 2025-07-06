---
title: Getting started with Mockoon Cloud
excerpt: Learn how to get started with Mockoon Cloud, a cloud-based service that allows you collaborate on your mock APIs with your team
meta:
  title: Getting started with Mockoon Cloud
  description: Learn how to get started with Mockoon Cloud, a cloud-based service that allows you collaborate on your mock APIs with your team
image: tutorial-getting-started-mockoon-cloud.png
imageAlt: Mockoon logo in a rocket
imageWidth: 1200
imageHeight: 400
tags:
  - mockoon
order: 62
---

In this tutorial, we will learn how to **get started with [Mockoon Cloud](/cloud/)**, a cloud-based service that allows you to **collaborate on your mock APIs with your team**, **deploy your mock APIs to the cloud**, and **generate HTTP endpoints with our AI assistant**.

## Prerequisites

Before starting this tutorial, make sure you signed up and subscribed to a Mockoon Cloud plan. If you haven't done it yet, you can [sign up here](/cloud/). Our plans are available for individual developers and teams. You can also try Mockoon Cloud for free with our 7-day trial.

## 1. Install the desktop application or use the web app

After signing up for Mockoon Cloud, you will be able to access all the Cloud features in the **desktop application**. To fully benefit from your Mockoon Cloud plan, make sure you have the **latest version** of the desktop application installed.

![screenshot of the Mockoon desktop application download page{1373x374}](/images/tutorials/getting-started-with-mockoon-cloud/desktop-application-download-screenshot.png)

Head to the [download page](/download/) to get the latest version of the desktop application.

As an alternative, you can also use the **[Mockoon Cloud web app](cloud-docs:web-application)**. This web application is designed for users who prefer a browser-based experience or cannot install the desktop application due to restrictions in their environment.

![Mockoon Cloud web app screenshot{1920x1200}](/images/tutorials/getting-started-with-mockoon-cloud/mockoon-cloud-web-application.png)

The web app is available to all users with a paid Mockoon Cloud plan. You can log in using your Mockoon account credentials. Once logged in, you will have access to your synchronized and deployed environments and can manage them directly from the web interface.

## 2. Log in to your account in the desktop application

To enable Mockoon Cloud features, you need to **log in** to your account in the desktop application using the user menu in the top right corner of the application.

![view of the Mockoon desktop application account menu{1087x220}](/images/tutorials/getting-started-with-mockoon-cloud/desktop-application-login.png)

If you are already logged in, you can also click on **"Refresh account information"** in the account menu.

![view of the Mockoon desktop application account menu with refresh button{1087x220}](/images/tutorials/getting-started-with-mockoon-cloud/desktop-application-refresh.png)

Once you are logged in, you should see your account information in the account menu.

## 3. Deploy your first mock API

After [creating your first mock APIs](/tutorials/getting-started/), you are now ready to **deploy them to the cloud**. You can indifferently deploy local or cloud environments to Mockoon Cloud.

To deploy an environment, click on the **"Deploy to the cloud"** menu entry in the environment menu.

![View of the Mockoon desktop application environment menu with the deploy entry highlighted{595x357}](/images/tutorials/getting-started-with-mockoon-cloud/deploy-environment-menu.png)

You can then **configure** your instance and deploy your mock API by clicking on the **"Deploy"** button.

![view of the deployment dialog{800x225}](/images/tutorials/getting-started-with-mockoon-cloud/deploy-environment-dialog.png)

Currently, you can configure the instance **visibility**. More options will be available in the future.

The visibility of the environment can be set to **public** or **private**. Here are the differences between the two:

- **Public**: The environment is accessible to anyone with the URL.
- **Private**: The environment is accessible only to users with the URL and the API key. The API key is displayed in the management dialog and must be included in the request `Authorization` header to access the environment.

Your mock API will be available in the cloud on a **unique URL** in the form of `https://mock-abcd1234.{serverId}.mockoon.app`. You can share it with your team and use it in your applications.

You can view and manage your deployments at any time by clicking on the **"x instances deployed"** button at the bottom of the application.

![view of the deployment management dialog{799x205}](/images/tutorials/getting-started-with-mockoon-cloud/deploy-environment-management-dialog.png)

From the management dialog, you can **re-deploy** or **delete** the instance.

To learn more about cloud deployments, the supported features and limitations please [read the documentation](/cloud/docs/api-mock-cloud-deployments/).

## 4. Synchronize your mocks or collaborate in real-time with your team

As soon as you are logged in, you will be able to **create cloud mocks** and **synchronize** them between your devices or **collaborate** in real time with
your team.

![environment menu with create cloud environment entry highlighted{557x154}](/images/tutorials/getting-started-with-mockoon-cloud/create-cloud-environment.png)

Cloud environments are **automatically synchronized** with the cloud and between your devices as soon as they are created or updated.

![animation of two interfaces side by side being synchronized{596x309}](/images/tutorials/getting-started-with-mockoon-cloud/real-time-collaboration.gif)

You can always use local environments for your personal projects as they are not synchronized with the cloud.

Do not forget to [invite your team members](#6-invite-team-members-to-collaborate) to collaborate on your mocks.

For more details on data synchronization and team collaboration features, head over to the [dedicated documentation](/cloud/docs/data-synchronization-team-collaboration/)

## 5. Generate HTTP endpoints with our AI assistant

Finally, you can generate **JSON templates** and **HTTP endpoints** using our **AI assistants**. They allow you to create realistic responses based on your prompt. It's perfect for quick prototyping and testing.

Our AI assistants are available in the **"Add endpoint"** menu.

![view of the ai assistant dialog generating an HTTP endpoint to update an object representing a flight{957x598}](/images/tutorials/getting-started-with-mockoon-cloud/generate-http-endpoints.png)

You can read more about the AI assistants and JSON templates in our [documentation](/cloud/docs/templates-and-ai-assistant/)

## 6. Invite team members to collaborate

If you are on a team or enterprise plan, you can invite your team members to collaborate on your mocks.

To invite team members, head to the [users management page](/account/users/) and click on the **"Add user"** button and fill in the email address of the user you want to invite.

![view of the ai assistant dialog generating an HTTP endpoint to update an object representing a flight{1001x354}](/images/tutorials/getting-started-with-mockoon-cloud/add-team-members.png)
