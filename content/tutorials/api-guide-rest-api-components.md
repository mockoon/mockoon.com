---
title: "Mockoon's API guide part 3: REST APIs components"
excerpt: 'Discover what composes REST API request and response: method, URL, headers, body'
meta:
  title: "Mockoon's API guide part 3: REST APIs components"
  description: 'Discover what composes REST API request and response: method, URL, headers, body'
image: api-guide.png
imageAlt: API illustration
order: 152
previousLink: api-guide-what-are-rest-api
previousText: 'API guide part 2: Rest APIs'
---

## Components of a REST API request and response

After seeing [how an API call works](/tutorials/api-guide-what-are-rest-api), with a request and a response, in the second part of this guide, we will now see what are the request's and response's components: the request's **method** and **URL**, the response's **status code**, and the **headers** and **body**, present in both the request and the response.

![REST API call payload components](/images/tutorials/api-guide/rest-api-call-components.png)

### Resource URL (request)

The request will be made to a specific URL, endpoint, or resource path, using a specific method. While the URL identifies the **resource** you want to interact with (users, invoices, posts, etc.), the method will indicate to the server which type of **action** you want to perform on it.

You will find different approaches to defining resource URLs. The most common will probably be to use a self-descriptive name in its plural form, prefixed with one or more path sections (the "api" keyword, the API version, etc.) and followed by optional URL parameters to interact with a specific resource (a user, a post, etc.):

- `http://company.com/api/v2/users`: all the users
- `http://company.com/api/v2/users/:id`: one user with a specific `id`
- `http://company.com/api/v2/invoices`: all the invoices
- `http://company.com/api/v2/posts`: all the posts
- ...

A best practice is to avoid verbs or actions like "get" or "list" in the URL. It is better to let the HTTP method describe what you want to do. So instead of `http://company.com/api/v2/getUsers`, prefer `http://company.com/api/v2/users` using the GET method.

You will also often find nested resources. They help fetch related resources like a user's posts or a post's comments. These types of URL endpoints usually look like this:

- `http://company.com/api/v2/users/:id/posts`: all the posts from the user with a specific `id`
- `http://company.com/api/v2/posts/:id/comments`: all the comments for a post with a specific `id`

### Method (request)

To indicate to the server what action to perform on a specific resource, this resource URL will always be coupled to an [HTTP verb or method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). There are many methods: **GET**, **HEAD**, **POST**, **PUT**, **DELETE**, **CONNECT**, **OPTIONS**, **TRACE**, **PATCH**.

The most used one are the following:

- _POST_: create new resource(s)
- _GET_: retrieve resource(s)
- _PUT_: update existing resource(s)
- _DELETE_: remove existing resource(s)

They map to the corresponding CRUD operations: Create, Read, Update, Delete.
Each method used in combination with a specific URL will result in a different action performed on the data. Let's see some examples:

- `GET http://company.com/api/v2/users`: retrieve all the users' data
- `GET http://company.com/api/v2/users/:id`: retrieve a specific user's data by its `id`
- `POST http://company.com/api/v2/users`: create a new user
- `PUT http://company.com/api/v2/users/:id`: update a specific user's data by its `id`
- `DELETE http://company.com/api/v2/users/:id`: delete a specific user by its `id`

As you can imagine, depending on the amount of resources, APIs can expose many endpoints.

### Status code (response)

The response will contain an important piece of information: the **status code**. It informs the consumer (the client) if the action was performed correctly or not on the requested resource. It varies not only depending on the success of the action, but also depending on its nature. More concretely, it's a number with three digits (between 100 and 599) with a name, like `200 Success`, or `404 Not Found`. There are many [status codes grouped into five main categories](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes): **informational responses** (1xx), **successes** (2xx), **redirections** (3xx), **client errors** (4xx), and **server errors** (5xx).

Let's see some API call scenarios with the corresponding ideal status code:

