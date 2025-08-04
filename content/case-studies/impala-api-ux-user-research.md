---
title: API UX research with Mockoon
excerpt: Learn how Impala uses Mockoon to conduct API UX research to offer the best experience to their users
meta:
  title: API UX research with Mockoon
  description: Learn how Impala uses Mockoon to conduct API UX research to offer the best experience to their users
image: impala/logo-dark.svg
imageAlt: Impala logo
header:
  image: impala/logo-light.svg
  imageAlt: Impala logo
  overview: Impala enables innovators to build incredible, seamless travel experiences.
  industry: Travel
  employees: 50+
  link: https://impala.travel
  linkAnchor: Impala.travel
order: 10
---

Building an API requires a lot of work, but designing an API that feels intuitive to use and is effortless to integrate for your developers probably represents a greater challenge. While we all know that conducting user research is crucial when working on graphical interfaces, did you know that API user research could help you nail API design? Impala understood this and successfully integrated user research into their API development workflow.

### Impala is conducting user research when designing their APIs

Impala is creating hotel booking APIs for the travel industry, allowing developers to book hotel rooms through their API within minutes. To live up to their promise, they strive to create the best experience for their users. The first reason is that ease of use is one of the most important factors when choosing an API. The second reason is that APIs that are easy to understand and come with clear documentation result in fewer integration mistakes and errors.

This approach leads to a win-win situation: happy customers, quick integration times, and fewer support requests.

> {"type": "##quotation##", "citation": "Public APIs require the same, if not more, research and validation than UI design before they are built and released.", "author": "Toby Urff", "authorRole": "CPO & Co-founder @ Impala", "pictureUrl": "external/impala/toby-urff.jpg"}

Impala understands this fact better than any other company, and their API design process is well-proven. After writing extensive documentation and OpenAPI specifications for each new feature or endpoint, they invite a few outside developers for 45-minute user research sessions. During these sessions, they ask the participants to perform several tasks in the new API. By obtaining this immediate feedback, they ensure that the feature will be easy to understand and integrate.

### Using Mockoon during API user research

Since Impala started conducting these user research sessions during API development, they also mocked their APIs to provide the new endpoints to the participants without too much hassle. However, API mocking presents challenges, especially if you want the experience to be realistic and have limited time to set it up. Creating convincing mocks for short sessions of 45 minutes can be very time-consuming and sometimes a bit overkill. Impala found that available mocking tools on the market provide limited mocking possibilities and don't offer enough features to guarantee the realistic experience required by such focus groups.

> {"type": "##quotation##", "citation": "Mockoon is the answer to just about every mocking need you might have.", "author": "Yasmin Desai", "authorRole": "Senior Product Manager @ Impala", "pictureUrl": "external/impala/yasmin-desai.jpg"}

Mockoon offers a unique set of features, such as templating and rules, that allow users to set up great mocks in no time. Some of these advanced features help create complex scenarios that closely mimic the behavior of APIs. It's the kind of setup you wouldn't want to implement manually, especially when you need to do this every time you plan new focus groups.

### Mockoon helps you build realistic mocks

Mockoon's advanced features enable Impala to quickly create realistic scenarios without the hassle of assembling multiple tools or libraries. They can easily set up endpoints that return dynamic and realistic content by [generating fake data](/tutorials/generate-mock-json-data/) and reacting to participants' entries. Simulating authentication or pagination mechanisms becomes a breeze thanks to the available [templating helpers](docs:templating/overview) and [response rules](docs:route-responses/dynamic-rules) system.

### Real time API behavior adjustment

One advantage of using Mockoon is the ability to quickly adjust and modify the behavior of a running API mock. Thus, following participants' feedback, Impala can rapidly fine-tune the API parameters, rename confusing property names, or update the endpoint responses. This can be done seamlessly from the interface without the need for redeploying or restarting the mock.

### OpenAPI compatibility and partial mocking

Impala is creating their API documentation using the OpenAPI specification, which is compatible with Mockoon. By importing OpenAPI specification files into Mockoon, they can quickly create a skeleton for the mock. This allows Impala to retain their API design tool of choice while ensuring an excellent mocking experience.

Furthermore, Mockoon makes it easy to test new features that are part of larger workflows, thanks to its [proxy mode](docs:server-configuration/proxy-mode). Impala can set up partial mocks covering the endpoints related to the new feature while forwarding the rest of the calls to their existing APIs.

### Using Mockoon for user research is a no-brainer

> {"type": "##quotation##", "citation": "If you are building a public API as part of your product, try using Mockoon not just to mock an API for internal development, but for UX research. It's a really low-effort way to make sure developers building in your ecosystem have a great time doing so.", "author": "Toby Urff", "authorRole": "CPO & Co-founder @ Impala", "pictureUrl": "external/impala/toby-urff.jpg"}

Impala has found that thanks to Mockoon's complete set of options, minimal learning curve, and easy-to-use interface, they can offer more complex mocking scenarios during user interviews without spending too much time setting up throwaway mocks. The result is thorough UX research by testing and validating more complex scenarios, accelerating feedback, and ensuring a high-quality release.
