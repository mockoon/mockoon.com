---
title: Faker.js helpers
meta:
  title: Create dynamic responses with templating Faker.js helpers
  description: Create realistic mock data for your mock API servers with Mockoon's templating system including Faker.js
order: 506
---

# Faker.js helpers

---

Mockoon implements [Faker.js v8.1.0](https://fakerjs.dev/) library by wrapping most of the available helpers.
Faker.js offers lots of helpers: `location.zipCode`, `location.city`, `location.count`, `person.firstName`, `person.lastName`, `number.int`, `number.float`, `internet.avatar`, `internet.email`, etc. Please have a look at [Faker.js documentation](https://fakerjs.dev/) to learn how to use them.

## Usage

All Faker.js helpers must be used with the following syntax: `{{faker 'namespace.method'}}`.
**Examples:**

```js
{{faker 'location.zipCode'}}
{{faker 'location.city'}}
{{faker 'location.county'}}
{{faker 'person.firstName'}}
...
```

Faker.js methods may use two different ways of passing parameters: **ordered arguments** or **option object** (with eventually a depth > 1). Wrapped in a Handlebars helper, this may result in different syntaxes:

- **Ordered arguments**: `{{faker 'namespace.method' arg1 arg2 arg3}}`

```handlebars
{{faker 'number.int' 100}}
<!-- 100 is the max -->
{{faker 'string.alphanumeric' 25}}
```

- **Option object** with **named parameters**: `{{faker 'namespace.method' arg1='value1' arg2='value2'}}` will be translated to an option object `{ arg1: 'value1', arg2: 'value2' }`

```handlebars
{{faker 'number.int' min=10 max=100}}
{{faker 'string.alphanumeric' casing='mixed' length=50}}
```

- **Option object** with **named parameters** and **depth > 1**: `{{faker 'namespace.method' '{arg1: "value1", arg2: { prop1: "value2"}}'}}` will be translated to a complex option object `{ arg1: 'value1', arg2: { prop1: 'value2' } }`. Be sure to **escape** the single or double quotes inside your option string accordingly.

```handlebars
{{faker 'number.int' '{min: 10, max: 100}'}}
{{faker 'string.alphanumeric' '{casing: "lower", length: { min: 1, max: 3}}'}}
```

> 📘 Please check Faker.js documentation to know which syntax to use for each helper.

## Set Faker.js' locale and seed

Faker.js locale and seed can be defined in the application settings:

![fakerjs settings{860x812}](docs-img:settings-faker.png)

The locale and seed can also be set when running your mock using the [CLI's flags](https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md#fakerjs-options) or the [serverless package options](https://github.com/mockoon/mockoon/blob/main/packages/serverless/README.md#options).

> 📝**A note on Faker.js seeding**  
> By providing a seed value, you can generate repeatable **sequences** of fake data. Using seeding will not always generate the same value but rather a predictable sequence.
