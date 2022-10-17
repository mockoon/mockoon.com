---
title: Faker.js helpers
meta:
  title: Create dynamic responses with templating Faker.js helpers
  description: Create realistic mock data for your mock API servers with Mockoon's templating system including Faker.js
order: 1030
---

# Faker.js helpers

---

Mockoon implements [Faker.js v6.3.1](https://fakerjs.dev/) library by wrapping most of the available helpers.
Faker.js offers lots of helpers: `address.zipCode`, `address.city`, `address.cityPrefix`, `name.firstName`, `name.lastName`, `datatype.number`, `datatype.float`, `internet.avatar`, `internet.email`, etc. Please have a look at [Faker.js documentation](https://fakerjs.dev/) to learn how to use them.

## Usage

All Faker.js helpers must be used with the following syntax: `{{faker 'namespace.method'}}`.
**Examples:**

```js
{{faker 'address.zipCode'}}
{{faker 'address.city'}}
{{faker 'address.cityPrefix'}}
{{faker 'name.firstName'}}
...
```

Faker.js methods may use two different ways of passing parameters: ordered arguments or options objects. Wrapped in Handlebars helpers, this may result in two different ways of using them:

```js
// named parameters
{{faker 'datatype.number' min=0 max=25}}

// ordered arguments (here count=25)
{{faker 'random.alphaNumeric' 25}}
```

## Set Faker.js' locale and seed

Faker.js locale and seed can be defined in the settings:

![fakerjs settings{860x754}](docs-img:settings-faker.png)
