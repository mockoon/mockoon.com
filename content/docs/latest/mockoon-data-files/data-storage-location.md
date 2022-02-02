---
title: Data storage location
meta:
  title: Data storage location
  description: Learn where Mockoon's data storage files and application settings are located and how to move them to other folders
order: 1100
---

# Data storage location

---

## Locating the files

Since [v1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0), Mockoon is storing each mock API's data in a separate file.

You can locate the folder in which the API data are stored by right-clicking on each environment and selecting **"Show in folder"**:

![click on show in folder in the context menu{373x267}](/images/docs/v1.17.0/environment-show-in-folder.png)

You can move these files anywhere on your hard drive and re-open them from there.

## Old system

Before version 1.16.0, all of your environments were stored in the same `environments.json` file in the **application data folder**. The file was located in your operating system's user folder:

- Windows: `c:/Users/xxx/AppData/Roaming/mockoon/storage`
- Linux: `~/.config/mockoon/storage`
- macOS: `~/Library/Application Support/mockoon/storage`

When updating to version 1.16.0, Mockoon automatically migrated the old `environments.json` file (see below) and split it into as many files as you had environments. These files were created in the same `storage` folder with incremental names: `environment-0.json`, `environment-1.json`, etc.

![one file vs multiple files after the migration{600x252}](/images/docs/storage-migration.png)

## Application settings

Mockoon's settings are always stored in your operating system's user folder:

- Windows: `c:/Users/xxx/AppData/Roaming/mockoon/storage`
- Linux: `~/.config/mockoon/storage`
- macOS: `~/Library/Application Support/mockoon/storage`
