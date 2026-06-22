---
title: 'Security Update: two vulnerabilities patched in v9.7.0'
excerpt: Two security vulnerabilities affecting Mockoon runtimes have been disclosed and patched in v9.7.0. We advise all users to update to version >= 9.7.0
date: '2026-06-22'
image: security-update-vulnerability-patched-v9-7-0.png
imageAlt: mockoon logo with shield
imageWidth: 1200
imageHeight: 400
tags:
  - news
  - security
author: guillaume
meta:
  title: 'Security Update: two vulnerabilities patched in v9.7.0'
  description: Two security vulnerabilities affecting Mockoon runtimes have been disclosed and patched in v9.7.0. We advise all users to update to version >= 9.7.0
---

We are issuing a security advisory to inform our community about **two vulnerabilities** that have been disclosed through GitHub Security Advisories and patched in Mockoon release [**`9.7.0`**](/releases/9.7.0/):

- [**GHSA-rqx4-3f6q-3x2v**](https://github.com/mockoon/mockoon/security/advisories/GHSA-rqx4-3f6q-3x2v): unauthenticated admin API access combined with permissive CORS.
- [**GHSA-8wqc-v2q8-vff2**](https://github.com/mockoon/mockoon/security/advisories/GHSA-8wqc-v2q8-vff2): path traversal in templated file paths due to an incomplete boundary check.

Both issues have been fixed in [**`9.7.0`**](/releases/9.7.0/#fixes). We strongly recommend that all users update as soon as possible.

## Summary

The first vulnerability could allow an attacker to **access and modify the Mockoon admin API without authentication** in some deployments, and in certain cases even exploit it from a malicious website through overly permissive CORS settings.

The second vulnerability is a **path traversal and local file inclusion (LFI)** issue affecting templated file paths. It is related to the previously disclosed file serving vulnerability fixed in `9.2.0`, but covers additional bypass cases that were not blocked by the earlier protection.

## Vulnerability 1: unauthenticated admin API access and permissive CORS

The advisory [**GHSA-rqx4-3f6q-3x2v**](https://github.com/mockoon/mockoon/security/advisories/GHSA-rqx4-3f6q-3x2v), fixed in [PR #2254](https://github.com/mockoon/mockoon/pull/2254), affects Mockoon runtimes exposing the admin API without authentication.

Before `9.7.0`, the admin API could be enabled by default depending on the runtime, and some endpoints responded with permissive CORS headers. This created two attack scenarios:

- if a Mockoon deployment was **reachable by an attacker** on the network or publicly exposed,
- or if a developer was running a local mock and **visited a malicious website** that could issue cross-origin requests to the admin API.

In those situations, an attacker could interact with the admin API without authentication and perform actions such as:

- reading environment variables exposed through Mockoon helpers,
- overwriting environment variables used by templates or surrounding tooling,
- modifying routes and responses at runtime,
- reading transaction logs and live events,
- purging runtime state.

In practice, this means an attacker could **steal secrets, alter mocked responses returned to consumers, or disrupt a running mock server**.

## How could this be exploited?

This issue primarily affects deployments where the admin API is accessible to untrusted parties.

A deployment may be vulnerable if you expose a Mockoon runtime publicly, for example in a shared development environment, CI environment, staging server, container, or tunnelled local instance. Because CORS was too permissive, a local instance could also be targeted indirectly from the browser if its admin API was reachable from the machine running the browser.

The risk is higher when the mock environment uses **templating helpers with secrets or mutable runtime state**, because an attacker could read or modify values that influence responses served to downstream applications.

The fix introduced in `9.7.0` adds **admin API authentication**, tightens **CORS behavior**, and hardens related admin API operations.

## Vulnerability 2: path traversal in templated file paths

The advisory [**GHSA-8wqc-v2q8-vff2**](https://github.com/mockoon/mockoon/security/advisories/GHSA-8wqc-v2q8-vff2), fixed in [PR #2255](https://github.com/mockoon/mockoon/pull/2255), affects Mockoon's file serving feature when using **templated file paths**.

This is the same general exploitation scenario as the [previous file serving vulnerability disclosed in 2025](https://github.com/advisories/GHSA-w7f9-wqc4-3wxr), but with additional edge cases that could still bypass the original protection.

The issue happened because path validation relied on a **string prefix check**. In some situations, a resolved file path outside the intended base directory could still appear valid if it started with the same string.

Examples include:

- sibling folders with a similar prefix, such as `/srv/public` and `/srv/public_backup`,
- environments where the resolved base directory ends up being the filesystem root, such as some containerized setups.

This could let an attacker request files outside the intended directory, even though direct access to clearly unrelated paths was blocked.

## How could this be exploited?

Your deployment may be vulnerable in the above cases if you use templating helpers accessing **user-controlled content** like `body`, `queryParam`, `urlParam`, or headers in a file input, whether in a response body or a callback file path.

For example, a file path like `./files/{{queryParam 'name'}}` may appear safe, but if the user-controlled value resolves to a path escaping the intended directory, Mockoon could serve files from outside the allowed location in affected versions.

This means an attacker interacting with an exposed mock API could potentially retrieve sensitive local files located in sibling directories or other incorrectly validated locations.

The fix in `9.7.0` hardens file path validation by ensuring the resolved path remains strictly contained within the expected base directory.

## Is my infrastructure at risk?

The exploitability of these vulnerabilities depends on your setup:

- The **admin API issue** is most relevant if your mock server is reachable by untrusted users, publicly exposed, or run locally while browsing untrusted websites.
- The **path traversal issue** requires the use of templated file paths combined with untrusted user input.

In both cases, the risk is significantly lower if your mocks are only used locally in a trusted environment and are not exposed to untrusted traffic. However, we strongly recommend updating all deployments, especially any shared, public, containerized, or CI-hosted instances.

> 🔒 Our **Mockoon Cloud services were not affected** by these vulnerabilities as Cloud mocks' admin API is always authenticated and file serving is not enabled.

## Affected versions

Both vulnerabilities affect Mockoon versions up to and including `9.6.1`, depending on the runtime and feature usage.

Applications and packages potentially affected include:

- [**Desktop application**](/download/) when running local mock servers.
- [**CLI**](https://www.npmjs.com/package/@mockoon/cli) (`@mockoon/cli`).
- [**Serverless library**](https://www.npmjs.com/package/@mockoon/serverless) (`@mockoon/serverless`).
- [**Commons server library**](https://www.npmjs.com/package/@mockoon/commons-server) (`@mockoon/commons-server`).

## Patched version

Both vulnerabilities have been fixed in version [**`9.7.0`**](/releases/9.7.0/) and later.

We urge all users to **update to version `9.7.0` or newer immediately**. You can [download the latest desktop version](/download/) or update the CLI and Serverless packages from NPM:

`npm install @mockoon/cli@latest @mockoon/serverless@latest`
