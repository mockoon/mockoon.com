---
title: List of HTTP status codes
excerpt: This article provides a comprehensive list of HTTP status codes, their definitions, and use cases.
meta:
  title: List of HTTP status codes
  description: This article provides a comprehensive list of HTTP status codes, their definitions, and use cases.
image: list-http-response-status-codes.png
imageAlt: cloud of words, including 200, 404, 500, 201, 400, 401, 403, 301
imageWidth: 1200
imageHeight: 400
order: 41
---

You may have heard about the different HTTP status codes, but what are they, and how do they differ? In this article you will find a list of all HTTP status codes, their definitions, and their use cases.

## What is an HTTP status code?

An **HTTP status code** is a three-digit numeric code returned by a web server in response to an HTTP request. Each status code indicates the result of the request and provides information about whether the request was successful, encountered an error, or requires further action.

HTTP status codes are grouped into five classes based on their first digit:

- **1xx (Informational)**: The request was received and is being processed
- **2xx (Successful)**: The request was successfully received, understood, and accepted
- **3xx (Redirection)**: Further action must be taken to complete the request
- **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled
- **5xx (Server Error)**: The server failed to fulfill a valid request

To learn more about HTTP status codes and REST APIs, you can read our [API guide part 3: REST API components](/articles/api-guide-rest-api-components/#status-code-response).

## List of HTTP status codes

Here is a comprehensive list of HTTP status codes, their definitions, and their use cases. The most commonly used status codes are: [**200**](#200-ok), [**201**](#201-created), [**400**](#400-bad-request), [**401**](#401-unauthorized), [**403**](#403-forbidden), [**404**](#404-not-found), and [**500**](#500-internal-server-error).

### 1xx Informational

[100 Continue](#100-continue)  
[101 Switching Protocols](#101-switching-protocols)  
[102 Processing](#102-processing)  
[103 Early Hints](#103-early-hints)

### 2xx Successful

[200 OK](#200-ok)  
[201 Created](#201-created)  
[202 Accepted](#202-accepted)  
[203 Non-Authoritative Information](#203-non-authoritative-information)  
[204 No Content](#204-no-content)  
[205 Reset Content](#205-reset-content)  
[206 Partial Content](#206-partial-content)  
[207 Multi-Status](#207-multi-status)  
[208 Already Reported](#208-already-reported)  
[226 IM Used](#226-im-used)

### 3xx Redirection

[300 Multiple Choices](#300-multiple-choices)  
[301 Moved Permanently](#301-moved-permanently)  
[302 Found](#302-found)  
[303 See Other](#303-see-other)  
[304 Not Modified](#304-not-modified)  
[305 Use Proxy](#305-use-proxy)  
[307 Temporary Redirect](#307-temporary-redirect)  
[308 Permanent Redirect](#308-permanent-redirect)

### 4xx Client Error

[400 Bad Request](#400-bad-request)  
[401 Unauthorized](#401-unauthorized)  
[402 Payment Required](#402-payment-required)  
[403 Forbidden](#403-forbidden)  
[404 Not Found](#404-not-found)  
[405 Method Not Allowed](#405-method-not-allowed)  
[406 Not Acceptable](#406-not-acceptable)  
[407 Proxy Authentication Required](#407-proxy-authentication-required)  
[408 Request Timeout](#408-request-timeout)  
[409 Conflict](#409-conflict)  
[410 Gone](#410-gone)  
[411 Length Required](#411-length-required)  
[412 Precondition Failed](#412-precondition-failed)  
[413 Payload Too Large](#413-payload-too-large)  
[414 URI Too Long](#414-uri-too-long)  
[415 Unsupported Media Type](#415-unsupported-media-type)  
[416 Range Not Satisfiable](#416-range-not-satisfiable)  
[417 Expectation Failed](#417-expectation-failed)  
[418 I'm a teapot](#418-im-a-teapot)  
[421 Misdirected Request](#421-misdirected-request)  
[422 Unprocessable Entity](#422-unprocessable-entity)  
[423 Locked](#423-locked)  
[424 Failed Dependency](#424-failed-dependency)  
[425 Too Early](#425-too-early)  
[426 Upgrade Required](#426-upgrade-required)  
[428 Precondition Required](#428-precondition-required)  
[429 Too Many Requests](#429-too-many-requests)  
[431 Request Header Fields Too Large](#431-request-header-fields-too-large)  
[451 Unavailable For Legal Reasons](#451-unavailable-for-legal-reasons)

### 5xx Server Error

[500 Internal Server Error](#500-internal-server-error)  
[501 Not Implemented](#501-not-implemented)  
[502 Bad Gateway](#502-bad-gateway)  
[503 Service Unavailable](#503-service-unavailable)  
[504 Gateway Timeout](#504-gateway-timeout)  
[505 HTTP Version Not Supported](#505-http-version-not-supported)  
[506 Variant Also Negotiates](#506-variant-also-negotiates)  
[507 Insufficient Storage](#507-insufficient-storage)  
[508 Loop Detected](#508-loop-detected)  
[510 Not Extended](#510-not-extended)  
[511 Network Authentication Required](#511-network-authentication-required)

## 1xx Informational Status Codes

### 100 Continue

The **100 Continue** status code indicates that the initial part of a request has been received and has not yet been rejected by the server. The client should continue with the request or ignore the response if the request is already finished.

### 101 Switching Protocols

The **101 Switching Protocols** status code indicates that the server understands and is willing to comply with the client's request to switch protocols. This is often used when upgrading from HTTP to WebSocket.

### 102 Processing

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc2518)**

The **102 Processing** status code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.

### 103 Early Hints

The **103 Early Hints** status code indicates that the server is likely to send a final response with the header fields included in the informational response. This allows the client to start preloading resources while the server prepares the response.

## 2xx Successful Status Codes

### 200 OK

The **200 OK** status code indicates that the request has succeeded. This is the most common status code for successful requests. Example: `GET /api/v1/users/123` returning user data.

### 201 Created

The **201 Created** status code indicates that the request has been fulfilled and has resulted in one or more new resources being created. Example: `POST /api/v1/users` successfully creating a new user.

### 202 Accepted

The **202 Accepted** status code indicates that the request has been accepted for processing, but the processing has not been completed. This is often used for asynchronous operations.

### 203 Non-Authoritative Information

The **203 Non-Authoritative Information** status code indicates that the request was successful but the enclosed payload has been modified from that of the origin server's 200 OK response by a transforming proxy.

### 204 No Content

The **204 No Content** status code indicates that the server has successfully fulfilled the request and there is no additional content to send in the response payload body. Example: `DELETE /api/v1/users/123` successfully deleting a user.

### 205 Reset Content

The **205 Reset Content** status code indicates that the server has fulfilled the request and desires that the user agent reset the document view which caused the request to be sent.

### 206 Partial Content

The **206 Partial Content** status code indicates that the server is delivering only part of the resource due to a range header sent by the client. This is commonly used for resumable downloads.

### 207 Multi-Status

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **207 Multi-Status** status code indicates that the message body contains multiple status codes for different parts of the request. This is used when multiple operations are performed in a single request.

### 208 Already Reported

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc5842)**

The **208 Already Reported** status code is used to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

### 226 IM Used

The **226 IM Used** status code indicates that the server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

## 3xx Redirection Status Codes

### 300 Multiple Choices

The **300 Multiple Choices** status code indicates that the target resource has more than one representation, and information is being provided so that the user can select a preferred representation.

### 301 Moved Permanently

The **301 Moved Permanently** status code indicates that the target resource has been assigned a new permanent URI. The client should use the new URI for future requests.

### 302 Found

The **302 Found** status code indicates that the target resource resides temporarily under a different URI. The client should continue to use the original URI for future requests.

### 303 See Other

The **303 See Other** status code indicates that the server is redirecting the user agent to a different resource that can be retrieved with a GET request.

### 304 Not Modified

The **304 Not Modified** status code indicates that the resource has not been modified since the version specified by the request headers. The client can use the cached version.

### 305 Use Proxy

**[Deprecated](https://datatracker.ietf.org/doc/html/rfc7231)**

The **305 Use Proxy** status code was defined to indicate that a requested response must be accessed by a proxy. This status code has been deprecated due to security concerns.

### 307 Temporary Redirect

The **307 Temporary Redirect** status code indicates that the target resource resides temporarily under a different URI and the user agent must not change the request method.

### 308 Permanent Redirect

The **308 Permanent Redirect** status code indicates that the target resource has been assigned a new permanent URI and any future references to this resource should use the returned URI.

## 4xx Client Error Status Codes

### 400 Bad Request

The **400 Bad Request** status code indicates that the server cannot or will not process the request due to client error, such as malformed request syntax or invalid request message framing.

### 401 Unauthorized

The **401 Unauthorized** status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.

### 402 Payment Required

The **402 Payment Required** status code is reserved for future use. It was originally intended for digital payment systems but is not currently used in standard implementations.

### 403 Forbidden

The **403 Forbidden** status code indicates that the server understood the request but refuses to authorize it. The client does not have permission to access the requested resource.

### 404 Not Found

The **404 Not Found** status code indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.

### 405 Method Not Allowed

The **405 Method Not Allowed** status code indicates that the method received in the request is not supported by the target resource. Example: sending a POST request to an endpoint that only accepts GET.

### 406 Not Acceptable

The **406 Not Acceptable** status code indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields.

### 407 Proxy Authentication Required

The **407 Proxy Authentication Required** status code indicates that the client must first authenticate itself with the proxy before the request can be fulfilled.

### 408 Request Timeout

The **408 Request Timeout** status code indicates that the server did not receive a complete request message within the time that it was prepared to wait.

### 409 Conflict

The **409 Conflict** status code indicates that the request could not be completed due to a conflict with the current state of the target resource. Example: trying to create a user with an email that already exists.

### 410 Gone

The **410 Gone** status code indicates that access to the target resource is no longer available at the origin server and this condition is likely to be permanent.

### 411 Length Required

The **411 Length Required** status code indicates that the server refuses to accept the request without a defined Content-Length header field.

### 412 Precondition Failed

The **412 Precondition Failed** status code indicates that one or more conditions given in the request header fields evaluated to false when tested on the server.

### 413 Payload Too Large

The **413 Payload Too Large** status code indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.

### 414 URI Too Long

The **414 URI Too Long** status code indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.

### 415 Unsupported Media Type

The **415 Unsupported Media Type** status code indicates that the origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.

### 416 Range Not Satisfiable

The **416 Range Not Satisfiable** status code indicates that none of the ranges in the request's Range header field overlap the current extent of the selected resource.

### 417 Expectation Failed

The **417 Expectation Failed** status code indicates that the expectation given in the request's Expect header field could not be met by at least one of the inbound servers.

### 418 I'm a teapot

**[RFC 2324 - April Fools' RFC](https://datatracker.ietf.org/doc/html/rfc2324)**

The **418 I'm a teapot** status code indicates that the server refuses to brew coffee because it is, permanently, a teapot. This was defined as an April Fools' joke and is not intended for serious use.

### 421 Misdirected Request

The **421 Misdirected Request** status code indicates that the request was directed at a server that is not able to produce a response for the combination of scheme and authority.

### 422 Unprocessable Entity

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **422 Unprocessable Entity** status code indicates that the server understands the content type and syntax of the request but was unable to process the contained instructions.

### 423 Locked

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **423 Locked** status code indicates that the source or destination resource is locked, preventing the requested operation from being completed.

### 424 Failed Dependency

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **424 Failed Dependency** status code indicates that the method could not be performed on the resource because the requested action depended on another action that failed.

### 425 Too Early

The **425 Too Early** status code indicates that the server is unwilling to risk processing a request that might be replayed, typically in the context of TLS early data.

### 426 Upgrade Required

The **426 Upgrade Required** status code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.

### 428 Precondition Required

The **428 Precondition Required** status code indicates that the origin server requires the request to be conditional to prevent conflicts from simultaneous updates.

### 429 Too Many Requests

The **429 Too Many Requests** status code indicates that the user has sent too many requests in a given amount of time ("rate limiting"). This is commonly used to prevent abuse and ensure fair usage.

### 431 Request Header Fields Too Large

The **431 Request Header Fields Too Large** status code indicates that the server is unwilling to process the request because its header fields are too large.

### 451 Unavailable For Legal Reasons

The **451 Unavailable For Legal Reasons** status code indicates that the server is denying access to the resource as a consequence of a legal demand, such as censorship or government restrictions.

## 5xx Server Error Status Codes

### 500 Internal Server Error

The **500 Internal Server Error** status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. This is a generic error message when no specific error condition is known.

### 501 Not Implemented

The **501 Not Implemented** status code indicates that the server does not support the functionality required to fulfill the request, such as an unrecognized request method.

### 502 Bad Gateway

The **502 Bad Gateway** status code indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.

### 503 Service Unavailable

The **503 Service Unavailable** status code indicates that the server is currently unable to handle the request due to temporary overloading or maintenance of the server.

### 504 Gateway Timeout

The **504 Gateway Timeout** status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access.

### 505 HTTP Version Not Supported

The **505 HTTP Version Not Supported** status code indicates that the server does not support, or refuses to support, the major version of HTTP that was used in the request message.

### 506 Variant Also Negotiates

The **506 Variant Also Negotiates** status code indicates that the server has an internal configuration error where the chosen variant resource is configured to engage in transparent content negotiation itself.

### 507 Insufficient Storage

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc4918)**

The **507 Insufficient Storage** status code indicates that the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

### 508 Loop Detected

**[Specific to WebDAV](https://datatracker.ietf.org/doc/html/rfc5842)**

The **508 Loop Detected** status code indicates that the server detected an infinite loop while processing the request with "Depth: infinity".

### 510 Not Extended

The **510 Not Extended** status code indicates that further extensions to the request are required for the server to fulfill it.

### 511 Network Authentication Required

The **511 Network Authentication Required** status code indicates that the client needs to authenticate to gain network access, typically used by captive portals in public Wi-Fi networks.

### Custom HTTP status codes?

While the status codes listed above are standardized, some applications and services use custom status codes in the ranges not officially assigned. However, custom status codes should be used with caution, as they may not be understood by all clients and can lead to compatibility issues. It's generally recommended to use standard status codes whenever possible.
