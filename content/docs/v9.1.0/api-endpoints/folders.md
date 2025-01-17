---
title: Folders
meta:
  title: Mockoon folders documentation
  description: Everything about Mockoon API endpoint folder and sub-folders organization, reordering, auto repair and route precedence
order: 240
---

# Folders

---

## Organize your endpoints

You can organize your routes into folders and sub-folders:

![routes organized in folders and sub-folders{849x521}](docs-img:routes-nested-folder.png)

This new feature allows you to better organize your routes and make your APIs more readable and easier to navigate, with a clearer hierarchy.
You can drag and drop to move or reorganize your routes and folders.

## Routes order

The server will create the endpoints in the same order they appear in the list, should they be inside folders or not. See the [routing](docs:api-endpoints/routing#routes-order) documentation for more information.

## Repairing the data file

If Mockoon's [data file](docs:mockoon-data-files/data-files-location) has broken references due to improper manipulation of the JSON, such as missing routes or nonexistent folders, it will automatically be repaired upon loading.
If a route or folder does not exist, it will be automatically removed. On the other hand, unlisted routes and folders will be added back to the root level.
