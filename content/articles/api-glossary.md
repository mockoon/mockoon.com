---
title: Mockoon's APIs glossary
excerpt: This article provides a glossary for many terms and acronyms you will come accross when working with APIs
meta:
  title: Mockoon's APIs glossary
  description: This article provides a glossary for many terms and acronyms you will come accross when working with APIs
image: api-glossary.png
imageAlt: cloud of words, http, rest, cache, header
imageWidth: 1200
imageHeight: 400
order: 10
---

## Table of content

[API (Application Programming Interface)](#api-application-programming-interface)  
[Authentication](#authentication)  
[Authorization](#authorization)  
[Body](#body)  
[Cache](#cache)  
[Client](#client)  
[CORS (Cross-Origin Resouce Sharing)](#cors-cross-origin-resouce-sharing)  
[CRUD (Create Read Update Delete)](#crud-create-read-update-delete)  
[Endpoint](#endpoint)  
[External API](#external-api)  
[API Gateway](#api-gateway)
[Header](#header)  
[HTTP/HTTPS](#http-https)  
[Internal API](#internal-api)  
[JSON](#json)  
[API Key](#api-key)  
[Latency](#latency)  
[Load balancing](#load-balancing)
[Methods (HTTP methods)](#methods-http-methods)  
[Middleware](#middleware)  
[Mime type](#mime-type)  
[API Mocking](#api-mocking)  
[OpenAPI/Swagger](#openapi-swagger)
[Pagination](#pagination)  
[Path Parameters](#path-parameters)  
[Payload](#payload)  
[Polling](#polling)  
[Query Parameters](#query-parameters)  
[Rate limiting](#rate-limiting)  
[Request](#request)  
[Response](#response)  
[Resource](#resource)  
[REST API](#rest-api)  
[Route](#route)  
[Server](#server)  
[Status code (HTTP)](#status-code-http)  
[URL (Uniform Resource Locator)](#url-uniform-resource-locator)  
[Versioning](#versioning)  
[Web API](#web-api)  
[Webhooks](#webhooks)  
[WebSocket](#websocket)

## A

### API (Application Programming Interface)

API is the acronym for Application Programming Interface. In contrast to a User Interface (UI) that connects a person to a computer, it's a software-to-software interface, or intermediary, enabling two applications to talk to each other.

> 📘 Learn more in our [API guide](/articles/api-guide-what-are-api/)

See also: [Web API](#web-api), [REST API](#rest-api)

### Authentication

Authentication is the process of **verifying the identity of a user or system**. In the context of APIs, it often involves the use of [API keys](#api-key), tokens, or other credentials to ensure that only authorized clients can access the API. An API may require authentication to protect sensitive data or resources and to ensure that only legitimate users can perform actions on the API.
It is usually done by sending credentials in the [request](#request) headers, like the `Authorization` header, or in the [body](#body) of the request. An invalid or missing authentication will usually result in a `401 Unauthorized` [status code](#status-code-http).

### Authorization

Authorization is the process of **determining whether a user or system has permission to perform a specific action or access certain resources**. In APIs, this often follows authentication and involves checking the user's permissions against the requested resource or action. For example, an API may allow a user to read data but not modify it, or it may restrict access to certain endpoints based on the user's role or permissions. Authorization is typically enforced by the API server and can be implemented using various methods, such as role-based access control (RBAC) or attribute-based access control (ABAC).
Missing access rights on a [resource](#resource) will usually result in a `403 Forbidden` [status code](#status-code-http).

## B

### Body

The body refers to the data transmitted in an API transaction in the [request](#request) or the [response](#response). Requests and responses do not always contain a body. [JSON](#json) is one of the most popular data formats to transfer data in the body

See also: [Payload](#payload)

## C

### Cache

In an API, a cache is a system for storing and retrieving [responses](#response) to avoid reprocessing [requests](#request) that are frequent and identical. Multiple cache systems may coexist at different levels: clients (browsers), API gateways or proxies, servers, etc. [Servers](#server) usually indicate to the [client](#client) the caching policy of a request using [headers](#header).

### Client

A client is a piece of hardware or software that access services or [resources](#resource) made available by [servers](#server) in a client-server model. It usually sends a [request](#request) to the server, which processes it and returns a [response](#response). The client may access the server using a network, especially when the server is not on the same computer system.  
For example, a web browser is a client that connects to web servers to display web pages.

See also: [Server](#server)

### CORS (Cross-Origin Resouce Sharing)

Cross-Origin Resource Sharing is an HTTP mechanism that allows a [server](#server) to indicate the origins from which a browser is allowed to load resources.  
By default, cross-origin requests (originating from a different host than the one serving the API) are restricted, and only same-origin requests are allowed. Practically, for all non-simple requests (based on multiple criteria, like the HTTP method used, the presence of a JSON body, etc.), browsers send a pre-flight request using the `OPTIONS` HTTP method and read the [response's](#response) headers (`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, etc.) to check if the server allows requests emanating from this specific host.

### CRUD (Create Read Update Delete)

CRUD is an acronym for **C**reate, **R**ead, **U**pdate, and **D**elete, four basic operations of persistent storages. It is usually used in the [REST API](#rest-api) world to describe a group of [resource](#resource) [endpoints](#endpoint) and [HTTP methods](#methods-http-methods) matching each of the operations:

- **POST /resource** for an operation **C**reating a resource.
- **GET /resource** for an operation **R**eading a resource.
- **PUT /resource** for an operation **U**pdating a resource.
- **DELETE /resource** for an operation **D**eleting a resource.

## E

### Endpoint

An endpoint is a communication channel or a location where an API will receive [requests](#request) for a specific [resource](#resource). For example, in a [REST API](#rest-api), accessing or modifying information related to users or invoices would be available on multiple `/users` or `/invoices` [routes](#route).

### External API

An external API usually exposes a company's internal resources outside of the organization letting third-party companies and developers use the data, for example, to create new applications. They are usually subject to restrictions and may require a paid subscription.

See also: [Internal API](#internal-api)

### API Gateway

An API Gateway is a server that acts as an **intermediary** between clients and backend services. It is responsible for routing requests from clients to the appropriate services, handling tasks such as [authentication](#authentication), [rate limiting](#rate-limiting), and [caching](#cache). API Gateways can simplify the client-side experience by providing a single entry point for multiple services and can also enhance security by hiding the internal architecture of the API.

## H

### Header

HTTP headers are used to pass additional information with HTTP [requests](#request) and [responses](#response). They take the form of a list of key-value pairs.  
Among the most used request headers:

- `Authorization: Bearer xxxxxxx`: contains the [API key or token](#api-key) used to authenticate and identify the client.
- `Content-Type: application/json`: indicates the mime type of the data sent in the request's body (`application/json`, `text/html`, etc.).
- `Accept-Encoding: gzip, deflate, br`: indicates the types of data encoding supported by the client.

Some widely used response headers:

- `Content-Type: application/json`: indicates the mime type of the data sent in the response's body (`application/json`, `text/html`, etc.).
- `Cache-Control: max-age=604800`: to indicate the duration after which the response should be refreshed.
- `Last-Modified: Fri, 24 June 2022 08:00:00 GMT`: indicate the data when the resource was last modified.

> 💡 Learn how to [setup headers with Mockoon](/docs/latest/response-configuration/response-headers/)

### HTTP/HTTPS

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It is an **application layer protocol** used for transmitting hypermedia documents, such as HTML. HTTPS (HTTP Secure) is the secure version of HTTP, which uses encryption (SSL/TLS) to protect the data exchanged between clients and servers.

## I

### Internal API

An internal API provides resources within an organization's software system. They are usually consumed by internal applications and back-ends and are often used in micro-services architectures. Internal APIs target in-house services and developers and are an efficient way to share departments' data within the organization.

See also: [External API](#external-api)

## J

### JSON

JSON is a data format using human-readable text to transmit data objects consisting of key-value pairs. It is a popular data format for [web APIs](#web-api) used in the bodies of [requests](#request) and [responses](#response) of API transactions.  
A JSON example:

```json
{
  "response": "success",
  "status": 200
}
```

> 💡 Learn how to [generate fake JSON with Mockoon](/tutorials/generate-mock-json-data/)

## K

### API Key

An API key is a unique identifier used to authenticate and identify a user or an application accessing an [API](#api-application-programming-interface). Most APIs require their consumers (companies, developers, etc.) to register and request an API key as they are often paid products subjected to restrictions: consumer identification, volume billing, etc.
API keys are frequently sent by the client along with the [request](#request) in an `Authorization` [header](#header).

## L

### Latency

Latency is the **time** it takes for a [request](#request) to **travel from the client to the server and back**, including the time taken by the server to process the request and generate a [response](#response). It is usually measured in milliseconds (ms) and can be affected by various factors, such as network speed, server load, and the complexity of the request.

### Load balancing

Load balancing is the process of **distributing incoming API requests across multiple servers or instances** to ensure that no single server becomes overwhelmed with traffic. It helps improve the performance, reliability, and scalability of an API by preventing bottlenecks and ensuring that resources are used efficiently. Load balancers can be implemented at various levels, including hardware, software, or cloud-based solutions.

## M

### Methods (HTTP methods)

A [request](#request) is always targeting an API [route](#route) which comprises an HTTP verb or method, and a path. It indicates to the server what action the client intends to perform on a specific resource. There are multiple methods available: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.

The most used ones are the following and embody specific meanings in [REST APIs](#rest-api):

- `POST`: create a new resource
- `GET`: retrieve a resource
- `PUT`: update an existing resource
- `DELETE`: remove an existing resource

> 📘 Learn more in our [REST API guide](/articles/api-guide-rest-api-components/#method-request)

See also: [CRUD](#crud-create-read-update-delete)

### Middleware

Middleware refers to software components that sit between the client and server in an API architecture. They can **intercept and process requests and responses**, allowing for tasks such as logging, authentication, and data transformation. Middleware can be used to add additional functionality to an API without modifying the core logic of the application.

### Mime type

A MIME type (Multipurpose Internet Mail Extensions type) is a standard way to **indicate the nature and format of a document**, file, or byte stream. In the context of APIs, MIME types are used to specify the format of the data being sent in requests and responses, and is usually included in the `Content-Type` [header](#header) of the [request](#request) or [response](#response). It helps the client and server understand how to interpret the data being exchanged. Common MIME types include:

- `application/json`: JSON format
- `application/xml`: XML format
- `text/html`: HTML format
- `text/plain`: Plain text format

### API Mocking

API mocking is the action of simulating or imitating actual [APIs](#api-application-programming-interface) by answering fake realistic [responses](#response) to [requests](#request). It replaces APIs you cannot currently use because they are unavailable, down, or still under development. APIs could also be unavailable due to the context: like a restricted testing environment.
It is a fast and easy way to test your applications with the APIs you are integrating, without the hassles.

> 📘 Learn more in our [API mocking guide](/articles/what-is-api-mocking/)

## O

### OpenAPI/Swagger

OpenAPI (formerly known as Swagger) is a **specification for building APIs**. It provides a standard way to describe the structure and behavior of an API using a JSON or YAML document. This document serves as a contract between the API provider and the consumers, allowing for better collaboration, documentation, and automation.

## P

### Pagination

Pagination is a technique used in APIs to **divide large sets of data into smaller, manageable chunks** or pages. It allows clients to retrieve data in smaller portions rather than fetching all the data at once, which can improve performance and reduce the load on the server. Pagination is often implemented using [query parameters](#query-parameters), such as `page` and `limit`, to specify which page of data to retrieve and how many items per page.

### Path Parameters

A path parameter is a non-optional section of the [route's](#route) path used as a placeholder populated with a value during a [request](#request). It allows the [client](#client) to indicate the target of the request to the [server](#server). They are usually represented in API documentations between curly braces or preceded by a colon.  
For example, in `/users/{id}` or `/users/:id`, `id` is a path parameter indicating that the action targets a user with a specific id: `/users/123`. It is up to the API [server](#server) to define which query parameters are available and needed.

See also: [Query parameters](#query-parameters)

### Payload

The payload is the **data sent by the client in a [request](#request) or returned by the server in a [response](#response)**. In the context of APIs, the payload typically contains the information needed to create, update, or retrieve a resource. The format of the payload can vary depending on the API and the specific endpoint being used. Common formats include JSON, XML, and form data.

See also: [Body](#body)

### Polling

Polling is a technique used in APIs to **retrieve data from the server at regular intervals**. Instead of waiting for the server to push updates to the client (as with [webhooks](#webhooks)), the client repeatedly sends requests to the server to check for new data. This can be useful in scenarios where real-time updates are not critical, but it can also lead to increased server load and [latency](#latency).

## Q

### Query Parameters

A query parameter is an optional parameter added by a [client](#client), placed after the [route's](#route) path, and sent with the [request](#request). It allows the client to add more parameters to its request. They are separated from the path by an interrogation mark and represented as key-value pairs separated by ampersands. For example, in `/users?filter=active&sort=asc`, two query parameters are sent: a `filter` parameter set to `active`, and a `sort` parameter set to `asc`. It is up to the API [server](#server) to define which query parameters are available and needed.

See also: [Path parameters](#path-parameters)

## R

### Rate limiting

Rate limiting is a technique used in APIs to **control the amount of incoming requests from clients within a specific time frame**, for example, allowing a maximum of 100 requests per minute per client. It helps prevent abuse, ensures fair usage, and protects the server from being overwhelmed by too many requests. When a client exceeds the allowed request limit, the server typically responds with a `429 Too Many Requests` [status code](#status-code-http).

### Request

A request is usually sent by a [client](#client) connecting to an API [server](#server) which will process it and send a [response](#response) back to the client.

See also: [Response](#response)

### Response

A response is built by a [server](#server) after processing a [request](#request) sent by the [client](#client). It usually contains the data requested by the client and information related to the execution of the request, like the [status code](#status-code-http).

See also: [Request](#request)

### Resource

In [REST APIs](#rest-api), a resource is an object with a type, associated data, and optional sub-resources. They are usually interacted with individually or in collections through [endpoints](#endpoint). For example, an object of type `User`, which can be read individually on the `GET /users/{id}` endpoint.

See also: [CRUD](#crud-create-read-update-delete)

### REST API

REST stands for **RE**presentational **S**tate **T**ransfer. It's a software architectural style that defines a set of constraints used to create standardized [APIs](#api-application-programming-interface). [Web APIs](#web-api) adhering to the REST architectural constraints are called RESTful APIs. RESTful APIs must follow six constraints: client-server architecture, statelessness, cacheability, layered system, code on demand, and uniform interface.

> 📘 Learn more in our [REST API guide](/articles/api-guide-what-are-rest-api/)

### Route

In [REST APIs](#rest-api), routes are couples of [HTTP methods](#methods-http-methods) and paths of an API, usually representing a action to be performed on a specific resource. For example, accessing information about the users or invoices would be done on routes named after the [resources](#resource) using the `GET` method: `GET company.com/api/users` or `GET company.com/api/invoices`.

See also: [CRUD](#crud-create-read-update-delete)

## S

### Server

A server is a piece of hardware or software providing functionalities to other programs or devices called [clients](#client). In a client-server architecture, servers can provide different functionalities or services, such as providing [resources](#resource) or content.  
Client-server systems usually implement a request-response model where the client sends a [request](#request) to the server, and the server returns a [response](#response) to the client after performing a server-side action.

See also: [Client](#client)

### Status code (HTTP)

An HTTP status code is added to the [response](#response) by the [server](#server) to indicate to the [client](#client) the status of its request without having to further analyze the other response's components (headers, body, etc.). The status code varies depending on the success of the action but also on its nature. More concretely, it's a number with three digits (between 100 and 599) associated with a name: `200 Success`, `404 Not Found`, etc. There are many status codes grouped into five main categories: informational responses (1xx), successes (2xx), redirections (3xx), client errors (4xx), and server errors (5xx).

> 📘 Learn more in our [API guide](/articles/api-guide-rest-api-components/#status-code-response)

## U

### URL (Uniform Resource Locator)

A URL is a reference to a web [resource](#resource) specifying its location on a network and a mechanism to retrieve this resource. A typical URL, like `https://company.com/api/users`, contains multiple information:

- The protocol used to reach the resource: `HTTPS`.
- The hostname: `company.com`.
- A path to the resource: `/api/users`.

## V

### Versioning

Versioning is the process of assigning unique version numbers to different iterations of an API. It allows developers to make changes, add features, or fix bugs without disrupting existing clients that rely on a specific version of the API. Common versioning strategies include:

- **URI Versioning**: Including the version number in the API endpoint URL (e.g., `/api/v1/users`).
- **Header Versioning**: Specifying the version in the request headers (e.g., `Accept: application/vnd.company.v1+json`).
- **Query Parameter Versioning**: Including the version as a query parameter (e.g., `/api/users?version=1`).

## W

### Web API

Web APIs are a specific type of [APIs](#api-application-programming-interface) that can be accessed over the web, frequently using the HTTP protocol. They usually involve a [client](#client) (your browser) and a server exposing [resources](#resource) publicly.

> 📘 Learn more in our [API guide](/articles/api-guide-what-are-api/#web-apis)

See also: [REST API](#rest-api)

### Webhooks

Webhooks are a way for an API to **send real-time notifications or data to a client** when certain events occur. Instead of the client polling the API for updates, the API sends a [request](#request) to a predefined [URL](#url-uniform-resource-locator) (the webhook endpoint) when an event happens. This allows for more efficient communication and reduces the need for constant polling.

### WebSocket

WebSocket is a protocol that enables **full-duplex communication channels** over a single TCP connection. It allows for **real-time data exchange between a client and a server**, making it suitable for applications that require low latency and high interactivity, such as chat applications, online gaming, and live data feeds. WebSockets are often used in conjunction with APIs to provide real-time updates and notifications.
