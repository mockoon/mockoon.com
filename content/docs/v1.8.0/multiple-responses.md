---
title: Multiple responses
icon: tune
meta:
  title: Define multiple responses for each route
  description: Multiple responses can be defined for each route with different body, headers and status. They are triggered with rules
---

### Multiple responses

---

For each route, multiple responses can be defined (status, body, and headers) and triggered using a set of rules.

### Adding a response

 To add a response to your route, click on the "plus" icon next to the responses list:
 
![Click on the icon to add a new response](/images/docs/add-route-response.png)

#### Default route response

There is always at least one response when you create a new route. You can modify it and add more responses. But you can never delete the last route response.

Without rules or when a request does not match the one you defined, the default response will always be the first one in the list. You can easily change the default response by reordering the responses menu with a drag and drop:

![Reorder route responses](/images/docs/reorder-responses.png)


#### Defining rules

You can define an unlimited number of rules for each route. At each request, Mockoon will read each route response rules and will return the response which contains the first matching rule. There is no logic between the rules. You can read them like this: `[rule OR rule] OR [rule OR rule]` the brackets symbolizing each route response.

To add a new rule to a response, go to the route response's **Rules tab** and fill the fields:

![Click on add and fill the fields](/images/docs/add-route-response-rule.png)

Rules have three parts:

- a **target**
- a **property name or path**
- a **value**

##### 1. Target

In the dropdown menu you can choose between:

- a property value in a JSON or form data **body** (if request's `Content-Type` is either `application/json` or `application/x-www-form-urlencoded`).
- the value of a **header**.
- the value of a **route parameter**.
- the value of a **query string field**.

##### 2. Property name or path

Depending on the **target**, the way to access properties may be different:

- **body**: access a property value using a path (based on NPM package [object-path](https://www.npmjs.com/package/object-path)) like `users.0.name` for JSON content or a single field for form data.
- **headers**: a header name like `Accept` or `Content-Type`.
- **route param**: a route param name without the colon (":"), `:userId` becoming `userId`.
- **query string**: either provide a property name like `filter` or a path if the query string field is an object `filter.primary`.

For body and query string, if the property is an array, Mockoon will automatically check in the array if at least one item matches the value.

##### 3. Value

You can either set a simple text value like "expected value" or any kind of regex. To use a regex, write it without the leading and trailing slashes and tick the checkbox on the right.

Examples:
`primary|secondary`, `^user1-9`, `UTF-.*`.  
You can also test for empty values with the following regex: `^$|\s+`.
