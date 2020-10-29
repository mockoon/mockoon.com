---
title: ✨ New release with revamped templating system and improved error reporting
excerpt: This new version brings some new features and many new improvements to the templating system and error reporting. The application also has a new documentation section on this website...
date: '2020-07-23'
meta:
  title: Mockoon release v1.9.0 is out!
  description: Discover all the new features and improvements packed in this release. Revamped templating system, improved error reporting and more.
canonical: https://github.com/mockoon/mockoon/releases/tag/v1.9.0
---

This new version brings some new features and many new improvements to the templating system and error reporting. The application also has a new [documentation](https://mockoon.com/docs/latest/) section on this website, which replaces the old tutorials section. 

### Templating system

- Dummy JSON helpers (`{{firstName}}`, `{{date}}`, etc) that could be used in the body have been replaced by [Faker.js](https://github.com/Marak/faker.js). This brings a lot more helpers together with many locales that can be selected in the settings. All the old helpers remain compatible and are automatically linked to their Faker.js equivalent. Faker.js helpers use the following syntax: `{{faker 'company.companyName'}}`, `{{faker 'name.firstName'}}`, etc (Issue #293)
- Improvements to the `body` helper:
  - JSON Objects and arrays can now be retrieved from the entering request's body with templating helpers and added to the response body. (Issue #291)
  - The full request's body can now be retrieved with the `body` helper used with no parameter: `{{body}}`. This is compatible with any Content-Type. (Issue #276)
  - The body helper has been improved for `x-www-url-encoded` bodies. Objects and arrays are now supported. (Issue #290)
- Improvements to the `queryParam` helper: as for the `body` helper, the `queryParam` helper can now retrieve paths, arrays, objects, or the full query params object. (Issue #265 )
- Templating can now be disabled for bodies and files content. Head up to the new route response's "Settings" tab. (Issue #129)

For more information about the templating system, please refer to the official [documentation](https://mockoon.com/docs/latest/templating/).

### Errors feedback

Application errors feedback has been greatly improved especially for JSON content (Issue #253):
  - All errors, including templating errors, are now reported in the response body.
  - Erroneous JSON bodies are now sent in the response to make debugging easier.
  - Incoming and outgoing bodies can now be easily viewed in an editor with linting activated in the environment logs ("clock" icon, in the upper right corner). This is especially useful to view the outgoing body built with the templating helpers.
  - Templating system errors are now better reported, including for templating used in headers or file path.

### Other improvements

#### Features 

- Route responses can now be duplicated by clicking on the "copy" button next to the route response's tabs. (Issue #250)

#### UI improvements

- Routes and environment logs menus can now be resized. These preferences are automatically saved. (Issue #104)
- Scrollbars now have a lighter color to make them more visible. (Issue #297)
- The "Open in browser" button next to the route path is now always visible but disabled for non GET routes. (Issue #287)
- The file browsing button use has been clarified by adding a tooltip. (Issue #254)
- Scrolling of environments and routes menu has been disabled when duplicating. (Issue #296)

#### Bug fixes

- Data storage has been improved to better handle crashes and report errors. (Issue #313)
- When serving a file, the environment's Content-Type could override the file's detected mime type. A route Content-Type can still override the detected mime type. Order of precedence: `Route's Content-Type` > `File's mime type` > `Environment's Content-Type`. (Issue #295)
- Application was crashing when using some templating helpers (`{{boolean}}`). (Issue #285)
- Fixed a bug when binary bodies were truncated for environment logs. (Issue #294)
- The route responses dropdown is now scrollable should you have a lot of items. (Issue #305)
- Environment logs response and request tabs do not scroll with the content anymore. (Issue #311)
- Body editor's tab size is now set to 2 spaces by default. It was previously set to 4, which was inconsistent with other options using 2 spaces. (Issue #312)

#### Misc

- Demo environment has been updated to better show Mockoon's capabilities. (Issue #300)
- Release notes are now shown on startup after an update. (Issue #302)
- This website has a new versioned [documentation](https://mockoon.com/docs/latest/) regrouping the old "tutorials". It will be frequently updated to reflect the application evolution and add new topics.

#### Code enhancements/developer experience

- Environment logs system have been refactored to easier future developments.

### Thank you

A big thank you to the following people that helped to make Mockoon better:

- [Sotiris Chatzianagnostou (@sotcha)](https://github.com/sotcha): resizing of routes and logs menus (Issue #104)
- [izerozlu (@izerozlu)](https://github.com/izerozlu): route responses duplication (Issue #250)
