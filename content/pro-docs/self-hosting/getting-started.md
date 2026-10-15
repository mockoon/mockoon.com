---
title: Getting started
meta:
  title: Getting started with Mockoon Pro self-hosting
  description: Quickstart guide to deploy, configure, and connect to your self-hosted Mockoon Pro instance in 4 steps.
order: 200
---

# Getting started

---

Mockoon Pro is packaged as a single, self-contained Docker container with no external database dependencies, making it quick to deploy on any machine or private network.

This quickstart guide walks you through deploying a local or evaluation instance, completing the initial setup, onboarding your team, and connecting the web or desktop clients in four steps.

## 1. Deploy the container

Run the official `mockoon/pro` Docker image with a persistent `/data` volume:

```bash
docker run -d \
  --name mockoon-pro \
  -p 5020:5020 \
  -e MOCKOON_SERVER_ID=mockoon-node-1 \
  -v mockoon-data:/data \
  mockoon/pro:latest
```

By default, Mockoon Pro listens on port `http://localhost:5020`. For production deployments with custom domains, wildcard DNS, TLS, Docker Compose, or Kubernetes, see the full **[Installation guide](pro-docs:self-hosting/installation)**.

## 2. Complete the initial setup

Open `http://localhost:5020` (or your configured domain) in your browser. On first launch, you are automatically redirected to `/setup`:

1. Paste your signed **license key** ([request a free 14-day trial](/pro/checkout/?mode=trial) or [purchase a license](/pro/checkout/?mode=subscription)).
2. Create the initial **Owner** administrator account (email and password).
3. Submit the form to initialize your instance and access the **Dashboard** (`/dashboard`).

See the **[Initial setup guide](pro-docs:self-hosting/initial-setup)** for details on all setup fields.

## 3. Invite your team or configure SSO

From the administration portal, set up access for your team:

- **Local accounts**: Go to **Users** (`/users`) to generate invitation links for your team members.
- **Single Sign-On (OIDC)**: Go to **Settings** (`/settings`) to enable OpenID Connect SSO (or **Mixed** mode) with your identity provider.
- **Workspaces**: Optionally go to **Workspaces** (`/workspaces`) to create workspaces and assign members to specific groups of mocks.

Learn more in the **[Authentication](pro-docs:misc/authentication)** and **[Workspaces](pro-docs:features/workspaces)** documentation.

## 4. Connect your clients

Your team can now collaborate on remote environments and deploy mock APIs:

- **Embedded web app**: Click **Launch web client** in the dashboard navigation bar (or open `/app`) to start working directly in your browser. See **[Embedded web application](pro-docs:clients/embedded-web-application)**.
- **Desktop app**: In Mockoon Desktop, open **Settings**, set the **Self-hosted instance URL** to your instance URL, and click **Connect** in the top-right account menu. See **[Desktop application](pro-docs:clients/desktop-application)**.
