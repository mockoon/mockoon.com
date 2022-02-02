---
title: Generate dynamic mock data with Mockoon templating system
excerpt: Learn how to generate dynamic JSON, CSV or XML realistic mock data with Mockoon powerful templating system and helpers
meta:
  title: Generate dynamic mock data with Mockoon templating system
  description: Learn how to generate dynamic JSON, CSV or XML realistic mock data with Mockoon powerful templating system and helpers
image: generate-mock-json-data.png
imageAlt: Mockoon logo side by side with code
imageWidth: 1200
imageHeight: 400
order: 50
---

Mocking an API can save you time. By faking the backend responses early, you don't have to worry about whether an endpoint is ready or not. You are up and running in no time and can start implementing your application.
However, your mock should still be realistic. "Lorem ipsum" content is often not enough to surface layout problems, container overflowed by text, etc.

When mocking using Mockoon, you can easily customize your endpoints to make them look like real ones and even behave realistically, thanks to the dynamic templating system.

Let's dig into this templating system and see how it allows you to generate random data of any type (JSON, CSV, XML, HTML, etc.) and make it behaves dynamically.

## Generate random fake data

Nowadays, most of the developers work with JSON. Generating a massive amount of fake JSON data with Mockoon is a breeze thanks to the powerful templating system based on Handlebars syntax. But it's also perfect to generate any type of content: CSV, XML, HTML, you name it!

Mockoon also offers multiple helpers and embarks the Faker.js library, which can generate localized random data as various as: cities, addresses, first names, phone numbers, UUID, etc.

> This tutorial will show only some examples of content generation. If you want to learn more about Mockoon templating system and all the available helpers, head over to the [official templating documentation](docs:templating/overview).

Let's see what Mockoon has to offer.

