---
title: Call a mock API from your Ionic mobile application
excerpt: Learn how to call a REST API from your Ionic mobile application and mock it using Mockoon API mocking tools
meta:
  title: Call a mock API from your Ionic mobile application
  description: Learn how to call a REST API from your Ionic mobile application and mock it using Mockoon API mocking tools
image: tutorial-ionic-api-call.png
imageAlt: Mockoon and Ionic logos side by side
imageWidth: 1200
imageHeight: 400
order: 97
---

In this guide, we will learn how to call an API endpoint from an Ionic mobile application using the Angular framework. If you already have an existing API that you want to use, you can skip the first step, in which we create a fake REST API endpoint using Mockoon.

## 1. Create a mock API endpoint with Mockoon

During the development of your Ionic mobile application, you may need to mock an API that is not ready yet, or only partially available (see [partial mocking with the proxy mode](docs:proxy-mode)). For this, the easiest way is to create a mock API using a tool like Mockoon. (Read more about the [benefits of API mocking](/use-cases/)).

> To learn more about how to set up your first mock API with Mockoon, head over to the [Getting started tutorial](tutorials:getting-started).

For the rest of the tutorial, we will use an array of fake blog posts. In Mockoon, create a `GET /posts` API endpoint that returns an array of blog posts:

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

Note that your fake mock server will be available at the following URL: `http://localhost:3000`. This is the URL we will need to use in our Angular service.

## 2. Make a call to the API endpoint in your Angular service

After creating a mock API endpoint in Mockoon, you can now call it from your Ionic mobile application using an Angular service.
To do so, we need to create a new "posts" service using Ionic's following command:

```bash
$ ionic g service services/posts
> ng.cmd generate service services/posts --project=app
CREATE src/app/services/posts.service.spec.ts (352 bytes)
CREATE src/app/services/posts.service.ts (134 bytes)
[OK] Generated service!
```

Then we will need to inject and use Angular's `HttpClient` in our new service to be able to call our API:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}
}
```

We finally add a `getPosts` method that we will call from our component and returns an Observable containing our list of posts:

```typescript
getPosts(): Observable<{ id: number; title: string }[]> {
  return this.http.get('http://localhost:3000/posts');
}
```

Below is our service after putting all the pieces of code together:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<{ id: number; title: string }[]> {
    return this.http.get('http://localhost:3000/posts');
  }
}
```

## 3. Subscribe to the Observable in your component

Let's display our blog post titles in our "HomePage" component. We first need to inject our `PostsService` and then assign our Observable returned by the `getPosts` method so we can use it in the template:

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public posts$: Observable<{ id: number; title: string }[]>;
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    // assign the Observable returned by the `getPosts` method
    this.posts$ = this.postsService.getPosts();
  }
}
```

## 4. Display the titles as a list of items

We can now display our list of post titles using `ion_item` elements. We will reuse the `div#container` from the `home.page.html` file created by the `ionic start` command. We will use a simple `*ngFor` directive combined with the `| async` pipe to subscribe to our observable:

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Blank </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Blank</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <ion-item *ngFor="let post of posts$ | async">
      <ion-label> {{post.title}} </ion-label>
    </ion-item>
  </div>
</ion-content>
```

We can now see the result after running the `ionic serve` command:

![post titles list{302x641}](/images/tutorials/ionic-api-call/posts-list.png)
