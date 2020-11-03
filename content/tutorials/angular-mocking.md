---
title: Create the best mock API for your Angular application
excerpt: Learn how to mock your API with Mockoon when working on an Angular application
meta:
  title: Create the best mock API for your Angular application
  description: Learn how to mock a REST API with Mockoon when working on an Angular application by using env files or a proxy
image: tutorial-angular-mocking.png
imageAlt: Mockoon and Angular logos side by side
order: 100
---

# Create the best mock API for your Angular application

---

During the development of your Angular application, you may need to mock an API that is not ready yet, or only partially available (see [partial mocking with the proxy mode](docs:proxy-mode)). Let's have a look at the different options you have:

## Adding fake data in the service

One of the first techniques is to return fake JSON data from your service by directly adding the JSON objects in the code and put your "real" code in a comment. However, this requires modification of your code, which you may commit by mistake: 

```js
public getPosts() {
  // return this.http.get('/api/posts');
  // /!\ Do not commit /!\
  return of([
    {
      id: 1,
      title: "Post 1"
    },
    {
      id: 2,
      title: "Post 2"
    }
  ]);

```

As quick as it is, it may not be the cleanest way to mock an API. Waiting for the application to reload every time you modify the fake JSON data may also be quite cumbersome. 

## Use an API mocking tool

Another solution is to set your backend URL to point to an API mocking tool like Mockoon. Depending on your application configuration, this URL may be in the environment file directly in your service. 
In the first case, you have to change the URL in your dev `environment.ts` file:

```js
export const environment = {
  production: false,
  // Your Mockoon's environment URL
  apiURL: 'http://localhost:3000/'
};
```

You can also run Mockoon's mock API on the same port than your regular backend. 

> To learn more about how to set up your first mock API with Mockoon, head over to the [Getting started tutorial](tutorials:getting-started).

### Using Angular proxy

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



