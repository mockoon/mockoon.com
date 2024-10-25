---
title: Responses rules
meta:
  title: Server different responses based on rules
  description: Learn how to define multiple route responses for each route and triggered them with rules based on the entering request parameters.
order: 310
---

# Adding response rules

---

After creating [multiple responses](docs:route-responses/multiple-responses) for each route, you can create more complex scenarios and serve the responses depending on the fulfillment of rules.

## Defining rules

You can define an unlimited number of rules for each route. At each request, Mockoon will assert each response's rules and serve the response which contains the first matching rule(s). The rules are interpreted in the order they are declared: `[rule OR|AND rule] OR [rule OR|AND rule]`, the brackets symbolizing each route response.

![Rules interpretation order{455x395}](/images/docs/shared/dynamic-rules-schema.png)

To add a new rule to a response, go to the route response's **Rules tab**, click on "Add rule" and fill the fields:

![Click on add and fill the fields{1157x304}](docs-img:add-route-response-rule.png)

### Reordering rules

By default, rules are interpreted in the order you added them. You can change their interpretation order by drag and dropping them:

![Drag and drop rules to reorder them{1195x326}](docs-img:route-response-rule-reorder.png)

### Disabling rules

You can temporarily disable the rules and serve the default response only. To activate this option, click on the "rules" icon next to the response list:

![Disable rules{1220x244}](docs-img:disable-rules.png)

> When this option is active, the default response will be always served and all the rules defined on this route will be ignored. Also, this option cannot be selected in addition to the random or sequential responses.

### Rules logical operator

Inside a route response, rules are interpreted by default with the OR logical operator. When you have more than one rule in a route response, you can easily switch the operator applied when interpreting the rules, by clicking on the `OR|AND` buttons at the left of the rules:

![Choose the rule operator OR AND{1152x214}](docs-img:route-response-rules-operator.png)

Rules have five parts:

- a **target**
- a **property name or path**
- an **invert operator** toggle
- a comparison **operator**
- a **value**

### 1. Target

![Rule target{1177x204}](docs-img:route-response-rules-target.png)

In the dropdown menu you can choose between:

