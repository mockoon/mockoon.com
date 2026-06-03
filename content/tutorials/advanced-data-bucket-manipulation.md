---
title: Advanced data bucket manipulation with setData
excerpt: Learn how to build stateful mock APIs with Mockoon's setData helper using advanced API key rotation, usage tracking, login, and lockout scenarios.
meta:
  title: Advanced data bucket manipulation with setData
  description: Learn how to build stateful mock APIs with Mockoon's setData helper using advanced API key rotation, usage tracking, login, and lockout scenarios.
image: tutorial-advanced-data-bucket-manipulation.png
imageAlt: mockoon logo next to a data bucket icon
imageWidth: 1200
imageHeight: 400
tags:
  - mockoon
date: '2026-06-02'
mockApiFile: https://raw.githubusercontent.com/mockoon/mock-samples/refs/heads/main/tutorials/advanced-data-bucket-manipulation.json
---

Data buckets are often introduced as shared, persistent JSON stores for your routes. But they become much more powerful when you start updating them at runtime.

With the [`setData`](docs:templating/mockoon-helpers#setdata) helper, you can turn a static mock API into a **stateful system** that reacts to previous requests: rotate API keys, count usage, track failed logins, create sessions, or lock accounts.

In this tutorial, we will focus on advanced data bucket manipulation with `setData` and build two realistic scenarios:

- an **API key management** flow with rotation and usage tracking
- a **login flow** with failed attempts, session creation, and account locking

> 📘 If you are new to data buckets, start with our [persisting data buckets tutorial](/tutorials/use-persisting-data-buckets/) first.

## Why use `setData`?

The `setData` helper updates a data bucket while a request is being processed. This allows you to store state between calls and simulate systems that evolve over time.

It supports the following operations:

```handlebars
{{setData 'set' 'bucketNameOrId' 'path.to.property' 'newValue'}}
{{setData 'merge' 'bucketNameOrId' 'path.to.property' (object key='value')}}
{{setData 'merge' 'bucketNameOrId' 'path.to.property' (bodyRaw)}}
{{setData 'push' 'bucketNameOrId' 'path.to.array' 'newValue'}}
{{setData 'del' 'bucketNameOrId' 'path.to.property'}}
{{setData 'inc' 'bucketNameOrId' 'path.to.property' 2}}
{{setData 'dec' 'bucketNameOrId' 'path.to.property' 2}}
{{setData 'invert' 'bucketNameOrId' 'path.to.property'}}
```

In practice:

- use `set` for replacing a single scalar or object
- use `merge` for partial updates to an existing object
- use `push` for logs, sessions, or append-only lists
- use `del` to remove temporary values
- use `inc` and `dec` for counters, quotas, and retry tracking
- use `invert` to toggle flags such as `enabled`, `locked`, or `maintenanceMode`

## Where should you call `setData`?

You can use `setData` [**anywhere templating is supported**](docs:templating/overview#usages), but the most common place is directly in a route response body.

Because `setData` returns an empty string, you can place one or more calls at the top of a response body template and then return the JSON payload you want your client to receive.

Like all data bucket changes, the new state persists until you restart the mock server.

## Use case 1: API key rotation and usage tracking

This first example simulates an **API gateway** that can **rotate keys**, **update metadata**, **disable access**, and **count authorized calls**.

### Create the data bucket

Create a data bucket named `apiState` with the following content:

```json
{
  "currentKey": "sk_test_initial",
  "lastGeneratedKey": null,
  "enabled": true,
  "usageCount": 0,
  "revokedKeys": [],
  "auditLog": []
}
```

This bucket will hold the currently active key, some metadata, and an audit trail of administrative actions.

### Rotate the active API key

Create a route like `POST /admin/api-key/rotate` and use the following body:

```handlebars
{{setData 'set' 'apiState' 'lastGeneratedKey' (faker 'string.uuid')}}
{{setData 'push' 'apiState' 'revokedKeys' (dataRaw 'apiState' 'currentKey')}}
{{setData 'set' 'apiState' 'currentKey' (dataRaw 'apiState' 'lastGeneratedKey')}}
{{setData 'set' 'apiState' 'usageCount' 0}}
{{setData 'push' 'apiState' 'auditLog' (object event='rotate' source='admin-route')}}
{ "message": "API key rotated" }
```

This single route performs several mutations in sequence:

- it generates a new key and stores it in `lastGeneratedKey`.
- archives the previous key in `revokedKeys`.
- makes the new key the `currentKey`.
- resets the usage counter `usageCount` to zero.
- appends an event to the audit log.

After calling the route with `curl -X POST http://localhost:3000/admin/api-key/rotate`, you can check the live state of the bucket by clicking on the "Click to view current value" button below the data bucket editor:

![View the live bucket state](/images/tutorials/advanced-data-bucket-manipulation/live-bucket-state-button.png)

You should see the updated data:

![Live bucket state showing the new API key and audit log](/images/tutorials/advanced-data-bucket-manipulation/live-bucket-state.png)

### Count each authorized request

Now create a protected route like `GET /private/products` with **two responses**: a default `401 Unauthorized` for missing or invalid keys, and a `200` that increments the counter when the correct key is provided.

> 📘 If you are new to responses and rules, check out our [multiple responses tutorial](/tutorials/responses-and-rules/) first.

#### Default response — 401 Unauthorized

Set the first (default, with a blue flag) response to status code `401` with the following body:

```json
{
  "error": "Missing or invalid API key"
}
```

This response will be sent whenever no other rule matches, i.e. when the caller did not supply the right key.

#### Second response — 200 with a rule

Add a second response with status code `200`. In the **Rules** tab, add a rule to check that the `X-Api-Key` request header matches the current key stored in the bucket:

- **Source**: `Header`
- **Path**: `X-Api-Key`
- **Operator**: `Equals`
- **Value**: `{{data 'apiState' 'currentKey'}}`

The value uses a **custom templating rule**: the `data` helper reads `currentKey` from the bucket at request time and compares it to the incoming header. This means the rule automatically validates against the most recent key, even after a rotation.

Set the response body to:

```handlebars
{{setData 'inc' 'apiState' 'usageCount' 1}}
{{setData 'push' 'apiState' 'auditLog' (object event='access' source='private-products')}}
[ { "id": 1, "name": "Keyboard" }, { "id": 2, "name": "Mouse" } ]
```

The `setData` calls run before the response is returned, so the counter is already incremented by the time the client receives the product list.

After calling this route with the correct key `curl -H "X-Api-Key: <currentKey>" http://localhost:3000/private/products`, you can check the bucket state again to see the updated `usageCount` and new entry in the `auditLog`.

## Use case 2: Stateful login in 3 steps

This second example is a short, dependent workflow: each step changes the bucket state used by the next step.

### Create the data bucket

Create a data bucket named `loginState` with the following content:

```json
{
  "users": {
    "demoUser": {
      "email": "demo@acme.com",
      "password": "pa55word",
      "token": null,
      "failedAttempts": 0,
      "lastLoginAt": null
    }
  },
  "loginEvents": []
}
```

### Step 1. Validate credentials with response rules

Create a route like `POST /auth/login` with **two responses**:

- default response: `401 Unauthorized` (invalid credentials)
- second response: `200 OK` (credentials are valid)

Use this body for the default `401` response to keep track of failed attempts:

```handlebars
{{setData 'inc' 'loginState' 'users.demoUser.failedAttempts' 1}}
{{setData 'push' 'loginState' 'loginEvents' (object type='failed-login' user='demoUser')}}
{ "message": "Invalid credentials" }
```

Ensure the blue flag is on this response to make it the default one.

For the `200` response, add a rule that checks the request body password against the real password stored in the bucket:

- **Source**: `Body`
- **Path**: `password`
- **Operator**: `Equals`
- **Value**: `{{data 'loginState' 'users.demoUser.password'}}`

You can add the following body to the `200` response to generate a token and log a successful login:

```handlebars
{{setData 'set' 'loginState' 'users.demoUser.failedAttempts' 0}}
{{setData 'set' 'loginState' 'users.demoUser.token' (faker 'string.uuid')}}
{{setData 'set' 'loginState' 'users.demoUser.lastLoginAt' (faker 'date.recent')}}
{{setData 'push' 'loginState' 'loginEvents' (object type='login-success' user='demoUser')}}
{ "message": "Login successful", "token": "{{data 'loginState' 'users.demoUser.token'}}" }
```

Now call the endpoint with a wrong password:

```sh-sessions
$ curl -X POST http://localhost:3000/auth/login -H 'Content-Type: application/json' -d '{"password":"wrong"}'
```

Expected response:

```json
{ "message": "Invalid credentials" }
```

At this point, `users.demoUser.failedAttempts` should be `1`.

Then call with the correct password from your bucket (`pa55word` in this example):

```sh-sessions
$ curl -X POST http://localhost:3000/auth/login -H 'Content-Type: application/json' -d '{"password":"pa55word"}'
```

Expected result: the `200` response is selected by the rule, and a fresh token is generated, stored in `users.demoUser.token`, and returned in the response.

### Step 2. Use the session token to access a protected endpoint

Create a route like `GET /auth/me` with **two responses**:

- default response: `401 Unauthorized`
- second response: `200 OK` with a rule checking `Authorization` header

For the default `401` response, use this body:

```json
{
  "error": "Unauthorized"
}
```

For the `200` response, add this rule:

- **Source**: `Header`
- **Path**: `Authorization`
- **Operator**: `Equals`
- **Value**: `Bearer {{data 'loginState' 'users.demoUser.token'}}`

Use this response body for the `200` response:

```json
{
  "email": "{{data 'loginState' 'users.demoUser.email'}}",
  "lastLoginAt": "{{dataRaw 'loginState' 'users.demoUser.lastLoginAt'}}"
}
```

Now call the endpoint with the token returned by step 1:

```sh-sessions
$ curl http://localhost:3000/auth/me -H "Authorization: Bearer <token-from-step-1>"
```

Expected `200` response includes the `lastLoginAt` stored during step 1. If the token is missing or wrong, the default `401` response is returned.

## Tips for advanced stateful scenarios

When building larger stateful mocks with `setData`, keep these rules in mind:

- Keep each bucket focused on one domain such as `apiState`, `loginState`, or `billingState`.
- Use `merge` when you want partial updates and `set` when you want to fully replace a value.
- Reserve `push` for logs, histories, and append-only collections.
- Remove temporary values with `del` as soon as they are no longer needed.
- Restart the mock server when you want to reset every bucket to its original content.

## Go further

Once you are comfortable with `setData`, you can combine it with other Mockoon features to create even richer simulations:

- [validate request bodies against a JSON schema](/tutorials/validate-requests-payload-json-schema/) to ensure only well-formed data triggers mutations.
- [simulate webhooks and callbacks](/tutorials/simulate-webhooks-and-callbacks/) by using `setData` to store callback URLs and trigger them with dynamic data.
