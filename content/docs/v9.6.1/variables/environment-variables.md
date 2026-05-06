---
title: Environment variables
meta:
  title: How to access environment variables
  description: Avoid exposing your API keys and certificates by accessing environment variables in your mock server routes
order: 552
---

# Environment variables

---

Mockoon offers the possibility to access **environment variables** in your templates using the [`getEnvVar`](docs:templating/mockoon-variables-helpers#getenvvar) helper. This allows you to avoid exposing your API keys and certificates in your mock server configuration.

## Environment variables support

Environment variables are accessible [everywhere templating helpers are supported](docs:templating/overview).

## Default prefix

By default, only the environment variables prefixed with `MOCKOON_` are available, for example, `MOCKOON_MY_VARIABLE`. You can access the variable in your templates using the `getEnvVar` helper:

```handlebars
{{getEnvVar 'MOCKOON_MY_VARIABLE'}}
```

> 📘 [Helper documentation](docs:templating/mockoon-variables-helpers#getenvvar).

## Changing or removing the prefix

You can change the prefix or remove it entirely in the application settings:

![application settings modal with the prefix input highlighted{860x812}](docs-img:settings-environment-variables-prefix.png)

Removing the prefix will make **all the environment variables** accessible in your templates.

> 💡 Both the [CLI](https://github.com/mockoon/mockoon/blob/main/packages/cli/README.md#customize-the-environment-variables-prefix) and the [serverless library](https://github.com/mockoon/mockoon/blob/main/packages/serverless/README.md#options) have specific options to customize the prefix.
