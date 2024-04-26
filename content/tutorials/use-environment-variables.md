---
title: Access environment variables in your templates
excerpt: Learn how to access environment variables in your mock server templates to avoid exposing your API keys.
meta:
  title: Access environment variables in your templates
  description: Learn how to access environment variables in your mock server templates to avoid exposing your API keys.
image: tutorial-environment-variables.png
imageAlt: article title with env variable linked to HTTP verbs
imageWidth: 1200
imageHeight: 400
order: 58
---

In this tutorial, we will learn how to access **environment variables** in your mock server routes using the `getEnvVar` templating helper. It allows you to **avoid exposing your API keys** and other sensitive parameters in your mock server configuration and to easily manage your configuration across different environments.

## Scope and support

Environment variables are available [everywhere templating helpers are supported](docs:templating/overview): response body, rules, etc.

They are available in all your environments, in the desktop application, or when using the [CLI](/cli/) or the [serverless library](/serverless/).

## 1. Access environment variables

To access an environment variable in your templates, use the `getEnvVar` helper. By default, only the environment **variables prefixed with `MOCKOON_`** are available. You can access the variable in your templates using the `getEnvVar` helper with or without the prefix. If you omit the prefix, the helper will automatically add it:

```handlebars
{{getEnvVar 'MOCKOON_MY_VARIABLE'}}
{{getEnvVar 'MY_VARIABLE'}}
```

> 📘 Head over to the [environment variables documentation](/docs/latest/variables/environment-variables/) where you will find more examples.

## 2. Change the prefix

You can **change the prefix** or **remove it** entirely in the desktop application settings:

![desktop application settings showing the prefix input{860x812}](/images/tutorials/use-environment-variables/settings-environment-variables-prefix.png)

You can also modify the prefix when running your mock with the CLI by using the `--env-vars-prefix` flag:

```bash
mockoon-cli start --env-vars-prefix MY_PREFIX_ --data ./mock.json
```

Finally, the prefix can also be changed when using the serverless library by using the `envVarsPrefix` option:

```javascript
const mockoonServerless = new mockoon.MockoonServerless(mockEnv, {
  envVarsPrefix: 'MY_PREFIX_'
});
```

> ⚠️ Removing the prefix will make **all the environment variables** accessible in your templates and could expose sensitive information.

## 3. An example use case: authentication token

Let's say you need Mockoon to forward some calls to a third-party API using the [proxy mode](docs:server-configuration/proxy-mode). This API requires an authentication token, and you don't want to store it in your mock server configuration.

You can store this token in an environment variable and access it in Mockoon using the helper.

### Create an environment variable

In your terminal, set the environment variable:

```bash
export MOCKOON_API_TOKEN=abcd1234
```

> 💡 Do not forget to **restart the application** to reflect your operating system variable changes.

### Access the environment variable and send it to the third party API

In your mock server, we will enable the proxy mode, point to the correct API endpoint (here, the endpoint is a fictive one), and use the `getEnvVar` helper to access the token and add it to an `Authorization` header:

![view of Mockoon proxy settings showing an url and an authorization header{977x376}](/images/tutorials/use-environment-variables/access-environment-variable-authorization-header.png)

You can see that we are using the `getEnvVar` helper to access the `MOCKOON_API_TOKEN` environment variable and add it to the `Authorization` header:

```handlebars
Bearer {{getEnvVar 'MOCKOON_API_TOKEN'}}
```

Now, when you send a request to a non-existing route, for example, `GET http://localhost:3002/users`, Mockoon will forward it to the third-party API with the correct `Authorization` header.

To simulate this, we will point the proxy to another Mockoon instance running on `http://localhost:3001` instead of `https://api.service.com`:

![view of Mockoon proxy settings showing an url and an authorization header{982x358}](/images/tutorials/use-environment-variables/proxy-mode-local-mock.png)

After making a call to our original mock server running on `http://localhost:3002`, we can inspect the forwarded request in the other instance and verify that the `Authorization` header is correctly set:

![view of the forwarded request showing the authorization header{1097x473}](/images/tutorials/use-environment-variables/inspect-forwarded-call-authorization-header.png)
