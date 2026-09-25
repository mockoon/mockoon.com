---
title: Authentication
meta:
  title: Authentication and user management in Mockoon Self-Hosted
  description: Configure Local Database authentication, OpenID Connect (OIDC) Single Sign-On, email domain restrictions, and manage team members.
order: 103
---

# Authentication

---

Mockoon Self-Hosted supports two authentication modes: **Local database** and **OpenID Connect (OIDC) Single Sign-On**. Public registration is closed; new users join via single-use invitation links or through enterprise SSO.

![Authentication Modes](self-hosted-docs-img:self-hosted-authentication-modes.png)

## Local database (Default)

In local authentication mode, user accounts and credentials are saved in your local database. Users sign in at `/login` with their email and password, and the team owner can generate invitation links from the **Users** (`/users`) page. This mode operates completely offline without external identity provider dependencies.

### User management

The **Users** page (`/users`) allows the team Owner to oversee team access:

- Review pending invitations, view their creation dates, and revoke unneeded links.
- Monitor active members and pending invitations against your allocated seat count.
- Temporarily disable user accounts to immediately revoke active sessions and tokens without deleting data.
- Permanently remove users from the team and database.

![User Management in Settings](self-hosted-docs-img:self-hosted-settings-users.png)

#### Member invitations

For local accounts, invitations are the primary method for adding new team members.

> 💡Invitations are only applicable for local accounts and do not apply to users logging in via OIDC SSO.

#### Creating an invitation link

1. Go to **Users** (`/users`).
2. In **Invite New Member**, enter the email address and select the role (`User` or `Owner`).
3. Click **Generate Invite Link**.
4. Copy and share the generated URL (`https://mockoon.company.com/invite?token=...`).

> 💡 Invitation links are valid for **7 days** and expire automatically if unclaimed.

#### Claiming an invitation

1. The user opens the link in their browser.
2. The user enters and confirms their password.
3. Upon submission, the account is created, added to the team, and logged in.

## OpenID Connect (OIDC) Single Sign-On

OIDC Single Sign-On delegates authentication to your Identity Provider (IdP) for centralized user lifecycle management, MFA, and access control.

Supported identity providers include **Microsoft Entra ID**, **Okta**, **Keycloak**, **Google Workspace**, **Auth0**, **Ping Identity**, and any provider supporting OpenID Connect Discovery (`.well-known/openid-configuration`).

### Configuring OIDC SSO

1. In your Identity Provider, register a Web Application client.
2. Add your Mockoon instance redirect URI as an authorized Callback URI (replace `mockoon.company.com` with your own domain):
   ```text
   https://mockoon.company.com/auth/oidc/callback
   ```
3. In Mockoon Self-Hosted, go to **Settings** (`/settings`).
4. Select **Single Sign-On (OpenID Connect / OIDC)**.
5. Fill in the details:
   - **OIDC Issuer URL**: Provider discovery endpoint (e.g. `https://login.microsoftonline.com/<tenant-id>/v2.0` or `https://auth.company.com/realms/mockoon`).
   - **Client ID**: Application client ID.
   - **Client Secret**: Application client secret.
6. Click **Save Changes**.

![OIDC Single Sign-On Configuration in Settings](self-hosted-docs-img:self-hosted-settings-oidc.png)

Settings are verified and applied immediately without restarting the server.

### Account linking

When an existing user (such as the initial admin) logs in via OIDC with a verified email matching their local account, Mockoon automatically links their account, preserving their team role and environments.

## Email domain restrictions

Restrict invitations and logins to approved corporate email domains:

1. Go to **Settings** (`/settings`).
2. Enter comma-separated domains in **Allowed Email Domains** (e.g. `company.com, engineering.company.com`).
3. Click **Save Changes**.

When set:

- Invitations can only be generated for matching email domains.
- Local logins and OIDC logins from unapproved domains are rejected.

Leave empty to allow all email domains.

![Allowed Email Domains in Settings](self-hosted-docs-img:self-hosted-settings-allowed-email-domains.png)
