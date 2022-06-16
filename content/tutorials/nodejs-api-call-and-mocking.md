---
title: Easily call a mock REST API from a Node.js application
excerpt: Learn how to call a third-party REST API  and to mock it with Mockoon when working on your Node.js backend application
meta:
  title: Easily call a mock REST API from a Node.js application
  description: Learn how to call a third-party REST API  and to mock it with Mockoon when working on your Node.js backend application
image: tutorial-nodejs-api-call.png
imageAlt: Mockoon and Node.js logos side by side
imageWidth: 1200
imageHeight: 400
order: 90
---

In this guide, we will learn how to call a REST API from a Node.js application. Calling REST API is not the privilege of front-end developers! There are many reasons you may want to connect your back-end to a REST API: call to another internal API, user authentication, fetching data from providers, sending analytics data, etc.

If you already have an existing API that you want to use, you can skip the first step, in which we create a fake REST API using Mockoon.

## 1. Create a mock API endpoint with Mockoon

You may already have access to the internal or third-party API you want to call, but this is not always the case. The API may be under development or require account creation, and you may want to start working with it as soon as possible. For this, the easiest way is to create a mock API using a tool like Mockoon. (Read more about the [benefits of API mocking](/use-cases/)).

> To learn more about how to set up your first mock API with Mockoon, head over to the [Getting started tutorial](tutorials:getting-started).

For the rest of the tutorial, we will simulate a call to the GitHub API by creating a fake [GET /users/:username endpoint](https://docs.github.com/en/rest/reference/users#get-a-user).

In Mockoon, create a `GET /users/:username` API endpoint that returns a payload containing a fake user object:

![create a mock API endpoint{1347x725}](/images/tutorials/nodejs-api-call/github-users-mock-endpoint.png)

You can use the following JSON (taken from GitHub's documentation) as the body returned by the endpoint:

```json
{
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "twitter_username": "monatheoctocat",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}
```

Note that your fake mock server will be available at the following URL: `http://localhost:3000`. It is the URL we will need to use in our Node.js application.

You can further configure your mock API by adding as many routes and responses as you need. You can also give your mocks a more realistic behavior by using the [templating system](docs:templating/overview) or [adding rules](docs:route-responses/dynamic-rules).

## 2. Start your mock API server

You can now start your API by clicking on the green "play" icon:

![start a mock api{834x271}](/images/tutorials/nodejs-api-call/start-mock-api.png)

## 3. Call your mock API server

After starting your Mockoon's API, you are ready to call the endpoint in your Node.js application.

Your setup may vary here, but let's see a simple example of the GET API call with the [node-fetch](https://www.npmjs.com/package/node-fetch) package available on NPM:

```js
// replace original GitHub API URL by your local mock
// const githubAPI = 'https://api.github.com/';
const githubAPI = 'https://localhost:3000/';

fetch(githubAPI + 'users/octocat', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' }
})
  .then((res) => res.json())
  .then((json) => {
    // we received our user object!
    console.log(json);
  });
```

As you can see, this example requires a modification of your code to call the mock API instead of the GitHub API, and you may have a different setup that allows you to avoid touching the code.

One common solution is to use environment variables and the [dotenv package](https://www.npmjs.com/package/dotenv) to override them locally.
Then, you would be able to modify the API URL in your `.env` file rather than in your code.

```bash
# replace original GitHub API URL by your local mock
# GITHUB_API=https://api.github.com/
GITHUB_API=https://localhost:3000/
```

And your JS file would look like this, using an environment variable:

```js
fetch(process.env.GITHUB_API + 'users/octocat', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' }
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

With this kind of setup, you will be able to locally switch from the original API you are using to a locally running mock API server. It's also a good practice to store configurations like API URLs in environment variables or configuration files.

## 4. (optional) Use the proxy mode to partially mock GitHub's API

You may also want to keep using the third-party API while mocking only a part of it. It's useful when testing API failures (500, 503, 504, etc.) or quickly prototyping a new feature.
It is also possible with Mockoon by enabling the [proxy mode](docs:proxy-mode):

![enable proxy mode{1052x358}](/images/tutorials/nodejs-api-call/enable-proxy-mode.gif)

> To learn more about the proxy mode and how to use it, head over to the tutorial on [Partial API mocking](tutorials:partial-mocking-proxy).
