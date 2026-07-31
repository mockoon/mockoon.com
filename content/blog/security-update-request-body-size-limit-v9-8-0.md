---
title: 'Security Update: request body DoS vulnerability patched in v9.8.0'
excerpt: A request body buffering vulnerability affecting Mockoon runtimes has been disclosed and patched in v9.8.0. We advise all users to update to version >= 9.8.0
date: '2026-07-31'
image: security-update-vulnerability-patched-v9-8-0.png
imageAlt: mockoon logo with shield
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - security
author: guillaume
meta:
  title: 'Security Update: request body DoS vulnerability patched in v9.8.0'
  description: A request body buffering vulnerability affecting Mockoon runtimes has been disclosed and patched in v9.8.0. We advise all users to update to version >= 9.8.0
---

We are issuing a security advisory to inform our community about a vulnerability disclosed through GitHub Security Advisories and patched in Mockoon release [**`9.8.0`**](/releases/9.8.0/):

- [**GHSA-845j-g722-g66h**](https://github.com/mockoon/mockoon/security/advisories/GHSA-845j-g722-g66h): unbounded request body buffering that may lead to remote denial of service (DoS).

This issue has been fixed in [**`9.8.0`**](/releases/9.8.0/#body-size-limitation). We strongly recommend that all users update as soon as possible.

## Summary

The vulnerability affects request body parsing in Mockoon runtimes. In affected versions, incoming request payloads could be buffered in memory without a strict global request body size limit.

An unauthenticated attacker with network access to a mock server could send very large payloads, including to non-existing routes, and force excessive memory allocation. In constrained environments, this could result in process termination due to out-of-memory (OOM) conditions. In unconstrained environments, it could still cause severe memory pressure and service disruption.

## Vulnerability: unbounded request body buffering

The advisory [**GHSA-845j-g722-g66h**](https://github.com/mockoon/mockoon/security/advisories/GHSA-845j-g722-g66h), fixed in [PR #2290](https://github.com/mockoon/mockoon/pull/2290), affects body parsing behavior in Mockoon server components.

Before `9.8.0`, request body buffering could happen before route matching without a dedicated global guard for total request body size in all cases. This opened a path for uncontrolled memory consumption when handling oversized payloads.

This vulnerability impacts availability only (denial of service). There is no known direct confidentiality or integrity impact associated with this issue.

## How could this be exploited?

This issue primarily affects deployments where a Mockoon runtime is reachable from untrusted clients.

A deployment may be vulnerable if a mock server is publicly exposed, shared across teams, reachable from CI/staging networks, or deployed in containers/services with finite memory resources.

In practical terms, an attacker could:

- send an oversized body to any endpoint (including invalid routes),
- force the runtime to allocate memory proportional to payload size,
- degrade performance or crash the process when memory is exhausted.

The risk is higher in memory-constrained environments where OOM kills occur earlier.

## Is my infrastructure at risk?

The exploitability of this vulnerability depends on your setup:

- Risk is highest if your mock server is exposed publicly or to untrusted networks.
- Risk is significant in CI, staging, containerized, or shared environments with strict memory limits.
- Risk is lower for local-only, trusted development environments.

Even in lower-risk scenarios, we recommend updating all runtimes to ensure consistent request payload protection.

## Affected versions

According to the advisory, affected versions include Mockoon server components up to and including `9.7.0`.

Applications and packages potentially affected include:

- [**Desktop application**](/download/) when running local mock servers.
- [**CLI**](https://www.npmjs.com/package/@mockoon/cli) (`@mockoon/cli`).
- [**Serverless library**](https://www.npmjs.com/package/@mockoon/serverless) (`@mockoon/serverless`).
- [**Commons server library**](https://www.npmjs.com/package/@mockoon/commons-server) (`@mockoon/commons-server`).

## Patched version and mitigation

The vulnerability is fixed in version [**`9.8.0`**](/releases/9.8.0/) and later.

This release introduces a dedicated `maxRequestBodySize` setting and enforces request body limits consistently across the server stack.

You can configure this limit in the CLI using the [**`--max-request-body-size` flag**](https://github.com/mockoon/mockoon/tree/main/packages/cli#start-command), with either raw bytes or human-readable values such as `10MB`.

The default maximum request body size is `100MB`, and requests exceeding the configured limit receive a **`413 Payload Too Large`** response.

We urge all users to **update to version `9.8.0` or newer immediately**, especially for exposed or shared deployments. You can [download the latest desktop version](/download/) or update packages from NPM:

`npm install @mockoon/cli@latest @mockoon/serverless@latest`
