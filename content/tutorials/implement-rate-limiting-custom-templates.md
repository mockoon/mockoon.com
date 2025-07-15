---
title: Implement rate limiting with custom templates and rules
excerpt: Learn how to implement rate limiting in your Mockoon APIs using custom templates and rules to control request frequency and protect your endpoints
meta:
  title: Implement rate limiting with custom templates and rules
  description: Learn how to implement rate limiting in your Mockoon APIs using custom templates and rules to control request frequency and protect your endpoints
image: tutorial-implement-rate-limiting-custom-templates.png
imageAlt: mockoon logo next to a clock and shield icon
imageWidth: 1200
imageHeight: 400
order: 62
mockApiFile: https://raw.githubusercontent.com/mockoon/mock-samples/refs/heads/main/tutorials/rate-limiting-examples.json
---

In this tutorial, we will learn how to **implement rate limiting** in your Mockoon APIs using **custom templates** and **rules** to control request frequency and protect your endpoints from abuse.

Rate limiting is a crucial technique used to **control the number of requests** a client can make to an API within a specific time window. It helps prevent abuse, ensures fair usage, and protects your API from being overwhelmed.

In Mockoon, you can implement rate limiting using **global variables** to track request timestamps and counters, combined with **template helpers** and **response rules** to enforce the limits.

Let's explore different approaches to implement rate limiting, from simple time-based limits to more complex quota systems.

> 💡 This tutorial assumes you are familiar with the basics of Mockoon, like creating endpoints and using templates. If you are new to Mockoon, you can check the other [tutorials](/tutorials/) to get started.

