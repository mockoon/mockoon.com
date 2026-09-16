---
title: 'Security Update: prototype pollution vulnerability patched in v9.9.0'
excerpt: A prototype pollution vulnerability in multipart form-data parsing affecting Mockoon runtimes has been disclosed and patched in v9.9.0. We advise all users to update to version >= 9.9.0
date: '2026-09-16'
image: security-update-vulnerability-patched-v9-9-0.png
imageAlt: mockoon logo with shield
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - security
author: guillaume
meta:
  title: 'Security Update: prototype pollution vulnerability patched in v9.9.0'
  description: A prototype pollution vulnerability in multipart form-data parsing affecting Mockoon runtimes has been disclosed and patched in v9.9.0. We advise all users to update to version >= 9.9.0
---

We are issuing a security advisory to inform our community about a vulnerability disclosed through GitHub Security Advisories and patched in Mockoon release [**`9.9.0`**](/releases/9.9.0/):

- [**GHSA-cmwm-hp2w-h3cx**](https://github.com/mockoon/mockoon/security/advisories/GHSA-cmwm-hp2w-h3cx): prototype pollution vulnerability in multipart form-data parsing.

This issue has been fixed in [**`9.9.0`**](/releases/9.9.0/#chores). We strongly recommend that all users update as soon as possible.

## Summary

The vulnerability affects multipart form-data request body parsing in Mockoon server runtimes. In affected versions, incoming multipart request payloads with specially crafted field names could modify properties on `Object.prototype` across the server process.

An unauthenticated attacker with network access to a mock server could send requests containing malicious property paths (such as `__proto__` or `constructor.prototype`) in multipart form data, leading to prototype pollution. Depending on how the runtime and downstream logic interact with mutated objects, this could cause denial of service (server crashes, unexpected exceptions) or unintended execution flow.

## Vulnerability: prototype pollution via multipart form data

The advisory [**GHSA-cmwm-hp2w-h3cx**](https://github.com/mockoon/mockoon/security/advisories/GHSA-cmwm-hp2w-h3cx), fixed in [PR #2355](https://github.com/mockoon/mockoon/pull/2355), affects multipart form-data parsing in Mockoon server components.

Before `9.9.0`, Mockoon relied on the `append-field` library to reconstruct structured objects from multipart form field keys. When handling maliciously crafted keys with nested object paths, the parser could assign values to properties on the global object prototype.

This vulnerability was resolved by replacing the third-party dependency with a custom, hardened parser that rejects dangerous prototype-related field paths (`__proto__`, `prototype`, and `constructor`).

## How could this be exploited?

This issue primarily affects deployments where a Mockoon runtime is reachable from untrusted clients or exposed publicly.

A deployment may be vulnerable if a mock server is publicly exposed, shared across teams, reachable in CI/staging environments, or exposed via tunnels.

In practical terms, an attacker could:

- send a `multipart/form-data` request with fields targeting prototype properties (e.g. `__proto__[polluted]=value`),
- pollute shared prototype objects in the Node.js server runtime,
- trigger unexpected behavior, application logic errors, or application crashes across subsequent requests.

## Is my infrastructure at risk?

The exploitability of this vulnerability depends on your setup:

- Risk is highest if your mock server is exposed publicly or to untrusted networks.
- Risk is significant in shared development, CI, staging, or containerized environments where untrusted callers can send requests to the mock server.
- Risk is lower for local-only, trusted development environments where only trusted clients send requests.

Even in lower-risk scenarios, we recommend updating all runtimes to ensure consistent request processing security.

## Affected versions

According to the advisory, affected versions include Mockoon server components up to and including `9.8.0`.

Applications and packages potentially affected include:

- [**Desktop application**](/download/) when running local mock servers.
- [**CLI**](https://www.npmjs.com/package/@mockoon/cli) (`@mockoon/cli`).
- [**Serverless library**](https://www.npmjs.com/package/@mockoon/serverless) (`@mockoon/serverless`).
- [**Commons server library**](https://www.npmjs.com/package/@mockoon/commons-server) (`@mockoon/commons-server`).

## Patched version and mitigation

The vulnerability is fixed in version [**`9.9.0`**](/releases/9.9.0/) and later.

This release replaces the multipart field parsing mechanism with a safe implementation that guards against prototype pollution and validates field paths.

We urge all users to **update to version `9.9.0` or newer immediately**, especially for exposed or shared deployments. You can [download the latest desktop version](/download/) or update packages from NPM:

`npm install @mockoon/cli@latest @mockoon/serverless@latest`