> You can find on our repository all the following examples ready to use! <a href="https://github.com/mockoon/mock-samples/blob/main/samples/generate-mock-data.json" className="btn btn-primary-desat-soft btn-xs"><i className='icon-download'></i>&nbsp;Download</a>
>
> To open the file, please [follow the instructions](https://github.com/mockoon/mock-samples#how-to-open-the-samples-in-mockoon).

## Complete JSON example: posts list

Let's say you are working on the next great social network, building the front-end with your favorite framework while the backend team works hard to implements more and more API endpoints.
You switch on your favorite mock server tool (yes, Mockoon), and start wondering how you could return a huge amount of realistic posts on a `GET /posts` endpoint. Here is where the helpers available in Mockoon comes into play. By using a combination of `repeat`, `image.avatar`, `lorem.sentences`, etc. you can quickly get a massive amount of random data. Combined with the latency option, you can even simulate a slow server and check how your application behaves under stress.

To use the templating system, you only have to use the response body editor and start adding your content. Remember to use the double curly braces to delimit your helpers `{{ helperName }}`
Let's have a look at what such a body could look like:

```json
[
  {{#repeat (queryParam 'total' '5')}}
  {
    "id": {{@index}},
    "title": "{{faker 'lorem.sentence'}}",
    "content": "{{faker 'lorem.sentences'}}",
    "media": "{{faker 'image.nature'}}",
    "author": {
      "name": "{{faker 'name.firstName'}} {{faker 'name.firstName'}}",
      "avatar": "{{faker 'image.avatar'}}"
    },
    "comments": [
      {{#repeat (faker 'random.number' 5)}}
      {
        "id": "{{faker 'random.uuid'}}",
        "content": "{{faker 'lorem.sentence'}}",
        "author": {
          "name": "{{faker 'name.firstName'}} {{faker 'name.firstName'}}",
          "avatar": "{{faker 'image.avatar'}}"
        }
      }
      {{/repeat}}
    ],
    "likes": {{faker 'random.number' 100}},
    "shares": {{faker 'random.number' 100}},
    "location": {
      "lat": {{faker 'address.latitude'}},
      "long": {{faker 'address.longitude'}}
    },
    "archived": {{faker 'random.boolean'}}
  }
  {{/repeat}}
]
```

After a call to Mockoon, this would be the kind of body generated from this template:

```json
[
  {
    "id": 0,
    "title": "Amet sint maxime repellendus aspernatur et eos et dolorum voluptatem.",
    "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    "media": "http://placeimg.com/640/480/nature",
    "author": {
      "name": "Lexi Clifford",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/caseycavanagh/128.jpg"
    },
    "comments": [
      {
        "id": "a1b18846-9ef6-45ee-bab1-9e7135c8bca0",
        "content": "Dolor eum omnis neque placeat cumque animi eos ut.",
        "author": {
          "name": "Adrien Edgardo",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/loganjlambert/128.jpg"
        }
      }
    ],
    "likes": 80,
    "shares": 83,
    "location": {
      "lat": 49.2286,
...
```

This example makes an extensive usage of what Mockoon and Faker.js have to offer. First, it generates as many "posts" items as provided in the `total` query parameter (or default to 5) when calling `GET /your/endpoint?total=140`. It is especially useful when you want to request a specific number of items depending on the pagination or a "number per pages" user setting.
Second, you can see that multiple properties are defined, and random mock data is generated like avatar image URLs, names, coordinates, etc.

There are a lot of possibilities and combinations you can try. You can also make your template react to a lot of parameters from the entering request by using Mockoon's helpers. We've already seen `queryParam` above, but you will find many more in the [templating documentation](docs:templating/overview). They allow you to query the request information like `body`, `urlParam`, `header`, `method`, etc.

## Generate other types of fake data?

Mockoon does not limit you to JSON. The templating language based on Handlebars is compatible with any content type. It means that you can generate CSV, HTML, XML, etc.
You will find below some examples of what can you can achieve with the templating system.

### Generate geographical fake CSV data

Generating realistic mock CSV data is also very easy. You will see below that it involves the same syntax as for the JSON example:

```csv
city,state,address,latitude,longitude,timezone
{{#repeat 5000}}
{{faker 'address.city'}},{{faker 'address.stateAbbr'}},{{faker 'address.streetAddress'}},{{faker 'address.latitude'}},{{faker 'address.longitude'}},{{faker 'address.timeZone'}}
{{/repeat}}
```

After parsing, this template would result in the following body:

```csv
city,state,address,latitude,longitude,timezone
South Lew,MI,72031 Cindy Unions,89.9870,-16.3010,America/Santiago,
New Theron,OR,242 Mariano Creek,-43.9050,-76.3276,Asia/Novosibirsk,
Keshawnmouth,AR,29520 Breitenberg Drives,-13.4154,-134.3900,Pacific/Guam,
...
```

### Generate XML mock data

Generating an XML file with fake data would also be done in no time. You will find below an example of a products list:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PRODUCTS>
  {{# repeat 50}}
  <PRODUCT>
    <UUID>{{faker 'random.uuid'}}</UUID>
    <NAME>{{faker 'commerce.product'}}</NAME>
    <PRICE>{{faker 'commerce.price'}}</PRICE>
    <COLOR>{{faker 'commerce.color'}}</COLOR>
    <INVENTORY>{{faker 'random.number' 50}}</INVENTORY>
  </PRODUCT>
  {{/ repeat}}
</PRODUCTS>
```

After parsing, this template would result in the following body:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PRODUCTS>
  <PRODUCT>
    <UUID>26421e57-ca4a-4c20-a845-b5317d80beea</UUID>
    <NAME>Table</NAME>
    <PRICE>718.00</PRICE>
    <COLOR>olive</COLOR>
    <INVENTORY>12</INVENTORY>
...
```

You are now ready to generate massive amounts of data for your mock APIs. The only limit is your imagination!

## Generate dynamic templating depending on the request

We just saw some interesting use-cases but still quite simple. When working on your application, you may want to go a little bit further by making the template react to the request sent to Mockoon.
This is possible by using various helpers that you will find in the [templating documentation](docs:templating/overview): `body`, `queryParam`, `urlParam`, `cookie`, `header`, `hostname`, `ip`, `method`, etc.

They allow you to access the entering request's information. Combined with other helpers like `repeat`, `switch`, or `if`, you will be able to dynamically generate more complex content.

You will find below some examples:

### New user after a POST request

This first example tries to reproduce a call to a `POST /users` route, which would answer with the newly created object, a user. For this, we will reuse in the response the various parameters present in the request:

```json
{
  "id": "{{faker 'random.uuid'}}",
  "firstname": "{{body 'firstname'}}",
  "lastname": "{{body 'lastname'}}",
  "birthdate": "{{body 'birthdate'}}",
  "email": "{{body 'email'}}",
  "createdAt": "{{now}}"
}
```

After a call to this endpoint with the following body:

```http
POST /users
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "birthdate": "1956-10-10",
  "email": "john.doe@domain.com"
}
```

We would receive this kind of response content, containing the request information plus some new fields (`id` and `createdAt`):

```json
{
  "id": "6eeede77-107e-4d1a-abf3-feb2925c48f7",
  "firstname": "John",
  "lastname": "Doe",
  "birthdate": "1956-10-10",
  "email": "john.doe@domain.com",
  "createdAt": "2020-11-18T21:11:26.820+01:00"
}
```

Here, we mainly used the `body` helper, but we can imagine more complex examples.

### Variable content depending on multiple request parameters

Let's imagine an endpoint `GET /inventory/:type` returning either "products" or "materials" depending on the route parameter `type` and in various numbers depending on a query parameter named `total`. To achieve this, we can use a combination of `repeat` and `switch` helpers:

```json
[
  {{#repeat (queryParam 'total')}}
  {
    "id": "{{faker 'random.uuid'}}",
    {{# switch (urlParam 'type')}}
    {{# case 'products'}}
    "name": "{{faker 'commerce.product'}}",
    "price": "{{faker 'commerce.price'}} EUR"
    {{/ case}}
    {{# case 'materials'}}
    "name": "{{faker 'commerce.productMaterial'}}",
    "quantity": "{{faker 'random.number' 50}}"
    {{/ case}}
    {{/ switch}}
  }
  {{/repeat}}
]
```

When calling the endpoint with `/content/materials?total=2` we would receive the following array of materials with the properties `id`, `name`, and `quantity`:

```json
[
  {
    "id": "eca2e895-a100-4a86-b1be-ff76fc29068a",
    "name": "Granite",
    "quantity": "37"
  },
  {
    "id": "fcaceec9-23d9-4979-9905-c9455569bffc",
    "name": "Wooden",
    "quantity": "49"
  }
]
```

When calling the endpoint with `/content/products?total=2` we would receive the following array of products with the properties `id`, `name`, and `price`:

```json
[
  {
    "id": "c9d31bbd-3b55-4c53-8c3d-49a8af4fb6ba",
    "name": "Pants",
    "price": "485.00 EUR"
  },
  {
    "id": "cc147251-6dd5-4dd4-85da-251648eada9e",
    "name": "Bike",
    "price": "268.00 EUR"
  }
]
```

For more complex cases, you could also create multiple responses for the same route, with different bodies, and trigger them by defining some rules. To learn more about using multiple responses combined with rules, you can have a look at the related [documentation](docs:route-responses/dynamic-rules).

> Remember, you can find all this tutorial's examples ready to use on our repository! <a href="https://github.com/mockoon/mock-samples/blob/main/samples/generate-mock-data.json" className="btn btn-primary-desat-soft btn-xs"><i className='icon-download'></i>&nbsp;Download</a>
>
> To open the file, please [follow the instructions](https://github.com/mockoon/mock-samples#how-to-open-the-samples-in-mockoon).
