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

> The GUI cheat sheet is also available in PDF version <a href="/images/docs/old-cheat-sheet/mockoon-cheat-sheet.pdf" className="btn btn-primary-desat-soft btn-xs"><i className='icon-download'></i>&nbsp;Download</a>

## Main view

Below is Mockoon's **main view** where you set up your mock APIs, endpoints, responses, etc. It's the view where you will spend the most time. From this view, you can access the **request logging** and **environment settings** views (see below) by clicking on the icon in the upper right corner.

![Mockoon cheat sheet main screen{1200x815}](/images/docs/old-cheat-sheet/mockoon-cheat-sheet-main.png)

## Requests recording view

Below is the **request logging** view. This view is especially useful to debug the entering calls and how Mockoon responded to them. For each, you will find the usual information: path, headers, body, etc.
You can also see if the call has been caught or forwarded through the [proxy](docs:proxy-mode) (if enabled), and [automatically mock](docs:requests-logging) entering requests that were not caught.

![Mockoon cheat sheet requests recording screen{1200x815}](/images/docs/old-cheat-sheet/mockoon-cheat-sheet-recording.png)

## Environment settings view

Below is the environment settings view. Here you can set up global settings for each environment. [Enabling HTTPS](docs:https), [handling OPTIONS pre-flight requests automatically](docs:cors), enable the [proxy mode](docs:proxy-mode), etc.

![Mockoon cheat sheet environment settings screen{1200x815}](/images/docs/old-cheat-sheet/mockoon-cheat-sheet-settings.png)
