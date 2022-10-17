---
title: Overview
meta:
  title: Create dynamic responses with templating
  description: Create dynamic JSON responses for your mock API server with Mockoon's templating system including Faker.js
order: 1000
---

# Templating overview

---

Mockoon implements [Handlebars](https://handlebarsjs.com/), [Faker.js v5.5.3](https://fakerjs.dev/), and a set of custom helpers to create dynamic responses. This templating system is supported in the response's **body**, **headers**, **file content**, and **file path**. You will find below a global overview of how and where you can use helpers. You can also check the [available helpers](#available-helpers) on specific documentation pages.

## Helpers

### Handlebars syntax

All the helpers must be used according to Handlebars' syntax, for example: `{{helperName param1 param2}}`. Some helpers accepting options objects can be used with Handlebars' object params: `{{faker 'date.month' abbr=false}}`.

Please note that a space always follows the helper name and separates each and all params like in `oneOf *space* (array *space* 'item1' *space* 'item2')`.
Also, parenthesis serves to prioritize a helper over another but not to symbolize a function call. Helpers do not require parenthesis in order to work.

All Handlebars helpers are available (`if`, `each`, etc.). For more information, please have a look at [Handlebars' documentation](https://handlebarsjs.com/).

### Available helpers

Besides Handlebars built-in helpers, Mockoon offers many of them:

- [custom helpers](docs:templating/mockoon-helpers)
- [request helpers](docs:templating/mockoon-request-helpers)
- [Faker.js library helpers](docs:templating/fakerjs-helpers)

## Usages

### Body and file content templating

Templating will work in the body editor without consideration for the Content-Type that has been defined. It will also work with files content for a limited set of MIME types (`application/json`, `text/html`, `text/css`, `text/csv`, `application/javascript`, `application/typescript`, `text/plain`, `application/xhtml+xml`, `application/xml`).

Here is an example of what you can do with this templating system:

<!-- prettier-ignore -->
```handlebars
{
  "userId": "{{urlParam 'id'}}",
  "name": "{{queryParam 'name' 'John'}}",
  "lang": "{{{header 'Accept-Language' 'en'}}}",
  "elementTitle": "{{body 'elements.0.title' 'default'}}",
  "ip": "{{ip}}",
  "method": "{{method}}",
  "hostname": "{{hostname}}",
  "friends": [
    {{#repeat 2}}
    { 
      "id": {{@index}}, 
      "name": "{{faker 'name.firstName'}} {{faker 'name.lastName'}}" 
    }
    {{/repeat}}
  ], 
  "oneItem": "{{oneOf (array 'item1' 'item2' 'item3')}}", 
  "someItemsAsString": "{{someOf (array 'item1' 'item2' 'item3') 1 2}}", 
  "someItemsAsArray": {{{someOf (array 'item1' 'item2' 'item3') 1 2 true}}}, 
  "userName": 
    {{#switch (urlParam 'id')}}
      {{#case '1'}}"John"{{/case}}
      {{#case '2'}}"Jack"{{/case}}
      {{#default}}"Peter"{{/default}}
    {{/switch}}
}
```

![body editor content](docs-img:body-templating.png)

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

```handlebars
firstname,lastname,countryCode
{{#repeat 10}}
  {{faker 'name.firstName'}},{{faker 'name.lastName'}},{{faker
    'address.countryCode'
  }}
{{/repeat}}
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

```handlebars
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

![click on route response fourth settings tab](docs-img:open-route-response-settings.png)

Then, disable the templating by checking the box:

![check the disable templating box](docs-img:disable-route-response-templating.png)

### File input templating

Templating is also supported in the **file input field**. It allows to dynamically serve files depending on the request parameters, like `urlParam` or any other helper. Example:

If you have a set of files named `./file1.json` and `./file2.json`, a route param can be declared (`/myroute/:id`) and retrieved with the `urlParam` helper in the file input:

`c:/.../file{{urlParam 'id'}}.json`.

If you call this route with `/myroute/1`, `./file1.json` will be sent.

![add a templating helper in the file path](docs-img:file-path-templating.png)

> For more information about absolute and relative file paths, please refer to our [file serving](docs:response-body/file-serving#absolute-or-relative-paths) documentation.

### Headers templating

Finally, templating helpers are also supported in the **headers values** both in route headers and environment headers:

![add a templating helper in the header value](docs-img:headers-templating.png)
