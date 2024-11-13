---
title: Run your mock REST APIs anywhere with Mockoon CLI
excerpt: Learn how to create mock REST APIs and run them anywhere with the CLI
meta:
  title: Run your mock REST APIs anywhere with Mockoon CLI
  description: Learn how to create mock REST APIs and run them in all headless and server environments with Mockoon CLI
image: tutorial-getting-started-cli.png
imageAlt: a terminal
imageWidth: 1200
imageHeight: 400
tags:
  - mockoon
order: 20
---

Mockoon is a set of free and open-source API mocking tools. They help you get ready to work in no time. Should you be a front-end or back-end developer or a QA tester, Mockoon got you covered with a flexible user interface and a CLI that allows you to bring your mocking scenarios on servers and headless environments.

This tutorial will help you put up on track with the CLI and all its possibilities.

> 📘 To learn more about APIs and API mocking in general, head over to our [API guide](/articles/api-guide-what-are-api/) or [API mocking guide](/articles/what-is-api-mocking/)

## What is Mockoon CLI?

Mockoon CLI is an [NPM package](https://www.npmjs.com/package/@mockoon/cli) that can run on all environments where Node.js is installed. A [Docker image](https://hub.docker.com/r/mockoon/cli) and a [GitHub Action](https://github.com/marketplace/actions/mockoon-cli) are also available (see below).

The CLI is a companion application to Mockoon's main interface and is designed to launch one or more Mockoon data file.

## How to use the CLI?

As Mockoon CLI is designed to work in pair with the main user interface, you will learn how to create your first mock API and how to use the mock data with the CLI.

### Step 1. Create a mock API using Mockoon interface

One of the prerequisites for using the CLI is to create a mock API in the main application. If you already have a setup in Mockoon, you can jump straight to the next section.

> 🚀 To create a new mock API, we have a [Getting started tutorial](tutorials:getting-started) that will guide you step by step. Once your mock is created, come back to this tutorial to learn how to use it in the CLI.

### Step 2. Install the CLI

Before importing your mock API in the CLI, you must install it. First ensure that Node.js is installed on your computer by running `node -v` in your terminal:

```sh-sessions
$ node -v
v20.0.0
```

If it's not installed, head over to [Node.js' download page](https://nodejs.org/en/download) and follow the instructions for your operating system.

You are now ready to install the CLI by running the following command `npm i -g @mockoon/cli`:

```sh-sessions
$ npm i -g @mockoon/cli

+ @mockoon/cli@4.0.0
added 423 packages from 339 contributors in 15s
```

You can also install Mockoon CLI in the scope of a local project by running `npm i @mockoon/cli`. You will then need to use `npx mockoon-cli ...` to run it.

> 🗒️ A note about Mockoon versions: starting with release [v3.0.0](/releases/3.0.0/), all our applications are released with the same version number. This makes it easier to understand which version of the CLI is compatible with the desktop application.

### Step 3. Prepare your data file

The CLI can open and migrate data from older versions of Mockoon. However, it doesn't alter the file you provide and only migrates the environment in-memory. If you created your mock with a more recent version of the application, you need to update your CLI with the following command: `npm install -g @mockoon/cli@{version}`.

#### Provide a Mockoon's environment file

You can run your mock in one single step by providing the actual location of your Mockoon environment file. To locate your environment file from the main application, right-click on an environment and select "Show in folder" in the context menu:

![show in folder menu entry{481x228}](/images/tutorials/getting-started-cli/environment-show-in-folder.png)

Let's pretend your file name is `data.json` and resides in the current directory.

As an alternative, you can also provide a URL pointing to a Mockoon environment file, and Mockoon CLI will take care of downloading it.

#### Use an OpenAPI specification file

Another option is to directly pass an OpenAPI specification file. It's useful to quickly run a mock API from a publicly available specification. Mockoon supports both JSON and YAML formats in versions 2.0.0 and 3.0.0. We also offer thousands of ready to use OpenAPI specifications on our [mock samples directory](/mock-samples/category/all/).

As above, you can provide a path to a local OpenAPI specification file or directly the file's URL.

> ⚠️ There is currently no equivalent between all the OpenAPI specifications and Mockoon's features ([more info](docs:openapi/openapi-specification-compatibility)). If you want to run your Mockoon mock APIs with the CLI with all the features (templating, rules, etc.), you must use Mockoon's data files ([see above](#provide-a-mockoon-s-environment-file)) directly, or you may lose part of your mock's behavior.

### Step 4. Start you mock API

After locating your environment file, you are ready to run your API mock with the CLI.

In your terminal, navigate to the folder where your Mockoon's data file or OpenAPI file is and run the following command:

`mockoon-cli start --data ./data.json`

Or:

`mockoon-cli start --data ./openapi-spec.yaml`

If you want to use a remotely hosted files, you can also provide a URL to the `--data` flag like this:

`mockoon-cli start --data https://domain.com/data.json`

You can also provide multiple parameters to customize your mock:

- `--port`: to override the port on which the mock API will listen.
- `--hostname`: to override the hostname on which the mock API will listen.

You will find more information regarding the [`start` command](https://github.com/mockoon/mockoon/tree/main/packages/cli#mockoon-cli-start), including all the available flags on the official repository.

Your mock API will then be available on the port you specified and running as a foreground process:

```sh-sessions
$ mockoon-cli start --data ./data.json --port 3000
{"level": "info", "environmentName":"Demo API", "message":"Server started on port 3000"}
{"level": "info", "environmentName":"Demo API", "message":"Transaction recorded", "requestMethod":"GET", "requestPath":"/test", "responseStatus":200}
```

It's also possible to run multiple mocks at the same time by providing multiple data files, ports and hostnames:

```sh-sessions
$ mockoon-cli start --data ./data1.json ./data2.json https://example.com/data3.json --port 3000 3001 3002
{"level": "info", "environmentName":"Demo API 1", "message":"Server started on port 3000"}
{"level": "info", "environmentName":"Demo API 2", "message":"Server started on port 3001"}
{"level": "info", "environmentName":"Demo API 3", "message":"Server started on port 3002"}
```

### Step 5. View a running mock's logs

In addition to stdout (console), Mockoon CLI logs all events like requests and errors in your user folder in the following file: `~/.mockoon-cli/logs/{mock_name}.log`.

This file contains all the log entries (all levels) produced by the running mock server. Most of the errors occurring in Mockoon CLI (or the main application) are not critical and therefore considered as normal output. As an example, if the JSON body from an entering request is erroneous, Mockoon will log a JSON parsing error, but it won't block the normal execution of the application.

> 💡 File logging is disabled where running Mockoon CLI using our Docker image.

### Step 6. Deploy Mockoon CLI using Docker

#### Using the generic Docker image published on Docker Hub

A generic Docker image `mockoon/cli` is automatically built upon each release on Docker Hub's Mockoon CLI repository. It uses a `node:18-alpine` image and installs the latest version of Mockoon CLI.

All of `mockoon-cli start` flags (`--port`, etc.) must be provided when running the container.

To load a data file, you can either mount a local file and pass `mockoon-cli start` flags at the end of the command:

`docker run -d --mount type=bind,source=./data.json,target=/data,readonly -p 3000:3000 mockoon/cli:latest -d data -p 3000`

Or directly pass a URL to the `mockoon-cli start` command:

`docker run -d -p 3000:3000 mockoon/cli:latest -d https://raw.githubusercontent.com/mockoon/mock-samples/main/samples/generate-mock-data.json -p 3000`

#### Using the dockerize command

Mockoon CLI also offers a `dockerize` command that allows you to build a self-contained image. This command copies all the environment data files and generates a Dockerfile. After building the image, no Mockoon CLI-specific parameters will be needed at runtime.

Run the `dockerize` command:

`mockoon-cli dockerize --data ./data1.json ./data2.json --port 3000 3001 --output ./tmp/Dockerfile`

Then, navigate to the `tmp` folder, where the Dockerfile has been generated, and build the image:

`docker build -t mockoon-image .`

You can finally run your container:

`docker run -d -p 3000:3000 -p 3001:3001 mockoon-image`

### Step 7. Use Mockoon CLI in a CI environment: GitHub Actions

Mockoon CLI being a Javascript application, it can run on any environment where Node.js is installed, including continuous integration systems like GitHub Actions or CircleCI.
It is useful when you want to run a mock server while running integration tests on another application. For example, you could mock the backend when running a React front-end application tests.

We published a [GitHub Action](https://github.com/marketplace/actions/mockoon-cli) that allows you to run Mockoon CLI in your GitHub Actions workflows.

Here is an example of a GitHub Action running a mock API before running some tests:

```yaml
name: Run mock API server
on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Start Mockoon CLI
        uses: mockoon/cli-action@v2
        with:
          # Mockoon CLI version, default to 'latest'
          version: 'latest'
          # Mockoon local data file or URL
          data-file: './data.json'
          # port, default to 3000
          port: 3000
      - name: Make test call
        run: curl -X GET http://localhost:3000/endpoint
      - name: Run tests
        run: npm run test
```

> 💡 If you are building your own actions with the CLI, do not forget to add an `&` at the end of the command to run it in the background: `mockoon-cli start -d ./data-file.json &`.
