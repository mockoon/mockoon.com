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

### Markdown changelogs

An NPM script automatically copy the desktop release changelogs markdown files to the `public` folder. They are then loaded by the desktop application.

> /!\ For this reason, changelogs markdown files cannot contain custom markdown elements like `##quotation##`. Links must also be absolutes.

### Download page binaries version

The latest binaries version on the download page (and documentation menu) is pulled from api.mockoon.com.

### Sitemap

The sitemap is automatically generated after the build by the `./scripts/generate-sitemap.js` script, and placed in the `public` folder.
It is split in multiple files by categories of content.
