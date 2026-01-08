---
title: Cloud API mock deployments
meta:
  title: Cloud API mock deployments
  description: Learn how to deploy your mock APIs in the cloud and share them with your team, clients, or class, using Mockoon Cloud
order: 102
---

# Cloud API mock deployments

---

[Mockoon Cloud](/cloud/) allows you to **deploy your mock APIs in the cloud** and share them with your team, clients, or class. This feature is available in the desktop application and is part of the Mockoon Cloud paid plans. Read on to learn how to use it and the different features it offers.

## Managing your cloud deployments

### Deploy an environment to the cloud

You can **deploy an environment** to the cloud using the context menu in the local or cloud environments list and selecting **"Deploy to the cloud"**:

![context menus to deploy cloud environments{513x507}](cloud-docs-img:deploy-environment-menu.png)

In the deployment dialog, you can further customize your instance:

- **Subdomain**: The default subdomain is generated automatically, but you can customize it to a unique value. The subdomain will be part of the instance URL (e.g. `https://{subdomain}.{serverId}.mockoon.app`).
- **Visibility**:
  - **Public**: The environment will be accessible to anyone with the URL.
  - **Private**: The environment will be accessible only to users with the URL and the **API key** (see [Instance URL and visibility](#instance-url-and-visibility) below).
- **Region**: The region where the instance will be deployed. You can choose from the available regions in the dropdown list. The default region is `US` (Central, Iowa) (See [available regions](/pricing/#available-regions)).

![deployment dialog{993x399}](cloud-docs-img:deploy-environment-dialog.png)

After clicking the **"Deploy"** button, the environment will be uploaded to the cloud and will be accessible using the provided URL. In the management dialog, you can find the URL and the API key to access the environment. You can also re-deploy the environment or delete the instance:

![deployment management dialog{794x203}](cloud-docs-img:deploy-environment-management-dialog.png)

### Re-deploy or delete a cloud instance

In the management dialog, you can **re-deploy** the environment or **delete** the instance using the menu:

![deployment management dialog re-deploy or delete the instance menu{886x210}](cloud-docs-img:deploy-environment-management-menu.png)

### Desktop/web apps and re-deployments

Currently, the behavior of re-deployments is different depending on whether you are using the desktop application or the web application:

- **Desktop application**: For historical reasons, the desktop application is still biased towards local development. Therefore, all changes made to cloud environments will only be applied to the cloud instances when you re-deploy them manually. This allows you to make changes to your environment without affecting the running instance until you are ready to update it.
- **Web application**: In the web application, many changes are pushed to the cloud instance automatically without requiring a manual re-deployment. This is because the web application is designed to be more collaborative and real-time, allowing you to see the changes reflected in the running instance immediately. However, some changes may still require a manual re-deployment, depending on their nature.

  The following changes are **applied automatically**:
  - Some environment properties (headers, proxy headers, latency, etc.).
  - Some route properties (response mode).
  - Adding and removing callbacks.
  - Route responses (headers, latency, status code, callbacks calls, rules, etc.).

  The following changes still **require a manual re-deployment**:
  - Route paths and methods.
  - Adding or removing routes.
  - Environment port, hostname, proxy and TLS options.
  - Adding or removing data buckets.

We plan to unify this behavior in future versions of Mockoon to provide a consistent experience across both applications.

## Instance URL and visibility

The instance will be deployed on a shared cloud infrastructure and will be accessible using a unique URL in the form of `https://mock-abcd1234.{serverId}.mockoon.app`. The URL will be displayed in the management dialog and can be shared with your team, clients, or class. You can also customize the subdomain part of the URL when deploying the environment.

The visibility of the environment can be set to **public** or **private**. Here are the differences between the two:

- **Public**: The environment is accessible to anyone with the URL. The API key is displayed in the management dialog and must be included in the request `Authorization` header to access the environment's [admin API](docs:admin-api/overview).
- **Private**: The environment is accessible only to users with the URL and the API key. The API key is displayed in the management dialog and must be included in the request `Authorization` header to access the environment.

> ⚠️ When you stop a running instance and start it again later, there is no guarantee that it will be assigned to the same server. As a result, the instance URL may change (different server ID).

## Switching regions

It is not possible to switch the region of an already deployed instance. If you want to deploy the same environment in a different region, you will need to stop the current instance and deploy it again in the desired region. The new instance will have a different URL and API key.

## Self-host with the CLI

Starting with Mockoon v9.5.0, you can use [Mockoon CLI]() to **deploy your cloud mocks to your own infrastructure** instead of using Mockoon's cloud servers.

> 💡 Running a cloud mock with the CLI is currently a feature requiring a Team or higher plan.

The application will provide you with the necessary **commands and instructions** to set up and run the mock on your own servers:

![cloud deployment with CLI](cloud-docs-img:cli-pull-instructions.png)

The necessary steps are:

- **Create an access token** with the `environment:read` permission (see [Access tokens](cloud-docs:access-tokens#managing-your-access-tokens)).
- Use the provided `mockoon-cli start --data cloud://... --token <your-token>` **command** to run the cloud environment on your server.

You can also refer to the CLI documentation on [how to pull and run a cloud mock](https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md#run-a-cloud-hosted-mockoon-environment).

## Unsupported features

The cloud deployment feature does not support the following features:

- Custom TLS and hostnames are not supported and will be disabled in the cloud environment.
- External files linked to the environment are not uploaded and served (e.g. environment's certificates or files used in the "File" response body type). File serving is generally not supported in cloud environments and linking files is disabled.
- The proxy mode will be disabled if it points to a local address or IP (e.g. `localhost` or `127.0.0.1`).
- Callbacks pointing to a local address or IP (e.g. `localhost` or `127.0.0.1`) will be disabled.
- WebSockets are currently not supported but will be added in a future version.

## Major versions migrations

Future major versions of Mockoon may introduce **breaking changes to the data model** of your environments. When this happens, instances already deployed to the cloud will continue to work with the previous version of Mockoon. However, you will need to **re-deploy** the environment to the cloud to benefit from the new features and improvements.

> ⚠️ We strongly recommend to update your local Mockoon application as soon as possible to the latest version to avoid any compatibility issues.

## Plans quotas and limits

Some **quotas and limits apply** to the cloud deployment feature depending on your plan. As these quotas and limits are subject to change over time, please refer to your [account settings](/account/subscription/) for the information specific to your account.
