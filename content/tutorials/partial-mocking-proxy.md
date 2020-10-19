---
title: Create a partial mock API with Mockoon's proxy mode
excerpt: Learn how to create partial mocks of existing APIs with Mockoon's proxy mode in three easy steps
meta:
  title: Create a partial mock API with Mockoon's proxy mode
  description: Learn how to create partial mocks of existing APIs with Mockoon's proxy mode in three easy steps
image: tutorial-partial-mocking-proxy.png
imageAlt: Mockoon logo between a computer and a server icons
order: 20
---

# Create a partial mock API with Mockoon's proxy mode

---

During the development of an application, you may use an API that is still under development. Rather than waiting for new API endpoints to be added and rely on your memory or documentation to continue your application development, you could use Mockoon to create a partial mock API. The idea is simple. Mockoon would serve the API endpoints you define while forwarding anything else to the URL of your choice. Let's dive through this with a simple example.

## Step 1. Create a new API and enable the proxy mode

The first step is to create a new API in Mockoon or use one you already have. 

> To learn more about how to set up your first mock API with Mockoon, head over to the [Getting started tutorial](tutorials:getting-started).

As soon as you have your new mock API, you are ready to enable the [proxy mode](docs:proxy-mode) and forward all the calls to another URL. For this tutorial, we will be using the Star Wars API available at `https://swapi.dev/api/`. Head over to the environment settings by clicking on the "cog" icon at the top right of the window. Then, enable the proxy mode and add the Star Wars API URL to which Mockoon will forward the requests:

![Recording of enabling proxy mode](/images/tutorials/proxy-mode/enable-proxy-mode.gif)

## Step 2. Add the missing endpoints

After creating your API, enabling the proxy mode, and adding the correct target URL, you need to add the missing API endpoints. 
The Star Wars API does not have any character with an ID above 83, and we want to add a missing one with id number 90. As is, calling `GET /people/90` would return a 404. So, we will be adding the following body to a new `GET /people/90` route:

```json
{
  "name": "Mock Oon",
  "height": "60",
  "mass": "25",
  "hair_color": "grey",
  "skin_color": "grey",
  "eye_color": "black",
  "birth_year": "2017",
  "gender": "male",
  "homeworld": "http://swapi.dev/api/planets/41/",
  "films": [
    "http://swapi.dev/api/films/4/"
  ],
  "species": [
    "http://swapi.dev/api/species/19/"
  ],
  "vehicles": [],
  "starships": [],
  "created": "2014-12-20T10:08:33.777000Z",
  "edited": "2014-12-20T21:17:50.417000Z",
  "url": "http://swapi.dev/api/people/90/"
}
```

To configure this missing endpoint, click on the blue "plus" button at the top of the endpoints list. Then, set the path to `/people/90` and copy-paste the JSON body above. 

![Recording of adding a new endpoint](/images/tutorials/proxy-mode/add-new-endpoint.gif)

## Step 3. Run the API and make test calls

You are ready to use your partial mock. Start the API by clicking on the green "play" icon at the top of the window. 

You can now make a call to an existing endpoint of the Star Wars API, like `/planets/1`, and get the expected result from the Star Wars API, forwarded by Mockoon: 

![Screenshot of the result call](/images/tutorials/proxy-mode/result-call-existing-endpoint.png)

You can also call your custom endpoint `GET /people/90` and see that Mockoon intercepted your call and returned the body you defined in your new route. 

![Screenshot of the result call](/images/tutorials/proxy-mode/result-call-endpoint.png)

## Step 4. Check the environment logs

Finally, you can check the different calls that have been made to Mockoon by going to the [environment logs](docs:requests-logging). You will see that the forwarded calls have a blue "shield" icon next to them, while the requests caught by Mockoon's routes have a green "tick" icon. 
To open the requests logs, click on the "clock" icon in the upper right corner of the screen:

![Recording of checking the logs](/images/tutorials/proxy-mode/verify-call-logs.gif)

You are now ready to unleash your creativity and create more awesome partial mocks!
