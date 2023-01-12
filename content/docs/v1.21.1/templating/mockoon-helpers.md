---
title: Helpers
meta:
  title: Create dynamic responses with templating helpers
  description: "Create dynamic fake data for your mock server with Mockoon's templating helpers. All formats are supported: JSON, CSV, HTML, etc."
order: 1010
---

# Mockoon templating helpers

---

In addition to Handlebars' built-in helpers, Mockoon offers the following helpers:

| Block helpers       | Data buckets          | Arrays              |
| ------------------- | --------------------- | ------------------- |
| [`repeat`](#repeat) | [`data`](#data)       | [`array`](#array)   |
| [`switch`](#switch) | [`dataRaw`](#dataraw) | [`oneOf`](#oneof)   |
|                     |                       | [`someOf`](#someof) |
|                     |                       | [`join`](#join)     |
|                     |                       | [`slice`](#slice)   |
|                     |                       | [`len`](#len)       |
|                     |                       |                     |

| Math                    |                       |
| ----------------------- | --------------------- |
| [`add`](#add)           | [`eq`](#eq)           |
| [`subtract`](#subtract) | [`gt`](#gt)           |
| [`multiply`](#multiply) | [`gte`](#gte)         |
| [`divide`](#divide)     | [`lt`](#lt)           |
| [`modulo`](#modulo)     | [`lte`](#lte)         |
| [`ceil`](#ceil)         | [`toFixed`](#tofixed) |
| [`floor`](#floor)       | [`round`](#round)     |

| Strings                   |                           | Dates                             | Misc                            |
| ------------------------- | ------------------------- | --------------------------------- | ------------------------------- |
| [`includes`](#includes)   | [`stringify`](#stringify) | [`now`](#now)                     | [`newline`](#newline)           |
| [`substr`](#substr)       | [`concat`](#concat)       | [`dateTimeShift`](#datetimeshift) | [`base64`](#base64)             |
| [`lowercase`](#lowercase) | [`indexOf`](#indexof)     | [`date`](#date)                   | [`base64Decode`](#base64decode) |
| [`uppercase`](#uppercase) | [`parseInt`](#parseint)   | [`time`](#time)                   | [`objectId`](#objectid)         |
| [`split`](#split)         |                           |                                   | [`setVar`](#setvar)             |

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

## `repeat`

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

## `switch`

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

## `data`

Get the **stringified** value at a given `path` from a [data bucket](docs:data-buckets/overview) selected by **ID or name**. This helper is designed to retrieve data to be served in a response. To reuse the retrieved data with other helpers (`each`, `if`, etc.), use the [`dataRaw` helper](#dataraw) below.

- The `path` takes the following form `key.0.key.5.key` and is based on the [**object-path** library](https://www.npmjs.com/package/object-path). Properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.  
  Please note that a value can be retrieved at the path if the data bucket contains valid JSON.
- Full objects or arrays can be retrieved by the helper and will be stringified.
- The full data bucket content can be fetched when the `path` is omitted (`{{data 'ID'}}`).

| Arguments (ordered) | Type   | Description                      |
| ------------------- | ------ | -------------------------------- |
| 0                   | string | ID or name of the daa bucket     |
| 1                   | string | Path to the data bucket property |

**Examples**

```handlebars
{{data 'abcd'}}
{{data 'abcd' 'path.to.property'}}
{{data 'abcd' 'deep.property\.with\.dot'}}
```

## `dataRaw`

Get the **raw** value (array, object, etc.) at a given `path` from a [data bucket](docs:data-buckets/overview) selected by **ID or name**. This "raw" helper is designed to work with other helpers (`each`, `if`, etc.). To directly use the retrieved data in the response, use [data buckets direct linking](docs:data-buckets/using-data-buckets#referencing-in-a-route-response) or the [`data` helper](#data) above.

- The `path` takes the following form `key.0.key.5.key` and is based on the [**object-path** library](https://www.npmjs.com/package/object-path). Properties containing dots are supported by escaping the dots: `key.key\.with\.dot`.  
  Please note that a value can be retrieved at the path if the data bucket contains valid JSON.
- Primitives and data structures can be retrieved by the helper and reused in other helpers (see example below).
- The full data bucket content (array, object, etc.) can be fetched when the `path` is omitted (`{{dataRaw 'ID'}}`).

| Arguments (ordered) | Type   | Description                      |
| ------------------- | ------ | -------------------------------- |
| 0                   | string | ID or name of the daa bucket     |
| 1                   | string | Path to the data bucket property |

**Examples**

```handlebars
{{dataRaw 'abcd'}}
{{dataRaw 'abcd' 'path.to.property'}}
{{dataRaw 'abcd' 'deep.property\.with\.dot'}}

{{#each (dataRaw 'path.to.array.property')}}
  value
{{/each}}

{{#if (dataRaw 'path.to.boolean.property')}}
  value
{{/if}}
```

## `array`

Create an array from the given items. This helper is mostly used with the following helpers: `oneOf`, `someOf`.

| Arguments (ordered) | Type | Description                      |
| ------------------- | ---- | -------------------------------- |
| 0..n                | any  | Value used to populate the array |

**Examples**

```handlebars
{{array 'item1' 'item2' 'item3'}}
```

## `oneOf`

Select a random item in the array passed in parameters.

| Arguments (ordered) | Type  | Description     |
| ------------------- | ----- | --------------- |
| 0                   | any[] | Array of values |

**Examples**

```handlebars
{{oneOf (array 'item1' 'item2' 'item3')}}
result: item2
```

## `someOf`

Return a random number of items from the array passed in parameters, concatenated as a string. Use it with triple curly braces to get a JSON representation.

| Arguments (ordered) | Type    | Description             |
| ------------------- | ------- | ----------------------- |
| 0                   | any[]   | Array of values         |
| 1                   | number  | Minimum number of items |
| 2                   | number  | Maximum number of items |
| [3 = false]         | boolean | Get result as an array  |

**Examples**

```handlebars
{{someOf (array 'item1' 'item2' 'item3') 1 2}}
result: item1,item2

<!-- Use triple curly braces to avoid character escaping -->
{{{someOf (array 'item1' 'item2' 'item3') x y true}}}
result: item1,item2
```

## `join`

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

## `slice`

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

## `len`

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

## `add`

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

## `subtract`

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

## `multiply`

Multiply the numbers passed as parameters to each others. Unrecognized strings passed as arguments will be ignored.
| Arguments (ordered) | Type | Description |
| ------------------- | ----- | -------------------------------------------------------- |
| 0..n | any[] | Value of the operandes (can process numbers and strings) |

**Examples**

```handlebars
{{multiply 2 3}}
result: '6'

{{multiply '2' '3'}}
result: '6'

{{multiply '2' 'foo' 3}}
result: '6'
```

## `divide`

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

## `modulo`

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

## `ceil`

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

## `floor`

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

## `eq`

Verify if two numbers are equal. Returns a boolean.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | First number  |
| 1                   | number | Second number |

**Examples**

```handlebars
{{#if (eq 55 55}}
  true
{{/if}}
Result: true
```

## `gt`

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

## `gte`

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

## `lt`

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

## `lte`

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

## `toFixed`

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

## `round`

Return the value of a number rounded to the nearest integer.

| Arguments (ordered) | Type   | Description       |
| ------------------- | ------ | ----------------- |
| 0                   | number | A number to round |

**Examples**

```handlebars
{{round 0.499}}
Result: 0
```

## `newline`

Add a newline `\n`.

**Examples**

```handlebars
{{newline}}
```

## `base64`

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
    {{faker 'name.firstName'}},{{faker 'name.lastName'}},{{faker
      'address.countryCode'
    }}
  {{/repeat}}
{{/base64}}
```

## `base64Decode`

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

## `objectId`

Create a valid ObjectId. It can generates the ObjectId based on the specified time (in seconds) or from a 12 byte string that will act as a seed. Syntax is based on [bson-objectid package](https://www.npmjs.com/package/bson-objectid).

| Arguments (ordered) | Type             | Description |
| ------------------- | ---------------- | ----------- |
| 0                   | string \| number | Seed        |

**Examples**

```handlebars
{{objectId 1414093117}}
{{objectId '54495ad94c934721ede76d90'}}
```

## `setVar`

Set a variable to be used later in the template. The value can be the result of another helper. To use it elsewhere in the template, refer to the variable with its name prefixed with an `@`: `{{@varname}}`. The variable can also be used as a helper parameter: `{{#repeat @varname}}...{{/repeat}}`.
Variables declared in a block helper will be scoped to the block and unavailable outside.

| Arguments (ordered) | Type   | Description    |
| ------------------- | ------ | -------------- |
| 0                   | string | Variable name  |
| 1                   | any    | Variable value |

**Examples**

```handlebars
{{setVar 'varname' 'value'}}
{{setVar 'varname' (body 'id')}}

usage:
{{@varname}}
{{#repeat @varname}}...{{/repeat}}

declare a variable in a block helper:
{{#repeat 5}}
  {{setVar 'random' (oneOf (array '1' '2' '3'))}}
  {{@random}}
{{/repeat}}

{{setVar 'myArray' (array '1' '2' '3')}}
{{#each @myArray}}
  {{setVar 'eachIndex' @index}}
  {{@eachIndex}}
{{/repeat}}
```

## `includes`

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

## `substr`

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

## `lowercase`

Return the first string parameter lowercased.

| Arguments (ordered) | Type   | Description         |
| ------------------- | ------ | ------------------- |
| 0                   | string | String to lowercase |

**Examples**

```handlebars
{{lowercase 'ABCD'}}

result: 'abcd'
```

## `uppercase`

Return the first string parameter uppercased.

| Arguments (ordered) | Type   | Description         |
| ------------------- | ------ | ------------------- |
| 0                   | string | String to uppercase |

**Examples**

```handlebars
{{uppercase 'abcd'}}

result: 'ABCD'
```

## `split`

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

## `stringify`

Return objects and arrays as a formatted JSON string indented with two spaces.

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

## `concat`

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

## `indexOf`

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

## `parseInt`

Parse a number from a string.

| Arguments (ordered) | Type   | Description     |
| ------------------- | ------ | --------------- |
| 0                   | string | String to parse |

**Examples**

```handlebars
{{parseInt '10'}}
```

## `now`

Display the current time in the chosen format. Format syntax is based on [date-fns package (v2)](https://date-fns.org/v2.11.1/docs/format) and is optional (default to ISO string).

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | string | Date format |

**Examples**

```handlebars
{{now 'YYYY-MM-DD'}}
```

## `dateTimeShift`

Shift a date by adding the number of `years`, `months`, etc. passed as parameters. The `date` and `format` parameters are optional. The helper will return the current date and time as an ISO string if omitted (`yyyy-MM-ddTHH:mm:ss.SSSxxx`).

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
{{dateTimeShift
  date='2021-01-01'
  format='yyyy-MM-dd HH:mm:ss'
  years=1
  months=1
  days=1
  hours=1
  minutes=1
  seconds=1
}}
```

## `date`

Return a random formatted (using [date-fns package format](https://date-fns.org/docs/format)) date between a minimum and a maximum. Uses `faker 'date.between'` to generate the random date.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | Starting date |
| 1                   | number | Ending date   |
| 2                   | string | Date format   |

**Examples**

```handlebars
{{date '2020-11-20' '2020-11-25' "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"}}
```

## `time`

Return a random formatted (using [date-fns package format](https://date-fns.org/docs/format)) time between a minimum and a maximum. Uses `faker 'date.between'` to generate the random time.

| Arguments (ordered) | Type   | Description   |
| ------------------- | ------ | ------------- |
| 0                   | number | Starting time |
| 1                   | number | Ending time   |
| 2                   | string | Time format   |

**Examples**

```handlebars
{{time '09:00' '10:00' 'HH:mm'}}
```

## `int`

Return a random integer. Alias of `faker 'datatype.number`.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | number | Minimum     |
| 1                   | number | Maximum     |

**Examples**

```handlebars
{{int 0 100}}
```

## `float`

Return a random float. Alias of `faker 'datatype.number` with precision = 10.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | number | Minimum     |
| 1                   | number | Maximum     |

**Examples**

```handlebars
{{float 0 100}}
```

## `boolean`

Return a random boolean. Alias of `faker 'datatype.boolean'`.

**Examples**

```handlebars
{{boolean}}
```

## `title`

Return a random title. Alias of `faker 'name.title'`.

**Examples:**

```handlebars
{{title}}
```

## `firstName`

Return a random first name. Alias of `faker 'name.firstName'`.

**Examples:**

```handlebars
{{firstName}}
```

## `lastName`

Return a random last name. Alias of `faker 'name.lastName'`.

**Examples:**

```handlebars
{{lastName}}
```

## `company`

Return a random company name. Alias of `faker 'company.companyName'`.

**Examples:**

```handlebars
{{company}}
```

## `domain`

Return a random domain name. Alias of `faker 'internet.domainName'`.

**Examples:**

```handlebars
{{domain}}
```

## `tld`

Return a random top level domain. Alias of `faker 'internet.domainSuffix'`.

**Examples:**

```handlebars
{{tld}}
```

## `email`

Return a random email address. Alias of `faker 'internet.email'`.

**Examples:**

```handlebars
{{email}}
```

## `street`

Return a random address. Alias of `faker 'address.streetAddress'`.

**Examples:**

```handlebars
{{street}}
```

## `city`

Return a random city name. Alias of `faker 'address.city'`.

**Examples:**

```handlebars
{{city}}
```

## `country`

Return a random country name. Alias of `faker 'address.country'`.

**Examples:**

```handlebars
{{country}}
```

## `countryCode`

Return a random country code. Alias of `faker 'address.countryCode'`.

**Examples:**

```handlebars
{{countryCode}}
```

## `zipcode`

Return a random zip code. Alias of `faker 'address.zipCode'`.

**Examples:**

```handlebars
{{zipcode}}
```

## `postcode`

Return a random zip code. Alias of `faker 'address.zipCode'`.

**Examples:**

```handlebars
{{postcode}}
```

## `lat`

Return a random latitude. Alias of `faker 'address.latitude'`.

**Examples:**

```handlebars
{{lat}}
```

## `long`

Return a random longitude. Alias of `faker 'address.longitude'`.

**Examples:**

```handlebars
{{long}}
```

## `phone`

Return a random phone number. Alias of `faker 'phone.phoneNumber'`.

**Examples:**

```handlebars
{{phone}}
```

## `color`

Return a random color. Alias of `faker 'commerce.color'`.

**Examples:**

```handlebars
{{color}}
```

## `hexColor`

Return a random hexadecimal color code.

**Examples:**

```handlebars
{{hexColor}}
```

## `guid`

Return a random GUID. Alias of `faker 'datatype.uuid'`.

**Examples:**

```handlebars
{{guid}}
```

## `ipv4`

Return a random IP v4. Alias of `faker 'internet.ip'`.

**Examples:**

```handlebars
{{ipv4}}
```

## `ipv6`

Return a random IP v6. Alias of `faker 'internet.ipv6'`.

**Examples:**

```handlebars
{{ipv6}}
```

## `lorem`

Return random lorem ipsum text. Alias of `faker 'lorem.sentence'`.

| Arguments (ordered) | Type   | Description     |
| ------------------- | ------ | --------------- |
| 0                   | number | Number of words |

**Examples:**

```handlebars
{{lorem 50}}
```
