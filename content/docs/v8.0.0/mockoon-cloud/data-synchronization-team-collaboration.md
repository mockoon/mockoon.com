---
title: Data synchronization and team collaboration
meta:
  title: Data synchronization and team collaboration
  description: Learn how to use Mockoon Cloud to synchronize your data across your team and collaborate on your mock API projects
order: 901
badges:
  - cloud
---

# Data synchronization and team collaboration

---

[Mockoon Cloud](/cloud/) allows you to **synchronize your mock APIs in the cloud**, share them with your team, and **collaborate in real time**. This feature is available in the desktop application and is part of the Mockoon Cloud paid plans. Read on to learn how to use it and the different features it offers.

## Cloud vs local environments

The **local environment** is the default environment in Mockoon. It is [stored on your local machine](docs:mockoon-data-files/data-storage-location) and not synchronized with the cloud.

**Cloud environments** are stored on our servers, and a local copy is kept on each client's machine. You can easily **create a cloud copy** of your local environment or **convert an existing cloud environment** back to a local environment.

![Cloud and local environments menus{200x231}](docs-img:cloud-sync-menu.png)

## Managing your cloud environments

### Create a cloud environment

There are multiple ways to **create a cloud environment**. You can use the context menu in the local environments list to create a cloud environment from a local one using "Duplicate to the cloud" or create a new cloud environment from scratch using "New cloud environment" from the cloud environments menu.

![context menus to create cloud environments{569x492}](docs-img:create-cloud-environment.png)

The new cloud environment will be created and synchronized with the cloud, together with a local copy. It will be available on all your devices (solo plan) and for all your team members (team/enterprise plans) once they connect to the cloud.

### Remove an environment from the cloud

You can **remove an environment** from the cloud using the context menu in the cloud environments list and selecting "Convert to local" or "Delete from cloud":

![context menu to convert a cloud environment to local{533x277}](docs-img:convert-cloud-to-local.png)

After converting an environment to local, it will be **permanently removed from the cloud** and **converted to a local environment** on all your devices (solo plan) and for all your team members (team/enterprise plans).

## Team collaboration and conflict handling

This feature is designed to allow multiple users (Team and Enterprise plans) to work on the same environment at the same time. The application will handle conflicts on a **last-write-wins** basis, but many changes can be made simultaneously without conflicts, for example:

- Editing different properties of the same entity (route, response, etc.).
- Adding the same kind of entity (route, response, etc.) or reordering them.
- Deleting different entities.

However, some parts of the environment definition cannot be edited simultaneously and are considered as a single entity that cannot be merged and will be synchronized as a whole. Here are some examples:

- The environment's or route response's headers list.
- The route response's rules or callbacks list.
- The various editors content (inline body, data bucket, callback, etc.).

## Offline editing

Mockoon's synchronization and collaboration features are primarily designed to work while being **online**. Offline editing works to some extent, but it is **not recommended to simultaneously edit** the same environment while being offline.

When you are offline, a warning is shown in the cloud environments list:

![#sub#Warning shown when the application is offline{391x209}](docs-img:offline-editing-warning.png)

When you modify an environment while being offline and go back online, three scenarios can happen:

- **You made local changes**, but **the cloud version was not modified**: your local changes will be automatically **pushed** to the cloud.
- **You did not make local changes**, but **the cloud version was modified**: the cloud version will be pulled automatically to your local environment.
- **You made local changes**, and **the cloud version was modified**: you will be prompted to **choose** between **keeping** your local changes or **discarding** them.

![#sub#Dialog shown when the application detected a conflict{504x241}](docs-img:offline-conflict-warning.png)

> ⚠️ If multiple users edit the same environment while offline, **only one version of the environment will be kept** and the others will be discarded.

## Disconnection reasons

If you are disconnected from the cloud, the application will display a warning in the cloud environments list in the form of a orange or red cloud icon. Hovering over the icon will display the reason for the disconnection (e.g. incompatible version, etc.). You can also click on the icon to try to reconnect:

![#sub#Tooltip showing a regular disconnection{287x219}](docs-img:offline-reason-disconnected.png)

![#sub#Tooltip showing a disconnection due to an incompatible version{288x221}](docs-img:offline-reason-incompatible-version.png)

## Major versions migrations

Future major versions of Mockoon may introduce **breaking changes to the data model** of your environments. When this happens, the **first device (or user) to connect to the cloud storage will trigger the migration process**. The migration will update the data model of the cloud environments to the new version. Once the migration is complete, older versions of Mockoon will no longer be able to synchronize with your cloud space and will have to be updated.

Here are the steps to follow to migrate your environments to a new major version when working in a team:

1. **Coordinate** with your team to ensure that all users are aware of the upcoming migration.
2. **Update** Mockoon desktop on one device to the new major version. This will trigger the migration process in you cloud space.
3. **Update** Mockoon desktop on all other devices.

> ⚠️ We strongly recommend that major updates installations are **coordinated** across your team to avoid any disruption.

## Plans quotas and limits

The data synchronization feature is available in the Solo and Team/Enterprise plans. The feature's behaviors are similar in all plans, but some **quotas and limits apply**. Here are the main ones:

- **Solo plan**:
  - 5 environments synchronized.
  - 5MB per environment.
- **Team plan**:
  - 10 environments synchronized.
  - 10MB per environment.

For all users (Solo, Team, and Enterprise), the environments can be synchronized across an unlimited number of devices with a limit of 2 simultaneous devices per user.

These quotas and limits are subject to change. Please refer to this documentation for the latest information.

## Current limitations

The data synchronization feature is still in its early stages and has some **limitations**:

- The "presence" indicator is not yet implemented. You will be able to see how many users are currently connected to the cloud space, but you won't be able to see who is editing the environment and what they are editing.
- External files linked to the environment are not synchronized (e.g. environment's certificates or files used in the "File" response body type).
- The CLI and serverless package do not support access to cloud environments yet.
- Team and Enterprise plans are currently not offering a personal cloud space for each user. All environments are shared across the team.