- `GET /users`:
  - _users were successfuly retrieved_: **200 OK**
  - _consumer is not authenticated_: **401 Unauthorized**
  - _server is down_: **503 Service Unavailable**
- `GET /users/1234`:
  - _users with id 1234 was not found_: **404 Not Found**
- `POST /users`:
  - _new user was successfuly created_: **201 Created**

Have you noticed the difference between a successful GET (200 OK) and a successful POST (201 Created)? 200 and 201 belong to the same status codes category, "successes", but they also inform on the nature of the action.
With this variety of statuses, applications can give more precise feedback to their users instead of relying on generic success or error messages.

### Header(s)

Both the request and response can contain one or more headers. You can see headers as labels, or metadata, giving the recipient (client or server) more information about the request or response.

They are usually different between request and response, and some headers don't make sense in a request and vice-versa.
Among the most well-known, we can enumerate `Content-Type`, `Authorization`, `Accept`, `Content-Length`, `Cache-Control`, etc.

Let's see a typical API call with some headers:

1. Request:

```http
GET http://company.com/api/v2/users HTTP1.1
Accept: application/json
Authorization: Bearer 1234567890abcdef
```

Two headers are present here:

- `Accept`: Indicate to the server in which format the response's payload (or body) should be sent. Here, we requested the data to be in JSON format.
- `Authorization`: This header will usually contain the authentication information (here, a bearer token) necessary for the server to identify the consumer and verify if it has access to the specific resource.

2. Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 105

[
  {
    "id": 1,
    "username": "john45"
  },
  {
    "id": 2,
    "username": "mary12"
  }
]
```

Again, two headers are present here, but they are different and only make sense in a response:

- `Content-Type`: indicate to the client in which format the payload (or body) has been sent. Here, in JSON format.
- `Content-Length`: Indicate the length of the response body.

HTTP headers is a vast topic, and there are [many headers that you can explore](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

### Body or payload

As you may have noticed in the previous examples, requests and responses may or may not include a payload or body. The body is the actual piece of information you want to fetch or store and use or display in your application. It will have a different meaning depending on the context. It could be a list of users returned by the server after a **GET request**. It may also be a new user sent to the server in the request during a **POST request**.
You understand now, both request and response can contain a body, but it doesn't make sense in some cases. Sometimes it is even highly discouraged and not part of the HTTP specification. It is the case for a GET request which should not contain a body. However, you will find implementations contradicting this.

Nowadays, the most widely used format for sending payloads is the [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON). You will also find a lot of APIs making data available in XML.

As we saw previously, the body follows a blank line and is sent as plain text:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 105

[
  {
    "id": 1,
    "username": "john45"
  },
  {
    "id": 2,
    "username": "mary12"
  }
]
```

## How to test API calls?

Many options exist to make API calls. Among the most famous you will find cURL, a command-line tool, or Postman, a desktop application.

You will also frequently find APIs described or documented using the OpenAPI specification, which often leads to a publication of the API documentation using Swagger UI. A famous one is their demo API, the [Pet store](https://petstore.swagger.io/). Swagger UI allows you to discover API endpoints and their parameters but also directly make test calls.

When designing an API, it is a good practice to use the OpenAPI specification and publish the API documentation using a well-known tool. It will help developers to integrate and work with your API.

## API mocking

During development, you may encounter blockers that will slow you down. For example, you may want to start connecting your front-end application with an API that your back-end team is currently working on.
Or you would like to work with a third-party API (authentication, payment, weather or financial data, etc.) without too much hassle like creating an account or provision authentication tokens.
API mocking is a technique that will allow you to work with an API by faking it. It helps you integrate an API without registering with the provider, provisioning a token, or waiting for another team to develop it. Thus vastly improving your developer experience and reducing development time.

Mockoon is here to help you start integrating APIs in no time by quickly mocking them locally.

> Head over to our [Getting started](/tutorials/getting-started/) tutorial to learn more about API mocking.
