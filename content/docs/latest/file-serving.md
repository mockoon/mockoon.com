---
title: File serving
meta:
  title: Mockoon file serving documentation
  description: Serve files as body for your mock API, use the templating system and set relative or absolute paths for easier sharing.
order: 35
---

# File serving

---

Besides using the body editor, Mockoon allows you to serve different files for each route. File serving should be the preferred method when you want to send lots of data.

## Using files

To serve a file, you must provide a path in the file input field:

![fill the file input field](/images/docs/v1.17.0/file-path.png)

> When a file path is provided, the body editor content will be ignored.

## Absolute or relative paths

You can either provide an absolute path like `/home/username/file.json` or a relative path. Starting with [v1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0), relative paths are resolved from the environment's file location. You can check the environment's file location by right-clicking on an environment en select "Show in folder" in the contextual menu:

![show in folder menu entry](/images/docs/v1.17.0/environment-show-in-folder.png)

> Prior to v1.16.0, relative file paths were resolved from the application executable. This is also supported by the CLI since its version [1.2.0](https://github.com/mockoon/cli/releases/tag/v1.2.0).

## Templating

[Templating](docs:templating/overview) is available in both the file content and the file input field.

### File content templating

As for the body editor, templating will be parsed inside files for a limited set of MIME types (`application/json`, `text/html`, `text/css`, `text/csv`, `application/javascript`, `application/typescript`, `text/plain`, `application/xhtml+xml`, `application/xml`). You can use all the available templating helpers to generate dynamic mock data.

Templating can be disabled both for the body editor and the file content. Please refer to the [templating documentation](docs:templating/overview#disable-body-and-file-templating) for more information.

### File input templating

Templating is also supported directly in the **file input field**. It allows to dynamically generate the file path using helpers. Please refer to the [templating documentation](docs:templating/overview#file-input-templating) for more information.

## 404 fallback

By default, Mockoon will return an error in the body when a file is not found. It will still keep the status code you set up on your route response. You can instead choose to automatically return a 404 by activating an option in the route response settings:

![tick the 404 fallback checkbox](/images/docs/v1.17.0/enable-404-fallback.png)

This option will also fall back to use the content present in the body editor.
