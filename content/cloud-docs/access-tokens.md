---
title: Access tokens
meta:
  title: Access tokens
  description: Generate access tokens to access your account resources and use them in your CI/CD pipelines
order: 105
---

# Access tokens

---

[Mockoon Cloud](/cloud/) allows you to **generate access tokens** to access your account resources and use them in your CI/CD pipelines or own server.

Currently, the following features support access tokens:

- **[Self-host with Mockoon CLI](cloud-docs:api-mock-cloud-deployments#self-host-with-the-cli)**: Use access tokens to run your cloud environments from your own server using Mockoon CLI.

> 💡 Managing access tokens is currently a feature requiring a Team or higher plan.

## Managing your access tokens

You can **create and revoke your access tokens** from the [access tokens](/account/access-tokens/) page in your Mockoon Cloud account settings.

![access tokens management interface](cloud-docs-img:create-manage-access-tokens-tokens.png)

The following parameters are customizable when creating a new access token:

- **Name**: A descriptive name for the token to help you identify it later.
- **Permissions**: The permissions granted to the token (see below for more details).
- **Expiration delay**: The duration after which the token will expire.

### Token permissions

When creating an access token, you can choose the **permissions** granted to the token. The available permissions are:

| Permission       | Description                            |
| ---------------- | -------------------------------------- |
| environment:read | Allows reading your cloud environments |
