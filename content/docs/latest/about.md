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

## Other documentations

### CLI-specific documentation (flags, etc.)

You will find the [CLI documentation](https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md) in its dedicated readme file on the repository. It covers the CLI's specific features, like the available flags or how to use the Docker file.

### Serverless-specific documentation (options, etc.)

You will find the [serverless package documentation](https://github.com/mockoon/mockoon/blob/main/packages/serverless/README.md) in its dedicated readme file on the repository. It covers the package usage instructions and specific features.

### Web application

The [web application](cloud-docs:web-application) is a web version of the desktop application available for Mockoon Cloud customers. While based on the same codebase, it is not a direct replacement for the desktop application and does not support all the features. Please refer to the [web application documentation](cloud-docs:web-application#ui-differences) for more information about the differences.

## Versioning

Even if Mockoon is primarily a desktop application, we are following [semantic versioning](https://semver.org/). All the applications and packages **share the same version number** for each release.

This allows you to migrate from one version to another without worrying about compatibility issues between the desktop application and the CLI or serverless package.

### Support policy

Older versions of Mockoon **are not actively supported**. We recommend that you always use the latest version of Mockoon to benefit from the latest features, improvements, and security patches.

### Major versions and migration

While the desktop application can easily **migrate from one version to another** (including major versions), this is not the case for the CLI or serverless package. When you are using one of your [data files](docs:mockoon-data-files/data-files-location) with the [CLI](/cli/), [serverless package](/serverless/), [Docker image](https://hub.docker.com/r/mockoon/cli), or sharing it with your team, you need to make sure that the data file schema is compatible with the version you or your team is using.

Every time we introduce a **breaking change** in the data file schema (e.g. new feature) we release a **new major version**. We recommend that you always migrate simultaneously to the same major version for all the desktop applications and packages you are using.

> 📝 Note to our Cloud users: the same recommendation applies when you are using our **Cloud features**. Please have a look at the [team collaboration](cloud-docs:data-synchronization-team-collaboration#major-versions-migrations) and [cloud deployments](cloud-docs:api-mock-cloud-deployments#major-versions-migrations) documentations for more information.

#### Migration process

We try to make the migration process as smooth as possible.

- **Desktop application**: after installing a new major version, when you open a data file created with an older major version, the application will **automatically migrate the data file** to the new schema. The file can then be used with the new version of the application, CLI, serverless package, or Docker image.
- **CLI**: the CLI is always compatible with older data file versions as it will **automatically migrate the data file** to the current version when starting a mock server. However, it won't be compatible with data files created with newer major versions and will require you to upgrade to the latest major version.
- **Serverless package**: the serverless package is a simple wrapper around the core library. It always **requires the versions to match** with the desktop application version. You will need to upgrade the serverless package to the latest major version when migrating your data files.
- **Docker image**: the Docker image **runs the CLI**, and the **same rules apply**. You will need to upgrade the Docker image to the latest major version when migrating your data files.

### Breaking changes

When building libraries, the definition of a **breaking change** is usually straightforward. However, when building desktop applications, it's harder to define what a breaking change is.

Also, as we have **multiple components** (desktop application, CLI, serverless package), we have to consider the impact of a change on all these components while avoiding a too-strict definition of a breaking change that would mandate a new major version for every release.

Our definition of a breaking change is a change impacting the [**data schema**](docs:mockoon-data-files/data-files-location) and creating a **compatibility issue** between the applications and packages.

Examples of **schema changes** that would require a **new major version**:

- Adding a new feature requiring a new field.
- Adding a new type in an enum field, like a new rule type.
- Removing a feature that requires removing a field from the schema.

The consequence of such a change is that the data file created with a recent version of the desktop application would not be compatible with an older version of the desktop application, CLI, serverless package, or a team Cloud workspace.

What we do **not consider a breaking change**, even if it might impact the user experience and require a migration effort:

- Changing the UI layout.
- Changing the behavior of a feature (e.g. adding templating support to a field).
- Changing the templating helpers' signatures or adding new ones.
