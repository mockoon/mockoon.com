---
title: List of HTTP request methods
excerpt: This article provides a comprehensive list of HTTP request methods, their definitions, and use cases.
meta:
  title: List of HTTP request methods
  description: This article provides a comprehensive list of HTTP request methods, their definitions, and use cases.
image: list-http-request-methods.png
imageAlt: cloud of words, including GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
imageWidth: 1200
imageHeight: 400
order: 40
---

You may have heard about the different HTTP request methods, but what are they, and how do they differ? In this article you will find a list of all HTTP request methods, their definitions, and their use cases.

## What is an HTTP request method?

An **HTTP request method** (or verb) is a part of the HTTP protocol that indicates the desired action to be performed on a specific resource identified by a URL. Each method has a specific meaning and is used for different purposes in web communication.
HTTP request methods are used in RESTful APIs to define the type of operation to be performed on the resources. They are part of the HTTP protocol, which is the foundation of data communication on the World Wide Web.

To learn more about HTTP methods and REST APIs, you can read our [API guide part 2: REST(ful) APIs](/articles/api-guide-rest-api-components/).

## List of HTTP request methods

Here is a nearly exhaustive list of HTTP request methods, their definitions, and their use cases. Note that some methods are less commonly used or specific to certain protocols or applications.

The most commonly used HTTP request methods are: [**GET**](#get), [**POST**](#post), [**PUT**](#put), [**DELETE**](#delete), [**PATCH**](#patch), [**OPTIONS**](#options), and [**HEAD**](#head). These methods are widely supported and used in RESTful APIs.

[ACL](#acl)  
[BASELINE-CONTROL](#baseline-control)  
[BIND](#bind)  
[CHECKIN](#checkin)  
[CHECKOUT](#checkout)  
[CONNECT](#connect)  
[COPY](#copy)  
[DELETE](#delete)  
[GET](#get)  
[HEAD](#head)  
[LABEL](#label)  
[LINK](#link)  
[LOCK](#lock)  
[M-SEARCH](#m-search)  
[MERGE](#merge)  
[MKACTIVITY](#mkactivity)  
[MKCALENDAR](#mkcalendar)  
[MKCOL](#mkcol)  
[MKREDIRECTREF](#mkredirectref)  
[MKWORKSPACE](#mkworkspace)  
[MOVE](#move)  
[NOTIFY](#notify)  
[OPTIONS](#options)  
[ORDERPATCH](#orderpatch)  
[PATCH](#patch)  
[POST](#post)  
[PROPFIND](#propfind)  
[PROPPATCH](#proppatch)  
[PURGE](#purge)  
[PUT](#put)  
[QUERY](#query)  
[REBIND](#rebind)  
[REPORT](#report)  
[SEARCH](#search)  
[SOURCE](#source)  
[SUBSCRIBE](#subscribe)  
[TRACE](#trace)  
[UNBIND](#unbind)  
[UNCHECKOUT](#uncheckout)
[UNLINK](#unlink)  
[UNLOCK](#unlock)  
[UNSUBSCRIBE](#unsubscribe)  
[UPDATE](#update)  
[UPDATEREDIRECTREF](#updateredirectref)  
[VERSION-CONTROL](#version-control)

### ACL

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3744)**

The **ACL** (Access Control List) method is used to retrieve or modify the access control list of a resource. It allows clients to manage permissions for users or groups on a specific resource.

### BASELINE-CONTROL

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **BASELINE-CONTROL** method is used to manage baselines in a version-controlled resource. It allows clients to create, modify, or delete baselines, which are snapshots of a resource at a specific point in time.

### BIND

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc5842)**

The **BIND** method is used to bind a resource to a new URI. It allows clients to create a new binding for a resource, making it accessible under a different URI.

### CHECKIN

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **CHECKIN** method is used to submit changes to a version-controlled resource. It allows clients to create a new version of a resource by checking in the modified content.

### CHECKOUT

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **CHECKOUT** method is used to allow modifications to a version-controlled resource.

### CONNECT

The **CONNECT** method is used to establish a tunnel to the server identified by a given URI. It is primarily used for proxy servers to create a connection to a remote server, often for HTTPS communication.

### COPY

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **COPY** method is used to create a copy of a resource at a different URI.

### DELETE

The **DELETE** method is used to remove a resource identified by a given URI. Example: `DELETE /api/v1/users/123` would delete the user with ID 123.

### GET

The **GET** method is used to retrieve a representation of a resource identified by a given URI. It is the most common method used in [RESTful APIs](/articles/api-guide-what-are-rest-api/). Example: `GET /api/v1/users/123` would retrieve the user with ID 123.

### HEAD

The **HEAD** method is similar to the GET method, but it only retrieves the [headers](/articles/api-glossary/#header) of a resource without the [body](/articles/api-glossary/#body). It is often used to check if a resource exists or to get metadata about a resource. Example: `HEAD /api/v1/users/123` would return the headers for the user with ID 123 without the user data.

### LABEL

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **LABEL** method is used to assign a label to a version-controlled resource. It allows clients to categorize or tag resources with specific labels for easier identification and management.

### LINK

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc2068)**

The **LINK** method is used to create a link between two resources. It allows clients to establish relationships between resources by creating a link from one resource to another.

### LOCK

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **LOCK** method is used to lock a resource to prevent other clients from modifying it. It allows clients to obtain a lock on a resource, ensuring that no other client can make changes until the lock is released.

### M-SEARCH

Specific to SSDP (Simple Service Discovery Protocol)

The **M-SEARCH** method is used in the context of SSDP to discover devices and services on a network. It allows clients to send a multicast request to find available resources.

### MERGE

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **MERGE** method is used to merge changes from one resource into another. It allows clients to combine the state of two resources, typically in a version-controlled environment.

### MKACTIVITY

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **MKACTIVITY** method is used to create a new activity resource in a version-controlled environment. It allows clients to initiate a new set of changes to a resource.

### MKCALENDAR

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4791)**

The **MKCALENDAR** method is used to create a new calendar resource. It allows clients to create a calendar collection for managing events and schedules.

### MKCOL

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **MKCOL** method is used to create a new collection (directory) at a specified URI. It allows clients to create a new folder or directory in a WebDAV server.

### MKREDIRECTREF

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4437)**

The **MKREDIRECTREF** method is used to create a redirect reference to a resource. It allows clients to create a reference that points to another resource, enabling redirection.

### MKWORKSPACE

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **MKWORKSPACE** method is used to create a new workspace resource. It allows clients to create a workspace for organizing related resources in a WebDAV server.

### MOVE

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **MOVE** method is used to move a resource from one URI to another. It allows clients to change the location of a resource by moving it to a new URI.

### NOTIFY

**Specific to WebDAV**

The **NOTIFY** method is used to send notifications about changes to a resource. It allows clients to receive updates or alerts when a resource is modified or updated.

### OPTIONS

The **OPTIONS** method is used to retrieve the supported [HTTP methods](/articles/api-glossary/#methods-http-methods) and other options for a specific [resource](/articles/api-glossary/#resource). It allows clients to discover the capabilities of a server or resource. Example: `OPTIONS /api/v1/users/123` would return the allowed methods for the user with ID 123.

### ORDERPATCH

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3648)**

The **ORDERPATCH** method is used to modify the order of resources in a collection. It allows clients to change the sequence or arrangement of resources within a collection.

### PATCH

The **PATCH** method is used to apply partial modifications to a resource. It allows clients to update specific fields or properties of a resource without sending the entire representation. Example: `PATCH /api/v1/users/123` with a body containing the fields to update.

### POST

The **POST** method is used to submit data to a server to create a new resource or perform an action. It is often used to send data in the request body, such as creating a new user or submitting a form. Example: `POST /api/v1/users` with a body containing the user data.

### PROPFIND

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **PROPFIND** method is used to retrieve properties of a resource. It allows clients to request metadata or attributes associated with a resource, such as its creation date, last modified date, or custom properties.

### PROPPATCH

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **PROPPATCH** method is used to modify properties of a resource. It allows clients to update or set specific properties associated with a resource, such as changing its title or description.

### PURGE

The **PURGE** method is used to remove cached content from a cache server. It is often used in content delivery networks (CDNs) to invalidate cached resources and ensure that clients receive the most up-to-date content.

### PUT

The **PUT** method is used to create or update a resource at a specified URI. It allows clients to send the entire representation of a resource in the request body. If the resource already exists, it will be replaced; if it does not exist, it will be created. Example: `PUT /api/v1/users/123` with a body containing the user data.

### QUERY

**[New proposal, not yet standardized](https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/)**

The **QUERY** method is used to retrieve data from a resource based on specific criteria or parameters. It is similar to the GET method but will allow for a request body to be included, enabling more complex queries. This method is not yet widely supported or standardized.

### REBIND

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc5842)**

The **REBIND** method is used to change the binding of a resource to a new URI. It allows clients to update the URI associated with a resource without changing its content.

### REPORT

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **REPORT** method is used to request a report or summary of information about a resource. It allows clients to retrieve specific data or statistics related to a resource, such as version history or access control information.

### SEARCH

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc5323)**

The **SEARCH** method is used to perform a search operation on a resource or collection. It allows clients to query resources based on specific criteria, such as keywords or properties.

### SOURCE

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **SOURCE** method is used to retrieve the source code or content of a resource. It allows clients to access the underlying data or representation of a resource, typically in a format suitable for further processing or analysis.

### SUBSCRIBE

**Specific to WebDAV**

The **SUBSCRIBE** method is used to subscribe to notifications or events related to a resource. It allows clients to receive updates or alerts when changes occur to a resource, such as modifications or new versions.

### TRACE

The **TRACE** method is used to perform a diagnostic trace of the request path. It allows clients to see the exact request and response headers as they are sent and received by the server. It is primarily used for debugging purposes.

### UNBIND

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc5842)**

The **UNBIND** method is used to remove a binding of a resource from a specific URI. It allows clients to delete the association between a resource and its URI without affecting the resource itself.

### UNCHECKOUT

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **UNCHECKOUT** method is used to cancel a checkout operation on a version-controlled resource. It allows clients to discard changes made during a checkout and revert the resource to its previous state.

### UNLINK

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc2068)**

The **UNLINK** method is used to remove a link between two resources. It allows clients to delete a previously established link without affecting the resources themselves.

### UNLOCK

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **UNLOCK** method is used to release a lock on a resource. It allows clients to remove a lock previously obtained with the LOCK method, enabling other clients to modify the resource.

### UNSUBSCRIBE

**Specific to WebDAV**

The **UNSUBSCRIBE** method is used to cancel a subscription to notifications or events related to a resource. It allows clients to stop receiving updates or alerts when changes occur to a resource.

### UPDATE

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **UPDATE** method is used to modify a version-controlled resource. It allows clients to apply changes to a resource without creating a new version, typically used in conjunction with version control systems.

### UPDATEREDIRECTREF

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4437)**

The **UPDATEREDIRECTREF** method is used to update a redirect reference to a resource. It allows clients to change the target URI of a redirect reference, enabling redirection to a different resource.

### VERSION-CONTROL

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc3253)**

The **VERSION-CONTROL** method is used to create a new version-controlled resource. It allows clients to initiate version control for a resource, enabling tracking of changes and versions over time.

### Custom HTTP request methods?

While the methods listed above are standardized and widely used, it is possible to define custom HTTP request methods for specific applications or protocols. However, custom methods should be used with caution, as they may not be supported by all clients or servers and can lead to compatibility issues.
