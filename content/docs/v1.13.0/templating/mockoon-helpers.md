---
title: Helpers
meta:
  title: Create dynamic responses with templating helpers
  description: Create dynamic fake data for your mock server with Mockoon's templating helpers
order: 1010
---

# Mockoon templating helpers <!-- omit in toc -->

---

In addition to Handlebars' built-in helpers, Mockoon offers the following helpers:

| Dates                             | Block helpers       | Arrays              |
| --------------------------------- | ------------------- | ------------------- |
| [`now`](#now)                     | [`repeat`](#repeat) | [`array`](#array)   |
| [`dateTimeShift`](#datetimeshift) | [`switch`](#switch) | [`oneOf`](#oneof)   |
| [`date`](#date)                   |                     | [`someOf`](#someof) |
| [`time`](#time)                   |                     |                     |

| Strings                 | Numbers           | Misc                    |
| ----------------------- | ----------------- | ----------------------- |
| [`concat`](#concat)     | [`int`](#int)     | [`newline`](#newline)   |
| [`indexOf`](#indexof)   | [`float`](#float) | [`base64`](#base64)     |
| [`includes`](#includes) |                   | [`objectId`](#objectid) |
| [`substr`](#substr)     |                   | [`setVar`](#setvar)     |

| [Faker.js](docs:templating/fakerjs-helpers) aliases |                               |                         |
| --------------------------------------------------- | ----------------------------- | ----------------------- |
| [`boolean`](#boolean)                               | [`street`](#street)           | [`phone`](#phone)       |
| [`title`](#title)                                   | [`city`](#city)               | [`color`](#color)       |
| [`firstName`](#firstname)                           | [`country`](#country)         | [`hexColor`](#hexcolor) |
| [`lastName`](#lastname)                             | [`countryCode`](#countrycode) | [`guid`](#guid)         |
| [`company`](#company)                               | [`zipcode`](#zipcode)         | [`ipv4`](#ipv4)         |
| [`domain`](#domain)                                 | [`postcode`](#postcode)       | [`ipv6`](#ipv6)         |
| [`tld`](#tld)                                       | [`lat`](#lat)                 | [`lorem`](#lorem)       |
| [`email`](#email)                                   | [`long`](#long)               |                         |

## `repeat`

Repeat the block content a random number of times if two arguments are provided, or a fixed amount of time if only one argument is provided. Set the `comma` parameter to `false` (default to `true`) to prevent the insertion of new lines and commas by the helper.

| Parameters/arguments | Type    | Description        |
| -------------------- | ------- | ------------------ |
| [0]                  | number  | Minimum items      |
| 1                    | number  | Maximum items      |
| [comma=true]         | boolean | Add trailing comma |

**Examples**

```handlebars
{{# repeat 5 10 comma=true}}test{{/ repeat}}

// result
test,
test,
test,
test,
test
```

## `switch`

Select some content depending on a variable. Behaves like a regular switch.

| Arguments (ordered) | Type | Description                                      |
| ------------------- | ---- | ------------------------------------------------ |
| 0                   | any  | Value against which the switch matches the cases |

**Examples**

```handlebars
{{# switch (urlParam 'id')}}
  {{# case "1" }}"John"{{/ case }}
  {{# case "2" }}"Jack"{{/ case }}
  {{# default }}"Peter"{{/ default }}
{{# /}}
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

// result
item2
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

// result
item1,item2

// use triple curly braces to avoid character escaping
{{{someOf (array 'item1' 'item2' 'item3') x y true}}}

// result
item1,item2
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

{{# base64}}
  firstname,lastname,countryCode
  {{# repeat 10 }}
    {{ faker 'name.firstName' }},{{ faker 'name.lastName' }},{{ faker 'address.countryCode' }}
  {{/ repeat}}
{{/ base64}}
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

Set a variable to be used later in the template. The value can be the result of another helper. To use it elsewhere in the template, refer to the variable with its name: `{{varname}}` or `{{@root.varname}}`. The variable can also be used as a helper parameter: `{{#repeat varname}}...{{/repeat}}`. You can also declare a variable inside block helpers like `repeat`. Accessing such variables requires to prefix them with `@` (see examples below).

| Arguments (ordered) | Type   | Description    |
| ------------------- | ------ | -------------- |
| 0                   | string | Variable name  |
| 1                   | any    | Variable value |

**Examples**

```handlebars
{{setVar 'varname' 'value'}}
{{setVar 'varname' (body 'id')}}

// usage
{{varname}}
{{@root.varname}}
{{#repeat varname}}...{{/repeat}}

// declare a variable in a block helper
{{# repeat 5}}
  {{setVar 'random' (oneOf (array '1' '2' '3'))}}
  {{@random}}
{{/ repeat}}
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
{{dateTimeShift date='2021-01-01' format='yyyy-MM-dd HH:mm:ss' years=1 months=1 days=1 hours=1 minutes=1 seconds=1}}
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

// result
5
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

// result
true
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

// result
'data'
```

## `int`

Return a random integer. Alias of `faker 'random.number`.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | number | Minimum     |
| 1                   | number | Maximum     |

**Examples**

```handlebars
{{int 0 100}}
```

## `float`

Return a random float. Alias of `faker 'random.number` with precision = 10.

| Arguments (ordered) | Type   | Description |
| ------------------- | ------ | ----------- |
| 0                   | number | Minimum     |
| 1                   | number | Maximum     |

**Examples**

```handlebars
{{float 0 100}}
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

## `boolean`

Return a random boolean. Alias of `faker 'random.boolean'`.

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

Return a random GUID. Alias of `faker 'random.uuid'`.

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
