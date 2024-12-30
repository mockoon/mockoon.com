---
title: Helpers
meta:
  title: Create dynamic responses with templating helpers
  description: "Create dynamic fake data for your mock server with Mockoon's templating helpers. All formats are supported: JSON, CSV, HTML, etc."
order: 501
---

# Mockoon templating helpers

---

In addition to Handlebars' built-in helpers, Mockoon offers the following helpers:

| Block helpers       | Data buckets          |
| ------------------- | --------------------- |
| [`repeat`](#repeat) | [`data`](#data)       |
| [`switch`](#switch) | [`dataRaw`](#dataraw) |

| Arrays              |                       | Objects             |
| ------------------- | --------------------- | ------------------- |
| [`array`](#array)   | [`sort`](#sort)       | [`object`](#object) |
| [`oneOf`](#oneof)   | [`sortBy`](#sortby)   |                     |
| [`someOf`](#someof) | [`reverse`](#reverse) |                     |
| [`join`](#join)     |                       |                     |
| [`slice`](#slice)   |                       |                     |
| [`len`](#len)       |                       |                     |
| [`filter`](#filter) |                       |                     |

| Math                    |                       |
| ----------------------- | --------------------- |
| [`add`](#add)           | [`eq`](#eq)           |
| [`subtract`](#subtract) | [`gt`](#gt)           |
| [`multiply`](#multiply) | [`gte`](#gte)         |
| [`divide`](#divide)     | [`lt`](#lt)           |
| [`modulo`](#modulo)     | [`lte`](#lte)         |
| [`ceil`](#ceil)         | [`toFixed`](#tofixed) |
| [`floor`](#floor)       | [`round`](#round)     |

| Strings                   |                         | Dates                             | Misc                            |
| ------------------------- | ----------------------- | --------------------------------- | ------------------------------- |
| [`includes`](#includes)   | [`concat`](#concat)     | [`now`](#now)                     | [`newline`](#newline)           |
| [`substr`](#substr)       | [`indexOf`](#indexof)   | [`dateTimeShift`](#datetimeshift) | [`base64`](#base64)             |
| [`lowercase`](#lowercase) | [`parseInt`](#parseint) | [`date`](#date)                   | [`base64Decode`](#base64decode) |
| [`uppercase`](#uppercase) | [`padStart`](#padstart) | [`time`](#time)                   | [`objectId`](#objectid)         |
| [`split`](#split)         | [`padEnd`](#padend)     | [`dateFormat`](#dateformat)       |                                 |
| [`stringify`](#stringify) | [`eq`](#eq)             |                                   |                                 |
| [`jsonParse`](#jsonparse) |                         |                                   |                                 |

| [Faker.js](docs:templating/fakerjs-helpers) aliases |                               |                         |
| --------------------------------------------------- | ----------------------------- | ----------------------- |
| [`int`](#int)                                       | [`street`](#street)           | [`hexColor`](#hexcolor) |
| [`float`](#float)                                   | [`city`](#city)               | [`guid`](#guid)         |
| [`boolean`](#boolean)                               | [`country`](#country)         | [`ipv4`](#ipv4)         |
| [`title`](#title)                                   | [`countryCode`](#countrycode) | [`ipv6`](#ipv6)         |
| [`firstName`](#firstname)                           | [`zipcode`](#zipcode)         | [`lorem`](#lorem)       |
| [`lastName`](#lastname)                             | [`postcode`](#postcode)       |                         |
| [`company`](#company)                               | [`lat`](#lat)                 |                         |
| [`domain`](#domain)                                 | [`long`](#long)               |                         |
| [`tld`](#tld)                                       | [`phone`](#phone)             |                         |
| [`email`](#email)                                   | [`color`](#color)             |                         |

## repeat

Repeat the block content a random number of times if two arguments are provided, or a fixed amount of time if only one argument is provided. Set the `comma` parameter to `false` (default to `true`) to prevent the insertion of new lines and commas by the helper.

| Parameters/arguments | Type    | Description        |
| -------------------- | ------- | ------------------ |
| [0]                  | number  | Minimum items      |
| 1                    | number  | Maximum items      |
| [comma=true]         | boolean | Add trailing comma |

**Examples**

```handlebars
{{#repeat 5 10 comma=true}}test{{/repeat}}

<!-- 
result: 
test,
test,
test,
test,
test -->
```

## switch

Select some content depending on a variable. Behaves like a regular switch.

| Arguments (ordered) | Type | Description                                      |
| ------------------- | ---- | ------------------------------------------------ |
| 0                   | any  | Value against which the switch matches the cases |

**Examples**

```handlebars
{{#switch (urlParam 'id')}}
  {{#case '1'}}"John"{{/case}}
  {{#case '2'}}"Jack"{{/case}}
  {{#default}}"Peter"{{/default}}
{{/switch}}
```

## data

Get the **stringified** value at a given `path` from a [data bucket](docs:data-buckets/overview) selected by **ID or name**. This helper is designed to retrieve data to be served in a response. To reuse the retrieved data with other helpers (`each`, `if`, etc.), use the [`dataRaw` helper](#dataraw) below.

- The `path` supports two syntaxes, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.  
  Please note that a value can be retrieved at the path if the data bucket contains valid JSON.
- Full objects or arrays can be retrieved by the helper and will be stringified.
- The full data bucket content can be fetched when the `path` is omitted (`{{data 'ID'}}`).

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

| Arguments (ordered) | Type   | Description                      |
| ------------------- | ------ | -------------------------------- |
| 0                   | string | ID or name of the data bucket    |
| 1                   | string | Path to the data bucket property |

**Examples**

```handlebars
{{data 'bucketNameOrId'}}

<!-- Using object-path syntax -->
{{data 'bucketNameOrId' 'path.to.property'}}
{{data 'bucketNameOrId' 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{data 'bucketNameOrId' '$.array.[*].property'}}
```

## dataRaw

Get the **raw** value (array, object, etc.) at a given `path` from a [data bucket](docs:data-buckets/overview) selected by **ID or name**. This "raw" helper is designed to work with other helpers (`each`, `if`, etc.). To directly use the retrieved data in the response, use [data buckets direct linking](docs:data-buckets/using-data-buckets#referencing-in-a-route-response) or the [`data` helper](#data) above.

- The `path` supports two syntaxes, [object-path](https://www.npmjs.com/package/object-path) or [JSONPath Plus](https://www.npmjs.com/package/jsonpath-plus). When using object-path, properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.  
  Please note that a value can be retrieved at the path if the data bucket contains valid JSON.
- Primitives and data structures can be retrieved by the helper and reused in other helpers (see example below).
- The full data bucket content (array, object, etc.) can be fetched when the `path` is omitted (`{{dataRaw 'ID'}}`).

> 🛠️ Use our online [JSONPath and object-path evaluator](/tools/json-object-path-evaluator/) to test your JSONPath or object-path syntaxes and view the results in real-time.

| Arguments (ordered) | Type   | Description                      |
| ------------------- | ------ | -------------------------------- |
| 0                   | string | ID or name of the data bucket    |
| 1                   | string | Path to the data bucket property |

**Examples**

```handlebars
{{dataRaw 'bucketNameOrId'}}

<!-- Using object-path syntax -->
{{dataRaw 'bucketNameOrId' 'path.to.property'}}
{{dataRaw 'bucketNameOrId' 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{dataRaw 'bucketNameOrId' '$.array.[*].property'}}

{{#each (dataRaw 'bucketNameOrId' 'path.to.array.property')}}
  value
{{/each}}

{{#if (dataRaw 'bucketNameOrId' 'path.to.boolean.property')}}
  value
{{/if}}
```

## array

Create an array from the given items. This helper is mostly used with the following helpers: `oneOf`, `someOf`.

| Arguments (ordered) | Type | Description                      |
| ------------------- | ---- | -------------------------------- |
| 0..n                | any  | Value used to populate the array |

**Examples**

```handlebars
{{array 'item1' 'item2' 'item3'}}
```

## oneOf

Select a random item in the array passed in parameters. `oneOf` will return the actual value in the array. Set the `stringify` parameter to `true` (default to `false`) to get a JSON stringified result.

| Arguments (ordered) | Type    | Description          |
| ------------------- | ------- | -------------------- |
| 0                   | any[]   | Array of values      |
| [1 = false]         | boolean | Stringify the result |

**Examples**

```handlebars
{{oneOf (array 'item1' 'item2' 'item3')}}
result: item2
```

## someOf

Return an array containing a random number of items from the array passed in parameters, eventually stringified. Use it with triple curly braces to get a non-escaped JSON representation.

| Arguments (ordered) | Type    | Description             |
| ------------------- | ------- | ----------------------- |
| 0                   | any[]   | Array of values         |
| 1                   | number  | Minimum number of items |
| 2                   | number  | Maximum number of items |
| [3 = false]         | boolean | Stringify the result    |

**Examples**

```handlebars
{{someOf (array 'item1' 'item2' 'item3') 1 2}}
result: item1,item2

<!-- Use triple curly braces to avoid Handlebars' character escaping -->
{{{someOf (array 'item1' 'item2' 'item3') x y true}}}
result: ["item1","item2"]
```

## join

Return a new string by concatenating all the elements in an array.

| Arguments (ordered) | Type   | Description     |
| ------------------- | ------ | --------------- |
| 0                   | []     | Array of values |
| 1                   | string | Separator       |

**Examples**

```handlebars
{{join (array 'item1' 'item2' 'item3') '#'}}
result: item1#item2#item3
```

## slice

Return a copy of a portion of an array from start to end indexes (not included).

| Arguments (ordered) | Type   | Description     |
| ------------------- | ------ | --------------- |
| 0                   | []     | Array of values |
| 1                   | number | Start index     |
| 2                   | number | End index       |

**Examples**

```handlebars
{{slice (array 'item1' 'item2' 'item3') 0 2}}
result: ['item1', 'item2']
```

## len

Return an array or string length.

| Arguments (ordered) | Type         | Description     |
| ------------------- | ------------ | --------------- |
| 0                   | [] \| string | Array or string |

**Examples**

```handlebars
{{len (array 'item1' 'item2' 'item3')}}
result: 3

{{len 'hello'}}
result: 5
```

## filter

Return a filtered array. This helper can be used with data buckets, use the [dataRaw](#dataraw) for that.

| Arguments (ordered) | Type                         | Description         |
| ------------------- | ---------------------------- | ------------------- |
| 0                   | any[]                        | Input array         |
| 1..n                | primitive or object or array | OR conditions level |

- The first argument is the array to be filtered.
- Each argument starting from index 1 is a condition `filter (array 1 2 3) 1 3 5 6 ....`.
  - Condition can be primitives (string, number), [objects](#object) or [arrays](#array) with sub-conditions.
  - When the condition is an object, then all keys and values work as an `AND`.
  - Conditions support infinite nesting of conditions using arrays.
  - The first level of filer arguments works as OR conditions `filter (array 1 2 3) 1 3` equals fo `[1,2,3].filter(x => x === 3 || x === 1)`.
  - The second level of conditions works as `AND` sub-conditions list.
  - The third level of conditions works as `OR` sub-conditions list.
  - Nesting of conditions matches the rule `OR` (the first level of the arguments) -> `AND` -> `OR` -> `AND` -> ...
  - For a better understanding of how to build `AND` queries with objects please check the [object helper](#object) documentation.

**Structure**

```handlebars
<!-- filter query base OR structure -->
{{ filter (array 1 2 3 ... ) c1 c2 c3 ... }}
result: c1 OR c2 OR c3

<!-- filter query base AND structure (the AND conditions described as sub-conditions) -->
{{ filter (array x y z) (array c1 c2 c3) }}
result: items that fit to c1 AND c2 AND c3

<!-- filter query a few OR from several AND conditions -->
{{ filter (array x y z) (array a1 a2 a3) (array b1 b2 b3) (array c1 c2 c3) }}
result: (a1 AND a2 AND a3) OR (b1 AND b2 AND b3) OR (c1 AND c2 AND c3)

<!-- filter with complex nested structure -->
{{ filter (array 1 2 3) (array a1 a2 (array x1 x2) ) (array b1 b2 b3) }}
results: items that fit to (a1 AND a2 AND (x1 OR x2) ) OR (b1 AND b2 AND b3)
```

**Examples**

```handlebars
<!-- Simple OR filter -->
{{filter (array 1 2 3) 1 3}}
result: 1,3

<!-- Simple OR filter -->
{{filter (array 'item1' 'item2' 'item3' 'item4' 'item3') 'item1' 'item2' 'item3'}}
result: item1,item2,item3,item3

<!-- Data bucket get all users with type='item1' -->
{{filter (dataRaw 'Users') (object type='item1')}}

<!-- Data bucket get all users with type='item1' OR type='item2' OR type='item3' -->
{{filter (dataRaw 'Users') (object type='item1') (object type='item2') (object type='item3')}}

<!-- Data bucket get all users with type='item1' AND category='some-category' -->
{{filter (dataRaw 'Users') (object type='item1' category='some-category')}}

<!-- Data bucket get all users with type='item1' OR category='some-category' -->
{{filter (dataRaw 'Users') (array (object type='item1') (object category='some-category'))}}

<!-- Mixed data filter -->
{{filter (array 'item1' 'item2' (object type='type1') (object type='type2')) 'item1' (object type='type2')}}
```

## object

Return an object that can be used in other helpers.

| Parameters (named) | Type | Description                                 |
| ------------------ | ---- | ------------------------------------------- |
| [string]=any       | any  | key=value notation of the object properties |

**Examples**

```handlebars
{{{object type='item1'}}}
result: {type: 'item1'}

{{{object type='item1' category='cat1'}}}
result: {type: 'item1', category: 'cat1'}

{{{object type=(array 1 2 3)}}}
result: {type: [1,2,3]}

{{{object type=(array 1 2 3)}}}
result: {type: [1,2,3]}

{{{object type=(filter (array 1 2 3) 1 3)}}}
result: {type: [1,3]}
```

## sort

Return a sorted array of strings or numbers. To sort array of objects, use the [sortBy](#sortby) helper.

| Arguments (ordered) | Type   | Description                  |
| ------------------- | ------ | ---------------------------- |
| 0                   | []     | Input array                  |
| [1 = asc]           | string | Sort order ('asc' or 'desc') |

**Examples**

```handlebars
{{sort (array 'item2' 'item1' 'item3') 'desc'}}
result: ['item3','item2','item1']

{{sort (array 'item2' 'item1' 'item3')}}
result: ['item1','item2','item3']
```

## sortBy

Return an array of objects sorted by a given key. This helper can be used with data buckets, use the [dataRaw](#dataraw) for that.

| Arguments (ordered) | Type     | Description                     |
| ------------------- | -------- | ------------------------------- |
| 0                   | object[] | Input array of objects          |
| 1                   | string   | Object key to sort the array by |
| [2 = asc]           | string   | Sort order ('asc' or 'desc')    |

**Examples**

```handlebars
{{sortBy (array (object key1=10 key2=20) (object key1=30 key2=30) (object key1=15 key2=25)) 'key1'}}
result: [{"key2": 20, "key1": 10}, {"key2": 25, "key1": 15}, {"key2": 30, "key1": 30}]

{{sortBy (dataRaw 'Users') 'name' 'desc'}}
```

## reverse

Return an array with the elements in reverse order.

| Arguments (ordered) | Type | Description |
| ------------------- | ---- | ----------- |
| 0                   | []   | Input array |

**Examples**

```handlebars
{{reverse (array 'item1' 'item2' 'item3')}}
result: ['item3','item2','item1']
```

## add

Add the numbers passed as parameters to each others. Unrecognized strings passed as arguments will be ignored.

| Arguments (ordered) | Type  | Description                                              |
| ------------------- | ----- | -------------------------------------------------------- |
| 0..n                | any[] | Value of the operandes (can process numbers and strings) |

**Examples**

```handlebars
{{add 1 1}}
result: '2'

{{add '1' '1'}}
result: '2'

{{add '1' 'foo' 1}}
result: '2'
```

## subtract

Subtract the numbers passed as parameters to the first parameter. Unrecognized strings passed as arguments will be ignored.

| Arguments (ordered) | Type  | Description                                              |
| ------------------- | ----- | -------------------------------------------------------- |
| 0..n                | any[] | Value of the operandes (can process numbers and strings) |

**Examples**

```handlebars
{{subtract 2 1}}
result: '1'

{{subtract '2' '1'}}
result: '1'

{{subtract '2' 'foo' 1}}
result: '1'
```

## multiply

Multiply the numbers passed as parameters to each others. Unrecognized strings passed as arguments will be ignored.

| Arguments (ordered) | Type  | Description                                              |
| ------------------- | ----- | -------------------------------------------------------- |
| 0..n                | any[] | Value of the operandes (can process numbers and strings) |

**Examples**

```handlebars
{{multiply 2 3}}
result: '6'

{{multiply '2' '3'}}
result: '6'

{{multiply '2' 'foo' 3}}
result: '6'
```

## divide

Divide the first parameter by the other numbers passed as parameters. Unrecognized strings passed as arguments will be ignored.

| Arguments (ordered) | Type  | Description                                              |
| ------------------- | ----- | -------------------------------------------------------- |
| 0..n                | any[] | Value of the operandes (can process numbers and strings) |

**Examples**

```handlebars
{{divide 4 2}}
result: '2'

{{divide '4' '2'}}
result: '2'

{{divide '4' 'foo' 2}}
result: '2'
```

## modulo

Compute the modulo of the first parameter by the second.

| Arguments (ordered) | Type   | Description                                    |
| ------------------- | ------ | ---------------------------------------------- |
| 0                   | number | First value (can process numbers and strings)  |
| 1                   | number | Second value (can process numbers and strings) |

**Examples**

```handlebars
{{modulo 5 4}}
result: '1'

{{modulo '5' '4'}}
result: '1'

{{modulo '5' 'foo' 4}}
result: '1'
```

## ceil

Ceil the value of the number passed as parameter.

| Arguments (ordered) | Type   | Description                                     |
| ------------------- | ------ | ----------------------------------------------- |
| 0                   | number | Value to ceil (can process numbers and strings) |

**Examples**

```handlebars
{{ceil 1.5}}
result: '2'

{{ceil '1.5'}}
result: '2'
```

## floor

Floor the value of the number passed as parameter.

| Arguments (ordered) | Type   | Description                                      |
| ------------------- | ------ | ------------------------------------------------ |
| 0                   | number | Value to floor (can process numbers and strings) |

**Examples**

```handlebars
{{floor 2.5}}
result: '2'

{{floor '2.5'}}
result: '2'
```

## eq

Verify if two numbers or strings are equal. Returns a boolean.  
Returns false if type of the value not equals.

| Arguments (ordered) | Type             | Description             |
| ------------------- | ---------------- | ----------------------- |
| 0                   | string \| number | First number or string  |
| 1                   | string \| number | Second number or string |

**Examples**

```handlebars
{{#if (eq 55 55)}}
  true
{{/if}}
Result: true

{{#if (eq 55 '55')}}
  true
{{else}}
  false
{{/if}}
Result: false

{{#if (eq 'x1' 'x1')}}
  true
{{/if}}
Result: true
```

## gt

Verify if the first number is greater than the second number. Returns a boolean.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | First number  |
| 1                   | number | Second number |

**Examples**

```handlebars
{{#if (gt 56 55)}}
  true
{{/if}}
Result: true
```

## gte

Verify if the first number is greater than or equal to the second number. Returns a boolean.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | First number  |
| 1                   | number | Second number |

**Examples**

```handlebars
{{#if (gte 55 55)}}
  true
{{/if}}
Result: true
```

## lt

Verify if the first number is lower than the second number. Returns a boolean.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | First number  |
| 1                   | number | Second number |

**Examples**

```handlebars
{{#if (lt 55 56)}}
  true
{{/if}}
Result: true
```

## lte

Verify if the first number is lower than or equal to the second number. Returns a boolean.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | First number  |
| 1                   | number | Second number |

**Examples**

```handlebars
{{#if (lte 55 55)}}
  true
{{/if}}
Result: true
```

## toFixed

Format a number using fixed-point notation.

| Arguments (ordered) | Type   | Description      |
| ------------------- | ------ | ---------------- |
| 0                   | number | A number         |
| 1                   | number | Number of digits |

**Examples**

```handlebars
{{toFixed 1.11111 2}}
Result: 1.11
```

## round

Return the value of a number rounded to the nearest integer.

| Arguments (ordered) | Type   | Description       |
| ------------------- | ------ | ----------------- |
| 0                   | number | A number to round |

**Examples**

```handlebars
{{round 0.499}}
Result: 0
```

## newline

Add a newline `\n`.

**Examples**

```handlebars
{{newline}}
```

## base64

Encode the parameter as base64. This can be used as an inline helper or block helper (see examples below).

| Arguments (ordered) | Type | Description                                            |
| ------------------- | ---- | ------------------------------------------------------ |
| [0]                 | any  | Value to encode (optional when used as a block helper) |

**Examples**

```handlebars
{{base64 'test'}}

{{#base64}}
  firstname,lastname,countryCode
  {{#repeat 10}}
    {{faker 'person.firstName'}},{{faker 'person.lastName'}},{{faker 'address.countryCode'}}
  {{/repeat}}
{{/base64}}
```

> 🛠️ Use our online [base64 encoder/decoder](/tools/base64-encode-decode/) to get a preview of the encoded content and validate a base64 string.

## base64Decode

Decode a base64 string. This can be used as an inline helper or block helper (see examples below).

| Arguments (ordered) | Type   | Description                                                    |
| ------------------- | ------ | -------------------------------------------------------------- |
| [0]                 | string | Base64 string to decode (optional when used as a block helper) |

**Examples**

```handlebars
{{base64Decode 'YWJjZA=='}}

{{#base64Decode}}
  {{body 'base64content'}}
{{/base64Decode}}
```

> 🛠️ Use our online [base64 encoder/decoder](/tools/base64-encode-decode/) to get a preview of the encoded content and validate a base64 string.

## objectId

Create a valid ObjectId. It can generates the ObjectId based on the specified time (in seconds) or from a 12 byte string that will act as a seed. Syntax is based on [bson-objectid package](https://www.npmjs.com/package/bson-objectid).

| Arguments (ordered) | Type             | Description |
| ------------------- | ---------------- | ----------- |
| 0                   | string \| number | Seed        |

**Examples**

```handlebars
{{objectId 1414093117}}
{{objectId '54495ad94c934721ede76d90'}}
```

## includes

Search whether a string can be found in another string and returns the appropriate boolean.

| Arguments (ordered) | Type | Description         |
| ------------------- | ---- | ------------------- |
| 0                   | any  | Data to search into |
| 1                   | any  | Data to search      |

**Examples**

```handlebars
{{includes 'Some data' 'data'}}

result: true
```

## substr

Return a portion of a string starting at the specified index and extending for a given number of characters afterwards.

| Arguments (ordered) | Type | Description    |
| ------------------- | ---- | -------------- |
| 0                   | any  | Starting index |
| [1 = max length]    | any  | Length         |

**Examples**

```handlebars
{{substr 'Some data' 5 4}}

result: 'data'
```

## lowercase

Return the first string parameter lowercased.

| Arguments (ordered) | Type   | Description         |
| ------------------- | ------ | ------------------- |
| 0                   | string | String to lowercase |

**Examples**

```handlebars
{{lowercase 'ABCD'}}

result: 'abcd'
```

## uppercase

Return the first string parameter uppercased.

| Arguments (ordered) | Type   | Description         |
| ------------------- | ------ | ------------------- |
| 0                   | string | String to uppercase |

**Examples**

```handlebars
{{uppercase 'abcd'}}

result: 'ABCD'
```

## split

Split a string and return an array containing the multiples substrings. This helper can be used within handlebars' iterative helpers such as `each`. (Default separator is " ")

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | string | Data to split |
| 1                   | string | Separator     |

**Examples**

```handlebars
{{#each (split '1 2 3 4')}}
  item{{this}},
{{/each}}
result: item1,item2,item3,item4

{{#each (split 'This is my string.')}}
  {{this}},
{{/each}}
result: This,is,my,string,
```

## stringify

Return objects and arrays as a formatted JSON string indented with two spaces. This helper requires to be used with triple curly braces (`{{{stringify ...}}}`) to avoid escaping of the JSON string by Handlebars.

| Arguments (ordered) | Type | Description     |
| ------------------- | ---- | --------------- |
| 0                   | any  | Object or array |

**Examples**

Considering an entering body:

```json
{
  "prop1": "123",
  "prop2": {
    "data": "test"
  }
}
```

```handlebars
{{{stringify (bodyRaw 'prop2')}}}
```

```json
{
  "data": "test"
}
```

## jsonParse

Parse a valid JSON string. The result can be used with other helpers like `each`, `if`, `oneOf`, `lookup`, etc.

| Arguments (ordered) | Type   | Description                |
| ------------------- | ------ | -------------------------- |
| 0                   | string | Valid JSON string to parse |

**Examples**

```handlebars
{{#if (jsonParse 'true')}}
  value
{{/if}}

{{#if (eq (jsonParse '25') 25)}}
  value
{{/if}}

{{oneOf (jsonParse '[5, 56, 98]')}}
result: 5 or 56 or 98

{{lookup (jsonParse '{"data":"test"}') 'data'}}
result: test

<!-- Calling with a query string: ?json={"data":"test"} -->
{{lookup (jsonParse (queryParam 'json')) 'data'}}
result: test
```

## concat

Concatenate multiple strings/numbers together. This helper can concatenate results from other helpers, or be used as a parameter of another helper (see examples below).

| Arguments (ordered) | Type | Description           |
| ------------------- | ---- | --------------------- |
| 0..n                | any  | Values to concatenate |

**Examples**

```handlebars
{{concat 'value1' 2 'value3'}}
{{concat @index (body 'id') 'value3'}}
{{#repeat (concat 1 2 3)}}...{{/repeat}}
```

## indexOf

Return the index of the searched 'data' inside the string. A last parameter (number) can be passed to start the search at a specific index.

| Arguments (ordered) | Type   | Description           |
| ------------------- | ------ | --------------------- |
| 0                   | any    | Data to search into   |
| 1                   | any    | Data to search        |
| [2 = 0]             | number | Search starting index |

**Examples**

```handlebars
{{indexOf 'Some data' 'data' 0}}

result: 5
```

## parseInt

Parse a number from a string.

| Arguments (ordered) | Type   | Description     |
| ------------------- | ------ | --------------- |
| 0                   | string | String to parse |

## padStart

Pads a string with a given string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the start of the string.

| Arguments (ordered) | Type   | Description                                   |
| ------------------- | ------ | --------------------------------------------- |
| 0                   | string | String to pad                                 |
| 1                   | number | pad length                                    |
| [2 = ' ']           | string | Padding character(s) (default to blank space) |

```handlebars
{{padStart '5' 5 '0'}}

result: 00005
```

## padEnd

Pads a string with a given string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the end of the string.

| Arguments (ordered) | Type   | Description                                   |
| ------------------- | ------ | --------------------------------------------- |
| 0                   | string | String to pad                                 |
| 1                   | number | pad length                                    |
| [2 = ' ']           | string | Padding character(s) (default to blank space) |

**Examples**

```handlebars
{{padEnd '5' 5 '0'}}

result: 50000
```

## now

Display the current time in the chosen format. Format syntax is based on [date-fns v2 package format function](https://date-fns.org/v2.30.0/docs/format) and is optional (default to ISO string).

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | string | Date format |

**Examples**

```handlebars
{{now 'yyyy-MM-DD'}}
```

## dateTimeShift

Shift a date by adding the number of `years`, `months`, etc. passed as parameters. The `date` and `format` parameters are optional. The helper will return the current date and time as an ISO string if omitted (`yyyy-MM-ddTHH:mm:ss.SSSxxx`). The formatting uses [date-fns v2 package format function](https://date-fns.org/v2.30.0/docs/format).

| Parameters (named)                      | Type   | Description                |
| --------------------------------------- | ------ | -------------------------- |
| date                                    | string | Date to shift              |
| [format = 'yyyy-MM-ddTHH:mm:ss.SSSxxx'] | string | Format of the shifted date |
| [years = 0]                             | number | Years to shift             |
| [months = 0]                            | number | Months to shift            |
| [days = 0]                              | number | Days to shift              |
| [hours = 0]                             | number | Hours to shift             |
| [minutes = 0]                           | number | Minutes to shift           |
| [seconds = 0]                           | number | Seconds to shift           |

**Examples**

```handlebars
{{dateTimeShift date='2021-01-01' format='yyyy-MM-dd HH:mm:ss' years=1 months=1 days=1 hours=1 minutes=1 seconds=1}}
```

## date

Return a random formatted date (using [date-fns v2 package format function](https://date-fns.org/v2.30.0/docs/format)) between a minimum and a maximum. Uses `faker 'date.between'` to generate the random date.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | string | Starting date |
| 1                   | string | Ending date   |
| 2                   | string | Date format   |

**Examples**

```handlebars
{{date '2020-11-20' '2020-11-25' "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"}}
```

## time

Return a random formatted time (using [date-fns v2 package format function](https://date-fns.org/v2.30.0/docs/format)) between a minimum and a maximum. Uses `faker 'date.between'` to generate the random time.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | Starting time |
| 1                   | number | Ending time   |
| 2                   | string | Time format   |

**Examples**

```handlebars
{{time '09:00' '10:00' 'HH:mm'}}
```

## dateFormat

Return a formatted date (using [date-fns v2 package format function](https://date-fns.org/v2.30.0/docs/format)).

| Arguments (ordered) | Type           | Description    |
| ------------------- | -------------- | -------------- |
| 0                   | string \| Date | Date to format |
| 1                   | string         | Output format  |

**Examples**

```handlebars
{{dateFormat '2021-01-01' 'yyyy'}}
{{dateFormat (faker 'date.recent') 'yyyy'}}
```

## int

Return a random integer. Alias of `faker 'number.int`.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | number | Minimum     |
| 1                   | number | Maximum     |

**Examples**

```handlebars
{{int 0 100}}
```

## float

Return a random float. Alias of `faker 'number.float` with precision = 10.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | number | Minimum     |
| 1                   | number | Maximum     |

**Examples**

```handlebars
{{float 0 100}}
```

## boolean

Return a random boolean. Alias of `faker 'datatype.boolean'`.

**Examples**

```handlebars
{{boolean}}
```

## title

Return a random title. Alias of `faker 'name.prefix'`.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | string | Sex         |

**Examples:**

```handlebars
{{title 'male'}}
```

## firstName

Return a random first name. Alias of `faker 'person.firstName'`.

**Examples:**

```handlebars
{{firstName}}
```

## lastName

Return a random last name. Alias of `faker 'person.lastName'`.

**Examples:**

```handlebars
{{lastName}}
```

## company

Return a random company name. Alias of `faker 'company.companyName'`.

**Examples:**

```handlebars
{{company}}
```

## domain

Return a random domain name. Alias of `faker 'internet.domainName'`.

**Examples:**

```handlebars
{{domain}}
```

## tld

Return a random top level domain. Alias of `faker 'internet.domainSuffix'`.

**Examples:**

```handlebars
{{tld}}
```

## email

Return a random email address. Alias of `faker 'internet.email'`.

**Examples:**

```handlebars
{{email}}
```

## street

Return a random address. Alias of `faker 'location.streetAddress'`.

**Examples:**

```handlebars
{{street}}
```

## city

Return a random city name. Alias of `faker 'location.city'`.

**Examples:**

```handlebars
{{city}}
```

## country

Return a random country name. Alias of `faker 'location.country'`.

**Examples:**

```handlebars
{{country}}
```

## countryCode

Return a random country code. Alias of `faker 'location.countryCode'`.

**Examples:**

```handlebars
{{countryCode}}
```

## zipcode

Return a random zip code. Alias of `faker 'location.zipCode'`.

**Examples:**

```handlebars
{{zipcode}}
```

## postcode

Return a random zip code. Alias of `faker 'location.zipCode'`.

**Examples:**

```handlebars
{{postcode}}
```

## lat

Return a random latitude. Alias of `faker 'location.latitude'`.

**Examples:**

```handlebars
{{lat}}
```

## long

Return a random longitude. Alias of `faker 'location.longitude'`.

**Examples:**

```handlebars
{{long}}
```

## phone

Return a random phone number. Alias of `faker 'phone.number'`.

**Examples:**

```handlebars
{{phone}}
```

## color

Return a random color. Alias of `faker 'color.human'`.

**Examples:**

```handlebars
{{color}}
```

## hexColor

Return a random hexadecimal color code.

**Examples:**

```handlebars
{{hexColor}}
```

## guid

Return a random GUID. Alias of `faker 'string.uuid'`.

**Examples:**

```handlebars
{{guid}}
```

## ipv4

Return a random IP v4. Alias of `faker 'internet.ipv4'`.

**Examples:**

```handlebars
{{ipv4}}
```

## ipv6

Return a random IP v6. Alias of `faker 'internet.ipv6'`.

**Examples:**

```handlebars
{{ipv6}}
```

## lorem

Return random lorem ipsum text. Alias of `faker 'lorem.sentence'`.

| Arguments (ordered) | Type   | Description     |
| ------------------- | ------ | --------------- |
| 0                   | number | Number of words |

**Examples:**

```handlebars
{{lorem 50}}
```
