---
title: Call an API from your Angular application
excerpt: Learn how to call a REST API from your Angular application service and mock it using Mockoon
meta:
  title: Call an API from your Angular application
  description: Learn how to call a REST API from your Angular application service and mock it using Mockoon
image: tutorial-angular-mocking.png
imageAlt: Mockoon and Angular logos side by side
order: 100
---

In this guide, we will learn how to call a REST API from an Angular application. If you already have an existing API that you want to use, you can skip the first step, in which we create a mock REST API using Mockoon.

## 1. Create a mock API endpoint with Mockoon

During the development of your Angular application, you may need to mock an API that is not ready yet, or only partially available (see [partial mocking with the proxy mode](docs:proxy-mode)). For this, the easiest way is to create a mock API using a tool like Mockoon.

> To learn more about how to set up your first mock API with Mockoon, head over to the [Getting started tutorial](tutorials:getting-started).

For the rest of the tutorial, we will use an array of fake blog posts. In Mockoon, create a `GET /posts` API endpoint that returns an array of blog posts:

![create a mock API endpoint](/images/tutorials/angular-api-call/blog-posts-mock-endpoint.png)

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

Note that your mock API will be available at the following URL: `http://localhost:3000`. This is the URL we will need to use in our Angular service.

## 2. Make a call to the API endpoint in your Angular service

After creating a mock API endpoint in Mockoon, you can now call it from your Angular service.
To do so, we need to inject and use Angular's `HttpClient`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}
}
```

We then need to add a `getPosts` method that will return an Observable containing our list of posts:

```typescript
getPosts(): Observable<{ id: number; title: string }> {
  return this.http.get('http://localhost:3000/posts');
}
```

Below is our service after putting the two pieces of code together:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<{ id: number; title: string }> {
    return this.http.get('http://localhost:3000/posts');
  }
}
```

## 3. Subscribe to the Observable in your component

In any component where we need to display the list of posts, we can now inject our `PostsService` and call our `getPosts` method:

```typescript
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts-service.ts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    // subscribe to the Observable to make the HTTP call
    this.postsService.getPosts().subscribe((posts) => {
      // we received our posts!
      console.log(posts);
    });
  }
}
```

## Use Angular's environment files

To avoid changing the server URL directly in the Angular service, you can put this URL in Angular's [environment files](https://angular.io/guide/build).
You would only need to change your `environment.dev.ts` and keep your other environment files and service clean.

```typescript
export const environment = {
  production: false,
  // Your Mockoon's API URL
  apiURL: 'http://localhost:3000/'
};
```

This would require the use of `environment.apiUrl` in your service(s):

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<{ id: number; title: string }> {
    return this.http.get(`${environment.apiUrl}/posts`);
  }
}
```

## Using Angular's proxy

If you are using Angular CLI's [proxy feature](https://angular.io/guide/build#proxying-to-a-backend-server), you can also edit the `proxy.conf.json` file and set the `target` to point to your Mockoon's API:

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

Do not forget to add the `--proxy-config` flag followed by the path to the `proxy.conf.json` file to your `ng serve` command, or to add the `proxyConfig` option to the `serve` target in your `angular.json` file:

```json
...
"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "your-application-name:build",
      "proxyConfig": "src/proxy.conf.json"
    },
...
```
