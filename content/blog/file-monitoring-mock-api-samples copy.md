---
title: File monitoring and 2000+ new mock samples
excerpt: Discover this update's mock files monitoring, thousands of new mock samples, import/export deprecation, Google Analytics removal
date: '2022-06-16'
image: file-monitoring-mock-samples.png
imageAlt: Mockoon logo with file icon
imageWidth: 1200
imageHeight: 400
meta:
  title: File monitoring and 2000+ new mock samples
  description: Discover this update's mock files monitoring, thousands of new mock samples, import/export deprecation, Google Analytics removal
---

We are happy to share some highlights from the two last versions of Mockoon desktop and CLI ([v1.18.0](https://github.com/mockoon/mockoon/releases/tag/v1.18.0) and [v1.19.0](https://github.com/mockoon/mockoon/releases/tag/v1.19.0)).

We hope you will enjoy them! Do not hesitate to give us your [feedback](/contact/) 😃
Check the changelogs for a list of the other improvements and bug fixes.

## File monitoring

Mockoon can now monitors environment files external changes and automatically reloads the interface with the new data. You can activate this option in the settings:

![Mockoon settings view with file monitoring option{825x158}](/images/blog/file-monitoring/file-monitoring-setting.png)

After a change is detected, your mock setup will be automatically updated or after validating a confirmation prompt:

![Mockoon file monitoring reload prompt{543x296}](/images/blog/file-monitoring/file-monitoring-prompt.png)

## Mock API sample

To help you mock third-party APIs in no time, we added more than **2000** new mock samples: 1Password, AWS, Giphy, Mastercard, Slack, etc.
You can run them directly in the application or the CLI with one click.
[Discover all the mock samples](/mock-samples/category/all/)

![mock sample page from mockoon website{1031x511}](/images/blog/file-monitoring/mock-sample.png)

## Mockoon button

We added a [button](/integrations/embedded-button/) that you can add to your website to offer your users a convenient way to launch your API mocks in one click. It uses Mockoon's custom protocol `mockoon://` to open your mock API directly in the desktop application. You can also provide your user with a ready-to-use CLI command (see below).
![interface for creating a mockoon button{676x442}](/images/blog/file-monitoring/mockoon-button.png)

## Import/export deprecation

We removed the options to import/export your mock data in Mockoon's proprietary format. Since v1.16.0, importing and exporting in Mockoon's format was mostly useless. Environment files are now easier to share "as-is", and are supported out of the box by the CLI. Also, user feedback indicated that keeping this export option was confusing.
Exporting environments and routes to the clipboard (in the right-click context menu) now copy the regular JSON data without wrapping them in the old export format.
The application and the CLI are still able to open old export files, but you won't be able to create them anymore.

On a side note, we updated the [OpenAPI documentation](/docs/latest/openapi/openapi-specification-compatibility/) to explain the discrepancies between the specification and Mockoon's features.

## Easier default response selection

We made it easier to define the default response. Before this change, the default response was always the first in the list. Now, the blue flag indicates the default response, and you can change it by clicking on the grey flag:

![default route response marked by a blue flag{724x150}](/images/blog/file-monitoring/default-response.png)
![change default route response by clicking grey flags{724x150}](/images/blog/file-monitoring/default-response-selection.png)

## New templating helpers and fixes

We added some new templating helpers (`lowercase`, `uppercase`, and `base64Decode`) and fixed many of them.

We also updated [Faker.js](https://fakerjs.dev/) to version 6. It offers some new helpers and locales.

## Google Analytics removal

Following the introduction of a custom privacy-friendly telemetry system last year (you can opt-out of this telemetry system in the application settings), we removed Google Analytics from the desktop application.  
As before, we collect no data or telemetry in the CLI.
