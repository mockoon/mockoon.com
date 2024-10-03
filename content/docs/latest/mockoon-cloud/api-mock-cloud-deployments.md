---
title: Cloud API mock deployments
meta:
  title: Cloud API mock deployments
  description: Learn how to deploy your mock APIs in the cloud and share them with your team, clients, or class, using Mockoon Cloud
order: 901
---

# Cloud API mock deployments<span className='badge text-bg-warning fs-4 align-text-top ms-2'>Cloud</span>

---

[Mockoon Cloud](/cloud/) allows you to **deploy your mock APIs in the cloud** and share them with your team, clients, or class. This feature is available in the desktop application and is part of the Mockoon Cloud paid plans. Read on to learn how to use it and the different features it offers.

## Managing your cloud deployments

### Deploy an environment to the cloud

You can **deploy an environment** to the cloud using the context menu in the local or cloud environments list and selecting **"Deploy to the cloud"**:

![context menus to deploy cloud environments{513x507}](/images/docs/static/mockoon-cloud/api-mock-cloud-deployments/deploy-environment-menu.png)

In the deployment dialog, you can further customize the deployment by selecting the **visibility** of the environment:

- **Public**: The environment will be accessible to anyone with the URL.
- **Private**: The environment will be accessible only to users with the URL and the **API key**.

![deployment dialog{800x225}](/images/docs/static/mockoon-cloud/api-mock-cloud-deployments/deploy-environment-dialog.png)

After clicking the **"Deploy"** button, the environment will be uploaded to the cloud and will be accessible using the provided URL. In the management dialog, you can find the URL and the API key to access the environment. You can also re-deploy the environment or delete the instance:

![deployment management dialog{799x205}](/images/docs/static/mockoon-cloud/api-mock-cloud-deployments/deploy-environment-management-dialog.png)

### Re-deploy or delete a cloud instance

In the management dialog, you can **re-deploy** the environment or **delete** the instance using the menu:

![deployment management dialog re-deploy or delete the instance menu{902x235}](/images/docs/static/mockoon-cloud/api-mock-cloud-deployments/deploy-environment-management-menu.png)

## Instance URL and visibility

The instance will be deployed on a shared cloud infrastructure and will be accessible using a unique URL in the form of `https://mock-abcd1234.serverid.mockoon.app`. The URL will be displayed in the management dialog and can be shared with your team, clients, or class.

The visibility of the environment can be set to **public** or **private**. Here are the differences between the two:

- **Public**: The environment is accessible to anyone with the URL.
- **Private**: The environment is accessible only to users with the URL and the API key. The API key is displayed in the management dialog and must be included in the request `Authorization` header to access the environment.

## Unsupported features

The cloud deployment feature does not support the following features:

- Custom TLS and hostnames are not supported and will be disabled in the cloud environment.
- External files linked to the environment are not uploaded and served (e.g. environment's certificates or files used in the "File" response body type). File serving is generally not supported in the cloud environment.
- The proxy mode will be disabled if it points to a local address or IP (e.g. `localhost` or `127.0.0.1`).
- Callbacks pointing to a local address or IP (e.g. `localhost` or `127.0.0.1`) will be disabled.

## Major versions migrations

Future major versions of Mockoon may introduce **breaking changes to the data model** of your environments. When this happens, instances already deployed to the cloud will continue to work with the previous version of Mockoon. However, you will need to **re-deploy** the environment to the cloud to benefit from the new features and improvements.

> ⚠️ We strongly recommend to update your local Mockoon application as soon as possible to the latest version to avoid any compatibility issues.

## Plans quotas and limits

Some **quotas and limits apply** to the cloud deployment feature. Here are the main ones:

- **Solo plan**:
  - 1 cloud deployment.
  - 50&nbsp;000 requests per month.
  - 3 requests per second (1 request per second during trial).
- **Team plan**:
  - 3 cloud deployments.
  - 100&nbsp;000 requests per month.
  - 5 requests per second (1 request per second during trial).

These quotas and limits are subject to change. Please refer to your [account settings](/account/subscription/) for the latest information.

## Future improvements

The cloud deployment feature is still in its early stages. Here are some improvements we are working on:

- Support for [**environment variables**](docs:admin-api/environment-variables).
- Offer more instance locations and the ability to choose the closest one.
- Possibility to customize the instance URL or link a custom domain to the instance.
- Possibility to renew the API key.
