---
title: Create your first API with Express (or mock it using Mockoon!)
excerpt: Learn how to create your first REST API and endpoints with the Node.js Express framework or mock it using Mockoon to accelerate your application development
meta:
  title: Create your first API with ExpressJS (or mock it using Mockoon!)
  description: Learn how to create your first REST API and endpoints with the Node.js Express framework or mock it using Mockoon to accelerate your application development
image: tutorial-express-api-mocking.png
imageAlt: ExpressJS logo side by side with Mockoon
imageWidth: 1200
imageHeight: 400
order: 200
---

In this tutorial, you will learn how to create a small REST API using the [Express library](https://expressjs.com/) for Node.js. Express is one of the most popular libraries for API creation. It is also available in some major Cloud functions providers like Firebase.

> Before continuing, you can learn more about REST APIs in general, how they work, their components, etc. in our [series of tutorials](/articles/api-guide-what-are-api/)

Creating an API using this library is easy, straightforward, and only requires the following basic steps.

## 1. Create a new NPM application

To create a simple API using Express, we first need to initialize a new NPM application.

To do so, first verify that Node.js and NPM are installed by running the following commands:

```sh-sessions
$ node -v

v16.14.0
```

```sh-sessions
$ npm -v

7.24.1
```

Go to [Node.js' website](https://nodejs.org/en/) to install Node.js and NPM if it is not already done.

After verifying that Node.js and NPM are installed, you can initialize a new NPM application by running the `npm init` command in a new folder. For this tutorial, you can safely ignore all the questions that NPM will ask and press Enter for each of them. You can also run `npm init --yes` to automatically answer all the questions with the default values.

```sh-sessions
$ npm init --yes
Wrote to ./new-app/package.json:

{
  "name": "new-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 2. Create a new Express server

Before coding our Express server, we first need to create a new javascript file. Let's name it `index.js` and put it next to our `package.json` file.

In this file, we need to load the Express library by using Node.js' `require()` function:

```js
const express = require('express');
```

It will allow us to instantiate the library and listen on a port on the current machine (your development computer or a server if the code is deployed).
To instantiate an instance of Express, we need to execute the function that was returned by the library and store the result in a variable. Then, we can listen to a specific port on the machine, here port 3000, using the Express instance (`app`) `listen()` method:

```js
const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Our app is listening for request on port 3000');
});
```

## 3. Add API routes

We are now ready to add API routes to our small server by using Express methods that match the HTTP methods or verbs (`GET`, `PUT`, `POST`, etc.). Depending on the route you want to create, `GET /users`, `POST /invoices`, etc. you can use the corresponding method with the path as a parameter:

```js
const express = require('express');
const app = express();

// new API route: GET /users, returning a list of users
app.get('/users', (request, response) => {
  response.json([
    { id: 546, username: 'John' },
    { id: 894, username: 'Mary' },
    { id: 326, username: 'Jane' }
  ]);
});

// DELETE user
app.delete('/users', (request, response) => {
  response.json({ result: 'success' });
});

app.listen(3000, () => {});
```

Of course, this code is quite basic, and the two routes we created should probably load the list of users and delete users from a database before returning a result. But this is out of the scope of this small tutorial.

## 4. Call your API

Your API is now available on http://localhost:3000. You can do a test call to the following API endpoints `GET /users` and `DELETE /users` using your favorite tool (here Insomnia) and see the returned response:

![Get users call response preview{993x408}](/images/tutorials/express-api-mocking/api-get-users-call.png)

![Delete users call response preview{993x408}](/images/tutorials/express-api-mocking/api-delete-users-call.png)

## Speed up development with API mocking

Working with an API can be challenging. It could be unavailable for various reasons: the whole API is under development, some routes are missing, the documentation is outdated, the access is restricted to the production environment or behind a firewall, etc.

Instead of waiting for the API to be ready to be able to consume it, you could mock it using an API mocking tool like Mockoon.

API mocking is a technique that consists in imitating an unavailable API by simulating the endpoints and their responses. With this technique, you can have a running mock in no time and start calling it right away from your front-end or back-end application.

Mocking an API with Mockoon is easy and requires only some small steps to start working.

> To learn more about setting up Mockoon and creating your first fake API in less than 5 minutes, head over to our [getting start tutorial](/tutorials/getting-started/)

![#sub#API mocking with Mockoon{1430x748}](/images/tutorials/api-mocking-demo.gif)
