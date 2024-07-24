---
title: Comparison between Mockoon and Stoplight's API mocking services
shortTitle: Mockoon vs Stoplight
excerpt: 'Discover the differences between Stoplight and Mockoon API mocking services: cloud offer, features, and more'
meta:
  title: Comparison between Mockoon and Stoplight's API mocking services
  description: 'Discover the differences between Stoplight and Mockoon API mocking services: cloud offer, features, and more'
image: comparison-mockoon-stoplight-api-mocking.png
imageAlt: Mockoon and Stoplight logos side by side
imageWidth: 1200
imageHeight: 400
order: 6
---

## What is Stoplight?

Stoplight is a cloud-based platform that provides tools for designing, documenting, and testing APIs. It offers hosted API mocks to simulate and validate API behavior in a collaborative environment. Stoplight also features a CLI tool called Prism, which allows developers to create and run mock servers locally based on OpenAPI specifications. Prism can validate requests and responses, enabling efficient prototyping and testing without the need for a fully implemented backend. Together, these tools ensure that API contracts are met and facilitate a streamlined API development workflow.

![#sub#Screenshot of Stoplight's interface{1080x617}](/images/compare/api-mocking-comparison-stoplight-screenshot.png)

## What is Mockoon?

Mockoon is a set of open-source tools that allow developers to mock APIs quickly and easily. It offers an **offline-first and privacy friendly** desktop application to design and run mock APIs locally. A CLI and various libraries are also available to **deploy your mock APIs anywhere**: CI/CD pipelines, servers, etc.

Mockoon features include a powerful **templating system** to generate dynamic and realistic mock data, a **rules system**, a **proxy mode** to partially mock API endpoints, and many customization options: status codes, dynamic headers, TLS, file serving, etc.

Mockoon Cloud is also available for teams and organizations looking for a **cloud-based solution**. It enables teams to **collaborate on API mocking projects** and **share mock APIs** with others by deploying them to the cloud.

> 💡 Get started with Mockoon: [Download Mockoon](/download/) or [Discover Mockoon Cloud](/cloud/)

![#sub#Screenshot of Mockoon's interface{1400x670}](/images/compare/api-mocking-comparison-mockoon-screenshot.png)

## Offer comparison

Below is a comparison of the main characteristics of Stoplight and Mockoon respective offers:

|                                                        | Stoplight                                                                                                          | Mockoon                                                                                                                                                                                                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="text-gray-700">Offline/Cloud based</span> | **Cloud and offline**                                                                                              | **Offline** and [**Cloud** ](/cloud/)                                                                                                                                                                                                       |
| <span class="text-gray-700">Tools provided</span>      | **Online interface**, **desktop application**, and **commande line tool, Prism**                                   | [Desktop application](/download/) to design your mock<br/> [CLI](/cli/), [Docker image](https://hub.docker.com/r/mockoon/cli) and [GitHub Action](https://github.com/marketplace/actions/mockoon-cli) to deploy anywhere                    |
| <span class="text-gray-700">Free/paid</span>           | **Freemium**                                                                                                       | **Free** for the open-source tools, **paid** for the Cloud                                                                                                                                                                                  |
| <span class="text-gray-700">Billing</span>             | Billed **per seat**                                                                                                | Billed **per seat**                                                                                                                                                                                                                         |
| <span class="text-gray-700">Main cloud features</span> | **API design and testing**, **hosted API mocks** and **team collaboration**                                        | [Deployments](/docs/latest/mockoon-cloud/api-mock-cloud-deployments/), [team collaboration](/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/) and [AI assistant](/docs/latest/mockoon-cloud/templates-and-ai-assistant/) |
| <span class="text-gray-700">Open-source</span>         | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>Some tools like Prism are open-source | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                                                                                                                              |
| <span class="text-gray-700">Enterprise support</span>  | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                     | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                                                                                                                              |

## Features comparison

While Stoplight and Mockoon offer similar API mocking capabilities, they have different approaches. Below is a comparison of the main features of Stoplight and Mockoon:

| API mocking Features                                              | Stoplight                                                                                                                           | Mockoon                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="text-gray-700">Self-host</span>                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> Using their command line tool, Prism                 | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> A [CLI](/cli/), [Docker image](https://hub.docker.com/r/mockoon/cli) and [GitHub Action](https://github.com/marketplace/actions/mockoon-cli) are available to deploy in headless environments |
| <span class="text-gray-700">Proxy mode</span>                     | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> [Documentation](/tutorials/partial-mocking-proxy/)                                                                                                                                            |
| <span class="text-gray-700">OpenAPI support </span>               | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> [Documentation](/docs/latest/openapi/import-export-openapi-format/)                                                                                                                           |
| <span class="text-gray-700">Recording</span>                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>Mocks can be created from previously called endpoints | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> Mockoon can [create mock endpoints based on entering requests](/tutorials/requests-recording-auto-mocking/)                                                                                   |
| <span class="text-gray-700">CRUD operations</span>                | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>                                                       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> Automated [CRUD endpoints](/tutorials/create-full-rest-api-crud-routes/) with fake [databases](/docs/latest/data-buckets/overview/)                                                           |
| <span class="text-gray-700">Response rules</span>                 | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> Advanced system of [rules](/docs/latest/route-responses/dynamic-rules/)                                                                                                                       |
| <span class="text-gray-700">Dynamic/realistic data</span>         | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> [Advanced templating system](/tutorials/generate-mock-json-data/) and [AI assistant](/ai-powered-api-mocking/) to generate realistic fake data                                                |
| <span class="text-gray-700">Callbacks/Webhooks</span>             | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> [Callbacks system](/docs/latest/callbacks/overview/)                                                                                                                                          |
| <span class="text-gray-700">File serving</span>                   | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>                                                       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> [Documentation](/docs/latest/response-configuration/file-serving/)                                                                                                                            |
| <span class="text-gray-700">Custom headers</span>                 | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> At endpoint's and server's levels<br/>Supports [templating helpers](/docs/latest/templating/overview/#headers-templating) for dynamically generated headers                                   |
| <span class="text-gray-700">Customizable status code</span>       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                                                                                                                                                               |
| <span class="text-gray-700">Route regex</span>                    | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>                                                       | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> [Documentation](/docs/latest/api-endpoints/routing/)                                                                                                                                          |
| <span class="text-gray-700">GraphQL support</span>                | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>                                                       | <span class="text-danger fw-bold fs-3 me-2"><i class="icon-clear"></i></span>                                                                                                                                                                                                |
| <span class="text-gray-700">Slow network/server simulation</span> | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span>                                                      | <span class="text-success fw-bold fs-3 me-2"><i class="icon-check"></i></span> At server's and endpoint's levels                                                                                                                                                             |