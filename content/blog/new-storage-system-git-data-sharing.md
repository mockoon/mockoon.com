---
title: New storage system and improved data sharing
excerpt: Share your mock API data more easily with the new storage system and start working in no time with our ready-to-use API mock samples
date: '2021-10-14'
image: new-storage-system.png
imageAlt: Mockoon logo with suitcase
imageWidth: 1200
imageHeight: 400
tags:
  - releases
meta:
  title: New storage system and improved data sharing
  description: Share your mock API data more easily with the new storage system and start working in no time with our ready-to-use API mock samples
---

We are happy to share with you a new version of Mockoon ([v1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0)) and the CLI ([v1.2.0](https://github.com/mockoon/cli/releases/tag/v1.2.0)), fixing many bugs and bringing some exciting new features.

We hope you will enjoy them! Do not hesitate to give us your [feedback](/contact/) 😃

## New storage system

For this release, we revamped how Mockoon stores its data. As a result, Mockoon is now easier to use and more in line with the industry standards. It took us lots of time, but we are proud of the result. This change brings multiple benefits: more flexibility, easier API mock sharing, relative file resolving, etc.

### The old system

Until now, Mockoon was storing its data, the API mock you create in the interface, in a basic way inherited from Mockoon's early days in 2017. All of your environments were stored in the same `environments.json` file in the application data folder. It was lost in your operating system user folder: `c:/Users/username/AppData/Roaming/mockoon/storage` on Windows or `~/.config/mockoon/storage` on Linux.

The new system aligns with how file editors work. It stores each environment separately and lets you open them from anywhere on your hard drive.

### What happened to my `environments.json` file?

When updating to version 1.16.0, Mockoon automatically migrated the old `environments.json` file and split it into as many files as you had environments. These files were created in the same `storage` folder with incremental names: `environment-0.json`, `environment-1.json`, etc.

![one file vs multiple files after the migration{600x252}](/images/blog/new-storage/migration.png)

You can now move these files anywhere on your hard drive and open them from there.

### New buttons, menu entries, and behaviors

As a consequence of this change, when creating, duplicating, or importing a new API (in Mockoon or OpenAPI format), you will now be prompted to choose a folder and filename to save your new mock.
We also added new buttons and menu options to allow you to manage your environment files. You can create a new environment or open an existing one using the two buttons at the top of the environment menu:

![open environment button{298x155}](/images/blog/new-storage/new-open-environment.png)

You can now close one environment using the context menu:

![context menu close environment{262x335}](/images/blog/new-storage/close-environment-menu-entry.png)

Finally, there is a new context menu entry you can use to locate the environment file on your computer:

![context menu show in folder{411x365}](/images/blog/new-storage/show-in-folder-environment-menu-entry.png)

### Easier sharing

With this update, you can now share your environments with your coworkers by saving them in a Git-tracked folder. Before, you would have to use the import/export feature or set up a git repository in the `storage` folder, which wasn't practical.
We also decided to save your environment JSON files pretty-printed by default. It will make working with merge conflicts and highlighting changes easier when using Git. You can disable this option in the settings:

![Disable storage pretty printing in the settings{817x610}](/images/blog/new-storage/disable-storage-pretty-print.png)

### File path resolving

Some long-awaited changes were made to the body files path resolving. From now on, Mockoon will try to resolve your body files from the environment's file directory. It allows you to store an environment's body files alongside the main file and share them with your coworkers without having relative or absolute path issues.

![body file path{836x291}](/images/blog/new-storage/file-path.png)

> This is also true with the [CLI v1.2.0](https://github.com/mockoon/cli/releases/tag/v1.2.0) which will resolve the files relatively to the environment or export file that was passed as an argument.

### Environment schema validation

Behind the scene, we also added an environment schema validation to ensure that the environment you load is valid and do not break the application behavior. This system can repair environment files should they miss any property. It will also ensure that all the UUIDs present in the environment files are unique. As part of your workflows, you can now edit or duplicate environment files outside Mockoon without encountering erroneous states in the application.

### Import/export "deprecation"?

Before this change, many of you relied on the import/export feature to share their environments with their coworkers. As you can now directly open environment files from anywhere and share them as-is, the import/export (in Mockoon's format) option seems redundant and does not offer any advantage. This feature may be deprecated and removed in a future version.
It's even truer considering that the [CLI](https://mockoon.com/cli/) is now fully compatible with single environment files and does not require export files to work.
The import/export feature in the OpenAPI format is, of course, still relevant.

---

## New mock samples

We added more API samples to help you start working in no time with your favorite APIs: Buffer, Notion, GitHub, etc. You can find them on our website [mock samples page](https://mockoon.com/mock-samples/category/all/).
Starting with this version, you can load them directly in Mockoon by clicking on the "Open" buttons present on the page.

![mock api samples page{1078x637}](/images/blog/new-storage/mock-api-samples.png)

---

## XML support

Last but not least, we added [support for the XML format](docs:response-configuration/xml-support). It means that you can now reuse part of the entering XML bodies with various [templating helpers](docs:templating/overview) (`body`, etc.) and [define rules](docs:route-responses/dynamic-rules) to serve different responses depending on the XML content.