- the **request body** value (full raw content or one of its properties if request's `Content-Type` is either `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, `application/xml`, `application/soap+xml` or `text/xml`).
- the value of a **request's query parameter**.
- the value of a **request header**.
- the value of a **request cookie**.
- the value of a [**route parameter**](docs:api-endpoints/routing#route-parameters).
- the value of the **request path**, always starting with a `/` (e.g. /path/section).
- the value of the **request method** in lowercase (e.g. get, post, put, delete, patch, head, options).
- the **request number** index starting at 1 (you can reset the request number by using the [state purge admin API](docs:admin-api/server-state)).
- the value of a [**global variable**](docs:variables/global-variables).
- the value of a [**data bucket content**](docs:data-buckets/overview).
- **custom templating** (see the [templating helpers](docs:templating/overview) documentation).

### 2. Target's name or path, or template

![Rule property{1177x204}](docs-img:route-response-rules-property.png)

This field supports [templating helpers](docs:templating/overview) to dynamically target a specific body property, header name, etc. Depending on the **target**, the way to access properties may be different:

- **request body**:
  - keep empty to match against the full raw body content.
  - use a path to access one of its properties. Two syntaxes are supported, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.
    Fetching object properties is compatible with request's bodies of `Content-Type` `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, `application/xml`, `application/soap+xml` or `text/xml`.  
    _Please note that XML bodies are parsed using [xml-js](https://www.npmjs.com/package/xml-js) package. Refer to this [page](docs:response-configuration/xml-support) or the package documentation for more information on how the XML is parsed and how to fetch specific properties._  
    _Please also note that `multipart/form-data` only supports fields. Uploaded files will be ignored._
- **query parameter**: either provide a property name like `filter` or a path if the query parameter is an object `filter.primary`.
- **headers**: a header name like `Accept` or `Content-Type`.
- **cookies**: the cookie name like `Session-id`.
- **route parameter**: a route parameter name without the colon (":"), `:userId` becoming `userId`.
- **request path**: _no property or path can be provided here_.
- **request method**: _no property or path can be provided here_.
- **request number**: _no property or path can be provided here_.
- **global variable**: a [global variable](docs:variables/global-variables) name like `myVar`. You can use a path to access one of its properties if the variable is storing arrays or objects. Two syntaxes are supported, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `myVar.key\.with\.dot`. Examples: `myVar.property.subProperty`, `myVar.property.0.subProperty` or `$.myVar.property`.
- **data bucket content**: a [data bucket](docs:data-buckets/overview) name like `myData`. You can use a path to access one of its properties if the bucket is storing arrays or objects. Two syntaxes are supported, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `myData.key\.with\.dot`. Examples: `myData.property.subProperty`, `myData.property.0.subProperty` or `$.myData.property`.
- **custom templating**: custom templating helpers like `{{urlParam 'param'}}`, `{{header 'x-custom-header'}}`, `{{body 'property'}}`, `{{jwtPayload (header 'Authorization') 'sub'}}`, etc. The result of the templating helper will be a **string** that will be compared to the rule value.

For **body** and **query string**, if the property is an array, Mockoon will automatically check in the array if at least one item matches the value.

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

> 💡 The **response rule values also support templating helpers** to create dynamic rules. See the [templating helpers](docs:templating/overview) documentation for more information.

### 3. Invert operator

You can invert the **comparison operator** (**!** equals, **!** regex match, etc.) by toggling on the exclamation mark button:

![Rule comparison operator{1177x204}](docs-img:route-response-rules-invert-operator.png)

### 4. Comparison operator

![Rule comparison operator{1177x204}](docs-img:route-response-rules-comparison-operator.png)

Multiple **comparison operators** are available in each rule:

- **equals**: asserts that the targeted property is equal to the **value**.
- **regex match**: asserts that the targeted property matches the regex **value**.
- **null**: asserts that the targeted property is null or absent (for **headers** or **cookies**).
- **empty array**: asserts that the targeted property is an empty array.
- **array includes**: asserts that the given **value** is present in the targeted property (array).
- **valid JSON schema**: asserts that the targeted property is a valid JSON schema. The **value** must point to a [data bucket](docs:data-buckets/overview) containing a valid JSON schema (see below).

> 💡 Some comparison operators are not available for all **targets**. For example, the **array includes** operator is not available for **request number** or **request method**. Also, array operators are not available for the "Custom templating" rule type as it always returns a string value.

### 5. Value

The **value** field is the expected value to compare against the targeted property, it can be a simple text value, a regex, or a JSON schema.

It also **support templating helpers** to create dynamic rules. See the [templating helpers](docs:templating/overview) documentation for more information.

![Rule value{1177x204}](docs-img:route-response-rules-value.png)

#### Strings and regexes

Depending on the comparison operator chosen, **equals**, **regex match** or **array includes**, you can either set a simple text value like "expected value" or any kind of regex. To use a regex, you must write it without the leading and trailing slashes.

Regex examples:
`primary|secondary`, `^user1-9`, `UTF-.*`.  
You can also test for empty values with the following regex: `^$|\s+`.

The **request number** supports simple entries like `1` or `2` but also regexes, allowing you to return a different response for the first 3 calls `^[1-3]$` or failing on odd request indexes `[13579]$`.

#### JSON schemas

The only exception is the **valid JSON schema** comparison operator. In this case, the **value** must point to a data bucket containing a valid JSON schema. The schema will be used to validate the targeted property using [ajv](https://www.npmjs.com/package/ajv). In this case, the **value** field supports the [object-path](https://www.npmjs.com/package/object-path) syntax to access the schema stored in a data bucket. Examples: `bucketNameOrId`, `bucketNameOrId.propertyName`, etc. The [data bucket documentation](docs:data-buckets/using-data-buckets#storing-json-schemas) provides more information on how to create and use JSON schemas.
