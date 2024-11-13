---
title: Create your first mock API with Mockoon
excerpt: Learn how to create your first mock REST API with Mockoon in less than 5 minutes
meta:
  title: Create your first mock API with Mockoon
  description: Use Mockoon to create your first mock API server in no time and generate fake realistic JSON data for your applications.
image: tutorial-getting-started.png
imageAlt: Mockoon logo in a rocket
imageWidth: 1200
imageHeight: 400
tags:
  - mockoon
order: 10
---

Mockoon is a free cross-platform desktop application that takes API mocking to the next level. Mockoon offers a fast and easy-to-use interface and gives you complete control over your mock APIs with advanced functionality like [a templating system](docs:templating/overview), [a proxy mode](docs:server-configuration/proxy-mode), and [request recording](docs:logging-and-recording/auto-mocking-and-recording).

This tutorial will show you how to install the desktop application and configure your first mock API.

[![View the video version button{250x71}](/images/view-video-btn-250.png)](https://youtu.be/XKMCKwxMkWs)

> 📘 To learn more about APIs and API mocking in general, head over to our [API guide](/articles/api-guide-what-are-api/) or [API mocking guide](/articles/what-is-api-mocking/)

## Step 1. Install the application

Mockoon desktop binaries are available for the three major operating systems in various formats. It is also available in several stores like Windows Store or Ubuntu Snap. Visit the [download section on the homepage](/download/) to download the binary or installer for your operating system:

![Screenshot of the download section on the homepage{1373x374}](/images/tutorials/getting-started/desktop-application-download-screenshot.png)

Depending on the operating system, you will have to install the application by following the standard installation process, like double-clicking on the installer or dragging the application to the Applications folder. After the installation is complete, you can launch the application.

## Step 2. Create your first mock API

After launching the application for the first time, you will have the opportunity to **take a quick tour of the interface**. You can skip this step if you are already familiar with the application or want to explore it by yourself. You can also access the tour later by clicking on the "Help" menu and selecting "Take the tour".

At the first launch, you will have a default setup, the **demo API**, also called an **environment** in Mockoon. This demo API showcases the main features of Mockoon and is a good starting point to understand how Mockoon works.

You can keep this demo environment and build from here or create a new empty one, which we will do in this tutorial.

To create a new mock API, click on the "New environment" button. You will be prompted to save the [environment's data file](docs:mockoon-data-files/data-storage-location) on your computer:

![Recording of creating a new environment{1468x886}](/images/tutorials/getting-started/create-first-mock-api.gif)

> 💡 You can synchronize your setup in our cloud and collaborate with your coworkers by subscribing to [Mockoon Cloud](/cloud/)

## Step 3. Create your first API endpoint

The newly created mock API, or environment, already includes an endpoint with no path and a `GET` method. This endpoint will be available at `http://localhost:3000/` by default. You can modify it by setting up the method and path of your choice.

You can also create a **new endpoint** by selecting "Http route" in the route menu add button. In this tutorial, we will create a new `GET` endpoint with the path `/users`, which will return a list of randomly generated users:

![Recording of adding a new API route{1468x886}](/images/tutorials/getting-started/create-basic-api-endpoint.gif)

## Step 4. Body and headers configuration

We will customize the endpoint by adding a **response body** that will return a JSON of randomly generated users. You can copy and paste the following JSON in the response body field. This template uses our [templating system](docs:templating/overview) to generate random data for each user:

```json
// Sample body
[
  {{#repeat 10}}
    {
      "id": "{{faker 'string.uuid'}}",
      "name": "{{faker 'person.firstName'}} {{faker 'person.lastName'}}",
      "email": "{{faker 'internet.email'}}",
      "phone": "{{faker 'phone.number'}}",
      "address": "{{faker 'location.streetAddress'}}, {{faker 'location.city'}}, {{faker 'location.state' abbreviated=true}} {{faker 'location.zipCode'}}",
      "birthdate": "{{faker 'date.past'}}",
      "isActive": {{faker 'datatype.boolean'}}
    }
  {{/repeat}}
]
```

We will also add a **Content-Type** header to the response. This header is necessary for the client to understand the response format. In this case, we will set it to `application/json`:

![Recording of updating an API route{1468x886}](/images/tutorials/getting-started/add-body-template-header.gif)

> 💡 You can create a more complex configurations by [adding multiple responses triggered by rules](docs:route-responses/dynamic-rules).

## Step 5. Add a delay to the response

The last step is to add a **delay to the response** to simulate a real-world scenario where the server takes some time to process the request. This is useful for testing the client's behavior when the server is slow to respond.

You can add a delay to the response by setting the **delay** field in the response configuration. In this case, we will set it to 2000 milliseconds (2 seconds):

![Recording of adding a delay to the response{1468x886}](/images/tutorials/getting-started/add-response-delay.gif)

## Step 6. Run and call your mock API

Finally, you can **run your mock API** by clicking on the green "play" arrow in the header. This will **start the server** and make it available on `http://localhost:3000`.

![Recording of starting the mock API{1468x886}](/images/tutorials/getting-started/start-mock-api.gif)

You can do a **test cal**l to the following URL `http://localhost:3000/users` using a tool like curl, Postman, or your browser. You should see the list of randomly generated users in the response:

![Screenshot of the result call{1176x612}](/images/tutorials/getting-started/calling-users-list.png)

## Step 7. Learn more

Now that you know how to create a basic mock API, you can head over to the [official documentation](docs:about) to explore the other functionalities available like [requests logging](docs:logging-and-recording/requests-logging), [partial API mocking with proxy mode](docs:server-configuration/proxy-mode), or the [templating system](docs:templating/overview).
