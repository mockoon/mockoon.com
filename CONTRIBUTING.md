# Contributing to Mockoon's website

Please follow the guidelines below when contributing:

## Contribution rules

The following rules apply to all contributions:

- Always search among the opened and closed issues. Assigned issues are already being worked on, and, most of the time, cannot be reassigned.
- Pull requests must refer to an open issue. Pull requests not solving existing issues may not be accepted.
- Issues and PR must follow the provided templates.

## Run the application in dev mode

- Clone the repository: `git@github.com:mockoon/mockoon.com.git`
- Run `npm install`.
- Run `npm run dev`.

You will get hot reload on the Next.js application.

> ⚠️ Accessing the documentation requires a mock of Mockoon's API release endpoint. Run `npm run api:mock` to start the mock server.
> You can use the `npm run dev:all` command to start both the Next.js application and the API mock server.

## Work on your feature or bugfix

- Start your `feature` or `fix` from `main`
- Preferably squash your commits
- Do not forget to add "Closes #xx" in one of the commit messages or in the pull request description (where xx is the GitHub issue number)

Branches naming convention:

- features and enhancements: `feature/name-or-issue-number`
- bug fixes: `fix/name-or-issue-number`

## Open a pull request

Open a pull request to be merge in the `main` branch. All branches should start from `main` and must be merged into `main`.
Ask maintainers to review the code.

## Misc

### Preparing a new release

Running `npm run release` will create a branch and automatically copy the current documentation markdown files and images in a new folder named after the current app version.

### Markdown changelogs

An NPM script automatically copy the desktop release changelogs markdown files to the `public` folder. They are then loaded by the desktop application.

> /!\ For this reason, changelogs markdown files cannot contain custom markdown elements like `##quotation##`. Links must also be absolutes. However, images src can omit the domain (`/images/xxxx`), they will be resolved from mockoon.com in the desktop application.

### Download page binaries and documentation version

The latest binaries version on the download page (and documentation menu) are pulled from `https://api.mockoon.com/releases/desktop/stable.json`.
Website needs to be deployed before distributing the desktop application, so the application can load the changelog.
A second deployment will be needed to update the versioned links after the API depoyed.

### Sitemap

The sitemap is automatically generated after the build by the `./scripts/generate-sitemap.js` script, and placed in the `public` folder.
It is split in multiple files by categories of content.

### Documentation

Documentation links can be directly generated using `docs:section_name/topic_name` as the URL in the Markdown tag. It will translate to links that include the documentation version: `/docs/latest/section_name/topic_name/` or `/docs/vx.x.x/section_name/topic_name/`.

### Documentation screenshots

Documentation screenshots can be automatically generated using the [monorepo](https://github.com/mockoon/mockoon).
Run the following commands: `npm run build:desktop:ci` then `npm run package:desktop:test:win` and `npm run documentation:desktop`. Packaging the desktop app is necessary to be able to run the automated tests and generate the screenshots.
New screenshots will be created in `./packages/desktop/tmp/docs`. They can be copied in this repository's `/public/images/docs/latest` folder.

Generating the documentation screenshots requires the Firebase emulator and API to run locally and the app to be authenticated with a fake paid account (in order to generate screenshots for Pro features).

Some screenshots still need to be created manually:

- the cheat sheet (screenshot is taken but text overlay is added manually)
- `/docs/latest/openapi/import-export-openapi-format/`: the import/export options in native menu (Native menu cannot be opened programmatically)
- `/docs/latest/mockoon-data-files/environment-clipboard-copy/`: the two add from clipboard native menu (Native menu cannot be opened programmatically)

Some screenshots are not changing between versions:

- `/docs/latest/route-responses/dynamic-rules/`: the rules order schema
- `/docs/latest/mockoon-data-files/data-storage-location/`: the "old system" screenshot

> Both are located in the `images/docs/shared` folder.

### Image sizes

A script can be run to automatically add image size metadata to the markdown content: `npm run imagesize`.

```markdown
![alt](...) --> ![alt{500x500}](...)
```
