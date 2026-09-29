---
title: Embedded web application
meta:
  title: Embedded web application in Mockoon Pro
  description: Use the embedded web application, connect Mockoon Desktop to your private instance, and collaborate on mock APIs in real time.
order: 401
---

# Embedded web application

---

Mockoon Pro includes an **embedded web application** allowing your team to collaborate on mock APIs without the need for any local installation.

The web application is bundled inside the container and served at `/app` on your base domain (replace `mockoon.company.com` with your own domain):

The web application lets your team create, inspect, and modify mock APIs directly in any browser with zero local installation.

You can launch and sign into the web application automatically by clicking **"Launch web client"** in the management dashboard navigation bar.

![Mockoon Embedded Web Application](pro-docs-img:pro-web-app.png)

The application will **automatically configure itself** to connect to your self-hosted instance, providing a seamless experience for your team to manage and collaborate on mock APIs.

## UI and feature differences

The interface is the same as the desktop application, with a few differences due to the nature of the web application:

- Some unsupported features for remote APIs (file serving, custom TLS, etc.) are hidden to avoid confusion.
- Desktop/local specific options and features are disabled or hidden (managing local environments, etc.).
- Some interface elements were modified to fit the web application (e.g. the server start button deploys to the cloud instead of starting a local server).

As this application is still in early access, we are working on improving the interface and adding new features. We welcome your feedback and suggestions to help us make it better.
