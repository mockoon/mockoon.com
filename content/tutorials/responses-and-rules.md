---
title: Route responses and rules
excerpt: Learn how to add responses to your mock API server and use the rules system
meta:
  title: Route responses and rules
  description: Learn how to add responses to your Mockoon mock API and use the rules system to serve them based on conditions
image: tutorial-route-responses-rules.png
imageAlt: Mockoon logo and computer icon linked with lines representing routes
imageWidth: 1200
imageHeight: 400
order: 11
---

This tutorial will show you how to create route responses in Mockoon and use the rules system to serve them depending on conditions.

[![View the video version button{250x71}](/images/view-video-btn-250.png)](https://youtu.be/HDGeslYAEAc)

> To learn more about APIs and API mocking in general, head over to our [API guide](/articles/api-guide-what-are-api/) or [API mocking guide](/articles/what-is-api-mocking/)

For each of Mockoon’s API endpoints, you can define **multiple responses** with specific characteristics like status, body, and headers and **serve them using a set of rules**.
In this tutorial, we will create a typical setup: one response returning a 200 status code and another one returning a 401 status code when the "Authorization" header is not present in the request.

## Step 1. Create a new route

The first step is to **create a new route** by clicking on the blue "Add route" button.

![Add a route by clicking on the add route button](/images/tutorials/route-responses-rules/add-route.png)

When you create a new endpoint, there is always at least **one default response** with a 200 status code.

![Responses menu with the default response](/images/tutorials/route-responses-rules/default-route-response.png)

We can customize its body with a simple JSON object.

![Responses menu with the default response](/images/tutorials/route-responses-rules/custom-json-body.png)

## Step 2. Add a "401 Unauthorized" response

The next step is to add a second response returning a 401 status code when the "Authorization" header is missing from the request.

To add a new response, click on the blue "plus" button next to the response list.

![Add a response by clicking on the plus button](/images/tutorials/route-responses-rules/add-response.png)

You can also **duplicate** a response or **delete** it by clicking the buttons on the right.

The **blue flag** in the menu indicates which response will be served by **default when no rule matches** or when rules are disabled. We will keep the flag on our 200 "success" response.

![Blue flag icon indicates the default response](/images/tutorials/route-responses-rules/blue-flag-default-response.png)

The next step is to customize our response. Let’s change the status code to 401 "Unauthorized" and add a description: "Error unauthorized". Here too, we can customize the body with a simple JSON object.

![customize the response by changing the status code and adding documentation](/images/tutorials/route-responses-rules/error-response-customized.png)

## Step 3. Add a rule

The final step is to add a rule on the new response to serve it only when the "Authorization" header is missing.

Click on the rules tab and on the "Add rule" button.

![Add a new rule by clicking on the rule tab and the green add rule button](/images/tutorials/route-responses-rules/add-rule.png)

In the new rule, select "Header" and enter "Authorization" as the "Header name".

Finally, select "null" as the value instead of "equals".

![Customize the rule by entering its target, name and value](/images/tutorials/route-responses-rules/new-rule-customized.png)

You can now test your setup by **calling** your mock API with and without an Authorization header.

```sh-sessions
$ curl http://localhost:3000/ -i
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
Content-Length: 25
Date: Tue, 07 Feb 2023 15:07:59 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
  "response": "error"
}
```

```sh-sessions
$ curl http://localhost:3000/ -i -H "Authorization:abcd"
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 27
Date: Tue, 07 Feb 2023 15:04:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
  "response": "success"
}
```

## Step 4. Route responses options

Three options are also available next to the responses list: **random**, **sequential**, and **rules disabled**.

![Three buttons allows for random or sequential responses, or rules disabling](/images/tutorials/route-responses-rules/route-responses-options.png)

You can **randomize the responses** with the first option or **cycle through them sequentially** with the second. Both options will **disable the rules**.
The third option allows you to disable the rules and always serve the default response marked with a blue flag.

## Step 5. Learn more

Now that you know how to create basic rules, you can head over to the [responses](docs:route-responses/multiple-responses) and [rules](docs:route-responses/dynamic-rules) documentation to explore the functionality.
