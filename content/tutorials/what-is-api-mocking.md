---
title: Mockoon's guide to API mocking
excerpt: Learn what API mocking is, how it works, the use cases, and the benefits of faking internals or third-party APIs
meta:
  title: Mockoon's guide to API mocking
  description: Learn what API mocking is, how it works, the use cases, and the benefits of faking internals or third-party APIs
image: tutorial-api-mocking-guide.png
imageAlt: Mockoon logo connected to a server
imageWidth: 1200
imageHeight: 400
order: 160
---

Designing, building, and testing applications consuming internal or third-party APIs are not always easy. You may hit some bottlenecks, like dependencies between teams, external API unavailable for testing, etc.
Fortunately, API mocking is a technique that helps overcome these issues and speeds up development, accelerates third parties API integration, makes testing more flexible, and more.

## What is API mocking?

API mocking is the action of simulating or imitating actual APIs by answering fake realistic responses to requests. It replaces APIs you cannot currently use because they are unavailable, down, or still under development. APIs could also be unavailable due to the context: like a restricted testing environment.  
It is also a fast and easy way to test your applications with the APIs you are integrating, without the hassles.

API mocking should strive to mimic the original API as close as possible. It also lets you go the extra mile by simulating more complex scenarios like failures or experimenting with new features.

![client communicating with an API or a mock{800x445}](/images/tutorials/api-mocking-guide/api-mocking-server-call.png)

## Use cases: why do we need mock APIs?

API mocking is handy in a lot of scenarios:

- during development to reduce dependencies between teams.
- to accelerate third parties API integration.
- during functional and integration testing.
- to test various advanced scenarios more easily.
- for demonstration purposes.

### API mocking during development

Mocking internal or third-parties APIs helps you accelerate your development lifecycles.
For internal APIs that may still be under development, it helps reduce the dependencies between your development teams, like between front-end and back-end.
You can also avoid relying on external APIs that can be subject to downtimes or require security credentials unpracticable during development.

### Accelerating third-party APIs integration

Thanks to API mocking, you can start [working with third-party APIs](/case-studies/localazy-speed-development-api-mocking/) in no time. Instead of registering for an account, configuring accesses, and provisioning tokens, you can mock the needed API endpoints and start using them in your front-end or back-end applications right away.

### API mocking for integration testing

Some APIs may be unavailable or not easy to use in a testing environment. They may require extra setups or be limited to production environments.

API mocking gives you the flexibility you need to run complex integration tests for interconnected systems, microservices, or third-party APIs integrations. It allows you to run faster and more comprehensive tests that avoid relying on third-party APIs. It also enables you to cover more edge cases: slower response time, random failures, etc.

### Testing advanced scenarios

Testing advanced scenarios and edge cases may require complex setup and data preparation. Working with a mock API can accelerate this process and allow you to directly serve realistic fake data (JSON, CSV, etc.) or error messages.

### API mocking during demonstration and API design

Sometimes you have to make your APIs available to clients or users before they commit to using them. With API mocking, you can provide a simulation of the actual API for testing purposes without the need to give access to your product or provision credentials. Internal or pre-sales demos can benefit from API mocking in the same way.  
The design phase of an API ([API UX research](/case-studies/impala-api-ux-user-research/)) can also benefit from API mocking, especially when doing user experience research or focus groups with your potential users. It allows you to seamlessly and quickly change and refine the API contract without waiting for a server deployment or the development team's availability.

## How does API mocking works?

API mocking is quite simple to put in place. The easiest way to start with API mocking is to use an online or local API mocking tool like Mockoon.  
After installing the tool and setting up some fake API endpoints, it will expose the mock API locally on a specific port. You will use this mock server in your application in place of the original API. So, you may have to change the URL and port to which your frontend or backend application are connecting during development.

The variety of tools can give a different kind of mocking experience. Here is a list of the most common differences:

### Online vs local

Among all the API mocking tools available, we can distinguish two approaches. The online or cloud one, where you register on a website and configure a mock API using a web interface. Then, the tool exposes the fake API on a subdomain (e.g. temp-api123.mocking-tool.com). The advantage is the immediate availability of the mock for coworkers. The disadvantage is that your mock data resides in a third-party database which may not be an option depending on your industry (banking, health, etc.).  
Other tools like Mockoon are local tools, or desktop applications, that ensure a high level of confidentiality. They are also easy to set up and may make the mocking experience faster as no registration or deployment is needed.  
Mockoon's approach is to offer a lightweight desktop application [packed with features](/features/) coupled with a [CLI](/cli/) to give you complete control over your mock experience.

### Static vs dynamic data

One important thing to not overlook when setting up a mock API is the realisticness of the data.
Some mocking tools offer limited capabilities in terms of data dynamism and only allow for static JSON (or other data format) to be served as a response when calling your fake API endpoints.  
A tool that allows for dynamic and realistic data to be served is a must and ensures that you are testing your application with a realistic mock, close to what you will have in your production environment. Mockoon embarks on a templating system with which you can generate [dynamic and realistic data](/tutorials/generate-mock-json-data/).

### Advanced scenarios

Realistic mock APIs do not stop with the data. The way the tool serves the responses is also an important thing to consider if you want to be able to test advanced scenarios or edge cases. For example, you may want to test errors (403, 404, etc.), or serve different responses depending on the presence of headers or request's body.  
Mockoon's offers various ways to cover these edge cases. A [rule system](docs:route-responses/dynamic-rules) to serve different responses depending on the entering request, and different serving modes, like [random or sequential](docs:route-responses/multiple-responses#random-route-response), to test against unexpected errors or downtimes.

> Head over to Mockoon's [getting started tutorial](/tutorials/getting-started/) to set up your first mock API in less than 5 minutes!

## API mocking challenges

While API mocking is easy to set up, it comes with some challenges. The biggest one is to create accurate enough mock APIs and maintain them up-to-date feature after feature. Nothing is more useless than mock API endpoints that are completely outdated.

Fortunately, with Mockoon, it is easy to [share mock API configurations](docs:mockoon-data-files/sharing-mock-api-files) JSON files and add them to a Git repository. They can then easily be shared among coworkers and updated whenever needed.
