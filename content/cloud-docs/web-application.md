---
title: Web application
meta:
  title: Web application
  description: Mockoon Cloud web application allows you to collaborate on your mock APIs without installing the desktop application.
order: 101
badges:
  - early-access
---

# Web application

---

[Mockoon Cloud](/cloud/) offers a new web application that allows you to **collaborate on your mock APIs without installing the desktop application**. This web app is designed for users who prefer a browser-based experience or cannot install the desktop application due to restrictions in their environment.

## Accessing the web application

The web application is **accessible on [app.mockoon.com](https://app.mockoon.com)** and is available to all users with a paid Mockoon coud plan. You can log in using your Mockoon account credentials. Once logged in, you will have access to your synchronized and deployed environments and can manage them directly from the web interface.

![mockoon cloud web app screenshot{1920x1200}](cloud-docs-img:mockoon-cloud-web-application.png)

## UI and feature differences

The interface is the same as the desktop application, with a few differences due to the nature of the web application:

- [Cloud deployments unsupported features](cloud-docs:api-mock-cloud-deployments#unsupported-features) (file serving, custom TLS, etc.) are hidden to avoid confusion.
- Desktop/local specific options and features are disabled or hidden (managing local environments, etc.).
- Some interface elements were modified to fit the web application (e.g. the server start button deploys to the cloud instead of starting a local server).
- The web application handles re-deployments differently than the desktop application (see [Desktop/web apps and re-deployments](cloud-docs:api-mock-cloud-deployments#desktopweb-apps-and-re-deployments) for more information).

As this application is still in early access, we are working on improving the interface and adding new features. We welcome your feedback and suggestions to help us make it better.

## Web app version and migration

The web application is always running the latest version of Mockoon. You don't need to worry about updating it, as it will always be up to date with the latest features and improvements.

Similarly to the desktop application, the web application will automatically migrate your data to the latest version when you log in. You don't need to worry about data migration or compatibility issues, unless you are using both the desktop application and the web application. In this case, we recommend checking the [migration guide](cloud-docs:data-synchronization-team-collaboration#major-versions-migrations) for more information on how to handle potential issues.
