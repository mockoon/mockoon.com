---
title: Responses rules
meta:
  title: Server different responses based on rules
  description: Learn how to define multiple route responses for each route and triggered them with rules based on the entering request parameters.
order: 910
---

# Adding response rules

---

After creating [multiple responses](docs:route-responses/multiple-responses) for each route, you can create more complex scenarios and serve the responses depending on the fulfillment of rules.

## Defining rules

You can define an unlimited number of rules for each route. At each request, Mockoon will assert each response's rules and serve the response which contains the first matching rule(s). The rules are interpreted in the order they are declared: `[rule OR|AND rule] OR [rule OR|AND rule]`, the brackets symbolizing each route response.

![Rules interpretation order](/images/docs/dynamic-rules-schema.png)

To add a new rule to a response, go to the route response's **Rules tab** and fill the fields:

![Click on add and fill the fields](/images/docs/v1.14.0-add-route-response-rule.png)

### Reordering rules

By default, rules are executed in the order you added them. You can then customise the order in which rules are being executed by drag and dropping them.

### Rules operator

Inside a route response, rules are interpreted by default with the OR operator. When you have more than one rule in a route response, you can easily switch the operator applied when interpreting the rules, by clicking on the `OR|AND` buttons at the left of the rules:

![Click on add and fill the fields](/images/docs/v1.14.0-route-response-rules-operator.png)

Rules have three parts:

- a **target**
- a **property name or path**
- a **value**

### 1. Target

In the dropdown menu you can choose between:

- the **body** value (full raw content or one of it properties if request's `Content-Type` is either `application/json` or `application/x-www-form-urlencoded`).
- the value of a **header**.
- the value of a **route parameter**.
- the value of a **query string field**.
- the **request number** index starting at 1.

### 2. Property name or path

Depending on the **target**, the way to access properties may be different:

- **body**:
  - keep empty to match against the full raw body content.
  - use a path to access one of its properties. The syntax is based on an [object-path](https://www.npmjs.com/package/object-path) like `users.0.name`. This is compatible with request's bodies of `Content-Type` `application/json` or `application/x-www-form-urlencoded`.
- **headers**: a header name like `Accept` or `Content-Type`.
- **route param**: a route param name without the colon (":"), `:userId` becoming `userId`.
- **query string**: either provide a property name like `filter` or a path if the query string field is an object `filter.primary`.
- **request number**: _nothing has to be provided here for the request number_.

For body and query string, if the property is an array, Mockoon will automatically check in the array if at least one item matches the value.

### 3. Value

You can either set a simple text value like "expected value" or any kind of regex. To use a regex, write it without the leading and trailing slashes and tick the checkbox on the right.

Examples:
`primary|secondary`, `^user1-9`, `UTF-.*`.  
You can also test for empty values with the following regex: `^$|\s+`.

The **request number** supports simple entries like `1` or `2` but also regexes, allowing you to return a different response for the first 3 calls `^[1-3]$` or failing on odd request indexes `[13579]$`.
