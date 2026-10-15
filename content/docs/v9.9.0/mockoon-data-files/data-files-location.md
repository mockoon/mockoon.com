---
title: Data files
meta:
  title: Data files
  description: Learn where Mockoon's data storage files and application settings are located and how to move them to other folders
order: 1100
---

# Data files

---

Mockoon desktop stores each mock API's data in a separate file. These files contain all the information about the environment, routes, and responses. They are stored in a JSON format and can be easily [shared](docs:mockoon-data-files/sharing-mock-api-files) with other Mockoon users, [used with the CLI](https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md#use-your-mockoon-environment-file), or stored in a git repository.

## Data files schema

Each environment file contains information about the environment, routes, and responses. They are stored in a JSON format following a schema and are validated every time you open an environment. This schema is available in the [repository](https://github.com/mockoon/mockoon/blob/main/packages/commons/src/constants/environment-schema.constants.ts).

## Locating the mock API files

You can locate the folder in which the API data are stored by right-clicking on each environment and selecting **"Show data file in explorer/finder"**:

![click on show in folder in the context menu{551x380}](docs-img:environment-show-in-folder.png)

## Moving the files

You can move the data files to another folder by right-clicking on an environment and selecting **"Move data file to folder"**:

![click on Move data file to folder in folder in the context menu{551x411}](docs-img:environment-move-to-folder.png)

> 💡 Please note that the environment file will be copied to the new folder, and the original file will **not** be deleted. If you want to delete the original file, you will have to do it manually.

## Enabling data file watching

Mockoon can monitor data files' external changes and automatically reload the interface with the new information. This is particularly useful when you are editing the data files with an external editor or pulling changes from a git repository. You can activate this option in the settings:

![enable file monitoring in the settings{860x812}](docs-img:enable-file-watching.png)

## Mockoon Pro environments

With Mockoon Pro, you can create synchronized environments stored on your private Mockoon Pro server. For self-hosted installations, these environments are persisted in the server's mounted `/data` volume. The desktop application also keeps a local copy on each connected device.

Synchronized environments are available across your devices and let your team collaborate in real time. Learn more in the [data synchronization and team collaboration documentation](pro-docs:features/data-synchronization-team-collaboration).
