---
title: "Mockoon's API guide part 2: REST(ful) APIs"
excerpt: Learn more about REST(ful) APIs, their constraints and what requests and responses between a client and a server contains
meta:
  title: "Mockoon's API guide part 2: REST(ful) APIs"
  description: Learn more about REST(ful) APIs, their constraints and what requests and responses between a client and a server contains
image: api-guide.png
imageAlt: API illustration
imageWidth: 1200
imageHeight: 400
order: 21
previousLink: api-guide-what-are-api
previousText: 'API guide part 1: APIs'
nextLink: api-guide-rest-api-components
nextText: 'API guide part 3: Rest API components'
---

## Definition of a REST (or RESTful) API

As we saw in the [previous part of this guide](/articles/api-guide-what-are-api/), there are many types of web APIs. What interests us most is one of the most popular implementations, the [REST, or RESTful, API](https://en.wikipedia.org/wiki/Representational_state_transfer).
REST stands for **RE**presentational **S**tate **T**ransfer. It's a software architectural style that defines a set of **constraints** used to create standardized APIs. Web APIs adhering to the REST architectural constraints are called **RESTful APIs**.

RESTful APIs must follow six constraints: **client-server architecture**, **statelessness**, **cacheability**, **layered system**, **code on demand**, and **uniform interface**. We will see four of them, perhaps the most important.

### Client-server architecture

REST APIs are designed with a client-server architecture in mind, thus enforcing the principle of separation of concerns: separating the user interface from the data storage. It has various benefits, but one of the most prominent is the portability of both the UI and the server. Many UI can be implemented for one server (or consume one API), and the server can scale and evolve independently from the UI.

### Uniform interface

The uniform interface constraint aims at simplifying and decoupling the architecture to enable each part to evolve independently. This concept includes four principles:

- _Resource identification in requests_: The request should identify each resource. For RESTful web services, URIs are usually responsible for identifying resources.
- _Resource manipulation through representations_: The client should have enough information regarding the resource to be able to modify or delete it.
- _Self-descriptive messages_: Each message should include enough information to describe how to process it.
- _Hypermedia as the engine of application state (HATEOAS)_: A REST client should be able to use server-provided links to discover all the available and related resources. The client shouldn't need to have a hard-coded structure of the resources.

### Statelessness

Statelessness means that the server or the API should retain no session information. Each transaction between the client and the server will contain the necessary data to be understood in isolation without the context from previous communications. The best example is the necessity to be authenticated to perform any change in the API or the data storage: each communication will contain the necessary credentials to authenticate the consumer.

### Cacheability

To improve the API server scalability and performance, it must inform the client if the resource or data is cacheable or not. It prevents the client from using stale data, but it also allows it to reuse existing data again if it is still up-to-date, thus reducing the volume transferred.

## Overview of a REST API call

We learned that a REST API follows a set of architectural constraints, but let's have a look at the anatomy of a REST API call between a **client** and a **server**.
An API call is always composed of a **request** and a **response**.

- The _request_ is sent by the client and received by the server.
- The _response_ will be sent back to the client by the server after it has processed the request.

REST APIs communicate over HTTP/HTTPS the same as web browsers do. API calls look very similar to navigating web pages, which are, in the end, only GET requests on specific URLs.

![API call schema with a request and a response{800x172}](/images/articles/api-guide/api-call-request-response.png)

### The request

An API request contains the following components:

- a base URL, or resource path
- an HTTP method or verb (GET, POST, etc.)
- \[headers\]
- \[a payload or body\]

An [HTTP API request or message](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) is formatted like this:

```http
POST /api/v2/users HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "name": "Peter"
}
```

Or, in other words:

```text
METHOD URL HTTP_VERSION
HEADER_KEY_1: HEADER_VALUE_1
HEADER_KEY_2: HEADER_VALUE_2
BLANK_LINE
BODY
```

As we will see in the [third part of this guide](/articles/api-guide-rest-api-components/), the method and URL are always present and mandatory. They identify the target endpoint requested by the client on the API server.
On the contrary, the headers and body are optional. However, it's rare to have a request (or a response) without headers.

### The response

After processing the request, the API server will send back a response to the client. It will contain the following information:

- a status code
- \[headers\]
- \[a payload or body\]

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 123456
}
```

Or, in other words:

```text
HTTP_VERSION STATUS_CODE STATUS_NAME
HEADER_KEY: HEADER_VALUE
BLANK_LINE
BODY
```

The only mandatory part is the status code. As for the request, a response may or may not contain headers and a body. Again, you probably won't see a response without headers anytime soon.

You probably already noticed some differences between requests and responses. Some components are present in both, like the headers and the body.
In the last part of our guide, we will detail all these components: the request's **method** and **URL**, the response's **status code**, the **headers**, and the **body**, present in both the request and the response.
