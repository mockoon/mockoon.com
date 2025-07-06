---
title: Call a mock REST API from your React application
excerpt: Learn how to call a REST API from your React application service and mock it using Mockoon API mocking tools
meta:
  title: Call a mock API from your React application
  description: Learn how to call a REST API from your React application service and mock it using Mockoon API mocking tools
image: tutorial-react-api-call.png
imageAlt: Mockoon and React logos side by side
imageWidth: 1200
imageHeight: 400
order: 93
---

This guide will teach you how to call any REST API from a React application created with the [Create React App](https://react.dev/learn/start-a-new-react-project#create-react-app) package. If you already have an existing API that you want to call from your application, you can skip the first step, in which we will create a fake REST API using Mockoon.

## 1. Create a mock API endpoint with Mockoon

When working on your React application, you may need to mock an API that is still under development, or that is only [partially available](docs:server-configuration/proxy-mode). The easiest way to start working without having to wait is to create a mock API using a tool like Mockoon. (Read more about the [benefits of API mocking](/use-cases/)).

> To learn more about how to set up your first mock API with Mockoon, head over to the [Getting started tutorial](/tutorials/getting-started/).

For the rest of the tutorial, we will use an array of fake blog posts with a single title. In Mockoon, create a `GET /posts` API endpoint that returns an array of blog posts:

![create a mock API endpoint{1261x704}](/images/tutorials/blog-posts-mock-endpoint.png)

You can use the following JSON as the body returned by the endpoint:

```json
[
  {
    "id": 1,
    "title": "My first blog post"
  },
  {
    "id": 2,
    "title": "My second blog post"
  }
]
```

Note that your fake mock server will be available at the following URL: `http://localhost:3000`. It is the URL we will need to use in our React component.

## 2. Make a call to the API endpoint in your React component

After creating a mock REST API endpoint in Mockoon, you can now call it from your React component.
To do so, we need to use an AJAX library or the browser's built-in [`window.fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) function. We will be using the `fetch` function as it is available in most browsers.

You will find below the minimal code needed to call our API endpoint with the `fetch` function:

```javascript
fetch('http://localhost:3002/posts')
  .then((res) => res.json())
  .then((result) => {
    // we received our list of posts
    console.log(result);
  });
```

We need to integrate this code into a React component. We will reuse the `App` component which was automatically created by Create React App. However, we need to wrap this piece of code in a `useEffect` function in order to refresh the UI when our blog posts are fetched:

```javascript
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/posts')
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return <ul>{/* TODO */}</ul>;
}

export default App;
```

Note that we also stored the call result (our blog posts) in a state called `posts`.

## 3. Use the `posts` state variable in your component JSX

We can now render our blog posts on the page as `<li>` using a simple `map` loop:

```javascript
return (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
```

Putting all this code together, we get a fully functional component loading asynchronous mock data:

```javascript
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/posts')
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
```
