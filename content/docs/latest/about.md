---
title: About the documentation
meta:
  title: Learn about Mockoon's documentation
  description: Discover Mockoon's features and options, explore advanced topics and learn how to create fast and free mock API JSON servers.
order: 10
---

# About the documentation

---

This documentation covers Mockoon's most used features and options to help you create the best mock APIs. These topics apply to the [desktop application](/download/), [CLI](/cli/), and [serverless package](/serverless/) which supports the same features.

You will find a documentation for the most recent releases of Mockoon. Head over to our [releases section](/releases/) for more details about the changes in each version.

If you find a mistake in the documentation, you can open an issue on the [website's repository](https://github.com/mockoon/mockoon.com).

## CLI-specific documentation (flags, etc.)

You will find the [CLI documentation](https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md) in its dedicated readme file on the repository. It covers the CLI's specific features, like the available flags or how to use the Docker file.

## Serverless-specific documentation (options, etc.)

You will find the [serverless package documentation](https://github.com/mockoon/mockoon/blob/main/packages/serverless/README.md) in its dedicated readme file on the repository. It covers the package usage instructions and specific features.

## Versioning

Even if Mockoon is primarily a desktop application, we are following [semantic versioning](https://semver.org/). All the applications and packages **share the same version number** for each release.

This allows you to migrate from one version to another without worrying about compatibility issues between the desktop application and the CLI or serverless package.

### Major versions

While the desktop application can easily **migrate from one version to another** (including major versions), this is not the case for the CLI or serverless package. When you are using one of your [data files](docs:mockoon-data-files/data-storage-location) with the CLI or serverless package, or sharing it with your team, you need to make sure that the data file schema is compatible with the version you or your team is using.

Every time we introduce a **breaking change** in the data file schema (e.g. new feature) we release a **new major version**. We recommend that you always migrate simultaneously to the same major version for all the desktop applications and packages you are using.

> 📝 Note to our Cloud users: the same recommendation applies when you are using our **Cloud features**. Please have a look at the [team collaboration](docs:mockoon-cloud/data-synchronization-team-collaboration#major-versions-migrations) and [cloud deployments](docs:mockoon-cloud/api-mock-cloud-deployments#major-versions-migrations) documentations for more information.
