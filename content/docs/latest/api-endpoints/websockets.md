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

While HTTP Routes operate on a request-response paradigm, WebSockets offer a different approach. They enable real-time, two-way communication between a client and server, allowing for more dynamic and interactive applications such as chats, live event updates, etc.

Upon a client’s connection request to a WebSocket endpoint, the server establishes a persistent connection. This connection remains active until either the client or server terminates it. While connected, both the client and server can exchange messages freely.

There are several communication patterns that could be implemented within a WebSocket connection as shown below.

 1. Conversational style

      This communication style similar to the HTTP request-response model but operates in a continuous manner. The server responds to each message sent by the client, and vice-versa. Either the client or server can initiate communication once the connection is established, but generally it is the client who initiate the conversation.

 2. Server Streaming Mode

      Unlike the conversational style, here one party (typically the server) sends messages at intervals after the connection establishment, causing a continuous flow of messages. In this mode, server discards messages from clients and operates independently. There are several notable streaming modes worth mentioning.

      1. One-to-One streaming (Unicast)

         In this mode, each client receives a set of streaming messages independent of each other. That means, messages are not shared among other connected clients. For example, subscription-based streaming services deliver content based on individual user requests.

      2. One-to-Many streaming (Multicast)

         In multicast mode, the server typically transmits messages to specific subsets of connected clients. As an example, online gaming or chat rooms, where only participants within the room should receive relevant messages.

      3. Broadcasting

         In this mode, all clients receive the same messages in the same order at the same intervals. This is very much like fan-out. Events will be published regardless of whether a client is connected. For example, global live streams where anyone can subscribe and consume.

## WebSockets in Mockoon

Mockoon introduced WebSocket protocol support starting from version X.X.X. Mockoon provides all of these three types of communication styles via WebSockets.

> ⚠️ _A note about Socket.IO_: Mockoon does **not** implement Socket.IO. It implements the standard native socket support via WebSocket protocol (`ws:// or wss://`). According to their official documentation [Socket.IO is not a WebSocket implementation](https://socket.io/docs/v4/#what-socketio-is-not). Therefore, Socket.IO clients will not be able to connect to the WebSocket routes served by Mockoon.


In Mockoon, a response message is guaranteed for every message sent by a client, unless the client terminates the connection immediately after sending the message.


To create a WebSocket route, click on the "WebSocket" entry in the add route menu:

![Add a new WebSocket route{325x306}](docs-img:add-ws-route.png)

By default, a newly created WebSocket operates in conversational mode, with the server sending an empty success message `{}` in response to each client message.

![view of a new WebSocket route{1518x481}](docs-img:new-ws-route.png)


> 💡 If you have setup TLS on the mock server, WebSocket routes will also be automatically served via secure endpoints as same as for HTTP routes. So, instead `ws://`, use its secure alterantive `wss://` when connecting.


## Customizing a WebSocket Route

Like HTTP routes, users can specify endpoint path and its related documentation. However, as WebSockets do not operate on the HTTP protocol, there is no option for HTTP method type.

### Creating a streaming endpoint

WebSockets introduce two new configurations for a particular endpoint: streaming mode selection and message push interval.

Under streaming mode selection, only one of these options can be chosen for a given endpoint, or neither. If neither option is selected (the default), the endpoint operates in conversational mode, where the server responds to each client message.

#### Type of Streaming Mode

To implement one-to-one streaming mode, select the option labeled 'One-to-one streaming' as shown below.

![One-to-One Streaming option{152x77}](docs-img:ws-1to1-streaming.png)

Similary, select the option with label of 'Broadcast streaming' to implement a broadcasting endpoint.

![Broadcast Streaming option{136x77}](docs-img:ws-broadcast-streaming.png)

When none of them are selected, it endpoint will respond for every client message recieved.

> **Multicasting:** Mockoon currently supports multicasting by configuring multiple distinct endpoints. Each should be an endpoint which is a type of broadcast, and clients must connect to the appropriate endpoint to receive messages intended for that particular group. All clients connected to that given endpoint will receive the same set of messages.

#### Specifying the message interval

When either ‘One-to-one’ or ‘Broadcasting’ mode is in-effect, the message interval textbox becomes enabled. This allows you to specify the interval between two streaming messages in milliseconds.

Currently, the minimum interval allowed between two streaming messages is 10 milliseconds. This deliberate restriction prevents the server from being overwhelmed by the need to produce lot of messages within a short timeframe.


#### Customizing Messages

Users can modify response messages in a way similar to HTTP routes. WebSockets also offer the ability to customize messages based on headers, query parameters, message bodies, and other available parameters.

> ⚠️ _Note:_ Currently, WebSocket endpoint paths do not support path parameters like those found in HTTP routes. Therefore, response messages cannot be customized based on path variables, and the corresponding rule is hidden. Query parameters can be used instead.


Users can still use existing features like [templating](docs:templating/overview), [global variables](docs:variables/global-variables), [data buckets](docs:data-buckets/overview) to manipulate a message content. For detailed information, please refer to the respective documentation.


> ⚠️ _Note 2:_ Mockoon still honours the `Content-Type` header to access message content sent by the client while processing rules. Depending on the WebSocket client library being used, a user might be able to set headers when connecting to a WebSocket endpoint. Therefore, if headers cannot be set when connecting to the server, it will treat it as a raw string.

The Headers, Callbacks, and Settings tabs are hidden for a WebSocket endpoint due to their irrelevance in the context of WebSockets.

## Limitations

There are several limitations with this new WebSocket implementation in Mockoon, but it is expected that those will be addressed one by one in future.

  1. Proxying will not be supported for WebSocket endpoints. Therefore, fallback response mode will be unavailable for those endpoints.
  2. The Logs tab offers limited recording capabilities for WebSocket requests. WebSocket requests sent to unknown routes will not be recorded. Additionally, Mockoon currently does not record subsequent request messages or responses for existing routes.