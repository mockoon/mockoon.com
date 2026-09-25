---
title: Discover Mockoon Self-Hosted
meta:
  title: Discover Mockoon Self-Hosted
  description: Deploy Mockoon on your own private infrastructure with data synchronization, team collaboration, mock hosting, and embedded web application.
order: 100
---

# Discover Mockoon Self-Hosted

---

**Mockoon Self-Hosted** brings the collaborative power of Mockoon Cloud directly into your own private infrastructure, sovereign cloud, on-premises servers, or air-gapped network.

It packages everything required to run a full-featured, team-wide mock API platform in a single lightweight service: **real-time data synchronization**, **mock API hosting and orchestration**, an **embedded web application**, an **administration dashboard**, and enterprise **single sign-on (SSO)**.

## Core capabilities

- **Collaboration**: Work together with your team in real time, with presence indicators and conflict resolution.
- **Mock deployments**: Deploy running mock servers directly on your internal network with automatic subdomain routing.
- **[Web app](self-hosted-docs:applications-and-access)**: Access and edit your mock APIs directly in your browser without installing the desktop application.
- **[Authentication and users management](self-hosted-docs:authentication)**: Support for local accounts, member invitations, and OpenID Connect (OIDC) Single Sign-On.
- **[Audit trail](self-hosted-docs:audit-trail)**: Track administrative, security, and workspace events.

## Architecture

Mockoon Self-Hosted runs as a single lightweight service with zero external database dependencies. The backend API, WebSocket synchronization gateway, mock runner manager, reverse proxy, administration dashboard, and embedded web application are packaged into a single container image. All state and mock environment data are stored locally in the mounted `/data` directory.

## Data sovereignty & air-gapped support

Mockoon Self-Hosted is built for private and isolated networks. License validation is 100% offline with zero phoning home, no outbound internet access is required, and no telemetry or analytics are collected. All mock definitions, user accounts, and credentials remain entirely on your own infrastructure.

> 💡 Outbound access is still required for certain Mockoon features, like [callbacks](docs:callbacks/overview) or [proxying requests](docs:server-configuration/proxy-mode) to external APIs.

## Getting started

1. Deploy the container using the **[Installation guide](self-hosted-docs:installation)**.
2. Complete the initial configuration using the **[Setup guide](self-hosted-docs:initial-setup)**.
3. Invite your team members or configure **[Authentication](self-hosted-docs:authentication)**.
4. Access the embedded web app or connect the **[Desktop app](self-hosted-docs:applications-and-access#connecting-the-desktop-application)**.
