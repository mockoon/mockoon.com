---
title: New unified versioning v3.0.0
excerpt: Mockoon is now using unified versioning across all its packages, starting with release v3.0.0.
date: '2023-04-28'
image: new-unified-versioning.png
imageAlt: Mockoon logo with screenshot
imageWidth: 1200
imageHeight: 400
meta:
  title: New unified versioning v3.0.0
  description: Mockoon is now using unified versioning across all its packages, starting with release v3.0.0. Learn more!
---

## Semantic versioning, sort of

Mockoon has been employing semantic versioning throughout all its applications since the start. However, the [desktop application](/download/), the [CLI](/cli/), and later the [serverless package](/serverless/), were not published under the same version.

It could cause some confusion when trying to know which version of the CLI was compatible with the desktop application. In practice, the latest CLI v2.4.0 was compatible with the desktop application v1.23.0. Not very intuitive.

Moreover, the desktop application was not really following semantic versioning and was not released with a major version number when there were breaking changes (i.e. data migrations).  
Same for the CLI and serverless package which were following semantic versioning but only taking into account their own features (e.g. a new flag for the CLI).

As a result, the CLI could be upgraded automatically without requiring any action from the user if a new release only incremented the minor version. However, if the user continued to use the previous version of the desktop application, it could potentially disrupt automated workflows if a data migration was part of the release.

## Unified versioning 🥳

Starting with release [v3.0.0](/releases/3.0.0/), we unified the versioning across all our packages. The desktop application, the CLI, and the serverless package will all be released with the same version number.
Our intention with this change is to simplify your experience and provide clarity regarding the compatibility of the CLI or serverless package version with the latest functionalities of the desktop application.

In practical terms, this means that:

- The desktop application will now follow semantic versioning and will be released with a major version number when there are breaking changes (i.e. data migrations). Its version was bumped to v3.0.0 to reflect this change and to be in sync with the CLI.
- Each application will now take into account the other applications' versions when incrementing its version number. For example, the CLI v4.0.0 will be released when the desktop application v4.0.0 is released, even if there are no new features or breaking changes in the CLI, and vice versa.

We hope this change will make your experience with Mockoon even better. As always, feel free to [reach out](/contact/) if you have any questions or feedback.
