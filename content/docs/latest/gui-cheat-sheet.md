---
title: Mockoon GUI cheat sheet
meta:
  title: Mockoon GUI cheat sheet
  description: Have a doubt? Not sure how to navigate Mockoon's UI? This cheat sheet listing Mockoon\'s major features is for you!
order: 20
---

# Mockoon GUI cheat sheet

---

Are you discovering Mockoon's GUI or forgot what this button is used for? These cheat sheets are for you!

> The GUI cheat sheet is also available in PDF version <a href="/images/docs/cheat-sheet/mockoon-cheat-sheet.pdf" className="btn btn-primary-desat-soft btn-xs"><i className='icon-download'></i>&nbsp;Download</a>

## Main endpoints view

The **main view** (below) contains your environments (or mock API) list, the environment's endpoints, and the currently selected endpoint and response. It's the view where you will spend the most time.

![Mockoon routes view](/images/docs/cheat-sheet/routes-view.png)

The endpoint's responses configuration (below) lets you manage each endpoint responses list and each response parameter: serving a file or a body, with rules or not, etc.

![Mockoon responses view](/images/docs/cheat-sheet/responses-view.png)

At the top of the window, you can access other environment related views: the **environment's headers**, the **requests logs**, the **environment's proxy** parameters, and the **environment's settings**.

## Environment's requests logs view

The **request logging** view is especially useful to debug the entering calls and how Mockoon responded to them. For each, you will find the usual information: path, headers, body, etc.
You can also see if the call has been caught or forwarded through the [proxy](docs:proxy-mode) (if enabled) and [automatically mock](docs:requests-logging) entering requests that were not caught.
Each environment (or mock API) has its own entering requests recording.

![Mockoon logs view](/images/docs/cheat-sheet/logs-view.png)

## Environment's proxy parameters view

This view allows you to [enable the proxy mode](docs:proxy-mode) and modify its behavior: removing the API prefix, adding specific headers to the proxied server request or response, etc.

![Mockoon proxy view](/images/docs/cheat-sheet/proxy-view.png)

## Environment's settings view

This view is the place where you can set up global settings for each environment. Changing the environment name, port, or API prefix, [enabling HTTPS and using a custom certificate](docs:serving-over-tls), [handling OPTIONS pre-flight requests automatically](docs:cors), etc.

![Mockoon settings view](/images/docs/cheat-sheet/settings-view.png)
