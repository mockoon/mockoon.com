---
title: "🚀 Release: Refactoring, CLI (wip) and a new team member!"
excerpt: This release brings the long-awaited OpenAPI schema generator and rules interpretation as "AND" together with the usual bug fixes.
date: '2020-11-12'
meta:
  title: New version out for your favorite API mocking tool!
  description: Discover all the new features and improvements packed in this release. 👀 OpenAPI body samples, rules "AND" and bug fixes.
canonical: https://github.com/mockoon/mockoon/releases/tag/v1.11.0
---

# 🚀 Release: Refactoring, CLI (wip) and a new team member!

###### Published on 2020-11-12

___ 

Welcome to this new release of Mockoon. There are several bug fixes and new features in this version that we hope you will like. But first some news: 
- There is a new [tutorials section](https://mockoon.com/tutorials/) on the website, where you will be able to learn new mocking tricks. 
- The development of the CLI started and is progressing well (we already have a basic version working internally, yay!). It required some heavy refactoring tackled in this version. 
- We can now say "we" for real as a second maintainer joined the team for twice the throughput 🚀. You can follow [Fabrice](https://github.com/fabhoarau) on GitHub 🎉.

And now the changelog:

### New features 

- Route responses can now be randomized. This option available next to the route responses list will have priority over the rules. As a consequence, the CORS icon changed to reuse the "shuffle" icon for this feature. (Issue #269)
- Valid MongoDB ObjectIds can now be generated with a new `objectId` helper. See the [templating documentation](https://mockoon.com/docs/latest/templating/overview/) for more information. (Issue #342)
- The export menu has a new option to export the currently selected environment only. (Issue #251)
- Environments can now be started/stopped all at once with a new menu option (`Action` -> `Start/stop/reload all environments`). (Issue #90)

### Improvements

- When auto-mocking from the environment logs, the API prefix is no longer part of the newly created route path. (Issue #333)

### Bug fixes

- Fix automated tests not running correctly due to the newly added splash screen. (Issue #341)
- Fix broken layout in some rare cases due to usage of responsive row/col. (Issue #365)

### Misc

- Update Mockoon to Electron 10. (Issue #350)
- Update automated tests to Spectron 12 to improve the tests stability. (Issue #350)
- Project was migrated from TSlint to ESlint, in order to reuse the configuration for the `commons` library and the future CLI. (Issue #360)
- Current application and future CLI's shared code have been extracted in a [new library](https://github.com/mockoon/commons). (Issue mockoon/commons#1). 

## Thank you

A big thank you to the following people that helped to make Mockoon better:

- [@codingcircus](https://github.com/codingcircus): Start all environments menu entry. (Issue #90)
- [@gVirtu](https://github.com/gVirtu): Export current environment option. (Issue #251)
- [@lukefx](https://github.com/lukefx): `objectId` helper. (Issue #342)
- [@sleepypikachu](https://github.com/sleepypikachu): `newline` and `base64` helpers. (Issue #333)
- [@Thanakorn-ki](https://github.com/Thanakorn-ki): Randomized route responses. (Issue #269)
