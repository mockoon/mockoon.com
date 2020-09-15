---
title: 👀 OpenAPI body samples and rules "AND" are available in new version 1.10.0
excerpt: This release brings the long-awaited OpenAPI schema generator and rules interpretation as "AND" together with the usual bug fixes.
date: '2020-09-15'
meta:
  title: A new version of Mockoon, your favorite API mocking tool, is out!
  description: Discover all the new features and improvements packed in this release. 👀 OpenAPI body samples, rules "AND" and bug fixes.
canonical: https://github.com/mockoon/mockoon/releases/tag/v1.10.0
---

Welcome to this new release of Mockoon. There are several bug fixes and new features in this version that we hope you will like:

### New features 

- A JSON body sample is now generated during a Swagger/OpenAPI file import when a schema is present. (Issue #288) 
- Response rules can now be interpreted as OR or AND. (Issue #201)
- Rules can now check JSON bodies number and boolean values. (Issue #321)
- Two new helpers are available in the templating system: `newline`, which inserts the newline character "\n", and `base64` inline or block helper to encode all your stuffs. For more information, please refer to the official [documentation](https://mockoon.com/docs/latest/templating). (Issue #331)

### Bug fixes

- Fix an issue where some helpers (`queryParam`, `body`, etc) couldn't be used as `switch` helper value. (Issue #325)
- Fix crash when importing Swagger files where the `host` property is missing. (Issue #326)
- Binary files are now properly sent instead of being converted to strings. (Issue #324)
- Windows-like file path (with backslashes) are now compatible with templating helpers `C:\Users\username\Desktop\{{ urlParam 'id' }}.json`. (Issue #323)
- The environment's logs layout is not broken anymore when displaying long binary bodies. (Issue #335)
- Fixed a silent error when export dialog was canceled. (Issue #337)

### UI improvements

- Export menu items are now disabled when there is no environment to export. (Issue #336)
- Route path input now autofocus after adding a new route. (Issue #334)
- Mockoon has a new fancy loading screen 👀 to avoid content flickering during load.

### Misc

- Work has started on the CLI (mainly refactoring), but shhh 🤫 don't say it too loud, there is still a long way to go!

## Thank you

A big thank you to the following people that helped to make Mockoon better:

- [@maillouxc](https://github.com/maillouxc): `newline` and `base64` helpers. (Issue #331)
- [@ninjaneer164](https://github.com/ninjaneer164): AND/OR operator for response rules. (Issue #201)
- [@Spissable](https://github.com/Spissable): Swagger import fix. (Issue #326)