> ⚠️ This tutorial requires v9.4.0 or later of Mockoon. You can download the latest version of Mockoon [here](https://mockoon.com/download/).

## 1. Simple time-based rate limiting with templates

The simplest form of rate limiting is to **limit requests based on time intervals**. We'll create an endpoint that allows only one request every 500 milliseconds.

### Create a new endpoint

First, let's create a new HTTP `GET` route with the path `/rate-limited`:

![new HTTP GET route showing the path /rate-limited{1465x318}](/images/tutorials/implement-rate-limiting-custom-templates/create-rate-limited-endpoint.png)

### Add the rate limiting template

In the **response body**, add the following template that implements time-based rate limiting:

```handlebars
{{#if (lt (subtract (now 'T') (getGlobalVar 'lastCall')) 500)}}
  {{status 429}}
  { "error": "Rate limit exceeded", "message": "Please wait at least 500ms between requests", "retry_after": 500 }
{{else}}
  { "success": true, "message": "Request processed successfully", "timestamp":
  {{now 'T'}}
  }
{{/if}}

{{setGlobalVar 'lastCall' (now 'T')}}
```

This template uses our [templating engine](/docs/latest/templating/overview/) and does the following:

- **Checks the time difference** between the current request and the last request using the following helpers: [`lt`](/docs/latest/templating/mockoon-helpers/#lt), [`subtract`](/docs/latest/templating/mockoon-helpers/#subtract), [`now`](/docs/latest/templating/mockoon-helpers/#now) and [`getGlobalVar`](/docs/latest/templating/mockoon-variables-helpers/#getglobalvar).
- **Returns a 429 status** (Too Many Requests) if the interval is less than 500ms using the [`status`](/docs/latest/templating/mockoon-response-helpers/#status) helper.
- **Updates the timestamp** for the next request using the [`setGlobalVar`](/docs/latest/templating/mockoon-variables-helpers/#setglobalvar) helper.
- **Provides helpful information** about the rate limit in the JSON response.

![template-based rate limiting response{1231x525}](/images/tutorials/implement-rate-limiting-custom-templates/simple-template-response.png)

## 2. Rule-based rate limiting with multiple responses and a rule

For more complex scenarios, you can use [**response rules**](/docs/latest/route-responses/dynamic-rules/) to serve different responses based on rate limiting conditions. The following example will use the same template as above but will use a **response rule** instead of conditional templating.

### Create a new endpoint with multiple responses

Create a new HTTP `GET` route with the path `/rate-limited-rules`:

![new HTTP POST route showing the path /protected{1465x318}](/images/tutorials/implement-rate-limiting-custom-templates/create-rate-limited-rules-endpoint.png)

### Add the default rate-limited response

The [**default response**](/docs/latest/route-responses/multiple-responses/#default-route-response) will handle rate-limited requests with a **429 status code and the following JSON body**:

```json
{
  "error": "Rate limit exceeded",
  "message": "Too many requests.",
  "retry_after": 500
}
```

Set the status code to **429** for this response:

![view of the response returning a 429 error](/images/tutorials/implement-rate-limiting-custom-templates/default-429-response.png)

### Add a successful response with rate limiting rule

Add a **new response** by clicking the "Add response" button. Set the status code to **200** and add the following successful response JSON body:

```json
{
  "success": true,
  "message": "Request processed successfully"
}
```

Now, click the "Rules" tab and add a **"Custom templating"** rule to check if enough time has passed since the last request. Custom rules allow you to define a **target value** to be evaluated using our [templating engine](/docs/latest/templating/overview/).
In the rule **target** field, enter:

```handlebars
{{gte (subtract (now 'T') (getGlobalVar 'lastCall')) 500}}{{setGlobalVar 'lastCall' (now 'T')}}
```

Then, set the rule value to `true`. This target will evaluate to `true` if at least 500 milliseconds have passed since the last request.

Similarly to the previous template, this rule does the following:

- **Checks if 500ms or more** have passed since the last call using the following helpers: [`gte`](/docs/latest/templating/mockoon-helpers/#gte), [`subtract`](/docs/latest/templating/mockoon-helpers/#subtract), [`now`](/docs/latest/templating/mockoon-helpers/#now) and [`getGlobalVar`](/docs/latest/templating/mockoon-variables-helpers/#getglobalvar).
- **Updates the timestamp** when the condition is met using the [`setGlobalVar`](/docs/latest/templating/mockoon-variables-helpers/#setglobalvar) helper.
- **Only serves the 200 response** when the template evaluates to `true`.

![view of the rule interface](/images/tutorials/implement-rate-limiting-custom-templates/rate-limit-rule.png)

## 3. Testing your rate limiting implementations

To **test your rate limiting**, start your mock API server and use your favorite HTTP client to send multiple requests in quick succession.

### Testing the simple time-based limit

Send multiple `GET` requests to `GET /rate-limited` or `GET /rate-limited-rules` quickly:

```bash
curl -X GET http://localhost:3000/rate-limited
```

You should see:

- **First request**: Success response (200)
- **Immediate second request**: Rate limited response (429)
- **Request after 500ms**: Success response (200)

## 4. Advanced quota-based rate limiting

For more sophisticated rate limiting, let's implement a **quota system** that allows a configurable number of requests per time period.

### Create a data bucket for configuration

First, create a new [**data bucket**](/docs/latest/data-buckets/overview/) to store the rate limiting configuration. Data buckets allow you to store and manage JSON data that can be **accessed and manipulated in your templates and rules**.

Go to the "Data" view, click "Add data", name it "rate_config" and add the following configuration:

```json
{
  "last_request_timestamps": [],
  "max_requests_per_seconds": 2
}
```

![view of the new data bucket showing the above JSON template](/images/tutorials/implement-rate-limiting-custom-templates/rate-config-data-bucket.png)

This configuration allows **2 requests per second** and will be used to track the timestamps of the last requests in the `last_request_timestamps` array.

### Create the quota-limited endpoint

Create a new HTTP `GET` route with the path `/quota-limited`:

Add the following advanced template to implement quota-based rate limiting:

```handlebars
{{setVar 'currentTime' (now 'T')}}
{{setVar 'previousRequests' (dataRaw 'rate_config' 'last_request_timestamps')}}
{{setVar 'maxRequests' (dataRaw 'rate_config' 'max_requests_per_seconds')}}

{{setVar 'filteredTimestamps' (jmesPath (getVar 'previousRequests') (concat '[?to_number(@) > `' (subtract (getVar 'currentTime') 1000) '`]'))}}

{{#if (gte (len (getVar 'filteredTimestamps')) (getVar 'maxRequests'))}}
  {{status 429}}
  { "error": "Quota exceeded", "message": "You have exceeded the rate limit of
  {{getVar 'maxRequests'}}
  per second." }
{{else}}
  { "success": true, "message": "Request processed successfully" }
{{/if}}

{{setData 'push' 'rate_config' 'last_request_timestamps' (now 'T')}}
```

This template does the following:

- **Saves the current time** and retrieves the previous request timestamps and the maximum requests per second from the `rate_config` data bucket using the [`dataRaw`](/docs/latest/templating/mockoon-helpers/#dataraw), [`setVar`](/docs/latest/templating/mockoon-variables-helpers/#setvar) and [`now`](/docs/latest/templating/mockoon-helpers/#jmespath) helpers.
- **Filters the timestamps** to only include those within the last second using the [`jmesPath`](/docs/latest/templating/mockoon-helpers/#jmespath) helper.
- **Checks if the number of requests** in the last second exceeds the configured limit using the [`len`](/docs/latest/templating/mockoon-helpers/#len) and [`gte`](/docs/latest/templating/mockoon-helpers/#gte) helpers.
- **Returns a 429 status** (Too Many Requests) if the limit is exceeded, providing a detailed error message.
- **Pushes the last request timestamps** in the `rate_config` array using the [`setData`](/docs/latest/templating/mockoon-helpers/#setdata) helper.

![view of the above template in the user interface](/images/tutorials/implement-rate-limiting-custom-templates/quota-template-response.png)

### Testing the quota-based limit

Send multiple `GET` requests to `/quota-limited`:

```bash
curl -X GET http://localhost:3000/quota-limited
```

You should see a 429 response if you exceed the configured limit of 2 requests per second. The response will include information about the number of requests allowed.

## Going further

After completing this tutorial, you can enhance your rate limiting implementation by:

- **rate limiting based on user IP** or other request attributes by storing request timestamps in a user-specific data bucket property, using the [`header`](/docs/latest/templating/mockoon-request-helpers/#header) or [`queryParam`](/docs/latest/templating/mockoon-request-helpers/#queryparam) helpers.

- **Implementing more complex quota systems** with different limits for different endpoints using a [`request path rule`](/docs/latest/route-responses/dynamic-rules/#1-target) to serve different rate limits based on the request path.

---

By following this tutorial, you have learned how to implement rate limiting in Mockoon using custom templates and rules. You can now control request frequency, protect your APIs from abuse, and ensure fair usage across your endpoints. Experiment with different configurations and explore the flexibility of Mockoon's templating system to suit your specific rate limiting needs.
