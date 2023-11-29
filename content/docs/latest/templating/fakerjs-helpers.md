---
title: Faker.js helpers
meta:
  title: Create dynamic responses with templating Faker.js helpers
  description: Create realistic mock data for your mock API servers with Mockoon's templating system including Faker.js
order: 540
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

Faker.js methods may use two different ways of passing parameters: ordered arguments or options objects. Wrapped in Handlebars helpers, this may result in two different ways of using them:

```js
// named parameters
{{faker 'number.int' min=0 max=25}}

// ordered arguments (here count=25)
{{faker 'string.alphanumeric' 25}}
```

## Set Faker.js' locale and seed

Faker.js locale and seed can be defined in the settings:

![fakerjs settings{860x770}](docs-img:settings-faker.png)

> 📝**A note on Faker.js seeding**  
> By providing a seed value, you can generate repeatable **sequences** of fake data. Using seeding will not always generate the same value but rather a predictable sequence.
