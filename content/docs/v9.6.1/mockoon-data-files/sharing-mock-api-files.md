---
title: Sharing your mock API files
meta:
  title: Sharing your mock API files
  description: Learn how to easily share your mock API files with other mockoon users, or use them with the CLI, and setup a git repository
order: 1110
---

# Sharing your mock API files

---

> ☁️ **Data synchronization and team collaboration** are available as part of our [Mockoon Cloud subscription](/cloud/). It allows you to share your environments with your team and collaborate in real-time.

## Sharing a mock API

Each file can be easily shared with other Mockoon's users, "as-is". After [locating your environment file](docs:mockoon-data-files/data-files-location#locating-the-files), you can share it with your coworkers by using Git for example. You coworkers can then save the file in any folder and open it directly using the "Open environment" button:

![open an environment{625x299}](docs-img:open-environment.png)

## Use a Git-tracked folder

You can save your environment data files in a Git-tracked folder to make sharing easier. By default, an environment file JSON content is saved pretty-printed to allow comparing changes between two commits.
You can disable pretty printing in the settings:

![disable pretty printing{860x812}](docs-img:storage-pretty-printing.png)

## Use a mock API with the CLI

The CLI is directly [compatible with environment files](https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md#use-your-mockoon-environment-file). After locating your environment file, you run them with the CLI using the following command: `mockoon-cli start -d ./path-to-file/environment-data-file.json`.

## Share JSON setups using the clipboard

Mockoon allows you to easily copy an environment or a route's JSON configuration to the clipboard and create a new environment or route from the clipboard's data.

### Copy an environment or a route JSON to the clipboard

To copy a specific environment or route's JSON data to the clipboard, right-click on the environment or route and select **Copy to clipboard (JSON)**:

![Right click on an environment and click on Copy to clipboard (JSON){751x399}](docs-img:export-clipboard-env.png)

The resulting JSON can be saved in a file and directly opened in the desktop app or used with the CLI.

### Create a new environment from clipboard's data

To create a new environment from data present in the clipboard, open the **File** menu and select **New environment from clipboard**:

![Create new environment from clipboard{802x289}](/images/docs/shared/new-environment-from-clipboard.png)

You will be prompted to choose a save location for your new environment.

### Create a new route from clipboard's data

To create a new route from data present in the clipboard, open the **Routes** menu and select **Add route from clipboard**:

![Create new route from clipboard{802x289}](/images/docs/shared/new-route-from-clipboard.png)

The new route will be added to your active environment's routes.
