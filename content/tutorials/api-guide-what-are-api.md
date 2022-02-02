---
title: "Mockoon's API guide part 1: What are APIs?"
excerpt: Learn what APIs and web APIs are, how they work, and what are the benefits of using and integrating third party APIs
meta:
  title: "Mockoon's API guide part 1: What are APIs?"
  description: Learn what APIs and web APIs are, how they work, and what are the benefits of using and integrating third party APIs
image: api-guide.png
imageAlt: API illustration
imageWidth: 1200
imageHeight: 400
order: 150
nextLink: api-guide-what-are-rest-api
nextText: 'API guide part 2: Rest APIs'
---

You heard about APIs, but you do not know what they are or where to start? This guide is for you.

APIs are everywhere, and they power almost all the internet. From weather forecasts to financial market data, nearly everything transits through APIs. It allows to disseminate data like never before and help developers build applications with reuse in mind instead of reinventing the wheel.

## What is an API?

API is the acronym for [Application Programming Interface](https://en.wikipedia.org/wiki/API). In contrast to a User Interface (UI) that connects a person to a computer, it's a software-to-software interface, or intermediary, enabling two applications to talk to each other.

![machine to machine communication{800x172}](/images/tutorials/api-guide/machine-to-machine.png)

APIs are not designed to be used by a person other than the developer using or implementing them. APIs are a way to expose a simple interface, a layer of abstraction, to interact with a more complex system without knowing its internal way of working.

APIs power web and mobile applications, desktop applications, internet of things. They are behind:

- your Instagram application loading the latest posts
- your Amazon Ring doorbell
- your car info system fetching real-time transit data
- ...

## Benefits of using APIs

- _Increased possibilities_: When building an application, we usually distinguish between its core functionality, the core business, and the rest. You may provide stock market information, but providing useful CSV reports by email or push notification alerts may not be a priority. You can choose to delay or even exclude the development of such features, or you can integrate third-party API services that will provide each of them, opening a world of possibilities.
- _Speed up development_: An application is always full of secondary features that are not necessarily part of your core product. Also, you may not have the resources or skills to build them. A good example is user authentication, which involves many security concepts: salt rotation, two-factor authentication, etc. Instead of reinventing the wheel and developing everything internally, you can outsource and trust a service provider and use its APIs. You can then focus on your core feature and thus speed up the development of your product.
- _increased product quality_: Focusing on your core business and delegating secondary features to external APIs is not only a question of speeding up development time. A lot of these secondary features may require a whole set of different skills and knowledge. Relying on external, tested, and proven APIs can also make your business more reliable.
- _reduced costs_: Less development work can reduce the cost of an application. But aside from the reduced development costs, using APIs also reduce the maintenance, testing, or even training, required.

There are many other benefits of using APIs: enabling mobile applications, increased security, reduced outages, etc. But you probably got the idea. One last remark: it's always a matter of choice between speeding up development and being locked with third-party vendors, the dreaded vendor lock-in!

## Web APIs

APIs can take various forms, but we are more interested in [web APIs](https://en.wikipedia.org/wiki/Web_API) for this guide. Web APIs are the ones that can be accessed over the web, frequently using the HTTP protocol. They involve a client, your browser, and a server. The client initiates the request and waits for a response from the server. The response can take a lot of forms, mostly structured data, but also images, text, videos, etc.

Web-based APIs are the most widely available type of APIs. But inside this broad category, we can still distinguish many types of architectures: REST APIs, SOAP APIs, GraphQL APIs, XML-RPC, WebSocket, etc.
One of the most popular is the REST API, and it's the one we will see in detail in the rest of this guide.
GraphQL APIs are also very popular while more recent than REST APIs. They propose a completely different way to query the data server. WebSocket is also widely used for two-way interactive communication between a client and a server, like real-time chat applications.
