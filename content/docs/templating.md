---
title: Templating
meta:
  title: Create dynamic responses with templating
  description: Create dynamic JSON responses for your mock API server with Mockoon's templating system including Faker.js
order: 60
---

# Templating

---

Mockoon implements [Handlebars](https://handlebarsjs.com/), [Faker.js](https://github.com/Marak/faker.js), and a set of custom Handlebars helpers in order to create dynamic responses. This templating system is supported in the response's **body**, **headers**, **file content**, and **file path**.

## Helpers

### Handlebars syntax and helpers

All the helpers must be used according to Handlebars' syntax, for example: `{{helperName param1 param2}}`. Some helpers accepting options objects can be used with Handlebars' object params: `{{faker 'date.month' abbr=false}}`.

Please note that a space always follows the helper name and separates each and all params like in `oneOf *space* (array *space* 'item1' *space* 'item2')`.
Also, parenthesis serves to prioritize a helper over another but not to symbolize a function call. Helpers do not require parenthesis in order to work.

All Handlebars helpers are available (`if`, `each`, etc.). For more information, please have a look at [Handlebars' documentation](https://handlebarsjs.com/).

### Faker.js helpers

Faker.js offers lots of helpers: `address.zipCode`, `address.city`, `address.cityPrefix`, `name.firstName`, `name.lastName`, `random.number`, `random.float`, `internet.avatar`, `internet.email`, etc. Please have a look at [Faker.js documentation](http://marak.github.io/faker.js/faker.html) to learn how to use them.

All Faker.js helpers must be used in the following way: `{{faker 'namespace.method'}}`.  
Examples: `{{faker 'address.zipCode'}}`, `{{faker 'address.city'}}`, `{{faker 'address.cityPrefix'}}`, `{{faker 'name.firstName'}}`, etc.  
Before version 1.9.0, Mockoon was using [Dummy JSON](https://github.com/webroo/dummy-json) which offered similar helpers (`int`, `float`, `date`, `time`, `title`, `firstName`, `lastName`, `company`, etc.). All of them have been kept and remapped to Faker.js's equivalents. This means that you can still use `{{int}}` which will use Faker.js's `random.number` method behind the scene.

### Mockoon helpers

In addition to these helpers, some custom ones have been added to Mockoon:

- `array 'item1' 'item2' 'item3'`: create an array from items (to be used in the following helpers `oneOf`, `someOf`).
- `oneOf (array 'item1' 'item2' 'item3')`: select a random item in the array passed in parameters.
- `someOf (array 'item1' 'item2' 'item3') x y`: returns x to y random items from the array passed in parameters concatenated as a string (to be used with double curly braces), result is the following: `item1,item2`.
- `{{{someOf (array 'item1' 'item2' 'item3') x y true}}}`: returns x to y random items from the array passed in parameters as an array (to be used with triple curly braces), result is the following: `["item1","item2"]`.
- `#switch ... #case ... #default`: select some content depending on a variable. behaves like a normal switch (see the example below).
- `#repeat x comma=true ... /repeat`: repeat the content `x` times (see the example below). Set the `comma` parameter to `false` (default to `true`) to prevent the insertion of new lines and commas by the helper.
- `now 'YYYY-MM-DD'`: display the current time in the chosen format. Format syntax is based on [date-fns package (v2)](https://date-fns.org/v2.11.1/docs/format) and is optional (default to ISO string).
- `newline`: add a newline `\n`.
- `base64 'string'`: encode the parameter as base64. This can be used as an inline helper or block helper (see below).
- `objectId 'string' | number`: create a valid ObjectId. It can generates the ObjectId based on the specified time (in seconds) or from a 12 byte string that will act as a seed. Syntax is based on [bson-objectid package](https://www.npmjs.com/package/bson-objectid).
- `setVar 'varname' 'value'`: set a variable to be used in the template. The value can be the result of another helper: `setVar 'varname' (body 'id')`. To use it elsewhere in the template, refer to the variable with its name: `{{varname}}` or `{{@root.varname}}`. The variable can also be used as a helper parameter: `{{#repeat varname}}...{{/repeat}}`. You can also declare a variable inside structural helpers like `repeat`. Accessing such variables requires to prefix them with `@`:
  ```
  {{# repeat 5}}
    {{setVar 'random' (oneOf (array '1' '2' '3'))}}
    {{@random}}
  {{/ repeat}}
  ```

- `concat 'value1' 2 'value3' ...`: concatenate multiple strings/numbers together. This helper can concatenate results from other helpers, or be used as a parameter of another helper: `concat @index (body 'id') 'value3'`, `{{#repeat (concat 1 2 3)}}...{{/repeat}}`
- `dateTimeShift date='2021-01-01' format='yyyy-MM-dd' years=1 months=1 days=1 hours=1 minutes=1 seconds=1`: shift a date by adding the number of `years`, `months`, etc. passed as parameters. The `date` and `format` parameters are optional. The helper will return the current date and time as an ISO string if omitted (`yyyy-MM-ddTHH:mm:ss.SSSxxx`).

Mockoon also supports the following helpers which can return entering requests information:

- `body 'path' 'default value'`: 
  - get the value at a given `path` from the request body if the entering `Content-Type` is set to `application/json` or `application/x-www-form-urlencoded`. The `path` takes the following form `key.0.key.5.key`. The syntax is based on [NPM **object-path** package](https://www.npmjs.com/package/object-path). For both JSON and form params bodies, full objects or arrays can be retrieved by the helper.
  - The full request's raw body can also be fetched when the `path` is omitted (`{{body}}`) independently from the request's `Content-Type`.
  - If no value is present at the requested `path`, the default value will be used.
- `queryParam 'path' 'default value'`: 
  - get the value at a given `path` from the request's query string. Complex query strings with arrays and objects are supported. The `path` takes the following form `key.0.key.5.key`. The syntax is based on [NPM **object-path** package](https://www.npmjs.com/package/object-path). Full objects or arrays can be retrieved by the helper.
  - The full query string object can also be fetched when the `path` is omitted (`{{queryParam}}`). It will be stringified and can be used in a JSON body for example.
  - If there is no value at the requested `path`, the default value will be used.
- `urlParam 'paramName1'`: get a param from the URL `/:paramName1/:paramName2`.
- `cookie 'cookie_name' 'default value'`: get the content of a cookie or a default value if the cookie is not present.
- `header 'Header-Name' 'default value'`: get content from any request header or a default value if header is not present.
- `hostname`: get request hostname.
- `ip`: get request IP address.
- `method`: get request method (GET, PUT, POST, etc.).

## Usages

### Body and file content templating

Templating will work in the body editor without consideration for the Content-Type that has been defined. It will also work with files content for a limited set of MIME types (`application/json`, `text/html`, `text/css`, `text/csv`, `application/javascript`, `application/typescript`, `text/plain`, `application/xhtml+xml`, `application/xml`).

Here is an example of what you can do with this templating system:

```json
{
  "userId": "{{ urlParam 'id' }}",
  "name": "{{ queryParam 'name' 'John' }}",
  "lang": "{{{ header 'Accept-Language' 'en' }}}",
  "elementTitle": "{{ body 'elements.0.title' 'default' }}",
  "ip": "{{ ip }}",
  "method": "{{ method }}",
  "hostname": "{{ hostname }}",
  "friends": [
    {{# repeat 2 }}
      {
        "id": {{ @index }},
        "name": "{{ faker 'name.firstName' }} {{ faker 'name.lastName' }}"
      }
    {{/ repeat }}
  ],
  "oneItem": "{{ oneOf (array 'item1' 'item2' 'item3') }}",
  "someItemsAsString": "{{ someOf (array 'item1' 'item2' 'item3') 1 2 }}",
  "someItemsAsArray": {{{ someOf (array 'item1' 'item2' 'item3') 1 2 true }}},
  "userName":
    {{# switch (urlParam 'id') }}
      {{# case "1" }}"John"{{/ case }}
      {{# case "2" }}"Jack"{{/ case }}
      {{# default }}"Peter"{{/ default }}
    {{/ switch}}
}
```

![body editor content](/images/docs/v1.8.0-body-templating.png)


The above template produces the following body with this request:

```http
GET /user/123456?name=john
Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7

{
  "element": [
    {"title": "My title"}
  ]
}
```

Response:

```json
{
  "userId": "5",
  "name": "john",
  "lang": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
  "elementTitle": "My title",
  "ip": "::1",
  "method": "GET",
  "hostname": "localhost",
  "friends": [
    {
      "id": 0,
      "name": "Stephen Bradbury"
    },
    {
      "id": 1,
      "name": "Warren Caffey"
    }
  ],
  "oneItem": "item1",
  "someItemsAsString": "item2",
  "someItemsAsArray": ["item2", "item3"],
  "userName": "John"
}
```

This system is flexible enough to generate a lot of different contents like CSV files:

```csv
firstname,lastname,countryCode
{{# repeat 10 }}
  {{ faker 'name.firstName' }},{{ faker 'name.lastName' }},{{ faker 'address.countryCode' }}
{{/ repeat}}
```

Response:

```csv
firstname,lastname,countryCode
Max,Magby,AZ
Stan,Muldoon,HM
Drew,Rebelo,CY
Cory,Neal,BG
Grace,Whitson,CY
Haydee,Backer,ET
Erik,Friedrich,MX
Stephen,Paquette,PH
Neida,Durrett,PN
Vaughn,Neal,MO
```

#### Base64 encoding

By using the `base64` helper, you can encode parts or entirety of the response by enclosing the content in a block helper.  
Inline helper:

```html
{{base64 'test'}}
{{base64 (body 'path.to.property')}}
```

Block helper: 

```csv
{{# base64}}
firstname,lastname,countryCode
{{# repeat 10 }}
{{ faker 'name.firstName' }},{{ faker 'name.lastName' }},{{ faker 'address.countryCode' }}
{{/ repeat}}
{{/ base64}}
```

#### Disable body and file templating 

Templating can be disabled for the body and file content in each route response separately. Thus, no helper will be interpreted by the templating engine.

First, open the **Route response settings**:

![click on route response fourth settings tab](/images/docs/open-route-response-settings.png)

Then, disable the templating by checking the box: 

![check the disable templating box](/images/docs/disable-route-response-templating.png)

### File input templating

Templating is also supported in the **file input field**. It allows to dynamically serve files depending on the request parameters, like `urlParam` or any other helper. Example:

If you have a set of files named `./file1.json` and `./file2.json`, a route param can be declared (`/myroute/:id`) and retrieved with the `urlParam` helper in the file input:

`c:/.../file{{urlParam 'id'}}.json`.

If you call this route with `/myroute/1`, `./file1.json` will be sent.

![add a templating helper in the file path](/images/docs/file-path-templating.png)

### Headers templating

Finally, templating helpers are also supported in the **headers values** both in route headers and environment headers:

![add a templating helper in the header value](/images/docs/headers-templating.png)

