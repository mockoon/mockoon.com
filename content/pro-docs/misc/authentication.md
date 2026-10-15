---
title: Authentication
meta:
  title: 'Authentication and user management in Mockoon Pro'
  description: 'Configure Local Database authentication, OpenID Connect (OIDC) Single Sign-On, mixed authentication, email domain restrictions, and manage team members.'
order: 900
---

# Authentication

---

Mockoon Pro supports three authentication modes:

- **Local database**: Users authenticate with an email address and password stored by Mockoon Pro.
- **OpenID Connect (OIDC) Single Sign-On**: All users authenticate through your Identity Provider.
- **Mixed**: Local database authentication and OIDC Single Sign-On are available at the same time.

Public registration is closed; new users join through single-use invitation links or enterprise SSO.

![Authentication Modes](pro-docs-img:pro-authentication-modes-mixed.png)

## Local database (Default)

In local authentication mode, user accounts and credentials are saved in your local database. Users sign in at `/login` with their email and password, and the team owner can generate invitation links from the **Users** (`/users`) page. This mode operates completely offline without external identity provider dependencies.

### User management

The **Users** page (`/users`) allows the team Owner to oversee team access:

- Review pending invitations, view their creation dates, and revoke unneeded links.
- Monitor active members and pending invitations against your allocated seat count.
- Temporarily disable user accounts to immediately revoke active sessions and tokens without deleting data.
- Change the role of a member (for example promote a `User` to `Owner`) using the role selector. You cannot change your own role, and the last remaining Owner can never be demoted. The roles of disabled users cannot be changed.
- Permanently remove users from the team and database.

![User Management in Settings](pro-docs-img:pro-settings-users.png)

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
3. In Mockoon Pro, go to **Settings** (`/settings`).
4. Select **Single Sign-On (OpenID Connect / OIDC)**.
5. Fill in the details:
   - **OIDC Issuer URL**: Provider discovery endpoint (e.g. `https://login.microsoftonline.com/<tenant-id>/v2.0` or `https://auth.company.com/realms/mockoon`).
   - **Client ID**: Application client ID.
   - **Client Secret**: Application client secret.
6. Click **Save Changes**.

![OIDC Single Sign-On Configuration in Settings](pro-docs-img:pro-settings-oidc-mixed.png)

Settings are verified and applied immediately without restarting the server.

## Mixed authentication

Mixed mode enables **Local database** and **OIDC Single Sign-On** together. It is useful when progressively adopting SSO or when selected users and administrators still require local password access.

Authentication is determined per account. Local accounts continue to use their email address and password, while OIDC accounts authenticate through the configured Identity Provider.

### Account linking

When an existing local user (such as the initial administrator) signs in through OIDC with a verified email matching their local account, Mockoon automatically links the accounts while preserving the user's team role, workspace access, and environments.

After an account is linked, **OIDC supersedes local password authentication for that account**. The stored password is removed, existing sessions are revoked, and the user must subsequently sign in through the Identity Provider. Other unlinked local accounts can continue using password authentication while mixed mode is enabled.

## Email domain restrictions

Restrict invitations and logins to approved corporate email domains:

1. Go to **Settings** (`/settings`).
2. Enter comma-separated domains in **Allowed Email Domains** (e.g. `company.com, engineering.company.com`).
3. Click **Save Changes**.

When set:

- Invitations can only be generated for matching email domains.
- Local logins and OIDC logins from unapproved domains are rejected.

Leave empty to allow all email domains.

![Allowed Email Domains in Settings](pro-docs-img:pro-settings-allowed-email-domains.png)
