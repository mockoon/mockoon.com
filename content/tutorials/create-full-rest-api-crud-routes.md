---
title: Create full mock REST APIs in seconds using Mockoon's CRUD routes
excerpt: Learn how to use Mockoon's CRUD routes to create a full mock REST API and manipulate resources with GET, POST, PUT, PATCH, and DELETE requests.
meta:
  title: Create full mock REST APIs in seconds using Mockoon's CRUD routes
  description: Learn how to use Mockoon's CRUD routes to create a full mock REST API and manipulate resources with GET, POST, PUT, PATCH, and DELETE requests.
image: create-full-rest-api-crud-routes.png
imageAlt: API endpoints connecting to mockoon logo
imageWidth: 1200
imageHeight: 400
order: 56
---

Where Mockoon routes are independent and stateless, CRUD routes can generate multiple endpoints to perform CRUD operations (Create, Read, Update, Delete) on [data buckets](docs:data-buckets/overview).
Let's see how to create a full REST API in seconds using Mockoon's CRUD routes.

## 1. Create a new CRUD route

The first step is to create a new automated CRUD route. To create a CRUD route, click on the "CRUD route" entry in the add route menu:

![Add a new CRUD route](/images/tutorials/create-full-rest-api-crud-routes/add-crud-route.png)

Then, set its path, usually a [resource name](/articles/api-guide-rest-api-components/#resource-url-request):

![Set the CRUD route path](/images/tutorials/create-full-rest-api-crud-routes/set-crud-route-path.png)

## 2. Create and link a data bucket to the CRUD route

You may have noticed that the CRUD route is not linked to a data bucket yet, hence the "Select a data bucket for CRUD operations" message in the route response:

![no databucket linked message](/images/tutorials/create-full-rest-api-crud-routes/no-databucket-linked-message.png)

A [data bucket](docs:data-buckets/overview) is a **key-value store** where you can define some string content that you can reuse in multiple route responses.

They are stored at the environment level and generated when the server starts or sometimes after the first call.
A data bucket content persists between mock API calls. So, they are the perfect way to create JSON "databases" to be reused in your routes.

> 📘 To learn more about data buckets, head over to our [data buckets documentation](docs:data-buckets/overview) or [tutorial](/tutorials/use-persisting-data-buckets/).

Let's create one and link it to the route.

### Create a new data bucket

To create a new data bucket, open the **Data** options by clicking on the tab at the top of the window:

![Open data bucket view](/images/tutorials/create-full-rest-api-crud-routes/open-data-view.png)

Add a new data bucket by clicking on the "plus" button and personalize your data bucket name and content on the right part of the screen. Here, we named it "Users" and added some JSON content with templating to generate three fake users at runtime:

![Add a data bucket and personalize it with some content](/images/tutorials/create-full-rest-api-crud-routes/add-data-bucket-name-content.png)

Here is the JSON content we used:

```json
[
  {{#repeat 3}}
    {
      "id": {{add @index 1}},
      "name": "{{faker 'person.firstName'}} {{faker 'person.lastName'}}",
      "email": "{{faker 'internet.email'}}"
    }
    {{#unless @last}},{{/unless}}
  {{/repeat}}
]
```

### Link the data bucket to the CRUD route

You can now link the data bucket to the CRUD route we created previously. To link the data bucket, select your data bucket in the dropdown:

![Select the data bucket in the crud route dropdown](/images/tutorials/create-full-rest-api-crud-routes/select-data-bucket-crud-route.png)

## 3. Perform CRUD operations

Now that the data bucket is linked to the CRUD route, you can perform CRUD operations on it.

When starting the mock API, Mockoon will automatically generate a series of routes for each [CRUD operation](docs:api-endpoints/crud-routes#list-of-routes-and-operations) on the data bucket. Some examples:

- `GET /users` to list all users of our bucket.
- `GET /users/:id` to get the user with a specific ID.
- `POST /users` to add a new user to the data bucket array.
- `PUT /users/:id` to update the user with a specific ID.
- `DELETE /users/:id` to delete the user with a specific ID.

> 📘 More routes are created by CRUD endpoints, and many options are available: sorting, pagination, etc. Head over to our [CRUD routes documentation](docs:api-endpoints/crud-routes) for more information.

### List all users

To list all users, you can perform a `GET` request on the `/users` route using your favorite tool (Postman, Insomnia, curl, etc.):

```sh-sessions
$ curl http://localhost:3000/users
```

```json
[
  { "id": 1, "name": "Gudrun Rempel", "email": "Ignacio_Glover4@gmail.com" },
  { "id": 2, "name": "Roberta Conroy", "email": "Adriana.Treutel@gmail.com" },
  { "id": 3, "name": "Tia Armstrong", "email": "Polly5@hotmail.com" }
]
```

### Get a single user

To get the first user, you can perform a `GET` request on the `/users/1` route:

```sh-sessions
$ curl http://localhost:3000/users/1
```

```json
{
  "id": 1,
  "name": "Gudrun Rempel",
  "email": "Ignacio_Glover4@gmail.com"
}
```

### Add a new user

To add a new user with id 4, you can perform a `POST` request on the `/users` route with the following payload:

```sh-sessions
$ curl -X POST http://localhost:3000/users -H 'Content-Type: application/json' -d '{"id": 4, "name": "John Doe", "email": "john.doe@example.com"}'
```

```json
{ "id": 4, "name": "John Doe", "email": "john.doe@example.com" }
```

### Replace a user

To Replace the first user, you can perform a `PUT` request on the `/users/1` route with the following payload:

```sh-sessions
$ curl -X PUT http://localhost:3000/users/1 -H 'Content-Type: application/json' -d '{"id": 1, "name": "Mock Oon", "email": "mock.oon@example.com"}'
```

```json
{ "id": 1, "name": "Mock Oon" }
```

### Delete a user

To delete the second user, you can perform a `DELETE` request on the `/users/2` route:

```sh-sessions
$ curl -X DELETE http://localhost:3000/users/2
```

### List all users again

Finally, you can list the users again to see all the changes we made:

```sh-sessions
$ curl http://localhost:3000/users
```

```json
[
  { "id": 1, "name": "Mock Oon", "email": "mock.oon@example.com" },
  { "id": 3, "name": "Tia Armstrong", "email": "Polly5@hotmail.com" },
  { "id": 4, "name": "John Doe", "email": "john.doe@example.com" }
]
```

## Customizing the "id" property

By default, CRUD endpoints will use the `id` property to identify objects in an array in all the routes manipulating a single resource (e.g. GET `/resource/:id`). However, you can change this property to anything you want, like `uuid`, `custom_id`, etc:

![Customize the CRUD id property{1264x176}](/images/tutorials/create-full-rest-api-crud-routes/customize-crud-id-property-key.png)

## Data persistence

As you can see, the data bucket content is generated once when the server starts, and its state persists between calls. You can reset the bucket to its initial state by restarting your mock API.

> ⚠️ The data bucket generated content is not persisted on disk to make testing multiple scenarios easier.
