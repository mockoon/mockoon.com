---
title: WebSockets
meta:
  title: Mockoon WebSockets documentation
  description: All you need to know about Mockoon's mock WebSocket route creation, behavior, and their response machanisms.
order: 230
---

# WebSockets

---

## Overview

While HTTP routes operate on a request-response paradigm, WebSockets offer a different approach. They enable **real-time**, **two-way communication** between a client and server, allowing for more dynamic and interactive applications, such as chats and live event updates.

When a client sends a connection request to a WebSocket endpoint, the server establishes a persistent connection that remains active until either the client or server terminates it. While connected, both the client and server can freely exchange messages.

There are several communication patterns that can be implemented within a WebSocket route in Mockoon, as shown below:

### 1. Conversational mode

This communication style is similar to the HTTP request-response model but operates continuously. The server responds to each message sent by the client, and vice-versa.

### 2. Server Streaming Mode

Unlike the conversational style, one party (typically the server) sends messages at regular intervals after the connection is established. In this mode, the server ignores messages from clients and operates independently. Several streaming modes are available:

- **One-to-One streaming (Unicast)**: In this mode, each client receives a set of streaming messages independent of others. This means messages are not shared with other connected clients. For example, subscription-based streaming services deliver content based on individual user requests.

- **One-to-Many streaming (Multicast)**: In multicast mode, the server sends messages to specific subsets of connected clients. An example is online gaming or chat rooms, where only participants in the room receive the relevant messages.

- **Broadcasting**: In this mode, all clients receive the same messages in the same order at the same intervals. Events are published regardless of whether a client is connected. For example, global live streams, where anyone can subscribe and consume content.

> ⚠️ _A note about Socket.IO_: Mockoon does **not** implement Socket.IO's protocol. It supports native WebSockets using the standard WebSocket protocol (`ws://` or `wss://`). As a result, Socket.IO clients will not be able to connect to WebSocket routes served by Mockoon.

Mockoon introduced support for WebSockets in [v9.0.0](/releases/9.0.0/), offering all of these communication styles.

## Add a WebSockets route

To create a **new WebSocket route**, click on the **"WebSocket"** entry in the add route menu:

![Add a new WebSocket route{498x335}](docs-img:add-ws-route.png)

You can then configure the route's **path** as you would for an HTTP route. The path is the URL that clients will use to connect to the WebSocket endpoint. The path can be any valid URL path, such as `/ws`, `/chat`, or `/messages`. This lets you create multiple WebSocket endpoints within the same API mock instance.

![view of a new WebSocket route{1484x176}](docs-img:set-ws-route-path.png)

By default, a newly created WebSocket endpoint operates in **conversational mode**, where the **server responds to each client message** with an empty message by default, which you can customize. A response is guaranteed for every message sent by the client, unless the client terminates the connection immediately after sending the message.

> 💡 If you have setup **TLS** on your mock server, WebSocket routes will automatically be served via secure endpoints. Instead of `ws://`, use its secure alternative `wss://` when connecting.

## Creating a WebSocket streaming endpoint

Mockoon offers two streaming modes: **One-to-One streaming** and **Broadcast streaming**. These modes allow you to send messages at regular intervals to connected clients. If neither mode is selected (the default), the endpoint operates in **conversational mode**, where the server responds to each client message.

### Choosing a streaming mode

To implement **One-to-One streaming mode**, select the option labeled "One-to-One Streaming" in the route configuration as shown below:

![One-to-One Streaming option{884x237}](docs-img:toggle-ws-unicast-streaming.png)

Similarly, select the option labeled "Broadcast Streaming" to implement a **broadcasting endpoint**:

![Broadcast Streaming option{884x237}](docs-img:toggle-ws-broadcast-streaming.png)

In broadcasting mode, all clients connected to a particular endpoint will receive identical messages, regardless of their accompanying parameters. Practically, **response rules will be disabled** and have no effect on the response contents. In contrast, in One-to-One streaming mode, response rules will be applied to each client message.

> 💡 **Multicasting:** You can currently achieve multicasting by configuring multiple distinct endpoints. Each endpoint should be of the broadcast type, and clients must connect to the appropriate endpoint to receive messages intended for that particular group. All clients connected to a given endpoint will receive the same set of messages.

#### Specifying the message interval in streaming mode

When either "One-to-One" or "Broadcasting" mode is in effect, the **message interval field** becomes enabled. This allows you to specify the interval between streaming messages in milliseconds.

Currently, the minimum interval allowed between two streaming messages is 10 milliseconds. This restriction prevents the server from being overwhelmed by the need to produce a large number of messages within a short timeframe.

## Customizing your WebSocket route

WebSocket endpoints support most of the same customization options as HTTP endpoints. You can use features like [templating](docs:templating/overview), [global variables](docs:variables/global-variables), and [data buckets](docs:data-buckets/overview) to generate dynamic message content. For detailed information, please refer to the respective documentation.

> 💡 Mockoon will honor the `Content-Type` header to access message content sent by the client while processing rules and responses. Depending on the WebSocket client library being used, users may be able to set the headers when connecting to a WebSocket endpoint. If the headers cannot be set during the connection, the server will treat incoming messages as raw strings.

Some response menu tabs are hidden for WebSocket endpoints, as they are not relevant in this context. These include the **Headers**, **Callbacks**, and **Settings** tabs.

## Limitations

Some limitations apply to WebSocket endpoints in Mockoon:

- The [**fallback mode**](docs:route-responses/multiple-responses#fallback-mode) (sending the request to the next endpoint or proxied server when no rules match) is not supported for WebSocket endpoints.
- The [**logs tab**](docs:logging-and-recording/requests-logging) offers limited recording capabilities for WebSocket requests. Requests sent to unknown routes will not be recorded. Additionally, Mockoon currently does not record subsequent request messages or responses for existing routes. This may change in future releases.
