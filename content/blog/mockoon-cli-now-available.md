---
title: Mockoon CLI is now available 🥳
excerpt: "Take your mock APIs in all your headless and automated environments with the new CLI: servers, CI, GitHub Action, WSL, etc."
date: '2020-12-17'
image: mockoon-cli-available.png
imageAlt: Mockoon CLI screenshot
meta:
  title: Mockoon CLI is now available!
  description: "Take your mock APIs in all your headless and automated environments with the new CLI: servers, CI, GitHub Action, WSL, etc."
---

# Mockoon CLI is now available 🥳

###### Published on 2020-12-17

___ 

After months of work, Mockoon CLI is [available in beta](https://github.com/mockoon/cli) 🚀. You can now deploy your mock APIs in all your headless and automated environments. A server, your favorite CI environment, in a GitHub Action, in the Windows Subsystem Linux, you name it! 

Like the main application, the CLI is free and open-source. It supports most of Mockoon features, and we tried to make it as fast as possible. 

You are one command away to using it. Check the [installation instructions](https://github.com/mockoon/cli#installation), and most of all, let us know what you think and what we could improve on the [official forum](https://github.com/mockoon/cli/discussions).

## How does it work 

The CLI takes a [Mockoon data export file](docs:import-export-data) and runs the specified environment. You can either provide the data as a local file or a URL where you host it. 

![Mockoon CLI start command output](/images/blog/cli-mockoon-start.png)

You can also list the running mock API processes to get some information about them (port, PID, CPU, memory, etc.) or stop them completely.

![Mockoon CLI list command output](/images/blog/cli-mockoon-list.png)

Mockoon CLI supports all of Mockoon's features: [templating system](https://mockoon.com/docs/latest/templating/), [proxy mode](https://mockoon.com/docs/latest/proxy-mode/), [route response rules](https://mockoon.com/docs/latest/multiple-responses/), etc.

It's also compatible with your data files in an older format as it automatically migrates them before running the mock.

## Implementation details

We chose to create an [NPM package](https://www.npmjs.com/package/@mockoon/cli) as it is a widely used and well-known format. It's also the technology we know best, and we wanted to be sure to create something simple to use, fast and lightweight. 

Before actually working on the CLI, we needed first to extract a lot of code from the main application into a [new library](https://github.com/mockoon/commons). Luckily, this part of the main application was already relatively independent. But we still had some challenges and learned a lot about creating a Typescript library 😄.

Under the hood, we used Typescript (as for the main application and the library), [Oclif](https://oclif.io/) to create the command-line tool, and [PM2](https://pm2.keymetrics.io/docs/usage/pm2-api/) to manage your mock API processes. 
It means that, while we wrap our CLI around all of PM2 commands, you can leverage everything PM2 has to offer if you are used to it!

## Closing thoughts 

The CLI was our small 2020 challenge. The biggest struggle was to achieve this while having a full-time job and an infinite list of things to work on for this project: content, features, support, etc. But we like challenges 😅.

We were initially planning a beta release for November. It seems the initial estimation wasn't that off!

We hope that you will love using this tool as much as we loved creating it!

One of the oldest requests from our users ([September 2018](https://github.com/mockoon/cli/issues/1)! 😱) is now closed, but this is just the beginning! More improvements are already in the pipe. Stay tuned!


