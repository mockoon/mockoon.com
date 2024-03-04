---
title: Overview
meta:
  title: How to use global variables
  description: Simulate and mock complex API workflows by sharing data between your mock server routes using global variables
order: 550
---

# Global variables

---

Mockoon offers the possibility to **share data** between your routes using global variables. These variables can be set and accessed using the [`setGlobalVar`](docs:templating/mockoon-helpers#setglobalvar) and [`getGlobalVar`](docs:templating/mockoon-helpers#setglobalvar) helpers at runtime.

## Global variables scope

Global variables are **shared** between **all routes** of an environment. Their values are **reset** when the environment is **stopped or restarted**.

> ⚠️These variables are **not shared between environments**.

## Global variables support

Global variables are available [everywhere templating helpers are supported](docs:templating/overview). However, it makes most sense to use them in the **response body**.

> 💡 While you can use global variables in data buckets, keep in mind that bucket content will be [generated when the server starts](docs:data-buckets/overview#data-buckets-generation), when global variables are not yet set.

## Usage

To set and access global variables, two templating helpers are available.

### Set a global variable

To set a global variable, use the `setGlobalVar` helper. This helper takes two arguments: the variable name and its value. You can **dynamically set the parameters** using other helpers.

Some examples:

```handlebars
{{setGlobalVar 'varName' 'value'}}
{{setGlobalVar 'varName' (bodyRaw 'id')}}
{{setGlobalVar (queryParam 'param1') (bodyRaw 'id')}}
```

> 📘 [Helper documentation](docs:templating/mockoon-helpers#setglobalvar).

### Get a global variable

To get a global variable, use the `getGlobalVar` helper. This helper takes two arguments: the variable name and an optional path. You can **dynamically set the parameters** using other helpers and use the fetched data in other helpers.
Some examples:

```handlebars
{{getGlobalVar 'varname'}}
{{getGlobalVar (bodyRaw 'property')}}
{{getGlobalVar (urlParam 'id')}}

<!-- Using object-path syntax -->
{{getGlobalVar 'varName' 'path.to.property'}}
{{getGlobalVar 'varName' 'deep.property\.with\.dot'}}

<!-- using JSONPath syntax -->
{{getGlobalVar 'varName' '$.array.[*].property'}}

{{#repeat (getGlobalVar 'varname')}}...{{/repeat}}

{{#each (getGlobalVar 'varName')}}...{{/each}}

<!-- Stringify the variable content -->
{{{stringify (getGlobalVar 'varName')}}}
```

> 📘 [Helper documentation](docs:templating/mockoon-helpers#getglobalvar).
