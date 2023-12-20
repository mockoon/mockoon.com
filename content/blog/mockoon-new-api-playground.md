---
title: Mockoon new API playground
excerpt: 'Discover Mockoon new API playground, a ready-to-use mock API for all your prototyping needs.'
date: '2023-12-20'
image: mockoon-api-playground.png
imageAlt: mockoon logo with application screenshot
imageWidth: 1200
imageHeight: 400
meta:
  title: Mockoon new API playground
  description: 'Discover Mockoon new API playground, a ready-to-use mock API for all your prototyping needs: fake JSON data, JSON placeholders, realistic CRUD API mock, etc.'
---

🥳 We are happy to announce the release of a new tool: the [API playground](/playground/).

It is a **free and ready-to-use mock API** offering multiple CRUD endpoints with fake data. The perfect tool to quickly prototype your frontend applications, test your API calls, or learn about APIs.

## 🔎 How to use the API playground?

The API playground is available at [`https://playground.mockoon.com`](https://playground.mockoon.com) and offers different resources containing fake data: [`/contacts`](https://playground.mockoon.com/contacts), [`/movies`](https://playground.mockoon.com/movies), [`/photos`](https://playground.mockoon.com/photos), [`/posts`](https://playground.mockoon.com/posts), [`/todos`](https://playground.mockoon.com/todos), [`/users`](https://playground.mockoon.com/users). They work like any other API with various endpoints and CRUD operations, like GET, POST, PUT, PATCH and DELETE.

Even better, all actions like updates or deletes are **persisted** (until the next reset 😉)! Making it a great tool to test your frontend applications in a more realistic environment.

> ➡️ Head over to the [API playground documentation](https://mockoon.com/playground/) to learn more!

## ⚙️ How we built the API playground

All the fake data were generated using Faker.js and our [templating system](/docs/latest/templating/overview/). We picked some from our list of [templates 📃](/templates/) and created some new ones using our [AI assistant 🤖](/ai-powered-api-mocking/).

We then created a Mockoon project with all the [CRUD endpoints](/docs/latest/api-endpoints/crud-routes/). CRUD endpoints are fully automated and create multiple routes at runtime to let you manipulate a [data bucket](/docs/latest/data-buckets/overview/), a sort of basic JSON database.

![Mockoon CRUD endpoints](/images/blog/mockoon-new-api-playground/creating-crud-endpoints-mockoon-desktop.png)

We saved the project data file in a [new repository](https://github.com/mockoon/playground) and created a **Dockerfile** using Mockoon CLI.

Here is the command we used: `mockoon-cli dockerize -d ./dist/playground-mock.json -o ./dist/Dockerfile -p 8080`.
The CLI `dockerize` command will generate a Dockerfile with all the necessary instructions to run your mock (`COPY`, `EXPOSE`, etc.).

Finally, we **deployed** the mock API on Google Cloud Run, using Cloud Build. Setting up Cloud Build was a breeze, and we were able to deploy the API playground in a few minutes.
After authenticating Cloud Build with GitHub, it will listen for pushes on a specific branch of the repository (here `main`) and then build and deploy the Docker image to Cloud Run based on the provided Dockerfile.

This way, we can easily update the playground API by simply pushing a new version of the repository.

We also use Cloudflare rate limiting to prevent abuse and ensure the API playground is always available.

## 🤝 Contribute to the API playground

The API playground is open-source and available on [GitHub](https://github.com/mockoon/playground). Feel free to contribute by adding new resource endpoints or reporting any issues you may encounter.

Happy mocking! 🚀
