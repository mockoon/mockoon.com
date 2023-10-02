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
[Body](#body)  
[Cache](#cache)  
[Client](#client)  
[CORS (Cross-Origin Resouce Sharing)](#cors-cross-origin-resouce-sharing)  
[CRUD (Create Read Update Delete)](#crud-create-read-update-delete)  
[Endpoint](#endpoint)  
[External API](#external-api)  
[Header](#header)  
[Internal API](#internal-api)  
[JSON](#json)  
[API Key](#api-key)  
[Methods (HTTP methods)](#methods-http-methods)  
[API Mocking](#api-mocking)  
[Path Parameters](#path-parameters)  
[Query Parameters](#query-parameters)  
[Request](#request)  
[Response](#response)  
[Resource](#resource)  
[REST API](#rest-api)  
[Route](#route)  
[Server](#server)  
[Status code (HTTP)](#status-code-http)  
[URL (Uniform Resource Locator)](#url-uniform-resource-locator)  
[Web API](#web-api)

## A

### API (Application Programming Interface)

API is the acronym for Application Programming Interface. In contrast to a User Interface (UI) that connects a person to a computer, it's a software-to-software interface, or intermediary, enabling two applications to talk to each other.  
[→ Learn more in our API guide](/articles/api-guide-what-are-api/)

See also: [Web API](#web-api), [REST API](#rest-api)

## B

### Body

The body refers to the data transmitted in an API transaction in the [request](#request) or the [response](#response). Requests and responses do not always contain a body. [JSON](#json) is one of the most popular data formats to transfer data in the body

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

[→ Learn how to setup headers with Mockoon](/docs/latest/response-configuration/response-headers/)

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

[→ Learn how to generate fake JSON with Mockoon](/tutorials/generate-mock-json-data/)

## K

### API Key

An API key is a unique identifier used to authenticate and identify a user or an application accessing an [API](#api-application-programming-interface). Most APIs require their consumers (companies, developers, etc.) to register and request an API key as they are often paid products subjected to restrictions: consumer identification, volume billing, etc.
API keys are frequently sent by the client along with the [request](#request) in an `Authorization` [header](#header).

## M

### Methods (HTTP methods)

A [request](#request) is always targeting an API [route](#route) which comprises an HTTP verb or method, and a path. It indicates to the server what action the client intends to perform on a specific resource. There are multiple methods available: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.

The most used ones are the following and embody specific meanings in [REST APIs](#rest-api):

- `POST`: create a new resource
- `GET`: retrieve a resource
- `PUT`: update an existing resource
- `DELETE`: remove an existing resource

[→ Learn more in our REST API guide](/articles/api-guide-rest-api-components/#method-request)

See also: [CRUD](#crud-create-read-update-delete)

### API Mocking

API mocking is the action of simulating or imitating actual [APIs](#api-application-programming-interface) by answering fake realistic [responses](#response) to [requests](#request). It replaces APIs you cannot currently use because they are unavailable, down, or still under development. APIs could also be unavailable due to the context: like a restricted testing environment.
It is a fast and easy way to test your applications with the APIs you are integrating, without the hassles.

[→ Learn more in our API mocking guide](/articles/what-is-api-mocking/)

## P

### Path Parameters

A path parameter is a non-optional section of the [route's](#route) path used as a placeholder populated with a value during a [request](#request). It allows the [client](#client) to indicate the target of the request to the [server](#server). They are usually represented in API documentations between curly braces or preceded by a colon.  
For example, in `/users/{id}` or `/users/:id`, `id` is a path parameter indicating that the action targets a user with a specific id: `/users/123`. It is up to the API [server](#server) to define which query parameters are available and needed.

See also: [Query parameters](#query-parameters)

## Q

### Query Parameters

A query parameter is an optional parameter added by a [client](#client), placed after the [route's](#route) path, and sent with the [request](#request). It allows the client to add more parameters to its request. They are separated from the path by an interrogation mark and represented as key-value pairs separated by ampersands. For example, in `/users?filter=active&sort=asc`, two query parameters are sent: a `filter` parameter set to `active`, and a `sort` parameter set to `asc`. It is up to the API [server](#server) to define which query parameters are available and needed.

See also: [Path parameters](#path-parameters)

## R

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

[→ Learn more in our REST API guide](/articles/api-guide-what-are-rest-api/)

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

[→ Learn more in our API guide](/articles/api-guide-rest-api-components/#status-code-response)

## U

### URL (Uniform Resource Locator)

A URL is a reference to a web [resource](#resource) specifying its location on a network and a mechanism to retrieve this resource. A typical URL, like `https://company.com/api/users`, contains multiple information:

- The protocol used to reach the resource: `HTTPS`.
- The hostname: `company.com`.
- A path to the resource: `/api/users`.

## W

### Web API

Web APIs are a specific type of [APIs](#api-application-programming-interface) that can be accessed over the web, frequently using the HTTP protocol. They usually involve a [client](#client) (your browser) and a server exposing [resources](#resource) publicly.

[→ Learn more in our API guide](/articles/api-guide-what-are-api/#web-apis)

See also: [REST API](#rest-api)
