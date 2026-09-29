---
title: Data synchronization and team collaboration
meta:
  title: Data synchronization and team collaboration
  description: Learn how to use Mockoon Pro to synchronize your data across your team and collaborate on your mock API projects
order: 300
---

# Data synchronization and team collaboration

---

[Mockoon Pro](/pro/) allows you to **synchronize your mock APIs**, share them with your team, and **collaborate in real time**. This feature is available in both the [desktop application](pro-docs:clients/desktop-application) and the [embedded web application](pro-docs:clients/embedded-web-application).

## Cloud vs local environments in the desktop application

The **local environment** is the default environment in Mockoon desktop. It is [stored on your local machine](docs:mockoon-data-files/data-files-location) and not synchronized with the cloud.

**"Cloud" environments** are stored on your Mockoon Pro server, and a local copy is kept on each client's machine. You can easily **create a cloud copy** of your local environment or **convert an existing cloud environment** back to a local environment.

![Cloud and local environments menus{200x231}](pro-docs-img:cloud-sync-menu.png)

## Managing your cloud environments

### Create a cloud environment

There are multiple ways to **create a cloud environment**. You can use the context menu in the local environments list to create a cloud environment from a local one using "Duplicate to the cloud" or create a new cloud environment from scratch using "New cloud environment" from the cloud environments menu.

![context menus to create cloud environments{569x492}](pro-docs-img:create-cloud-environment.png)

The new cloud environment will be created and synchronized with the cloud, together with a local copy. It will be available on all your devices (solo plan) and for all your team members (team/enterprise plans) once they connect to the cloud.

### Remove an environment from the cloud

You can **remove an environment** from the cloud using the context menu in the cloud environments list and selecting "Convert to local" or "Delete from cloud":

![context menu to convert a cloud environment to local{533x277}](pro-docs-img:convert-cloud-to-local.png)

After converting an environment to local, it will be **permanently removed from the cloud** and **converted to a local environment** on all your devices (solo plan) and for all your team members (team/enterprise plans).

## Team collaboration and conflict handling

This feature is designed to allow multiple users to work on the same environment at the same time. The application will handle conflicts on a **last-write-wins** basis, but many changes can be made simultaneously without conflicts, for example:

- Editing different properties of the same entity (route, response, etc.).
- Adding the same kind of entity (route, response, etc.) or reordering them.
- Deleting different entities.

However, some parts of the environment definition cannot be edited simultaneously and are considered as a single entity that cannot be merged and will be synchronized as a whole. Here are some examples:

- The environment's or route response's headers list.
- The route response's rules or callbacks list.
- The various editors content (inline body, data bucket, callback, etc.).

**Presence indicators** are displayed in the application to show who is currently **connected** and **editing** an environment. They are visible in the cloud environments list, indicating if a user is editing an environment (left side of the image). Additionally, presence indicators are shown at the top of the application, displaying the users currently connected to the cloud space (right side of the image).

![Presence indicators{668x157}](pro-docs-img:presence-indicators.png)

> 💡 You can customize your display name in the [application settings](/account/info/) to make it easier for your team members to identify you.

### Synchronizing after being offline

Mockoon's synchronization and collaboration feature is designed to work while being **online**. Offline editing is disabled.

When coming back online after being offline, the application will automatically pull the latest version of the cloud environments.

## Disconnection reasons

If you are disconnected from the cloud, the application will display a warning in the cloud environments list in the form of a orange or red cloud icon. Hovering over the icon will display the reason for the disconnection (e.g. incompatible version, etc.). You can also click on the icon to try to reconnect:

![#sub#Tooltip showing a regular disconnection{287x219}](pro-docs-img:offline-reason-disconnected.png)

![#sub#Tooltip showing a disconnection due to an incompatible version{288x221}](pro-docs-img:offline-reason-incompatible-version.png)

## Major versions migrations

Future major versions of Mockoon may introduce **breaking changes to the data model** of your environments. When this happens, the **first device (or user) to connect to the cloud storage will trigger the migration process**. The migration will update the data model of the cloud environments to the new version. Once the migration is complete, older versions of Mockoon will no longer be able to synchronize with your cloud space and will have to be updated.

Here are the steps to follow to migrate your environments to a new major version when working in a team:

1. **Coordinate** with your team to ensure that all users are aware of the upcoming migration.
2. **Update** Mockoon desktop on one device to the new major version. This will trigger the migration process in you cloud space.
3. **Update** Mockoon desktop on all other devices.

> ⚠️ We strongly recommend that major updates installations are **coordinated** across your team to avoid any disruption.

## Unsupported features

The data synchronization does not support the following features:

- External files linked to the environment are not uploaded and served (e.g. environment's certificates or files used in the "File" response body type). File serving is generally not supported in remote environments and linking files is disabled.
