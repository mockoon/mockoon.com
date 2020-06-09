---
title: Templating
icon: code
meta:
  title: Create dynamic responses with templating
  description: Create dynamic responses for your mock server with Mockoon's templating system
---

### Templating

---

Mockoon implements [Handlebars](https://handlebarsjs.com/), [Dummy JSON](https://github.com/webroo/dummy-json), and a set of custom Handlebars helpers in order to create dynamic responses. This templating system is supported in the response's **body**, **headers**, **file content**, and **file path**.

#### Helpers

##### Handlebars syntax and helpers

All the helpers must be used according to Handlebars' syntax, for example: `{{helperName param1 param2}}`.

Please note that a space always follows the helper name and separates each and all params like in `oneOf *space* (array *space* 'item1' *space* 'item2')`.
Also, parenthesis serves to prioritize a helper over another but not to symbolize a function call. Helpers do not require parenthesis in order to work.

All Handlebars helpers are available (`if`, `each`, etc.). For more information, please have a look at [Handlebars' documentation](https://handlebarsjs.com/).

##### Dummy JSON helpers


Dummy JSON offers lots of helpers: `repeat`, `int`, `float`, `date`, `time`, `title`, `firstName`, `lastName`, `company`, `latitude`, `longitude`, `domain`, `TLD`, `email`, `street`, `city`, `country`, `phone`, `color`, `hexColor`, `guid`, `ipv4`, `ipv6`, `lorem`, `lowercase`, `uppercase`, etc. Please have a look at [Dummy JSON documentation](https://github.com/webroo/dummy-json#available-helpers) to learn how to use them.

##### Mockoon helpers

In addition to these helpers, some custom ones have been added to Mockoon:

- `array 'item1' 'item2' 'item3'`: create an array from items (to be used in the following helpers `oneOf`, `someOf`).
- `oneOf (array 'item1' 'item2' 'item3')`: select a random item in the array passed in parameters.
- `someOf (array 'item1' 'item2' 'item3') x y`: returns x to y random items from the array passed in parameters concatenated as a string (to be used with double curly braces), result is the following: `item1,item2`.
- `{{{someOf (array 'item1' 'item2' 'item3') x y true}}}`: returns x to y random items from the array passed in parameters as an array (to be used with triple curly braces), result is the following: `["item1","item2"]`.
- `#switch ... #case ... #default`: select some content depending on a variable. behaves like a normal switch (see the example below).

Mockoon also supports the following helpers which can return entering requests information:

- `body 'path' 'default value'`: get a path from a request body's JSON by default or from form params if request's `Content-Type` header is set to `application/x-www-form-urlencoded`. Path has the following form `key.0.key.5.key` for JSON (syntax is based on [NPM **object-path** package](https://www.npmjs.com/package/object-path)), or directly a param name like `firstname` for form params.
- `urlParam 'paramName1'`: get a param from the URL `/:paramName1/:paramName2`.
- `queryParam 'param1' 'default value'`: get a param from the query string `?param1=xxx&#38;param2=yyy` or a default value if param is not present.
- `cookie 'cookie_name' 'default value'`: get the content of a cookie or a default value if the cookie is not present.
- `header 'Header-Name' 'default value'`: get content from any request header or a default value if header is not present.
- `hostname`: get request hostname.
- `ip`: get request IP address.
- `method `: get request method (GET, PUT, POST, etc.).
- `now 'YYYY-MM-DD'`: display the current time in the chosen format. Format syntax is based on [date-fns package (v2)](https://date-fns.org/v2.11.1/docs/format) and is optional (default to ISO string).

#### Usages

##### Body and file content templating

Templating will work in the body editor without consideration for the Content-Type that has been defined. It will also work with files content for a limited set of MIME types (`application/json`, `text/html`, `text/css`, `text/csv`, `application/javascript`, `application/typescript`, `text/plain`, `application/xhtml+xml`, `application/xml`).

Here is an example of what you can do with this templating system:

```
{
  "userId": "{{ urlParam 'id'}}",
  "name": "{{ queryParam 'name' 'John' }}",
  "lang": "{{{header 'Accept-Language' 'en'}}}",
  "elementTitle": "{{ body 'elements.0.title' 'default' }}",
  "ip": "{{ ip }}",
  "method": "{{ method }}",
  "hostname": "{{ hostname }}",
  "friends": [
    {{#repeat 2}}
      {
        "id": {{@index}},
        "name": "{{ firstName }} {{ lastName }}"
      }
    {{/ repeat}}
  ],
  "oneItem": "{{ oneOf (array 'item1' 'item2' 'item3') }}",
  "someItemsAsString": "{{ someOf (array 'item1' 'item2' 'item3') 1 2 }}",
  "someItemsAsArray": {{{ someOf (array 'item1' 'item2' 'item3') 1 2 true }}},
  "userName":
    {{#switch (urlParam 'id')}}
      {{#case "1"}}"John"{{/case}}
      {{#case "2"}}"Jack"{{/case}}
      {{#default}}"Peter"{{/default}}
    {{/switch}}
}
```

![body editor content](/images/docs/v1.8.0-body-templating.png)


The above template produces the following body with this request:

```
GET /user/123456?name=john
Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
Body:
{
  "element": [
    {"title": "My title"}
  ]
}
```

Response:

```
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

```
firstname,lastname,countryCode
{{#repeat 10}}
{{firstName}},{{lastName}},{{countryCode}}
{{/repeat}}
```

Response:

```
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

##### File input templating

Templating is also supported in the **file input field**. It allows to dynamically serve files depending on the request parameters, like `urlParam` or any other helper. Example:

If you have a set of files named `./file1.json` and `./file2.json`, a route param can be declared (`/myroute/:id`) and retrieved with the `urlParam` helper in the file input:

`c:/.../file{{urlParam 'id'}}.json`.

If you call this route with `/myroute/1`, `./file1.json` will be sent.

![add a templating helper in the file path](/images/docs/file-path-templating.png)

##### Headers templating

Finally, templating helpers are also supported in the **headers values** both in route headers and environment headers:

![add a templating helper in the header value](/images/docs/headers-templating.png)

