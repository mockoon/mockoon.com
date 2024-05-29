---
title: Serve static files with a custom mock endpoint
excerpt: Learn how to create an endpoint to serve static files (images, fonts, etc.) in your mock API server using Mockoon
meta:
  title: Serve static files with a custom mock endpoint
  description: Learn how to create an endpoint to serve static files (images, fonts, etc.) in your mock API server using Mockoon
image: tutorial-serve-static-files.png
imageAlt: mockoon logo next to multiple images symbolizing static files
imageWidth: 1200
imageHeight: 400
order: 59
---

In this tutorial, we will learn how to **create an endpoint to serve static files** in your mock API server. This feature is useful when you need to serve images, CSS, or JavaScript files, or simply simulate a basic static file server.

This tutorial assumes you have already worked with Mockoon and are familiar with [mock endpoint creation](/tutorials/getting-started/).

Creating an endpoint to serve static files is straightforward and requires only a few steps. Let's get started!

## 1. Configure your new static endpoint

The first step is to **create a new route** that will serve the static files dynamically based on the requested file name. For this, we will use a **route parameter** to capture the file name from the request URL and use it to serve the corresponding file using the "File" response body type.

### Create a new route with a parameter

First, **create a new HTTP route** in your mock server and set its path to `/static/:path?`:

![new HTTP GET route showing a path parameter](/images/tutorials/create-endpoint-serving-static-file/create-static-route-with-parameter.png)

The `:path?` part of the route path is a **route parameter** that will capture the requested file name. The `?` at the end makes the parameter **optional**, so the route will match both `/static` and `/static/{filename}` URLs. This detail is important if you want to serve a default file when no path is provided, like an `index.html` file. This will be covered later in this tutorial.

> 💡 Mockoon [uses Node.js Express' route parameters syntax](docs:api-endpoints/routing#api-routes), so you can use any name for the parameter, like `:file`, `:filename`, or any other name you prefer.

### Configure the body response

To serve a file we will use the **"File" response body type**. This response body type allows you to return a file from your local file system as the response body. This field supports [templating helpers](docs:templating/overview) like `{{ urlParam }}` to **dynamically serve the requested file** based on the route parameter. It also supports [absolute or relative paths](docs:response-configuration/file-serving#absolute-or-relative-paths). When a relative path is used, it is resolved relatively to the [environment data file location](docs:mockoon-data-files/data-storage-location#locating-the-files).

![body type selector with file input showing a templating helper ](/images/tutorials/create-endpoint-serving-static-file/configure-response-body-to-serve-file.png)

As you can see in the screenshot above, we have set the response body type to "File" and retrieved the filename using the [`{{ urlParam 'path' }}` templating helper](docs:templating/mockoon-request-helpers#urlparam) which will dynamically fetch the `:path` route parameter.

The resulting path is relative to the environment data file location, so you can place your static files in the same folder as your environment data file. In our example above, we will serve the files from a folder named `static` next to the environment data file (see below).

> 💡 Do not forget to check the "Send as body" checkbox to avoid triggering a download in your browser.

## 2. Test your endpoint

Let's add a few files in the `static` folder next to your environment data file location. You can access this location by right-clicking on the environment and selecting "Show data file" in the contextual menu:

![environment context menu showing the "Show in folder" option](/images/tutorials/create-endpoint-serving-static-file/find-environment-file-location.png)

Now, **add some files** to the `static` folder, like `index.html`, `styles.css`, and `logo.png`. You can use any file type you want, images, CSS, JavaScript, or HTML files. We will be adding two image files in our example, `1.jpg` and `2.jpg`, taken from [Pravatar](https://pravatar.cc/).

![list of two image files in a folder named static](/images/tutorials/create-endpoint-serving-static-file/static-files-list.png)

You can now **start your mock server** by clicking on the green arrow at the top and **test the new endpoint** by requesting the files using your new endpoint. For example, you can request the `1.jpg` file by visiting `http://localhost:3000/static/1.jpg` (replace the port by the correct one) in your browser.

![screenshot of the browser showing the requested image file](/images/tutorials/create-endpoint-serving-static-file/get-call-test-result.png)

## 3. Enhancement: serving a default file

We can create more complex scenarios by **serving a default file** when **no file name is provided** in the URL. This is useful when you want to serve an `index.html` file when the user visits the root URL of your mock server `/static`.

In the previous step, we already set the route parameter as optional by adding a `?` at the end of the parameter name. Now, we can **add a new response to the endpoint** that will serve the `index.html` file when no path parameter is present in the route.

### Add a new response to the route

First, **add a new response** to the route by clicking on the "Add response" blue "plus" button in the route responses section:

![view showing the responses list and the response creation button](/images/tutorials/create-endpoint-serving-static-file/add-response-blue-plus-button.png)

### Configure the new response body

Your new response should be selected automatically and have a status code of `200` by default. You can keep this status code.  
We will now configure the response body to **serve an `index.html` file** when no file name is provided in the URL. To do this, set the response body type to "File" and set the file path to `./static/index.html`. Again, do not forget to check the "Send as body" checkbox:

![body type selector with file input showing a relative path to index.html](/images/tutorials/create-endpoint-serving-static-file/configure-response-body-to-serve-index-file.png)

### Add a rule to the new response

To make sure this response is only triggered when no `:path` parameter is provided in the URL, we need to **add a rule to the response**. This rule will check if the route parameter `:path` is empty. If it is, the response will be triggered. If not, the first response, which is the default one (symbolized by a blue flag in the responses menu), will be triggered.

To add a rule, navigate to the "Rules" tab in the response view and click the "Add rule" button. In the newly added rule, select the "Route params" rule type. Then, set the "Parameter name" to `path` and the operator to `null`:

![view of a new rule targeting a route parameter named path and expecting it to be null](/images/tutorials/create-endpoint-serving-static-file/add-rule-to-check-route-param.png)

> 💡 You can learn more about [response rules](docs:route-responses/dynamic-rules) in the documentation.

## 4. Test your new setup

To test our new setup, you can **create a basic `index.html` file** in the `static` folder. You can use the following example content for your `index.html` file:

```html
<!doctype html>
<html lang="en">
  <body>
    <img src="/static/1.jpg" alt="" />
  </body>
</html>
```

![list of files in a folder named static with an index.html file](/images/tutorials/create-endpoint-serving-static-file/static-file-list-with-index.png)

This HTML file will display the `1.jpg` image when visited in a browser. You can now start, or restart, your mock server and visit `http://localhost:3000/static` (replace the port by the correct one) in your browser. You should see the `1.jpg` image displayed on the page:

![screenshot of the browser showing a blank page with an image](/images/tutorials/create-endpoint-serving-static-file/get-call-test-result-index.png)

As you can see, both the `1.jpg` image and the `index.html` file are served correctly by the mock server.
