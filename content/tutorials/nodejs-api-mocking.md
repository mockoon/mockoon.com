---
title: Easily call a mock API from a Node.js application
excerpt: Learn how to mock a third party API with Mockoon when working on your Node.js backend application
meta:
  title: Easily call a mock API from a Node.js application
  description: Learn how to mock a third party JSON REST API with Mockoon when working on your Node.js backend application. Be ready to work in no time.
image: tutorial-nodejs-mocking.png
imageAlt: Mockoon and Node.js logos side by side
order: 90
---


Not only frontend developers need a way to mock APIs. Backend developers building APIs with Node.js may need to mock a third-party API like Stripe for handling payment, SendGrid for emailing, or GitHub for development-related tasks. Did you know that it is as easy to mock a third-party API when working on your backend application as for your frontend or mobile application?

## Step 1. Create and run a new mock API in Mockoon

The first step is to create a new mock API in Mockoon or use one you already have. 

> To learn more about how to set up your first mock API with Mockoon, head over to the [Getting started tutorial](tutorials:getting-started).

You can then configure it by adding as many routes and responses as you need. You can also give your mocks a more realistic behavior by using the [templating system](docs:templating/overview) or [adding some rules](docs:route-responses/dynamic-rules).

Then start your API by clicking on the green "play" icon.

![start a mock api](/images/tutorials/nodejs-mocking/start-mock-api.gif)

## Step 2. Replace your API URL with Mockoon's URL in your Node.js application 

Now, you need a way to tell your Node.js application to call your mock API instead of the original one. 
Your setup may vary here, but let's see a simple JS example of an external API endpoint called with [node-fetch](https://www.npmjs.com/package/node-fetch), here GitHub API:

```js
// replace original GitHub API URL by your local mock
// const githubAPI = 'https://api.github.com/';
const githubAPI = 'https://localhost:3000/';

fetch(githubAPI + 'users/username', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
})
.then(res => res.json())
.then(json => console.log(json));
```

While this example requires a modification of your code, you may have a different setup that allows you to avoid touching the code. 

One common solution is to use environment variables and the [dotenv package](https://www.npmjs.com/package/dotenv) to override them locally.
Then, you would be able to modify the API URL in your `.env` file. 

```bash
# replace original GitHub API URL by your local mock
# GITHUB_API=https://api.github.com/
GITHUB_API=https://localhost:3000/
```

And your JS file would look like this, using an environment variable:
```js
fetch(process.env.GITHUB_API + 'users/username', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
})
.then(res => res.json())
.then(json => console.log(json));
```

With this kind of setup, you will be able to locally switch from the original API you are using to a locally running mock server. It's also a good practice to store configuration like API URLs in environment variables. 

## Optional step 3. Use the proxy mode to partially mock the third-party API

You may also want to keep using the third-party API while mocking only a part of it. It is especially useful when testing API failures (500, 503, 504, etc) or quickly prototype a new feature. 
This is also possible with Mockoon by enabling the [proxy mode](docs:proxy-mode):

![enable proxy mode](/images/tutorials/nodejs-mocking/enable-proxy-mode.gif)

> To learn more about the proxy mode and how to use it, head over to the tutorial on [Partial API mocking](tutorials:partial-mocking-proxy).

