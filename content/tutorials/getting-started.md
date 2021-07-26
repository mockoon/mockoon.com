---
title: Create your first mock API with Mockoon
excerpt: Learn how to create your first mock REST API with Mockoon
meta:
  title: Create your first mock API with Mockoon
  description: Use Mockoon to create your first mock API server in no time and generate fake realistic JSON body for your frontends.
image: tutorial-getting-started.png
imageAlt: Mockoon logo in a rocket
order: 10
---

Mockoon is a free cross-platform desktop application that takes API mocking to the next level. Mockoon offers a fast and easy-to-use interface and gives you complete control over your mock APIs with advanced functionality like [a templating system](docs:templating/overview), [a proxy mode](docs:proxy-mode), and [requests recording](docs:requests-logging).

This tutorial will show you how to install the desktop mocking application and set up your first mock API.

## Step 1. Install the application

Mockoon is available on the three major operating systems: Windows, macOS, and Linux. Visit the [download section on the homepage](/download/) to download the binary or installer for your operating system:

[![Screenshot of the download section on the homepage](/images/tutorials/getting-started/app-download-screenshot.png)](/download/)

After downloading the installer, double click on the file to install Mockoon and follow the instructions. Now, open the application to start setting up your first mock API. 

## Step 2. Create your first mock API

After launching the application for the first time, you will find a demo mock API, also called **"environment"** in Mockoon. You can keep it and build from here or create a new one. 
To create a new mock API, open the collapsible environments menu on the left and press the blue "plus" button:

![Recording of adding a new environment](/images/tutorials/getting-started/create-mock-api.gif)

You can also rename the environment, as shown below:

![Environment renaming](/images/tutorials/getting-started/rename-environment.png)

## Step 3. Create you first API route

The newly created mock API already includes a route on `/`. You can modify it by setting up the method and path of your choice.

You can also create a new endpoint by clicking on the blue "plus" button at the top of the endpoint list:

![Recording of adding a new API route](/images/tutorials/getting-started/create-api-route.gif)

## Step 4. API endpoint configuration

You can further customize your endpoint by adding a custom header and the following sample body (which makes use of Mockoon's [templating system](docs:templating/overview)):

```json
// Sample body
[
  {{# repeat 5}}
  {
    "title": "Tutorial {{@index}}",
    "tags": "{{someOf (array 'Getting started' 'https' 'proxy mode' 'headers' 'templating') 1 3}}"
  }
  {{/ repeat}}
]
```

You can create a more complex configuration by serving files or [adding multiple responses triggered by rules](docs:route-responses/dynamic-rules).

![Recording of updating an API route](/images/tutorials/getting-started/update-api-route.gif)

## Step 5. Run and call your mock API

The last step is to run your mock API. For this, click on the green "play" arrow in the header: 

![Recording of running a mock API](/images/tutorials/getting-started/run-mock-api.gif)

Your mock server is now available on `http://localhost:3000` (but also on `http://127.0.0.1` and all your local network adapters).

You can do a test call to the following URL `http://localhost:3000/tutorials` using your favorite tool (here using Insomnia) and see the returned response:

![Screenshot of the result call](/images/tutorials/getting-started/result-call.png)

## Step 6. Learn more

Now that you know how to create a basic mock API, you can head over to the [official documentation](docs:about) to explore the other functionalities like [requests logging](docs:requests-logging), [partial API mocking with proxy mode](docs:proxy-mode), or the [templating system](docs:templating/overview). 
